# 23. VuePress : theme/index.js 主題配置文件

# VuePress : `theme/index.js` 主題配置文件

上一篇說明了 theme 主題中的目錄結構，但是關鍵的 `theme/index.js` 卻被我賣了個關子對吧？

其實

今天就來講講主題配置的概念吧。

---

## `theme/index.js` 的兩種輸出格式

`.vuepress/theme/index.js` 跟 `.vuepress/config.js` 都是配置用的檔案，有一個小小的共通點，就是一樣需要使用 `module.exports` 來將設置輸出，但是又有點不一樣的是， `theme/index.js` 在設置上多了一些彈性，不只可以單純寫成物件來輸出，也可以寫成一個 `function` ，能夠進行更加複雜的處理。

導出一個 JavaScript 物件的設置方式相對單純，只要翻閱文件確認 `key` 值的設定即可，我想比較需要說明的是導出 `function` 的設置模式，書寫的格式會像這樣：

```jsx
// .vuepress/theme/index.js
module.exports = (themeConfig, ctx) => {
   return {
      // ...
   }
}
```

## `function` 的設置方法

其實從上面的格式中可以看出來，這個 `function` 其實最後也是輸出了一個物件，但主要的差別就是有了 `themeConfig` 、 `ctx` 兩個參數。

這兩個參數中的第一個  `themeConfig` ，其實就是在`.vuepress/config.js` 這個整體專案的設置檔中，進行設置的 `themeConfig` ，為什麼需要這個參數呢？

就是為了可以讓其他人使用你的主題時，可以直接在專案中就完成這些細節設定，可以包含是否要啟用某些外掛套件、套件的參數又要如何設定...等等。

至於第二個參數 `ctx` 就是比較進階的需求才會設置到的，這邊就先不多作介紹，有興趣的可以參閱官方文件 [Context API](https://vuepress.vuejs.org/zh/plugin/context-api.html)

---

## `plugins` 外掛套件設置

而其實在設置上，我覺得最主要的設置就是針對 `plugins` 了，主題中需要使用哪些 `plugins` 、又是否需要個別的設置，這些就會是主題設置的主要內容。

可以看一下設置的輸出範例：

```jsx
module.exports = (themeConfig, ctx) => {
  const plugins = [
    "disqus",
    "seo",
    "smooth-scroll",
    "reading-progress",
    '@vuepress/back-to-top',
    ["@vuepress/medium-zoom", {selector: '.post-content img',}],
    ["@vuepress/blog", defaultBlogPluginOptions],
  ];

  if (themeConfig.googleAnalytics) {
    plugins.push([
      "@vuepress/google-analytics",
      {
        ga: themeConfig.googleAnalytics
      }
    ]);
  }

  const config = {
    plugins,
  };

  return config;
};
```

這是一個簡化過的設置範例，也透過 `themeConfig.googleAnalytics` 示範了 `themeConfig` 的使用，應該不難看出外掛套件的設置方法吧？

其實有個小祕技，有興趣的話你可以猜看看下面這句的作用，明天再來公佈解答囉。

```jsx
// .vuepress/theme/index.js
module.exports = (themeConfig, ctx) => {
	themeConfig = Object.assign(themeConfig, {});

	return {
		// ...
	}
}
```