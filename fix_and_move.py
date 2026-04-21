import os
import shutil

root_dir = r"c:\Users\hp\Documents\MorningCom"
pages_dir = os.path.join(root_dir, "pages")

if os.path.exists(pages_dir):
    for filename in os.listdir(pages_dir):
        if filename.endswith(".html"):
            filepath = os.path.join(pages_dir, filename)
            
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace relative double-dot paths with current folder relative paths
            content = content.replace('href="../', 'href="')
            content = content.replace('src="../', 'src="')
            
            # Also handle if they were using some hardcoded strings
            new_filepath = os.path.join(root_dir, filename)
            
            with open(new_filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Remove original
            os.remove(filepath)
            
    # Try to remove pages directory if empty
    try:
        os.rmdir(pages_dir)
        print("Moved pages and removed pages/ directory")
    except Exception as e:
        print(f"Moved pages, but couldn't delete pages/ directory: {e}")
else:
    print("pages directory not found")
