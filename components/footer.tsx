import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { SpeedInsights } from "@vercel/speed-insights/next"

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-cyan-600 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white font-[family-name:var(--font-space-grotesk)]">
                Nano Banana
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-4 text-pretty">
              AI Agent Laboratory creating small but beautiful AI agents to serve more users worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tutorials/getting-started-with-nano-banana"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-slate-400 hover:text-white text-sm transition-colors">
                  All Tutorials
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">
              Get the latest tutorials and AI insights delivered to your inbox.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025 Nano Banana Fans. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <SpeedInsights/>
    </footer>
  )
}

export { Footer }
export default Footer
