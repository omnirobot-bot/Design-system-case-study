# ✅ Finální Deployment Checklist

## 📋 Před Nahráním na GitHub

- [ ] **Aktualizuj `vite.config.ts`**
  - Nahraď `'your-repo-name'` skutečným názvem repository
  - Příklad: `'/design-system-case-study/'`

- [ ] **Zkontroluj `.gitignore`**
  - ✅ Už vytvořený
  - Ignoruje `node_modules/`, `dist/`, `.env`

- [ ] **Ověř placeholder obrázky**
  - ✅ Už nastavené (Unsplash URLs)
  - Můžeš nahradit později skutečnými obrázky

## 🚀 GitHub Upload

- [ ] **Git Init**
  ```bash
  git init
  git add .
  git commit -m "Initial commit: Design system case study"
  ```

- [ ] **Vytvoř Repository na GitHub**
  - Jdi na https://github.com/new
  - Název: `tvuj-repo-name`
  - Visibility: **Public** (nutné pro GitHub Pages)
  - **NEVYTVÁŘEJ** README, .gitignore, license (už je máš)

- [ ] **Připoj Remote a Push**
  ```bash
  git remote add origin https://github.com/USERNAME/REPO.git
  git branch -M main
  git push -u origin main
  ```

## ⚙️ GitHub Pages Setup

- [ ] **Zapni GitHub Pages**
  - Settings → Pages
  - Source: **GitHub Actions**

- [ ] **Sleduj Build**
  - Actions tab → sleduj "Deploy to GitHub Pages"
  - Počkej dokud není ✅ zelený (~2 minuty)

- [ ] **Ověř URL**
  - `https://USERNAME.github.io/REPO-NAME/`
  - Zkontroluj že se stránka načítá

## 🎨 Post-Deploy (Volitelné)

- [ ] **Nahraď Placeholder Obrázky**
  - Export z Figma Make (viz `HOW_TO_EXPORT_IMAGES.md`)
  - Ulož do `/public/images/`
  - `git add public/images/ && git commit -m "Add real images" && git push`

- [ ] **Přidej Screenshot do README**
  - Screenshot tvé živé stránky
  - Nahraj do `/public/` nebo použij GitHub Issues
  - Aktualizuj `README.md` s image linkem

- [ ] **Custom Domain (Volitelné)**
  - Vytvoř `public/CNAME` s tvou doménou
  - Settings → Pages → Custom domain
  - Nastav DNS u domain providera

## ✅ Ověření

- [ ] Stránka se načítá na GitHub Pages URL
- [ ] CSS je aplikovaný správně (dark background, glassmorphism)
- [ ] Parallax efekt funguje při scrollu
- [ ] Theme comparison slider funguje
- [ ] Fonty (Inter, JetBrains Mono) se načítají
- [ ] Obrázky se zobrazují (nebo placeholdery)
- [ ] Responsive na mobilu

## 🎉 Hotovo!

Gratulujeme! Tvá design system case study je živá na:

```
https://USERNAME.github.io/REPO-NAME/
```

---

## 📚 Další Zdroje

- **Quick Start**: `QUICK_START.md`
- **Detailní Návod**: `DEPLOYMENT_GUIDE.md`
- **Export Obrázků**: `HOW_TO_EXPORT_IMAGES.md`
- **Troubleshooting**: `DEPLOYMENT_GUIDE.md` → "Troubleshooting" sekce

---

**Máš problémy?** Zkontroluj GitHub Actions log v "Actions" tabu.
