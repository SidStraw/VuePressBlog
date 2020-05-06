module.exports = {
  title: "Sid吸管", // replace with site title
  description: "資訊爆炸的時代，更要懂得小口啜飲", // replace with site description
  // theme: "modern-blog",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/site.webmanifest" }],
    ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }],
    ['link', { rel: "shortcut icon", href: "/favicon.ico" }],
    ['meta', { name: "msapplication-TileColor", content: "#da532c" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],
  ],
  themeConfig: {
    // these values will be injected to the head element in each page
    // replace icons with your site icons
    // head: [
    //   ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    //   ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    //   ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    //   ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    //   ['link', { rel: "manifest", href: "/site.webmanifest" }],
    //   ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }],
    //   ['link', { rel: "shortcut icon", href: "https://ahmadmostafa.com/favicon.ico" }],
    //   ['meta', { name: "msapplication-TileColor", content: "#da532c" }],
    //   ['meta', { name: "theme-color", content: "#ffffff" }],
    // ],
    
    // summary is a snippet of your post shown in the posts list.
    summary: true,
    // number of summary characters shown in the post card.
    summaryLength: 100,
    
    // an image shown in the top of your home page
    heroImage: "/images/hero.jpeg",
    
    // navbar items
    // nav: [
    //   {
    //     text: "Home",
    //     link: "/",
    //     icon: 'el-icon-house' // see all available icons here https://element.eleme.io/#/en-US/component/icon
    //   },
    //   {
    //     text: "Projects",
    //     link: "/projects/",
    //     icon: "el-icon-folder" // see all available icons here https://element.eleme.io/#/en-US/component/icon
    //   }
    // ],
    
    // this is used for the "about" card in home page.
    about: {
      fullName: "Sid吸管",
      image: "/images/sid.jpg",
      bio:
        "吸管就是拿來Sid"
    },
    
    disqus: "codeshop-1", // for comments, visit https://disqus.com/ for more info.
    
    googleAnalytics: "<GOOGLE ANALYTICS ID>", // for site analytics, visit https://analytics.google.com/analytics/web/ for more information.
    
    sitemap: true, // auto generate site map for your site for better SEO.
    hostname: "<YOUR SITE DOMAIN NAME>", // required for site map.

    socialShare: true,
    socialShareNetworks: ["facebook"],

    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/sidstraw/"
        },
        // {
        //   type: "instagram",
        //   link: "https://instagram.com/z3bya/"
        // },
        {
          type: "facebook",
          link: "https://facebook.com/j80304xz/"
        },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/sidstraw/"
        },
        // {
        //   type: "youtube",
        //   link: "https://www.youtube.com/channel/UC8fZybVYhEnCe1UwwVidVcg"
        // },
      ],
      copyright: [
        // {
        //   text: "This theme is available for you!",
        //   link: "https://github.com/z3by/vuepress-theme-modern-blog"
        // },
        {
          text: `Copyright © ${new Date().getFullYear()} SidStraw All rights reserved.`,
          link:
            "https://facebook.com/j80304xz/"
        }
      ]
    }
  },

  plugins: [
    // [
    //   'crisp', {
    //     siteID: "<CRISP SITE ID>" // visit https://crisp.chat/en/ for more or remove this plugin to disable it.
    //   }
    // ]
  ]
};
