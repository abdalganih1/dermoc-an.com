# Simple HLS Conversion Script
$ffmpeg = ".\media\videos\raw\extracted_test\ffmpeg-2025-12-24-git-abb1524138-essentials_build\bin\ffmpeg.exe"

# Convert first video as test
Write-Host "Converting protocol video to HLS..." -ForegroundColor Cyan

# Create directories
New-Item -ItemType Directory -Force -Path ".\media\hls\protocol" | Out-Null

# Simple HLS conversion with master playlist
& $ffmpeg -y -i ".\media\videos\raw\protocol.mp4" `
    -c:v libx264 -crf 22 -preset fast `
    -c:a aac -b:a 128k `
    -f hls `
    -hls_time 4 `
    -hls_list_size 0 `
    -hls_playlist_type vod `
    ".\media\hls\protocol\index.m3u8"

if (Test-Path ".\media\hls\protocol\index.m3u8") {
    Write-Host "SUCCESS: protocol HLS created!" -ForegroundColor Green
} else {
    Write-Host "FAILED: Check FFmpeg output" -ForegroundColor Red
}
