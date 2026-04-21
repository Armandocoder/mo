import os
import re

base_dir = r'c:\Users\hp\Documents\MorningCom'

def replace_ampersands(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace &amp; first
    content = content.replace('&amp;', ' et ')
    # Replace & surrounded by spaces
    content = content.replace(' & ', ' et ')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# Walk through all html files
for root, dirs, files in os.walk(base_dir):
    for name in files:
        if name.endswith('.html'):
            replace_ampersands(os.path.join(root, name))

print("Done")
