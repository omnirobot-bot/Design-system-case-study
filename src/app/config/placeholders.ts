/**
 * Placeholder image URLs for development and GitHub Pages
 * Replace these with your actual images in /public/images/
 */

export const PLACEHOLDER_IMAGES = {
  // Hero background - cybersecurity tech
  '3e7d7607fcde0150bb6315b8d6796f02fa0b674a.png': 
    'https://images.unsplash.com/photo-1719255417989-b6858e87359e?w=1920&h=1080&fit=crop&q=80',
  
  // Dark theme mockup
  '2859fd2813b789422148dc7593a9a22997bbc9a5.png': 
    'https://images.unsplash.com/photo-1575388902449-6bca946ad549?w=1200&h=800&fit=crop&q=80',
  
  // Light theme mockup
  'b5333ffd9dc52b8d9f5946724102aa9e32735d46.png': 
    'https://images.unsplash.com/photo-1626540327046-b9ce0dc3b92d?w=1200&h=800&fit=crop&q=80',
} as const;

/**
 * Get placeholder image URL by filename
 */
export function getPlaceholderImage(filename: string): string {
  return PLACEHOLDER_IMAGES[filename as keyof typeof PLACEHOLDER_IMAGES] || '';
}
