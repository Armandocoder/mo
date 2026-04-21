$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $c = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $c = [regex]::Replace($c, '(?is)<!-- Open Graph \(Facebook, LinkedIn, WhatsApp\) -->\s*<!-- Twitter Card -->\s*', '')
    [System.IO.File]::WriteAllText($file.FullName, $c, [System.Text.Encoding]::UTF8)
}
