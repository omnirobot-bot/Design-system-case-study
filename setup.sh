#!/bin/bash

# 🚀 Quick Setup Script pro GitHub Pages
# Tento script ti pomůže rychle nastavit projekt

echo "🎨 Design System Case Study - GitHub Setup"
echo "=========================================="
echo ""

# 1. Zjisti název repository
echo "📝 Krok 1: Název GitHub Repository"
echo ""
read -p "Zadej název tvého GitHub repository (např. 'design-system-case-study'): " REPO_NAME

if [ -z "$REPO_NAME" ]; then
    echo "❌ Název repository nemůže být prázdný!"
    exit 1
fi

echo ""
echo "✅ Repository: $REPO_NAME"
echo ""

# 2. Aktualizuj vite.config.ts
echo "📝 Krok 2: Aktualizuji vite.config.ts..."
sed -i.bak "s/your-repo-name/$REPO_NAME/g" vite.config.ts
rm vite.config.ts.bak 2>/dev/null
echo "✅ vite.config.ts aktualizován"
echo ""

# 3. Git setup
echo "📝 Krok 3: Git inicializace"
echo ""

if [ -d .git ]; then
    echo "ℹ️  Git repository už existuje"
else
    git init
    echo "✅ Git repository inicializován"
fi

# 4. Přidej soubory
echo ""
echo "📝 Krok 4: Přidávám soubory do gitu..."
git add .
echo "✅ Soubory přidány"
echo ""

# 5. První commit
echo "📝 Krok 5: Vytvářím první commit..."
git commit -m "Initial commit: Design system case study" 2>/dev/null || echo "ℹ️  Commit už existuje nebo žádné změny"
echo ""

# 6. Remote setup
echo "📝 Krok 6: GitHub Remote Setup"
echo ""
read -p "Zadej tvůj GitHub username: " GITHUB_USER

if [ -z "$GITHUB_USER" ]; then
    echo "❌ Username nemůže být prázdný!"
    exit 1
fi

REMOTE_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"

# Zkontroluj jestli remote už existuje
if git remote | grep -q "origin"; then
    echo "ℹ️  Remote 'origin' už existuje, aktualizuji URL..."
    git remote set-url origin $REMOTE_URL
else
    git remote add origin $REMOTE_URL
fi

echo "✅ Remote nastaven: $REMOTE_URL"
echo ""

# 7. Branch setup
echo "📝 Krok 7: Nastavuji main branch..."
git branch -M main 2>/dev/null || echo "ℹ️  Branch 'main' už existuje"
echo ""

# 8. Finální instrukce
echo "=========================================="
echo "✅ Setup dokončen!"
echo "=========================================="
echo ""
echo "📋 Co dělat dál:"
echo ""
echo "1️⃣  Vytvoř repository na GitHubu:"
echo "    👉 https://github.com/new"
echo "    📝 Název: $REPO_NAME"
echo "    🔓 Public repository"
echo ""
echo "2️⃣  Push kód na GitHub:"
echo "    git push -u origin main"
echo ""
echo "3️⃣  Zapni GitHub Pages:"
echo "    • Jdi do Settings → Pages"
echo "    • Source: GitHub Actions"
echo ""
echo "4️⃣  Nahraď placeholder obrázky:"
echo "    • Podívej se do /public/images/README.md"
echo ""
echo "🌐 Tvá stránka bude dostupná na:"
echo "   https://$GITHUB_USER.github.io/$REPO_NAME/"
echo ""
echo "=========================================="
echo "🎉 Hotovo! Teď jen vytvoř repository a pushni!"
echo "=========================================="
