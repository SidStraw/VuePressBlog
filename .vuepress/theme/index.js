const removeMd = require('remove-markdown')

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
      itemPermalink: '/:year/:month/:day/:slug',
      pagination: {
        lengthPerPage: 12,
      },
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
    const strippedContent = pageCtx._strippedContent
    if (!strippedContent) {
      return
    }

    const sanitizedContent = strippedContent.trim().replace(/^#+\s+(.*)/, '')

    if (themeConfig.summary) {
      pageCtx.summary = removeMd(sanitizedContent.slice(0, themeConfig.summaryLength)) + ' ...'
    }

    pageCtx.content = removeMd(sanitizedContent)
    pageCtx.frontmatter.image =
      pageCtx.frontmatter.image || `https://source.unsplash.com/random/600x400?nature,summer,light,${Date.now()}`
  }

  return config
}
