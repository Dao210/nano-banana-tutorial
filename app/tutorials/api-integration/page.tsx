import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Clock,
  Eye,
  Star,
  ChevronRight,
  ChevronLeft,
  Shield,
  BarChart3,
  Code,
  Terminal,
  Network,
  Lock,
  AlertTriangle,
  FileCode,
  CheckCircle,
} from "lucide-react"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { SchemaOrg, BreadcrumbSchema } from "@/components/seo-schema"
import Link from "next/link"

const tutorialData = {
  id: "api-integration",
  title: "API Integration: Nano Banana with Google AI Studio & Vertex AI",
  description:
    "Integrate Nano Banana's state-of-the-art AI image editing into your apps. This guide covers authentication, request formats, code examples (Node.js & Python), rate limits, error handling, and production best practices using Google AI Studio and Vertex AI.",
  author: {
    name: "Dr. Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "AI Research Specialist & Google Developer Expert",
    followers: "18.2k",
    expertise: "Applied GenAI, Computer Vision",
  },
  category: "Advanced",
  difficulty: "advanced",
  readTime: "15 min",
  rating: 4.8,
  ratingCount: 241,
  views: "9.6k",
  publishedAt: "2024-02-10",
  updatedAt: "2024-03-02",
  tags: [
    "API Integration",
    "Google AI Studio",
    "Vertex AI",
    "Security",
    "Production",
  ],
  tableOfContents: [
    { id: "overview", title: "Overview & When to Use", level: 2 },
    { id: "choose-path", title: "Choose Your Integration Path", level: 2 },
    { id: "auth", title: "Authentication & Setup", level: 2 },
    { id: "requests", title: "Request Format & Media Inputs", level: 2 },
    { id: "code", title: "Quickstart Code (Node & Python)", level: 2 },
    { id: "errors", title: "Errors, Retries & Timeouts", level: 2 },
    { id: "production", title: "Security & Production Checklist", level: 2 },
  ],
}

export default function ApiIntegrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="tutorial"
        data={{
          title: tutorialData.title,
          description: tutorialData.description,
          url: "https://nanobanana.fans/tutorials/api-integration",
          image: "/tutorials/api-integration.jpg",
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
          { name: tutorialData.title, url: "https://nanobanana.fans/tutorials/api-integration" },
        ]}
      />

      <Header currentPath="/tutorials/api-integration" />

      {/* Hero */}
      <section className="container py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">Advanced Tutorial</Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl text-balance">
            {tutorialData.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
            {tutorialData.description}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container py-3">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/tutorials" className="hover:text-foreground transition-colors">Tutorials</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">API Integration</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main */}
          <main className="flex-1 max-w-4xl">
            {/* Header Stats */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge> {tutorialData.category} </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                  {tutorialData.rating} ({tutorialData.ratingCount} reviews)
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />{tutorialData.readTime}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Eye className="h-4 w-4 mr-1" />{tutorialData.views} views
                </div>
              </div>

              {/* Author */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-card rounded-lg border">
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={tutorialData.author.avatar} alt={tutorialData.author.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {tutorialData.author.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-lg">{tutorialData.author.name}</div>
                    <div className="text-sm text-muted-foreground">{tutorialData.author.bio}</div>
                    <div className="text-sm text-muted-foreground">{tutorialData.author.followers} followers • {tutorialData.author.expertise}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <FileCode className="h-4 w-4 mr-2" />Examples
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4 mr-2" />Docs
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {tutorialData.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">{tag}</Badge>
                ))}
              </div>
            </div>

            {/* Progress */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Reading Progress</span>
                  <span className="text-sm text-muted-foreground">0%</span>
                </div>
                <Progress value={0} className="h-2" />
              </CardContent>
            </Card>

            {/* Content Sections */}
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Overview */}
              <section id="overview" className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Network className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Overview & When to Use</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  API integration unlocks automated, repeatable, and scalable Nano Banana workflows for web apps, creative tools,
                  and production pipelines. Use it when you need consistent edits at scale, user-facing features, or server-side control.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-white"><CardHeader className="pb-2"><CardTitle className="text-base">Batch Processing</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Automate thousands of edits for catalogs and archives.</CardContent></Card>
                  <Card className="bg-white"><CardHeader className="pb-2"><CardTitle className="text-base">Creative Apps</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Embed Nano Banana into editors with user prompts.</CardContent></Card>
                  <Card className="bg-white"><CardHeader className="pb-2"><CardTitle className="text-base">Consistency</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Enforce preservation rules and audit trails.</CardContent></Card>
                </div>
              </section>

              {/* Choose Path */}
              <section id="choose-path" className="bg-card p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Choose Your Integration Path</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="relative">
                    <Badge className="absolute -top-2 left-4 bg-accent">Dev Friendly</Badge>
                    <CardHeader className="pt-6"><CardTitle className="text-xl">Google AI Studio</CardTitle><CardDescription>Best for prototyping, internal tools, and small-to-medium workloads</CardDescription></CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                      <ul className="space-y-1">
                        <li>• Quick setup, UI playground, generous free tier</li>
                        <li>• API keys via AI Studio; simple client SDKs</li>
                        <li>• Ideal for prompt development and testing</li>
                      </ul>
                      <Button className="w-full mt-4">Open AI Studio</Button>
                    </CardContent>
                  </Card>
                  <Card className="relative">
                    <Badge className="absolute -top-2 left-4 bg-primary">Production Ready</Badge>
                    <CardHeader className="pt-6"><CardTitle className="text-xl">Vertex AI</CardTitle><CardDescription>Enterprise-grade platform with governance and scale</CardDescription></CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                      <ul className="space-y-1">
                        <li>• IAM, VPC-SC, CMEK, audit logs</li>
                        <li>• Quotas, monitoring, regional control</li>
                        <li>• Suitable for regulated environments</li>
                      </ul>
                      <Button variant="outline" className="w-full mt-4 bg-transparent">Explore Vertex AI</Button>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Auth */}
              <section id="auth" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Authentication & Setup</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white">
                    <CardHeader className="pb-2"><CardTitle className="text-lg">AI Studio (API Key)</CardTitle></CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Create an API key in AI Studio</li>
                        <li>Store it in an environment variable (never commit keys)</li>
                        <li>Use client SDKs to call Gemini Native Image</li>
                      </ol>
                    </CardContent>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader className="pb-2"><CardTitle className="text-lg">Vertex AI (Service Account)</CardTitle></CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Create a service account with minimal roles</li>
                        <li>Authenticate via ADC or JSON key (server-side only)</li>
                        <li>Call the Vertex AI Images API with regional endpoints</li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium text-primary mb-1">Security Tip</p>
                  <p className="text-sm text-muted-foreground">Use per-environment keys, rotate regularly, and proxy calls from your server to avoid exposing credentials in the browser.</p>
                </div>
              </section>

              {/* Requests */}
              <section id="requests" className="bg-card p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <Terminal className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Request Format & Media Inputs</h2>
                </div>
                <p className="text-muted-foreground mb-4">Send your instruction and media. Keep prompts explicit about what to change and what to preserve.</p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre className="text-muted-foreground">{`{
  "model": "gemini-2.5-flash",
  "input": [
    "Change the background to a sunset beach while keeping the person identical",
    { "inlineData": { "data": "<base64 image>", "mimeType": "image/jpeg" } }
  ]
}`}</pre>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <Card className="bg-white"><CardHeader className="pb-2"><CardTitle className="text-base">Supported Inputs</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">JPEG/PNG images; URLs or inline base64; multiple references allowed.</CardContent></Card>
                  <Card className="bg-white"><CardHeader className="pb-2"><CardTitle className="text-base">Response</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Image bytes or URL depending on platform and SDK.</CardContent></Card>
                </div>
              </section>

              {/* Code */}
              <section id="code" className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Quickstart Code (Node & Python)</h2>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Node.js (AI Studio SDK)</CardTitle>
                    <CardDescription>Example calling Gemini 2.5 Flash with an image and instruction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre className="text-muted-foreground">{`import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

export async function editImage(imageBase64: string, prompt: string) {
  const result = await model.generateContent([
    prompt,
    { inlineData: { data: imageBase64, mimeType: 'image/jpeg' } },
  ])
  return result.response
}`}</pre>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Python (Vertex AI)</CardTitle>
                      <CardDescription>Server-side example using service account auth</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <pre className="text-muted-foreground">{`from google.cloud import aiplatform
from vertexai.preview.vision_models import ImageGenerationModel

def edit_image(image_bytes: bytes, prompt: str):
    aiplatform.init(project='YOUR_PROJECT', location='us-central1')
    model = ImageGenerationModel.from_pretrained('imagegeneration@002')
    result = model.edit_image(
        prompt=prompt,
        image=image_bytes,
        mime_type='image/jpeg',
    )
    return result`}</pre>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>cURL (REST)</CardTitle>
                      <CardDescription>Useful for smoke tests and automation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <pre className="text-muted-foreground">{`curl -X POST \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent \
  -d '{
    "contents": [{
      "parts": [
        {"text": "Change background to a sunset beach; keep the person identical"},
        {"inline_data": {"mime_type": "image/jpeg", "data": "<base64>"}}
      ]
    }]
  }'`}</pre>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Errors */}
              <section id="errors" className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Errors, Retries & Timeouts</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white"><CardHeader className="pb-2"><CardTitle className="text-lg">Common Errors</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground space-y-2"><p>401 Unauthorized: invalid or missing credentials</p><p>429 Too Many Requests: back off and retry with jitter</p><p>413 Payload Too Large: compress or stream uploads</p></CardContent></Card>
                  <Card className="bg-white"><CardHeader className="pb-2"><CardTitle className="text-lg">Retry Strategy</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Use exponential backoff (e.g., 200ms → 400ms → 800ms, cap 5 retries) and client-side timeouts (e.g., 30–60s) for long edits.</CardContent></Card>
                </div>
              </section>

              {/* Production */}
              <section id="production" className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">Security & Production Checklist</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white">
                    <CardHeader className="pb-2"><CardTitle className="text-lg">Security</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Never expose API keys in the browser</li>
                        <li>• Rotate credentials and scope least privilege</li>
                        <li>• Validate file types and enforce size limits</li>
                        <li>• Log request IDs, not raw media</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader className="pb-2"><CardTitle className="text-lg">Operations</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Use regional endpoints close to users</li>
                        <li>• Cache non-personal results where allowed</li>
                        <li>• Monitor quotas and error rates</li>
                        <li>• Add fallbacks for partial outages</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" />Ready for Production</h3>
                  <p className="text-sm text-muted-foreground">Confirm SLOs, alerts, and data handling policies before launch.</p>
                </div>
              </section>
            </div>

            {/* Nav */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t">
              <Link href="/tutorials">
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />All Tutorials
                </Button>
              </Link>
              <Link href="/tutorials/building-cinematic-universes">
                <Button className="flex items-center gap-2">
                  Next Tutorial<ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {tutorialData.tableOfContents.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className={`block text-sm hover:text-primary transition-colors py-1 ${item.level === 2 ? "font-medium" : "ml-4 text-muted-foreground"}`}>
                      {item.title}
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tutorial Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">Difficulty</span><Badge variant="secondary">{tutorialData.category}</Badge></div>
                  <div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">Read Time</span><span className="text-sm font-medium">{tutorialData.readTime}</span></div>
                  <div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">Views</span><span className="text-sm font-medium">{tutorialData.views}</span></div>
                  <div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">Rating</span><div className="flex items-center gap-1"><Star className="h-3 w-3 fill-current text-yellow-500" /><span className="text-sm font-medium">{tutorialData.rating}</span></div></div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary-foreground/90 mb-4">Get Nano Banana API tips and new examples delivered weekly.</p>
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