(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{386:function(t,a,e){"use strict";e.r(a);var s=e(8),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_21-layout-vuepress-theme-主題的基礎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_21-layout-vuepress-theme-主題的基礎"}},[t._v("#")]),t._v(" 21. Layout : VuePress theme 主題的基礎")]),t._v(" "),e("h1",{attrs:{id:"layout-vuepress-theme-主題的基礎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout-vuepress-theme-主題的基礎"}},[t._v("#")]),t._v(" Layout : VuePress theme 主題的基礎")]),t._v(" "),e("p",[t._v("想要進行主題的開發，自然就要先對主題的專案結構有所了解，最最最基本的主題結構莫過於此：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".\n└─ .vuepress\n └─ theme\n     └─ Layout.vue\n")])])]),e("p",[t._v("簡簡單的直接覆蓋預設版型，而在 VuePress 主題中的 "),e("code",[t._v(".vue")]),t._v(" 檔案，包含 "),e("code",[t._v("Layout.vue")]),t._v(" 就是一個非常純粹的 "),e("code",[t._v(".vue")]),t._v(" 單文件組件，跟你用 CLI 進行開發的體驗大致上都是一樣的。")]),t._v(" "),e("h2",{attrs:{id:"透過-content-將-md-的內容注入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#透過-content-將-md-的內容注入"}},[t._v("#")]),t._v(" 透過 "),e("code",[t._v("<Content/>")]),t._v(" 將 "),e("code",[t._v(".md")]),t._v(" 的內容注入")]),t._v(" "),e("p",[t._v("而既然是 "),e("code",[t._v("Layout.vue")]),t._v(" ，那自然就是一個重複套用不同內容的版型，雖然如果你故意不注入內容，當作一般的 Vue 專案來進行開發的話也是一種選項啦，只是這條路線超級奇耙而已...")]),t._v(" "),e("p",[t._v("那麼如何注入內容呢？還記得 VuePress 的「約定」概念嗎？")]),t._v(" "),e("p",[t._v("不用 "),e("code",[t._v("import")]),t._v(" 任何的檔案，直接在組件的 "),e("code",[t._v("<template></template>")]),t._v(" 中加入 "),e("code",[t._v("<Content/>")]),t._v(" 就可以囉！")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("這就是一個非常單純，純粹到只會把 "),e("code",[t._v(".md")]),t._v(" 內容給渲染出來的 Layout 囉！")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"layout-組件的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout-組件的使用"}},[t._v("#")]),t._v(" Layout "),e("strong",[t._v("組件的使用")])]),t._v(" "),e("p",[t._v("上面提到的 "),e("code",[t._v("Layout.vue")]),t._v(" 這個檔案，是 VuePress 在預設情況下會使用的 Layout 版型，但實際上的專案應該很難用一個版型完成，一定會依照各種不同需求而使用不同的 Layout ，例如一個部落格網站，文章列表的版型與文章內容的版型一定會有所差異，所以就會開發出各種不同的版型來讓我們視情況調用。")]),t._v(" "),e("p",[t._v("以這個 "),e("code",[t._v("layouts")]),t._v(" 結構的部落格網站為例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("theme\n└── layouts\n   ├── Layout.vue\n   ├── PostLayout.vue\n   └── NotFound.vue\n")])])]),e("p",[t._v("你就可以將 "),e("code",[t._v("Layout.vue")]),t._v(" 作為首頁或是其他一般性頁面的版型來進行開發，常見的「關於我們」、「品牌故事」等等頁面可能會使用相同的版型，僅有修改內容來進行呈現。")]),t._v(" "),e("blockquote",[e("p",[t._v("當然如果有不同的版型需求，自然可以再增加新的版型進來。")])]),t._v(" "),e("p",[t._v("而各篇文章的內容則直接在 "),e("code",[t._v(".md")]),t._v(" 檔中透過 "),e("code",[t._v("frontmatter")]),t._v(" 來設定使用 "),e("code",[t._v("PostLayout.vue")]),t._v(" 作為 Layout 就可以囉！")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("layout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PostLayout\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("還記得前面提過的 Front Matter ： Markdown 的細節設定 嗎？")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"_404-怎麼辦"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_404-怎麼辦"}},[t._v("#")]),t._v(" 404 怎麼辦？")]),t._v(" "),e("p",[t._v("而如果遇到使用者的目標網址錯誤，路由匹配不到的話要怎麼處理呢？")]),t._v(" "),e("p",[t._v("其實 VuePress 也有約定了一個 404 狀況使用的 Layout 來給我們使用，如果不進行任何設定也沒關係，自然就會有預設的 404 頁面幫助使用者回到首頁。")]),t._v(" "),e("p",[t._v("但如果你想要調整 404 頁面的樣式、邏輯等等，就一樣要新增一個 Layout 組件才行，這個地方分享一個官方文件還沒修改的問題，官方文件上約定的是 "),e("code",[t._v("404.vue")]),t._v(" ，但其實要用 "),e("code",[t._v("NotFound.vue")]),t._v(" 才能正確的覆蓋使用喔，踩到的小小坑順便分享給你。")])])}),[],!1,null,null,null);a.default=v.exports}}]);