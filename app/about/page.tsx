import type { Metadata } from "next"
import { Cpu, Sparkles, Users, Zap, Target, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - AI Agent Laboratory | nanobanana.fans",
  description:
    "We are an AI Agent Laboratory dedicated to creating small but beautiful AI agents that serve more users. Discover our mission to democratize AI through elegant, accessible solutions.",
  keywords:
    "AI Agent Laboratory, artificial intelligence, AI agents, nano banana, machine learning, AI research, technology innovation",
  openGraph: {
    title: "About Us - AI Agent Laboratory",
    description:
      "We are an AI Agent Laboratory dedicated to creating small but beautiful AI agents that serve more users.",
    url: "https://nanobanana.fans/about",
    siteName: "Nano Banana Fans",
    images: [
      {
        url: "/ai-laboratory-technology-background.png",
        width: 1200,
        height: 630,
        alt: "AI Agent Laboratory - Creating Beautiful AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - AI Agent Laboratory",
    description:
      "We are an AI Agent Laboratory dedicated to creating small but beautiful AI agents that serve more users.",
    images: ["/ai-laboratory-technology-background.png"],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI Agent Laboratory
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
              Creating{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Small but Beautiful
              </span>{" "}
              AI Agents
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              We are an AI Agent Laboratory dedicated to crafting elegant, accessible artificial intelligence solutions
              that serve more users worldwide. Our mission is to democratize AI through innovation, simplicity, and
              beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/tutorials">
                  Explore Our Work <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/tutorials/getting-started-with-nano-banana">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                Bridging the gap between cutting-edge AI technology and everyday users through thoughtful design and
                accessible innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Precision & Purpose</h3>
                  <p className="text-slate-600 text-pretty">
                    Every AI agent we create is meticulously designed with a specific purpose, ensuring maximum
                    efficiency and user value.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Beauty in Simplicity</h3>
                  <p className="text-slate-600 text-pretty">
                    We believe that powerful technology should be elegant and intuitive, making complex AI accessible to
                    everyone.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Serving More Users</h3>
                  <p className="text-slate-600 text-pretty">
                    Our goal is to democratize AI technology, making it available and useful for individuals and
                    businesses of all sizes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Focus */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Innovation Through <span className="text-cyan-600">Intelligent Design</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 text-pretty">
                  At our AI Agent Laboratory, we focus on creating compact, efficient AI solutions that deliver maximum
                  impact. Our approach combines cutting-edge machine learning with user-centered design principles.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Cpu className="w-4 h-4 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Advanced AI Research</h3>
                      <p className="text-slate-600 text-pretty">
                        Continuously exploring the latest developments in artificial intelligence to create more capable
                        and efficient agents.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Optimized Performance</h3>
                      <p className="text-slate-600 text-pretty">
                        Building lightweight AI agents that deliver powerful results without compromising on speed or
                        efficiency.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Globe className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Global Accessibility</h3>
                      <p className="text-slate-600 text-pretty">
                        Ensuring our AI solutions work seamlessly across different platforms, languages, and user
                        contexts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-8 flex items-center justify-center">
                  <img
                    src="/ai-neural-network-visualization-modern-tech.png"
                    alt="AI Technology Visualization"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-slate-600 mb-12 text-pretty">
              The principles that guide everything we do at our AI Agent Laboratory.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Innovation with Purpose</h3>
                <p className="text-slate-600 text-pretty">
                  We don't innovate for the sake of innovation. Every AI agent we create solves real problems and adds
                  genuine value to users' lives.
                </p>
              </div>

              <div className="text-left p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Ethical AI Development</h3>
                <p className="text-slate-600 text-pretty">
                  We prioritize responsible AI development, ensuring our agents are transparent, fair, and beneficial
                  for all users.
                </p>
              </div>

              <div className="text-left p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">User-Centric Design</h3>
                <p className="text-slate-600 text-pretty">
                  Every decision we make is guided by how it will impact the end user experience, prioritizing
                  simplicity and effectiveness.
                </p>
              </div>

              <div className="text-left p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Continuous Learning</h3>
                <p className="text-slate-600 text-pretty">
                  We embrace a culture of continuous learning and improvement, constantly evolving our approaches and
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Experience the Future of AI?</h2>
            <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto text-pretty">
              Join thousands of users who are already benefiting from our small but beautiful AI agents. Start your
              journey with Nano Banana today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-cyan-50">
                <Link href="/tutorials">
                  Explore Tutorials <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
              >
                <Link href="/tutorials/getting-started-with-nano-banana">Get Started Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
