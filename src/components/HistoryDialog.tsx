import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { History, Trash2 } from "lucide-react";
import { HistoryItem } from "@/hooks/useReadingHistory";

interface HistoryDialogProps {
  history: HistoryItem[];
  onChapterSelect: (chapterId: number) => void;
  onClearHistory: () => void;
}

export const HistoryDialog = ({ history, onChapterSelect, onClearHistory }: HistoryDialogProps) => {
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins} phút trước`;
    if (diffHours < 24) return `${diffHours} giờ trước`;
    if (diffDays < 7) return `${diffDays} ngày trước`;
    return date.toLocaleDateString('vi-VN');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="pill" size="sm" className="gap-2">
          <History className="h-4 w-4" />
          Lịch sử
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-card border-border">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-foreground">Lịch Sử Đọc</DialogTitle>
            {history.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearHistory}
                className="gap-2 text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
                Xóa tất cả
              </Button>
            )}
          </div>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto space-y-2">
          {history.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Chưa có lịch sử đọc
            </p>
          ) : (
            history.map((item) => (
              <button
                key={`${item.chapterId}-${item.timestamp}`}
                onClick={() => onChapterSelect(item.chapterId)}
                className="w-full text-left p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
              >
                <p className="text-xs text-muted-foreground mb-1">{item.storyTitle}</p>
                <h3 className="font-medium text-foreground">{item.chapterTitle}</h3>
                <p className="text-sm text-muted-foreground">{formatTime(item.timestamp)}</p>
              </button>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
