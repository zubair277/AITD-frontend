import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const SITE_ROOT = path.join(process.cwd(), 'public', 'site')
const DEFAULT_DOMAIN = 'mastersunion.org'

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
}

const assetFallbackExts = new Set([
  '.js',
  '.css',
  '.map',
  '.json',
  '.svg',
  '.xml',
  '.txt',
  '.webmanifest',
])

function listDomains() {
  return fs
    .readdirSync(SITE_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.includes('.'))
    .map((d) => d.name)
}

function isInsideRoot(targetPath) {
  const rel = path.relative(SITE_ROOT, targetPath)
  return !rel.startsWith('..') && !path.isAbsolute(rel)
}

async function existsFile(p) {
  try {
    const st = await fsp.stat(p)
    return st.isFile()
  } catch {
    return false
  }
}

async function existsDir(p) {
  try {
    const st = await fsp.stat(p)
    return st.isDirectory()
  } catch {
    return false
  }
}

function normalizePathname(urlPath = '/') {
  let p = decodeURIComponent(urlPath)
  if (!p.startsWith('/')) p = `/${p}`
  return p.replace(/\\+/g, '/')
}

function stripSitePrefix(pathname) {
  if (pathname === '/site') return '/'
  if (pathname.startsWith('/site/')) return pathname.slice('/site'.length)
  return pathname
}

function shouldBypass(pathname) {
  if (pathname === '/') return true
  return (
    pathname.startsWith('/@vite') ||
    pathname.startsWith('/@react-refresh') ||
    pathname.startsWith('/src/') ||
    pathname.startsWith('/node_modules/') ||
    pathname.startsWith('/assets/')
  )
}

async function resolveMirrorPath(pathname, domains) {
  const clean = normalizePathname(stripSitePrefix(pathname)).replace(/\/$/, '') || '/'
  const rel = (clean === '/' ? `/${DEFAULT_DOMAIN}/index.html` : clean).replace(/^\//, '')
  const ext = path.extname(rel).toLowerCase()

  const candidates = [path.join(SITE_ROOT, rel)]
  if (!ext) {
    candidates.push(path.join(SITE_ROOT, `${rel}.html`))
    candidates.push(path.join(SITE_ROOT, rel, 'index.html'))
  }

  const firstSegment = rel.split('/')[0] || ''
  const isDomainPrefixed = domains.includes(firstSegment)
  if (!isDomainPrefixed) {
    candidates.push(path.join(SITE_ROOT, DEFAULT_DOMAIN, rel))
    if (!ext) {
      candidates.push(path.join(SITE_ROOT, DEFAULT_DOMAIN, `${rel}.html`))
      candidates.push(path.join(SITE_ROOT, DEFAULT_DOMAIN, rel, 'index.html'))
    }
  }

  if (ext && assetFallbackExts.has(ext)) {
    const noExtRel = rel.slice(0, -ext.length)
    candidates.push(path.join(SITE_ROOT, `${noExtRel}.html`))
    if (!isDomainPrefixed) {
      candidates.push(path.join(SITE_ROOT, DEFAULT_DOMAIN, `${noExtRel}.html`))
    }
  }

  for (const candidate of candidates) {
    const normalized = path.normalize(candidate)
    if (!isInsideRoot(normalized)) continue

    if (await existsFile(normalized)) {
      return { filePath: normalized, requestedExt: ext, rel }
    }

    if (await existsDir(normalized)) {
      const indexFile = path.join(normalized, 'index.html')
      if (await existsFile(indexFile)) {
        return { filePath: indexFile, requestedExt: ext, rel }
      }
    }
  }

  return null
}

function detectContentType(filePath, requestedExt) {
  if (requestedExt && CONTENT_TYPES[requestedExt]) return CONTENT_TYPES[requestedExt]
  return CONTENT_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream'
}

function rewriteHtml(html, domains, currentDomain) {
  let out = html
  for (const domain of domains) {
    const esc = domain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    out = out.replace(new RegExp(`https://${esc}/`, 'gi'), `/${domain}/`)
    out = out.replace(new RegExp(`http://${esc}/`, 'gi'), `/${domain}/`)
    out = out.replace(new RegExp(`//${esc}/`, 'gi'), `/${domain}/`)
  }

  // Keep root-relative links inside the mirrored default domain.
  out = out.replace(/\b(href|src|action|poster)=(["'])\/(?!\/)/gi, `$1=$2/${currentDomain}/`)

  // Replace the mirrored MU header logo with the user's custom logo.
  out = out.replace(
    /(?:\.\.\/|\.\.\.\/)?files\.mastersunion\.link\/resources\/animateds\/logoanimationblack\.gif/gi,
    '/images/aitd%20logo.png',
  )
  out = out.replace(
    /https?:\/\/files\.mastersunion\.link\/resources\/animateds\/logoanimationblack\.gif/gi,
    '/images/aitd%20logo.png',
  )

  // Home hero: replace background images with the user's custom background.
  out = out.replace(
    /<img\s+src="[^"]+"\s+fetchpriority="high"\s+class="bgHeroImage\s*mob-hide"\s+alt="[^"]*">/i,
    '<img src="/images/aitd-bg.jpeg" fetchpriority="high" class="bgHeroImage mob-hide" alt="" aria-hidden="true">',
  )
  out = out.replace(
    /<img\s+src="[^"]+"\s+fetchpriority="high"\s+class="bgHeroImage\s*"\s+alt="mobileHomepageBackground">/i,
    '<img src="/images/aitd-bg.jpeg" fetchpriority="high" class="bgHeroImage" alt="" aria-hidden="true">',
  )

  // Home hero: remove accreditation logos block permanently.
  out = out.replace(/<div class="muHeroLogos">[\s\S]*?<\/div>/i, '')

  // Home hero: replace heading text only.
  out = out.replace(
    /<h1 class="homeheroHeading">[\s\S]*?<\/h1>/i,
    '<h1 class="homeheroHeading">AITD MBA – Where Future CEOs and Founders are built</h1>',
  )

  const logoSizeStyle = `<style id="aitd-logo-size-override">
  .muHeroLogos {
    display: none !important;
    visibility: hidden !important;
  }

  /* Remove top desktop strip and make the main nav row occupy that space */
  .topHeader .upperHeader {
    display: none !important;
  }

  .topHeader .belowHeader {
    margin-top: 0 !important;
    min-height: 56px;
    display: flex;
    align-items: center;
  }

  .topHeader {
    top: 0 !important;
  }

  .topHeader .menuLogo,
  .mobileHeader .menuLogo,
  .topHeader .logo {
    width: 260px !important;
    min-width: 260px !important;
    max-width: 260px !important;
    overflow: visible !important;
    display: inline-flex;
    align-items: center;
  }

  .topHeader .menuLogo img[src*="aitd%20logo"],
  .topHeader .menuLogo img[src*="aitd logo"],
  .mobileHeader .menuLogo img[src*="aitd%20logo"],
  .mobileHeader .menuLogo img[src*="aitd logo"],
  .topHeader .logo img[src*="aitd%20logo"],
  .topHeader .logo img[src*="aitd logo"] {
    width: 260px !important;
    max-width: 260px !important;
    height: auto !important;
    object-fit: contain;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    transform: none !important;
    opacity: 1 !important;
  }

  .homeHeroSection .homeheroHeading {
    font-size: clamp(44px, 5.8vw, 88px) !important;
    line-height: 1.05 !important;
    max-width: 1120px;
  }

  .homeHeroSection .homeheroSubtext {
    margin-top: 14px;
    max-width: 840px;
    color: rgba(255, 255, 255, 0.92);
    font-family: "go-regular";
    font-size: clamp(16px, 1.7vw, 24px);
    line-height: 1.45;
  }

  @media (max-width: 1024px) {
    .topHeader .upperHeader {
      display: none !important;
    }

    .topHeader .menuLogo,
    .mobileHeader .menuLogo,
    .topHeader .logo {
      width: 200px !important;
      min-width: 200px !important;
      max-width: 200px !important;
    }

    .topHeader .menuLogo img[src*="aitd%20logo"],
    .topHeader .menuLogo img[src*="aitd logo"],
    .mobileHeader .menuLogo img[src*="aitd%20logo"],
    .mobileHeader .menuLogo img[src*="aitd logo"],
    .topHeader .logo img[src*="aitd%20logo"],
    .topHeader .logo img[src*="aitd logo"] {
      width: 200px !important;
      max-width: 200px !important;
    }

    .homeHeroSection .homeheroHeading {
      font-size: clamp(28px, 8.8vw, 46px) !important;
      max-width: 100%;
    }

    .homeHeroSection .homeheroSubtext {
      margin-top: 12px;
      max-width: 100%;
      font-size: 15px;
      line-height: 1.5;
    }
  }
  </style>`

  if (!out.includes('aitd-logo-size-override')) {
    if (out.includes('</head>')) {
      out = out.replace('</head>', `${logoSizeStyle}</head>`)
    } else {
      out = `${logoSizeStyle}${out}`
    }
  }

  const placementSyncScript = `<script id="aitd-placement-sync">
  (() => {
    const section = document.querySelector('.bestOpportunity');
    if (!section) return;

    const wrappers = section.querySelectorAll('.opportunityWrapper');
    if (!wrappers.length) return;

    const safeText = (value, fallback = '-') => {
      const text = String(value ?? '').trim();
      return text || fallback;
    };

    const applyCards = (wrapper, items) => {
      const cards = Array.from(wrapper.querySelectorAll('.masterBox'));
      if (!cards.length) return;

      cards.forEach((card, index) => {
        const item = items[index];
        if (!item) {
          card.style.display = 'none';
          return;
        }
        card.style.display = '';

        const nameEl = card.querySelector('.opprName');
        if (nameEl) {
          nameEl.textContent = safeText(item.name, '');
        }

        const imageEl = card.querySelector('img');
        if (imageEl) {
          if (item.imageUrl) {
            imageEl.src = item.imageUrl;
            imageEl.alt = safeText(item.name, 'Placement image');
          } else {
            imageEl.removeAttribute('src');
            imageEl.alt = 'No image';
          }
        }

        const designationEl = card.querySelector('.opprDesignation div');
        if (designationEl) {
          const role = safeText(item.role);
          const company = safeText(item.company);
          designationEl.textContent = '';
          designationEl.appendChild(document.createTextNode(role + ', '));
          const companyEl = document.createElement('span');
          companyEl.className = 'font-bold';
          companyEl.textContent = company;
          designationEl.appendChild(companyEl);
        }

        const specializationStrong = card.querySelector('.eventTag strong');
        if (specializationStrong) {
          const specialization = safeText(item.specialization);
          const batch = String(item.batch ?? '').trim();
          specializationStrong.textContent = batch ? specialization + ' ' + batch : specialization;
        }

        const packageTag = Array.from(card.querySelectorAll('.eventTag')).find((el) =>
          /package:/i.test(el.textContent || '')
        );
        if (packageTag) {
          packageTag.style.display = 'none';
        }
      });
    };

    fetch('/api/content/placements')
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error('placements fetch failed'))))
      .then((payload) => {
        const incoming = Array.isArray(payload?.items) ? payload.items : [];
        if (!incoming.length) return;

        const items = incoming.map((item) => ({
          name: safeText(item?.title, ''),
          role: safeText(item?.subtitle),
          company: safeText(item?.meta?.company),
          specialization: safeText(item?.meta?.specialization),
          batch: safeText(item?.meta?.batch, ''),
          imageUrl: typeof item?.imageUrl === 'string' ? item.imageUrl : '',
        }));

        applyCards(wrappers[0], items);
        if (wrappers[1]) applyCards(wrappers[1], items);
      })
      .catch(() => {
        // Keep static fallback content when API is not available.
      });
  })();
  </script>`

  if (!out.includes('aitd-placement-sync')) {
    if (out.includes('</body>')) {
      out = out.replace('</body>', `${placementSyncScript}</body>`)
    } else {
      out = `${out}${placementSyncScript}`
    }
  }

  const facultySyncScript = `<script id="aitd-faculty-sync">
  (() => {
    const section = document.querySelector('.facultySectionCustom');
    if (!section) return;

    const grid = section.querySelector('.facultyGrid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.getpreppedSwipCard'));
    if (!cards.length) return;

    const safeText = (value, fallback = '-') => {
      const text = String(value ?? '').trim();
      return text || fallback;
    };

    fetch('/api/content/faculty')
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error('faculty fetch failed'))))
      .then((payload) => {
        const incoming = Array.isArray(payload?.items) ? payload.items : [];
        if (!incoming.length) return;

        const items = incoming.map((item) => ({
          name: safeText(item?.title, ''),
          designation: safeText(item?.subtitle, ''),
          department: safeText(item?.meta?.department, ''),
          experience: safeText(item?.meta?.experience, ''),
          imageUrl: typeof item?.imageUrl === 'string' ? item.imageUrl : '',
        }));

        cards.forEach((card, index) => {
          const item = items[index];
          if (!item) {
            card.style.display = 'none';
            return;
          }
          card.style.display = '';

          const img = card.querySelector('.getimgWrap img');
          if (img) {
            if (item.imageUrl) {
              img.src = item.imageUrl;
              img.alt = item.name || 'Faculty';
            } else {
              img.removeAttribute('src');
              img.alt = 'No image';
            }
          }

          const nameEl = card.querySelector('.getpreppedTextWrap h3');
          if (nameEl) nameEl.textContent = item.name;

          const designationEl = card.querySelector('.getpreppedTextWrap p.designation');
          if (designationEl) {
            const title = item.designation || '-';
            const dept = item.department || '-';
            designationEl.textContent = title + ', ' + dept;
          }

          const expEl = card.querySelector('.getpreppedTextWrap .sessionCount span');
          if (expEl) expEl.textContent = item.experience || '-';
        });
      })
      .catch(() => {
        // Keep static fallback content when API is not available.
      });
  })();
  </script>`

  if (!out.includes('aitd-faculty-sync')) {
    if (out.includes('</body>')) {
      out = out.replace('</body>', `${facultySyncScript}</body>`)
    } else {
      out = `${out}${facultySyncScript}`
    }
  }

  const newsAndTestimonialSyncScript = `<script id="aitd-news-testimonial-sync">
  (() => {
    const safeText = (value, fallback = '') => {
      const text = String(value ?? '').trim();
      return text || fallback;
    };

    const escapeHtml = (value) =>
      String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const buildEventSlide = (item) => {
      const title = escapeHtml(safeText(item?.title, 'Event'));
      const dateText = escapeHtml(safeText(item?.meta?.date, ''));
      const locationText = escapeHtml(safeText(item?.meta?.location, ''));
      const rawStatus = safeText(item?.meta?.status || item?.status, 'upcoming').toLowerCase();
      const normalizedStatus = rawStatus === 'completed' ? 'completed' : 'upcoming';
      const statusText = normalizedStatus === 'completed' ? 'Completed' : 'Upcoming';
      const statusStyle = normalizedStatus === 'completed'
        ? 'background:#dcfce7;color:#166534;'
        : 'background:#fef3c7;color:#92400e;';
      const descText = escapeHtml(safeText(item?.description, ''));
      const imageUrl = escapeHtml(safeText(item?.imageUrl, ''));
      const detailUrl = '/event-details.html?id=' + encodeURIComponent(safeText(item?.id, ''));

      return '<div class="swiper-slide">' +
        '<a class="eventCard" href="' + detailUrl + '" data-mode="events" aria-label="' + title + '">' +
          '<div class="eventCardImage" style="background-image:url(\\'' + imageUrl + '\\')"></div>' +
          '<div class="eventCardBody">' +
            '<div class="eventMetaRow">' +
              (dateText ? '<span class="eventPill">' + dateText + '</span>' : '') +
              (locationText ? '<span class="eventPill eventPillDark">' + locationText + '</span>' : '') +
              '<span class="eventPill" style="' + statusStyle + '">' + statusText + '</span>' +
            '</div>' +
            '<p class="eventTitle">' + title + '</p>' +
            (descText ? '<p class="eventDesc">' + descText + '</p>' : '') +
            '<div class="eventHint">Click to view full event details</div>' +
          '</div>' +
        '</a>' +
      '</div>';
    };

    const buildLatestNewsSlide = (item) => {
      const title = escapeHtml(safeText(item?.title, 'Latest News'));
      const link = escapeHtml(safeText(item?.meta?.link, '#'));
      const dateText = escapeHtml(safeText(item?.meta?.date, ''));
      const description = escapeHtml(safeText(item?.description, ''));
      const imageUrl = escapeHtml(safeText(item?.imageUrl, ''));
      return '<div class="swiper-slide">' +
        '<a class="latestTextCard" data-mode="latest" href="' + link + '" target="_blank" rel="noopener noreferrer" aria-label="' + title + '">' +
          (imageUrl ? '<div class="latestTextImageWrap"><img class="latestTextImage" src="' + imageUrl + '" alt="' + title + '" loading="lazy" /></div>' : '') +
          (dateText ? '<div class="latestTextDate">' + dateText + '</div>' : '') +
          '<p class="latestTextTitle">' + title + '</p>' +
          (description ? '<p class="latestTextDesc">' + description + '</p>' : '') +
        '</a>' +
      '</div>';
    };

    const initNewsTabs = (events, latestNews) => {
      const wrapper = document.getElementById('section__news');
      const container = document.getElementById('latestNewsHome');
      if (!wrapper || !container) return;

      const renderMode = (mode) => {
        const selectedItems = mode === 'latest' ? latestNews : events;
        if (mode === 'latest') {
          container.innerHTML = selectedItems.map(buildLatestNewsSlide).join('');
        } else {
          container.innerHTML = selectedItems.map(buildEventSlide).join('');
        }
        const swiper = document.querySelector('.testimonialsSwiper')?.swiper;
        if (swiper && typeof swiper.update === 'function') swiper.update();
        const newsSwiper = document.querySelector('.swiper.eventSlider.latestNews.newsAuto')?.swiper;
        if (newsSwiper) {
          const isSmallSet = selectedItems.length <= 2;
          newsSwiper.params.loop = !isSmallSet;
          newsSwiper.params.freeMode = isSmallSet ? false : { enabled: true, momentum: false };
          newsSwiper.params.allowTouchMove = isSmallSet;
          if (newsSwiper.params.autoplay) {
            newsSwiper.params.autoplay.delay = isSmallSet ? 3500 : 0;
          }
          if (typeof newsSwiper.loopDestroy === 'function') newsSwiper.loopDestroy();
          if (!isSmallSet && typeof newsSwiper.loopCreate === 'function') newsSwiper.loopCreate();
          if (typeof newsSwiper.update === 'function') newsSwiper.update();
        }
      };

      const tabs = Array.from(wrapper.querySelectorAll('.newsTabBtn'));
      if (!tabs.length) return;

      tabs.forEach((btn) => {
        btn.addEventListener('click', () => {
          const mode = btn.getAttribute('data-mode') === 'latest' ? 'latest' : 'events';
          tabs.forEach((node) => node.classList.toggle('active', node === btn));
          setTimeout(() => renderMode(mode), 0);
        });
      });

      const active = wrapper.querySelector('.newsTabBtn.active');
      const startMode = active?.getAttribute('data-mode') === 'latest' ? 'latest' : 'events';
      renderMode(startMode);
    };

    const initTestimonials = (items) => {
      const swiperRoot = document.querySelector('.testimonialsSwiper');
      const wrapper = swiperRoot?.querySelector('.swiper-wrapper');
      if (!swiperRoot || !wrapper) return;

      const html = items.map((item) => {
        const name = escapeHtml(safeText(item?.title, 'Student'));
        const role = escapeHtml(safeText(item?.meta?.role || item?.subtitle, 'AITD Student'));
        const text = escapeHtml(safeText(item?.description, ''));
        const imageUrl = escapeHtml(safeText(item?.imageUrl, ''));
        return '<div class="swiper-slide testimonialCard">' +
          '<div class="testimonialStars">★★★★★</div>' +
          '<p class="testimonialText">"' + text + '"</p>' +
          '<div class="testimonialAuthor">' +
            (imageUrl ? '<img src="' + imageUrl + '" alt="' + name + '" class="testimonialAvatar" />' : '') +
            '<div><h4>' + name + '</h4><span>' + role + '</span></div>' +
          '</div>' +
        '</div>';
      }).join('');

      if (!html) return;

      const existingSwiper = swiperRoot.swiper;
      if (existingSwiper && typeof existingSwiper.destroy === 'function') {
        existingSwiper.destroy(true, true);
      }
      wrapper.innerHTML = html;

      if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonialsSwiper', {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          speed: 900,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.testimonial-pagination',
            clickable: true
          },
          breakpoints: {
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 1.6 }
          }
        });
      }
    };

    Promise.all([
      fetch('/api/content/events').then((res) => (res.ok ? res.json() : { items: [] })).catch(() => ({ items: [] })),
      fetch('/api/content/latest-news').then((res) => (res.ok ? res.json() : { items: [] })).catch(() => ({ items: [] })),
      fetch('/api/content/testimonials').then((res) => (res.ok ? res.json() : { items: [] })).catch(() => ({ items: [] }))
    ]).then(([eventsPayload, latestPayload, testimonialPayload]) => {
      const events = Array.isArray(eventsPayload?.items) ? eventsPayload.items : [];
      const latestNews = Array.isArray(latestPayload?.items) ? latestPayload.items : [];
      const testimonials = Array.isArray(testimonialPayload?.items) ? testimonialPayload.items : [];

      if (events.length || latestNews.length) {
        initNewsTabs(events, latestNews);
      }
      if (testimonials.length) {
        initTestimonials(testimonials);
      }
    });
  })();
  </script>`

  if (!out.includes('aitd-news-testimonial-sync')) {
    if (out.includes('</body>')) {
      out = out.replace('</body>', `${newsAndTestimonialSyncScript}</body>`)
    } else {
      out = `${out}${newsAndTestimonialSyncScript}`
    }
  }

  return out
}

function mirrorMiddleware() {
  return async (req, res, next) => {
    try {
      const pathname = normalizePathname((req.url || '/').split('?')[0])
      if (shouldBypass(pathname)) return next()

      const domains = listDomains()
      const resolved = await resolveMirrorPath(pathname, domains)
      if (!resolved) return next()

      const { filePath, requestedExt, rel } = resolved
      const contentType = detectContentType(filePath, requestedExt)
      res.setHeader('Content-Type', contentType)

      if (contentType.startsWith('text/html')) {
        const html = await fsp.readFile(filePath, 'utf8')
        const currentDomain = domains.includes(rel.split('/')[0])
          ? rel.split('/')[0]
          : DEFAULT_DOMAIN
        res.end(rewriteHtml(html, domains, currentDomain))
        return
      }

      const data = await fsp.readFile(filePath)
      res.end(data)
    } catch {
      next()
    }
  }
}

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    {
      name: 'mirror-routes-in-vite',
      configureServer(server) {
        server.middlewares.use(mirrorMiddleware())
      },
      configurePreviewServer(server) {
        server.middlewares.use(mirrorMiddleware())
      },
    },
  ],
})
