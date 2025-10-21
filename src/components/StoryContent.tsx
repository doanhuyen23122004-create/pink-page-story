import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import paperTexture from "@/assets/paper-texture.png";

export const StoryContent = () => {
  return (
    <div 
      className="flex-1 overflow-y-auto"
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '400px 400px',
      }}
    >
      <div className="container max-w-4xl px-8 py-12">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-foreground">Chương 1: Khởi đầu</h2>
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="prose prose-pink max-w-none">
            <p className="text-lg leading-relaxed text-foreground mb-4">
              Ngày xửa ngày xưa, trong một ngôi làng nhỏ nằm bên sườn núi xanh thẳm, có một cô gái tên là Linh. 
              Cô sống cùng bà ngoại trong một ngôi nhà nhỏ xinh xắn, nơi những bông hoa hồng luôn nở rộ quanh năm.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground mb-4">
              Mỗi sáng thức dậy, Linh thường ra vườn chăm sóc những bông hoa của mình. Bà ngoại hay nói rằng, 
              những bông hoa hồng này không chỉ đẹp mà còn mang theo những câu chuyện kỳ diệu.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground mb-4">
              "Con gái à," bà thường nói, "mỗi cánh hoa đều là một trang sách, kể về tình yêu, niềm hy vọng 
              và những ước mơ của những người đã từng trải qua nơi đây."
            </p>
            
            <p className="text-lg leading-relaxed text-foreground mb-4">
              Linh luôn tò mò về những câu chuyện ấy. Cô thường ngồi bên bụi hoa hồng lâu nhất, lắng nghe 
              tiếng gió thổi qua từng cánh hoa, như thể chúng đang thì thầm những bí mật xưa cũ.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground mb-4">
              Một ngày nọ, khi mặt trời vừa ló dạng sau dãy núi xa, Linh phát hiện một bông hoa hồng đặc biệt. 
              Nó có màu hồng nhạt như sương mai, và những cánh hoa của nó dường như lấp lánh dưới ánh nắng đầu ngày.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground mb-4">
              Khi Linh đưa tay chạm nhẹ vào bông hoa, một điều kỳ lạ đã xảy ra. Những cánh hoa bắt đầu rung 
              động nhẹ nhàng, và từ đó, cô nghe thấy một giọng nói nhỏ nhẹ, ấm áp như ánh nắng mùa xuân...
            </p>
          </div>
          
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <Button variant="outline" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Chương trước
            </Button>
            
            <span className="text-sm text-muted-foreground">
              Trang 1 / 15
            </span>
            
            <Button variant="default" className="gap-2">
              Chương sau
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
