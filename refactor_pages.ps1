$pagesDir = "c:\Users\hp\Documents\MorningCom\pages"
$rootDir = "c:\Users\hp\Documents\MorningCom"

Get-ChildItem -Path $pagesDir -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -Encoding UTF8
    $content = $content -replace 'href="\.\./', 'href="'
    $content = $content -replace 'src="\.\./', 'src="'
    
    $newPath = Join-Path $rootDir $_.Name
    [System.IO.File]::WriteAllText($newPath, $content, [System.Text.Encoding]::UTF8)
    Remove-Item $_.FullName
}

Remove-Item $pagesDir -Force -ErrorAction SilentlyContinue
