import { useMemo, useState } from "react"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import Hero from "./Hero"
import CategoryFilter from "./CategoryFilter"
import PromptGrid from "./PromptGrid"
import { PromptsSchema } from "./schema"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { categories as baseCategories, prompts as dataPrompts } from "@/data/prompts"
import { SchemaOrg } from "@/components/seo-schema"
import type { Metadata } from 'next';
import PromptPageClient from './page.client';

export const metadata: Metadata = {
  title: "Nano Banana Prompts - AI Image Editing Prompt Library",
  description: "Browse our comprehensive collection of Nano Banana AI prompts. Find the perfect prompts for character consistency, style transfer, and advanced image editing techniques.",
  keywords: ["Nano Banana prompts", "AI image editing prompts", "Google Gemini prompts", "character consistency prompts", "style transfer prompts"],
  openGraph: {
    title: "Nano Banana Prompts - AI Image Editing Prompt Library",
    description: "Browse our comprehensive collection of Nano Banana AI prompts for advanced image editing techniques.",
    type: "website",
  },
};

export default function PromptPage() {
  return <PromptPageClient />;
}
