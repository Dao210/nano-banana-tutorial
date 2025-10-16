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
  Zap,
  Target,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  Users,
  Layers,
  Code,
  Palette,
  Wand2,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import Footer from "@/components/footer";
import { SchemaOrg, BreadcrumbSchema } from "@/components/seo-schema"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Prompt Engineering Mastery with Nano Banana AI | Nano Banana Fans",
  description:
    "Master the art of prompt engineering with Nano Banana AI. Learn advanced techniques for crafting effective prompts that generate exactly what you envision.",
  keywords:
    "Nano Banana prompt engineering, AI prompt writing, effective prompts, AI image editing, Google Gemini, tutorial, advanced techniques",
  authors: [{ name: "Dr. Michael Rodriguez" }],
  openGraph: {
    title: "Prompt Engineering Mastery with Nano Banana AI",
    description:
      "Master the art of prompt engineering with Nano Banana AI. Learn advanced techniques for crafting effective prompts that generate exactly what you envision.",
    type: "article",
    publishedTime: "2024-03-15T00:00:00.000Z",
    modifiedTime: "2024-03-20T00:00:00.000Z",
    authors: ["Dr. Michael Rodriguez"],
    tags: ["Prompt Engineering", "AI Writing", "Advanced Techniques", "Creative Editing", "Professional Results"],
    images: [
      {
        url: "/tutorials/prompt-engineering-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Prompt Engineering Mastery with Nano Banana AI Tutorial Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Engineering Mastery with Nano Banana AI",
    description:
      "Master the art of prompt engineering with Nano Banana AI. Learn advanced techniques for crafting effective prompts that generate exactly what you envision.",
    images: ["/tutorials/prompt-engineering-cover.jpg"],
  },
}

const tutorialData = {
  id: "prompt-engineering",
  title: "Prompt Engineering Mastery",
  description:
    "Unlock the full potential of Nano Banana AI by mastering the art of prompt engineering. This comprehensive guide will teach you how to craft precise, effective prompts that generate exactly the results you envision.",
  author: {
    name: "Dr. Michael Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "AI Research Scientist & Technical Writer",
    followers: "18.2k",
    expertise: "Computer Vision, Advanced AI Techniques",
  },
  category: "Advanced",
  difficulty: "advanced",
  readTime: "25 min",
  rating: 4.9,
  ratingCount: 189,
  views: "12.5k",
  publishedAt: "2024-03-15",
  updatedAt: "2024-03-20",
  tags: ["Prompt Engineering", "AI Writing", "Advanced Techniques", "Creative Editing", "Professional Results"],
  tableOfContents: [
    { id: "introduction", title: "The Power of Effective Prompts", level: 2 },
    { id: "fundamentals", title: "Prompt Engineering Fundamentals", level: 2 },
    { id: "structure", title: "The Perfect Prompt Structure", level: 2 },
    { id: "techniques", title: "Advanced Prompting Techniques", level: 2 },
    { id: "examples", title: "Real-World Prompt Examples", level: 2 },
    { id: "best-practices", title: "Best Practices & Tips", level: 2 },
    { id: "common-mistakes", title: "Avoiding Common Mistakes", level: 2 },
    { id: "next-steps", title: "Your Learning Journey Continues", level: 2 },
  ],
  relatedTutorials: [
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
      category: "Intermediate",
      readTime: "22 min",
      rating: 4.7,
    },
    {
      id: "api-integration",
      title: "API Integration Guide",
      category: "Advanced",
      readTime: "28 min",
      rating: 4.9,
    },
  ],
}

export default function PromptEngineeringPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="tutorial"
        data={{
          title: tutorialData.title,
          description: tutorialData.description,
          url: "https://nanobanana.fans/tutorials/prompt-engineering",
          image: "/tutorials/prompt-engineering-cover.jpg",
          datePublished: tutorialData.publishedAt,
          dateModified: tutorialData.updatedAt,
          author: {
            name: tutorialData.author.name,
            type: "Person",
          },
          keywords: tutorialData.tags,
          category: tutorialData.category,
          difficulty: tutorialData.difficulty,
          readTime: tutorialData.readTime,
          rating: {
            value: tutorialData.rating,
            count: tutorialData.ratingCount,
          },
        }}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nanobanana.fans" },
          { name: "Tutorials", url: "https://nanobanana.fans/tutorials" },
          { name: tutorialData.title, url: "https://nanobanana.fans/tutorials/prompt-engineering" },
        ]}
      />

      <Header currentPath="/tutorials/prompt-engineering" />

      {/* Hero Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
        <Image
          src="/tutorials/prompt-engineering-cover.jpg"
          alt="Nano Banana AI Prompt Engineering - Crafting effective AI prompts"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="mb-2 bg-primary/90 text-primary-foreground">
            <Wand2 className="h-3 w-3 mr-1" />
            Advanced Tutorial
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
            {tutorialData.title}
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container py-3">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/tutorials" className="hover:text-foreground transition-colors">
              Tutorials
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Prompt Engineering</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {/* Tutorial Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Target className="h-3 w-3 mr-1" />
                  {tutorialData.category}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                  {tutorialData.rating} ({tutorialData.ratingCount} reviews)
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {tutorialData.readTime}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Eye className="h-4 w-4 mr-1" />
                  {tutorialData.views} views
                </div>
              </div>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{tutorialData.description}</p>

              {/* Author and Actions */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-card rounded-lg border">
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage
                      src={tutorialData.author.avatar || "/placeholder.svg"}
                      alt={tutorialData.author.name}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {tutorialData.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-lg">{tutorialData.author.name}</div>
                    <div className="text-sm text-muted-foreground">{tutorialData.author.bio}</div>
                    <div className="text-sm text-muted-foreground">
                      {tutorialData.author.followers} followers • {tutorialData.author.expertise}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {tutorialData.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Reading Progress</span>
                  <span className="text-sm text-muted-foreground">0%</span>
                </div>
                <Progress value={0} className="h-2" />
              </CardContent>
            </Card>

            {/* Tutorial Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Introduction Section */}
              <section id="introduction" className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <Wand2 className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    The Power of Effective Prompts
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Prompt engineering is the art and science of crafting precise instructions that guide AI models to generate exactly what you envision. With Nano Banana, well-crafted prompts can unlock extraordinary creative possibilities and professional-quality results.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <Image
                      src="/tutorials/prompt-engineering-cover.jpg"
                      alt="Before and after: Effective prompt engineering example"
                      width={400}
                      height={128}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      loading="lazy"
                    />
                    <h3 className="font-semibold mb-2">Precision Through Clarity</h3>
                    <p className="text-sm text-muted-foreground">
                      Clear, specific prompts yield dramatically better results than vague or generic instructions.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <Image
                      src="/tutorials/prompt-engineering-cover.jpg"
                      alt="Advanced prompt techniques example"
                      width={400}
                      height={128}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      loading="lazy"
                    />
                    <h3 className="font-semibold mb-2">Advanced Techniques</h3>
                    <p className="text-sm text-muted-foreground">
                      Mastering prompt engineering techniques enables complex creative transformations and consistent results.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium text-primary mb-1">💡 Pro Insight</p>
                  <p className="text-sm text-muted-foreground">
                    Nano Banana's advanced understanding of context and nuance makes it particularly responsive to well-crafted prompts, often exceeding results from other AI tools.
                  </p>
                </div>
              </section>

              {/* Fundamentals Section */}
              <section id="fundamentals" className="bg-card p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Prompt Engineering Fundamentals
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Understanding the core principles of prompt engineering is essential for maximizing Nano Banana's capabilities.
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold mb-3">Clarity and Specificity</h3>
                    <p className="text-muted-foreground mb-4">
                      The more specific and clear your prompt, the better the AI can understand your intent and generate accurate results.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2 text-red-700">❌ Vague Prompt</h4>
                        <p className="text-sm text-muted-foreground">
                          "Make it look better"
                        </p>
                        <div className="mt-2 p-2 bg-red-50 rounded text-xs text-red-700">
                          Unclear intent leads to unpredictable results
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2 text-green-700">✅ Specific Prompt</h4>
                        <p className="text-sm text-muted-foreground">
                          "Enhance the image with warm lighting, add soft focus to background, and increase color saturation by 20%"
                        </p>
                        <div className="mt-2 p-2 bg-green-50 rounded text-xs text-green-700">
                          Clear instructions for precise results
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-500">
                    <h3 className="text-xl font-semibold mb-3">Context and Constraints</h3>
                    <p className="text-muted-foreground mb-4">
                      Providing appropriate context and clearly stating constraints helps the AI understand boundaries and produce more accurate results.
                    </p>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Key Elements</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Define the desired outcome clearly</li>
                        <li>Specify what should remain unchanged</li>
                        <li>Provide stylistic references when helpful</li>
                        <li>Set boundaries for changes (e.g., "only adjust color, not composition")</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Structure Section */}
              <section id="structure" className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    The Perfect Prompt Structure
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  A well-structured prompt follows a logical flow that maximizes clarity and effectiveness.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                        1
                      </div>
                      <CardTitle className="text-lg">Action Statement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Begin with a clear verb that defines what you want the AI to do.
                      </p>
                      <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
                        Examples: "Transform", "Enhance", "Replace", "Add"
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                        2
                      </div>
                      <CardTitle className="text-lg">Detailed Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Provide specific details about what you want to change or create.
                      </p>
                      <div className="mt-3 p-2 bg-green-50 rounded text-xs text-green-700">
                        Include colors, styles, textures, and other relevant characteristics
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                        3
                      </div>
                      <CardTitle className="text-lg">Preservation Instructions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Clearly state what should remain unchanged in the image.
                      </p>
                      <div className="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-700">
                        Examples: "Keep facial features identical", "Maintain original composition"
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-cyan-500" />
                    Complete Prompt Template
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Use this template to structure your prompts for maximum effectiveness:
                  </p>
                  <div className="bg-muted p-3 rounded font-mono text-sm">
                    "[Action] [specific element] to [detailed description], while [preservation instructions]"
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Example: "Transform the background to a vibrant sunset beach with warm orange and pink hues, while keeping the person's facial features and clothing exactly the same"
                  </p>
                </div>
              </section>

              {/* Techniques Section */}
              <section id="techniques" className="bg-card p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <Layers className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Advanced Prompting Techniques
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Master these advanced techniques to unlock Nano Banana's full potential for complex creative tasks.
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-lg border-l-4 border-violet-500">
                    <h3 className="text-xl font-semibold mb-3">Layered Instructions</h3>
                    <p className="text-muted-foreground mb-4">
                      Break complex edits into multiple, sequential instructions for better control and results.
                    </p>
                    
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                        "First, adjust the lighting to create a warm, golden-hour effect. Second, enhance the saturation of the sky while keeping skin tones natural. Third, add a subtle vignette to draw attention to the subject."
                      </div>
                      <p className="text-sm text-muted-foreground">
                        This approach allows for precise control over each aspect of the edit.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Benefits</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Greater control over individual elements</li>
                          <li>Easier to refine specific aspects</li>
                          <li>Reduced chance of unwanted side effects</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">When to Use</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Complex multi-element transformations</li>
                          <li>When precision is critical</li>
                          <li>For iterative refinement workflows</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
                    <h3 className="text-xl font-semibold mb-3">Reference-Based Prompts</h3>
                    <p className="text-muted-foreground mb-4">
                      Incorporate visual references to guide the AI toward specific styles or effects.
                    </p>
                    
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                        "Apply the color grading and lighting style similar to the reference image, but maintain the original subject and composition. Reference: [image of a professionally graded photograph]"
                      </div>
                      <p className="text-sm text-muted-foreground">
                        This technique is particularly effective for achieving consistent visual styles.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Style Matching</h4>
                        <p className="text-sm text-muted-foreground">
                          Match specific artistic or photographic styles using reference images.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Color Grading</h4>
                        <p className="text-sm text-muted-foreground">
                          Transfer color palettes and grading techniques from reference materials.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Lighting Effects</h4>
                        <p className="text-sm text-muted-foreground">
                          Replicate specific lighting conditions or effects from reference images.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Examples Section */}
              <section id="examples" className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Real-World Prompt Examples
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  See how professional prompt engineers craft effective prompts for various scenarios.
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-3">Character Consistency</h3>
                    <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                      "Transform the background to a cyberpunk cityscape with neon lights and rain-slicked streets, while keeping the character's facial features, hairstyle, and clothing exactly the same. Maintain the original lighting on the character's face."
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This prompt ensures character consistency while allowing for dramatic environmental changes.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-3">Product Photography</h3>
                    <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                      "Place the product on a clean white background (#FFFFFF) with soft, even lighting from the front-left. Add a subtle drop shadow directly beneath the product, blur radius 8px, opacity 25%. Keep all product details, textures, and colors unchanged."
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This prompt creates professional e-commerce product images with precise specifications.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-3">Artistic Style Transfer</h3>
                    <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                      "Apply the visual style of a Van Gogh painting to the landscape elements only, using bold brushstrokes and vibrant colors. Keep the person in the foreground exactly the same, with natural skin tones and realistic details. Reference: [image of Van Gogh's 'Starry Night']"
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This prompt demonstrates selective style transfer with clear preservation instructions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Best Practices Section */}
              <section id="best-practices" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Best Practices & Tips
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600">1</span>
                        </div>
                        Start with Simple Prompts
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Begin with basic edits before attempting complex transformations. Master fundamentals first.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-green-600">2</span>
                        </div>
                        Be Specific About Preservation
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Always clearly state what should remain unchanged to prevent unwanted alterations.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-purple-600">3</span>
                        </div>
                        Use Reference Images
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        When possible, provide visual references to guide the AI toward your desired outcome.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-orange-600">4</span>
                        </div>
                        Iterate and Refine
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Don't expect perfection on the first try. Use follow-up prompts to refine specific aspects.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-red-600">5</span>
                        </div>
                        Save Your Progress
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Download intermediate results before making additional changes for fallback options.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-cyan-600">6</span>
                        </div>
                        Experiment with Combinations
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Try combining different techniques and approaches to discover unique creative possibilities.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Mistakes Section */}
              <section id="common-mistakes" className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Avoiding Common Mistakes
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold text-red-700 mb-3">🚫 Mistake #1: Vague or Generic Prompts</h3>
                    <p className="text-muted-foreground mb-3">
                      Using unclear or generic descriptions that don't specify what you want often leads to unpredictable or unsatisfactory results.
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Be specific about changes, styles, and what should remain unchanged. Use detailed descriptions and clear action statements.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold text-red-700 mb-3">🚫 Mistake #2: Not Specifying Preservation</h3>
                    <p className="text-muted-foreground mb-3">
                      Forgetting to specify what should remain unchanged often results in unwanted alterations to important elements.
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Always include preservation instructions: "keep facial features exactly the same" or "maintain all important details."
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold text-red-700 mb-3">🚫 Mistake #3: Overcomplicating Prompts</h3>
                    <p className="text-muted-foreground mb-3">
                      Trying to accomplish too many changes in a single prompt can confuse the AI and lead to suboptimal results.
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Break complex edits into multiple, simpler prompts. Focus on one major change per prompt for better control.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Next Steps Section */}
              <section id="next-steps" className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Your Learning Journey Continues
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Congratulations! You've mastered the fundamentals of prompt engineering with Nano Banana AI. Here's your roadmap to becoming a prompt engineering pro.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-white hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">Character Consistency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Master advanced techniques for maintaining character likeness across complex transformations and multiple edits.
                      </p>
                      <Link href="/tutorials/character-consistency">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Start Learning
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="bg-white hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                        <Layers className="h-5 w-5 text-green-600" />
                      </div>
                      <CardTitle className="text-lg">Multi-Turn Editing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Learn to make precise, iterative edits while maintaining image quality and achieving complex creative visions.
                      </p>
                      <Link href="/tutorials/multi-turn-editing">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Explore Techniques
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="bg-white hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                        <Code className="h-5 w-5 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg">API Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Discover how to integrate Nano Banana into your applications and workflows through powerful API capabilities.
                      </p>
                      <Link href="/tutorials/api-integration">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Integrate Now
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border">
                  <h3 className="font-semibold mb-3">🎯 Practice Challenge</h3>
                  <p className="text-muted-foreground mb-4">
                    Ready to test your skills? Try these progressively challenging exercises:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>
                      <strong>Basic:</strong> Write 5 prompts for simple background changes with clear preservation instructions
                    </li>
                    <li>
                      <strong>Intermediate:</strong> Create prompts for style transfer that maintain subject integrity
                    </li>
                    <li>
                      <strong>Advanced:</strong> Develop a series of layered prompts for a complex creative transformation
                    </li>
                  </ol>
                </div>
              </section>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t">
              <Link href="/tutorials">
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                  All Tutorials
                </Button>
              </Link>
              <Link href="/tutorials/character-consistency">
                <Button className="flex items-center gap-2">
                  Character Consistency
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Comments Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Comments ({tutorialData.ratingCount})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-blue-100 text-blue-600">SJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">Sarah Johnson</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="h-3 w-3 fill-current text-yellow-500" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">1 week ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        This tutorial completely transformed my approach to working with AI! The structured prompt template alone has saved me countless hours of trial and error. The real-world examples are incredibly valuable for understanding how to apply these techniques in practice.
                      </p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          42
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-green-100 text-green-600">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">Michael Roberts</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="h-3 w-3 fill-current text-yellow-500" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">2 weeks ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        As a professional photographer, I was skeptical about AI prompt engineering, but this tutorial opened my eyes to its potential. The section on reference-based prompts has become an essential part of my workflow for achieving consistent client results.
                      </p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          38
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {tutorialData.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm hover:text-primary transition-colors py-1 ${
                        item.level === 2 ? "font-medium" : "ml-4 text-muted-foreground"
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Tutorial Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tutorial Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {tutorialData.category}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Read Time</span>
                    <span className="text-sm font-medium">{tutorialData.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Views</span>
                    <span className="text-sm font-medium">{tutorialData.views}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current text-yellow-500" />
                      <span className="text-sm font-medium">{tutorialData.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Last Updated</span>
                    <span className="text-sm font-medium">Mar 20, 2024</span>
                  </div>
                </CardContent>
              </Card>

              {/* Related Tutorials */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Next Steps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tutorialData.relatedTutorials.map((tutorial) => (
                    <Link key={tutorial.id} href={`/tutorials/${tutorial.id}`} className="block">
                      <div className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <ImageIcon className="h-6 w-6 text-primary/60" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm line-clamp-2 mb-1">{tutorial.title}</h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Badge variant="outline" className="text-xs">
                              {tutorial.category}
                            </Badge>
                            <span>{tutorial.readTime}</span>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 fill-current text-yellow-500 mr-1" />
                              {tutorial.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter CTA */}
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Stay Updated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary-foreground/90 mb-4">
                    Get the latest Nano Banana tutorials, tips, and AI prompt engineering insights delivered weekly.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  )
}