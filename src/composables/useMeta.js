/**
 * Updates document meta tags dynamically.
 * Call on route changes or when section-specific meta is needed.
 */
export function useMeta(options = {}) {
  const {
    title = 'Shabeeh Haider — Frontend Developer | Vue.js & React Specialist',
    description = 'Shabeeh Haider is a Frontend Developer with 4+ years of experience building AI dashboards, fintech platforms, and scalable web applications using Vue.js, React, and TypeScript.',
    url = 'https://shabeeh.dev/',
    image = 'https://shabeeh.dev/og-image.png',
  } = options

  document.title = title

  const setMeta = (selector, attr, value) => {
    let el = document.querySelector(selector)
    if (!el) {
      el = document.createElement('meta')
      const [attrName, attrVal] = selector.match(/\[(.+?)="(.+?)"\]/)?.slice(1) ?? []
      if (attrName) el.setAttribute(attrName, attrVal)
      document.head.appendChild(el)
    }
    el.setAttribute(attr, value)
  }

  setMeta('meta[name="description"]', 'content', description)
  setMeta('meta[property="og:title"]', 'content', title)
  setMeta('meta[property="og:description"]', 'content', description)
  setMeta('meta[property="og:url"]', 'content', url)
  setMeta('meta[property="og:image"]', 'content', image)
  setMeta('meta[name="twitter:title"]', 'content', title)
  setMeta('meta[name="twitter:description"]', 'content', description)
  setMeta('meta[name="twitter:image"]', 'content', image)

  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) canonical.setAttribute('href', url)
}
