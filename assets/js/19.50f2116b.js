(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{385:function(t,s,n){"use strict";n.r(s);var a=n(8),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_23-vuepress-theme-index-js-主題配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_23-vuepress-theme-index-js-主題配置文件"}},[t._v("#")]),t._v(" 23. VuePress : theme/index.js 主題配置文件")]),t._v(" "),n("h1",{attrs:{id:"vuepress-theme-index-js-主題配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-index-js-主題配置文件"}},[t._v("#")]),t._v(" VuePress : "),n("code",[t._v("theme/index.js")]),t._v(" 主題配置文件")]),t._v(" "),n("p",[t._v("上一篇說明了 theme 主題中的目錄結構，但是關鍵的 "),n("code",[t._v("theme/index.js")]),t._v(" 卻被我賣了個關子對吧？")]),t._v(" "),n("p",[t._v("其實")]),t._v(" "),n("p",[t._v("今天就來講講主題配置的概念吧。")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"theme-index-js-的兩種輸出格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#theme-index-js-的兩種輸出格式"}},[t._v("#")]),t._v(" "),n("code",[t._v("theme/index.js")]),t._v(" 的兩種輸出格式")]),t._v(" "),n("p",[n("code",[t._v(".vuepress/theme/index.js")]),t._v(" 跟 "),n("code",[t._v(".vuepress/config.js")]),t._v(" 都是配置用的檔案，有一個小小的共通點，就是一樣需要使用 "),n("code",[t._v("module.exports")]),t._v(" 來將設置輸出，但是又有點不一樣的是， "),n("code",[t._v("theme/index.js")]),t._v(" 在設置上多了一些彈性，不只可以單純寫成物件來輸出，也可以寫成一個 "),n("code",[t._v("function")]),t._v(" ，能夠進行更加複雜的處理。")]),t._v(" "),n("p",[t._v("導出一個 JavaScript 物件的設置方式相對單純，只要翻閱文件確認 "),n("code",[t._v("key")]),t._v(" 值的設定即可，我想比較需要說明的是導出 "),n("code",[t._v("function")]),t._v(" 的設置模式，書寫的格式會像這樣：")]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/theme/index.js")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("themeConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"function-的設置方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-的設置方法"}},[t._v("#")]),t._v(" "),n("code",[t._v("function")]),t._v(" 的設置方法")]),t._v(" "),n("p",[t._v("其實從上面的格式中可以看出來，這個 "),n("code",[t._v("function")]),t._v(" 其實最後也是輸出了一個物件，但主要的差別就是有了 "),n("code",[t._v("themeConfig")]),t._v(" 、 "),n("code",[t._v("ctx")]),t._v(" 兩個參數。")]),t._v(" "),n("p",[t._v("這兩個參數中的第一個  "),n("code",[t._v("themeConfig")]),t._v(" ，其實就是在"),n("code",[t._v(".vuepress/config.js")]),t._v(" 這個整體專案的設置檔中，進行設置的 "),n("code",[t._v("themeConfig")]),t._v(" ，為什麼需要這個參數呢？")]),t._v(" "),n("p",[t._v("就是為了可以讓其他人使用你的主題時，可以直接在專案中就完成這些細節設定，可以包含是否要啟用某些外掛套件、套件的參數又要如何設定...等等。")]),t._v(" "),n("p",[t._v("至於第二個參數 "),n("code",[t._v("ctx")]),t._v(" 就是比較進階的需求才會設置到的，這邊就先不多作介紹，有興趣的可以參閱官方文件 "),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/plugin/context-api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Context API"),n("OutboundLink")],1)]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"plugins-外掛套件設置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugins-外掛套件設置"}},[t._v("#")]),t._v(" "),n("code",[t._v("plugins")]),t._v(" 外掛套件設置")]),t._v(" "),n("p",[t._v("而其實在設置上，我覺得最主要的設置就是針對 "),n("code",[t._v("plugins")]),t._v(" 了，主題中需要使用哪些 "),n("code",[t._v("plugins")]),t._v(" 、又是否需要個別的設置，這些就會是主題設置的主要內容。")]),t._v(" "),n("p",[t._v("可以看一下設置的輸出範例：")]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("themeConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugins "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"disqus"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"seo"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"smooth-scroll"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reading-progress"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/back-to-top'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vuepress/medium-zoom"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("selector"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.post-content img'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vuepress/blog"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultBlogPluginOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("themeConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("googleAnalytics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vuepress/google-analytics"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ga"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" themeConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("googleAnalytics\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("這是一個簡化過的設置範例，也透過 "),n("code",[t._v("themeConfig.googleAnalytics")]),t._v(" 示範了 "),n("code",[t._v("themeConfig")]),t._v(" 的使用，應該不難看出外掛套件的設置方法吧？")]),t._v(" "),n("p",[t._v("其實有個小祕技，有興趣的話你可以猜看看下面這句的作用，明天再來公佈解答囉。")]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/theme/index.js")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("themeConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tthemeConfig "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("themeConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);