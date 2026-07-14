$ErrorActionPreference = "Stop"
$bundleRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Get-Location

Copy-Item -Path (Join-Path $bundleRoot "src\*") -Destination (Join-Path $repoRoot "src") -Recurse -Force

Remove-Item -LiteralPath (Join-Path $repoRoot "src\content\config.ts") -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath (Join-Path $repoRoot "src\pages\[locale]\rss.xml.ts") -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath (Join-Path $repoRoot ".astro") -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Astro 7 source fixes applied. Run: npm run build"
