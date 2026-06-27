import {
  BadgeCheck,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleDot,
  FileText,
  Fingerprint,
  Globe2,
  Handshake,
  Layers3,
  Leaf,
  LineChart,
  MapPinned,
  PackageCheck,
  Palette,
  QrCode,
  ScanLine,
  Sparkles,
  Sprout,
  Store,
  UsersRound,
} from "lucide-react";

export const navLinks = [
  { label: "Giải pháp", href: "#giai-phap" },
  { label: "Quy trình", href: "#quy-trinh" },
  { label: "Case Study", href: "#case-study" },
  { label: "Về DIKAMO", href: "#ve-dikamo" },
  { label: "Liên hệ", href: "#lien-he" },
];

export const problemCards = [
  {
    title: "Bao bì chưa tạo ấn tượng",
    description: "Khó nổi bật khi đặt cạnh sản phẩm cạnh tranh.",
    icon: PackageCheck,
  },
  {
    title: "Nhận diện thiếu nhất quán",
    description: "Logo, màu sắc, thông điệp và hình ảnh chưa đồng bộ.",
    icon: Fingerprint,
  },
  {
    title: "Thiếu câu chuyện thương hiệu",
    description: "Sản phẩm có giá trị nhưng chưa được kể đúng cách.",
    icon: FileText,
  },
  {
    title: "Thiếu hiện diện số",
    description: "Website, QR, fanpage và nội dung số chưa đủ chuyên nghiệp.",
    icon: Globe2,
  },
];

export const pillars = [
  {
    title: "Brand",
    description: "Xây dựng nhận diện và định vị thương hiệu.",
    icon: Palette,
  },
  {
    title: "Story",
    description: "Kể câu chuyện sản phẩm, con người, vùng đất và quy trình sản xuất.",
    icon: Sparkles,
  },
  {
    title: "Digital",
    description: "Website, QR product story, nội dung số và nền tảng giới thiệu sản phẩm.",
    icon: ScanLine,
  },
];

export const services = [
  {
    title: "Brand Identity",
    description:
      "Xây dựng logo, màu sắc, font chữ, hệ thống nhận diện và thông điệp thương hiệu nhất quán.",
    output: "Brand kit, guideline, key visual.",
    icon: BadgeCheck,
  },
  {
    title: "Packaging Design",
    description:
      "Thiết kế bao bì sản phẩm chuyên nghiệp, phù hợp kênh bán lẻ, quà tặng, OCOP và thương mại điện tử.",
    output: "Mockup, file in, layout bao bì.",
    icon: PackageCheck,
  },
  {
    title: "Website Storytelling",
    description:
      "Phát triển website giới thiệu HTX, sản phẩm, câu chuyện nguồn gốc và quy trình sản xuất.",
    output: "Landing page, website giới thiệu, nội dung SEO cơ bản.",
    icon: Globe2,
  },
  {
    title: "QR Product Story",
    description:
      "Tạo trang QR giúp người dùng truy cập thông tin sản phẩm, nguồn gốc, câu chuyện và hình ảnh minh bạch.",
    output: "QR page, thông tin sản phẩm, truy xuất cơ bản.",
    icon: QrCode,
  },
  {
    title: "Digital Content",
    description:
      "Xây dựng nội dung truyền thông gồm bài viết, hình ảnh, video ngắn và câu chuyện thương hiệu.",
    output: "Content package, social post, visual direction.",
    icon: Layers3,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Khảo sát",
    description: "Tìm hiểu sản phẩm, HTX, bao bì hiện tại, kênh bán và vấn đề thương hiệu.",
    icon: MapPinned,
  },
  {
    number: "02",
    title: "Định vị",
    description: "Xác định giá trị cốt lõi, khách hàng mục tiêu và câu chuyện sản phẩm.",
    icon: CircleDot,
  },
  {
    number: "03",
    title: "Thiết kế",
    description: "Xây dựng nhận diện, bao bì, hình ảnh và thông điệp truyền thông.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Số hóa",
    description: "Phát triển website, QR product story và nền tảng giới thiệu sản phẩm.",
    icon: QrCode,
  },
  {
    number: "05",
    title: "Đồng hành",
    description: "Hỗ trợ vận hành, cập nhật nội dung và tối ưu truyền thông.",
    icon: Handshake,
  },
];

export const caseStudy = {
  badge: "Yến Khoa / Cà Mau / Packaging & Product Story",
  problems: [
    "Bao bì cũ chưa tạo được cảm giác chuyên nghiệp.",
    "Thông tin sản phẩm chưa được trình bày rõ ràng.",
    "Thiếu điểm nhấn về nguồn gốc, bản sắc vùng miền và câu chuyện sản phẩm.",
    "Khó nổi bật khi tiếp cận đối tác, kênh bán lẻ và người tiêu dùng mới.",
  ],
  solutions: [
    "Tái thiết kế bao bì theo hướng sạch, rõ, dễ nhận diện.",
    "Đồng bộ màu sắc, hình ảnh minh họa và thông điệp sản phẩm.",
    "Bổ sung QR product story để tăng tính minh bạch.",
    "Xây dựng cách kể chuyện gắn với nguồn gốc Thới Bình, Cà Mau.",
    "Định hướng hình ảnh sản phẩm phù hợp hơn với truyền thông số.",
  ],
  outcomes: [
    "Sản phẩm có diện mạo chuyên nghiệp hơn.",
    "Tăng khả năng tạo niềm tin ban đầu.",
    "Dễ truyền thông hơn trên website, fanpage và các kênh bán hàng.",
    "Tăng sức cạnh tranh khi tiếp cận đối tác và người tiêu dùng.",
  ],
};

export const differences = [
  {
    title: "Hiểu sản phẩm địa phương",
    description:
      "Không chỉ làm đẹp, DIKAMO tìm giá trị thật của sản phẩm, con người và vùng đất phía sau thương hiệu.",
    icon: Leaf,
  },
  {
    title: "Kết hợp thiết kế và công nghệ",
    description:
      "Bao bì, website, QR và nội dung số được triển khai trong cùng một lộ trình thống nhất.",
    icon: Boxes,
  },
  {
    title: "Phù hợp với HTX và SME",
    description:
      "Quy trình tinh gọn, chi phí linh hoạt, dễ tiếp cận và phù hợp với năng lực vận hành thực tế.",
    icon: Store,
  },
  {
    title: "Có thể nhân rộng",
    description:
      "Mô hình pilot có thể chuẩn hóa để áp dụng cho nhiều sản phẩm địa phương khác tại Đồng bằng sông Cửu Long.",
    icon: LineChart,
  },
];

export const growthStages = [
  {
    title: "Pilot",
    description: "Hoàn thiện mô hình qua case study đầu tiên.",
    icon: Sprout,
  },
  {
    title: "Expansion",
    description: "Mở rộng sang nhiều HTX và sản phẩm địa phương.",
    icon: BarChart3,
  },
  {
    title: "Ecosystem",
    description: "Xây dựng hệ sinh thái số hóa thương hiệu nông sản Việt.",
    icon: Building2,
  },
];

export const teamRoles = [
  {
    title: "Business & Partnership",
    description: "Định hướng kinh doanh, kết nối đối tác và phát triển quan hệ hợp tác.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Marketing & Brand Strategy",
    description: "Nghiên cứu thị trường, định vị thương hiệu và chiến lược truyền thông.",
    icon: LineChart,
  },
  {
    title: "Technology",
    description: "Phát triển website, QR product story và nền tảng số.",
    icon: Globe2,
  },
  {
    title: "Product & Design",
    description: "Thiết kế bao bì, nhận diện và hình ảnh sản phẩm.",
    icon: Palette,
  },
  {
    title: "Customer Development",
    description: "Làm việc với HTX, khảo sát nhu cầu và chăm sóc khách hàng.",
    icon: UsersRound,
  },
  {
    title: "Strategy & Growth",
    description: "Hoạch định chiến lược phát triển và mở rộng mô hình.",
    icon: CheckCircle2,
  },
];
