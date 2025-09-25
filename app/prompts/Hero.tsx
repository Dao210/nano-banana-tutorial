import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-16 md:py-24 flex items-center">
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
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent px-3 py-1 rounded-full text-sm font-medium text-accent-foreground mb-6">
            <Sparkles className="h-4 w-4" />
            Nano Banana AI Prompt Library
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Free{' '}
            <span className="text-primary">
              Nano Banana Prompts
            </span>{' '}
            for AI Image Editing
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover 25+ curated Nano Banana AI prompts for image editing, character consistency, product photography, and creative design. 
            Perfect for beginners and professionals looking to master AI image generation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Explore Prompts
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center justify-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Nano Banana Prompts</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Free Access</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">Expert</div>
              <div className="text-sm text-muted-foreground">Crafted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;