import { ArticleConfig, SectionConfig } from '../components/types/article';
import { validateTechnicalContent, assessContentQuality, generateImprovementSuggestions } from './technical-validator';

// 内容生成模板
const CONTENT_TEMPLATES = {
  introduction: {
    structure: (topic: string, difficulty: string) => `
      <p>Nano Banana represents a quantum leap in AI image editing technology. This ${difficulty}-friendly tutorial will guide you through mastering ${topic} with Google's revolutionary tool.</p>
      
      <p>Whether you're just starting your AI image editing journey or looking to enhance your skills, this comprehensive guide covers everything you need to know about ${topic}.</p>
    `,
    examples: [
      {
        title: "Before & After Comparison",
        description: "See the dramatic transformation possible with Nano Banana",
        image: "/tutorials/before-after-example.png"
      }
    ],
    tips: [
      {
        title: "Pro Insight",
        content: "Nano Banana consistently outperforms other AI tools in maintaining character consistency and realistic edits.",
        type: "success" as const
      }
    ]
  },
  
  guide: {
    structure: (topic: string, steps: string[]) => {
      const stepsHtml = steps.map((step, index) => `<li><strong>${step}</strong></li>`).join('');
      return `
        <p>Let's dive into the practical aspects of ${topic}. This step-by-step approach ensures you understand each concept before moving to the next.</p>
        
        <ol>${stepsHtml}</ol>
        
        <p>Take your time with each step and practice until you feel comfortable with the technique.</p>
      `;
    },
    generateSteps: (topic: string, difficulty: string): string[] => {
      const stepTemplates = {
        beginner: [
          "Choose a high-quality source image with good lighting",
          "Write a clear, specific prompt describing your desired changes",
          "Review the initial result and identify areas for improvement",
          "Make refinements using follow-up prompts",
          "Save your final image and document your process"
        ],
        intermediate: [
          "Analyze your source image for key elements to preserve",
          "Craft detailed prompts with specific instructions and constraints",
          "Use multi-turn editing for precise adjustments",
          "Apply advanced techniques like lighting and composition changes",
          "Validate results and iterate for optimal quality"
        ],
        advanced: [
          "Set up your development environment and API access",
          "Implement advanced prompting strategies with parameter controls",
          "Create batch processing workflows for efficiency",
          "Integrate with existing tools and automation systems",
          "Optimize performance and quality through systematic testing"
        ]
      };
      
      return stepTemplates[difficulty as keyof typeof stepTemplates] || stepTemplates.beginner;
    }
  },
  
  examples: {
    structure: (topic: string, examples: any[]) => {
      const examplesHtml = examples.map(ex => `
        <div class="example-item">
          <h4>${ex.title}</h4>
          <p>${ex.description}</p>
          ${ex.code ? `<pre><code>${ex.code}</code></pre>` : ''}
        </div>
      `).join('');
      
      return `<p>Let's explore some practical examples of ${topic} in action:</p>${examplesHtml}`;
    },
    generateExamples: (topic: string, difficulty: string) => {
      if (difficulty === 'advanced' && topic.includes('api')) {
        return [
          {
            title: "Basic API Call",
            description: "Simple image editing request",
            code: `const response = await fetch('https://api.nanobanana.ai/edit', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
  body: JSON.stringify({
    image: 'base64_image_data',
    prompt: 'Change background to sunset beach'
  })
});`
          }
        ];
      }
      return [];
    }
  },
  
  tips: {
    structure: (topic: string, tips: any[]) => {
      const tipsHtml = tips.map(tip => `
        <div class="tip-item">
          <h4>${tip.title}</h4>
          <p>${tip.content}</p>
        </div>
      `).join('');
      return `<p>Here are some professional tips for mastering ${topic}:</p>${tipsHtml}`;
    },
    generateTips: (topic: string, difficulty: string) => {
      const baseTips = [
        {
          title: "Start Simple",
          content: "Begin with basic edits before attempting complex transformations.",
          type: "info" as const
        },
        {
          title: "Be Specific",
          content: "Detailed, specific prompts yield better results than vague descriptions.",
          type: "success" as const
        },
        {
          title: "Iterate and Refine",
          content: "Use multi-turn editing to gradually perfect your vision.",
          type: "warning" as const
        }
      ];
      
      if (difficulty === 'advanced') {
        baseTips.push({
          title: "Batch Processing",
          content: "For large projects, consider implementing batch workflows.",
          type: "info" as const
        });
      }
      
      return baseTips;
    }
  },
  
  mistakes: {
    structure: (topic: string, mistakes: any[]) => {
      const mistakesHtml = mistakes.map(mistake => `
        <div class="mistake-item">
          <h4>${mistake.title}</h4>
          <p>${mistake.description}</p>
          <p><strong>Solution:</strong> ${mistake.solution}</p>
        </div>
      `).join('');
      return `<p>Avoid these common mistakes when working with ${topic}:</p>${mistakesHtml}`;
    },
    generateMistakes: (topic: string, difficulty: string) => {
      return [
        {
          title: "Vague Prompts",
          description: "Using unclear or generic descriptions that don't specify what you want.",
          solution: "Be specific about changes, styles, and what should remain unchanged."
        },
        {
          title: "Poor Source Images",
          description: "Starting with low-quality or poorly composed images.",
          solution: "Choose high-resolution images with good lighting and clear subjects."
        }
      ];
    }
  },
  
  conclusion: {
    structure: (topic: string, nextSteps: string[]) => {
      const stepsHtml = nextSteps.map(step => `<li>${step}</li>`).join('');
      return `
        <p>Congratulations! You've mastered the fundamentals of ${topic} with Nano Banana AI.</p>
        
        <p>Your journey doesn't end here. Continue practicing and exploring advanced techniques to become truly proficient.</p>
        
        <h3>Next Steps</h3>
        <ul>${stepsHtml}</ul>
      `;
    },
    generateNextSteps: (topic: string, difficulty: string) => {
      const nextStepsMap = {
        beginner: [
          "Practice basic edits on different types of images",
          "Experiment with various prompt styles and approaches",
          "Join the community to share your work and get feedback"
        ],
        intermediate: [
          "Master character consistency across multiple edits",
          "Learn advanced prompting techniques",
          "Explore integration with other tools and workflows"
        ],
        advanced: [
          "Develop custom automation scripts",
          "Contribute to the Nano Banana community",
          "Stay updated with the latest features and capabilities"
        ]
      };
      
      return nextStepsMap[difficulty as keyof typeof nextStepsMap] || nextStepsMap.beginner;
    }
  }
};

/**
 * 优化的文章生成器
 */
export class OptimizedArticleGenerator {
  /**
   * 生成完整的文章配置
   */
  static generateArticleConfig(keywords: string[]): ArticleConfig {
    const category = this.categorizeKeywords(keywords);
    const difficulty = this.determineDifficulty(keywords);
    const title = this.generateTitle(keywords, category);
    const description = this.generateDescription(keywords, category, difficulty);
    
    const config: ArticleConfig = {
      id: this.generateId(keywords),
      title,
      description,
      category,
      difficulty,
      author: this.generateAuthor(difficulty),
      content: {
        hero: {
          coverImage: `/tutorials/${this.generateId(keywords)}.jpg`,
          badge: {
            text: this.getBadgeText(category, difficulty),
            icon: this.getBadgeIcon(category)
          }
        },
        sections: this.generateSections(keywords, category, difficulty),
        sidebar: {
          relatedTutorials: this.generateRelatedTutorials(category, difficulty)
        }
      },
      seo: {
        keywords: this.generateKeywords(keywords, category),
        tags: this.generateTags(keywords, category)
      },
      stats: this.generateStats(difficulty)
    };

    // 验证技术准确性
    const validation = validateTechnicalContent(title, this.getFullContent(config), keywords);
    if (!validation.isValid) {
      console.warn('Generated content has technical issues:', validation.issues);
    }

    return config;
  }

  /**
   * 生成文章章节
   */
  private static generateSections(keywords: string[], category: string, difficulty: string): SectionConfig[] {
    const sections: SectionConfig[] = [];
    const topic = keywords.join(' ');

    // Introduction
    sections.push({
      id: 'introduction',
      type: 'introduction',
      title: `Getting Started with ${topic}`,
      background: 'gradient',
      icon: 'Sparkles',
      gradient: 'cyan',
      content: CONTENT_TEMPLATES.introduction.structure(topic, difficulty),
      examples: CONTENT_TEMPLATES.introduction.examples,
      tips: CONTENT_TEMPLATES.introduction.tips
    });

    // Main Guide
    const steps = CONTENT_TEMPLATES.guide.generateSteps(topic, difficulty);
    sections.push({
      id: 'guide',
      type: 'guide',
      title: `Step-by-Step ${topic} Tutorial`,
      background: 'card',
      icon: 'Target',
      content: CONTENT_TEMPLATES.guide.structure(topic, steps),
      steps
    });

    // Examples (if applicable)
    const examples = CONTENT_TEMPLATES.examples.generateExamples(topic, difficulty);
    if (examples.length > 0) {
      sections.push({
        id: 'examples',
        type: 'examples',
        title: 'Practical Examples',
        background: 'gradient',
        icon: 'MessageCircle',
        gradient: 'blue',
        content: CONTENT_TEMPLATES.examples.structure(topic, examples),
        examples
      });
    }

    // Tips
    const tips = CONTENT_TEMPLATES.tips.generateTips(topic, difficulty);
    sections.push({
      id: 'tips',
      type: 'tips',
      title: 'Professional Tips & Best Practices',
      background: 'gradient',
      icon: 'Lightbulb',
      gradient: 'green',
      content: CONTENT_TEMPLATES.tips.structure(topic, tips),
      tips
    });

    // Common Mistakes
    const mistakes = CONTENT_TEMPLATES.mistakes.generateMistakes(topic, difficulty);
    sections.push({
      id: 'mistakes',
      type: 'mistakes',
      title: 'Common Mistakes to Avoid',
      background: 'gradient',
      icon: 'AlertTriangle',
      gradient: 'red',
      content: CONTENT_TEMPLATES.mistakes.structure(topic, mistakes),
      mistakes
    });

    // Conclusion
    const nextSteps = CONTENT_TEMPLATES.conclusion.generateNextSteps(topic, difficulty);
    sections.push({
      id: 'conclusion',
      type: 'conclusion',
      title: 'Your Learning Journey Continues',
      background: 'gradient',
      icon: 'ArrowRight',
      gradient: 'violet',
      content: CONTENT_TEMPLATES.conclusion.structure(topic, nextSteps),
      cta: {
        title: 'Ready to Practice?',
        description: 'Start applying what you\'ve learned with hands-on exercises.',
        buttonText: 'Begin Practice',
        buttonLink: '/prompts'
      }
    });

    return sections;
  }

  /**
   * 获取完整内容（用于验证）
   */
  private static getFullContent(config: ArticleConfig): string {
    return config.content.sections.map(section => section.content).join(' ');
  }

  /**
   * 分类关键词
   */
  private static categorizeKeywords(keywords: string[]): string {
    const categories = {
      "人物处理": ["character", "consistency", "portrait", "face", "person", "multi-turn"],
      "产品摄影": ["product", "photography", "commercial", "business", "marketing"],
      "API开发": ["api", "integration", "development", "code", "programming"],
      "创意制作": ["cinematic", "universe", "creative", "artistic", "storytelling"],
      "基础入门": ["getting", "started", "beginner", "introduction", "basics"]
    };

    for (const [category, categoryKeywords] of Object.entries(categories)) {
      if (keywords.some(keyword => 
        categoryKeywords.some(ck => keyword.toLowerCase().includes(ck))
      )) {
        return category;
      }
    }

    return "综合教程";
  }

  /**
   * 确定难度级别
   */
  private static determineDifficulty(keywords: string[]): "beginner" | "intermediate" | "advanced" {
    const difficultyKeywords = {
      advanced: ["api", "integration", "development", "advanced", "professional"],
      intermediate: ["character", "consistency", "multi-turn", "product", "cinematic"],
      beginner: ["getting", "started", "beginner", "introduction", "basics"]
    };

    for (const [level, levelKeywords] of Object.entries(difficultyKeywords)) {
      if (keywords.some(keyword => 
        levelKeywords.some(lk => keyword.toLowerCase().includes(lk))
      )) {
        return level as "beginner" | "intermediate" | "advanced";
      }
    }

    return "beginner";
  }

  /**
   * 生成标题
   */
  private static generateTitle(keywords: string[], category: string): string {
    const titleTemplates = {
      "人物处理": "Mastering {keywords} with Nano Banana AI",
      "产品摄影": "Professional {keywords} with AI Image Editing",
      "API开发": "Complete Guide to {keywords} Integration",
      "创意制作": "Creating Amazing {keywords} with Nano Banana",
      "综合教程": "{keywords} Tutorial: From Basics to Advanced"
    };

    const template = titleTemplates[category as keyof typeof titleTemplates] || titleTemplates["综合教程"];
    return template.replace('{keywords}', keywords.map(k => 
      k.charAt(0).toUpperCase() + k.slice(1)
    ).join(' '));
  }

  /**
   * 生成描述
   */
  private static generateDescription(keywords: string[], category: string, difficulty: string): string {
    const topic = keywords.join(' ');
    return `Learn how to master ${topic} with Google's Nano Banana AI. This ${difficulty}-friendly tutorial covers everything from basic concepts to advanced techniques for professional results.`;
  }

  /**
   * 生成作者信息
   */
  private static generateAuthor(difficulty: string) {
    const authors = {
      beginner: {
        name: "Sarah Chen",
        bio: "AI Education Specialist & Nano Banana Expert",
        followers: "12.5k",
        expertise: "AI Education, Beginner Training"
      },
      intermediate: {
        name: "Dr. Michael Rodriguez",
        bio: "AI Research Scientist & Technical Writer",
        followers: "18.2k",
        expertise: "Computer Vision, Advanced AI Techniques"
      },
      advanced: {
        name: "Prof. James Liu",
        bio: "AI Systems Architect & API Specialist",
        followers: "25.8k",
        expertise: "Machine Learning, System Integration"
      }
    };

    return authors[difficulty as keyof typeof authors] || authors.beginner;
  }

  /**
   * 生成相关教程
   */
  private static generateRelatedTutorials(category: string, difficulty: string) {
    const tutorials = [
      {
        id: "character-consistency",
        title: "Character Consistency Mastery",
        category: "Intermediate",
        readTime: "18 min",
        rating: 4.8
      },
      {
        id: "multi-turn-editing",
        title: "Multi-Turn Editing Techniques",
        category: "Intermediate",
        readTime: "22 min",
        rating: 4.7
      },
      {
        id: "api-integration",
        title: "API Integration Guide",
        category: "Advanced",
        readTime: "28 min",
        rating: 4.9
      }
    ];

    return tutorials.slice(0, 3);
  }

  /**
   * 生成关键词
   */
  private static generateKeywords(keywords: string[], category: string): string[] {
    const baseKeywords = ["nano banana", "ai image editing", "google gemini"];
    const categoryKeywords = keywords.map(k => k.toLowerCase());
    return [...baseKeywords, ...categoryKeywords];
  }

  /**
   * 生成标签
   */
  private static generateTags(keywords: string[], category: string): string[] {
    return keywords.map(k => k.charAt(0).toUpperCase() + k.slice(1));
  }

  /**
   * 生成统计信息
   */
  private static generateStats(difficulty: string) {
    const stats = {
      beginner: { readTime: "12 min", rating: 4.9, ratingCount: 347, views: "24.8k" },
      intermediate: { readTime: "18 min", rating: 4.8, ratingCount: 256, views: "18.2k" },
      advanced: { readTime: "25 min", rating: 4.9, ratingCount: 189, views: "12.5k" }
    };

    const baseStats = stats[difficulty as keyof typeof stats] || stats.beginner;
    const now = new Date();
    
    return {
      ...baseStats,
      publishedAt: now.toISOString().split('T')[0],
      updatedAt: now.toISOString().split('T')[0]
    };
  }

  /**
   * 生成ID
   */
  private static generateId(keywords: string[]): string {
    return keywords
      .map(k => k.toLowerCase().replace(/[^a-z0-9]/g, '-'))
      .join('-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  /**
   * 获取徽章文本
   */
  private static getBadgeText(category: string, difficulty: string): string {
    const badges = {
      beginner: "Beginner Friendly",
      intermediate: "Intermediate Level",
      advanced: "Advanced Tutorial"
    };
    return badges[difficulty as keyof typeof badges] || "Tutorial";
  }

  /**
   * 获取徽章图标
   */
  private static getBadgeIcon(category: string): string {
    const icons = {
      "人物处理": "👤",
      "产品摄影": "📸",
      "API开发": "💻",
      "创意制作": "🎨",
      "综合教程": "📚"
    };
    return icons[category as keyof typeof icons] || "📚";
  }

  /**
   * 批量生成文章
   */
  static generateBatchArticles(keywordGroups: string[][]): ArticleConfig[] {
    return keywordGroups.map(keywords => this.generateArticleConfig(keywords));
  }

  /**
   * 验证生成的文章
   */
  static validateGeneratedArticle(config: ArticleConfig): {
    isValid: boolean;
    qualityScore: any;
    suggestions: string[];
  } {
    const fullContent = this.getFullContent(config);
    const validation = validateTechnicalContent(config.title, fullContent, config.seo.keywords);
    const qualityScore = assessContentQuality(config, fullContent);
    const suggestions = generateImprovementSuggestions(validation, qualityScore);

    return {
      isValid: validation.isValid && qualityScore.overall >= 70,
      qualityScore,
      suggestions
    };
  }
}
