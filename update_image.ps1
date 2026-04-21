$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $c = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $c = $c.Replace('Logo%20partage.png', 'Preview.png')
    [System.IO.File]::WriteAllText($file.FullName, $c, [System.Text.Encoding]::UTF8)
}
