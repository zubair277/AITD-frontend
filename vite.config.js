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
    '<img src="/images/aitd-bg.png" fetchpriority="high" class="bgHeroImage mob-hide" alt="AITD background">',
  )
  out = out.replace(
    /<img\s+src="[^"]+"\s+fetchpriority="high"\s+class="bgHeroImage\s*"\s+alt="mobileHomepageBackground">/i,
    '<img src="/images/aitd-bg.png" fetchpriority="high" class="bgHeroImage" alt="AITD background">',
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
