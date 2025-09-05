export interface PromptData {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  previewImage: string;
  originalImages?: string[];
}

export const categories = [
  { id: 'all', label: 'All', count: 12 },
  { id: 'creative', label: 'Creative', count: 4 },
  { id: 'design', label: 'Design', count: 3 },
  { id: 'ecommerce', label: 'E-commerce', count: 2 },
  { id: 'photography', label: 'Photography', count: 2 },
  { id: 'character', label: 'Character', count: 1 },
];

export const prompts: PromptData[] = [
  {
    id: '1',
    title: 'AI Portrait Enhancer',
    description: 'Transform ordinary portraits into professional headshots with enhanced lighting and composition',
    prompt: 'Transform this portrait into a professional studio headshot. Enhance the lighting to create soft, even illumination that flatters the subject. Add subtle depth of field with a blurred background. Improve skin texture naturally while maintaining authentic features. Use warm, professional lighting similar to high-end portrait photography.',
    category: 'photography',
    previewImage: '/prompt/portrait-enhanced.jpg',
  },
  {
    id: '2',
    title: 'Vintage Film Effect Generator',
    description: 'Add authentic vintage film aesthetics to modern photos with grain and color grading',
    prompt: 'Apply a vintage 1970s film aesthetic to this image. Add authentic film grain, slightly faded colors with a warm undertone, and subtle light leaks around the edges. Create the look of photos taken with a classic 35mm camera, with slightly overexposed highlights and rich, muted tones.',
    category: 'creative',
    previewImage: '/prompt/vintage-film.jpg',
  },
  {
    id: '3',
    title: 'Minimalist Product Showcase',
    description: 'Create clean, minimalist product photography with professional studio lighting',
    prompt: 'Transform this product photo into a minimalist studio shot. Place the product on a clean white surface with subtle shadows. Use professional studio lighting to eliminate harsh shadows while maintaining product definition. Add a gradient background that transitions from white to light gray. Ensure the product is the clear focal point.',
    category: 'ecommerce',
    previewImage: '/prompt/product-minimal.jpg',
  },
  {
    id: '4',
    title: 'Artistic Sketch Converter',
    description: 'Convert photos into detailed pencil sketches with realistic shading and texture',
    prompt: 'Convert this photograph into a detailed pencil sketch artwork. Use realistic graphite pencil techniques with varying line weights and cross-hatching for shadows. Maintain the original composition while emphasizing contrast and detail. Create the appearance of being drawn on textured paper with subtle paper grain visible.',
    category: 'creative',
    previewImage: '/prompt/Artistic Sketch Converter.webp',
  },
  {
    id: '5',
    title: 'Architectural Visualization',
    description: 'Enhance architectural photos with professional lighting and atmospheric effects',
    prompt: 'Enhance this architectural photograph with professional visualization techniques. Add dramatic lighting that emphasizes the building\'s form and materials. Include subtle atmospheric effects like soft morning light or golden hour illumination. Enhance colors to make materials more vibrant while maintaining architectural accuracy.',
    category: 'design',
    previewImage: '/prompt/architecture-viz.jpg',
  },
  {
    id: '6',
    title: 'Fantasy Character Generator',
    description: 'Transform portraits into fantasy characters with magical elements and costume design',
    prompt: 'Transform this person into a fantasy character. Add elaborate fantasy costume elements like flowing robes, intricate jewelry, or mystical accessories. Include subtle magical effects such as glowing eyes or ethereal lighting. Set the scene in an enchanted environment with magical atmosphere while keeping the person recognizable.',
    category: 'character',
    previewImage: '/prompt/fantasy-character.jpg',
  },
  {
    id: '7',
    title: 'Seasonal Landscape Changer',
    description: 'Change the season of landscape photos while maintaining natural realism',
    prompt: 'Transform this landscape to show it in a different season. If it\'s summer, add autumn colors to foliage, or winter snow coverage, or spring blossoms. Adjust lighting, sky conditions, and atmospheric effects to match the new season. Ensure all changes look natural and maintain the original landscape\'s character.',
    category: 'creative',
    previewImage: '/prompt/creative-abstract.jpg',
  },
  {
    id: '8',
    title: 'Modern Interior Styling',
    description: 'Update interior spaces with contemporary design elements and better lighting',
    prompt: 'Redesign this interior space with modern contemporary styling. Update furniture to sleek, minimalist pieces with neutral colors and clean lines. Improve lighting with modern fixtures and add large windows for natural light. Include plants and modern decor accessories while maintaining the room\'s basic layout.',
    category: 'design',
    previewImage: '/prompt/digital-workspace.jpg',
  },
  {
    id: '9',
    title: 'Food Photography Enhancer',
    description: 'Make food photos more appetizing with professional food styling techniques',
    prompt: 'Enhance this food photograph using professional food styling techniques. Improve colors to make the food look more vibrant and appetizing. Add subtle steam effects for hot dishes, enhance textures, and adjust lighting for optimal presentation. Include complementary garnishes and styling elements.',
    category: 'photography',
    previewImage: '/prompt/creative-abstract.jpg',
  },
  {
    id: '10',
    title: 'Luxury Brand Aesthetic',
    description: 'Apply high-end luxury branding aesthetics to product photos',
    prompt: 'Transform this product photo with luxury brand aesthetics. Use elegant, high-contrast lighting with dramatic shadows. Add premium materials and textures in the background. Create sophisticated color grading with deep blacks, crisp whites, and metallic accents. Make the overall composition feel exclusive and high-end.',
    category: 'ecommerce',
    previewImage: '/prompt/Luxury Brand Aesthetic.jpg',
  },
  {
    id: '11',
    title: 'Artistic Neon Effect',
    description: 'Add futuristic neon lighting effects with cyberpunk aesthetics',
    prompt: 'Add futuristic neon lighting effects to this image. Include vibrant neon colors like electric blue, hot pink, and cyan that illuminate the subject. Create a cyberpunk atmosphere with urban nighttime setting. Add subtle glow effects and reflections while maintaining the original subject\'s clarity.',
    category: 'creative',
    previewImage: '/prompt/digital-workspace.jpg',
  },
  {
    id: '12',
    title: 'Logo Integration Specialist',
    description: 'Seamlessly integrate logos and branding into existing photos',
    prompt: 'Seamlessly integrate branding elements into this photograph. Add logos or text in a natural way that complements the image composition. Ensure the branding looks like it was originally part of the scene with proper lighting, shadows, and perspective. Maintain brand guidelines while creating authentic integration.',
    category: 'design',
    previewImage: '/prompt/architecture-viz.jpg',
  },
];