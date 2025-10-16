import { TechnicalValidationResult, ContentQualityScore } from '../components/types/article';

// 技术术语验证规则
const TECHNICAL_TERMS = {
  'nano banana': {
    category: 'ai-tool',
    difficulty: 'beginner',
    description: 'Google\'s AI image editing tool integrated with Gemini 2.5 Flash'
  },
  'gemini': {
    category: 'ai-platform',
    difficulty: 'beginner',
    description: 'Google\'s AI platform that includes Nano Banana'
  },
  'character consistency': {
    category: 'technique',
    difficulty: 'intermediate',
    description: 'Maintaining the same character appearance across multiple edits'
  },
  'multi-turn editing': {
    category: 'technique',
    difficulty: 'intermediate',
    description: 'Making iterative edits to refine images progressively'
  },
  'prompt engineering': {
    category: 'technique',
    difficulty: 'advanced',
    description: 'Writing effective prompts to guide AI image generation'
  },
  'api integration': {
    category: 'development',
    difficulty: 'advanced',
    description: 'Integrating Nano Banana into applications via API'
  },
  'product photography': {
    category: 'application',
    difficulty: 'intermediate',
    description: 'Using AI for professional product image editing'
  },
  'cinematic universes': {
    category: 'application',
    difficulty: 'advanced',
    description: 'Creating consistent visual worlds for storytelling'
  }
};

// 内容质量检查规则
const QUALITY_RULES = {
  structure: {
    minSections: 3,
    maxSections: 8,
    requiredSections: ['introduction', 'guide', 'conclusion'],
    minContentLength: 1000,
    maxContentLength: 10000
  },
  accuracy: {
    requiredTerms: ['nano banana'],
    avoidTerms: ['midjourney', 'dall-e', 'stable diffusion'],
    technicalAccuracy: 0.8
  },
  readability: {
    minParagraphLength: 50,
    maxParagraphLength: 500,
    minHeadings: 3,
    maxHeadings: 10
  },
  seo: {
    minKeywords: 3,
    maxKeywords: 10,
    minDescriptionLength: 100,
    maxDescriptionLength: 160
  }
};

/**
 * 验证技术内容的准确性
 */
export function validateTechnicalContent(
  title: string,
  content: string,
  keywords: string[]
): TechnicalValidationResult {
  const issues: TechnicalValidationResult['issues'] = [];
  let score = 100;

  // 检查技术术语使用
  const foundTerms = new Set<string>();
  const contentLower = content.toLowerCase();
  const titleLower = title.toLowerCase();

  // 检查是否包含必要的技术术语
  Object.keys(TECHNICAL_TERMS).forEach(term => {
    if (contentLower.includes(term) || titleLower.includes(term)) {
      foundTerms.add(term);
    }
  });

  // 确定主要类别和难度
  const category = determineCategory(foundTerms);
  const difficulty = determineDifficulty(foundTerms);

  // 验证技术术语使用是否正确
  foundTerms.forEach(term => {
    const termInfo = TECHNICAL_TERMS[term as keyof typeof TECHNICAL_TERMS];
    if (termInfo) {
      // 检查术语使用的一致性
      const termCount = (contentLower.match(new RegExp(term, 'g')) || []).length;
      if (termCount > 20) {
        issues.push({
          type: 'warning',
          message: `术语 "${term}" 使用过于频繁 (${termCount}次)`,
          suggestion: '考虑使用同义词或重新组织句子结构'
        });
        score -= 5;
      }
    }
  });

  // 检查是否包含过时或错误的信息
  if (contentLower.includes('midjourney') || contentLower.includes('dall-e')) {
    issues.push({
      type: 'error',
      message: '内容中提到了其他AI工具，可能造成混淆',
      suggestion: '专注于Nano Banana的功能和特性'
    });
    score -= 15;
  }

  // 检查技术描述的准确性
  if (foundTerms.has('nano banana')) {
    // 验证Nano Banana相关描述
    if (!contentLower.includes('gemini') && !contentLower.includes('google')) {
      issues.push({
        type: 'warning',
        message: '未提及Nano Banana与Google Gemini的关系',
        suggestion: '添加背景信息说明Nano Banana是Google的工具'
      });
      score -= 10;
    }
  }

  // 检查步骤说明的完整性
  if (category === 'technique' && !contentLower.includes('step') && !contentLower.includes('步骤')) {
    issues.push({
      type: 'info',
      message: '技术教程建议包含具体步骤',
      suggestion: '添加分步骤的操作说明'
    });
    score -= 5;
  }

  // 检查代码示例（如果有）
  if (category === 'development') {
    const hasCodeBlock = content.includes('```') || content.includes('<code>');
    if (!hasCodeBlock) {
      issues.push({
        type: 'warning',
        message: '开发类教程缺少代码示例',
        suggestion: '添加相关的代码示例和API调用'
      });
      score -= 10;
    }
  }

  const isValid = score >= 70 && !issues.some(issue => issue.type === 'error');

  return {
    isValid,
    score: Math.max(0, score),
    issues,
    category,
    difficulty
  };
}

/**
 * 评估内容质量
 */
export function assessContentQuality(
  config: any,
  content: string
): ContentQualityScore {
  const scores = {
    structure: 100,
    accuracy: 100,
    readability: 100,
    seo: 100,
    engagement: 100
  };

  // 结构完整性检查
  const sections = config.content?.sections || [];
  if (sections.length < QUALITY_RULES.structure.minSections) {
    scores.structure -= 20;
  }
  if (sections.length > QUALITY_RULES.structure.maxSections) {
    scores.structure -= 10;
  }

  const hasRequiredSections = QUALITY_RULES.structure.requiredSections.every(
    required => sections.some((section: any) => section.type === required)
  );
  if (!hasRequiredSections) {
    scores.structure -= 15;
  }

  // 内容长度检查
  if (content.length < QUALITY_RULES.structure.minContentLength) {
    scores.structure -= 15;
  }
  if (content.length > QUALITY_RULES.structure.maxContentLength) {
    scores.structure -= 10;
  }

  // 技术准确性检查
  const validation = validateTechnicalContent(config.title, content, config.seo?.keywords || []);
  scores.accuracy = validation.score;

  // 可读性检查
  const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0);
  const shortParagraphs = paragraphs.filter(p => p.length < QUALITY_RULES.readability.minParagraphLength);
  const longParagraphs = paragraphs.filter(p => p.length > QUALITY_RULES.readability.maxParagraphLength);

  if (shortParagraphs.length > paragraphs.length * 0.3) {
    scores.readability -= 10;
  }
  if (longParagraphs.length > paragraphs.length * 0.2) {
    scores.readability -= 15;
  }

  // SEO检查
  const keywords = config.seo?.keywords || [];
  if (keywords.length < QUALITY_RULES.seo.minKeywords) {
    scores.seo -= 10;
  }
  if (keywords.length > QUALITY_RULES.seo.maxKeywords) {
    scores.seo -= 5;
  }

  const description = config.description || '';
  if (description.length < QUALITY_RULES.seo.minDescriptionLength) {
    scores.seo -= 10;
  }
  if (description.length > QUALITY_RULES.seo.maxDescriptionLength) {
    scores.seo -= 5;
  }

  // 用户参与度评估
  const hasInteractiveElements = sections.some((section: any) => 
    section.steps || section.examples || section.tips
  );
  if (!hasInteractiveElements) {
    scores.engagement -= 20;
  }

  const hasVisualElements = sections.some((section: any) => 
    section.examples?.some((ex: any) => ex.image)
  );
  if (!hasVisualElements) {
    scores.engagement -= 15;
  }

  const overall = Math.round(
    (scores.structure + scores.accuracy + scores.readability + scores.seo + scores.engagement) / 5
  );

  return {
    overall,
    structure: Math.max(0, scores.structure),
    accuracy: Math.max(0, scores.accuracy),
    readability: Math.max(0, scores.readability),
    seo: Math.max(0, scores.seo),
    engagement: Math.max(0, scores.engagement)
  };
}

/**
 * 确定内容类别
 */
function determineCategory(terms: Set<string>): string {
  const categories = Array.from(terms).map(term => 
    TECHNICAL_TERMS[term as keyof typeof TECHNICAL_TERMS]?.category
  ).filter(Boolean);

  // 返回最常见的类别
  const categoryCount: Record<string, number> = {};
  categories.forEach(cat => {
    categoryCount[cat!] = (categoryCount[cat!] || 0) + 1;
  });

  return Object.keys(categoryCount).reduce((a, b) => 
    categoryCount[a] > categoryCount[b] ? a : b
  , 'general');
}

/**
 * 确定内容难度
 */
function determineDifficulty(terms: Set<string>): string {
  const difficulties = Array.from(terms).map(term => 
    TECHNICAL_TERMS[term as keyof typeof TECHNICAL_TERMS]?.difficulty
  ).filter(Boolean);

  // 如果有任何高级术语，标记为高级
  if (difficulties.includes('advanced')) return 'advanced';
  // 如果有中级术语，标记为中级
  if (difficulties.includes('intermediate')) return 'intermediate';
  // 默认为初级
  return 'beginner';
}

/**
 * 生成技术准确性改进建议
 */
export function generateImprovementSuggestions(
  validation: TechnicalValidationResult,
  qualityScore: ContentQualityScore
): string[] {
  const suggestions: string[] = [];

  // 基于验证结果的建议
  validation.issues.forEach(issue => {
    if (issue.suggestion) {
      suggestions.push(issue.suggestion);
    }
  });

  // 基于质量评分的建议
  if (qualityScore.structure < 70) {
    suggestions.push('考虑增加更多章节或重组内容结构');
  }

  if (qualityScore.accuracy < 70) {
    suggestions.push('检查技术描述的准确性，确保与官方文档一致');
  }

  if (qualityScore.readability < 70) {
    suggestions.push('优化段落长度，使用更清晰的标题结构');
  }

  if (qualityScore.seo < 70) {
    suggestions.push('改进关键词密度和描述长度');
  }

  if (qualityScore.engagement < 70) {
    suggestions.push('添加更多互动元素，如步骤说明、示例和提示');
  }

  return suggestions;
}
