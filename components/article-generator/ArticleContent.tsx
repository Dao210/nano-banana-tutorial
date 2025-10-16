import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  Star, 
  Clock, 
  Eye, 
  Share2, 
  Bookmark, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  MessageCircle,
  ThumbsUp,
  Target
} from 'lucide-react';
import { SectionConfig, ArticleConfig } from '../types/article';

interface ArticleContentProps {
  sections: SectionConfig[];
  config: ArticleConfig;
}

const gradients: Record<string, string> = {
  cyan: 'bg-gradient-to-br from-cyan-50 to-blue-50',
  green: 'bg-gradient-to-br from-emerald-50 to-teal-50',
  amber: 'bg-gradient-to-br from-amber-50 to-orange-50',
  red: 'bg-gradient-to-br from-red-50 to-pink-50',
  violet: 'bg-gradient-to-br from-violet-50 to-purple-50',
  blue: 'bg-gradient-to-br from-blue-50 to-cyan-50',
  purple: 'bg-gradient-to-br from-purple-50 to-pink-50'
};

const icons: Record<string, React.ReactNode> = {
  Sparkles: <span>✨</span>,
  Zap: <span>⚡</span>,
  Target: <span>🎯</span>,
  MessageCircle: <span>💬</span>,
  CheckCircle: <CheckCircle className="h-6 w-6" />,
  Lightbulb: <Lightbulb className="h-6 w-6" />,
  AlertTriangle: <AlertTriangle className="h-6 w-6" />,
  ArrowRight: <ArrowRight className="h-6 w-6" />
};

export function ArticleContent({ sections, config }: ArticleContentProps) {
  const getGradientClass = (gradient?: string) => {
    return gradient ? gradients[gradient] || gradients.cyan : gradients.cyan;
  };

  const getIcon = (iconName: string) => {
    return icons[iconName] || <span>📚</span>;
  };

  return (
    <div className="space-y-8">
      {/* Tutorial Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Target className="h-3 w-3 mr-1" />
            {config.category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
            {config.stats.rating} ({config.stats.ratingCount} reviews)
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            {config.stats.readTime}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Eye className="h-4 w-4 mr-1" />
            {config.stats.views} views
          </div>
        </div>

        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{config.description}</p>

        {/* Author and Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-card rounded-lg border">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage
                src={config.author.avatar || "/placeholder.svg"}
                alt={config.author.name}
              />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {config.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-lg">{config.author.name}</div>
              <div className="text-sm text-muted-foreground">{config.author.bio}</div>
              <div className="text-sm text-muted-foreground">
                {config.author.followers} followers • {config.author.expertise}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              PDF
            </Button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {config.seo.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <Card className="mb-8">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Reading Progress</span>
            <span className="text-sm text-muted-foreground">0%</span>
          </div>
          <Progress value={0} className="h-2" />
        </CardContent>
      </Card>

      {/* Tutorial Content Sections */}
      <div className="prose prose-lg max-w-none space-y-8">
        {sections.map((section) => (
          <section
            key={section.id}
            className={
              section.background === 'gradient' 
                ? `${getGradientClass(section.gradient)} p-8 rounded-xl border`
                : 'bg-card p-8 rounded-xl border'
            }
            id={section.id}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 ${
                section.background === 'gradient' 
                  ? 'bg-primary rounded-lg' 
                  : 'bg-secondary rounded-lg'
              } flex items-center justify-center`}>
                {getIcon(section.icon)}
              </div>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                {section.title}
              </h2>
            </div>

            <div 
              className="text-lg text-muted-foreground leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />

            {/* Steps */}
            {section.steps && (
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {section.steps.map((step, index) => (
                  <Card key={index} className="bg-white">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                        {index + 1}
                      </div>
                      <CardTitle className="text-lg">Step {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{step}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Examples */}
            {section.examples && (
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {section.examples.map((example, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-2">{example.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{example.description}</p>
                    {example.image && (
                      <Image
                        src={example.image}
                        alt={example.title}
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://picsum.photos/seed/${example.title}/400/200.jpg`;
                        }}
                      />
                    )}
                    {example.code && (
                      <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                        {example.code}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Tips */}
            {section.tips && (
              <div className="space-y-4 mb-6">
                {section.tips.map((tip, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      tip.type === 'success' 
                        ? 'bg-green-50 border-green-400'
                        : tip.type === 'warning'
                        ? 'bg-amber-50 border-amber-400'
                        : 'bg-blue-50 border-blue-400'
                    }`}
                  >
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Lightbulb className={`h-5 w-5 ${
                        tip.type === 'success' 
                          ? 'text-green-600'
                          : tip.type === 'warning'
                          ? 'text-amber-600'
                          : 'text-blue-600'
                      }`} />
                      {tip.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{tip.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Mistakes */}
            {section.mistakes && (
              <div className="space-y-6">
                {section.mistakes.map((mistake, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold text-red-700 mb-3">🚫 {mistake.title}</h3>
                    <p className="text-muted-foreground mb-3">{mistake.description}</p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> {mistake.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            {section.cta && (
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold mb-3">{section.cta.title}</h3>
                <p className="text-muted-foreground mb-4">{section.cta.description}</p>
                <Link href={section.cta.buttonLink}>
                  <Button className="flex items-center gap-2">
                    {section.cta.buttonText}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Comments Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Comments ({config.stats.ratingCount})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex gap-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-blue-100 text-blue-600">MJ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">Maria Johnson</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">3 days ago</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  This tutorial is absolutely fantastic! The step-by-step approach and real examples made all the difference.
                </p>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    24
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
