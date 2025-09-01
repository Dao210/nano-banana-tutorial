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
  title: "Multi-Turn Editing Techniques | Nano Banana AI Tutorial",
  description:
    "Master multi-turn editing in Nano Banana AI. Learn advanced strategies for iterative image refinement, maintaining quality and consistency across complex edits.",
  keywords:
    "Nano Banana, multi-turn editing, AI image editing, iterative refinement, tutorial, advanced techniques, Google Gemini, image quality, consistency",
  openGraph: {
    title: "Multi-Turn Editing Techniques | Nano Banana AI Tutorial",
    description:
      "Master multi-turn editing in Nano Banana AI. Learn advanced strategies for iterative image refinement, maintaining quality and consistency across complex edits.",
    type: "article",
    url: "https://nanobanana.fans/tutorials/multi-turn-editing",
    images: [
      {
        url: "/multi-turn-editing-nano-banana.jpg",
        width: 1200,
        height: 630,
        alt: "Nano Banana Multi-Turn Editing Techniques Tutorial",
      },
    ],
  },
}

export default function MultiTurnEditingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="article"
        data={{
          headline: "Multi-Turn Editing Techniques | Nano Banana AI Tutorial",
          description:
            "Master multi-turn editing in Nano Banana AI. Learn advanced strategies for iterative image refinement, maintaining quality and consistency across complex edits.",
          url: "https://nanobanana.fans/tutorials/multi-turn-editing",
          image: "/multi-turn-editing-nano-banana.jpg",
          keywords: [
            "Nano Banana",
            "multi-turn editing",
            "AI image editing",
            "iterative refinement",
            "tutorial",
            "advanced techniques",
            "Google Gemini",
            "image quality",
            "consistency",
          ],
        }}
      />

      <Header currentPath="/tutorials/multi-turn-editing" />

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
            <Badge variant="outline">Advanced</Badge>
            <Badge variant="secondary">Multi-Turn Editing</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Multi-Turn Editing Techniques
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Unlock the full power of Nano Banana AI with multi-turn editing. This guide reveals expert strategies for iterative image refinement, enabling you to achieve complex transformations while preserving quality and consistency.
          </p>
          <img
            src="/multi-turn-editing-nano-banana.jpg"
            alt="Nano Banana Multi-Turn Editing Example"
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
            <Star className="h-4 w-4 text-yellow-500" /> 4.7
          </Badge>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Clock className="h-4 w-4" /> 22 min read
          </span>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Eye className="h-4 w-4" /> 12.1k views
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
        {/* What is Multi-Turn Editing */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>What is Multi-Turn Editing?</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Multi-turn editing is the process of refining an image through a series of iterative changes, rather than a single transformation. Nano Banana’s advanced workflow allows you to make precise adjustments step-by-step, ensuring each edit builds upon the last for optimal results.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Step-by-Step Guide */}
        <h2 className="text-2xl font-bold mb-4 mt-8">Step-by-Step Workflow</h2>
        <ol className="list-decimal pl-6 mb-8 space-y-4 text-lg">
          <li>
            <strong>Define Your Goal:</strong> Clearly outline the desired outcome for your image. Whether it’s style change, object addition, or character transformation, a clear goal guides each edit.
          </li>
          <li>
            <strong>Start with a Strong Base:</strong> Use a high-quality reference image as your foundation. This ensures each subsequent edit maintains clarity and detail.
          </li>
          <li>
            <strong>Apply Incremental Edits:</strong> Make one change at a time—adjust color, add elements, or refine features. Avoid drastic transformations in a single step.
          </li>
          <li>
            <strong>Review and Compare:</strong> After each edit, compare the result to your goal and previous versions. Use Nano Banana’s comparison tools to spot subtle changes.
          </li>
          <li>
            <strong>Iterate and Refine:</strong> Continue editing in small steps, saving intermediate results. This iterative process ensures quality and consistency throughout.
          </li>
        </ol>

        {/* Pro Tips */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Pro Tips for Multi-Turn Editing</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>Use Nano Banana’s “Edit History” to revert or branch edits for creative exploration.</li>
              <li>Tag key versions for easy reference and comparison.</li>
              <li>Collaborate with peers in the <Link href="/community" className="text-primary underline">Nano Banana Community</Link> for feedback and inspiration.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <h2 className="text-2xl font-bold mb-4 mt-8">Troubleshooting & Best Practices</h2>
        <ul className="list-disc pl-6 mb-8 space-y-3 text-lg">
          <li>
            <strong>Quality Loss:</strong> If image quality degrades, revert to a previous version and apply edits more gradually.
          </li>
          <li>
            <strong>Inconsistent Results:</strong> Ensure each prompt is clear and focused. Avoid conflicting instructions between steps.
          </li>
          <li>
            <strong>Feature Drift:</strong> Regularly compare edits to the original reference to maintain core features and style.
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
              <CardTitle className="text-base">Character Consistency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-3">
                Learn to maintain reliable character likeness across edits and scenes.
              </p>
              <Link href="/tutorials/character-consistency">
                <Button variant="outline" size="sm" className="w-full bg-transparent text-xs">
                  Master Consistency
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
                Discover professional prompt strategies for iterative and creative edits.
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
