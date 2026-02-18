# 📸 Jak Nahradit Placeholder Obrázky

Figma Make používá speciální `figma:asset` importy, které nefungují mimo Figma Make prostředí. Pro GitHub Pages musíš nahradit tyto placeholdery skutečnými obrázky.

## Metoda 1: Exportovat z Figma Make (Nejjednodušší)

1. **Otevři svůj projekt v Figma Make**
2. **Pro každý obrázek:**
   - Klikni pravým tlačítkem na obrázek v preview
   - **Save image as...**
   - Ulož jako PNG

3. **Přejmenuj a ulož:**
   - Hero background → `3e7d7607fcde0150bb6315b8d6796f02fa0b674a.png`
   - Dark theme → `2859fd2813b789422148dc7593a9a22997bbc9a5.png`
   - Light theme → `b5333ffd9dc52b8d9f5946724102aa9e32735d46.png`

4. **Nahraď soubory v `/public/images/`**

## Metoda 2: Použít Unsplash Placeholdery (Rychlé testování)

Pokud chceš rychle otestovat deploy:

```bash
# V terminálu v root složce projektu:
cd public/images

# Stáhni placeholder obrázky
curl -o 3e7d7607fcde0150bb6315b8d6796f02fa0b674a.png "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop"
curl -o 2859fd2813b789422148dc7593a9a22997bbc9a5.png "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&h=800&fit=crop"
curl -o b5333ffd9dc52b8d9f5946724102aa9e32735d46.png "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop"
```

## Metoda 3: Použít Vlastní Obrázky

Pokud máš vlastní obrázky:

1. **Doporučené rozměry:**
   - Hero background: 1920×1080px (landscape)
   - Theme comparisons: 1200×800px (interface screenshots)

2. **Formát:** PNG nebo JPG (PNG pro UI screenshots)

3. **Přejmenuj je na správné názvy** (viz výše)

4. **Ulož do `/public/images/`**

## ✅ Ověření

Po nahrazení obrázků:

1. **Commitni změny:**
   ```bash
   git add public/images/
   git commit -m "Add real images"
   git push
   ```

2. **GitHub Actions automaticky rebuilds**

3. **Za ~2 minuty** tvá stránka bude live s reálnými obrázky!

## 🔍 Debugging

Pokud obrázky nejsou vidět:

1. Zkontroluj, že soubory mají **přesně tyto názvy** (včetně `.png` extension)
2. Zkontroluj, že jsou v `/public/images/` (ne jinde)
3. Podívej se do browser console (F12) - uvidíš 404 errory pokud cesty nesedí
4. Zkontroluj GitHub Actions log - tam vidíš jestli build uspěl

---

**Tip:** Můžeš začít s placeholdery a nahradit je skutečnými obrázky později!
