---
date: '2020-05-10'
slug: google-cloud-platform
tags:
- 前端開發
title: Google Cloud Platform 介紹與前端應用
description: Google Cloud Platform 介紹與前端應用
author: SidStraw
image: https://i.imgur.com/9KCYWz6.png
featured: true
---

## 在 GCP 中主要具有 7 大功能

----

1. Compute：運算相關服務，包含虛擬主機、App Engine 等
1. Storage：SQL、NoSQL 資料庫與檔案儲存空間
1. Networking：平衡系統負載和提供安全規則的設置
1. Stackdriver：提供日誌記錄、監控、追踪等工具
1. Tools：為開發人員管理部署和應用程式構建的服務
1. Big Data：處理和分析大型數據的服務
1. Artificial Intelligence：提供一系列API運行特定的人工智慧和機器學習任務

---

## Cloud Identity and Access Management（IAM）
IAM 用於定義誰可以訪問哪些資源。我們可以透過IAM服務來檢查和修改此類角色和權限。

進入 IAM 頁面後會看到其中列出的所有帳號，可從 Type 區分為 Service account 及 User

**請注意，Service account 為資源建立時由 GCP 自動建立，除刪除重建資源外無法恢復，相關操作請謹慎進行**

----

|身份|viewer|editor|owner|
|---|---|---|---|
|權限|唯讀|修改現有資源|新增資源及修改其他使用者|

---

## Google Cloud API
類似「服務」的概念，GCP 所提供的各種服務皆以 API 的方式呈現，目前 GCP 上已有 200 多個 API ，範圍包含 SaaS 、虛擬機、大數據、機器學習等各領域，可以按照自身使用的需求來決定是否啟用，相關費用與計費方式也都會在 API 頁面列出。

----

需要功能？去吧！GCP 把 API 都列在 API Library 了！

---

## Cloud Shell
GCP 的控制除了透過 UI 介面以外，也可以使用 Command line 來進行控制，GCP 內建有網頁式的 Terminal 工具，已經完成 Cloud SDK 等相關環境設置，如果有啟用運算資源（虛擬主機）也可以直接開啟網頁式 Termanal 連結進入該主機。
>註：請使用 Chrome 以免發生不預期的錯誤

----

如想要透過本機 Terminal 工具連結 GCP 需自行安裝 Cloud SDK 
Cloud SDK 相關指令與安裝流程請參閱 [Cloud SDK 說明文件](https://cloud.google.com/sdk/gcloud/)

---

## 雲端服務架構區分
1. 基礎架構即服務 (IaaS)
1. 平台即服務 (PaaS)
1. 軟體即服務 (SaaS)

----

### 基礎架構即服務 (IaaS)
提供客戶儲存、網路、伺服器及其他運算資源

----

### 平台即服務 (PaaS)
供應基礎架構，如 App Engine 提供 Node.js、Java、Ruby、C#、Go、Python 和 PHP 的運行環境，並支援 Docker Image 部署

----

### 體即服務 (SaaS)
直接提供雲端服務使用，例如 Cloud Firestore、Cloud Functions 等

---

## 小型 Web 專案主要需求資源
1. Compute：運算相關服務，包含虛擬主機、App Engine 等
1. Storage：SQL、NoSQL 資料庫與檔案儲存空間
2. Networking：主要進行 IP、防火牆等相關網路設定

----

完整的 Web 服務勢必需要包含DNS、託管主機、後端邏輯與資料庫架構，而 DNS、SSL、CDN 相關服務有普及率更高，費用也相對較低的 Cloudflare，故此處僅羅列出 Compute、Storage 相關資源。

---

## Compute 相關資源介紹
1. COMPUTE ENGINE
3. APP ENGINE
4. KUBERNETES ENGINE
5. Cloud Functions

---

## Storage 相關資源介紹
1. CLOUD SQL
2. Cloud Firestore
3. Cloud Storage

---

## Networking
1. VNC

---

## Serverless 架構
如果是想建立 MVP 最小可行性產品 (Minimum Viable Product) 快速投入市場，那麼直接使用 Serverless 架構的 Firebase 是一個不錯的選項，Firebase 的服務結合了靜態網站的部署還有上面列出的 `Cloud Functions`、`Cloud Firestore`、`Cloud Storage` 等服務

----

Serverless 架構可讓前端工程師不需費神處理主機、資安防護、資料庫正規化等不擅長的領域，可以直接在前端程式中操作 `Cloud Firestore` NoSQL 資料庫，若是需要較為複雜的功能，或是有安全性及商業邏輯暴露的考量，也可搭配`Cloud Functions` 使用 Node.js 作為後端架構。