import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BookMarked } from "lucide-react";

const genres = [
  "Lãng mạn",
  "Huyền bí",
  "Phiêu lưu",
  "Kinh dị",
  "Hài hước",
  "Khoa học viễn tưởng",
  "Trinh thám",
  "Fantasy",
];

export const GenresDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="pill" size="sm" className="gap-2">
          <BookMarked className="h-4 w-4" />
          Thể loại
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-card border-border z-50">
        {genres.map((genre) => (
          <DropdownMenuItem
            key={genre}
            className="cursor-pointer hover:bg-accent focus:bg-accent"
          >
            {genre}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
