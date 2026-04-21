import os
import glob

replacements = {
    "Ã©": "é",
    "Ã¨": "è",
    "Ã ": "à",
    "Ã‰": "É",
    "Ã´": "ô",
    "â† ": "←",
    "â†’": "→",
    "RÃ´le": "Rôle",
    "DÃ©fi": "Défi",
    "RÃ©sultat": "Résultat",
    "StratÃ©gie": "Stratégie",
    "Ã‰vÃ©nementiel": "Événementiel",
    "AnnÃ©e": "Année"
}

files = glob.glob("c:/Users/hp/Documents/MorningCom/*.html")
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    for k, v in replacements.items():
        content = content.replace(k, v)
        
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print("Done")
