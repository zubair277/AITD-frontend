


import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import zlib from 'node:zlib'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

const SITE_ROOT = path.join(process.cwd(), 'public', 'site')
const DEFAULT_DOMAIN = 'aitd.org'

const EXTERNAL_CDNS = new Set([
  'code.jquery.com',
  'cdn.jsdelivr.net',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'www.googletagmanager.com',
  'www.google-analytics.com',
  'www.youtube.com',
  'static.filestackapi.com'
])

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
    .filter((d) => d.isDirectory() && d.name.includes('.') && !EXTERNAL_CDNS.has(d.name))
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

  // Keep root-relative links inside the mirrored default domain,
  // EXCEPT for images, assets, and site directories which exist at the root.
  out = out.replace(/\b(href|src|action|poster)=(["'])\/(?!\/|(?:images|assets|site)\/)/gi, `$1=$2/${currentDomain}/`)

  // Replace the mirrored MU header logo with the user's custom logo.
  out = out.replace(
    /(?:\.\.\/|\.\.\.\/)?files\.aitd\.link\/resources\/animateds\/logoanimationblack\.gif/gi,
    '/images/aitd%20logo.png',
  )
  out = out.replace(
    /https?:\/\/files\.aitd\.link\/resources\/animateds\/logoanimationblack\.gif/gi,
    '/images/aitd%20logo.png',
  )

  // Fix broken SVG icons.
  out = out.replace(
    /(?:\.\.\/|\.\.\.\/)?files\.aitd\.link\/resources\/svg\//gi,
    '/imag/assets/images/',
  )
  out = out.replace(
    /https?:\/\/files\.aitd\.link\/resources\/svg\//gi,
    '/imag/assets/images/',
  )

  // Home hero: remove accreditation logos block permanently.
  out = out.replace(/<div class="muHeroLogos">[\s\S]*?<\/div>/i, '')

  // Home hero: replace heading text only.
  out = out.replace(
    /<h1 class="homeheroHeading">[\s\S]*?<\/h1>/i,
    '<h1 class="homeheroHeading">AIEM MBA – Where Future CEOs and Founders are built</h1>',
  )

  const logoSizeStyle = `<link rel="preload" as="image" href="/images/aitd-bg.webp" fetchpriority="high">
  <style id="aitd-logo-size-override">
  #preloader, .preloader {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

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
    width: 180px !important;
    min-width: 180px !important;
    max-width: 180px !important;
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
    width: 180px !important;
    max-width: 180px !important;
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
      width: 140px !important;
      min-width: 140px !important;
      max-width: 140px !important;
    }

    .topHeader .menuLogo img[src*="aitd%20logo"],
    .topHeader .menuLogo img[src*="aitd logo"],
    .mobileHeader .menuLogo img[src*="aitd%20logo"],
    .mobileHeader .menuLogo img[src*="aitd logo"],
    .topHeader .logo img[src*="aitd%20logo"],
    .topHeader .logo img[src*="aitd logo"] {
      width: 140px !important;
      max-width: 140px !important;
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

  // Inject a runtime API base so production builds can point to the real backend.
  const apiBase = process.env.VITE_API_TARGET || '/api'
  const apiBaseScript = `<script id="aitd-api-base">window.AITD_API_BASE='${String(apiBase).replace(/'/g, "\\'")}'</script>`
  if (!out.includes('aitd-api-base')) {
    if (out.includes('</head>')) {
      out = out.replace('</head>', `${apiBaseScript}</head>`)
    } else {
      out = `${apiBaseScript}${out}`
    }
  }

  // Existing mirrored inline scripts should respect the same backend target as
  // the injected admin-content sync scripts.
  out = out.replace(
    /fetch\('\/api\/content\/latest-news'\)/g,
    "fetch((window.AITD_API_BASE || '/api') + '/content/latest-news')",
  )
  out = out.replace(
    /fetch\('\/api\/content\/events'\)/g,
    "fetch((window.AITD_API_BASE || '/api') + '/content/events')",
  )
  out = out.replace(
    /fetch\('\/api\/content\/testimonials'\)/g,
    "fetch((window.AITD_API_BASE || '/api') + '/content/testimonials')",
  )
  out = out.replace(/allowTouchMove:\s*false/g, 'allowTouchMove: true')

  const dynamicContentStyle = `<style id="aitd-dynamic-content-scroll-fixes">
  #section__news .eventSlider.latestNews.newsAuto {
    overflow-x: auto !important;
    overflow-y: visible !important;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    cursor: grab;
    padding-bottom: 18px;
  }

  #section__news .eventSlider.latestNews.newsAuto:active {
    cursor: grabbing;
  }

  #section__news .eventSlider.latestNews.newsAuto .swiper-wrapper {
    width: max-content !important;
  }

  #section__news .eventSlider.latestNews.newsAuto .swiper-slide {
    flex-shrink: 0;
    scroll-snap-align: start;
  }

  #section__news {
    padding: 72px 0 80px !important;
    background: #fafafa !important;
  }

  #section__news .container {
    max-width: 1460px;
  }

  #section__news .headingWrapperButton {
    align-items: center !important;
    margin-bottom: 28px !important;
  }

  #section__news .newsTabs {
    display: inline-flex !important;
    align-items: center;
    gap: 10px !important;
    padding: 4px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
  }

  #section__news .newsTabBtn {
    height: 38px;
    padding: 0 18px !important;
    border: 0 !important;
    border-radius: 999px !important;
    background: transparent !important;
    color: #111 !important;
    font-size: 14px !important;
    line-height: 38px !important;
    box-shadow: none !important;
  }

  #section__news .newsTabBtn.active {
    background: #090909 !important;
    color: #fff !important;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18) !important;
  }

  #section__news .headingRight {
    gap: 12px !important;
  }

  #section__news .latestNews-Prev,
  #section__news .latestNews-Next {
    width: 46px !important;
    height: 46px !important;
    border-color: rgba(0, 0, 0, 0.1) !important;
    background: #fff !important;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  #section__news .latestNews-Prev:hover,
  #section__news .latestNews-Next:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px rgba(15, 23, 42, 0.12);
  }

  #section__news .eventSlider.latestNews.newsAuto {
    padding: 4px 0 28px !important;
  }

  #section__news .eventSlider.latestNews.newsAuto .swiper-wrapper {
    align-items: stretch;
    gap: 22px;
  }

  #section__news .eventSlider.latestNews.newsAuto .swiper-slide {
    width: clamp(320px, 28vw, 420px) !important;
    height: auto !important;
    padding: 0 !important;
  }

  #section__news .eventCard,
  #section__news .latestTextCard {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    min-height: 382px !important;
    height: 100% !important;
    overflow: hidden !important;
    border-radius: 20px !important;
    background: #fff !important;
    border: 1px solid rgba(15, 23, 42, 0.08) !important;
    box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08) !important;
    color: #111 !important;
    text-decoration: none !important;
    transform: translateZ(0);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  #section__news .eventCard:hover,
  #section__news .latestTextCard:hover {
    transform: translateY(-4px);
    border-color: rgba(15, 23, 42, 0.16) !important;
    box-shadow: 0 26px 58px rgba(15, 23, 42, 0.13) !important;
  }

  #section__news .eventCardImage,
  #section__news .latestTextImageWrap {
    width: 100% !important;
    height: 196px !important;
    flex: 0 0 196px !important;
    margin: 0 !important;
    border-radius: 0 !important;
    overflow: hidden;
    background-color: #eef2f7 !important;
    background-size: cover !important;
    background-position: center !important;
  }

  #section__news .latestTextImage {
    width: 100% !important;
    height: 100% !important;
    display: block;
    object-fit: cover;
  }

  #section__news .eventCardImage::after {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.16)) !important;
  }

  #section__news .eventCardBody,
  #section__news .latestTextCard {
    padding: 18px 20px 20px !important;
  }

  #section__news .latestTextCard:has(.latestTextImageWrap) {
    padding-top: 0 !important;
  }

  #section__news .latestTextCard .latestTextImageWrap {
    width: calc(100% + 40px) !important;
    margin: 0 -20px 18px !important;
  }

  #section__news .latestTextDate {
    margin-bottom: 12px !important;
  }

  #section__news .eventMetaRow {
    gap: 8px !important;
    margin-bottom: 12px !important;
  }

  #section__news .eventPill,
  #section__news .latestTextDate {
    height: 30px;
    display: inline-flex !important;
    align-items: center;
    width: fit-content;
    padding: 0 12px !important;
    border-radius: 999px !important;
    background: #f3f4f6 !important;
    color: #111 !important;
    font-size: 12px !important;
    line-height: 30px !important;
    font-family: var(--go-medium);
    white-space: nowrap;
  }

  #section__news .eventPillDark {
    background: #111 !important;
    color: #fff !important;
  }

  #section__news .eventTitle,
  #section__news .latestTextTitle {
    margin: 0 0 8px !important;
    color: #111 !important;
    font-family: var(--go-medium);
    font-size: 18px !important;
    line-height: 1.28 !important;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  #section__news .eventDesc,
  #section__news .latestTextDesc {
    margin: 0 !important;
    color: rgba(17, 17, 17, 0.68) !important;
    font-size: 14px !important;
    line-height: 1.5 !important;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  #section__news .eventHint {
    margin-top: auto !important;
    padding-top: 14px;
    color: rgba(17, 17, 17, 0.48) !important;
    font-size: 13px !important;
  }

  .testimonialsSwiper {
    display: block !important;
    width: 100% !important;
    min-height: 300px;
    overflow: visible !important;
    padding-top: 12px;
    padding-bottom: 34px;
    margin-top: -12px;
  }

  .testimonialsSwiper .swiper-wrapper {
    display: flex !important;
    align-items: stretch;
    overflow: visible !important;
  }

  .testimonialsSwiper .swiper-slide.testimonialCard,
  .testimonialsSwiper .testimonialCard {
    flex: 0 0 min(420px, calc(100vw - 48px));
    width: min(420px, calc(100vw - 48px)) !important;
    height: auto !important;
    position: relative;
    z-index: 1;
  }

  .testimonialsSwiper .swiper-slide.testimonialCard:hover,
  .testimonialsSwiper .testimonialCard:hover {
    z-index: 3;
  }

  #placements.bestOpportunity .opportunityWrapper {
    flex-wrap: nowrap !important;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    max-width: 100%;
    overflow-x: auto !important;
    overflow-y: visible;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-x: contain;
    padding-bottom: 16px;
    scroll-snap-type: x proximity;
  }

  #placements.bestOpportunity .opportunityWrapper.mobHide {
    display: flex !important;
  }

  #placements.bestOpportunity .opportunityWrapper.mobVisible {
    display: none !important;
  }

  #placements.bestOpportunity .opportunityWrapper .masterBox {
    flex: 0 0 232px;
    width: 232px !important;
    min-width: 232px !important;
    max-width: 232px !important;
    scroll-snap-align: start;
  }

  #placements.bestOpportunity .opportunityWrapper::-webkit-scrollbar {
    height: 8px;
  }

  #placements.bestOpportunity .opportunityWrapper::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.08);
    border-radius: 999px;
  }

  #placements.bestOpportunity .opportunityWrapper::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.26);
    border-radius: 999px;
  }

  #section__news .eventSlider.latestNews.newsAuto::-webkit-scrollbar {
    height: 8px;
  }

  #section__news .eventSlider.latestNews.newsAuto::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.06);
    border-radius: 999px;
  }

  #section__news .eventSlider.latestNews.newsAuto::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.28);
    border-radius: 999px;
  }

  @media (max-width: 767px) {
    #section__news {
      padding: 46px 0 54px !important;
    }

    #section__news .headingWrapperButton {
      margin-bottom: 20px !important;
    }

    #section__news .newsTabs {
      gap: 6px !important;
      max-width: 100%;
    }

    #section__news .newsTabBtn {
      height: 34px;
      padding: 0 14px !important;
      font-size: 13px !important;
      line-height: 34px !important;
    }

    #section__news .eventSlider.latestNews.newsAuto {
      margin-right: -16px;
      padding-right: 16px !important;
    }

    #section__news .eventSlider.latestNews.newsAuto .swiper-wrapper {
      gap: 16px;
    }

    #section__news .eventSlider.latestNews.newsAuto .swiper-slide {
      width: min(316px, calc(100vw - 40px)) !important;
    }

    #section__news .eventCard,
    #section__news .latestTextCard {
      min-height: 350px !important;
      border-radius: 18px !important;
    }

    #section__news .eventCardImage,
    #section__news .latestTextImageWrap {
      height: 170px !important;
      flex-basis: 170px !important;
    }

    #section__news .eventCardBody,
    #section__news .latestTextCard {
      padding: 15px 16px 17px !important;
    }

    #section__news .latestTextCard .latestTextImageWrap {
      width: calc(100% + 32px) !important;
      margin: 0 -16px 15px !important;
    }

    #section__news .eventTitle,
    #section__news .latestTextTitle {
      font-size: 16px !important;
    }

    #placements.bestOpportunity .opportunityWrapper.mobHide {
      display: none !important;
    }

    #placements.bestOpportunity .opportunityWrapper.mobVisible {
      display: flex !important;
      flex-wrap: nowrap !important;
      align-items: flex-start;
      gap: 16px;
      width: 100%;
      max-width: 100%;
      margin-top: 18px !important;
      overflow-x: auto;
      overflow-y: visible;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior-x: contain;
      padding-bottom: 14px;
    }

    #placements.bestOpportunity .opportunityWrapper.mobVisible .masterBox {
      flex: 0 0 232px;
      width: 232px !important;
      min-width: 232px !important;
      max-width: 232px !important;
      min-height: 235px;
      margin-bottom: 10px;
    }

    #placements.bestOpportunity .opportunityWrapper.mobVisible .masterBox > img {
      display: block;
      width: 100% !important;
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      aspect-ratio: auto;
      object-fit: cover;
    }
  }

  @media (min-width: 1024px) {
    .testimonialsSwiper .swiper-slide.testimonialCard,
    .testimonialsSwiper .testimonialCard {
      flex-basis: 460px;
      width: 460px !important;
    }
  }
  </style>`
  if (!out.includes('aitd-dynamic-content-scroll-fixes')) {
    if (out.includes('</head>')) {
      out = out.replace('</head>', `${dynamicContentStyle}</head>`)
    } else {
      out = `${dynamicContentStyle}${out}`
    }
  }

  const placementSyncScript = `<script id="aitd-placement-sync">
  (() => {
    let synced = false;
    let observer = null;

    const safeText = (value, fallback = '-') => {
      const text = String(value ?? '').trim();
      return text || fallback;
    };

    const placementKey = (item) => [
      safeText(item.name, ''),
      safeText(item.role, ''),
      safeText(item.company, ''),
      safeText(item.specialization, ''),
      safeText(item.batch, ''),
    ].join('|').replace(/\\s+/g, ' ').trim().toLowerCase();

    const uniquePlacements = (items) => {
      const seen = new Set();
      return items.filter((item) => {
        const key = placementKey(item);
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    };

    const buildCard = (item) => {
      const card = document.createElement('div');
      card.className = 'masterBox';

      const img = document.createElement('img');
      img.alt = safeText(item.name, 'Placement image');
      img.loading = 'lazy';
      img.decoding = 'async';
      if (item.imageUrl) {
        img.src = item.imageUrl;
      }
      card.appendChild(img);

      const name = document.createElement('div');
      name.className = 'opprName font-12 font-regular font-grey2 flexbox';
      name.textContent = safeText(item.name, '');
      card.appendChild(name);

      const line = document.createElement('hr');
      line.className = 'lineSpace';
      card.appendChild(line);

      const designation = document.createElement('div');
      designation.className = 'opprDesignation';
      const designationText = document.createElement('div');
      designationText.className = 'font-16 font-semibold font-black1';
      const role = safeText(item.role);
      const company = safeText(item.company, '');
      designationText.appendChild(document.createTextNode(company ? role + ', ' : role));
      if (company) {
        const companyEl = document.createElement('span');
        companyEl.className = 'font-bold';
        companyEl.textContent = company;
        designationText.appendChild(companyEl);
      }
      designation.appendChild(designationText);
      card.appendChild(designation);

      const specialization = safeText(item.specialization, '');
      const batch = safeText(item.batch, '');
      if (specialization || batch) {
        const tag = document.createElement('div');
        tag.className = 'eventTag mt10 font-14 font-regular font-black2';
        tag.appendChild(document.createTextNode('Specialization: '));
        const strong = document.createElement('strong');
        strong.className = 'black-medium';
        strong.textContent = [specialization, batch].filter(Boolean).join(' ');
        tag.appendChild(strong);
        card.appendChild(tag);
      }

      return card;
    };

    const applyCards = (wrappers, items) => {
      wrappers.forEach((wrapper) => {
        wrapper.innerHTML = '';
        if (!items.length) {
          const empty = document.createElement('p');
          empty.className = 'font-14 font-regular';
          empty.style.padding = '20px';
          empty.textContent = 'No placements available yet.';
          wrapper.appendChild(empty);
          return;
        }
        items.forEach((item) => wrapper.appendChild(buildCard(item)));
      });
    };

    const syncPlacements = () => {
      const section = document.querySelector('.bestOpportunity');
      const wrappers = section ? Array.from(section.querySelectorAll('.opportunityWrapper')) : [];
      if (!wrappers.length || synced) return false;

      synced = true;
      if (observer) observer.disconnect();

      fetch((window.AITD_API_BASE || '/api') + '/content/placements')
        .then((response) => (response.ok ? response.json() : Promise.reject(new Error('placements fetch failed'))))
        .then((payload) => {
          const incoming = Array.isArray(payload?.items) ? payload.items : [];
          const items = uniquePlacements(incoming.map((item) => ({
            id: safeText(item?.id, ''),
            name: safeText(item?.title, ''),
            role: safeText(item?.subtitle),
            company: safeText(item?.meta?.company, ''),
            specialization: safeText(item?.meta?.specialization, ''),
            batch: safeText(item?.meta?.batch, ''),
            imageUrl: typeof item?.imageUrl === 'string' ? item.imageUrl : '',
          })));

          applyCards(wrappers, items);
        })
        .catch(() => {
          synced = false;
        });

      return true;
    };

    if (!syncPlacements()) {
      observer = new MutationObserver(() => syncPlacements());
      observer.observe(document.documentElement, { childList: true, subtree: true });
      document.addEventListener('DOMContentLoaded', syncPlacements, { once: true });
      window.addEventListener('load', syncPlacements, { once: true });
    }
  })();
  </script>`

  if (!out.includes('aitd-placement-sync')) {
    if (out.includes('</body>')) {
      out = out.replace('</body>', `${placementSyncScript}</body>`)
    } else {
      out = `${out}${placementSyncScript}`
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
      const scroller = wrapper.querySelector('.eventSlider.latestNews.newsAuto');

      if (scroller && !scroller.dataset.aitdWheelScroll) {
        scroller.dataset.aitdWheelScroll = 'true';
        scroller.addEventListener('wheel', (event) => {
          if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
          event.preventDefault();
          scroller.scrollLeft += event.deltaY;
        }, { passive: false });
      }

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
            newsSwiper.params.allowTouchMove = true;
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
      if (!swiperRoot || !wrapper) return false;

      const html = items.map((item) => {
        const name = escapeHtml(safeText(item?.title, 'Student'));
        const role = escapeHtml(safeText(item?.meta?.role || item?.subtitle, 'AIEM Student'));
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

      if (!html) return true;

      const existingSwiper = swiperRoot.swiper;
      if (existingSwiper && typeof existingSwiper.destroy === 'function') {
        existingSwiper.destroy(true, true);
      }
      wrapper.innerHTML = html;
      swiperRoot.style.display = 'block';

      if (typeof Swiper !== 'undefined') {
        window.initSwiperSafe('.testimonialsSwiper', {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          speed: 900,
          allowTouchMove: true,
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

      return true;
    };

    const initTestimonialsWhenReady = (items) => {
      if (!items.length || initTestimonials(items)) return;

      const observer = new MutationObserver(() => {
        if (initTestimonials(items)) observer.disconnect();
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
      document.addEventListener('DOMContentLoaded', () => initTestimonials(items), { once: true });
      window.addEventListener('load', () => initTestimonials(items), { once: true });
    };

    Promise.all([
      fetch((window.AITD_API_BASE || '/api') + '/content/events').then((res) => (res.ok ? res.json() : { items: [] })).catch(() => ({ items: [] })),
      fetch((window.AITD_API_BASE || '/api') + '/content/latest-news').then((res) => (res.ok ? res.json() : { items: [] })).catch(() => ({ items: [] })),
      fetch((window.AITD_API_BASE || '/api') + '/content/testimonials').then((res) => (res.ok ? res.json() : { items: [] })).catch(() => ({ items: [] }))
    ]).then(([eventsPayload, latestPayload, testimonialPayload]) => {
      const events = Array.isArray(eventsPayload?.items) ? eventsPayload.items : [];
      const latestNews = Array.isArray(latestPayload?.items) ? latestPayload.items : [];
      const testimonials = Array.isArray(testimonialPayload?.items) ? testimonialPayload.items : [];

      if (events.length || latestNews.length) {
        initNewsTabs(events, latestNews);
      }
      if (testimonials.length) {
        initTestimonialsWhenReady(testimonials);
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

function applyRewriteToDist() {
  const distSiteRoot = path.join(process.cwd(), 'dist', 'site')
  if (!fs.existsSync(distSiteRoot)) return

  const domains = fs
    .readdirSync(distSiteRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.includes('.') && !EXTERNAL_CDNS.has(d.name))
    .map((d) => d.name)

  function walk(dir) {
    let results = []
    const list = fs.readdirSync(dir)
    list.forEach(function (file) {
      file = path.join(dir, file)
      const stat = fs.statSync(file)
      if (stat && stat.isDirectory()) {
        results = results.concat(walk(file))
      } else {
        if (file.endsWith('.html')) results.push(file)
      }
    })
    return results
  }

  const htmlFiles = walk(distSiteRoot)
  for (const file of htmlFiles) {
    const rel = path.relative(distSiteRoot, file).replace(/\\/g, '/')
    const currentDomain = domains.includes(rel.split('/')[0]) ? rel.split('/')[0] : DEFAULT_DOMAIN
    const originalHtml = fs.readFileSync(file, 'utf8')
    const rewrittenHtml = rewriteHtml(originalHtml, domains, currentDomain)
    fs.writeFileSync(file, rewrittenHtml, 'utf8')
  }
  console.log(`Rewrote ${htmlFiles.length} HTML files in dist/site for production.`)
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
        target: process.env.VITE_API_TARGET || 'http://localhost:5001',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    viteCompression({ algorithm: 'gzip' }),
    viteCompression({ 
      algorithm: 'brotliCompress', 
      ext: '.br',
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 4,
        },
      }
    }),
    {
      name: 'mirror-routes-in-vite',
      configureServer(server) {
        server.middlewares.use(mirrorMiddleware())
      },
      configurePreviewServer(server) {
        server.middlewares.use(mirrorMiddleware())
      },
      closeBundle() {
        applyRewriteToDist()
      },
    },
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
})

