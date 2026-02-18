# 🎨 Design System Case Study

Enterprise-grade design system case study prezentující jednotný, multibrandový a multiplatformní design systém pro cybersecurity značky (Norton, Avast, AVG, Avira, CCleaner) napříč Windows, macOS, iOS a Android platformami.

---

## 👋 **NOVÝ UŽIVATEL? ZAČNI TADY!**

👉 **[START_HERE.md](./START_HERE.md)** - První kroky s projektem

---

## 🚀 **QUICK START - Deploy na GitHub Pages**

**Chceš rychle nahrát na GitHub?**

👉 **[QUICK_START.md](./QUICK_START.md)** - 3 kroky, 5 minut, živá stránka!

**Nebo použij setup script:**
```bash
chmod +x setup.sh && ./setup.sh
```

---

## 📚 **Dokumentace**

| Soubor | Popis |
|--------|-------|
| **[QUICK_START.md](./QUICK_START.md)** | ⚡ Nejrychlejší cesta k deployu |
| **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** | 📖 Kompletní deployment návod |
| **[FAQ.md](./FAQ.md)** | ❓ Často kladené otázky |
| **[FINAL_CHECKLIST.md](./FINAL_CHECKLIST.md)** | ✅ Pre-launch checklist |
| **[HOW_TO_EXPORT_IMAGES.md](./HOW_TO_EXPORT_IMAGES.md)** | 📸 Export obrázků z Figma Make |
| **[FILE_GUIDE.md](./FILE_GUIDE.md)** | 📁 Přehled všech souborů |

---

## ✨ Features

- 🌙 **Premium Dark Aesthetic** - Glassmorphism surfaces s deep near-black background (#070910)
- 🎭 **Multibrand Architecture** - Identický component structure napříč brands
- 📱 **Cross-Platform** - Windows, macOS, iOS, Android
- ⚡ **Smooth Parallax Effects** - Hero background s plynulým scrollem
- 🎨 **Professional Typography** - Inter & JetBrains Mono
- 🔄 **Interactive Theme Comparison** - Drag-to-compare dark/light themes

## 🚀 Deploy na GitHub Pages

### 1️⃣ Vytvoř GitHub Repository

```bash
# Inicializuj git repository
git init

# Přidej všechny soubory
git add .

# První commit
git commit -m "Initial commit: Design system case study"

# Vytvoř repository na GitHub (https://github.com/new)
# Pak připoj remote:
git remote add origin https://github.com/tvoje-username/tvoje-repo-name.git
git branch -M main
git push -u origin main
```

### 2️⃣ Nastav GitHub Pages

1. Jdi do **Settings** → **Pages**
2. V sekci **Build and deployment**:
   - **Source**: GitHub Actions
3. **Hotovo!** GitHub automaticky spustí build při každém push

### 3️⃣ Aktualizuj Base Path

V souboru `/vite.config.ts` nahraď `your-repo-name` názvem tvého repository:

```typescript
base: process.env.GITHUB_ACTIONS ? '/tvoje-repo-name/' : '/',
```

### 4️⃣ Nahraď Placeholder Obrázky

Figma Make používá speciální `figma:asset` importy. Pro GitHub Pages potřebuješ reálné obrázky:

1. **Exportuj obrázky z Figma Make** (v preview klikni pravým na obrázek → Save image)
2. **Ulož je do `/public/images/`** s těmito názvy:
   - `3e7d7607fcde0150bb6315b8d6796f02fa0b674a.png` - Hero background
   - `2859fd2813b789422148dc7593a9a22997bbc9a5.png` - Dark theme comparison
   - `b5333ffd9dc52b8d9f5946724102aa9e32735d46.png` - Light theme comparison

## 💻 Lokální Development

**POZNÁMKA:** Pro lokální spuštění potřebuješ Node.js a npm/pnpm.

```bash
# Nainstaluj závislosti
pnpm install

# Spusť dev server
pnpm run dev

# Build pro production
pnpm run build

# Preview production buildu
pnpm run preview
```

## 📁 Struktura Projektu

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── images/                 # Statické obrázky
├── src/
│   ├── app/
│   │   ├── components/         # React komponenty
│   │   │   ├── Badge.tsx
│   │   │   ├── GlassCard.tsx
│   │   │   ├── DSButton.tsx
│   │   │   └── ThemeComparison.tsx
│   │   ├── config/
│   │   │   └── images.ts       # Image konfigurace
│   │   └── App.tsx             # Main aplikace
│   └── styles/
│       ├── fonts.css           # Font imports (Inter, JetBrains Mono)
│       ├── theme.css           # Design system tokens
│       ��── tailwind.css        # Tailwind config
│       └── index.css           # Global styles
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 Design System

Projekt používá plně konfigurovatelný design system s CSS custom properties:

- **Colors**: Primary, accent, destructive, muted, etc.
- **Typography**: Inter (sans-serif) + JetBrains Mono (monospace)
- **Spacing**: Konzistentní spacing scale
- **Borders & Radius**: Definované border styles
- **Elevation**: Shadow systém pro depth

Vše lze upravit v `/src/styles/theme.css`

## 🔧 Customizace

### Změna barev
Uprav proměnné v `/src/styles/theme.css`:

```css
:root {
  --primary: rgba(254, 235, 41, 1.00);
  --accent: rgba(15, 113, 240, 1.00);
  /* ... další barvy */
}
```

### Změna typografie
Fonty jsou definované v `/src/styles/fonts.css` a aplikované přes `theme.css`

### Přidání nových komponent
Vytvoř nové komponenty v `/src/app/components/` a importuj je v `App.tsx`

## 📸 Screenshot

*Přidej screenshot tvé aplikace zde*

## 📝 License

MIT

## 🙋‍♂️ Otázky?

Pokud máš problémy s deploymentem:
1. Zkontroluj **Actions** tab na GitHubu - tam vidíš build log
2. Ujisti se, že `base` v `vite.config.ts` odpovídá názvu tvého repository
3. Ověř, že GitHub Pages je zapnutý v Settings → Pages

---

**Made with ❤️ using Figma Make**