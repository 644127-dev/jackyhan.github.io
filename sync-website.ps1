# 晗歌个人网站同步脚本
# 用法: powershell -ExecutionPolicy Bypass -File sync-website.ps1

$ROOT = "C:\Users\Lenovo\Documents\New project"
$SITE = Join-Path $ROOT "personal-site"
$KB = Join-Path $ROOT "knowledge"
$FEISHU_CONTENT = Join-Path $ROOT "feishu-doc-content.md"

Write-Host "=== 晗歌个人网站同步工具 ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: Git status
Write-Host "[1/5] 检查 Git 状态..." -ForegroundColor Yellow
cd $SITE
$status = git status --short
if ($status) {
    Write-Host "    有未提交的更改:" -ForegroundColor Yellow
    $status | ForEach-Object { Write-Host "    $_" }
} else {
    Write-Host "    工作区干净" -ForegroundColor Green
}

# Step 2: Preview site
Write-Host "[2/5] 如需本地预览，打开 index.html" -ForegroundColor Yellow

# Step 3: Commit and push
Write-Host "[3/5] 提交并推送 (git add + commit + push)" -ForegroundColor Yellow
Write-Host "    执行: git add -A && git commit -m 'update' && git push" -ForegroundColor Gray

# Step 4: Sync knowledge base
Write-Host "[4/5] 同步知识库文件..." -ForegroundColor Yellow
$kbSource = Join-Path $SITE "website-knowledge-base.md"
$kbTarget = Join-Path $KB "domain\personal-website-2026.md"
if (Test-Path $kbSource) {
    Copy-Item $kbSource $kbTarget -Force
    Write-Host "    [OK] 已同步至 $kbTarget" -ForegroundColor Green
} else {
    Write-Host "    [SKIP] 知识库源文件不存在" -ForegroundColor Gray
}

# Step 5: Sync Feishu
Write-Host "[5/5] 同步飞书文档..." -ForegroundColor Yellow
Write-Host "    执行: npx @larksuite/cli docs +update <doc_token> --content @./feishu-doc-content.md" -ForegroundColor Gray

Write-Host ""
Write-Host "=== 完成 ===" -ForegroundColor Cyan
