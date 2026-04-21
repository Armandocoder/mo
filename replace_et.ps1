$rootDir = "c:\Users\hp\Documents\MorningCom"
Get-ChildItem -Path $rootDir -Filter *.html -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -Encoding UTF8
    
    # Remplacer les ampersands entourés d'espaces
    $content = $content -replace ' &amp; ', ' et '
    $content = $content -replace ' & ', ' et '
    
    # Pour s'assurer de capturer ceux collés à des balises (ex: <br>&amp;)
    $content = $content -replace '&amp;', ' et '
    
    # On gère les espaces multiples créés par précaution
    $content = $content -replace '  et  ', ' et '
    
    [System.IO.File]::WriteAllText($_.FullName, $content, [System.Text.Encoding]::UTF8)
}
