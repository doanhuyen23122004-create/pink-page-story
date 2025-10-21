import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import paperTexture from "@/assets/paper-texture.png";
import { Chapter } from "@/data/chapters";

interface StoryContentProps {
  chapter: Chapter;
  onPrevChapter: () => void;
  onNextChapter: () => void;
  hasPrevChapter: boolean;
  hasNextChapter: boolean;
}

export const StoryContent = ({ 
  chapter, 
  onPrevChapter, 
  onNextChapter,
  hasPrevChapter,
  hasNextChapter 
}: StoryContentProps) => {
  return (
    <div 
      className="flex-1 overflow-y-auto"
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '400px 400px',
      }}
    >
      <div className="container max-w-4xl px-8 py-12">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-foreground">{chapter.title}</h2>
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="prose prose-pink max-w-none">
            {chapter.content.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-foreground mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={onPrevChapter}
              disabled={!hasPrevChapter}
            >
              <ChevronLeft className="h-4 w-4" />
              Chương trước
            </Button>
            
            <span className="text-sm text-muted-foreground">
              Trang {chapter.pages}
            </span>
            
            <Button 
              variant="default" 
              className="gap-2"
              onClick={onNextChapter}
              disabled={!hasNextChapter}
            >
              Chương sau
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
