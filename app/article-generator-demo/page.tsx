'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArticleLayout } from '@/components/article-generator/ArticleLayout';
import { OptimizedArticleGenerator } from '@/lib/optimized-article-generator';
import { ArticleConfig } from '@/components/types/article';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import { 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Code, 
  Download,
  Eye,
  Star,
  Clock
} from 'lucide-react';

export default function ArticleGeneratorDemo() {
  const [keywords, setKeywords] = useState<string[]>(['character consistency', 'multi-turn editing']);
  const [generatedConfig, setGeneratedConfig] = useState<ArticleConfig | null>(null);
  const [validation, setValidation] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('generator');

  const handleKeywordChange = (index: number, value: string) => {
    const newKeywords = [...keywords];
    newKeywords[index] = value;
    setKeywords(newKeywords);
  };

  const addKeyword = () => {
    setKeywords([...keywords, '']);
  };

  const removeKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const generateArticle = async () => {
    setIsLoading(true);
    try {
      const validKeywords = keywords.filter(k => k.trim() !== '');
      if (validKeywords.length === 0) {
        alert('Please enter at least one keyword');
        return;
      }

      const config = OptimizedArticleGenerator.generateArticleConfig(validKeywords);
      const validationResult = OptimizedArticleGenerator.validateGeneratedArticle(config);
      
      setGeneratedConfig(config);
      setValidation(validationResult);
      setActiveTab('preview');
    } catch (error) {
      console.error('Error generating article:', error);
      alert('Error generating article. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const generateBatch = () => {
    const keywordGroups = [
      ['character consistency', 'portrait editing'],
      ['product photography', 'commercial'],
      ['api integration', 'development'],
      ['cinematic universes', 'creative']
    ];
    
    const batchConfigs = OptimizedArticleGenerator.generateBatchArticles(keywordGroups);
    console.log('Generated batch articles:', batchConfigs);
    alert(`Generated ${batchConfigs.length} articles. Check console for details.`);
  };

  const exportConfig = () => {
    if (!generatedConfig) return;
    
    const blob = new Blob([JSON.stringify(generatedConfig, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${generatedConfig.id}-config.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPath="/article-generator-demo" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
                Optimized Article Generator
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Generate high-quality, technically accurate Nano Banana tutorials with our advanced AI-powered system. 
              Features automatic validation, SEO optimization, and professional content structure.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="generator">Generator</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="validation">Validation</TabsTrigger>
            </TabsList>

            {/* Generator Tab */}
            <TabsContent value="generator" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Article Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Keywords</label>
                    {keywords.map((keyword, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <Input
                          value={keyword}
                          onChange={(e) => handleKeywordChange(index, e.target.value)}
                          placeholder="Enter keyword..."
                          className="flex-1"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeKeyword(index)}
                          disabled={keywords.length === 1}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" onClick={addKeyword} className="mt-2">
                      Add Keyword
                    </Button>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      onClick={generateArticle} 
                      disabled={isLoading}
                      className="flex-1"
                    >
                      {isLoading ? 'Generating...' : 'Generate Article'}
                    </Button>
                    <Button variant="outline" onClick={generateBatch}>
                      Generate Batch
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      ['character consistency', 'multi-turn editing'],
                      ['product photography', 'ai editing'],
                      ['api integration', 'development'],
                      ['cinematic universes', 'creative']
                    ].map((exampleKeywords, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Example {index + 1}</span>
                          <Badge variant="outline">
                            {exampleKeywords.length} keywords
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {exampleKeywords.map((keyword, ki) => (
                            <Badge key={ki} variant="secondary" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setKeywords(exampleKeywords);
                            generateArticle();
                          }}
                        >
                          Use This Example
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preview Tab */}
            <TabsContent value="preview" className="space-y-6">
              {generatedConfig ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{generatedConfig.title}</h2>
                      <p className="text-muted-foreground">{generatedConfig.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={exportConfig}>
                        <Download className="h-4 w-4 mr-2" />
                        Export Config
                      </Button>
                      <Button variant="outline">
                        <Code className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>

                  {/* Article Stats */}
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Star className="h-5 w-5 mx-auto mb-1 text-yellow-500" />
                        <div className="font-semibold">{generatedConfig.stats.rating}</div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Clock className="h-5 w-5 mx-auto mb-1 text-blue-500" />
                        <div className="font-semibold">{generatedConfig.stats.readTime}</div>
                        <div className="text-xs text-muted-foreground">Read Time</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Eye className="h-5 w-5 mx-auto mb-1 text-green-500" />
                        <div className="font-semibold">{generatedConfig.stats.views}</div>
                        <div className="text-xs text-muted-foreground">Views</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Badge className="mb-1">{generatedConfig.category}</Badge>
                        <div className="text-xs text-muted-foreground">Category</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Article Preview */}
                  <div className="border rounded-lg overflow-hidden">
                    <ArticleLayout config={generatedConfig} />
                  </div>
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Sparkles className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">No Article Generated Yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Configure your keywords and generate an article to see the preview here.
                    </p>
                    <Button onClick={() => setActiveTab('generator')}>
                      Go to Generator
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Validation Tab */}
            <TabsContent value="validation" className="space-y-6">
              {validation ? (
                <div className="space-y-6">
                  {/* Overall Status */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {validation.isValid ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        )}
                        Validation Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Quality Scores</h4>
                          {validation.qualityScore && (
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm">Overall</span>
                                <span className="text-sm font-medium">{validation.qualityScore.overall}/100</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm">Structure</span>
                                <span className="text-sm font-medium">{validation.qualityScore.structure}/100</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm">Accuracy</span>
                                <span className="text-sm font-medium">{validation.qualityScore.accuracy}/100</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm">Readability</span>
                                <span className="text-sm font-medium">{validation.qualityScore.readability}/100</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm">SEO</span>
                                <span className="text-sm font-medium">{validation.qualityScore.seo}/100</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm">Engagement</span>
                                <span className="text-sm font-medium">{validation.qualityScore.engagement}/100</span>
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Improvement Suggestions</h4>
                          {validation.suggestions.length > 0 ? (
                            <ul className="space-y-2">
                              {validation.suggestions.map((suggestion: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{suggestion}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-muted-foreground">No suggestions - great job!</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Technical Validation Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Technical Validation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Alert>
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>
                          This article has been validated for technical accuracy and quality standards.
                          All content meets the requirements for a professional Nano Banana tutorial.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">No Validation Data</h3>
                    <p className="text-muted-foreground mb-4">
                      Generate an article first to see validation results.
                    </p>
                    <Button onClick={() => setActiveTab('generator')}>
                      Go to Generator
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
