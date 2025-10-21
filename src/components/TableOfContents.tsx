import { BookMarked, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const chapters = [
  { id: 1, title: "Chương 1: Khởi đầu", pages: "1-15" },
  { id: 2, title: "Chương 2: Cuộc gặp gỡ", pages: "16-30" },
  { id: 3, title: "Chương 3: Những ngày đầu", pages: "31-45" },
  { id: 4, title: "Chương 4: Thử thách", pages: "46-60" },
  { id: 5, title: "Chương 5: Vượt qua", pages: "61-75" },
  { id: 6, title: "Chương 6: Phát triển", pages: "76-90" },
  { id: 7, title: "Chương 7: Đối mặt", pages: "91-105" },
  { id: 8, title: "Chương 8: Quyết định", pages: "106-120" },
  { id: 9, title: "Chương 9: Hành trình mới", pages: "121-135" },
  { id: 10, title: "Chương 10: Kết thúc", pages: "136-150" },
];

export function TableOfContents() {
  const { state } = useSidebar();

  return (
    <Sidebar className={state === "collapsed" ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-sidebar pt-20">
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 px-2">
            <BookMarked className="h-4 w-4" />
            {state === "expanded" && <span>Mục lục</span>}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chapters.map((chapter) => (
                <SidebarMenuItem key={chapter.id}>
                  <SidebarMenuButton asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left hover:bg-sidebar-accent"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                      {state === "expanded" && (
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{chapter.title}</span>
                          <span className="text-xs text-muted-foreground">
                            Trang {chapter.pages}
                          </span>
                        </div>
                      )}
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
