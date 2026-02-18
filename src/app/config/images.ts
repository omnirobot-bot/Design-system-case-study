/**
 * Image configuration
 * Centralizovaná správa všech obrázků v aplikaci
 * 
 * POZNÁMKA: figma:asset importy musí být přímo v komponentách,
 * protože tento speciální import scheme nemůže být re-exportován jako konstanta.
 * 
 * Hero Background:
 * - Hash: figma:asset/3e7d7607fcde0150bb6315b8d6796f02fa0b674a.png
 * - Location: App.tsx
 * 
 * Theme Comparison (@2x Retina):
 * - Dark: figma:asset/2859fd2813b789422148dc7593a9a22997bbc9a5.png
 * - Light: figma:asset/b5333ffd9dc52b8d9f5946724102aa9e32735d46.png
 * - Location: ThemeComparison.tsx
 */

// Tento soubor slouží jako dokumentace všech figma:asset hashů použitých v aplikaci
export const IMAGE_HASHES = {
  HERO_BACKGROUND: '3e7d7607fcde0150bb6315b8d6796f02fa0b674a',
  THEME_DARK: '2859fd2813b789422148dc7593a9a22997bbc9a5',
  THEME_LIGHT: 'b5333ffd9dc52b8d9f5946724102aa9e32735d46',
} as const;