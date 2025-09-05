import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Category {
  id: string;
  label: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <section className="py-8 border-b bg-muted/30">
      <div className="container">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className={`relative ${
                activeCategory === category.id 
                  ? "bg-gradient-primary text-primary-foreground shadow-golden" 
                  : "hover:bg-accent"
              }`}
            >
              {category.label}
              <Badge 
                variant="secondary" 
                className={`ml-2 text-xs ${
                  activeCategory === category.id 
                    ? "bg-primary-foreground/20 text-primary-foreground" 
                    : ""
                }`}
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;