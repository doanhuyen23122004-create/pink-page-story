import { useState, useEffect } from "react";

const BOOKMARKS_KEY = "story-bookmarks";

export const useBookmarks = () => {
  const [bookmarkedChapters, setBookmarkedChapters] = useState<number[]>(() => {
    const stored = localStorage.getItem(BOOKMARKS_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarkedChapters));
  }, [bookmarkedChapters]);

  const toggleBookmark = (chapterId: number) => {
    setBookmarkedChapters(prev => 
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const isBookmarked = (chapterId: number) => {
    return bookmarkedChapters.includes(chapterId);
  };

  return {
    bookmarkedChapters,
    toggleBookmark,
    isBookmarked,
  };
};
