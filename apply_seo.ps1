$seoData = @{
    "index.html" = @{
        "title" = "Accueil | Morningcom, Agence de Communication à Dakar"
        "description" = "Morningcom, agence de communication (Sénégal), propulse votre marque : stratégie, création de site web, publicité, marketing musical et événementiel."
    }
    "portfolio.html" = @{
        "title" = "Nos Réalisations & Projets | Agence Morningcom à Dakar"
        "description" = "Découvrez nos meilleures réalisations en stratégie de marque, création de site web et marketing digital. L'agence Morningcom booste votre croissance."
    }
    "equipe.html" = @{
        "title" = "L'Équipe Morningcom | Agence Créative à Dakar (Sénégal)"
        "description" = "Rencontrez l'équipe Morningcom : des experts passionnés à Dakar pour concevoir votre stratégie, votre identité visuelle et la création de site web."
    }
    "contact.html" = @{
        "title" = "Contactez-nous | Agence Morningcom Sénégal (Devis web)"
        "description" = "Besoin d'un devis pour la création d'un site web, un événement ou votre stratégie digitale ? Contactez l'agence Morningcom à Dakar, Sénégal."
    }
    "strategie-conseil.html" = @{
        "title" = "Stratégie de Marque & Conseil | Agence Morningcom Dakar"
        "description" = "Auditez et renforcez votre image de marque au Sénégal et en Afrique avec la stratégie et les conseils experts de l'agence de communication Morningcom."
    }
    "creation-design.html" = @{
        "title" = "Création & Design Graphique | Agence Morningcom"
        "description" = "Logos, chartes graphiques et identité visuelle sur-mesure. L'agence Morningcom sublime votre communication visuelle avec des designs premium et percutants."
    }
    "digital-performance.html" = @{
        "title" = "Marketing Digital & Performance | Agence Morningcom"
        "description" = "Boostez votre visibilité avec Morningcom : gestion des réseaux sociaux (Community Management), publicité (Social Ads) et stratégies de croissance digitale."
    }
    "evenements-relations.html" = @{
        "title" = "Événementiel & Relations Presse | Morningcom Sénégal"
        "description" = "Organisation d'événements corporate, lancements et relations médias au Sénégal. Morningcom garantit un rayonnement maximal à vos actions de communication."
    }
    "marketing-musical.html" = @{
        "title" = "Marketing Musical & Promotion | Agence Morningcom"
        "description" = "Stratégies de sortie, placement éditorial et relations médias pour artistes. L'agence Morningcom est leader en marketing musical au Sénégal."
    }
    "creation-web.html" = @{
        "title" = "Création de Site Web Vitrine & E-commerce | Morningcom"
        "description" = "Confiez la création de votre site web (vitrine, e-commerce) à Morningcom. Design sur-mesure, optimisation SEO et expérience utilisateur performante."
    }
    "simulation.html" = @{
        "title" = "Simulateur de Devis & Prix | Agence Morningcom"
        "description" = "Estimez rapidement le prix de création de site web, stratégie ou marketing musical avec le simulateur de projet de l'agence de communication Morningcom."
    }
    "rebranding-afribank.html" = @{
        "title" = "Rebranding AfriBank | Étude de cas Morningcom"
        "description" = "Découvrez l'étude de cas du rebranding d'AfriBank par l'agence Morningcom : modernisation de l'identité visuelle et stratégie de marque globale."
    }
    "dakar-fashion-week-2025.html" = @{
        "title" = "Dakar Fashion Week 2025 | Étude de cas Morningcom"
        "description" = "Étude de cas Morningcom : Découvrez notre accompagnement événementiel et stratégique pour l'édition 2025 de la prestigieuse Dakar Fashion Week."
    }
    "lancement-album-ngaaka.html" = @{
        "title" = "Lancement Album Ngaaka Blindé | Morningcom"
        "description" = "Marketing musical de pointe par Morningcom : retour sur le succès du lancement digital et événementiel de l'album Alkebulan de Ngaaka Blindé."
    }
    "campagne-mado-marque.html" = @{
        "title" = "Campagne Mado Marque | Étude de cas Morningcom"
        "description" = "Découvrez comment l'agence Morningcom a repensé la communication digitale et la stratégie de contenu de la marque premium Mado."
    }
    "politique-confidentialite.html" = @{
        "title" = "Politique de Confidentialité | Agence Morningcom"
        "description" = "Découvrez la politique de confidentialité de Morningcom, l'agence de communication digitale et événementielle basée à Dakar (Sénégal)."
    }
}

$imageUrl = "https://morningcom.agency/assets/images/global/Logo%20partage.png"
$baseUrl = "https://morningcom.agency"

$htmlFiles = Get-ChildItem -Path . -Filter *.html

foreach ($file in $htmlFiles) {
    $filename = $file.Name
    if (-not $seoData.ContainsKey($filename)) { continue }

    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    $title = $seoData[$filename]["title"]
    $desc = $seoData[$filename]["description"]
    $url = if ($filename -eq 'index.html') { "$baseUrl/" } else { "$baseUrl/$filename" }

    # Regex replacements to remove old tags
    $content = [regex]::Replace($content, '(?is)<title>.*?</title>\s*', '')
    $content = [regex]::Replace($content, '(?is)<meta\s+name="description".*?>\s*', '')
    $content = [regex]::Replace($content, '(?is)<meta\s+property="og:.*?>\s*', '')
    $content = [regex]::Replace($content, '(?is)<meta\s+name="twitter:.*?>\s*', '')

    $seoBlock = @"
    <title>$title</title>
    <meta name="description" content="$desc">

    <!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
    <meta property="og:title" content="$title">
    <meta property="og:description" content="$desc">
    <meta property="og:image" content="$imageUrl">
    <meta property="og:url" content="$url">
    <meta property="og:type" content="website">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="$title">
    <meta name="twitter:description" content="$desc">
    <meta name="twitter:image" content="$imageUrl">

"@

    # Insert after viewport
    if ($content -match '(?i)<meta\s+name="viewport"\s+content="width=device-width,\s*initial-scale=1\.0"\s*>') {
        $content = [regex]::Replace($content, '(?is)(<meta\s+name="viewport"\s+content="width=device-width,\s*initial-scale=1\.0"\s*>)\s*', "`$1`r`n$seoBlock", 1)
    }
    
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Injected SEO into $filename"
}
