# ❓ FAQ - Často Kladené Otázky

## 🚀 Deployment

### Q: Musím mít nainstalovaný Node.js?

**A:** **NE!** GitHub Actions udělá build za tebe. Stačí nahrát kód na GitHub a zapnout GitHub Pages.

---

### Q: Jak dlouho trvá než je stránka živá?

**A:** ~2-3 minuty po prvním pushu. Každý další push trvá ~1-2 minuty.

---

### Q: Proč vidím 404 chybu?

**A:** Nejčastější příčiny:
1. **`base` v `vite.config.ts` nesedí s názvem repository**
   - Musí být přesně stejný: `/tvuj-repo-name/`
2. **GitHub Pages není zapnutý**
   - Settings → Pages → Source: GitHub Actions
3. **Repository není Public**
   - Settings → Change visibility → Public
4. **Build ještě nedoběhl**
   - Zkontroluj Actions tab, počkej dokud není ✅

---

### Q: CSS se nenačítá (stránka je bez stylů)

**A:** Zkontroluj:
1. `base` v `vite.config.ts` - musí končit `/` (lomítkem)
2. Repository je Public
3. GitHub Actions workflow je ✅ úspěšný
4. Browser console (F12) - tam vidíš 404 errory

---

### Q: Mohu použít privátní repository?

**A:** Ano, ale potřebuješ **GitHub Pro** nebo vyšší. Free účty podporují Pages jen pro Public repositories.

---

## 🖼️ Obrázky

### Q: Proč jsou tam nějaké random obrázky z Unsplash?

**A:** To jsou **placeholdery**. Figma Make používá speciální `figma:asset` importy, které nefungují mimo Figma Make. Placeholdery umožňují project deployovat ihned. Reálné obrázky přidáš později.

---

### Q: Jak nahradím placeholder obrázky?

**A:** Viz detailní návod v:
- `HOW_TO_EXPORT_IMAGES.md`
- `public/images/README.md`

Rychlá verze:
1. Export obrázky z Figma Make (pravý klik → Save image)
2. Přejmenuj na hashe z `images.ts`
3. Ulož do `/public/images/`
4. Commitni a pushni

---

### Q: Můžu použít vlastní obrázky místo těch z Figmy?

**A:** **Ano!** Stačí je přejmenovat na správné názvy a uložit do `/public/images/`.

Doporučené rozměry:
- Hero: 1920×1080px
- Theme comparisons: 1200×800px

---

### Q: Co když nemám přístup k originálním obrázkům?

**A:** Máš 3 možnosti:
1. **Použij placeholdery** (už jsou nastavené)
2. **Screenshoty** (viz `HOW_TO_EXPORT_IMAGES.md`)
3. **Požádej tým** o přístup k Figma source files

---

## 🔧 Technické

### Q: Mohu změnit barvy nebo fonty?

**A:** **Ano!** Vše je v CSS proměnných:
- Barvy: `/src/styles/theme.css`
- Fonty: `/src/styles/fonts.css`

Změny commitni a pushni → automaticky rebuilds.

---

### Q: Jak přidám nové sekce nebo komponenty?

**A:** 
1. Vytvoř nový component v `/src/app/components/`
2. Importuj a použij v `/src/app/App.tsx`
3. Commitni a pushni

---

### Q: Potřebuji spustit projekt lokálně?

**A:** **Ne**, ale pokud chceš:
```bash
pnpm install
pnpm run dev
```

Vyžaduje Node.js 20+.

---

### Q: Co je ten `figma:asset` import?

**A:** Speciální Figma Make systém pro import assets. Mimo Figma Make to nefunguje, proto jsme vytvořili placeholder systém přes `getPlaceholderImage()`.

---

## 📝 Git & GitHub

### Q: Jak updatnu živou stránku?

**A:**
```bash
# Udělej změny v kódu
git add .
git commit -m "Update content"
git push
```

GitHub automaticky rebuilds a za 2 minuty jsou změny živé!

---

### Q: "Permission denied" při push

**A:**
```bash
# Nastav git credentials
git config --global user.name "Tvoje Jméno"
git config --global user.email "tvuj@email.com"

# Pokud to nepomůže, vytvoř Personal Access Token:
# https://github.com/settings/tokens
# Použij token místo hesla při push
```

---

### Q: Jak smažu chybný commit?

**A:**
```bash
# Vrátit poslední commit (změny zůstanou)
git reset --soft HEAD~1

# Vrátit poslední commit (změny se smažou)
git reset --hard HEAD~1

# Force push (POZOR: používej opatrně!)
git push --force
```

---

## 🌐 Domain & URLs

### Q: Mohu použít vlastní doménu?

**A:** **Ano!** Viz `DEPLOYMENT_GUIDE.md` → "Custom Domain" sekce.

Rychlá verze:
1. Vytvoř `public/CNAME` s tvou doménou
2. Settings → Pages → Custom domain
3. Nastav DNS A records u domain providera

---

### Q: Jak změním URL strukturu?

**A:** URL je určená názvem tvého GitHub účtu a repository:
```
https://USERNAME.github.io/REPO-NAME/
```

Pro změnu musíš přejmenovat repository nebo použít custom domain.

---

## 🐛 Debugging

### Q: Kde vidím build errory?

**A:** GitHub → Actions tab → klikni na workflow → rozbal sekce

---

### Q: Build failuje s "Module not found"

**A:** Nejčastěji:
1. Chybí dependency v `package.json`
2. Špatný import path (case-sensitive!)
3. TypeScript error

Zkontroluj Actions log pro detaily.

---

### Q: Stránka funguje lokálně, ale ne na GitHub Pages

**A:** Zkontroluj:
1. `base` v `vite.config.ts`
2. Všechny cesty jsou relativní (ne absolutní)
3. Case-sensitivity v import paths (Linux je case-sensitive!)

---

## 📚 Další Pomoc

### Q: Kde najdu detailnější návody?

**A:**
- **Quick start**: `QUICK_START.md`
- **Kompletní guide**: `DEPLOYMENT_GUIDE.md`
- **Export obrázků**: `HOW_TO_EXPORT_IMAGES.md`
- **Checklist**: `FINAL_CHECKLIST.md`

---

### Q: Komu se zeptat když si nevím rady?

**A:**
1. **GitHub Actions Log** - nejdůležitější zdroj info
2. **Browser Console (F12)** - pro frontend problémy
3. **GitHub Issues** - vytvoř issue ve svém repository
4. **Stack Overflow** - pro obecné git/vite/react otázky

---

**Nenašel jsi odpověď?** Zkontroluj `DEPLOYMENT_GUIDE.md` → "Troubleshooting" sekce.
