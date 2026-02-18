# ✅ GitHub Deployment Checklist

Rychlý checklist pro nahrání na GitHub Pages.

## 🚀 Quick Start (5 minut)

### Varianta A: Setup Script
```bash
chmod +x setup.sh
./setup.sh
```

### Varianta B: Manuálně

- [ ] **1. Aktualizuj `vite.config.ts`**
  ```typescript
  base: process.env.GITHUB_ACTIONS ? '/tvuj-repo-name/' : '/',
  ```

- [ ] **2. Git Init**
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  ```

- [ ] **3. Vytvoř GitHub Repository**
  - Jdi na https://github.com/new
  - Název: `tvuj-repo-name`
  - Public ✅
  - Bez README/gitignore

- [ ] **4. Push na GitHub**
  ```bash
  git remote add origin https://github.com/USERNAME/REPO.git
  git branch -M main
  git push -u origin main
  ```

- [ ] **5. Zapni GitHub Pages**
  - Settings → Pages
  - Source: **GitHub Actions**

- [ ] **6. Počkej 2 minuty**
  - Actions tab → sleduj progress
  - ✅ zelený = hotovo!

---

## 🖼️ Nahrazení Obrázků (později)

- [ ] Export z Figma Make nebo použij vlastní
- [ ] Ulož do `/public/images/` s hashovými názvy
- [ ] `git add public/images/ && git commit -m "Add images" && git push`

---

## 🎯 URL Tvé Stránky

```
https://TVUJ_USERNAME.github.io/TVUJ_REPO_NAME/
```

---

## 🔍 Kontrola

- [ ] GitHub Actions workflow je ✅ zelený
- [ ] Settings → Pages ukazuje URL
- [ ] Stránka se načítá v browseru
- [ ] CSS se aplikuje správně
- [ ] Obrázky se načítají (nebo placeholdery)

---

## 🆘 Problémy?

| Problém | Řešení |
|---------|--------|
| 404 Not Found | Zkontroluj `base` v vite.config.ts |
| CSS nenačítá | Repository musí být Public |
| Build fails | Zkontroluj Actions log |
| Push denied | Nastav git config nebo použij token |

---

**Detailní návod:** viz `DEPLOYMENT_GUIDE.md`

**Pomoc s obrázky:** viz `public/images/README.md`
