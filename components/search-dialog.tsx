"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, Star, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const searchResults = [
  {
    id: 1,
    title: "Getting Started with Nano Banana AI",
    description: "Complete beginner's guide to Google's revolutionary AI image editing tool.",
    category: "Beginner",
    readTime: "15 min",
    rating: 4.9,
    url: "/tutorials/getting-started",
    type: "tutorial",
  },
  {
    id: 2,
    title: "Character Consistency Mastery",
    description: "Master the art of maintaining character likeness across multiple edits.",
    category: "Intermediate",
    readTime: "25 min",
    rating: 4.8,
    url: "/tutorials/character-consistency",
    type: "tutorial",
  },
  {
    id: 3,
    title: "Multi-Turn Editing Techniques",
    description: "Advanced strategies for complex multi-step edits while preserving quality.",
    category: "Advanced",
    readTime: "35 min",
    rating: 4.7,
    url: "/tutorials/multi-turn-editing",
    type: "tutorial",
  },
  {
    id: 4,
    title: "API Integration Guide",
    description: "Learn how to integrate Nano Banana into your applications.",
    category: "Advanced",
    readTime: "45 min",
    rating: 4.8,
    url: "/tutorials/api-integration",
    type: "tutorial",
  },
]

const popularSearches = [
  "character consistency",
  "getting started",
  "API integration",
  "multi-turn editing",
  "style transfer",
  "product photography",
]

interface SearchDialogProps {
  children: React.ReactNode
}

export function SearchDialog({ children }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const filteredResults =
    query.length > 0
      ? searchResults.filter(
          (result) =>
            result.title.toLowerCase().includes(query.toLowerCase()) ||
            result.description.toLowerCase().includes(query.toLowerCase()) ||
            result.category.toLowerCase().includes(query.toLowerCase()),
        )
      : searchResults.slice(0, 4)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="sr-only">Search Tutorials</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search tutorials, techniques, or topics..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 text-lg h-12"
              autoFocus
            />
          </div>
        </DialogHeader>

        <div className="px-6 pb-6 overflow-y-auto">
          {query.length === 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                Popular Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search) => (
                  <Button key={search} variant="outline" size="sm" onClick={() => setQuery(search)} className="text-xs">
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
              {query.length > 0 ? `Results for "${query}"` : "Featured Tutorials"}
            </h3>

            {filteredResults.length > 0 ? (
              <div className="space-y-3">
                {filteredResults.map((result) => (
                  <Link
                    key={result.id}
                    href={result.url}
                    onClick={() => setIsOpen(false)}
                    className="block p-3 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                          <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                            {result.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{result.description}</p>
                        <div className="flex items-center gap-2 text-xs">
                          <Badge variant="outline" className="text-xs">
                            {result.category}
                          </Badge>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {result.readTime}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Star className="h-3 w-3 fill-current text-yellow-500 mr-1" />
                            {result.rating}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">No tutorials found for "{query}"</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Try searching for "getting started" or "character consistency"
                </p>
              </div>
            )}
          </div>

          {query.length > 0 && filteredResults.length > 0 && (
            <div className="mt-4 pt-4 border-t">
              <Link
                href={`/tutorials?search=${encodeURIComponent(query)}`}
                onClick={() => setIsOpen(false)}
                className="text-sm text-primary hover:underline"
              >
                View all results for "{query}" →
              </Link>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
