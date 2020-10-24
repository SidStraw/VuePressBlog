# 13. GitHub Pages : 免費好用的網站部署平台

# GitHub Pages : 免費好用的網站部署平台

前面有提過 JAMstack 最大的優勢之一就是成本非常的低，原因之一就是靜態網站的部署有太多免費好用的平台工具，這邊來介紹的 GitHub Pages 就是非常優質的一個靜態網站部署平台。

我們不但可以利用 Git 做版本控制，上傳到 GitHub 做程式的管理、備份與協作，還可以將開發完成的網站直接讓 GitHub 來幫我們呈現給使用者，這根本就是免費的一條龍服務了！

今天就來牛刀小試一下，直接不碰程式來弄一個 GitHub Pages 來讓你體會一下吧。

## 建立 GitHub 儲存庫

創建 GitHub 帳號的部分我就不多加著墨了，畢竟創建帳號的過程並沒有與大多的會員註冊流程沒有太大的不同，所以就從建立「程式碼儲存庫」開始吧。

首先先點右上角的 `＋` 號叫出選單，選擇 `New repository`

![https://i.imgur.com/WDaFCAV.png](https://i.imgur.com/WDaFCAV.png)

接著可以看到像這樣的設定畫面：

![https://i.imgur.com/62tzYG1.png](https://i.imgur.com/62tzYG1.png)

這時候可以先不用過於著墨選項的內容，唯一的必填只有 `Repository name` 而已，這只是在設定儲存庫的名稱，不要跟你已經有的儲存庫重名就可以了，這邊我用本系列的名稱 `JAMstackByVuePress` 為名。

預設的 Public 是公開儲存庫內容，關閉這個選項就不能使用今天的主題： GitHub Pages 了所以不能動啊。

輸入完儲存庫名稱就可以按下 `Create repository` 來建立儲存庫囉。

---

## 啟動 GitHub Pages

建立完儲存庫後，一開始因為還沒有任何的版本提交上來，所以會顯示預設的啟動指南頁面，不過我們今天目的是先讓你知道 GitHub Pages 所以我們直接進入 `Settings` 設定頁面。

![https://i.imgur.com/x2TMy81.png](https://i.imgur.com/x2TMy81.png)

在設定頁面中有很多內容，關於 GitHub Pages 的設定區域幾乎在頁面的最底部了，往下拉之後應該可以看到這個設定區域：

![https://i.imgur.com/KsLjtec.png](https://i.imgur.com/KsLjtec.png)

上面的文字是在說明現在沒有任何程式提交到這個儲存庫，所以無法啟動 GitHub Pages ，不過沒關係，我們可以用 `Choose a theme` 這個選項直接提交一個。

![https://i.imgur.com/VqinK2v.jpg](https://i.imgur.com/VqinK2v.jpg)

點擊 `Choose a theme` 後就會進入這樣的頁面，可以選擇一個喜歡的版型，我這邊就直接用第一組版型了，選擇完成之後按下 `Select theme`

還沒完喔！這時候會讓你編輯頁面內容使用的 `.md` 檔，預設就有一些內容了，因為我們之後也不會真的用這個頁面作為個人網站使用，所以就不特別修改啦！

![https://i.imgur.com/LajHbO7.png](https://i.imgur.com/LajHbO7.png)

按下 `Commit changes` 後設定就完成囉！

---

## 來看看設定好的頁面如何呈現吧

送出 `Commit changes` 後會回到儲存庫的首頁，會發現已經不是剛剛的啟動指南頁面囉，因為我們的儲存庫剛剛已經送出了一個版本改動呢！

![https://i.imgur.com/kfmqiOf.png](https://i.imgur.com/kfmqiOf.png)

一樣先到 `Settings` 頁面吧！

可以看到 GitHUb Pages 的設定區塊，內容也跟剛剛不一樣了：

![https://i.imgur.com/bUQJXFG.png](https://i.imgur.com/bUQJXFG.png)

這時候我們只要點擊綠色區域內的那段網址，就可以看到這個儲存庫的網頁囉！

![https://i.imgur.com/VAXE7kV.jpg](https://i.imgur.com/VAXE7kV.jpg)