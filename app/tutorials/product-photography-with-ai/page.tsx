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
  CheckCircle,
  Sparkles,
  Target,
  Palette,
  Ruler,
  Scan,
  Box,
  Camera,
  SunMedium,
  Scissors,
  ArrowRight,
  AlertTriangle,
  Download,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"
import { SchemaOrg, BreadcrumbSchema } from "@/components/seo-schema"
import { Header } from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Product Photography with AI – Studio-Quality E‑commerce Images | Nano Banana",
  description:
    "Create studio-quality e‑commerce images with Nano Banana. Step‑by‑step workflow for lighting, backgrounds, shadows, color consistency, and export best practices.",
  keywords:
    "Nano Banana, AI product photography, e‑commerce images, background removal, shadows, color consistency, brand imagery, prompt recipes, Google Gemini",
  openGraph: {
    title: "Product Photography with AI – Studio-Quality E‑commerce Images",
    description:
      "End‑to‑end workflow to turn ordinary shots into polished, on‑brand visuals using Nano Banana.",
    type: "article",
    images: [
      {
        url: "/tutorials/Product Photography with AI.jpg",
        width: 1200,
        height: 630,
        alt: "Product Photography with AI tutorial cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Photography with AI – Studio-Quality E‑commerce Images",
    description:
      "End‑to‑end workflow to turn ordinary shots into polished, on‑brand visuals using Nano Banana.",
    images: ["/tutorials/Product Photography with AI.jpg"],
  },
}

const tutorialData = {
  id: "product-photography-with-ai",
  title: "Product Photography with AI",
  description:
    "A practical, production‑ready workflow to transform everyday product shots into studio‑grade visuals using Nano Banana. Includes lighting, backgrounds, realistic shadows/reflections, color/brand consistency, and export guidelines.",
    author: {
      name: "Jane Smith",
      avatar: "/placeholder-user.jpg",
    bio: "AI Content Creator & Product Imaging Specialist",
    followers: "3.4k",
    expertise: "E‑commerce imaging, Visual merchandising",
  },
  category: "Marketing",
  difficulty: "beginner",
  readTime: "14 min",
  rating: 4.8,
  ratingCount: 212,
  views: "9.6k",
  publishedAt: "2024-03-12",
  updatedAt: "2024-11-28",
  tags: [
    "AI Product Photography",
    "Background Replacement",
    "Shadows & Reflections",
    "Color Consistency",
    "E‑commerce Export",
  ],
  tableOfContents: [
    { id: "introduction", title: "Why AI Product Photography?", level: 2 },
    { id: "workflow", title: "Recommended Workflow (Overview)", level: 2 },
    { id: "lighting-backgrounds", title: "Lighting & Backgrounds", level: 2 },
    { id: "shadows-reflections", title: "Realistic Shadows & Reflections", level: 2 },
    { id: "color-brand", title: "Color Consistency & Brand Matching", level: 2 },
    { id: "export", title: "Export for Marketplaces & Web", level: 2 },
    { id: "prompt-recipes", title: "Prompt Recipes (Copy & Paste)", level: 2 },
    { id: "pitfalls", title: "Common Pitfalls (and Fixes)", level: 2 },
  ],
}

export default function ProductPhotographyAI() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="tutorial"
        data={{
          title: tutorialData.title,
          description: tutorialData.description,
          url: "https://nanobanana.fans/tutorials/product-photography-with-ai",
          image: "/tutorials/Product Photography with AI.jpg",
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
          { name: tutorialData.title, url: "https://nanobanana.fans/tutorials/product-photography-with-ai" },
        ]}
      />

      <Header currentPath="/tutorials/product-photography-with-ai" />

      {/* Hero Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-rose-500/20 overflow-hidden">
        <Image
          src="/tutorials/Product Photography with AI.jpg"
          alt="Studio-quality product photography with Nano Banana"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="mb-2 bg-primary/90 text-primary-foreground">
            <Sparkles className="h-3 w-3 mr-1" />
            Practical Workflow
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
            <span className="text-foreground">Product Photography with AI</span>
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
                  <Box className="h-3 w-3 mr-1" />
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
                    <AvatarImage src={tutorialData.author.avatar} alt={tutorialData.author.name} />
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
              {/* Introduction */}
              <section id="introduction" className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Why AI Product Photography?</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  AI lets you produce consistent, on‑brand product images at scale—without a full studio. With Nano Banana, you can replace backgrounds, match lighting, add realistic shadows, and export in marketplace‑ready formats in minutes.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-2">Perfect for E‑commerce</h3>
                    <p className="text-sm text-muted-foreground">Generate clean, white or lifestyle backgrounds that meet Amazon, Shopify, or marketplace guidelines.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-2">Brand‑Ready Output</h3>
                    <p className="text-sm text-muted-foreground">Keep your palette, contrast, and mood consistent across SKUs and campaigns.</p>
                  </div>
                </div>
                <div className="mt-6 bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium text-primary mb-1">Pro Insight</p>
                  <p className="text-sm text-muted-foreground">Small, deliberate changes beat one‑shot drastic edits. Iterate using follow‑ups like “Keep product identical, only adjust background shadows.”</p>
                </div>
              </section>

              {/* Workflow */}
              <section id="workflow" className="bg-card p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Recommended Workflow (Overview)</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">1</div>
                      <CardTitle className="text-lg">Source Image</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Shoot or select a clear, sharp product image with neutral lighting and minimal clutter.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">2</div>
                      <CardTitle className="text-lg">Background & Light</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Replace background, set directionality of light, and align color temperature to your brand.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">3</div>
                      <CardTitle className="text-lg">Shadows & Export</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Add realistic ground shadows/reflections, then export to exact pixel specs.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Lighting & Backgrounds */}
              <section id="lighting-backgrounds" className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <SunMedium className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Lighting & Backgrounds</h2>
                </div>
                <p className="text-muted-foreground mb-6">Guide the model with specific lighting and background instructions.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-2">Prompt Template</h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">"Replace background with clean white (RGB 255,255,255). Left‑side softbox lighting, gentle falloff. Keep product edges crisp and geometry identical."</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-2">Lifestyle Variant</h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">"Place product on light concrete tabletop, daylight from right, subtle shadow under object. Maintain original product proportions exactly."</div>
                  </div>
                </div>
              </section>

              {/* Shadows & Reflections */}
              <section id="shadows-reflections" className="bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Scan className="h-6 w-6 text-white" />
                  </div>
                
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Realistic Shadows & Reflections</h2>
                </div>
                <p className="text-muted-foreground mb-6">Ground the product with contact shadows or soft reflections for realism.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-2">Natural Shadow</h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">"Add soft ground shadow directly beneath the product, blur radius 8–12px look, opacity ~25%. Match light direction from left. Keep product unchanged."</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-2">Subtle Reflection</h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">"Create faint tabletop reflection (10–15% opacity), 1–2cm below product base, gradually fading. Preserve product geometry exactly."</div>
                  </div>
                </div>
              </section>

              {/* Color & Brand */}
              <section id="color-brand" className="bg-card p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Color Consistency & Brand Matching</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-2">Brand Palette</h3>
                    <p className="text-sm text-muted-foreground">Reference hex or Pantone values in prompts to match brand colors and mood.</p>
                    <div className="mt-3 bg-muted p-3 rounded font-mono text-sm">"Match background to #F8FAFC, increase contrast slightly, keep product colorimetry unchanged (no hue shift)."</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-2">Batch Consistency</h3>
                    <p className="text-sm text-muted-foreground">Reuse the same prompt blocks across SKUs and lock lighting direction to keep sets uniform.</p>
                  </div>
                </div>
              </section>

              {/* Export */}
              <section id="export" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Ruler className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Export for Marketplaces & Web</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Amazon‑Friendly</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>2000px on longest side</li>
                        <li>Pure white background</li>
                        <li>Centered, fill ~85% frame</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Shopify/Web</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>Square 2048×2048 PNG or WebP</li>
                        <li>Lossless for detail shots</li>
                        <li>Consistent margins</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Social/Ads</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>1080×1350 (IG portrait)</li>
                        <li>Warm lighting variants</li>
                        <li>Readable negative space</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Prompt Recipes */}
              <section id="prompt-recipes" className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                    <Scissors className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Prompt Recipes (Copy & Paste)</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Clean White Packshot</h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">"Place the product on pure white background (#FFFFFF). Soft, even lighting from front‑left, minimal contrast. Keep product geometry, color, and texture identical. Add soft ground shadow only."</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Lifestyle Scene</h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">"Set the product on a wooden kitchen countertop with morning daylight from right. Warm tone, shallow depth of field. Keep product unchanged, add subtle table reflection."</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Shadow‑Rich Editorial</h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">"Create dramatic, directional shadows from top‑left, gradient charcoal background. Maintain product color accuracy; emphasize texture with gentle contrast curve, no warping."</div>
                  </div>
                </div>
              </section>

              {/* Pitfalls */}
              <section id="pitfalls" className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Common Pitfalls (and Fixes)</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold text-red-700 mb-2">Warped Logos or Labels</h3>
                    <p className="text-sm text-muted-foreground mb-2">If labels warp after heavy edits:</p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400 text-sm">Add: "Keep all typography, logos, and label geometry exactly the same—no distortion or smearing." Make smaller, iterative background changes.</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold text-red-700 mb-2">Incorrect Color Cast</h3>
                    <p className="text-sm text-muted-foreground mb-2">Lighting edits can shift product hue:</p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400 text-sm">Add: "Preserve product colorimetry exactly; do not change hue or saturation. Adjust background/lighting only."</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold text-red-700 mb-2">Floating Look</h3>
                    <p className="text-sm text-muted-foreground mb-2">Missing contact shadows leads to unrealistic results:</p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400 text-sm">Add explicit shadow/reflection instructions and match the light direction and softness to the scene.</div>
                  </div>
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
              <Link href="/tutorials/api-integration">
                <Button className="flex items-center gap-2">
                  API Integration
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
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
                    <span className="text-sm font-medium">Nov 28, 2024</span>
              </div>
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
                    Get the latest Nano Banana tutorials and product imaging tips delivered weekly.
                  </p>
                  <Button variant="secondary" className="w-full">Subscribe Now</Button>
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
