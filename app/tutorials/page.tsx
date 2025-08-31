import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Clock, Filter, BookOpen, Users, ImageIcon, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SchemaOrg } from "@/components/seo-schema"

export const metadata: Metadata = {
  title: "Nano Banana Tutorials - Complete Learning Library | AI Image Editing Guides",
  description:
    "Browse our comprehensive collection of Nano Banana AI tutorials. From beginner guides to advanced techniques, master Google's revolutionary image editing technology.",
  keywords:
    "Nano Banana tutorials, AI image editing guides, Google Gemini tutorials, character consistency, multi-turn editing, image generation tutorials",
  openGraph: {
    title: "Nano Banana Tutorials - Complete Learning Library",
    description:
      "Browse our comprehensive collection of Nano Banana AI tutorials and master Google's revolutionary image editing technology.",
    type: "website",
  },
}

const tutorialCategories = [
  { id: "all", name: "All Tutorials", count: 24 },
  { id: "beginner", name: "Beginner", count: 8 },
  { id: "intermediate", name: "Intermediate", count: 10 },
  { id: "advanced", name: "Advanced", count: 6 },
  { id: "character-consistency", name: "Character Consistency", count: 5 },
  { id: "multi-turn-editing", name: "Multi-turn Editing", count: 4 },
  { id: "api-integration", name: "API Integration", count: 3 },
]

const featuredTutorials = [
  {
    id: 1,
    title: "Getting Started with Nano Banana AI",
    description:
      "Complete beginner's guide to Google's revolutionary AI image editing tool. Learn setup, basic concepts, and your first edits.",
    category: "Beginner",
    readTime: "15 min",
    rating: 4.9,
    views: "12.5k",
    difficulty: "beginner",
    tags: ["Setup", "Basics", "First Steps"],
    featured: true,
    cover: "/Google-Nano-Banana-AI-Image-Generator-All-You-Need-To-Know.jpg",
    link: "/tutorials/getting-started",
  },
  {
    id: 2,
    title: "Character Consistency Mastery",
    description:
      "Master the art of maintaining character likeness across multiple edits and transformations with advanced techniques.",
    category: "Intermediate",
    readTime: "25 min",
    rating: 4.8,
    views: "8.2k",
    difficulty: "intermediate",
    tags: ["Character", "Consistency", "Advanced"],
    featured: true,
    cover: "/new-tutorial-master-consistent-character-faces-with-nanobanana.webp",
    link: "/tutorials/character-consistency",
  },
  {
    id: 3,
    title: "Multi-Turn Editing Techniques",
    description:
      "Advanced strategies for complex multi-step edits while preserving image quality and maintaining consistency.",
    category: "Advanced",
    readTime: "35 min",
    rating: 4.7,
    views: "6.1k",
    difficulty: "advanced",
    tags: ["Multi-turn", "Complex", "Quality"],
    featured: false,
  },
  {
    id: 4,
    title: "Building Cinematic Universes",
    description:
      "Create cohesive visual narratives by transforming single images into complete cinematic scenes and environments.",
    category: "Advanced",
    readTime: "40 min",
    rating: 4.9,
    views: "5.8k",
    difficulty: "advanced",
    tags: ["Cinematic", "Scenes", "Creative"],
    featured: false,
  },
  {
    id: 5,
    title: "Product Photography with AI",
    description:
      "Transform ordinary product shots into professional marketing materials using Nano Banana's advanced editing capabilities.",
    category: "Intermediate",
    readTime: "20 min",
    rating: 4.6,
    views: "9.3k",
    difficulty: "intermediate",
    tags: ["Product", "Photography", "Marketing"],
    featured: false,
  },
  {
    id: 6,
    title: "API Integration Guide",
    description:
      "Learn how to integrate Nano Banana into your applications using Google AI Studio and Vertex AI platforms.",
    category: "Advanced",
    readTime: "45 min",
    rating: 4.8,
    views: "4.2k",
    difficulty: "advanced",
    tags: ["API", "Integration", "Development"],
    featured: false,
  },
  {
    id: 7,
    title: "Style Transfer Techniques",
    description:
      "Apply artistic styles and textures from one image to another while maintaining subject integrity and quality.",
    category: "Intermediate",
    readTime: "30 min",
    rating: 4.7,
    views: "7.1k",
    difficulty: "intermediate",
    tags: ["Style", "Transfer", "Artistic"],
    featured: false,
  },
  {
    id: 8,
    title: "Historical Photo Restoration",
    description:
      "Breathe new life into old photographs with colorization, repair, and enhancement techniques using AI.",
    category: "Intermediate",
    readTime: "28 min",
    rating: 4.8,
    views: "6.9k",
    difficulty: "intermediate",
    tags: ["Restoration", "Historical", "Colorization"],
    featured: false,
  },
]

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="website"
        data={{
          title: "Nano Banana Tutorials - Complete Learning Library",
          description:
            "Browse our comprehensive collection of Nano Banana AI tutorials. From beginner guides to advanced techniques.",
          url: "https://nanobanana.fans/tutorials",
          keywords: ["Nano Banana tutorials", "AI image editing guides", "Google Gemini tutorials"],
        }}
      />

      <Header currentPath="/tutorials" />

      {/* Page Header */}
      <section className="py-12 px-4 bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Nano Banana Tutorials
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Master Google's revolutionary AI image editing technology with our comprehensive collection of tutorials,
              from beginner basics to advanced professional techniques.
            </p>

            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search tutorials, techniques, or topics..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {tutorialCategories.map((category) => (
                    <button
                      key={category.id}
                      className={`w-full flex items-center justify-between p-2 rounded-lg text-left hover:bg-accent transition-colors ${
                        category.id === "all" ? "bg-accent text-accent-foreground" : ""
                      }`}
                    >
                      <span className="text-sm font-medium">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">24</div>
                      <div className="text-sm text-muted-foreground">Total Tutorials</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold">15.2k</div>
                      <div className="text-sm text-muted-foreground">Active Learners</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">4.8</div>
                      <div className="text-sm text-muted-foreground">Avg Rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Featured Tutorials */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">Featured Tutorials</h2>
                <Badge variant="secondary">Editor's Choice</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {featuredTutorials
                  .filter((t) => t.featured)
                  .map((tutorial) => (
                    <Card key={tutorial.id} className="group hover:shadow-lg transition-all duration-300">
                      <Link href={tutorial.link || '#'}>
                        <div className="aspect-video rounded-t-lg overflow-hidden relative">
                          <img src={tutorial.cover || "/placeholder.jpg"} alt={tutorial.title} className="w-full h-full object-cover" />
                          <Badge className="absolute top-3 left-3">Featured</Badge>
                        </div>
                      </Link>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant={
                              tutorial.difficulty === "beginner"
                                ? "secondary"
                                : tutorial.difficulty === "intermediate"
                                  ? "outline"
                                  : "default"
                            }
                          >
                            {tutorial.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                            {tutorial.rating}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {tutorial.readTime}
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                          <Link href={tutorial.link || '#'}>{tutorial.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-2">{tutorial.description}</CardDescription>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {tutorial.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{tutorial.views} views</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                            asChild
                          >
                            <Link href={tutorial.link || '#'}>
                              Read Tutorial
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* All Tutorials */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">All Tutorials</h2>
                <div className="text-sm text-muted-foreground">
                  Showing {featuredTutorials.length} of {featuredTutorials.length} tutorials
                </div>
              </div>

              <div className="grid gap-6">
                {featuredTutorials.map((tutorial) => (
                  <Card key={tutorial.id} className="group hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-48 aspect-video md:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <ImageIcon className="h-12 w-12 text-primary/40" />
                      </div>
                      <div className="flex-1">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant={
                                tutorial.difficulty === "beginner"
                                  ? "secondary"
                                  : tutorial.difficulty === "intermediate"
                                    ? "outline"
                                    : "default"
                              }
                            >
                              {tutorial.category}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                              {tutorial.rating}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              {tutorial.readTime}
                            </div>
                            {tutorial.featured && <Badge variant="secondary">Featured</Badge>}
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors">{tutorial.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="mb-4">{tutorial.description}</CardDescription>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {tutorial.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{tutorial.views} views</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                            >
                              Read Tutorial
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Tutorials
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Never Miss a Tutorial
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get notified when we publish new Nano Banana tutorials and techniques. Join our community of AI image
            editing enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl text-primary font-[family-name:var(--font-space-grotesk)]">
                  Nano Banana
                </span>
              </Link>
              <p className="text-muted-foreground mb-4">
                The ultimate resource for mastering Google's Nano Banana AI image editing technology.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm">
                  YouTube
                </Button>
                <Button variant="ghost" size="sm">
                  Discord
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Tutorials</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Character Consistency
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Advanced Techniques
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    API Integration
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">Get the latest tutorials and Nano Banana updates.</p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2024 Nano Banana Tutorial Platform. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
