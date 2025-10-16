import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative overflow-hidden tech-grid py-16 md:py-24 flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/prompt/hero-brain.jpg" 
          alt="AI brain visualization" 
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 tech-gradient opacity-10"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 tech-glow tech-gradient px-4 py-2 rounded-full text-sm font-medium text-white mb-6 tech-float">
            <Sparkles className="h-4 w-4" />
            Nano Banana AI Prompt Library
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Free{' '}
            <span className="tech-text">
              Nano Banana Prompts
            </span>{' '}
            for AI Image Editing
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover 25+ curated Nano Banana AI prompts for image editing, character consistency, product photography, and creative design. 
            Perfect for beginners and professionals looking to master AI image generation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 tech-button tech-glow hover:scale-105 transition-transform">
              Explore Prompts
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="glass tech-glow hover:scale-105 transition-transform">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center justify-center">
            <div className="tech-card tech-float" style={{ animationDelay: '0s' }}>
              <div className="text-2xl md:text-3xl font-bold tech-text">25+</div>
              <div className="text-sm text-muted-foreground">Nano Banana Prompts</div>
            </div>
            <div className="tech-card tech-float" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl md:text-3xl font-bold tech-text">6</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="tech-card tech-float" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl md:text-3xl font-bold tech-text">100%</div>
              <div className="text-sm text-muted-foreground">Free Access</div>
            </div>
            <div className="tech-card tech-float" style={{ animationDelay: '0.6s' }}>
              <div className="text-2xl md:text-3xl font-bold tech-text">Expert</div>
              <div className="text-sm text-muted-foreground">Crafted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;