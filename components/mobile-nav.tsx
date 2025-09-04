"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, Home, BookOpen, Users, Info, Mail, Sparkles, Search } from "lucide-react"
import Link from "next/link"
import { SearchDialog } from "./search-dialog"

const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/tutorials", label: "Tutorials", icon: BookOpen, badge: "24" },
  { href: "/community", label: "Community", icon: Users },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-left">
            <div className="h-8 w-8 flex items-center justify-center">
              <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
            </div>
            <span className="font-bold text-xl text-primary font-[family-name:var(--font-space-grotesk)]">
              Nano Banana
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {/* Search */}
          <SearchDialog>
            <Button variant="outline" className="w-full justify-start bg-transparent" onClick={() => setIsOpen(false)}>
              <Search className="h-4 w-4 mr-2" />
              Search tutorials...
            </Button>
          </SearchDialog>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-medium group-hover:text-primary transition-colors">{item.label}</span>
                  </div>
                  {item.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Quick Actions */}
          <div className="pt-4 border-t space-y-2">
            <Button className="w-full" onClick={() => setIsOpen(false)}>
              Get Started
            </Button>
            <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsOpen(false)}>
              Sign In
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-4 border-t">
            <h3 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
              Popular Tutorials
            </h3>
            <div className="space-y-2">
              <Link
                href="/tutorials/getting-started"
                onClick={() => setIsOpen(false)}
                className="block p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <div className="font-medium text-sm">Getting Started</div>
                <div className="text-xs text-muted-foreground">Learn the basics</div>
              </Link>
              <Link
                href="/tutorials/character-consistency"
                onClick={() => setIsOpen(false)}
                className="block p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <div className="font-medium text-sm">Character Consistency</div>
                <div className="text-xs text-muted-foreground">Advanced techniques</div>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
