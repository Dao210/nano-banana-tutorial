import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Users, ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SchemaOrg } from "@/components/seo-schema"

export const metadata: Metadata = {
  title: "Character Consistency Mastery | Nano Banana AI Tutorial",
  description:
    "Unlock the secrets of character consistency in Nano Banana AI. Learn expert techniques to maintain reliable likeness across multiple edits and creative transformations.",
  keywords:
    "Nano Banana, character consistency, AI image editing, Google Gemini, tutorial, likeness, multi-turn editing, visual storytelling",
  openGraph: {
    title: "Character Consistency Mastery | Nano Banana AI Tutorial",
    description:
      "Unlock the secrets of character consistency in Nano Banana AI. Learn expert techniques to maintain reliable likeness across multiple edits and creative transformations.",
    type: "article",
    url: "https://nanobanana.fans/tutorials/character-consistency",
  },
}

export default function CharacterConsistencyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="article"
        data={{
          headline: "Character Consistency Mastery | Nano Banana AI Tutorial",
          description: "Unlock the secrets of character consistency in Nano Banana AI. Learn expert techniques to maintain reliable likeness across multiple edits and creative transformations.",
          url: "https://nanobanana.fans/tutorials/character-consistency",
          keywords: [
            "Nano Banana",
            "character consistency",
            "AI image editing",
            "Google Gemini",
            "tutorial",
            "likeness",
            "multi-turn editing",
            "visual storytelling",
          ],
        }}
      />

      <Header currentPath="/tutorials/character-consistency" />

      {/* Page Header */}
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
            Discover how to maintain reliable character likeness across multiple AI-generated images. 
            This guide reveals proven strategies for consistent identity, empowering your visual storytelling and creative projects with Nano Banana.
          </p>
          <img
            src="/character-consistency-nano-banana.jpg"
            alt="Nano Banana Character Consistency Example"
            className="rounded-xl w-full mb-10 object-cover"
          />

          <Card className="mb-10">
            <CardHeader>
              <CardTitle>What is Character Consistency?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Character consistency is the art of preserving a character’s unique identity across different edits, scenes, and creative transformations. 
                With Nano Banana AI, you can ensure your characters remain instantly recognizable, whether you’re building a comic universe, brand mascot, or a visual story.
              </CardDescription>
            </CardContent>
          </Card>

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

          <Card className="mb-10">
            <CardHeader>
              <CardTitle>Expert Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Tag your character with a unique “Character ID” for persistent identity across sessions.</li>
                <li>Use previous outputs as new references to reinforce likeness.</li>
                <li>Join the <Link href="/community" className="text-primary underline">Nano Banana Community</Link> for feedback and inspiration.</li>
              </ul>
            </CardContent>
          </Card>

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

          <Card className="mb-10">
            <CardHeader>
              <CardTitle>Connect & Share</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Share your character workflows and results in the <Link href="/community" className="text-primary underline">Nano Banana Community</Link>. 
                Get feedback, discover new techniques, and collaborate with fellow creators.
              </CardDescription>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
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
        </div>
      </section>
    </div>
  )
}
