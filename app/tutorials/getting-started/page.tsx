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
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import Footer from "@/components/footer";
import { SchemaOrg, BreadcrumbSchema } from "@/components/seo-schema"

export const metadata: Metadata = {
  title: "Getting Started with Nano Banana AI - Complete Beginner's Guide | Nano Banana Fans",
  description:
    "Master Google's revolutionary Nano Banana AI image editing tool from scratch. Step-by-step tutorial covering setup, first edits, and essential techniques for beginners.",
  keywords:
    "Nano Banana tutorial, Google Gemini AI, image editing beginner guide, AI photo editing, character consistency, multi-turn editing, getting started",
  authors: [{ name: "Dr. Emily Rodriguez" }],
  openGraph: {
    title: "Getting Started with Nano Banana AI - Complete Beginner's Guide",
    description:
      "Master Google's revolutionary Nano Banana AI image editing tool from scratch with our comprehensive beginner's guide.",
    type: "article",
    publishedTime: "2024-01-15T00:00:00.000Z",
    modifiedTime: "2024-01-20T00:00:00.000Z",
    authors: ["Dr. Emily Rodriguez"],
    tags: ["Setup", "Basics", "First Steps", "Beginner Guide", "AI Image Editing"],
    images: [
      {
        url: " /Google-Nano-Banana-AI-Image-Generator-All-You-Need-To-Know.jpg",
        width: 1200,
        height: 630,
        alt: "Getting Started with Nano Banana AI Tutorial Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Started with Nano Banana AI - Complete Beginner's Guide",
    description:
      "Master Google's revolutionary Nano Banana AI image editing tool from scratch with our comprehensive beginner's guide.",
    images: ["/Google-Nano-Banana-AI-Image-Generator-All-You-Need-To-Know.jpg"],
  },
}

const tutorialData = {
  id: "getting-started",
  title: "Getting Started with Nano Banana AI",
  description:
    "Master Google's revolutionary Nano Banana AI image editing tool from scratch. This comprehensive guide covers everything from initial setup to your first professional-quality edits.",
  author: {
    name: "Dr. Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "AI Research Specialist & Google Developer Expert",
    followers: "18.2k",
    expertise: "Computer Vision, AI Image Processing",
  },
  category: "Beginner",
  difficulty: "beginner",
  readTime: "12 min",
  rating: 4.9,
  ratingCount: 347,
  views: "24.8k",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-20",
  tags: ["Setup", "Basics", "First Steps", "Beginner Guide", "AI Fundamentals"],
  tableOfContents: [
    { id: "introduction", title: "What Makes Nano Banana Special?", level: 2 },
    { id: "access-methods", title: "Three Ways to Access Nano Banana", level: 2 },
    { id: "first-edit", title: "Your First AI Edit (Step-by-Step)", level: 2 },
    { id: "prompt-mastery", title: "Writing Effective Prompts", level: 2 },
    { id: "best-practices", title: "Professional Tips & Best Practices", level: 2 },
    { id: "common-mistakes", title: "Avoiding Common Beginner Mistakes", level: 2 },
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
      id: "prompt-engineering",
      title: "Advanced Prompt Engineering",
      category: "Advanced",
      readTime: "28 min",
      rating: 4.9,
    },
  ],
}

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="tutorial"
        data={{
          title: tutorialData.title,
          description: tutorialData.description,
          url: "https://nanobanana.fans/tutorials/getting-started",
          image: "/Google-Nano-Banana-AI-Image-Generator-All-You-Need-To-Know.jpg",
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
          { name: tutorialData.title, url: "https://nanobanana.fans/tutorials/getting-started" },
        ]}
      />

      <Header currentPath="/tutorials/getting-started" />

      {/* Hero Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 overflow-hidden">
        <img
          src="/tutorials/getting-started-hero.png"
          alt="Nano Banana AI Tutorial - Before and after image editing examples"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="mb-2 bg-primary/90 text-primary-foreground">
            <Sparkles className="h-3 w-3 mr-1" />
            Featured Tutorial
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
            <span className="text-foreground">Getting Started</span>
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
              <section id="introduction" className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    What Makes Nano Banana Special?
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nano Banana represents a quantum leap in AI image editing technology. Developed by Google and
                  integrated into Gemini 2.5 Flash, it's not just another image editor—it's your creative partner that
                  understands context, maintains consistency, and delivers professional results in seconds.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <img
                      src="/tutorials/nano-banana-before-after-1.png"
                      alt="Before and after: Character consistency example showing same person in different outfits"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold mb-2">Character Consistency Magic</h3>
                    <p className="text-sm text-muted-foreground">
                      Unlike other AI tools, Nano Banana maintains perfect character likeness across edits—change
                      outfits, backgrounds, or poses while keeping the person recognizably themselves.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <img
                      src="/tutorials/nano-banana-multi-turn-example.png"
                      alt="Multi-turn editing example showing progressive image refinements"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold mb-2">Multi-Turn Precision</h3>
                    <p className="text-sm text-muted-foreground">
                      Make specific adjustments to individual elements while preserving everything else. It's like
                      having a professional editor who understands exactly what you want.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium text-primary mb-1">💡 Pro Insight</p>
                  <p className="text-sm text-muted-foreground">
                    Nano Banana consistently outperforms tools like Midjourney and DALL-E in blind tests, particularly
                    for character consistency and realistic edits.
                  </p>
                </div>
              </section>

              {/* Access Methods Section */}
              <section id="access-methods" className="bg-card p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Three Ways to Access Nano Banana
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-green-500">Recommended</Badge>
                      <h3 className="text-xl font-semibold">Method 1: Google Gemini App</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      The most user-friendly option with full feature access and seamless integration.
                    </p>

                    <div className="bg-white p-4 rounded-lg mb-4">
                      <img
                        src="/tutorials/gemini-app-interface.png"
                        alt="Google Gemini app interface showing image upload and editing options"
                        className="w-full h-48 object-cover rounded-lg mb-3"
                      />
                      <p className="text-sm text-muted-foreground">
                        The intuitive Gemini interface makes AI editing accessible to everyone
                      </p>
                    </div>

                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      <li>
                        <strong>Visit</strong> gemini.google.com or download the mobile app
                      </li>
                      <li>
                        <strong>Upload</strong> your image by clicking the attachment icon
                      </li>
                      <li>
                        <strong>Describe</strong> your edit in natural language: "Change the background to a sunset
                        beach"
                      </li>
                      <li>
                        <strong>Refine</strong> with follow-up prompts for perfect results
                      </li>
                    </ol>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">Free Option</Badge>
                      <h3 className="text-xl font-semibold">Method 2: Google AI Studio</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Perfect for developers and power users who want direct API access.
                    </p>

                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      <li>
                        Navigate to <code className="bg-muted px-2 py-1 rounded">aistudio.google.com</code>
                      </li>
                      <li>Select "Generate media" → "Gemini Native Image"</li>
                      <li>Upload your photos and write detailed prompts</li>
                      <li>Click "Run" to generate your edited image</li>
                    </ol>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold mb-3">Method 3: Third-Party Platforms</h3>
                    <p className="text-muted-foreground mb-4">
                      Alternative access through specialized platforms with unique features.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Xole AI</h4>
                        <p className="text-sm text-muted-foreground">
                          Easiest setup with preset prompts and style templates
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">LMArena</h4>
                        <p className="text-sm text-muted-foreground">
                          Compare results with other AI models side-by-side
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* First Edit Section */}
              <section id="first-edit" className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Your First AI Edit (Step-by-Step)
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Let's create your first professional-quality edit together. We'll transform a simple portrait into
                  something extraordinary.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                        1
                      </div>
                      <CardTitle className="text-lg">Choose Your Image</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/tutorials/step1-original-image.png"
                        alt="Original portrait photo - good lighting, clear subject"
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <p className="text-sm text-muted-foreground">
                        Start with a high-quality image featuring clear subjects, good lighting, and minimal background
                        clutter.
                      </p>
                      <div className="mt-3 p-2 bg-green-50 rounded text-xs text-green-700">
                        ✓ Good lighting ✓ Clear subject ✓ High resolution
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                        2
                      </div>
                      <CardTitle className="text-lg">Write Your Prompt</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                        "Change the background to a magical forest with soft sunlight filtering through trees, keep the
                        person exactly the same"
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Be specific and descriptive. Include what to change AND what to preserve.
                      </p>
                      <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
                        💡 Tip: Always specify what should stay the same
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                        3
                      </div>
                      <CardTitle className="text-lg">Review & Refine</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/tutorials/step3-final-result.png"
                        alt="Final edited image showing person in magical forest background"
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <p className="text-sm text-muted-foreground">
                        Examine the result and make refinements with follow-up prompts if needed.
                      </p>
                      <div className="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-700">
                        🎨 Perfect! Character preserved, background transformed
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-amber-500" />
                    Try This Exercise
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Practice with your own photo using this exact prompt structure. Start simple, then experiment with
                    more complex edits.
                  </p>
                  <div className="bg-muted p-3 rounded font-mono text-sm">
                    "Transform [specific element] to [detailed description], while keeping [what to preserve] exactly
                    the same"
                  </div>
                </div>
              </section>

              {/* Prompt Mastery Section */}
              <section id="prompt-mastery" className="bg-card p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Writing Effective Prompts
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  The key to amazing results lies in how you communicate with the AI. Here's your guide to prompt
                  mastery.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h3 className="font-semibold text-red-800 mb-3">❌ Avoid These Prompts</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <code className="text-sm text-red-600">"Make it better"</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Too vague - AI doesn't know what "better" means
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <code className="text-sm text-red-600">"Change everything"</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Too broad - likely to lose important details
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <code className="text-sm text-red-600">"Add some colors"</code>
                        <p className="text-xs text-muted-foreground mt-1">Unclear - which colors? Where?</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                    <h3 className="font-semibold text-green-800 mb-3">✅ Use These Instead</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <code className="text-sm text-green-600">
                          "Replace the plain background with a vibrant sunset over mountains, keeping the person's pose
                          and clothing identical"
                        </code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Specific and clear about changes and preservation
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <code className="text-sm text-green-600">
                          "Change only the shirt color to deep navy blue, maintain everything else exactly as is"
                        </code>
                        <p className="text-xs text-muted-foreground mt-1">Precise targeting of single element</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <code className="text-sm text-green-600">
                          "Add warm golden hour lighting from the left side, preserving all facial features and
                          expressions"
                        </code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Detailed lighting instruction with preservation note
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">The Perfect Prompt Formula</h3>
                  <div className="bg-white p-4 rounded-lg border font-mono text-sm">
                    <span className="text-blue-600">[Action]</span> +
                    <span className="text-green-600">[Specific Details]</span> +
                    <span className="text-purple-600">[Style/Mood]</span> +
                    <span className="text-orange-600">[Preservation Instructions]</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Example:{" "}
                    <em>
                      "Transform the background into a cozy coffee shop interior with warm lighting and vintage decor,
                      while keeping the person's expression and clothing exactly the same"
                    </em>
                  </p>
                </div>
              </section>

              {/* Best Practices Section */}
              <section
                id="best-practices"
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Professional Tips & Best Practices
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600">1</span>
                        </div>
                        Start with High-Quality Images
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Use images with good resolution (at least 1024px), proper lighting, and clear subjects. The AI
                        works best with quality source material.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-green-600">2</span>
                        </div>
                        Make Gradual Changes
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Instead of dramatic transformations, make small, incremental edits. This maintains consistency
                        and gives you more control.
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
                        When possible, provide multiple reference images for context. This helps the AI understand your
                        vision more accurately.
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
                        Don't expect perfection on the first try. Use multi-turn editing to refine specific aspects
                        until you achieve your desired result.
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
                        Download intermediate results before making additional changes. This gives you fallback options
                        if later edits don't work out.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-cyan-600">6</span>
                        </div>
                        Experiment with Styles
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Try different artistic styles, lighting conditions, and moods. Nano Banana excels at style
                        transfer while maintaining subject integrity.
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
                    Avoiding Common Beginner Mistakes
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold text-red-700 mb-3">🚫 Mistake #1: Overcomplicating First Attempts</h3>
                    <p className="text-muted-foreground mb-3">
                      New users often try complex, multi-element changes in their first edit, leading to unpredictable
                      results.
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Start with single-element changes like background replacement or
                        color adjustments before attempting complex transformations.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold text-red-700 mb-3">🚫 Mistake #2: Ignoring Image Composition</h3>
                    <p className="text-muted-foreground mb-3">
                      Using poorly composed or low-quality source images limits the AI's ability to produce professional
                      results.
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Choose images with good lighting, clear subjects, and proper framing.
                        The AI enhances good photos—it can't fix fundamental composition issues.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold text-red-700 mb-3">🚫 Mistake #3: Not Specifying Preservation</h3>
                    <p className="text-muted-foreground mb-3">
                      Forgetting to specify what should remain unchanged often results in unwanted alterations to
                      important elements.
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Always include preservation instructions: "keep the person's face and
                        expression exactly the same" or "maintain all facial features."
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
                  Congratulations! You've mastered the fundamentals of Nano Banana AI. Here's your roadmap to becoming a
                  pro.
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
                        Master advanced techniques for maintaining character likeness across complex transformations and
                        multiple edits.
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
                        Learn to make precise, iterative edits while maintaining image quality and achieving complex
                        creative visions.
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
                      <CardTitle className="text-lg">Advanced Prompting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Discover professional prompt engineering techniques for achieving specific artistic styles and
                        complex edits.
                      </p>
                      <Link href="/tutorials/prompt-engineering">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Master Prompts
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
                      <strong>Basic:</strong> Change a portrait's background to three different environments
                    </li>
                    <li>
                      <strong>Intermediate:</strong> Transform the same person into different professional outfits
                    </li>
                    <li>
                      <strong>Advanced:</strong> Create a series showing the person in different time periods while
                      maintaining their identity
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
                      <AvatarFallback className="bg-blue-100 text-blue-600">MJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">Maria Johnson</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="h-3 w-3 fill-current text-yellow-500" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">3 days ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        This tutorial is absolutely fantastic! As a complete beginner, I was able to create
                        professional-looking edits within an hour. The step-by-step approach and real examples made all
                        the difference. Already working through the character consistency tutorial!
                      </p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          24
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-green-100 text-green-600">DK</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">David Kim</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="h-3 w-3 fill-current text-yellow-500" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">1 week ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        The prompt formula section is pure gold! I've been struggling with getting consistent results,
                        but following the [Action] + [Details] + [Style] + [Preservation] structure has completely
                        transformed my edits. Thank you Dr. Rodriguez!
                      </p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          18
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
                    <span className="text-sm font-medium">Jan 20, 2024</span>
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
                    Get the latest Nano Banana tutorials, tips, and AI image editing insights delivered weekly.
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
