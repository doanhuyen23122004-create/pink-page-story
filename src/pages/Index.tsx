import { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TableOfContents } from "@/components/TableOfContents";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoryContent } from "@/components/StoryContent";
import { chapters, storyTitle } from "@/data/chapters";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useReadingHistory } from "@/hooks/useReadingHistory";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [currentChapterId, setCurrentChapterId] = useState(1);
  const { isBookmarked, toggleBookmark, bookmarks } = useBookmarks();
  const { history, addToHistory, clearHistory } = useReadingHistory();
  
  const currentChapter = chapters.find(ch => ch.id === currentChapterId) || chapters[0];
  const hasPrevChapter = currentChapterId > 1;
  const hasNextChapter = currentChapterId < chapters.length;

  useEffect(() => {
    addToHistory(currentChapter.id, currentChapter.title, storyTitle);
  }, [currentChapterId]);
  
  const handlePrevChapter = () => {
    if (hasPrevChapter) {
      setCurrentChapterId(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleNextChapter = () => {
    if (hasNextChapter) {
      setCurrentChapterId(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleBookmark = () => {
    toggleBookmark(currentChapterId, currentChapter.title, storyTitle);
    toast({
      title: isBookmarked(currentChapterId) ? "Đã xóa dấu trang" : "Đã thêm dấu trang",
      description: `${currentChapter.title}`,
    });
  };

  const handleChapterSelect = (chapterId: number) => {
    setCurrentChapterId(chapterId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <Header 
          storyTitle={storyTitle}
          bookmarkedChapters={bookmarks.map(b => b.chapterId)}
          history={history}
          onChapterSelect={handleChapterSelect}
          onClearHistory={clearHistory}
        />
        
        <div className="flex flex-1 w-full">
          <TableOfContents />
          
          <div className="flex flex-col flex-1">
            <div className="border-b border-border bg-card/50 p-2">
              <SidebarTrigger />
            </div>
            
            <StoryContent 
              chapter={currentChapter}
              onPrevChapter={handlePrevChapter}
              onNextChapter={handleNextChapter}
              hasPrevChapter={hasPrevChapter}
              hasNextChapter={hasNextChapter}
              isBookmarked={isBookmarked(currentChapterId)}
              onToggleBookmark={handleToggleBookmark}
            />
          </div>
        </div>
        
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Index;
