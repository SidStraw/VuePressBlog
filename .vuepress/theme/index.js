const removeMd = require('remove-markdown')
const slugify = require('slugify')

module.exports = (themeConfig, ctx) => {
  themeConfig = Object.assign(themeConfig, {
    summary: !!themeConfig.summary,
    summaryLength: typeof themeConfig.summaryLength === 'number' ? themeConfig.summaryLength : 80,
    pwa: !!themeConfig.pwa,
  })

  themeConfig.logo = themeConfig.logo || themeConfig.about.image

  const directories = [
    {
      id: 'post',
      dirname: '_posts',
      path: themeConfig.pages ? '/blog' : '/',
      // layout: 'IndexPost', defaults to `Layout.vue`
      itemLayout: 'Post',
      frontmatter: { title: themeConfig.pages ? 'Blog' : 'Home' },
      itemPermalink: '/:year/:month/:day/:slug', // 文章連結已透過 config.extendPageData 設置
      pagination: {
        lengthPerPage: 12,
      },
    },
    {
      id: 'portfolio',
      dirname: '_portfolio',
      path: '/portfolio',
      layout: 'NotFound', // defaults to `Layout.vue`
      itemLayout: 'Page',
      frontmatter: { title: 'Portfolio' },
      itemPermalink: '/:slug',
    },
    {
      id: 'page',
      dirname: '_pages',
      path: '/',
      layout: 'HomePage', // defaults to `Layout.vue`
      itemLayout: 'Page',
      frontmatter: { title: 'Home' },
      itemPermalink: '/:slug',
    },
  ]

  !themeConfig.pages && directories.pop()

  const defaultBlogPluginOptions = {
    directories,
    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/tag/',
        layout: 'Tag', // defaults to `FrontmatterKey.vue`
        scopeLayout: 'TagPosts',
        frontmatter: { title: 'Tag' },
        pagination: {
          lengthPerPage: 12,
        },
      },
    ],
  }

  const { modifyBlogPluginOptions } = themeConfig

  const blogPluginOptions =
    typeof modifyBlogPluginOptions === 'function'
      ? modifyBlogPluginOptions(defaultBlogPluginOptions)
      : defaultBlogPluginOptions

  const plugins = [
    'disqus',
    'seo',
    'smooth-scroll',
    'reading-progress',
    '@vuepress/back-to-top',
    'vuepress-plugin-table-of-contents',
    ['@vuepress/medium-zoom', { selector: '.post-content img' }],
    ['@vuepress/blog', blogPluginOptions],
    ['container', { type: 'tip', defaultTitle: 'TIP' }],
    ['container', { type: 'warning', defaultTitle: 'WARNING' }],
    ['container', { type: 'danger', defaultTitle: 'WARNING' }],
    [
      'container',
      {
        type: 'details',
        before: info =>
          `<details class="custom-block details">${
            info ? `<summary class="custom-block-title">${info}</summary>` : ''
          }\n`,
        after: () => '</details>\n',
      },
    ],
  ]

  if (themeConfig.sitemap && themeConfig.hostname) {
    plugins.push([
      'sitemap',
      {
        hostname: themeConfig.hostname,
      },
    ])
  }

  if (themeConfig.googleAnalytics) {
    plugins.push([
      '@vuepress/google-analytics',
      {
        ga: themeConfig.googleAnalytics,
      },
    ])
  }

  if (themeConfig.pwa) {
    plugins.push([
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ])
  }

  const config = {
    plugins,
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent ? themeConfig.paginationComponent : 'Pagination',
    },
  }

  /**
   * Generate summary.
   */
  config.extendPageData = function (pageCtx) {
    const { frontmatter } = pageCtx
    const strippedContent = pageCtx._strippedContent
    if (!strippedContent) return

    const sanitizedContent = strippedContent.trim().replace(/^#+\s+(.*)/, '')

    if (themeConfig.summary) {
      pageCtx.summary = removeMd(sanitizedContent.slice(0, themeConfig.summaryLength)) + ' ...'
    }

    pageCtx.content = removeMd(sanitizedContent)
    frontmatter.image =
      frontmatter.image || `https://source.unsplash.com/random/600x400?nature,summer,light,${Date.now()}`

    if (frontmatter.type === 'post' && frontmatter.date) {
      const pageDateString = new Date(frontmatter.date).toISOString().split('T')[0]
      frontmatter.date = pageDateString

      const slugifyLink = frontmatter.slug && slugify(frontmatter.slug, { lower: true })
      const title =
        frontmatter.title &&
        frontmatter.title
          .trim()
          .replace(/[.,/#!$%^&*;:{}[\]=\-_`~()\s]/g, '-')
          .replace(/-{2,}/g, '-')
      frontmatter.permalink = `/${pageDateString.replace(/-/g, '/')}/${encodeURI(slugifyLink || title)}`
    }
  }

  return config
}
