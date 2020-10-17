module.exports = {
  title: "網站標題", // replace with site title
  description: "吸管就是拿來Sid", // replace with site description
  // theme: "sidstraw-blog",
  head: [
    // these values will be injected to the head element in each page
    // replace icons with your site icons
    // ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    // ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    // ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    // ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    // ['link', { rel: "manifest", href: "/site.webmanifest" }],
    // ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }],
    // ['link', { rel: "shortcut icon", href: "/favicon.ico" }],
    // ['meta', { name: "msapplication-TileColor", content: "#da532c" }],
    // ['meta', { name: "theme-color", content: "#ffffff" }],
    ['meta', { name: "viewport", content: "width=device-width,user-scaleble=0,initial-scale=1.0,maximum-scale=1.0" }],
    ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" }],
    ['link', { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" }],
  ],
  locales: {
    '/': {
      lang: 'zh-TW',
    }
  },
  themeConfig: {
    // summary is a snippet of your post shown in the posts list.
    summary: true,
    // number of summary characters shown in the post card.
    summaryLength: 100,
    
    // an image shown in the top of your home page
    logo: "",
    
    // navbar items
    nav: [
      {
        text: "Home",
        link: "/",
        icon: 'mdi-home' // see all available icons here https://materialdesignicons.com/
      },
      {
        text: "What's VuePress",
        link: "/2020/05/10/vuepress-introduction/",
        icon: "mdi-vuejs" // see all available icons here https://materialdesignicons.com/
      }
    ],
    
    // this is used for the "about" card in home page.
    about: {
      name: "Sid吸管",
      image: "/images/sid.jpg",
      position: 'Frontend Engineer',
      bio:
        "吸管就是拿來Sid"
    },
    
    disqus: "codeshop-1", // for comments, visit https://disqus.com/ for more info.
    
    googleAnalytics: "<GOOGLE ANALYTICS ID>", // for site analytics, visit https://analytics.google.com/analytics/web/ for more information.
    
    sitemap: true, // auto generate site map for your site for better SEO.
    hostname: "https://sidstraw.dev/", // required for site map.

    footer: {
      socialMedia: [
        {
          type: "github",
          link: "https://github.com/sidstraw/"
        },
        // {
        //   type: "instagram",
        //   link: ""
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
        //   link: ""
        // },
      ],
      copyright: `Copyright © ${ new Date().getFullYear() } - Sid吸管 All rights reserved.`
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
