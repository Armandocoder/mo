$files = Get-ChildItem -Path '.' -Filter *.html -Recurse
foreach ($file in $files) {
    if ($file.FullName -match 'pages') {
        $faviconStr = '<link rel="icon" type="image/png" href="../favicon.ico?v=2">'
    } else {
        $faviconStr = '<link rel="icon" type="image/png" href="favicon.ico?v=2">'
    }
    
    $c = Get-Content $file.FullName -Raw
    # replace the previous favicons (which were x-icon favicon.ico)
    $c = [regex]::Replace($c, '(?i)<link.*?favicon\.ico.*?>', $faviconStr)
    Set-Content -Path $file.FullName -Value $c
}

# Also update the header.js fallback
$headerFile = 'components/header.js'
if (Test-Path $headerFile) {
    $c = Get-Content $headerFile -Raw
    $c = [regex]::Replace($c, 'type=\"image/x-icon\" href=\"\$\{basePath\}favicon\.ico\"', 'type="image/png" href="${basePath}favicon.ico?v=2"')
    Set-Content -Path $headerFile -Value $c
}

Write-Host "Favicons updated to bypass cache!"
