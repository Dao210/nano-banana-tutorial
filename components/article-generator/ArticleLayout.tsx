import React from 'react';
import { ArticleHero } from './ArticleHero';
import { ArticleContent } from './ArticleContent';
import { ArticleSidebar } from './ArticleSidebar';
import { ArticleNavigation } from './ArticleNavigation';
import { ArticleConfig } from '../types/article';

interface ArticleLayoutProps {
  config: ArticleConfig;
}

export function ArticleLayout({ config }: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <ArticleHero 
        title={config.title}
        description={config.description}
        hero={config.content.hero}
        category={config.category}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1 max-w-4xl">
            <ArticleContent 
              sections={config.content.sections}
              config={config}
            />
            <ArticleNavigation />
          </main>
          
          <aside className="lg:w-80 flex-shrink-0">
            <ArticleSidebar 
              config={config}
              sections={config.content.sections}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
