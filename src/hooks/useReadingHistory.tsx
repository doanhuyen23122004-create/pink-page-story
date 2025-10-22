import { useState, useEffect } from "react";

const HISTORY_KEY = "reading-history";

export interface HistoryItem {
  chapterId: number;
  chapterTitle: string;
  storyTitle: string;
  timestamp: number;
}

export const useReadingHistory = () => {
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    const stored = localStorage.getItem(HISTORY_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  const addToHistory = (chapterId: number, chapterTitle: string, storyTitle: string) => {
    setHistory(prev => {
      const filtered = prev.filter(item => item.chapterId !== chapterId);
      return [
        { chapterId, chapterTitle, storyTitle, timestamp: Date.now() },
        ...filtered
      ].slice(0, 20); // Keep last 20 items
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return {
    history,
    addToHistory,
    clearHistory,
  };
};
