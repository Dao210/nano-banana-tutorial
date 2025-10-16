import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sparkles, Users, ArrowLeft, BookOpen, Star, Clock, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { SchemaOrg } from "@/components/seo-schema"

export const metadata: Metadata = {
  title: "Character Consistency Mastery | Nano Banana AI Tutorial",
  description:
    "Unlock professional character consistency in Nano Banana AI. Learn proven strategies to maintain reliable likeness across edits, boost your visual storytelling, and achieve brand-level results.",
  keywords:
    "Nano Banana, character consistency, AI image editing, Google Gemini, tutorial, likeness, multi-turn editing, visual storytelling, prompt engineering, identity preservation",
  openGraph: {
    title: "Character Consistency Mastery | Nano Banana AI Tutorial",
    description:
      "Unlock professional character consistency in Nano Banana AI. Learn proven strategies to maintain reliable likeness across edits, boost your visual storytelling, and achieve brand-level results.",
    type: "article",
    url: "https://nanobanana.fans/tutorials/character-consistency",
    images: [
      {
        url: "/new-tutorial-master-consistent-character-faces-with-nanobanana.webp",
        width: 1200,
        height: 630,
        alt: "Nano Banana Character Consistency Mastery Tutorial",
      },
    ],
  },
}

export default function CharacterConsistencyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="article"
        data={{
          title: "Character Consistency Mastery | Nano Banana AI Tutorial",
          description:
            "Unlock professional character consistency in Nano Banana AI. Learn proven strategies to maintain reliable likeness across edits, boost your visual storytelling, and achieve brand-level results.",
          url: "https://nanobanana.fans/tutorials/character-consistency",
          image: "/new-tutorial-master-consistent-character-faces-with-nanobanana.webp",
          keywords: [
            "Nano Banana",
            "character consistency",
            "AI image editing",
            "Google Gemini",
            "tutorial",
            "likeness",
            "multi-turn editing",
            "visual storytelling",
            "prompt engineering",
            "identity preservation",
          ],
        }}
      />

      <Header currentPath="/tutorials/character-consistency" />

      {/* Hero Section */}
      <section className="py-12 px-4 bg-card">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/tutorials">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Tutorials
              </Link>
            </Button>
            <Badge variant="outline">Intermediate</Badge>
            <Badge variant="secondary">Character Consistency</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Character Consistency Mastery
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Achieve flawless character likeness across every edit. This guide reveals Nano Banana’s unique approach to identity preservation, empowering you to create consistent, memorable characters for comics, branding, and visual storytelling.
          </p>
          <img
            src="/new-tutorial-master-consistent-character-faces-with-nanobanana.webp"
            alt="Nano Banana Character Consistency Example"
            className="rounded-xl w-full mb-10 object-cover"
          />

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-10">
            <Avatar className="h-14 w-14">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Emily Rodriguez" />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">ER</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-lg">Dr. Emily Rodriguez</div>
              <div className="text-sm text-muted-foreground">AI Research Specialist & Google Developer Expert</div>
              <div className="text-sm text-muted-foreground">18.2k followers • Computer Vision, AI Image Processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & CTA */}
      <section className="container mx-auto max-w-3xl px-4 mb-12">
        <div className="flex flex-wrap gap-6 items-center mb-6">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500" /> 4.8
          </Badge>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Clock className="h-4 w-4" /> 18 min read
          </span>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Eye className="h-4 w-4" /> 18.4k views
          </span>
        </div>
        <div className="flex gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/community">
              <Users className="mr-2 h-5 w-5" />
              Join the Community
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/">
              <Sparkles className="mr-2 h-5 w-5" />
              Home
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto max-w-3xl px-4 pb-16">
        {/* What is Character Consistency */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>What is Character Consistency?</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Character consistency means preserving a character’s unique identity across different edits, scenes, and creative transformations. Nano Banana’s advanced AI ensures your characters remain instantly recognizable, whether you’re building a comic universe, brand mascot, or visual story.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Step-by-Step Guide */}
        <h2 className="text-2xl font-bold mb-4 mt-8">Step-by-Step Guide</h2>
        <ol className="list-decimal pl-6 mb-8 space-y-4 text-lg">
          <li>
            <strong>Start with a Clear Reference:</strong> Upload a high-quality image that captures your character’s defining features. Use Nano Banana’s reference input to anchor the likeness.
          </li>
          <li>
            <strong>Craft Precise Prompts:</strong> Be specific about traits—hair color, facial structure, accessories, and style. The more details you provide, the more consistent your results.
          </li>
          <li>
            <strong>Use Multi-Turn Editing:</strong> Make incremental changes. Nano Banana’s multi-turn workflow lets you refine details while preserving the core identity.
          </li>
          <li>
            <strong>Leverage Style Locking:</strong> Apply style transfer and locking to maintain a consistent artistic direction throughout your edits.
          </li>
          <li>
            <strong>Iterate and Compare:</strong> Save intermediate results, compare outputs, and adjust prompts as needed. Consistency improves with feedback and iteration.
          </li>
        </ol>

        {/* Pro Tips */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Pro Tips for Consistency</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>Tag your character with a unique “Character ID” for persistent identity across sessions.</li>
              <li>Use previous outputs as new references to reinforce likeness.</li>
              <li>Join the <Link href="/community" className="text-primary underline">Nano Banana Community</Link> for feedback and inspiration.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <h2 className="text-2xl font-bold mb-4 mt-8">Troubleshooting Common Issues</h2>
        <ul className="list-disc pl-6 mb-8 space-y-3 text-lg">
          <li>
            <strong>Appearance Drift:</strong> If your character starts to look different, re-anchor with the original reference and clarify prompt details.
          </li>
          <li>
            <strong>Style Inconsistency:</strong> Use style locking or previous outputs as references to maintain a unified look.
          </li>
          <li>
            <strong>Loss of Key Features:</strong> Explicitly mention critical features in your prompt to prevent them from being lost.
          </li>
        </ul>

        {/* Related Tutorials */}
        <h2 className="text-2xl font-bold mb-4 mt-8">Continue Your Learning</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-base">Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-3">
                New to Nano Banana? Start here for setup and your first edits.
              </p>
              <Link href="/tutorials/getting-started">
                <Button variant="outline" size="sm" className="w-full bg-transparent text-xs">
                  Explore Guide
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-base">Multi-Turn Editing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-3">
                Learn advanced techniques for iterative edits while maintaining image quality.
              </p>
              <Link href="/tutorials/multi-turn-editing">
                <Button variant="outline" size="sm" className="w-full bg-transparent text-xs">
                  Explore Techniques
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-base">Prompt Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-3">
                Discover professional prompt strategies for consistent results.
              </p>
              <Link href="/tutorials/prompt-engineering">
                <Button variant="outline" size="sm" className="w-full bg-transparent text-xs">
                  Master Prompts
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/community">
              <Users className="mr-2 h-5 w-5" />
              Join the Community
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/tutorials">
              <BookOpen className="mr-2 h-5 w-5" />
              Back to Tutorials
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/">
              <Sparkles className="mr-2 h-5 w-5" />
              Home
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
