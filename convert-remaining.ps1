# Convert all remaining videos to HLS
$ffmpeg = ".\media\videos\raw\extracted_test\ffmpeg-2025-12-24-git-abb1524138-essentials_build\bin\ffmpeg.exe"
$videos = @("session1", "session2", "session3", "session4", "session5")

foreach ($video in $videos) {
    $inputFile = ".\media\videos\raw\$video.mp4"
    $outputDir = ".\media\hls\$video"
    
    if (Test-Path $inputFile) {
        Write-Host "Converting $video..." -ForegroundColor Cyan
        New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
        
        & $ffmpeg -y -i $inputFile `
            -c:v libx264 -crf 22 -preset fast `
            -c:a aac -b:a 128k `
            -f hls -hls_time 4 -hls_list_size 0 -hls_playlist_type vod `
            "$outputDir\index.m3u8"
        
        Write-Host "Done: $video" -ForegroundColor Green
    }
}
Write-Host "`nAll conversions complete!" -ForegroundColor Green
