import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { chapters } from "@/data/chapters";

interface SearchDialogProps {
  onResultClick: (chapterId: number) => void;
}

export const SearchDialog = ({ onResultClick }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, index) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={index} className="bg-pink-300 text-foreground rounded px-0.5">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const searchResults = searchQuery.trim()
    ? chapters.flatMap(chapter =>
        chapter.content
          .map((paragraph, pIndex) => ({
            chapter,
            paragraph,
            pIndex,
          }))
          .filter(({ paragraph }) =>
            paragraph.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : [];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative w-full cursor-pointer">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Tìm kiếm truyện..."
            className="pl-10 bg-background cursor-pointer"
            readOnly
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Tìm Kiếm</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Nhập từ khóa..."
              className="pl-10 bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
          
          <div className="max-h-96 overflow-y-auto space-y-3">
            {!searchQuery.trim() ? (
              <p className="text-muted-foreground text-center py-8">
                Nhập từ khóa để tìm kiếm
              </p>
            ) : searchResults.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                Không tìm thấy kết quả nào
              </p>
            ) : (
              searchResults.map(({ chapter, paragraph, pIndex }) => (
                <button
                  key={`${chapter.id}-${pIndex}`}
                  onClick={() => onResultClick(chapter.id)}
                  className="w-full text-left p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                >
                  <h3 className="font-medium text-foreground mb-1">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {highlightText(paragraph, searchQuery)}
                  </p>
                </button>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
