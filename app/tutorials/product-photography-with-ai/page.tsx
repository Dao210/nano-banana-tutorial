import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SchemaOrg, BreadcrumbSchema } from "@/components/seo-schema";
import { Header } from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Product Photography with AI | Nano Banana Tutorial",
  description:
    "Transform ordinary product shots into professional marketing materials using Nano Banana's advanced AI editing. Elevate your brand imagery and boost sales with stunning visuals.",
  keywords: [
    "Nano Banana",
    "AI product photography",
    "AI image editing",
    "marketing materials",
    "professional product shots",
    "tutorial",
    "photo enhancement",
    "ecommerce images",
    "brand imagery",
    "visual storytelling",
    "digital commerce",
  ],
  url: "https://nonabanana.fans/tutorials/product-photography-with-ai",
  openGraph: {
    title: "Product Photography with AI | Nano Banana Tutorial",
    description:
      "Transform ordinary product shots into professional marketing materials using Nano Banana's advanced AI editing. Elevate your brand imagery and boost sales with stunning visuals.",
    images: [
      {
        url: "/tutorials/getting-started-cover.png",
        width: 1200,
        height: 630,
        alt: "Product Photography with AI",
      },
    ],
  },
};

export default function ProductPhotographyAI() {
  // Tutorial stats and author info (customize as needed)
  const stats = {
    category: "Marketing",
    difficulty: "Beginner",
    readTime: "8 min",
    rating: 4.8,
    ratingCount: 112,
    views: "5,200",
    tags: [
      "AI Product Photography",
      "Nano Banana",
      "Photo Enhancement",
      "Brand Imagery",
      "Tutorial",
    ],
    author: {
      name: "Jane Smith",
      avatar: "/placeholder-user.jpg",
      bio: "AI Content Creator & Marketing Specialist",
      followers: "3,400",
      expertise: "AI Visuals, Product Marketing",
    },
  };

  return (
    <>
      <SchemaOrg type="article" data={metadata} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nonabanana.fans" },
          { name: "Tutorials", url: "https://nonabanana.fans/tutorials" },
          { name: "Product Photography with AI", url: metadata.url },
        ]}
      />
      <Header currentPath="/tutorials/product-photography-with-ai" />
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            <h1 className="text-4xl font-bold mb-4 leading-tight text-center">
              Product Photography with AI
            </h1>
            <Badge variant="outline" className="mb-6 mx-auto block">Nano Banana Tutorial</Badge>
            <Card className="mb-8">
              <Image
                src="/tutorials/getting-started-cover.png"
                alt="Product Photography with AI - Nano Banana"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
                priority
              />
            </Card>
            <section className="prose prose-lg mx-auto">
              <p>
                In today’s digital marketplace, compelling product imagery is essential for capturing attention and driving sales. Yet, creating professional-grade photos can be both expensive and time-consuming. <strong>Nano Banana</strong> revolutionizes this process, empowering brands and creators to transform ordinary product shots into stunning marketing assets—effortlessly.
              </p>
              <h2>Transform Your Brand’s Visual Storytelling</h2>
              <p>
                Harnessing the power of advanced AI, Nano Banana enhances lighting, removes imperfections, and adds creative polish to every image. Whether you’re a small business owner or a seasoned marketer, you can produce eye-catching visuals that elevate your brand and engage your audience—no studio required.
              </p>
              <h2>How to Create Professional Product Photos with Nano Banana</h2>
              <ol>
                <li>
                  <strong>Upload Your Product Image:</strong> Choose a clear, well-lit photo of your product. High-resolution images yield the best results.
                </li>
                <li>
                  <strong>Apply AI Enhancements:</strong> Instantly adjust brightness, contrast, and background. Nano Banana’s AI refines product edges and optimizes every detail for a polished finish.
                </li>
                <li>
                  <strong>Customize for Your Brand:</strong> Add your logo, select color themes, and experiment with creative effects to ensure your visuals reflect your brand identity.
                </li>
                <li>
                  <strong>Export & Share:</strong> Download your enhanced images in high resolution, ready for websites, social media, and marketing campaigns.
                </li>
              </ol>
              <h2>Why Nano Banana?</h2>
              <ul>
                <li>Effortless, AI-powered editing for creators of all skill levels</li>
                <li>Consistent, professional results every time</li>
                <li>Lightning-fast turnaround—perfect for busy teams</li>
                <li>Flexible customization to match your brand’s unique style</li>
              </ul>
              <p>
                Unlock the full potential of your product photography and elevate your marketing materials with Nano Banana. Experience the future of visual storytelling—where creativity meets cutting-edge technology.
              </p>
            </section>
          </main>
          {/* Right Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
            <Card className="p-6">
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase text-muted-foreground">Tutorial Stats</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {stats.category}
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {stats.difficulty}
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  {stats.readTime}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span className="font-medium">Rating:</span>
                <span className="text-yellow-600 font-bold">{stats.rating}</span>
                <span>({stats.ratingCount} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span className="font-medium">Views:</span>
                <span>{stats.views}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {stats.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-6 flex items-center gap-4">
              <Image
                src={stats.author.avatar}
                alt={stats.author.name}
                width={56}
                height={56}
                className="rounded-full object-cover border"
              />
              <div>
                <div className="font-semibold text-lg">{stats.author.name}</div>
                <div className="text-sm text-muted-foreground">{stats.author.bio}</div>
                <div className="text-xs text-muted-foreground">
                  {stats.author.followers} followers • {stats.author.expertise}
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}
