import os
import re

pages_dir = r'c:\Users\hp\Documents\MorningCom\pages'

mapping = {
    'Portfolio.html': 'portfolio.html',
    'Equipe.html': 'equipe.html',
    'Contact.html': 'contact.html',
    'Simulation.html': 'simulation.html',
    'Strategie-Conseil.html': 'strategie-conseil.html',
    'Creation-Design.html': 'creation-design.html',
    'Digital-Performance.html': 'digital-performance.html',
    'Evenements-Relations.html': 'evenements-relations.html',
    'Marketing-Musical.html': 'marketing-musical.html',
    'Creation-Web.html': 'creation-web.html',
    'Rebranding-AfriBank.html': 'rebranding-afribank.html',
    'Lancement-Album-Youssou-N.html': 'lancement-album-youssou-n.html',
    'Dakar-Fashion-Week-2025.html': 'dakar-fashion-week-2025.html',
    'Campagne-Orange-SN.html': 'campagne-orange-sn.html'
}

for filename in os.listdir(pages_dir):
    if filename.endswith('.html'):
        path = os.path.join(pages_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Update all internal links to lowercase
        for old, new in mapping.items():
            content = re.sub(f'href=["\'](?:pages/)?{re.escape(old)}["\']', f'href="{new}"', content, flags=re.IGNORECASE)
            # Handle cases where it was already lowercase but had 'pages/' prefix
            content = re.sub(f'href=["\']pages/{re.escape(new)}["\']', f'href="{new}"', content, flags=re.IGNORECASE)

        # Fix Index.html link
        content = re.sub(r'href=["\'](?:\.\./)?Index\.html["\']', 'href="../Index.html"', content, flags=re.IGNORECASE)

        # Fix assets paths
        content = re.sub(r'href=["\']assets/', 'href="../assets/', content)
        content = re.sub(r'src=["\']assets/', 'src="../assets/', content)
        # Prevent double ../
        content = content.replace('href="../assets/', 'TEMP_ASSET_HREF')
        content = content.replace('src="../assets/', 'TEMP_ASSET_SRC')
        content = content.replace('../../assets/', 'TEMP_ASSET_DOUBLE')
        
        content = content.replace('TEMP_ASSET_HREF', 'href="../assets/')
        content = content.replace('TEMP_ASSET_SRC', 'src="../assets/')
        content = content.replace('TEMP_ASSET_DOUBLE', '../assets/')

        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Done")
