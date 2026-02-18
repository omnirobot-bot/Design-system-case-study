# 📸 Export Obrázků z Figma Make

Tento soubor obsahuje instrukce jak exportovat obrázky přímo z běžící Figma Make instance.

## 🎯 Metoda 1: Pravý Klik (Nejjednodušší)

1. **Otevři svůj projekt v Figma Make**
2. **Pro každý obrázek:**
   - Klikni **pravým tlačítkem** na obrázek
   - Vyber **"Save image as..."** nebo **"Uložit obrázek jako..."**
   - Ulož s originálním názvem

3. **Obrázky co potřebuješ:**
   - **Hero background** (velký pozadí nahoře)
   - **Dark theme screenshot** (tmavý theme v comparison)
   - **Light theme screenshot** (světlý theme v comparison)

## 🎯 Metoda 2: Browser Developer Tools

1. **Otevři projekt v Figma Make**
2. **Stiskni F12** (otevře Developer Tools)
3. **Jdi do "Network" tabu**
4. **Refresh stránku** (Ctrl+R nebo Cmd+R)
5. **Vyfiltruj "Img"** (zobrazí jen obrázky)
6. **Najdi obrázky:**
   - Hledej soubory s hashy `3e7d7607...`, `2859fd28...`, `b5333ffd...`
   - Pravý klik → **"Open in new tab"**
   - Pravý klik na obrázek → **"Save image as..."**

## 🎯 Metoda 3: Screenshot (Pro testing)

Pokud nemáš přístup k originálním obrázkům:

1. **Hero background:**
   - Scroll na top stránky
   - Screenshot celé hero sekce
   - Doporučený rozměr: 1920×1080px

2. **Theme comparisons:**
   - Screenshot interface mockupů
   - Doporučený rozměr: 1200×800px
   - Jeden screenshot pro dark mode
   - Jeden screenshot pro light mode

## 📁 Kam Uložit

Po exportu **přejmenuj** a ulož do `/public/images/`:

```
/public/images/
├── 3e7d7607fcde0150bb6315b8d6796f02fa0b674a.png  (Hero)
├── 2859fd2813b789422148dc7593a9a22997bbc9a5.png  (Dark theme)
└── b5333ffd9dc52b8d9f5946724102aa9e32735d46.png  (Light theme)
```

## 🔄 Update na GitHub

```bash
git add public/images/
git commit -m "Add real images from Figma Make"
git push
```

GitHub automaticky rebuilds a za 2 minuty jsou obrázky živé! 🎉

---

## 🆘 Nemůžeš Exportovat?

**Použij placeholders:** Projekt už obsahuje Unsplash placeholdery, takže můžeš deployovat ihned. Reálné obrázky přidáš později.

**Alternativa:** Kontaktuj svůj tým pro přístup k originálním assets ze source Figma souboru.
