import os
import re

seo_data = {
    'index.html': {
        'title': "Accueil | Morningcom, Agence de Communication à Dakar",
        'description': "Morningcom, agence de communication (Sénégal), propulse votre marque : stratégie, création de site web, publicité, marketing musical et événementiel."
    },
    'portfolio.html': {
        'title': "Nos Réalisations & Projets | Agence Morningcom à Dakar",
        'description': "Découvrez nos meilleures réalisations en stratégie de marque, création de site web et marketing digital. L'agence Morningcom booste votre croissance."
    },
    'equipe.html': {
        'title': "L'Équipe Morningcom | Agence Créative à Dakar (Sénégal)",
        'description': "Rencontrez l'équipe Morningcom : des experts passionnés à Dakar pour concevoir votre stratégie, votre identité visuelle et la création de site web."
    },
    'contact.html': {
        'title': "Contactez-nous | Agence Morningcom Sénégal (Devis web)",
        'description': "Besoin d'un devis pour la création d'un site web, un événement ou votre stratégie digitale ? Contactez l'agence Morningcom à Dakar, Sénégal."
    },
    'strategie-conseil.html': {
        'title': "Stratégie de Marque & Conseil | Agence Morningcom Dakar",
        'description': "Auditez et renforcez votre image de marque au Sénégal et en Afrique avec la stratégie et les conseils experts de l'agence de communication Morningcom."
    },
    'creation-design.html': {
        'title': "Création & Design Graphique | Agence Morningcom",
        'description': "Logos, chartes graphiques et identité visuelle sur-mesure. L'agence Morningcom sublime votre communication visuelle avec des designs premium et percutants."
    },
    'digital-performance.html': {
        'title': "Marketing Digital & Performance | Agence Morningcom",
        'description': "Boostez votre visibilité avec Morningcom : gestion des réseaux sociaux (Community Management), publicité (Social Ads) et stratégies de croissance digitale."
    },
    'evenements-relations.html': {
        'title': "Événementiel & Relations Presse | Morningcom Sénégal",
        'description': "Organisation d'événements corporate, lancements et relations médias au Sénégal. Morningcom garantit un rayonnement maximal à vos actions de communication."
    },
    'marketing-musical.html': {
        'title': "Marketing Musical & Promotion | Agence Morningcom",
        'description': "Stratégies de sortie, placement éditorial et relations médias pour artistes. L'agence Morningcom est leader en marketing musical au Sénégal."
    },
    'creation-web.html': {
        'title': "Création de Site Web Vitrine & E-commerce | Morningcom",
        'description': "Confiez la création de votre site web (vitrine, e-commerce) à Morningcom. Design sur-mesure, optimisation SEO et expérience utilisateur performante."
    },
    'simulation.html': {
        'title': "Simulateur de Devis & Prix | Agence Morningcom",
        'description': "Estimez rapidement le prix de création de site web, stratégie ou marketing musical avec le simulateur de projet de l'agence de communication Morningcom."
    },
    'rebranding-afribank.html': {
        'title': "Rebranding AfriBank | Étude de cas Morningcom",
        'description': "Découvrez l'étude de cas du rebranding d'AfriBank par l'agence Morningcom : modernisation de l'identité visuelle et stratégie de marque globale."
    },
    'dakar-fashion-week-2025.html': {
        'title': "Dakar Fashion Week 2025 | Étude de cas Morningcom",
        'description': "Étude de cas Morningcom : Découvrez notre accompagnement événementiel et stratégique pour l'édition 2025 de la prestigieuse Dakar Fashion Week."
    },
    'lancement-album-ngaaka.html': {
        'title': "Lancement Album Ngaaka Blindé | Morningcom",
        'description': "Marketing musical de pointe par Morningcom : retour sur le succès du lancement digital et événementiel de l'album Alkebulan de Ngaaka Blindé."
    },
    'campagne-mado-marque.html': {
        'title': "Campagne Mado Marque | Étude de cas Morningcom",
        'description': "Découvrez comment l'agence Morningcom a repensé la communication digitale et la stratégie de contenu de la marque premium Mado."
    },
    'politique-confidentialite.html': {
        'title': "Politique de Confidentialité | Agence Morningcom",
        'description': "Découvrez la politique de confidentialité de Morningcom, l'agence de communication digitale et événementielle basée à Dakar (Sénégal)."
    }
}

image_url = "https://morningcom.agency/assets/images/global/Logo%20partage.png"
base_url = "https://morningcom.agency"

def inject_seo(filepath):
    filename = os.path.basename(filepath)
    if filename not in seo_data:
        return
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    data = seo_data[filename]
    title = data['title']
    desc = data['description']
    url = f"{base_url}/{filename}" if filename != 'index.html' else f"{base_url}/"

    # Remove existing <title> and meta tags if they exist to start fresh
    content = re.sub(r'<title>.*?</title>\s*', '', content, flags=re.IGNORECASE|re.DOTALL)
    content = re.sub(r'<meta\s+name="description".*?>\s*', '', content, flags=re.IGNORECASE|re.DOTALL)
    content = re.sub(r'<meta\s+property="og:.*?>\s*', '', content, flags=re.IGNORECASE|re.DOTALL)
    content = re.sub(r'<meta\s+name="twitter:.*?>\s*', '', content, flags=re.IGNORECASE|re.DOTALL)
    
    # We construct the new SEO block
    seo_block = f"""<title>{title}</title>
    <meta name="description" content="{desc}">

    <!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{desc}">
    <meta property="og:image" content="{image_url}">
    <meta property="og:url" content="{url}">
    <meta property="og:type" content="website">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content="{desc}">
    <meta name="twitter:image" content="{image_url}">
"""

    # Insert right after the charset or viewport
    if '<meta name="viewport"' in content:
        content = re.sub(
            r'(<meta\s+name="viewport"\s+content="width=device-width,\s*initial-scale=1\.0"\s*>)\s*',
            r'\1\n    ' + seo_block.replace('\n', '\n    '),
            content,
            count=1,
            flags=re.IGNORECASE
        )
    elif '<meta charset="UTF-8">' in content:
        content = re.sub(
            r'(<meta\s+charset="UTF-8"\s*>)\s*',
            r'\1\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    ' + seo_block.replace('\n', '\n    '),
            content,
            count=1,
            flags=re.IGNORECASE
        )
    else:
        content = re.sub(
            r'(<head>)\s*',
            r'\1\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    ' + seo_block.replace('\n', '\n    '),
            content,
            count=1,
            flags=re.IGNORECASE
        )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for file in os.listdir('.'):
    if file.endswith('.html'):
        inject_seo(file)
        print(f"Injected SEO into {file}")

