import { BookOpen, Settings, Home, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GenresDropdown } from "@/components/GenresDropdown";
import { BookmarksDialog } from "@/components/BookmarksDialog";
import { HistoryDialog } from "@/components/HistoryDialog";
import { SearchDialog } from "@/components/SearchDialog";

interface HeaderProps {
  bookmarkedChapters: number[];
  history: any[];
  onChapterSelect: (chapterId: number) => void;
  onClearHistory: () => void;
}

export const Header = ({ bookmarkedChapters, history, onChapterSelect, onClearHistory }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between px-4 gap-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold text-foreground">Thư Viện Truyện</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="pill" size="sm" className="gap-2">
            <Home className="h-4 w-4" />
            Trang chủ
          </Button>
          <GenresDropdown />
          <BookmarksDialog 
            bookmarkedChapters={bookmarkedChapters}
            onChapterSelect={onChapterSelect}
          />
          <HistoryDialog 
            history={history}
            onChapterSelect={onChapterSelect}
            onClearHistory={onClearHistory}
          />
        </nav>
        
        <div className="flex flex-1 items-center justify-center px-4 max-w-md">
          <SearchDialog onResultClick={onChapterSelect} />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Avatar className="h-9 w-9 cursor-pointer border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-primary/10">
              <User className="h-5 w-5 text-primary" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
