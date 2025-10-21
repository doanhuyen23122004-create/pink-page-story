import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TableOfContents } from "@/components/TableOfContents";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoryContent } from "@/components/StoryContent";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        
        <div className="flex flex-1 w-full">
          <TableOfContents />
          
          <div className="flex flex-col flex-1">
            <div className="border-b border-border bg-card/50 p-2">
              <SidebarTrigger />
            </div>
            
            <StoryContent />
          </div>
        </div>
        
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Index;
