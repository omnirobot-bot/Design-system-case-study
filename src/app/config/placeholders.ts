/**
 * Placeholder image URLs for development and GitHub Pages
 * Replace these with your actual images in /public/images/
 */

export const PLACEHOLDER_IMAGES = {
  // Hero background - cybersecurity network visualization
  '3e7d7607fcde0150bb6315b8d6796f02fa0b674a.png': 
    'https://images.unsplash.com/photo-1770159116807-9b2a7bb82294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMGRhcmt8ZW58MXx8fHwxNzcxNDIyNjQxfDA&ixlib=rb-4.1.0&q=80&w=1920',
  
  // Dark theme mockup - dark mode interface
  '2859fd2813b789422148dc7593a9a22997bbc9a5.png': 
    'https://images.unsplash.com/photo-1770012977129-19f856a1f935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZSUyMGludGVyZmFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzE0MTAzMTR8MA&ixlib=rb-4.1.0&q=80&w=1200',
  
  // Light theme mockup - light mode interface
  'b5333ffd9dc52b8d9f5946724102aa9e32735d46.png': 
    'https://images.unsplash.com/photo-1626540327046-b9ce0dc3b92d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMG1vZGUlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzcxNDIyNjQyfDA&ixlib=rb-4.1.0&q=80&w=1200',
} as const;

/**
 * Get placeholder image URL by filename
 */
export function getPlaceholderImage(filename: string): string {
  return PLACEHOLDER_IMAGES[filename as keyof typeof PLACEHOLDER_IMAGES] || '';
}