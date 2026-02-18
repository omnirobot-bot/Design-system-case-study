# 🚀 QUICK START - GitHub Pages Deploy

Nejrychlejší cesta k živé stránce (bez Node.js instalace).

## ⚡ 3 Kroky (5 minut)

### 1️⃣ Aktualizuj Repo Název

Otevři `/vite.config.ts` a nahraď `your-repo-name`:

```typescript
base: process.env.GITHUB_ACTIONS ? '/tvuj-repo-name/' : '/',
```

### 2️⃣ Vytvoř GitHub Repository

```bash
# V terminálu v root složce projektu:
git init
git add .
git commit -m "Initial commit: Design system case study"

# Vytvoř repository na GitHubu: https://github.com/new
# Pak připoj a pushni:
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

### 3️⃣ Zapni GitHub Pages

1. Na GitHubu: **Settings** → **Pages**
2. **Source**: **GitHub Actions**
3. Za 2 minuty je živý! 🎉

---

## 🌐 Tvá URL

```
https://USERNAME.github.io/REPO-NAME/
```

---

## 🖼️ Obrázky (Později)

Teď projekt používá placeholder obrázky z Unsplash.

**Pro produkční nasazení:**
1. Export obrázky z Figma Make
2. Ulož do `/public/images/` (viz `public/images/README.md`)
3. Commitni a pushni

---

## 🆘 Něco nefunguje?

Zkontroluj:
- ✅ `base` v vite.config.ts sedí s názvem repository
- ✅ Repository je **Public**
- ✅ GitHub Actions workflow je ✅ zelený
- ✅ GitHub Pages je zapnutý v Settings

**Detailní troubleshooting:** `DEPLOYMENT_GUIDE.md`

---

**Hotovo!** Za 5 minut máš živou case study na GitHubu! 🚀
