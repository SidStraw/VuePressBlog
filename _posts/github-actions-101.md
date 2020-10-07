# 15. 使用 GitHub Actions 來自動部署 GitHub Pages

# 使用 GitHub Actions 來自動部署 GitHub Pages

## Talk is cheap. Show you the code.

> 檔案路徑： .github/workflows 中，檔名可以自由設置但需要以 .yml 作為副檔名結尾，表示檔案格式為 YAML
以下範例檔為 .github/workflows/deploy.yml

```jsx
name: Deploy gh-pages

on:
  push:
    branches:
      - master

jobs:
  build:
    name: Build and deploy gh-pages
    env:
      MY_SECRET   : ${{secrets.commit_secret}}
      PUBLISH_DIR : .vuepress/dist
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [10.x]

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

## 自動編譯自動部署

好勒，上面洋洋灑灑一大段，如果是第一次接觸 YAML 或 GitHub Actions 的人，可能拳頭已經硬了吧？

但其實這個設定檔想要進行的動作很簡單，就是在每次 Git 的 master 分支有所改動時，就自動進行編譯與部屬的動作，就會像下圖這樣自動進行腳本動作，在我推送分支改動的同時就直接更新了線上的網站。

省去了手動的機械化操作，真的超香！

![https://i.imgur.com/TGKHKHQ.png](https://i.imgur.com/TGKHKHQ.png)

---

## GitHub Actions 設定檔

想要運行 GitHub Actions 就必須先設置相關的設定檔，設定檔的路徑是有被約定好的，要在專案的根目錄中新增 `.github/workflows/` 這樣的兩層資料夾。

將運作的腳本設定存放在這個目錄下，當每次提交新的版本改動到 GitHub 上時，GitHub 就會自動依照腳本中的條件判斷是否需要執行腳本囉。