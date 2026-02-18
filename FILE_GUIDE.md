# 📁 Přehled Důležitých Souborů

Tento dokument vysvětluje účel každého důležitého souboru v projektu.

## 📖 Dokumentace (Začni Zde!)

| Soubor | Účel | Pro Koho |
|--------|------|----------|
| **QUICK_START.md** | ⚡ Nejrychlejší cesta k deployu (3 kroky) | Začátečníci |
| **DEPLOYMENT_GUIDE.md** | 📚 Kompletní deployment návod + troubleshooting | Všichni |
| **FAQ.md** | ❓ Často kladené otázky | Při problémech |
| **FINAL_CHECKLIST.md** | ✅ Checklist před/po deployu | Pre-launch check |
| **HOW_TO_EXPORT_IMAGES.md** | 📸 Jak exportovat obrázky z Figma Make | Při nahrazování obrázků |
| **GITHUB_CHECKLIST.md** | ✅ Stručný checklist pro GitHub upload | Quick reference |
| **README.md** | 📄 Hlavní dokumentace projektu | Overview projektu |

---

## ⚙️ Konfigurace

### **vite.config.ts**
- Vite build konfigurace
- **DŮLEŽITÉ**: Obsahuje `base` path pro GitHub Pages
- **Akce**: Nahraď `'your-repo-name'` skutečným názvem repository

### **package.json**
- npm/pnpm dependencies
- Build scripty
- ✅ **Neměň** (pokud nevíš co děláš)

### **postcss.config.mjs**
- PostCSS konfigurace pro Tailwind
- ✅ **Neměň**

### **.nvmrc**
- Specifikuje Node.js verzi (20)
- Pro vývojáře s `nvm`

---

## 🚀 GitHub Actions

### **.github/workflows/deploy.yml**
- Automatický build & deploy workflow
- Spustí se při každém push do `main`
- ✅ **Neměň** (funguje out-of-the-box)

### **.gitignore**
- Ignoruje `node_modules/`, `dist/`, `.env`
- ✅ **Neměň**

---

## 🎨 Styles

### **src/styles/theme.css**
- **HLAVNÍ design system tokens**
- Barvy, spacing, typography, shadows
- 🎨 **Můžeš customizovat** (viz FAQ)

### **src/styles/fonts.css**
- Font imports (Inter, JetBrains Mono)
- Google Fonts CDN
- 🎨 **Můžeš přidat nové fonty**

### **src/styles/tailwind.css**
- Tailwind v4 konfigurace
- ✅ **Neměň** (pokud nerozumíš Tailwind)

### **src/styles/index.css**
- Global styles entry point
- Importuje všechny ostatní CSS
- ✅ **Neměň**

---

## 🧩 Komponenty

### **src/app/App.tsx**
- **HLAVNÍ aplikační component**
- Single-page scroll layout
- Všechny sekce (Hero, Context, Architecture, atd.)
- 🎨 **Upravuj** pro změnu obsahu

### **src/app/components/Badge.tsx**
- Barevné badge komponenty (Norton, Avast, atd.)
- Props: `color`, `variant`

### **src/app/components/GlassCard.tsx**
- Glassmorphism card component
- Props: `padding`

### **src/app/components/DSButton.tsx**
- Design system button component
- Props: `variant`, `size`

### **src/app/components/ThemeComparison.tsx**
- Interaktivní dark/light theme slider
- Drag-to-compare funkcionalita

---

## 🖼️ Assets & Config

### **src/app/config/placeholders.ts**
- **Placeholder image URLs** (Unsplash)
- Funkce `getPlaceholderImage()`
- 🔄 **Nahraď později** skutečnými obrázky

### **src/app/config/images.ts**
- Dokumentace figma:asset hashů
- Reference pro image názvy

### **public/images/**
- Složka pro statické obrázky
- **Sem patří tvé exportované PNG**
- Názvy: `[hash].png` (viz `images.ts`)

### **public/images/README.md**
- Návod jak nahrát obrázky
- Doporučené rozměry

### **public/placeholder.html**
- HTML stránka s instrukcemi pro placeholdery
- Nepotřebné pro běh aplikace

---

## 🧰 Utility Scripty

### **setup.sh**
- Bash script pro automatické nastavení
- Aktualizuje `vite.config.ts`
- Nastavuje Git
- 🐧 Linux/macOS only

---

## 📝 Ostatní Dokumentace

### **CASE_STUDY_README.md**
- Dokumentace case study obsahu
- Historie projektu

### **ATTRIBUTIONS.md**
- Kredity a licence

### **guidelines/Guidelines.md**
- Design guidelines
- Použití komponent

---

## 🚫 Neměň Tyto Soubory

Tyto soubory jsou **system files** a jejich změna může rozbít projekt:

- ❌ **src/app/components/figma/ImageWithFallback.tsx** (protected)
- ❌ **pnpm-lock.yaml** (protected)
- ❌ **postcss.config.mjs**
- ❌ **.github/workflows/deploy.yml** (pokud nevíš co děláš)
- ❌ **vite.config.ts** (kromě `base` hodnoty)

---

## ✅ Bezpečně Můžeš Měnit

Tyto soubory/složky jsou určené k customizaci:

- ✅ **src/app/App.tsx** - obsah stránky
- ✅ **src/app/components/** - všechny komponenty
- ✅ **src/styles/theme.css** - barvy, spacing, typography
- ✅ **src/styles/fonts.css** - přidat nové fonty
- ✅ **public/images/** - nahrát vlastní obrázky
- ✅ **README.md** - upravit dokumentaci
- ✅ **src/app/config/placeholders.ts** - změnit placeholder URLs

---

## 📊 File Tree

```
/
├── 📖 QUICK_START.md           ← ZAČNI TADY!
├── 📖 DEPLOYMENT_GUIDE.md      ← Kompletní návod
├── 📖 FAQ.md                   ← Časté otázky
├── 📖 FINAL_CHECKLIST.md       ← Pre-launch checklist
├── 📖 HOW_TO_EXPORT_IMAGES.md  ← Export obrázků
├── 📖 GITHUB_CHECKLIST.md      ← Quick checklist
├── 📖 README.md                ← Hlavní dokumentace
│
├── ⚙️ vite.config.ts           ← AKTUALIZUJ: base path
├── ⚙️ package.json
├── ⚙️ .gitignore
├── ⚙️ .nvmrc
│
├── 🚀 .github/
│   └── workflows/
│       └── deploy.yml          ← Auto build/deploy
│
├── 🎨 src/
│   ├── app/
│   │   ├── App.tsx             ← HLAVNÍ soubor
│   │   ├── components/         ← Komponenty
│   │   │   ├── Badge.tsx
│   │   │   ├── GlassCard.tsx
│   │   │   ├── DSButton.tsx
│   │   │   └── ThemeComparison.tsx
│   │   └── config/
│   │       ├── placeholders.ts ← Placeholder URLs
│   │       └── images.ts       ← Image hashe
│   │
│   └── styles/
│       ├── theme.css           ← Design system tokens
│       ├── fonts.css           ← Font imports
│       ├── tailwind.css
│       └── index.css
│
└── 🖼️ public/
    └── images/                 ← Tvé PNG obrázky
        └── README.md           ← Návod
```

---

## 🎯 Podle Úkolu

**Chci deployovat na GitHub:**
→ `QUICK_START.md`

**Mám problém s buildem:**
→ `FAQ.md` → `DEPLOYMENT_GUIDE.md` (Troubleshooting)

**Chci změnit barvy/fonty:**
→ `src/styles/theme.css` + `FAQ.md`

**Chci přidat nový obsah:**
→ `src/app/App.tsx`

**Chci nahradit obrázky:**
→ `HOW_TO_EXPORT_IMAGES.md` → `public/images/`

**Před prvním pushem:**
→ `FINAL_CHECKLIST.md`

---

**Máš dotazy?** Začni s `FAQ.md`!
