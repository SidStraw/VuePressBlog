# 21. Layout : VuePress theme 主題的基礎

# Layout : VuePress theme 主題的基礎

想要進行主題的開發，自然就要先對主題的專案結構有所了解，最最最基本的主題結構莫過於此：

```
.
└─ .vuepress
 └─ theme
     └─ Layout.vue
```

簡簡單的直接覆蓋預設版型，而在 VuePress 主題中的 `.vue` 檔案，包含 `Layout.vue` 就是一個非常純粹的 `.vue` 單文件組件，跟你用 CLI 進行開發的體驗大致上都是一樣的。

## 透過 `<Content/>` 將 `.md` 的內容注入

而既然是 `Layout.vue` ，那自然就是一個重複套用不同內容的版型，雖然如果你故意不注入內容，當作一般的 Vue 專案來進行開發的話也是一種選項啦，只是這條路線超級奇耙而已...

那麼如何注入內容呢？還記得 VuePress 的「約定」概念嗎？

不用 `import` 任何的檔案，直接在組件的 `<template></template>` 中加入 `<Content/>` 就可以囉！

```html
<template>
	<div>
		<Content/>
	</div>
</template>
```

> 這就是一個非常單純，純粹到只會把 `.md` 內容給渲染出來的 Layout 囉！

---

## Layout **組件的使用**

上面提到的 `Layout.vue` 這個檔案，是 VuePress 在預設情況下會使用的 Layout 版型，但實際上的專案應該很難用一個版型完成，一定會依照各種不同需求而使用不同的 Layout ，例如一個部落格網站，文章列表的版型與文章內容的版型一定會有所差異，所以就會開發出各種不同的版型來讓我們視情況調用。

 以這個 `layouts` 結構的部落格網站為例：

```
theme
└── layouts
   ├── Layout.vue
   ├── PostLayout.vue
   └── NotFound.vue
```

你就可以將 `Layout.vue` 作為首頁或是其他一般性頁面的版型來進行開發，常見的「關於我們」、「品牌故事」等等頁面可能會使用相同的版型，僅有修改內容來進行呈現。

> 當然如果有不同的版型需求，自然可以再增加新的版型進來。

而各篇文章的內容則直接在 `.md` 檔中透過 `frontmatter` 來設定使用 `PostLayout.vue` 作為 Layout 就可以囉！

```yaml
---
layout: PostLayout
---
```

> 還記得前面提過的 Front Matter ： Markdown 的細節設定 嗎？

---

## 404 怎麼辦？

而如果遇到使用者的目標網址錯誤，路由匹配不到的話要怎麼處理呢？

其實 VuePress 也有約定了一個 404 狀況使用的 Layout 來給我們使用，如果不進行任何設定也沒關係，自然就會有預設的 404 頁面幫助使用者回到首頁。

但如果你想要調整 404 頁面的樣式、邏輯等等，就一樣要新增一個 Layout 組件才行，這個地方分享一個官方文件還沒修改的問題，官方文件上約定的是 `404.vue` ，但其實要用 `NotFound.vue` 才能正確的覆蓋使用喔，踩到的小小坑順便分享給你。