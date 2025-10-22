import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { chapters } from "@/data/chapters";

interface BookmarksDialogProps {
  bookmarkedChapters: number[];
  onChapterSelect: (chapterId: number) => void;
}

export const BookmarksDialog = ({ bookmarkedChapters, onChapterSelect }: BookmarksDialogProps) => {
  const bookmarkedChaptersList = chapters.filter(ch => 
    bookmarkedChapters.includes(ch.id)
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="pill" size="sm" className="gap-2">
          <Bookmark className="h-4 w-4" />
          Dấu Trang
          {bookmarkedChapters.length > 0 && (
            <span className="ml-1 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
              {bookmarkedChapters.length}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Dấu Trang Của Bạn</DialogTitle>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto space-y-2">
          {bookmarkedChaptersList.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Chưa có dấu trang nào
            </p>
          ) : (
            bookmarkedChaptersList.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => onChapterSelect(chapter.id)}
                className="w-full text-left p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
              >
                <h3 className="font-medium text-foreground">{chapter.title}</h3>
                <p className="text-sm text-muted-foreground">Trang {chapter.pages}</p>
              </button>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
