# 🚀 Kompletní Deployment Guide

Tento návod tě provede celým procesem nahrání projektu na GitHub a zprovoznění GitHub Pages.

## 📋 Předpoklady

- ✅ Máš GitHub účet (pokud ne: https://github.com/signup)
- ✅ Máš stažený projekt z Figma Make
- ❌ **NEPOTŘEBUJEŠ** Node.js nebo npm (GitHub to udělá za tebe)

---

## 🎯 Metoda 1: Setup Script (Nejrychlejší)

### Krok 1: Spusť Setup Script

```bash
# V terminálu v root složce projektu:
chmod +x setup.sh
./setup.sh
```

Script se tě zeptá na:
- Název repository (např. `design-system-case-study`)
- Tvůj GitHub username

Pak automaticky:
- ✅ Nastaví Git
- ✅ Aktualizuje vite.config.ts
- ✅ Udělá první commit
- ✅ Nastaví remote URL

### Krok 2: Vytvoř Repository na GitHubu

1. Jdi na https://github.com/new
2. **Repository name**: Stejný název jako zadal jsi do scriptu
3. **Visibility**: Public
4. **NEVYTVÁŘEJ** README, .gitignore, nebo license (už je máš)
5. Klikni **Create repository**

### Krok 3: Push na GitHub

```bash
git push -u origin main
```

### Krok 4: Zapni GitHub Pages

1. Na GitHubu jdi do **Settings** → **Pages**
2. **Source**: GitHub Actions
3. **Hotovo!** Za ~2 minuty bude živý na:
   `https://tvuj-username.github.io/tvuj-repo-name/`

---

## 🔧 Metoda 2: Manuální Setup (Krok za Krokem)

### Krok 1: Aktualizuj vite.config.ts

Otevři `/vite.config.ts` a nahraď `your-repo-name`:

```typescript
base: process.env.GITHUB_ACTIONS ? '/tvuj-repo-name/' : '/',
```

### Krok 2: Inicializuj Git

```bash
# V terminálu v root složce projektu:
git init
git add .
git commit -m "Initial commit: Design system case study"
```

### Krok 3: Vytvoř Repository na GitHubu

1. Jdi na https://github.com/new
2. **Repository name**: Tvůj název (např. `design-system-case-study`)
3. **Visibility**: Public
4. **NEVYTVÁŘEJ** README nebo .gitignore
5. Klikni **Create repository**

### Krok 4: Připoj Remote a Push

```bash
# Nahraď YOUR_USERNAME a YOUR_REPO_NAME
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Krok 5: Zapni GitHub Pages

1. Na GitHubu: **Settings** → **Pages**
2. **Source**: Vyber **GitHub Actions**
3. GitHub automaticky detekuje workflow a začne buildovat

### Krok 6: Počkej na Build

1. Jdi do **Actions** tabu
2. Uvidíš běžící workflow "Deploy to GitHub Pages"
3. Počkej ~2 minuty dokud není ✅ zelený

### Krok 7: Otevři Stránku

Tvá stránka je živá na:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## 🖼️ Nahrazení Placeholder Obrázků

**DŮLEŽITÉ:** Projekt teď používá placeholder obrázky. Pro produkční nasazení je nahraď:

### Metoda A: Export z Figma Make

1. Otevři projekt v Figma Make
2. Pravý klik na každý obrázek → **Save image as...**
3. Ulož do `/public/images/` s těmito názvy:
   - `3e7d7607fcde0150bb6315b8d6796f02fa0b674a.png` (hero)
   - `2859fd2813b789422148dc7593a9a22997bbc9a5.png` (dark theme)
   - `b5333ffd9dc52b8d9f5946724102aa9e32735d46.png` (light theme)

### Metoda B: Použij Vlastní Obrázky

Nahraď soubory v `/public/images/` s doporučenými rozměry:
- Hero: 1920×1080px
- Theme comparisons: 1200×800px

### Commitni Změny

```bash
git add public/images/
git commit -m "Add real images"
git push
```

GitHub automaticky rebuilds a za 2 minuty jsou nové obrázky živé!

---

## 🔍 Troubleshooting

### ❌ Stránka zobrazuje 404

**Řešení:**
1. Zkontroluj **Settings → Pages** - je zapnutý?
2. Zkontroluj **Actions** - byl build úspěšný?
3. Počkaj 5 minut (GitHub Pages může trvat chvíli)

### ❌ CSS nebo obrázky se nenačítají

**Řešení:**
1. Zkontroluj `base` v `vite.config.ts` - musí sedět s názvem repository
2. Repository musí být **Public**
3. Zkontroluj browser console (F12) pro 404 errory

### ❌ Build failuje v GitHub Actions

**Řešení:**
1. Zkontroluj **Actions** tab → klikni na failed workflow
2. Rozbal sekce pro detailní log
3. Nejčastější problémy:
   - Chybí dependencies → zkontroluj `package.json`
   - TypeScript errory → zkontroluj kód lokálně

### ❌ "Permission denied" při push

**Řešení:**
```bash
# 1. Nastav Git credentials
git config --global user.name "Tvoje Jméno"
git config --global user.email "tvuj@email.com"

# 2. Použij Personal Access Token místo hesla
# Vytvoř na: https://github.com/settings/tokens
# Pak při pushu zadej token místo hesla
```

### ❌ Git říká "nothing to commit"

**Normální!** Znamená to, že už jsou všechny změny commitnuté.

```bash
# Zkontroluj status
git status

# Pokud jsou uncommitted changes:
git add .
git commit -m "Update"
git push
```

---

## 📊 GitHub Actions Workflow

Projekt obsahuje automatický build workflow (`.github/workflows/deploy.yml`):

```yaml
✅ Trigger: Push do main branch (nebo manuálně)
✅ Install: pnpm install --frozen-lockfile
✅ Build: pnpm run build
✅ Deploy: Automaticky na GitHub Pages
```

### Co Workflow Dělá

1. **Checkout** - stáhne tvůj kód
2. **Setup Node.js** - nainstaluje Node.js 20
3. **Install pnpm** - package manager
4. **Cache dependencies** - zrychlí další buildy
5. **Install dependencies** - nainstaluje všechny balíčky
6. **Build** - zkompiluje projekt do `/dist`
7. **Upload artifact** - připraví pro deploy
8. **Deploy** - nahraje na GitHub Pages

---

## 🎨 Customizace Po Deployu

### Změna Barev

Uprav `/src/styles/theme.css`:

```css
:root {
  --primary: rgba(254, 235, 41, 1.00);  /* Tvoje barva */
  --accent: rgba(15, 113, 240, 1.00);   /* Tvoje barva */
}
```

Commitni a pushni → automaticky se rebuilds!

### Změna Obsahu

Uprav `/src/app/App.tsx` nebo komponenty v `/src/app/components/`

Commitni a pushni → automaticky živé!

### Custom Domain

1. **Vytvoř** `public/CNAME` soubor s tvou doménou:
   ```
   tvojadomena.com
   ```

2. **V GitHub:** Settings → Pages → Custom domain

3. **U domain providera:** Nastav DNS:
   ```
   A Record:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

---

## 📝 Další Kroky

Po úspěšném deployu:

- [ ] Nahraď placeholder obrázky
- [ ] Přidej screenshot do README.md
- [ ] Nastav custom domain (volitelné)
- [ ] Sdílej URL s týmem! 🎉

---

## 🆘 Potřebuješ Pomoc?

1. **GitHub Actions Log** - nejlepší zdroj debug info
2. **Browser Console (F12)** - uvidíš 404 errory
3. **Git status** - `git status` pro kontrolu změn

---

**Hotovo!** 🎉 Teď máš živou case study na GitHubu!

URL: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
