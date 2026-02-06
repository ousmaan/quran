# Sync site files from repo root into ./quran for GitHub Pages publishing
# Run this before committing if you edit files at repo root.

$ErrorActionPreference = 'Stop'

$dest = Join-Path $PSScriptRoot 'quran'
if (!(Test-Path $dest)) {
  New-Item -ItemType Directory -Path $dest | Out-Null
}

$files = @(
  'index.html',
  'planning.html',
  'styles.css',
  'app.js',
  'data.js'
)

foreach ($f in $files) {
  $src = Join-Path $PSScriptRoot $f
  if (!(Test-Path $src)) {
    throw "Missing source file: $f"
  }
  Copy-Item $src (Join-Path $dest $f) -Force
}

Write-Host "Synced to $dest" -ForegroundColor Green
