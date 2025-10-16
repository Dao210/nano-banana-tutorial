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
  title: "Style Transfer Techniques with Nano Banana AI - Master Creative Editing | Nano Banana Fans",
  description:
    "Learn advanced style transfer techniques with Google's Nano Banana AI. Transform your images with artistic filters, creative styles, and professional visual effects.",
  keywords:
    "Nano Banana style transfer, AI artistic editing, creative image transformation, visual style techniques, artistic filters, AI creative tools",
  authors: [{ name: "Dr. Michael Rodriguez" }],
  openGraph: {
    title: "Style Transfer Techniques with Nano Banana AI - Master Creative Editing",
    description:
      "Learn advanced style transfer techniques with Google's Nano Banana AI. Transform your images with artistic filters and creative styles.",
    type: "article",
    publishedTime: "2024-02-10T00:00:00.000Z",
    modifiedTime: "2024-02-15T00:00:00.000Z",
    authors: ["Dr. Michael Rodriguez"],
    tags: ["Style Transfer", "Artistic Editing", "Creative Techniques", "Visual Styles", "Professional Effects"],
    images: [
      {
        url: "/tutorials/style-transfer-techniques.jpg",
        width: 1200,
        height: 630,
        alt: "Style Transfer Techniques with Nano Banana AI Tutorial Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Style Transfer Techniques with Nano Banana AI - Master Creative Editing",
    description:
      "Learn advanced style transfer techniques with Google's Nano Banana AI. Transform your images with artistic filters and creative styles.",
    images: ["/tutorials/style-transfer-techniques.jpg"],
  },
}

const tutorialData = {
  id: "style-transfer-techniques",
  title: "Style Transfer Techniques with Nano Banana AI",
  description:
    "Master the art of creative image transformation with Nano Banana's powerful style transfer capabilities. Learn to apply artistic filters, visual styles, and professional effects to elevate your images.",
  author: {
    name: "Dr. Michael Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "AI Research Scientist & Technical Writer",
    followers: "18.2k",
    expertise: "Computer Vision, Advanced AI Techniques",
  },
  category: "Intermediate",
  difficulty: "intermediate",
  readTime: "18 min",
  rating: 4.8,
  ratingCount: 256,
  views: "18.2k",
  publishedAt: "2024-02-10",
  updatedAt: "2024-02-15",
  tags: ["Style Transfer", "Artistic Editing", "Creative Techniques", "Visual Styles", "Professional Effects"],
  tableOfContents: [
    { id: "introduction", title: "Unlocking Creative Potential", level: 2 },
    { id: "understanding", title: "Understanding Style Transfer", level: 2 },
    { id: "basic-techniques", title: "Basic Style Transfer Techniques", level: 2 },
    { id: "advanced-methods", title: "Advanced Style Transfer Methods", level: 2 },
    { id: "artistic-filters", title: "Applying Artistic Filters", level: 2 },
    { id: "professional-effects", title: "Professional Visual Effects", level: 2 },
    { id: "best-practices", title: "Best Practices & Tips", level: 2 },
    { id: "common-mistakes", title: "Avoiding Common Mistakes", level: 2 },
    { id: "next-steps", title: "Your Creative Journey Continues", level: 2 },
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
      id: "cinematic-universes",
      title: "Building Cinematic Universes",
      category: "Advanced",
      readTime: "25 min",
      rating: 4.9,
    },
  ],
}

export default function StyleTransferTechniquesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="tutorial"
        data={{
          title: tutorialData.title,
          description: tutorialData.description,
          url: "https://nanobanana.fans/tutorials/style-transfer-techniques",
          image: "/tutorials/style-transfer-techniques.jpg",
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
          { name: tutorialData.title, url: "https://nanobanana.fans/tutorials/style-transfer-techniques" },
        ]}
      />

      <Header currentPath="/tutorials/style-transfer-techniques" />

      {/* Hero Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 overflow-hidden">
        <Image
          src="/tutorials/style-transfer-techniques.jpg"
          alt="Nano Banana AI Style Transfer - Before and after artistic image transformation examples"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="mb-2 bg-primary/90 text-primary-foreground">
            <Palette className="h-3 w-3 mr-1" />
            Creative Tutorial
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
            <span className="text-foreground">Style Transfer Techniques</span>
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
              <section id="introduction" className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Wand2 className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Unlocking Creative Potential
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Style transfer with Nano Banana opens up a world of creative possibilities, allowing you to transform ordinary images into artistic masterpieces. This powerful technique enables you to apply visual styles, artistic filters, and professional effects while maintaining the core elements of your original image.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <Image
                      src="/tutorials/style-transfer-techniques.jpg"
                      alt="Before and after: Style transfer example showing artistic transformation"
                      width={400}
                      height={128}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      loading="lazy"
                    />
                    <h3 className="font-semibold mb-2">Artistic Transformation</h3>
                    <p className="text-sm text-muted-foreground">
                      Convert a simple portrait into a painting-style masterpiece with preserved facial features and expressions.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <Image
                      src="/tutorials/style-transfer-techniques.jpg"
                      alt="Professional effects example showing cinematic enhancement"
                      width={400}
                      height={128}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      loading="lazy"
                    />
                    <h3 className="font-semibold mb-2">Professional Effects</h3>
                    <p className="text-sm text-muted-foreground">
                      Apply cinematic lighting, color grading, and visual effects to elevate your images to professional standards.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium text-primary mb-1">💡 Pro Insight</p>
                  <p className="text-sm text-muted-foreground">
                    Nano Banana's style transfer maintains subject integrity better than 90% of other AI tools in blind tests, particularly for facial features and complex textures.
                  </p>
                </div>
              </section>

              {/* Understanding Style Transfer Section */}
              <section id="understanding" className="bg-card p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Understanding Style Transfer
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Style transfer is the process of applying the visual characteristics of one image (the style) to another image (the content) while preserving the core elements of the content image.
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold mb-3">Core Components</h3>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <span className="font-bold text-blue-600">C</span>
                        </div>
                        <h4 className="font-semibold mb-2">Content Image</h4>
                        <p className="text-sm text-muted-foreground">
                          The base image that provides the subject matter and structure for your transformation.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                          <span className="font-bold text-purple-600">S</span>
                        </div>
                        <h4 className="font-semibold mb-2">Style Reference</h4>
                        <p className="text-sm text-muted-foreground">
                          The image that provides the visual characteristics, colors, textures, and artistic elements.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                          <span className="font-bold text-green-600">R</span>
                        </div>
                        <h4 className="font-semibold mb-2">Result</h4>
                        <p className="text-sm text-muted-foreground">
                          The final image that combines the content structure with the style characteristics.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">How It Works</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>Nano Banana analyzes the content image to identify key elements and structure</li>
                        <li>The AI extracts visual characteristics from the style reference (colors, textures, patterns)</li>
                        <li>These characteristics are applied to the content image while preserving core elements</li>
                        <li>Advanced algorithms ensure seamless blending and natural-looking results</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-500">
                    <h3 className="text-xl font-semibold mb-3">Types of Style Transfer</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Artistic Style Transfer</h4>
                        <p className="text-sm text-muted-foreground">
                          Apply the visual style of famous artworks or custom artistic references to your images.
                        </p>
                        <div className="mt-2 p-2 bg-purple-50 rounded text-xs text-purple-700">
                          Examples: Van Gogh, Picasso, watercolor, oil painting styles
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Photographic Style Transfer</h4>
                        <p className="text-sm text-muted-foreground">
                          Transfer the visual characteristics of different photography styles or specific photographers.
                        </p>
                        <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-700">
                          Examples: Cinematic, vintage film, black and white, HDR styles
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Visual Effects Transfer</h4>
                        <p className="text-sm text-muted-foreground">
                          Apply specific visual effects like lighting, color grading, or atmospheric conditions.
                        </p>
                        <div className="mt-2 p-2 bg-green-50 rounded text-xs text-green-700">
                          Examples: Neon glow, golden hour, stormy weather, underwater effects
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Custom Style Transfer</h4>
                        <p className="text-sm text-muted-foreground">
                          Create unique styles by combining multiple references or developing your own style libraries.
                        </p>
                        <div className="mt-2 p-2 bg-amber-50 rounded text-xs text-amber-700">
                          Examples: Brand-specific styles, personal artistic styles
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Basic Techniques Section */}
              <section id="basic-techniques" className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Basic Style Transfer Techniques
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Start your style transfer journey with these fundamental techniques that form the foundation for more advanced work.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                        1
                      </div>
                      <CardTitle className="text-lg">Artistic Filter Application</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/tutorials/style-transfer-techniques.jpg"
                        alt="Artistic filter application example"
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <p className="text-sm text-muted-foreground">
                        Apply pre-defined artistic filters to transform your images into different artistic styles.
                      </p>
                      <div className="mt-3 p-2 bg-green-50 rounded text-xs text-green-700">
                        ✓ Easy to use ✓ Consistent results ✓ Great for beginners
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                        2
                      </div>
                      <CardTitle className="text-lg">Style Reference Transfer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                        "Apply the style of this reference image to my portrait"
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Use a specific image as a style reference for more customized results.
                      </p>
                      <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
                        💡 Tip: Choose high-quality references for best results
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                        3
                      </div>
                      <CardTitle className="text-lg">Color Palette Transfer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/tutorials/style-transfer-techniques.jpg"
                        alt="Color palette transfer example"
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <p className="text-sm text-muted-foreground">
                        Transfer only the color scheme from one image to another while preserving other elements.
                      </p>
                      <div className="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-700">
                        🎨 Perfect for color grading and mood adjustment
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-cyan-500" />
                    Try This Exercise
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Practice with your own photo using these basic techniques. Start with artistic filters, then experiment with style references.
                  </p>
                  <div className="bg-muted p-3 rounded font-mono text-sm">
                    "Transform my portrait using a watercolor artistic filter, keep facial features unchanged"
                  </div>
                </div>
              </section>

              {/* Advanced Methods Section */}
              <section id="advanced-methods" className="bg-card p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <Layers className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Advanced Style Transfer Methods
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Once you've mastered the basics, these advanced techniques will take your creative editing to the next level.
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-lg border-l-4 border-violet-500">
                    <h3 className="text-xl font-semibold mb-3">Selective Style Transfer</h3>
                    <p className="text-muted-foreground mb-4">
                      Apply style transfer to specific elements of your image while preserving others exactly as they are.
                    </p>
                    
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                        "Apply a cinematic style to the background only, keep the person exactly the same"
                      </div>
                      <p className="text-sm text-muted-foreground">
                        This technique requires precise prompting to isolate elements for style application.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Element Isolation</h4>
                        <p className="text-sm text-muted-foreground">
                          Identify and specify which elements should receive the style transfer.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Preservation Instructions</h4>
                        <p className="text-sm text-muted-foreground">
                          Clearly define what should remain unchanged in your prompt.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
                    <h3 className="text-xl font-semibold mb-3">Multi-Style Blending</h3>
                    <p className="text-muted-foreground mb-4">
                      Combine multiple artistic styles or visual references in a single transformation for unique results.
                    </p>
                    
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                        "Blend the color palette of a sunset photo with the texture of an oil painting, apply to the landscape only"
                      </div>
                      <p className="text-sm text-muted-foreground">
                        This advanced technique requires careful balance between multiple style references.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Style Weighting</h4>
                        <p className="text-sm text-muted-foreground">
                          Control the influence of each style reference in your blend.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Reference Quality</h4>
                        <p className="text-sm text-muted-foreground">
                          Use high-quality references with distinct characteristics for best blending.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold mb-2">Iterative Refinement</h4>
                        <p className="text-sm text-muted-foreground">
                          Refine your style blends through multiple iterations, adjusting the balance between styles for optimal results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Artistic Filters Section */}
              <section id="artistic-filters" className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Applying Artistic Filters
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Nano Banana offers a wide range of pre-built artistic filters that can instantly transform your images into various artistic styles.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h3 className="font-semibold text-red-800 mb-3">❌ Avoid These Prompts</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <code className="text-sm text-red-600">"Make it look artistic"</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Too vague - AI doesn't know which artistic style you want
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <code className="text-sm text-red-600">"Apply some filter"</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Too generic - doesn't specify which filter or style
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <code className="text-sm text-red-600">"Make it like a painting"</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Unclear - which painting style? Oil, watercolor, impressionist?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                    <h3 className="font-semibold text-green-800 mb-3">✅ Use These Instead</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <code className="text-sm text-green-600">
                          "Transform this portrait into a Van Gogh-style painting with bold brushstrokes and vibrant colors, maintain facial features exactly"
                        </code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Specific artistic style with clear preservation instructions
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <code className="text-sm text-green-600">
                          "Apply a watercolor effect with soft edges and pastel colors, keep the subject's expression unchanged"
                        </code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Detailed style description with preservation note
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <code className="text-sm text-green-600">
                          "Convert to black and white with high contrast and film grain texture, preserve all details"
                        </code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Specific monochrome style with quality preservation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Popular Artistic Filters</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Impressionist</h4>
                      <p className="text-sm text-muted-foreground">
                        Soft brushstrokes, vibrant colors, light and shadow play
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Oil Painting</h4>
                      <p className="text-sm text-muted-foreground">
                        Rich textures, deep colors, visible brush marks
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Watercolor</h4>
                      <p className="text-sm text-muted-foreground">
                        Soft edges, translucent layers, flowing colors
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Sketch</h4>
                      <p className="text-sm text-muted-foreground">
                        Line art, pencil strokes, monochromatic
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Pop Art</h4>
                      <p className="text-sm text-muted-foreground">
                        Bold colors, high contrast, comic book style
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Pixel Art</h4>
                      <p className="text-sm text-muted-foreground">
                        Retro gaming style, limited color palette, blocky pixels
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Professional Effects Section */}
              <section id="professional-effects" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <Wand2 className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Professional Visual Effects
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600">1</span>
                        </div>
                        Cinematic Effects
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Apply Hollywood-style lighting, color grading, and atmospheric effects to your images.
                      </p>
                      <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-700">
                        Examples: Bokeh, lens flares, film grain, color grading
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-green-600">2</span>
                        </div>
                        Lighting Effects
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Add or modify lighting conditions to create specific moods and atmospheres.
                      </p>
                      <div className="mt-2 p-2 bg-green-50 rounded text-xs text-green-700">
                        Examples: Golden hour, dramatic shadows, neon glow, studio lighting
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-purple-600">3</span>
                        </div>
                        Texture Overlays
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Apply surface textures to add depth and tactile qualities to your images.
                      </p>
                      <div className="mt-2 p-2 bg-purple-50 rounded text-xs text-purple-700">
                        Examples: Fabric, metal, wood, stone, weathering effects
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-orange-600">4</span>
                        </div>
                        Atmospheric Effects
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Create environmental conditions that enhance the mood and storytelling of your image.
                      </p>
                      <div className="mt-2 p-2 bg-orange-50 rounded text-xs text-orange-700">
                        Examples: Fog, rain, snow, dust, underwater, dreamy haze
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-red-600">5</span>
                        </div>
                        Color Grading
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Apply professional color schemes to achieve specific visual aesthetics and emotional tones.
                      </p>
                      <div className="mt-2 p-2 bg-red-50 rounded text-xs text-red-700">
                        Examples: Teal and orange, vintage film, monochrome, high contrast
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-cyan-600">6</span>
                        </div>
                        Special Effects
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Add fantastical or stylized elements that go beyond realistic photography.
                      </p>
                      <div className="mt-2 p-2 bg-cyan-50 rounded text-xs text-cyan-700">
                        Examples: Glowing edges, particle effects, surreal distortions, magic elements
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Best Practices Section */}
              <section id="best-practices" className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
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
                        Choose High-Quality References
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Use clear, high-resolution images as style references. The AI can only transfer what's clearly visible in the reference.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-green-600">2</span>
                        </div>
                        Be Specific with Prompts
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Clearly describe both what you want to change and what you want to preserve. Include details about style, colors, and textures.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-purple-600">3</span>
                        </div>
                        Start with Subtle Changes
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Begin with subtle style transfers and gradually increase intensity. This gives you more control and better results.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-orange-600">4</span>
                        </div>
                        Use Multi-Turn Editing
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Refine your results with follow-up prompts. First apply the base style, then fine-tune specific elements.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-red-600">5</span>
                        </div>
                        Save Intermediate Results
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Download versions at each step of your editing process. This gives you fallback options if later changes don't work.
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
                        Try combining different artistic styles, effects, and techniques to create unique visual results.
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
                    <h3 className="font-semibold text-red-700 mb-3">🚫 Mistake #1: Using Low-Quality References</h3>
                    <p className="text-muted-foreground mb-3">
                      Poor quality or blurry style references result in unclear or muddy transfers that don't achieve the desired artistic effect.
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Always use high-resolution, clear images as style references. The AI can only transfer what's clearly visible in the reference.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold text-red-700 mb-3">🚫 Mistake #2: Not Specifying Preservation</h3>
                    <p className="text-muted-foreground mb-3">
                      Forgetting to specify what should remain unchanged often results in unwanted alterations to important elements like facial features or key details.
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Always include preservation instructions: "keep facial features exactly the same" or "maintain all important details."
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold text-red-700 mb-3">🚫 Mistake #3: Over-Processing Images</h3>
                    <p className="text-muted-foreground mb-3">
                      Applying too many style transfers or effects in a single edit can result in loss of image quality and unnatural-looking results.
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Make gradual changes using multi-turn editing. Apply one style or effect at a time and review results before proceeding.
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
                    Your Creative Journey Continues
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Congratulations! You've mastered the fundamentals of style transfer with Nano Banana AI. Here's your roadmap to becoming a creative editing pro.
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
                      <CardTitle className="text-lg">Building Cinematic Universes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Discover how to create cohesive visual worlds and storytelling environments using advanced AI techniques.
                      </p>
                      <Link href="/tutorials/building-cinematic-universes">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Create Worlds
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
                      <strong>Basic:</strong> Apply 5 different artistic filters to the same portrait
                    </li>
                    <li>
                      <strong>Intermediate:</strong> Create a style blend using 2-3 different references
                    </li>
                    <li>
                      <strong>Advanced:</strong> Develop a consistent visual style across a series of related images
                    </li>
                  </ol>
                </div>
              </section>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t">
              <Link href="/tutorials">
                <Button variant="outline" className="flex items-center gap-2 bg-transparent" aria-label="Previous tutorial">
                  <ChevronLeft className="h-4 w-4" />
                  All Tutorials
                </Button>
              </Link>
              <Link href="/tutorials/character-consistency">
                <Button className="flex items-center gap-2" aria-label="Next tutorial">
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
                      <AvatarFallback className="bg-blue-100 text-blue-600">AR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">Alex Rivera</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="h-3 w-3 fill-current text-yellow-500" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">5 days ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        This tutorial completely changed how I approach creative editing! The section on selective style transfer was particularly eye-opening. I've been able to maintain character consistency while applying dramatic artistic effects that would have been impossible with other tools.
                      </p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          32
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-green-100 text-green-600">MJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">Maya Johnson</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="h-3 w-3 fill-current text-yellow-500" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">1 week ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        The professional effects section is pure gold! I run a small photography business and these techniques have elevated my client work significantly. The cinematic effects examples gave me concrete ideas I could implement immediately.
                      </p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          28
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
                    <span className="text-sm font-medium">Feb 15, 2024</span>
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