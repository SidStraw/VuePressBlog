# 22. VuePress theme 主題結構

# VuePress theme 主題結構

上一篇說明了 Layout 的概念其實就已經可以達成一定程度的客製化了，但人都是貪婪的，光靠簡單的 Layout 切換我想很難滿足實際上的需求對吧？

而且如果網站複雜度提高之後，也免不了要將畫面中的元件進行切割劃分，切割成 component 的形式，今天就來討論主題中「約定」好的目錄結構吧。

```
theme
├── global-components
│   └── xxx.vue
├── components
│   └── xxx.vue
├── layouts
│   ├── Layout.vue (必要)
│   └── NotFound.vue
├── styles
│   ├── index.styl
│   └── palette.styl
├── templates
│   ├── dev.html
│   └── ssr.html
├── index.js
├── enhanceApp.js
└── package.json
```

> 目錄結構的範例，其中只有 `layout/Layout.vue` 是必要的，其他都是可選。

---

## **目錄結構**

- `theme/global-components`

    存放在這個目錄下的所有 `.vue` 組件都會變成全域組件喔，最主要的應用情境是可以將一些重複性非常高，像是 `vInput.vue` 等的組件放在這邊，這樣在其他組件中需要使用時就可以直接在 `<template />` 中使用，不需要額外的引入，也可以在 `.md` 中直接進行使用喔！

    > 延伸閱讀： **[@vuepress/plugin-register-components](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components)**。

- `theme/components`

    用以儲存主題中各種 `.vue` 組件的目錄，不過就不像 `theme/global-components` 有特殊的註冊處理了，需要使用時要各別 `import`。

- `theme/layouts`

    Layout 版型的組件目錄，前面已經有介紹過了，要注意 `Layout.vue` 是主題的必要組件。

- `theme/styles`

    有約定兩個檔案，分別是 `index.styl` 與 `palette.styl` ，都是使用 `Stylus` 的格式來進行撰寫，不過不用擔心， `Stylus` 的樣式文件也是可以直接寫一般的 CSS 。

    1.  `index.styl` ：可以將全域套用的 CSS 寫在這邊。
    2. `palette.styl` ：透過這個檔案來進行 CSS 變數的定義， VuePress 也有約定相關的變數名稱與預設值，如下：

        ```scss
        // 顏色
        $accentColor = #3eaf7c
        $textColor = #2c3e50
        $borderColor = #eaecef
        $codeBgColor = #282c34
        $arrowBgColor = #ccc
        $badgeTipColor = #42b983
        $badgeWarningColor = darken(#ffe564, 35%)
        $badgeErrorColor = #DA5961

        // 佈局
        $navbarHeight = 3.6rem
        $sidebarWidth = 20rem
        $contentWidth = 740px
        $homePageWidth = 960px

        // 響應式變化點
        $MQNarrow = 959px
        $MQMobile = 719px
        $MQMobileNarrow = 419px
        ```

- `templates`：存儲 HTML 模板的文件，沒有必要的話不用改動。
    - `dev.html`：可以複寫開發環境的 HTML 模板文件。
    - `ssr.html`：可以複寫最終編譯結果的 HTML 模板文件。

---

## `theme/index.js` 與 `theme/enhanceApp.js`

不知道你有沒有注意到，上面的說明中並沒有提到這 `theme/index.js` 與 `theme/enhanceApp.js` 呢？

其實是這兩個檔案的觀念比較進階一些，就留待下一篇再來說明囉！

---

## 使用 `npm` 主題須確認是否有 `theme/index.js`

最後要注意一下，如果使用 `npm` 下載主題，又或者你將自己設置的主題發佈到 `npm` 來進行使用的話，就要確認這個主題中是否有 `theme/index.js` 這個主題配置檔喔，如果沒有的話就要記得在 `package.json` 中設置 `"main": "layouts/Layout.vue",`這個屬性，這樣 VuePress 才有辦法正確的編譯主題。

```json
// package.json 範例
{
	"name": "demo-blog",
  "version": "1.0.0",
	"main": "layouts/Layout.vue",
}
```