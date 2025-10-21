import { BookOpen, Search, Settings, Home, BookMarked, Bookmark, History, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
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
          <Button variant="pill" size="sm" className="gap-2">
            <BookMarked className="h-4 w-4" />
            Thể loại
          </Button>
          <Button variant="pill" size="sm" className="gap-2">
            <Bookmark className="h-4 w-4" />
            Dấu Trang
          </Button>
          <Button variant="pill" size="sm" className="gap-2">
            <History className="h-4 w-4" />
            Lịch sử
          </Button>
        </nav>
        
        <div className="flex flex-1 items-center justify-center px-4 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm truyện..."
              className="pl-10 bg-background"
            />
          </div>
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
