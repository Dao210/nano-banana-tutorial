import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles } from "lucide-react"
import Link from "next/link"
import { SearchDialog } from "./search-dialog"
import { MobileNav } from "./mobile-nav"

interface HeaderProps {
  currentPath?: string
}

export function Header({ currentPath = "/" }: HeaderProps) {
  const isActive = (path: string) => currentPath === path

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center justify-between w-full">
          {/* Left spacer for balance */}
          <div className="flex-1"></div>

          {/* Centered logo and navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-primary font-[family-name:var(--font-space-grotesk)]">
                Nano Banana
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary" : "hover:text-primary"}`}
              >
                Home
              </Link>
              <Link
                href="/tutorials"
                className={`text-sm font-medium transition-colors ${
                  isActive("/tutorials") || currentPath?.startsWith("/tutorials")
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                Tutorials
              </Link>
              <Link
                href="/community"
                className={`text-sm font-medium transition-colors ${
                  isActive("/community") ? "text-primary" : "hover:text-primary"
                }`}
              >
                Community
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors ${
                  isActive("/about") ? "text-primary" : "hover:text-primary"
                }`}
              >
                About
              </Link>
            </nav>
          </div>

          {/* Right-aligned search */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <div className="hidden sm:block">
              <SearchDialog>
                <div className="relative cursor-pointer">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search tutorials..." className="pl-10 w-64 cursor-pointer" readOnly />
                </div>
              </SearchDialog>
            </div>

            <div className="sm:hidden">
              <SearchDialog>
                <Button variant="ghost" size="sm">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </SearchDialog>
            </div>

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
