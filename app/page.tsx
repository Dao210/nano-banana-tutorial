import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Users, BookOpen, Zap, ImageIcon, Palette, Sparkles, ArrowRight, Twitter } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { SchemaOrg } from "@/components/seo-schema"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="website"
        data={{
          title: "Nano Banana - AI Image Editing Tutorials & Guides",
          description:
            "Master Google's Nano Banana AI image editing with comprehensive tutorials, step-by-step guides, and expert tips.",
          url: "https://nanobanana.fans/",
          image: "https://nanobanana.fans/og-image.jpg",
          keywords: ["Nano Banana", "Google AI", "image editing", "AI tutorials", "character consistency"],
        }}
      />

      <Header currentPath="/" />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Google's Latest AI Innovation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 font-[family-name:var(--font-space-grotesk)]">
              Master <span className="text-primary">Nano Banana</span> AI Image Editing
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Learn Google's revolutionary Nano Banana AI with comprehensive tutorials, step-by-step guides, and expert
              techniques. From character consistency to advanced multi-turn editing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link
                  href="/prompts"
                  title="Browse comprehensive Nano Banana AI image editing prompts"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Prompts
                </Link>
              </Button>
              <Button size="lg" className="text-lg px-8" asChild>
                <Link
                  href="/tutorials"
                  title="Browse comprehensive Nano Banana AI image editing tutorials"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Tutorials
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/community" title="Join the Nano Banana AI image editing community">
                  <Users className="mr-2 h-5 w-5" />
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Why Choose Our Platform?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The most comprehensive resource for mastering Google's Nano Banana AI image editing technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expert Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Step-by-step guides from beginner basics to advanced techniques, all created by AI experts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Real Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Practical examples with before/after comparisons and detailed explanations of each editing process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Latest Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stay current with the latest Nano Banana features, updates, and best practices as they're released.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prompt Library (New) */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Prompt Library
              </h2>
              <p className="text-muted-foreground">Curated prompt templates for faster, better AI results</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/prompts" title="Browse all AI prompt templates">Browse Prompts</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Clean White Packshot</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Studio-style product shot on pure white with soft ground shadow and crisp edges.
                </CardDescription>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-muted-foreground">E‑commerce</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/prompts" title="Open Prompt Library">
                      Explore<ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Lifestyle Kitchen Scene</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Warm daylight from right, shallow depth, subtle tabletop reflection for realism.
                </CardDescription>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-muted-foreground">Lifestyle</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/prompts" title="Open Prompt Library">
                      Explore<ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Shadow‑Rich Editorial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dramatic, directional shadows with gradient charcoal background and texture emphasis.
                </CardDescription>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-muted-foreground">Editorial</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/prompts" title="Open Prompt Library">
                      Explore<ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Featured Tutorials
              </h2>
              <p className="text-muted-foreground">Start your Nano Banana journey with these popular guides</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/tutorials" title="View all Nano Banana AI tutorials">View All Tutorials</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video rounded-t-lg overflow-hidden relative">
                <img
                  src="/Google-Nano-Banana-AI-Image-Generator-All-You-Need-To-Know.jpg"
                  alt="Getting Started with Nano Banana"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Beginner</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                    4.9
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Getting Started with Nano Banana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn the basics of Google's Nano Banana AI, from setup to your first image edit. Perfect for complete
                  beginners.
                </CardDescription>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-muted-foreground">15 min read</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      href="/tutorials/getting-started"
                      title="Getting started guide for Nano Banana AI image editing"
                    >
                      Getting Started with AI banana<ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-t-lg flex items-center justify-center">
                <img
                  src="/new-tutorial-master-consistent-character-faces-with-nanobanana.webp"
                  alt="Getting Started with Nano Banana"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Intermediate</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                    4.8
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Character Consistency Mastery with Nano Banana AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Master the art of maintaining character likeness across multiple edits and transformations.
                </CardDescription>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-muted-foreground">25 min read</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      href="/tutorials/character-consistency"
                      title="Tutorial on mastering character consistency with Nano Banana AI"
                    >
                      Character Consistency Mastery<ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg flex items-center justify-center">
                <img
                  src="/Multi-Turn Editing.avif"
                  alt=" Multi-Turn Editing Techniques"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge>Advanced</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                    4.7
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Multi-Turn Editing Techniques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced strategies for complex multi-step edits while preserving image quality and consistency.
                </CardDescription>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-muted-foreground">35 min read</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      href="/tutorials/multi-turn-editing"
                      title="Advanced multi-turn editing techniques for Nano Banana AI"
                    >
                      Multi-Turn Editing Techniques<ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Ready to Master Nano Banana?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of creators who are already using Nano Banana to transform their image editing workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/tutorials" title="Start learning Nano Banana AI image editing now">Start Learning Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/tutorials" title="Browse all Nano Banana AI image editing tutorials">Browse All Tutorials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 flex items-center justify-center">
                  <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
                </div>
                <span className="font-bold text-xl text-primary font-[family-name:var(--font-space-grotesk)]">
                  Nano Banana
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                The ultimate resource for mastering Google's Nano Banana AI image editing technology.
              </p>
              <div className="flex space-x-4">
                <Link href="https://twitter.com/Joe84742708" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href="https://drchecker.net/item/www.nanobanana.fans"
                  target="_blank" rel="noopener noreferrer">
                  <img src="https://drchecker.net/api/badge?domain=www.nanobanana.fans"
                    alt="Monitor your Domain Rating with DRChecker "
                    className="h-8" />
                </Link>


                <Button variant="ghost" size="sm">
                  Discord
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Tutorials</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/tutorials/getting-started"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI getting started tutorial"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorials/character-consistency"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI character consistency tutorial"
                  >
                    Character Consistency
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorials/advanced-techniques"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI advanced techniques tutorial"
                  >
                    Advanced Techniques
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorials/api-integration"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI API integration tutorial"
                  >
                    API Integration
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI documentation"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/examples"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI image editing examples"
                  >
                    Examples
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI user community"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI support resources"
                  >
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
            <p className="text-sm text-muted-foreground">© 2025 Nano Banana Fans. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                title="Nano Banana privacy policy"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                title="Nano Banana terms of service"
              >
                Terms of Service
              </Link>
              <Link
                href="mailto:idealtop@outlook.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                title="Email Nano Banana team"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
