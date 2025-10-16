// Nano Banana Tutorial Article Generator Template
// 基于现有分析结果的文章生成模板

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Star,
  Clock,
  Eye,
  Share2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  MessageCircle,
  ThumbsUp,
  Download,
  CheckCircle,
  Sparkles,
  Target,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  Users,
  Layers,
  Zap,
  Palette,
  Camera,
  Box,
  SunMedium,
  Scan,
  Ruler,
  Scissors,
  Film,
  Code,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"
import { SchemaOrg, BreadcrumbSchema } from "@/components/seo-schema"
import { Header } from "@/components/header"
import Footer from "@/components/footer"

// 文章生成配置接口
interface ArticleConfig {
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
interface SectionConfig {
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

// 默认配置生成器
export function generateArticleConfig(keywords: string[]): ArticleConfig {
  // 关键词分析和分类
  const category = categorizeKeywords(keywords);
  const difficulty = determineDifficulty(keywords);
  const contentPlan = planContent(keywords, category);
  
  return {
    id: generateId(keywords),
    title: generateTitle(keywords, category),
    description: generateDescription(keywords, category),
    category,
    difficulty,
    author: selectAuthor(category),
    content: contentPlan,
    seo: {
      keywords: generateKeywords(keywords, category),
      tags: generateTags(keywords, category),
    },
    stats: {
      readTime: estimateReadTime(category, difficulty),
      rating: 4.7 + Math.random() * 0.3, // 4.7-5.0
      ratingCount: Math.floor(100 + Math.random() * 400),
      views: generateViews(category, difficulty),
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  };
}

// 关键词分类函数
function categorizeKeywords(keywords: string[]): string {
  const categories = {
    "人物处理": ["character", "consistency", "portrait", "face", "person", "multi-turn"],
    "产品摄影": ["product", "photography", "ecommerce", "commercial", "marketing"],
    "场景创建": ["cinematic", "scene", "environment", "background", "universe"],
    "技术开发": ["api", "integration", "development", "code", "programming"],
    "基础操作": ["beginner", "getting started", "basic", "introduction", "tutorial"],
    "创意应用": ["creative", "artistic", "style", "design", "art"],
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

// 难度判断函数
function determineDifficulty(keywords: string[]): "beginner" | "intermediate" | "advanced" {
  const beginnerKeywords = ["beginner", "basic", "introduction", "getting started", "tutorial"];
  const advancedKeywords = ["api", "advanced", "professional", "expert", "integration"];
  
  if (keywords.some(k => beginnerKeywords.some(bk => k.toLowerCase().includes(bk)))) {
    return "beginner";
  }
  if (keywords.some(k => advancedKeywords.some(ak => k.toLowerCase().includes(ak)))) {
    return "advanced";
  }
  return "intermediate";
}

// 内容规划函数
function planContent(keywords: string[], category: string): ArticleConfig["content"] {
  const baseSections: SectionConfig[] = [
    {
      id: "introduction",
      type: "introduction",
      title: generateIntroductionTitle(keywords, category),
      background: "gradient",
      icon: getSectionIcon("introduction", category),
      gradient: getGradientColor("introduction"),
      content: generateIntroductionContent(keywords, category),
    },
    {
      id: "guide",
      type: "guide",
      title: generateGuideTitle(keywords, category),
      background: "card",
      icon: getSectionIcon("guide", category),
      content: generateGuideContent(keywords, category),
      steps: generateSteps(keywords, category),
    },
    {
      id: "examples",
      type: "examples",
      title: "实例演示与效果对比",
      background: "gradient",
      icon: "ImageIcon",
      gradient: "from-blue-50 to-cyan-50",
      content: "通过实际案例展示 Nano Banana 的强大功能，包括前后对比和详细说明。",
      examples: generateExamples(keywords, category),
    },
    {
      id: "tips",
      type: "tips",
      title: "专业技巧与最佳实践",
      background: "card",
      icon: "Lightbulb",
      content: "分享专业摄影师和设计师的使用技巧，帮助你获得更好的效果。",
      tips: generateTips(keywords, category),
    },
    {
      id: "mistakes",
      type: "mistakes",
      title: "常见错误与解决方案",
      background: "gradient",
      icon: "AlertTriangle",
      gradient: "from-red-50 to-pink-50",
      content: "避免新手常犯的错误，提供实用的解决方案和修复技巧。",
      mistakes: generateMistakes(keywords, category),
    },
    {
      id: "conclusion",
      type: "conclusion",
      title: "总结与下一步",
      background: "gradient",
      icon: "ArrowRight",
      gradient: "from-violet-50 to-purple-50",
      content: generateConclusionContent(keywords, category),
      cta: {
        title: "准备开始创作了吗？",
        description: "现在你掌握了完整的工作流程，开始用 Nano Banana 创造令人惊叹的视觉效果吧！",
        buttonText: "探索更多教程",
        buttonLink: "/tutorials",
      },
    },
  ];

  return {
    hero: {
      coverImage: `/tutorials/${generateId(keywords)}.jpg`,
      badge: {
        text: getCategoryBadge(category),
        icon: getCategoryIcon(category),
      },
    },
    sections: baseSections,
    sidebar: {
      relatedTutorials: generateRelatedTutorials(category),
    },
  };
}

// 生成器辅助函数
function generateId(keywords: string[]): string {
  return keywords.join("-").toLowerCase().replace(/\s+/g, "-");
}

function generateTitle(keywords: string[], category: string): string {
  const titleTemplates = {
    "人物处理": [
      "掌握人物一致性：{keyword}完整指南",
      "{keyword}：打造完美人像效果",
      "Nano Banana 人物处理：{keyword}精通教程",
    ],
    "产品摄影": [
      "产品摄影革新：{keyword}实战指南",
      "{keyword}：电商摄影完全教程",
      "专业产品摄影：{keyword}详解",
    ],
    "场景创建": [
      "场景创建大师：{keyword}全面解析",
      "{keyword}：构建沉浸式视觉世界",
      "Nano Banana 场景设计：{keyword}指南",
    ],
    "技术开发": [
      "API 集成实战：{keyword}开发指南",
      "{keyword}：开发者完整手册",
      "Nano Banana 开发：{keyword}详解",
    ],
    "基础操作": [
      "入门指南：{keyword}快速上手",
      "{keyword}：新手完全教程",
      "Nano Banana 基础：{keyword}详解",
    ],
    "创意应用": [
      "创意无限：{keyword}艺术指南",
      "{keyword}：释放创意潜能",
      "Nano Banana 创意：{keyword}教程",
    ],
  };
  
  const templates =
    titleTemplates[category as keyof typeof titleTemplates] ?? titleTemplates["基础操作"];
  const template = templates[Math.floor(Math.random() * templates.length)];
  const mainKeyword = keywords[0] || "Nano Banana";
  
  return template.replace("{keyword}", mainKeyword);
}

function generateDescription(keywords: string[], category: string): string {
  const descriptions: Record<string, string> = {
    "人物处理": "掌握 Nano Banana 的人物一致性技术，学习如何在多个编辑中保持人物特征的完整性和一致性。",
    "产品摄影": "学习如何使用 Nano Banana 创建专业级产品摄影作品，提升电商和营销视觉效果。",
    "场景创建": "探索 Nano Banana 的场景创建能力，构建令人惊叹的视觉环境和背景。",
    "技术开发": "深入了解 Nano Banana 的 API 集成和开发技术，将 AI 图像编辑能力集成到你的应用中。",
    "基础操作": "从零开始学习 Nano Banana 的基础操作，快速上手 AI 图像编辑技术。",
    "创意应用": "释放创意潜能，学习如何使用 Nano Banana 进行艺术创作和创意设计。",
  };
  
  return descriptions[category] || "全面的 Nano Banana 教程，帮助你掌握 AI 图像编辑的核心技术。";
}

// 内容生成函数
function generateIntroductionContent(keywords: string[], category: string): string {
  const introductions: Record<string, string> = {
    "人物处理": `Nano Banana 的人物一致性技术彻底改变了数字肖像编辑的游戏规则。通过先进的 AI 算法，它能够在多次编辑中完美保持人物的面部特征、表情和身份识别特征。这项技术不仅适用于专业摄影师，也为内容创作者、设计师和普通用户提供了前所未有的创作自由度。`,
    "产品摄影": `在电商竞争激烈的今天，产品摄影的质量直接影响销售转化率。Nano Banana 为产品摄影带来了革命性的变化，让你无需专业设备和摄影棚就能创建出媲美专业工作室的效果。从背景替换到光线调整，从色彩校正到细节增强，每个环节都能实现精确控制。`,
    "场景创建": `场景创建是视觉叙事的核心元素。Nano Banana 的场景生成能力让你能够将普通的图像转换为完整的视觉世界。无论是梦幻的奇幻场景、逼真的自然环境，还是未来的科幻世界，都能通过简单的文字描述实现。这项技术为电影制作人、游戏设计师和创意工作者提供了强大的工具。`,
    "技术开发": `将 Nano Banana 的强大图像编辑能力集成到你的应用中，为用户提供前所未有的 AI 图像处理体验。本教程将详细介绍 API 集成的完整流程，从基础设置到高级功能，帮助开发者快速上手并构建创新的应用程序。`,
    "基础操作": `欢迎来到 Nano Banana 的世界！这个强大的 AI 图像编辑工具将彻底改变你对数字图像处理的认知。本教程将带你从零开始，逐步掌握所有基础操作，让你能够快速上手并开始创作令人惊叹的视觉效果。`,
    "创意应用": `创意无限，想象无界。Nano Banana 不仅是工具，更是创意伙伴。它能够理解你的艺术意图，将抽象的概念转化为具体的视觉作品。无论你是专业艺术家还是创意爱好者，这个教程都将帮助你释放全部创意潜能。`,
  };
  
  return introductions[category] || "深入了解 Nano Banana 的强大功能，开启 AI 图像编辑的新篇章。";
}

function generateGuideContent(keywords: string[], category: string): string {
  return `通过系统化的学习路径，你将掌握完整的操作流程。每个步骤都经过精心设计，确保你能够理解和应用所学知识。我们采用理论与实践相结合的方式，让你在学习过程中不断获得成就感。`;
}

function generateSteps(keywords: string[], category: string): string[] {
  const commonSteps = [
    "准备工作：选择合适的源图像和明确编辑目标",
    "基础设置：配置 Nano Banana 参数和工作环境",
    "核心操作：执行主要的图像编辑任务",
    "细节优化：调整和完善最终效果",
    "输出导出：保存和分享你的作品",
  ];
  
  const categorySpecificSteps: Record<string, string[]> = {
    "人物处理": [
      "人物分析：识别面部特征和关键点",
      "一致性设置：配置人物保持参数",
      "分步编辑：逐步进行所需修改",
      "特征验证：确保人物特征完整性",
      "最终调整：优化整体效果",
    ],
    "产品摄影": [
      "产品分析：评估产品和拍摄条件",
      "背景处理：创建干净的背景环境",
      "光线调整：优化光照效果",
      "色彩校正：确保颜色准确性",
      "尺寸优化：适配不同平台需求",
    ],
  };
  
  return categorySpecificSteps[category] || commonSteps;
}

function generateExamples(keywords: string[], category: string): SectionConfig["examples"] {
  return [
    {
      title: "基础示例",
      description: "展示基本操作流程和预期效果",
      image: "/tutorials/example-basic.jpg",
    },
    {
      title: "进阶案例",
      description: "复杂场景的处理方法和技巧",
      image: "/tutorials/example-advanced.jpg",
    },
    {
      title: "实际应用",
      description: "真实项目中的应用案例",
      image: "/tutorials/example-real-world.jpg",
    },
  ];
}

function generateTips(keywords: string[], category: string): SectionConfig["tips"] {
  return [
    {
      title: "选择合适的源图像",
      content: "高质量的输入图像是获得优秀结果的基础。确保图像清晰、光线良好、主体明确。",
      type: "success",
    },
    {
      title: "精确描述你的需求",
      content: "使用具体、详细的描述词，避免模糊不清的表达。越精确的描述，越接近预期的结果。",
      type: "info",
    },
    {
      title: "逐步迭代优化",
      content: "不要期望一次完美，通过多次调整和优化，逐步达到理想效果。",
      type: "warning",
    },
  ];
}

function generateMistakes(keywords: string[], category: string): SectionConfig["mistakes"] {
  return [
    {
      title: "过度编辑导致失真",
      description: "一次性进行太多修改可能导致图像失真或质量下降。",
      solution: "采用渐进式编辑，每次专注于一个方面的改进，保持图像的自然性。",
    },
    {
      title: "忽略一致性要求",
      description: "在系列编辑中忽略一致性设置，导致结果不协调。",
      solution: "始终启用一致性设置，并在编辑过程中定期检查整体效果。",
    },
    {
      title: "不合适的分辨率选择",
      description: "选择过高或过低的分辨率影响处理速度和最终质量。",
      solution: "根据具体用途选择合适的分辨率，平衡质量和效率。",
    },
  ];
}

function generateConclusionContent(keywords: string[], category: string): string {
  return `恭喜你完成了这个全面的学习旅程！通过本教程，你已经掌握了 ${category} 的核心技术和实用技巧。现在你具备了独立创作的能力，可以将这些知识应用到实际项目中。记住，熟能生巧，持续的练习和探索将让你在这个领域达到更高的水平。`;
}

// 其他辅助函数
function selectAuthor(category: string): ArticleConfig["author"] {
  const authors: Record<string, ArticleConfig["author"]> = {
    "人物处理": {
      name: "Dr. Emily Rodriguez",
      bio: "AI Research Specialist & Google Developer Expert",
      followers: "18.2k",
      expertise: "Computer Vision, AI Image Processing",
    },
    "产品摄影": {
      name: "Jane Smith",
      bio: "AI Content Creator & Product Imaging Specialist",
      followers: "12.8k",
      expertise: "E-commerce imaging, Visual merchandising",
    },
    "场景创建": {
      name: "Nano Banana Team",
      bio: "AI Visual Storytelling Experts",
      followers: "21.4k",
      expertise: "Cinematic Design, AI Art, Storytelling",
    },
    "技术开发": {
      name: "Alex Chen",
      bio: "Full-Stack Developer & AI Integration Expert",
      followers: "15.6k",
      expertise: "API Development, Machine Learning",
    },
  };
  
  return authors[category] || {
    name: "Sarah Chen",
    bio: "AI Research Specialist at Google",
    followers: "12.5k",
    expertise: "AI Image Processing, Computer Vision",
  };
}

function getSectionIcon(sectionType: string, category: string): string {
  const iconMap: Record<string, string> = {
    introduction: "Sparkles",
    guide: "Target",
    examples: "ImageIcon",
    tips: "Lightbulb",
    mistakes: "AlertTriangle",
    conclusion: "ArrowRight",
  };
  
  return iconMap[sectionType] || "CheckCircle";
}

function getGradientColor(sectionType: string): string {
  const gradientMap: Record<string, string> = {
    introduction: "from-cyan-50 to-blue-50",
    guide: "from-amber-50 to-orange-50",
    examples: "from-blue-50 to-cyan-50",
    tips: "from-emerald-50 to-teal-50",
    mistakes: "from-red-50 to-pink-50",
    conclusion: "from-violet-50 to-purple-50",
  };
  
  return gradientMap[sectionType] || "from-gray-50 to-slate-50";
}

function getCategoryBadge(category: string): string {
  const badges: Record<string, string> = {
    "人物处理": "人物处理教程",
    "产品摄影": "摄影实战",
    "场景创建": "创意场景",
    "技术开发": "开发指南",
    "基础操作": "入门教程",
    "创意应用": "创意应用",
  };
  
  return badges[category] || "综合教程";
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    "人物处理": "Users",
    "产品摄影": "Camera",
    "场景创建": "Film",
    "技术开发": "Code",
    "基础操作": "Target",
    "创意应用": "Palette",
  };
  
  return icons[category] || "Sparkles";
}

function generateKeywords(keywords: string[], category: string): string[] {
  const baseKeywords = ["Nano Banana", "AI image editing", "Google Gemini"];
  const categoryKeywords: Record<string, string[]> = {
    "人物处理": ["character consistency", "portrait editing", "face preservation"],
    "产品摄影": ["product photography", "ecommerce", "commercial imaging"],
    "场景创建": ["scene creation", "background generation", "environment design"],
    "技术开发": ["API integration", "development", "programming"],
    "基础操作": ["beginner guide", "tutorial", "getting started"],
    "创意应用": ["creative design", "artistic editing", "style transfer"],
  };

  const combined = [...baseKeywords, ...keywords, ...(categoryKeywords[category] || [])];
  return Array.from(new Set(combined.map((item) => item.trim()).filter(Boolean))).slice(0, 12);
}

function generateTags(keywords: string[], category: string): string[] {
  const baseTags = ["Nano Banana", "AI Image Editing"];
  const categoryTags: Record<string, string[]> = {
    "人物处理": ["Character", "Consistency", "Portrait"],
    "产品摄影": ["Product", "Photography", "E-commerce"],
    "场景创建": ["Scene", "Background", "Creative"],
    "技术开发": ["API", "Development", "Integration"],
    "基础操作": ["Beginner", "Tutorial", "Guide"],
    "创意应用": ["Creative", "Art", "Design"],
  };
  
  return [...baseTags, ...keywords, ...(categoryTags[category] || [])].slice(0, 8);
}

function estimateReadTime(category: string, difficulty: "beginner" | "intermediate" | "advanced"): string {
  const baseTime: Record<"beginner" | "intermediate" | "advanced", number> = {
    beginner: 10,
    intermediate: 15,
    advanced: 25,
  };

  const categoryMultiplier: Record<string, number> = {
    "技术开发": 1.5,
    "场景创建": 1.2,
    "人物处理": 1.1,
    "产品摄影": 1.0,
    "基础操作": 0.8,
    "创意应用": 1.0,
  };
  
  const minutes = Math.floor(
    (baseTime[difficulty] || 15) * (categoryMultiplier[category] || 1.0)
  );
  
  return `${minutes} min`;
}

function generateViews(category: string, difficulty: "beginner" | "intermediate" | "advanced"): string {
  const baseViews: Record<"beginner" | "intermediate" | "advanced", string> = {
    beginner: "15.2k",
    intermediate: "8.5k",
    advanced: "4.1k",
  };

  const categoryPopularity: Record<string, number> = {
    "基础操作": 1.5,
    "人物处理": 1.3,
    "产品摄影": 1.2,
    "场景创建": 1.1,
    "创意应用": 1.0,
    "技术开发": 0.8,
  };
  
  const base = parseFloat(baseViews[difficulty] || "8.5k");
  const multiplier = categoryPopularity[category] || 1.0;
  const views = Math.floor(base * multiplier * 10) / 10;
  
  return `${views}k`;
}

function generateRelatedTutorials(category: string): Array<{
  id: string;
  title: string;
  category: string;
  readTime: string;
  rating: number;
}> {
  const relatedMap: Record<string, Array<{
    id: string
    title: string
    category: string
    readTime: string
    rating: number
  }>> = {
    "人物处理": [
      {
        id: "character-consistency",
        title: "Character Consistency Mastery",
        category: "Intermediate",
        readTime: "18 min",
        rating: 4.8,
      },
      {
        id: "multi-turn-editing",
        title: "Multi-Turn Editing Techniques",
        category: "Advanced",
        readTime: "22 min",
        rating: 4.7,
      },
    ],
    "产品摄影": [
      {
        id: "background-removal",
        title: "Background Removal Mastery",
        category: "Intermediate",
        readTime: "15 min",
        rating: 4.6,
      },
      {
        id: "color-grading",
        title: "Professional Color Grading",
        category: "Advanced",
        readTime: "25 min",
        rating: 4.8,
      },
    ],
  };
  
  return relatedMap[category] || [
    {
      id: "getting-started",
      title: "Getting Started with Nano Banana",
      category: "Beginner",
      readTime: "12 min",
      rating: 4.9,
    },
  ];
}

function generateIntroductionTitle(keywords: string[], category: string): string {
  const titles: Record<string, string> = {
    "人物处理": "人物一致性技术详解",
    "产品摄影": "专业产品摄影基础",
    "场景创建": "场景创建的艺术",
    "技术开发": "API 集成开发指南",
    "基础操作": "入门基础与核心概念",
    "创意应用": "创意应用与艺术表达",
  };
  
  return titles[category] || "技术概述与应用场景";
}

function generateGuideTitle(keywords: string[], category: string): string {
  const titles: Record<string, string> = {
    "人物处理": "分步操作指南",
    "产品摄影": "完整工作流程",
    "场景创建": "创建步骤详解",
    "技术开发": "开发实战教程",
    "基础操作": "基础操作指南",
    "创意应用": "创意实现流程",
  };
  
  return titles[category] || "实践操作指南";
}

// 生成完整文章组件的函数
export function generateArticleComponent(config: ArticleConfig) {
  // 这里返回一个完整的 React 组件
  // 实际使用时可以根据 config 动态生成文章内容
  return `// Generated Article Component for: ${config.title}
// Category: ${config.category}
// Difficulty: ${config.difficulty}
// Sections: ${config.content.sections.length}
  
// Use this config to generate the full article component
const articleConfig = ${JSON.stringify(config, null, 2)};
  
// Import and use the ArticleGenerator component
import { ArticleGenerator } from './ArticleGenerator';
  
export default function GeneratedArticle() {
  return <ArticleGenerator config={articleConfig} />;
}`;
}

export default generateArticleConfig;
