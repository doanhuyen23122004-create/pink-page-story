import { useState, useEffect } from "react";

const BOOKMARKS_KEY = "story-bookmarks";

export interface BookmarkItem {
  chapterId: number;
  chapterTitle: string;
  storyTitle: string;
}

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    const stored = localStorage.getItem(BOOKMARKS_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (chapterId: number, chapterTitle: string, storyTitle: string) => {
    setBookmarks(prev => {
      const exists = prev.find(b => b.chapterId === chapterId);
      if (exists) {
        return prev.filter(b => b.chapterId !== chapterId);
      } else {
        return [...prev, { chapterId, chapterTitle, storyTitle }];
      }
    });
  };

  const isBookmarked = (chapterId: number) => {
    return bookmarks.some(b => b.chapterId === chapterId);
  };

  return {
    bookmarks,
    toggleBookmark,
    isBookmarked,
  };
};
