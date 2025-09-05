import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PromptCardProps {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  previewImage: string;
  originalImages?: string[];
}

const PromptCard = ({ title, description, prompt, category, previewImage, originalImages }: PromptCardProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [showFullPrompt, setShowFullPrompt] = useState(false);
  const { toast } = useToast();

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setIsCopied(true);
      toast({
        title: "Prompt copied!",
        description: "The prompt has been copied to your clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
      });
    }
  };

  const truncatedPrompt = prompt.length > 150 ? prompt.substring(0, 150) + "..." : prompt;

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50">
      <div className="relative overflow-hidden">
        <img 
          src={previewImage} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      
      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        {originalImages && originalImages.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-foreground mb-2">Original Images</h4>
            <div className="flex gap-2">
              {originalImages.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`Original ${index + 1}`}
                  className="w-16 h-16 object-cover rounded border border-border"
                />
              ))}
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-foreground">AI Prompt</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFullPrompt(!showFullPrompt)}
              className="text-xs"
            >
              <Eye className="h-3 w-3 mr-1" />
              {showFullPrompt ? 'Show Less' : 'Show More'}
            </Button>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-3 border border-border/50">
            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
              {showFullPrompt ? prompt : truncatedPrompt}
            </p>
          </div>
          
          <Button
            onClick={handleCopyPrompt}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            size="sm"
          >
            {isCopied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy Prompt
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PromptCard;