# HLS Conversion Script for Dermocean Videos
# This script converts all raw videos to HLS format with multiple qualities

$ffmpeg = ".\media\videos\raw\extracted_test\ffmpeg-2025-12-24-git-abb1524138-essentials_build\bin\ffmpeg.exe"
$inputDir = ".\media\videos\raw"
$outputDir = ".\media\hls"

# Create output directory
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

# List of videos to convert
$videos = @("protocol", "session1", "session2", "session3", "session4", "session5")

foreach ($video in $videos) {
    $inputFile = "$inputDir\$video.mp4"
    $videoOutputDir = "$outputDir\$video"
    
    if (Test-Path $inputFile) {
        Write-Host "Converting $video..." -ForegroundColor Cyan
        
        # Create video output directory
        New-Item -ItemType Directory -Force -Path $videoOutputDir | Out-Null
        New-Item -ItemType Directory -Force -Path "$videoOutputDir\360p" | Out-Null
        New-Item -ItemType Directory -Force -Path "$videoOutputDir\720p" | Out-Null
        New-Item -ItemType Directory -Force -Path "$videoOutputDir\1080p" | Out-Null
        
        # Convert to HLS with 3 quality levels
        & $ffmpeg -i $inputFile `
            -filter_complex "[0:v]split=3[v1][v2][v3]; [v1]scale=640:360[v360p]; [v2]scale=1280:720[v720p]; [v3]scale=1920:1080[v1080p]" `
            -map "[v360p]" -c:v:0 libx264 -b:v:0 800k -maxrate:v:0 900k -bufsize:v:0 1200k `
            -map "[v720p]" -c:v:1 libx264 -b:v:1 2500k -maxrate:v:1 2800k -bufsize:v:1 4000k `
            -map "[v1080p]" -c:v:2 libx264 -b:v:2 5000k -maxrate:v:2 5500k -bufsize:v:2 8000k `
            -map 0:a -c:a aac -b:a 128k -ac 2 `
            -f hls `
            -hls_time 6 `
            -hls_list_size 0 `
            -hls_segment_filename "$videoOutputDir\%v\segment_%03d.ts" `
            -master_pl_name "master.m3u8" `
            -var_stream_map "v:0,a:0,name:360p v:1,a:0,name:720p v:2,a:0,name:1080p" `
            "$videoOutputDir\%v\index.m3u8"
        
        # Also extract thumbnail
        $thumbnailDir = ".\images\thumbnails"
        New-Item -ItemType Directory -Force -Path $thumbnailDir | Out-Null
        & $ffmpeg -i $inputFile -ss 00:00:02 -vframes 1 -y "$thumbnailDir\$video.jpg"
        
        Write-Host "Done: $video" -ForegroundColor Green
    } else {
        Write-Host "File not found: $inputFile" -ForegroundColor Red
    }
}

Write-Host "`nAll conversions complete!" -ForegroundColor Green
