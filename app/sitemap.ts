import type { MetadataRoute } from "next"
import { glob } from "fs/promises"
import path from "path"

// List of prompt categories from the data
const promptCategories = [
  "digital-art",
  "photography",
  "character-design",
  "product-photography",
  "architectural-visualization",
  "fashion-design",
  "concept-art",
  "logo-design",
  "portrait-enhancement",
  "vintage-effects",
  "3d-modeling",
  "abstract-art",
  "brand-identity",
  "food-photography",
  "seasonal-effects",
  "social-media",
  "sketch-conversion",
  "interior-design",
  "luxury-branding",
  "neon-effects"
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nanobanana.fans"
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/prompts`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/figure-generate`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/article-generator-demo`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ]

  // Tutorial pages - dynamically generated from file system
  const tutorialPages = []
  try {
    const tutorialsPath = path.join(process.cwd(), "app", "tutorials")
    const tutorialFiles = glob(`${tutorialsPath}/*/page.tsx`)

    for await (const file of tutorialFiles) {
      const relativePath = path.relative(tutorialsPath, file)
      const slug = path.dirname(relativePath)
      
      tutorialPages.push({
        url: `${baseUrl}/tutorials/${slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })
    }
  } catch (error) {
    console.error("Error generating tutorial sitemap:", error)
    // Fallback to hardcoded list
    const tutorialSlugs = [
      "getting-started",
      "character-consistency",
      "multi-turn-editing",
      "building-cinematic-universes",
      "product-photography-with-ai",
      "api-integration",
      "style-transfer-techniques",
      "advanced-techniques",
      "prompt-engineering"
    ]

    tutorialPages.push(...tutorialSlugs.map((slug) => ({
      url: `${baseUrl}/tutorials/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })))
  }

  // Generate prompt category pages
  const promptCategoryPages = promptCategories.map((category) => ({
    url: `${baseUrl}/prompts?category=${encodeURIComponent(category)}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Generate prompt detail pages (example structure - adjust based on actual implementation)
  const promptDetailPages = []
  try {
    // This would typically come from your data source
    // For now, we'll generate some example URLs
    const promptSlugs = [
      "digital-art-creation",
      "product-photography-enhancement",
      "character-design-consistency",
      "architectural-visualization",
      "fashion-design-styling",
      "logo-design-generation",
      "portrait-enhancement-techniques",
      "vintage-effects-application"
    ]

    promptDetailPages.push(...promptSlugs.map((slug) => ({
      url: `${baseUrl}/prompts/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })))
  } catch (error) {
    console.error("Error generating prompt detail sitemap:", error)
  }

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...tutorialPages,
    ...promptCategoryPages,
    ...promptDetailPages
  ]

  // Sort by priority (highest first)
  return allPages.sort((a, b) => b.priority - a.priority)
}
