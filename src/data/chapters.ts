export interface Chapter {
  id: number;
  title: string;
  pages: string;
  content: string[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Chương 1: Khởi đầu",
    pages: "1-15",
    content: [
      "Ngày xửa ngày xưa, trong một ngôi làng nhỏ nằm bên sườn núi xanh thẳm, có một cô gái tên là Linh. Cô sống cùng bà ngoại trong một ngôi nhà nhỏ xinh xắn, nơi những bông hoa hồng luôn nở rộ quanh năm.",
      "Mỗi sáng thức dậy, Linh thường ra vườn chăm sóc những bông hoa của mình. Bà ngoại hay nói rằng, những bông hoa hồng này không chỉ đẹp mà còn mang theo những câu chuyện kỳ diệu.",
      '"Con gái à," bà thường nói, "mỗi cánh hoa đều là một trang sách, kể về tình yêu, niềm hy vọng và những ước mơ của những người đã từng trải qua nơi đây."',
      "Linh luôn tò mò về những câu chuyện ấy. Cô thường ngồi bên bụi hoa hồng lâu nhất, lắng nghe tiếng gió thổi qua từng cánh hoa, như thể chúng đang thì thầm những bí mật xưa cũ.",
      "Một ngày nọ, khi mặt trời vừa ló dạng sau dãy núi xa, Linh phát hiện một bông hoa hồng đặc biệt. Nó có màu hồng nhạt như sương mai, và những cánh hoa của nó dường như lấp lánh dưới ánh nắng đầu ngày.",
      "Khi Linh đưa tay chạm nhẹ vào bông hoa, một điều kỳ lạ đã xảy ra. Những cánh hoa bắt đầu rung động nhẹ nhàng, và từ đó, cô nghe thấy một giọng nói nhỏ nhẹ, ấm áp như ánh nắng mùa xuân..."
    ]
  },
  {
    id: 2,
    title: "Chương 2: Cuộc gặp gỡ",
    pages: "16-30",
    content: [
      '"Ta đã chờ đợi em từ lâu rồi," giọng nói thì thầm từ bông hoa hồng vang lên trong tâm trí Linh. Cô giật mình, nhìn quanh nhưng không thấy ai cả.',
      'Linh cúi xuống gần hơn, tim đập thình thịch. "Ai... ai đang nói với em?" cô hỏi bằng giọng run run.',
      '"Ta là Hồng Linh, linh hồn của vườn hoa này," giọng nói tiếp tục. "Từ xa xưa, ta đã được bà cố của em giao phó nhiệm vụ bảo vệ gia đình này, và giờ đây, đã đến lúc em biết về di sản của mình."',
      'Trong ánh sáng lung linh, từ bông hoa xuất hiện một hình bóng mờ ảo. Đó là một người phụ nữ mặc áo dài truyền thống, với mái tóc dài óng mượt và đôi mắt hiền hòa.',
      '"Em đừng sợ," Hồng Linh mỉm cười. "Ta không phải là người xấu. Ta ở đây để dẫn dắt em khám phá những bí mật mà bà ngoại em chưa kể cho em nghe."',
      'Linh từ từ bình tĩnh lại. "Những bí mật gì ạ?" cô hỏi, đôi mắt tràn đầy tò mò.',
      '"Gia đình em có một món quà đặc biệt - khả năng nghe được tiếng nói của thiên nhiên. Và giờ đây, trong thời đại cần những người giữ gìn và bảo vệ, em sẽ phải học cách sử dụng món quà này."'
    ]
  }
];