import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { BookmarkItem } from "@/hooks/useBookmarks";

interface BookmarksDialogProps {
  bookmarks: BookmarkItem[];
  onChapterSelect: (chapterId: number) => void;
}

export const BookmarksDialog = ({ bookmarks, onChapterSelect }: BookmarksDialogProps) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="pill" size="sm" className="gap-2">
          <Bookmark className="h-4 w-4" />
          Dấu Trang
          {bookmarks.length > 0 && (
            <span className="ml-1 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
              {bookmarks.length}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Dấu Trang Của Bạn</DialogTitle>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto space-y-2">
          {bookmarks.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Chưa có dấu trang nào
            </p>
          ) : (
            bookmarks.map((bookmark) => (
              <button
                key={bookmark.chapterId}
                onClick={() => onChapterSelect(bookmark.chapterId)}
                className="w-full text-left p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
              >
                <p className="text-xs text-muted-foreground mb-1">{bookmark.storyTitle}</p>
                <h3 className="font-medium text-foreground">{bookmark.chapterTitle}</h3>
              </button>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
