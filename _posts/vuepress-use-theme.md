# 11. VuePress 模板與主題使用

# VuePress 模板與主題使用

其實以我目前使用 VuePress 的感想，其中一個比較不友善的地方就是 VuePress 沒有提供一個專案的 CLI 鷹架作為啟動使用，不過這也確實跟 VuePress 初衷之一的「最小配置」準則有關就是了。

不過沒有關係，沒有官方的 CLI 但也有許多人分享了模板供大家使用，我這邊就以 Ahmad Mostafa （GitHub：[z3by](https://github.com/z3by)）所開發的 VuePress 模板與主題來做個簡單的說明吧。

---

## 下載模板檔案

你可以到 [z3by](https://github.com/z3by)/**[vuepress-blog-template](https://github.com/z3by/vuepress-blog-template)** 將模板專案下載到你的電腦，下載的選項在點擊 `Code` 按鈕後就可以看到了。

> 如果你的電腦已經有安裝 Git 的話，可以使用 git clone 來把專案複製下來，現在沒有安裝的話也沒關係，後面的章節也對對 Git 與 GitHub 做個簡介。

現在就先用 `Download ZIP` 來把檔案下載下來吧。

![11%20VuePress%20%E6%A8%A1%E6%9D%BF%E8%88%87%E4%B8%BB%E9%A1%8C%E4%BD%BF%E7%94%A8%20a8a8b58989214fd08c479d79beefc7b6/Untitled.png](11%20VuePress%20%E6%A8%A1%E6%9D%BF%E8%88%87%E4%B8%BB%E9%A1%8C%E4%BD%BF%E7%94%A8%20a8a8b58989214fd08c479d79beefc7b6/Untitled.png)

---

## 打開專案資料安裝所需套件

下載下來的模板中，其實並沒有將運作所需的套件一併下載，所以我們要先打開終端機 Terminal 輸入 `yarn` 來將專案所需的套件進行下載與安裝。

![11%20VuePress%20%E6%A8%A1%E6%9D%BF%E8%88%87%E4%B8%BB%E9%A1%8C%E4%BD%BF%E7%94%A8%20a8a8b58989214fd08c479d79beefc7b6/Untitled%201.png](11%20VuePress%20%E6%A8%A1%E6%9D%BF%E8%88%87%E4%B8%BB%E9%A1%8C%E4%BD%BF%E7%94%A8%20a8a8b58989214fd08c479d79beefc7b6/Untitled%201.png)

當套件的安裝流程跑完之後，在終端機中輸入 `yarn dev` 就可以啟動開發伺服器了，當編譯跑完出現像這樣的畫面時：

![11%20VuePress%20%E6%A8%A1%E6%9D%BF%E8%88%87%E4%B8%BB%E9%A1%8C%E4%BD%BF%E7%94%A8%20a8a8b58989214fd08c479d79beefc7b6/Untitled%202.png](11%20VuePress%20%E6%A8%A1%E6%9D%BF%E8%88%87%E4%B8%BB%E9%A1%8C%E4%BD%BF%E7%94%A8%20a8a8b58989214fd08c479d79beefc7b6/Untitled%202.png)

打開瀏覽器就可以看到像這樣完整呈現的網站囉！是不是超簡單的啊！

![11%20VuePress%20%E6%A8%A1%E6%9D%BF%E8%88%87%E4%B8%BB%E9%A1%8C%E4%BD%BF%E7%94%A8%20a8a8b58989214fd08c479d79beefc7b6/Untitled%203.png](11%20VuePress%20%E6%A8%A1%E6%9D%BF%E8%88%87%E4%B8%BB%E9%A1%8C%E4%BD%BF%E7%94%A8%20a8a8b58989214fd08c479d79beefc7b6/Untitled%203.png)

---

## 模板中已設定了主題

為什麼透過模板打開的畫面，跟我們前面的感覺差那麼多呢？

因為這個模板預設已經設定了使用該作者開發的主題： `vuepress-theme-modern-blog` 囉，我們可以先來看看專案中的 `package.json` ：

```json
"devDependencies": {
  "vuepress": "^1.2.0",
  "vuepress-plugin-crisp": "^1.0.0",
  "vuepress-theme-modern-blog": "^2.4.1"
}
```

可以看到依賴套件中，有一個 `vuepress-theme-modern-blog` 對吧，這就代表我們在上面使用 `yarn` 下載套件時，已經一併把主題套件給下載下來了。

再來我們看看 `.vuepress/config.js`  也可以看到這一行：

```json
module.exports = {
  theme: "modern-blog",
}
```

這就是透過設定，來告訴 VuePress 使用 `vuepress-theme-modern-blog` 這個主題喔。

> 如果主題名以 `vuepress-theme-` 開頭，在 `.vuepress/config.js` 設定中可以省略這個前綴。

---

## 主題文件

但這個網站，還不能稱之為你的對吧？

畢竟標題、內容等等都還是一副模板的樣子，這時候其實就可以開始在 `.vuepress/config.js` 中來進行各項的設定，主題的設定文件可以在這邊看到： [vuepress-theme-modern-blog 主題文件](https://github.com/z3by/vuepress-theme-modern-blog/blob/master/docs/theme-config.md)

而文章的撰寫只要寫在 `_posts` 裡面，就可以被編譯成文章網頁囉，作者也提供了範本可以讓你參考，先來玩玩看吧！