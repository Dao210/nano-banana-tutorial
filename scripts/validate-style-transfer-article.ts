import { OptimizedArticleGenerator } from '../lib/optimized-article-generator';
import { validateTechnicalContent, assessContentQuality } from '../lib/technical-validator';

// Generate and validate Style Transfer Techniques article
const keywords = ['style transfer', 'artistic transformation', 'creative editing', 'visual styles'];
const articleConfig = OptimizedArticleGenerator.generateArticleConfig(keywords);

// Get full content for validation
const fullContent = articleConfig.content.sections.map(section => section.content).join(' ');

// Validate technical accuracy
const technicalValidation = validateTechnicalContent(
  articleConfig.title,
  fullContent,
  articleConfig.seo.keywords
);

// Assess content quality
const qualityAssessment = assessContentQuality(articleConfig, fullContent);

console.log('=== Style Transfer Techniques Article Validation ===\n');

console.log('📝 Article Information:');
console.log(`Title: ${articleConfig.title}`);
console.log(`Category: ${articleConfig.category}`);
console.log(`Difficulty: ${articleConfig.difficulty}`);
console.log(`Sections: ${articleConfig.content.sections.length}`);
console.log(`Word Count: ${fullContent.split(' ').length}`);

console.log('\n🔍 Technical Validation:');
console.log(`Valid: ${technicalValidation.isValid ? '✅' : '❌'}`);
console.log(`Score: ${technicalValidation.score}/100`);
console.log(`Category: ${technicalValidation.category}`);
console.log(`Difficulty: ${technicalValidation.difficulty}`);

if (technicalValidation.issues.length > 0) {
  console.log('\n⚠️ Issues:');
  technicalValidation.issues.forEach((issue, index) => {
    console.log(`${index + 1}. [${issue.type.toUpperCase()}] ${issue.message}`);
    if (issue.suggestion) {
      console.log(`   💡 Suggestion: ${issue.suggestion}`);
    }
  });
}

console.log('\n📊 Quality Assessment:');
console.log(`Overall: ${qualityAssessment.overall}/100`);
console.log(`Structure: ${qualityAssessment.structure}/100`);
console.log(`Accuracy: ${qualityAssessment.accuracy}/100`);
console.log(`Readability: ${qualityAssessment.readability}/100`);
console.log(`SEO: ${qualityAssessment.seo}/100`);
console.log(`Engagement: ${qualityAssessment.engagement}/100`);

console.log('\n🔑 SEO Keywords:');
articleConfig.seo.keywords.forEach((keyword, index) => {
  console.log(`${index + 1}. ${keyword}`);
});

console.log('\n🏷️ Tags:');
articleConfig.seo.tags.forEach((tag, index) => {
  console.log(`${index + 1}. ${tag}`);
});

console.log('\n📈 Content Structure:');
articleConfig.content.sections.forEach((section, index) => {
  console.log(`${index + 1}. ${section.title} (${section.type})`);
});

console.log('\n✅ Validation Complete!');
console.log(`Overall Quality: ${qualityAssessment.overall >= 70 ? 'EXCELLENT' : qualityAssessment.overall >= 50 ? 'GOOD' : 'NEEDS IMPROVEMENT'}`);

// Export the configuration for use
export { articleConfig, technicalValidation, qualityAssessment };
