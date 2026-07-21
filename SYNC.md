## 知识库同步说明

### 同步流程
1. 网站代码更新后，本文件作为知识库主文件
2. 将此文件复制到 knowledge/ 目录供RAG系统摄入
3. 同时同步至飞书文档

### 飞书同步命令
```powershell
npx @larksuite/cli docs +update <doc_token> --content @./website-knowledge-base.md --doc-format markdown --api-version v2
```

### 同步脚本
每次更新可运行 sync-website.ps1 一键同步
