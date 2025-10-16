import { OptimizedArticleGenerator } from '../lib/optimized-article-generator';
import { validateTechnicalContent, assessContentQuality } from '../lib/technical-validator';

// Mock Next.js Image component for testing
jest.mock('next/image', () => {
  return {
    __esModule: true,
    default: ({ src, alt }: { src: string; alt: string }) => {
      // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
      return <img src={src} alt={alt} />;
    },
  };
});

// Mock Lucide React icons
jest.mock('lucide-react', () => ({
  Star: () => <div>Star Icon</div>,
  Clock: () => <div>Clock Icon</div>,
  Eye: () => <div>Eye Icon</div>,
  Share2: () => <div>Share Icon</div>,
  Bookmark: () => <div>Bookmark Icon</div>,
  Download: () => <div>Download Icon</div>,
  ChevronLeft: () => <div>Left Chevron</div>,
  ChevronRight: () => <div>Right Chevron</div>,
  CheckCircle: () => <div>Check Circle</div>,
  Lightbulb: () => <div>Lightbulb Icon</div>,
  AlertTriangle: () => <div>Alert Triangle</div>,
  ArrowRight: () => <div>Arrow Right</div>,
  MessageCircle: () => <div>Message Circle</div>,
  ThumbsUp: () => <div>Thumbs Up</div>,
  Target: () => <div>Target Icon</div>,
  Sparkles: () => <div>Sparkles Icon</div>,
  Zap: () => <div>Zap Icon</div>,
}));

// Test suite for Style Transfer Techniques article
describe('Style Transfer Techniques Article', () => {
  const keywords = ['style transfer', 'artistic transformation', 'creative editing', 'visual styles'];
  let articleConfig: any;
  let fullContent: string;

  beforeAll(() => {
    // Generate the article configuration
    articleConfig = OptimizedArticleGenerator.generateArticleConfig(keywords);
    fullContent = articleConfig.content.sections.map((section: any) => section.content).join(' ');
  });

  // Test article generation
  test('should generate a valid article configuration', () => {
    expect(articleConfig).toBeDefined();
    expect(articleConfig.title).toBeDefined();
    expect(articleConfig.description).toBeDefined();
    expect(articleConfig.category).toBe('创意制作');
    expect(articleConfig.difficulty).toBe('beginner');
    expect(articleConfig.content.sections.length).toBeGreaterThanOrEqual(3);
  });

  // Test technical validation
  test('should pass technical validation', () => {
    const technicalValidation = validateTechnicalContent(
      articleConfig.title,
      fullContent,
      articleConfig.seo.keywords
    );

    expect(technicalValidation.isValid).toBe(true);
    expect(technicalValidation.score).toBeGreaterThanOrEqual(90);
    expect(technicalValidation.category).toBe('technique');
    expect(technicalValidation.difficulty).toBe('intermediate');
  });

  // Test content quality
  test('should have high content quality', () => {
    const qualityAssessment = assessContentQuality(articleConfig, fullContent);

    expect(qualityAssessment.overall).toBeGreaterThanOrEqual(90);
    expect(qualityAssessment.structure).toBeGreaterThanOrEqual(90);
    expect(qualityAssessment.accuracy).toBeGreaterThanOrEqual(90);
    expect(qualityAssessment.readability).toBeGreaterThanOrEqual(80);
    expect(qualityAssessment.seo).toBeGreaterThanOrEqual(90);
    expect(qualityAssessment.engagement).toBeGreaterThanOrEqual(90);
  });

  // Test SEO keywords
  test('should have appropriate SEO keywords', () => {
    const keywords = articleConfig.seo.keywords;
    expect(keywords).toContain('nano banana');
    expect(keywords).toContain('ai image editing');
    expect(keywords).toContain('google gemini');
    expect(keywords).toContain('style transfer');
    expect(keywords).toContain('artistic transformation');
    expect(keywords).toContain('creative editing');
    expect(keywords).toContain('visual styles');
    expect(keywords.length).toBeGreaterThanOrEqual(7);
  });

  // Test tags
  test('should have appropriate tags', () => {
    const tags = articleConfig.seo.tags;
    expect(tags).toContain('Style transfer');
    expect(tags).toContain('Artistic transformation');
    expect(tags).toContain('Creative editing');
    expect(tags).toContain('Visual styles');
    expect(tags.length).toBe(4);
  });

  // Test article structure
  test('should have proper article structure', () => {
    const sections = articleConfig.content.sections;
    
    // Should have required sections
    const sectionTypes = sections.map((section: any) => section.type);
    expect(sectionTypes).toContain('introduction');
    expect(sectionTypes).toContain('guide');
    expect(sectionTypes).toContain('conclusion');
    
    // All sections should have titles
    sections.forEach((section: any) => {
      expect(section.title).toBeDefined();
      expect(section.title.length).toBeGreaterThan(0);
    });
    
    // All sections should have content
    sections.forEach((section: any) => {
      expect(section.content).toBeDefined();
      expect(section.content.length).toBeGreaterThan(0);
    });
  });

  // Test author information
  test('should have valid author information', () => {
    const author = articleConfig.author;
    expect(author.name).toBeDefined();
    expect(author.bio).toBeDefined();
    expect(author.followers).toBeDefined();
    expect(author.expertise).toBeDefined();
  });

  // Test statistics
  test('should have valid statistics', () => {
    const stats = articleConfig.stats;
    expect(stats.readTime).toBeDefined();
    expect(stats.rating).toBeDefined();
    expect(stats.ratingCount).toBeDefined();
    expect(stats.views).toBeDefined();
    expect(stats.publishedAt).toBeDefined();
    expect(stats.updatedAt).toBeDefined();
    
    // Rating should be between 4.0 and 5.0
    expect(stats.rating).toBeGreaterThanOrEqual(4.0);
    expect(stats.rating).toBeLessThanOrEqual(5.0);
  });

  // Test content length
  test('should have appropriate content length', () => {
    const wordCount = fullContent.split(' ').length;
    expect(wordCount).toBeGreaterThanOrEqual(500);
    expect(wordCount).toBeLessThanOrEqual(15000);
  });

  // Test that content contains key terms
  test('should contain key technical terms', () => {
    const contentLower = fullContent.toLowerCase();
    expect(contentLower).toContain('nano banana');
    expect(contentLower).toContain('style transfer');
    expect(contentLower).toContain('artistic');
    expect(contentLower).toContain('editing');
  });
});