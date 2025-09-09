import Script from "next/script"

interface SchemaOrgProps {
  type: "website" | "article" | "tutorial" | "searchResults"
  data: {
    title: string
    description: string
    url: string
    image?: string
    datePublished?: string
    dateModified?: string
    author?: {
      name: string
      type: "Person" | "Organization"
    }
    publisher?: {
      name: string
      logo: string
    }
    keywords?: string[]
    category?: string
    difficulty?: string
    readTime?: string
    rating?: {
      value: number
      count: number
    }
  }
}

export function SchemaOrg({ type, data }: SchemaOrgProps) {
  const getSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type":
        type === "website"
          ? "WebSite"
          : type === "article"
            ? "Article"
            : type === "tutorial"
              ? "HowTo"
              : "SearchResultsPage",
      name: data.title,
      description: data.description,
      url: data.url,
      image: data.image || "https://nanobanana.fans/og-image.jpg",
    }

    if (type === "website") {
      return {
        ...baseSchema,
        "@type": "WebSite",
        publisher: {
          "@type": "Organization",
          name: "Nano Banana Tutorial Platform",
          logo: {
            "@type": "ImageObject",
            url: "https://nanobanana.fans/logo.png",
          },
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://nanobanana.fans/search?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      }
    }

    if (type === "tutorial") {
      return {
        ...baseSchema,
        "@type": "HowTo",
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: {
          "@type": data.author?.type || "Person",
          name: data.author?.name || "Nano Banana Tutorial Platform",
        },
        publisher: {
          "@type": "Organization",
          name: "Nano Banana Tutorial Platform",
          logo: {
            "@type": "ImageObject",
            url: "https://nanobanana.fans/logo.png",
          },
        },
        keywords: data.keywords?.join(", "),
        about: {
          "@type": "Thing",
          name: "Nano Banana AI Image Editing",
        },
        teaches: "AI Image Editing with Google's Nano Banana",
        educationalLevel: data.difficulty,
        timeRequired: data.readTime,
        aggregateRating: data.rating
          ? {
              "@type": "AggregateRating",
              ratingValue: data.rating.value,
              reviewCount: data.rating.count,
            }
          : undefined,
        mainEntity: {
          "@type": "WebPage",
          "@id": data.url,
        },
      }
    }

    if (type === "article") {
      return {
        ...baseSchema,
        "@type": "Article",
        headline: data.title,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: {
          "@type": data.author?.type || "Person",
          name: data.author?.name || "Nano Banana Tutorial Platform",
        },
        publisher: {
          "@type": "Organization",
          name: "Nano Banana Tutorial Platform",
          logo: {
            "@type": "ImageObject",
            url: "https://nanobanana.fans/logo.png",
          },
        },
        keywords: data.keywords?.join(", "),
        articleSection: data.category,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data.url,
        },
      }
    }

    return baseSchema
  }

  return (
    <>
      <link rel="canonical" href={data.url} />
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSchema()),
        }}
      />
    </>
  )
}

// Breadcrumb Schema Component
interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

// FAQ Schema Component
interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
