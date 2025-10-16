// 文章配置接口
export interface ArticleConfig {
  // 基础信息
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  
  // 作者信息
  author: {
    name: string;
    avatar?: string;
    bio: string;
    followers: string;
    expertise: string;
  };
  
  // 内容配置
  content: {
    // Hero 配置
    hero: {
      coverImage: string;
      badge: {
        text: string;
        icon: string;
      };
    };
    
    // 章节配置
    sections: SectionConfig[];
    
    // 侧边栏配置
    sidebar: {
      relatedTutorials?: Array<{
        id: string;
        title: string;
        category: string;
        readTime: string;
        rating: number;
      }>;
    };
  };
  
  // SEO 配置
  seo: {
    keywords: string[];
    tags: string[];
  };
  
  // 统计信息
  stats: {
    readTime: string;
    rating: number;
    ratingCount: number;
    views: string;
    publishedAt: string;
    updatedAt: string;
  };
}

// 章节配置接口
export interface SectionConfig {
  id: string;
  type: "introduction" | "guide" | "examples" | "tips" | "mistakes" | "conclusion";
  title: string;
  background: "gradient" | "card";
  icon: string;
  gradient?: string; // 渐变色类名
  content: string;
  
  // 可选内容
  steps?: string[];
  examples?: Array<{
    title: string;
    description: string;
    image?: string;
    code?: string;
  }>;
  tips?: Array<{
    title: string;
    content: string;
    type: "success" | "warning" | "info";
  }>;
  mistakes?: Array<{
    title: string;
    description: string;
    solution: string;
  }>;
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

// 技术验证结果
export interface TechnicalValidationResult {
  isValid: boolean;
  score: number; // 0-100
  issues: Array<{
    type: "error" | "warning" | "info";
    message: string;
    suggestion?: string;
  }>;
  category: string;
  difficulty: string;
}

// 内容质量评分
export interface ContentQualityScore {
  overall: number; // 0-100
  structure: number; // 结构完整性
  accuracy: number; // 技术准确性
  readability: number; // 可读性
  seo: number; // SEO优化度
  engagement: number; // 用户参与度
}
