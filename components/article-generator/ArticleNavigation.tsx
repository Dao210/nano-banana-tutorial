import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ArticleNavigation() {
  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t">
      <Link href="/tutorials">
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <ChevronLeft className="h-4 w-4" />
          All Tutorials
        </Button>
      </Link>
      <Link href="/tutorials/character-consistency">
        <Button className="flex items-center gap-2">
          Character Consistency
          <ChevronRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
