# 17. GitHub Actions 的 Workflow 設定檔解析（2）

# GitHub Actions 的 Workflow 設定檔解析（2）

在上一篇文章說明了 Workflow 的名稱與觸發條件的設置，今天就來分析 `jobs` 的部分吧。

---

## `jobs` 確切執行的動作

上一篇有提到：

> 不過在我的範例中因為專案相當單純，網站樣式等等目前也是使用已完成開發的主題，所以網站專案的本體其實主要都是 .md 等內容，我認為也沒有必要在發表新文章、新消息等文件增減的狀況下安排測試，因此工作流就簡化成一組 build 囉。

```yaml
jobs:
  build:
    name: Build and deploy gh-pages
		# jobs 的名稱，正確命名才能方便狀況發生時的排查

    env:
      MY_SECRET   : ${{secrets.commit_secret}}
      PUBLISH_DIR : .vuepress/dist
		# 設置環境變數，先定義好腳本使用的變數

    runs-on: ubuntu-latest
		# 設置腳本運行時的 Docker base-image

    strategy:
      matrix:
        node-version: [10.x]
		# 可以設置一組陣列，在本工作流中會自動用類似迴圈的方式重複注入 steps 進行運作
		# 這邊的範例中只有使用一組內容，所以 steps 只會進行一次動作
		# 而 steps 中的  ${{ matrix.node-version }} 就會依序注入陣列中的值

#-----------------------------------------------------------------------

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - uses: borales/actions-yarn@v2.0.0
      with:
        cmd: install # will run `yarn install` command
    - uses: borales/actions-yarn@v2.0.0
      with:
        cmd: build # will run `yarn build` command
    - name: Commit files
      run: |
        echo ${{secrets.DEPLOY_PASSWORD}} | sudo -S chown -R $USER:$USER $PUBLISH_DIR
        cd $PUBLISH_DIR
        git init
        git config --local user.email "action@github.com"
        git config --local user.name "GitHub Action"
        git status
        git remote add origin <https://$MY_SECRET@github.com/$GITHUB_REPOSITORY.git>
        git checkout -b gh-pages
        git add --all
        git commit -m "deploy to Github pages"
    - name: Push changes
      uses: ad-m/github-push-action@master
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        branch: 'gh-pages'
        force: true
        directory: '.vuepress/dist'
```

---

## `steps` 是工作流的實際動作命令

本例中，動作概述上就是：

1. 使用 `actions/checkout@v2` 來設置 GitHub Actions 的相關環境
2. 設置使用的 Node.js 版本
3. 使用 `yarn` 指令
4. 為編譯輸出的內容打上 `commit` 版本
5. 將編譯內容推送至 GitHub Pages 使用的 `gh-pages` 分支