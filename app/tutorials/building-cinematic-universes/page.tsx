import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Sparkles,
  Film,
  Eye,
  Share2,
  Bookmark,
  Clock,
  Star,
  ChevronRight,
  ImageIcon,
  Users,
  Layers,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { SchemaOrg, BreadcrumbSchema } from "@/components/seo-schema"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Building Cinematic Universes with Nano Banana AI | Nano Banana Fans",
  description:
    "Create cohesive visual narratives by transforming single images into complete cinematic scenes and environments. Learn how to master cinematic storytelling with Nano Banana AI.",
  keywords:
    "Nano Banana cinematic, visual storytelling, AI image editing, cinematic universe, scene creation, environment design, Google AI, tutorial",
  openGraph: {
    title: "Building Cinematic Universes with Nano Banana AI",
    description:
      "Create cohesive visual narratives by transforming single images into complete cinematic scenes and environments. Learn how to master cinematic storytelling with Nano Banana AI.",
    type: "article",
    publishedTime: "2025-09-02T00:00:00.000Z",
    modifiedTime: "2025-09-02T00:00:00.000Z",
    authors: ["Nano Banana Team"],
    tags: ["Cinematic", "Storytelling", "Scene Creation", "Environment Design", "AI Image Editing"],
    images: [
      {
        url: "/ai-neural-network-visualization-modern-tech.png",
        width: 1200,
        height: 630,
        alt: "Building Cinematic Universes with Nano Banana AI Tutorial Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Cinematic Universes with Nano Banana AI",
    description:
      "Create cohesive visual narratives by transforming single images into complete cinematic scenes and environments. Learn how to master cinematic storytelling with Nano Banana AI.",
    images: ["/ai-neural-network-visualization-modern-tech.png"],
  },
}

const tutorialData = {
  id: "building-cinematic-universes",
  title: "Building Cinematic Universes",
  description:
    "Create cohesive visual narratives by transforming single images into complete cinematic scenes and environments. Discover how Nano Banana AI empowers you to craft immersive worlds and cinematic stories from a single frame.",
  author: {
    name: "Nano Banana Team",
    avatar: "/placeholder-logo.png",
    bio: "AI Visual Storytelling Experts",
    followers: "21.4k",
    expertise: "Cinematic Design, AI Art, Storytelling",
  },
  category: "Cinematic",
  difficulty: "intermediate",
  readTime: "16 min",
  rating: 4.9,
  ratingCount: 412,
  views: "31.2k",
  publishedAt: "2025-09-02",
  updatedAt: "2025-09-02",
  tags: ["Cinematic", "Storytelling", "Scene Creation", "Environment Design", "AI Image Editing"],
}

export default function BuildingCinematicUniversesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="tutorial"
        data={{
          title: tutorialData.title,
          description: tutorialData.description,
          url: "https://nanobanana.fans/tutorials/building-cinematic-universes",
          image: "/ai-neural-network-visualization-modern-tech.png",
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
          { name: tutorialData.title, url: "https://nanobanana.fans/tutorials/building-cinematic-universes" },
        ]}
      />

      <Header currentPath="/tutorials/building-cinematic-universes" />

      {/* Hero Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 overflow-hidden">
        <Image
          src="/ai-neural-network-visualization-modern-tech.png"
          alt="Building Cinematic Universes with Nano Banana AI Tutorial Cover"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="mb-2 bg-primary/90 text-primary-foreground">
            <Film className="h-3 w-3 mr-1" />
            Cinematic Tutorial
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
            <span className="text-foreground">{tutorialData.title}</span>
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
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  <Layers className="h-3 w-3 mr-1" />
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
                      src={tutorialData.author.avatar || "/placeholder-logo.png"}
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
              <section id="introduction" className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Film className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    Building Cinematic Universes
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Cinematic universes are more than just a collection of images—they are immersive worlds that tell a story. With Nano Banana AI, you can transform a single image into a complete scene, environment, or even an entire narrative sequence.
                </p>
                <ul className="list-disc pl-6 text-base mb-4">
                  <li>Turn static images into dynamic, story-driven visuals</li>
                  <li>Design environments that evoke emotion and context</li>
                  <li>Connect scenes for seamless visual storytelling</li>
                </ul>
                <Image
                  src="/tutorials/nano-banana-before-after-1.png"
                  alt="Cinematic scene transformation with Nano Banana AI"
                  width={800}
                  height={400}
                  className="rounded-lg border shadow-md mx-auto"
                />
              </section>

              {/* How to Create Cinematic Scenes */}
              <section id="how-to" className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    How to Create Cohesive Cinematic Scenes
                  </h2>
                </div>
                <ol className="list-decimal pl-6 text-base space-y-2">
                  <li>
                    <strong>Start with a Strong Visual Concept:</strong> Choose an image that inspires a story or mood. Think about the environment, characters, and atmosphere you want to convey.
                  </li>
                  <li>
                    <strong>Expand the Scene:</strong> Use Nano Banana AI to add background elements, lighting effects, and environmental details that support your narrative.
                  </li>
                  <li>
                    <strong>Connect Multiple Scenes:</strong> Create a sequence by editing several images with consistent style, color grading, and thematic elements.
                  </li>
                  <li>
                    <strong>Refine for Consistency:</strong> Ensure that each scene feels part of a larger universe by maintaining visual motifs and storytelling cues.
                  </li>
                </ol>
                <Image
                  src="/tutorials/nano-banana-multi-turn-example.png"
                  alt="Multi-scene cinematic editing with Nano Banana AI"
                  width={800}
                  height={400}
                  className="rounded-lg border shadow-md mx-auto mt-6"
                />
              </section>

              {/* SEO-Optimized Tips Section */}
              <section id="seo-tips" className="bg-gradient-to-br from-cyan-50 to-purple-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <ImageIcon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    SEO Tips for Cinematic Image Editing
                  </h2>
                </div>
                <ul className="list-disc pl-6 text-base mb-4">
                  <li>Use descriptive alt text for all images (e.g., "Cinematic scene transformation with Nano Banana AI")</li>
                  <li>Include relevant keywords in headings and throughout your content</li>
                  <li>Structure your article with clear sections and subheadings</li>
                  <li>Link to related tutorials and resources for deeper learning</li>
                </ul>
              </section>

              {/* Call to Action Section */}
              <section id="cta" className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl border text-center">
                <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                  Ready to Build Your Own Cinematic Universe?
                </h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Start transforming your images into cinematic masterpieces with Nano Banana AI. Explore more tutorials and join our creative community!
                </p>
                <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                  <Link href="/tutorials" title="Start learning cinematic image editing with Nano Banana AI">
                    Explore More Tutorials
                  </Link>
                </Button>
              </section>
            </div>
          </main>

          {/* Sidebar (optional, can add related tutorials or resources) */}
          <aside className="w-full lg:w-80 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Related Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/tutorials/character-consistency" className="text-primary hover:underline">
                      Character Consistency Mastery
                    </Link>
                  </li>
                  <li>
                    <Link href="/tutorials/multi-turn-editing" className="text-primary hover:underline">
                      Multi-Turn Editing Techniques
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}
