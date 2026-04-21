$dir = "c:\Users\hp\Documents\MorningCom"
$files = Get-ChildItem -Path $dir -Filter "*.html" | Select-Object -ExpandProperty FullName

$replacements = [ordered]@{
    $([char]195 + [char]169) = "é"
    $([char]195 + [char]168) = "è"
    $([char]195 + [char]160) = "à"
    $([char]195 + [char]137) = "É"
    $([char]195 + [char]180) = "ô"
    "â† " = "←"
    "â†’" = "→"
}

$backBtnCode = @"
<!-- BOUTON RETOUR GLOBAL -->
<a href="javascript:history.back()" class="floating-back fade-in" style="position:fixed; bottom:30px; right:30px; background:var(--dark-3); color:var(--cream); padding:14px 28px; border-radius:50px; font-size:13px; font-family:'DM Sans', sans-serif; text-decoration:none; z-index:90; box-shadow:0 8px 24px rgba(0,0,0,0.6); display:inline-flex; align-items:center; gap:12px; border:1px solid rgba(255,255,255,.1); transition:background .3s, color .3s, transform .3s;" onmouseover="this.style.background='#FFFFFF'; this.style.color='#000000'; this.style.transform='translateY(-4px)'" onmouseout="this.style.background='var(--dark-3)'; this.style.color='var(--cream)'; this.style.transform='translateY(0)'">
  <span style="font-size:16px;">←</span> Retour
</a>
"@

foreach ($f in $files) {
    if (Test-Path $f) {
        $content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
        
        foreach ($k in $replacements.Keys) {
            $content = $content.Replace($k, $replacements[$k])
        }
        
        if ($f -notmatch "Index.html" -and $content -notmatch "floating-back") {
            $content = $content.Replace("</body>", "`n" + $backBtnCode + "`n</body>")
        }
        
        [System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
    }
}

Write-Output "Fixed."
