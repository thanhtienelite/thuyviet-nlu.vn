import {
  StatItem,
  AnatomyComponent,
  DigestivePhase,
  TrialTreatment,
  ProcessStep,
  HeritageColor,
  TeamMember,
  ProjectContact
} from '../types';
import { ASSETS } from './assets';

export const BRAND_INFO = {
  name: 'THỤY VIỆT',
  code: 'DA55',
  fullName: 'THỤY VIỆT – Giải pháp Synbiotic từ phụ phẩm chuối xanh cho chăn nuôi bền vững',
  field: 'Khoa học vật nuôi / Khởi nghiệp nông nghiệp',
  slogan: 'MÀI NGỌC TỪ ĐẤT VIỆT',
  subCopy: 'Từ nguồn chuối xanh chưa được khai thác hiệu quả đến giải pháp Synbiotic cho chăn nuôi bền vững.',
  institution: 'Trường Đại học Nông Lâm TP.HCM',
  competition: {
    name: 'CUỘC THI KHỞI NGHIỆP NÔNG NGHIỆP 2026',
    theme: 'SMART AGRICULTURE & DIGITAL TRANSFORMATION',
    stage: 'VÒNG CHUNG KẾT',
    organizer: 'Trường Đại học Nông Lâm TP.HCM',
    sponsors: ['ADM', 'Công ty TNHH Hoàng Lam']
  }
};

export const PROOF_STATS: StatItem[] = [
  {
    number: '45',
    label: 'CON GÀ THỬ NGHIỆM',
    subLabel: '3 nghiệm thức · 3 lần lặp'
  },
  {
    number: '35',
    label: 'NGÀY THEO DÕI',
    subLabel: 'Theo dõi sinh trưởng thực tế'
  },
  {
    number: '2.097',
    unit: 'g',
    label: 'KHỐI LƯỢNG CUỐI KỲ',
    subLabel: 'Nghiệm thức SYN-VB'
  },
  {
    number: '1,58',
    label: 'FCR – HỆ SỐ CHUYỂN ĐỔI THỨC ĂN',
    subLabel: 'Nghiệm thức SYN-VB'
  }
];

export const PRODUCT_ANATOMY: AnatomyComponent[] = [
  {
    percent: '67,5%',
    name: 'BỘT CHUỐI XANH',
    role: 'PREBIOTIC',
    description: 'Nguồn tinh bột kháng tự nhiên dồi dào, đóng vai trò cơ chất dinh dưỡng chọn lọc nuôi dưỡng hệ vi sinh vật có lợi.',
    color: '#D5A62E'
  },
  {
    percent: '22,5%',
    name: 'PROBIOTIC VI BAO',
    role: 'PROBIOTIC (Bacillus subtilis & Lactobacillus spp.)',
    description: 'Chủng lợi khuẩn được bảo vệ bằng màng bao sinh học nhằm tăng sức chống chịu trước acid dịch vị và muối mật.',
    color: '#244F42'
  },
  {
    percent: '10,0%',
    name: 'PHỤ GIA / CHẤT MANG',
    role: 'STABILIZER & CARRIER',
    description: 'Hỗ trợ đồng nhất thể chất, ổn định độ ẩm và duy trì hoạt lực của chế phẩm trong quá trình bảo quản.',
    color: '#A63A2B'
  }
];

export const DIGESTIVE_JOURNEY: DigestivePhase[] = [
  {
    phase: '01',
    organ: 'DẠ DÀY',
    time: '2 giờ',
    ph: 'pH 2,0 (Acid dịch vị)',
    freeSurvival: 32,
    synbioticSurvival: 84,
    description: 'Môi trường acid làm suy giảm mạnh probiotic tự do. Màng vi bao cùng tinh bột kháng của Thụy Việt hạn chế sự thất thoát này.'
  },
  {
    phase: '02',
    organ: 'RUỘT NON',
    time: '4 giờ',
    ph: 'pH 5,0 (Muối mật & enzyme)',
    freeSurvival: 24,
    synbioticSurvival: 79,
    description: 'Probiotic được giải phóng có kiểm soát, bắt đầu định cư và cạnh tranh vị trí bám với hại khuẩn.'
  },
  {
    phase: '03',
    organ: 'ĐẠI TRÀNG',
    time: '6 giờ',
    ph: 'pH 7,5 (Lên men ruột sau)',
    freeSurvival: 18,
    synbioticSurvival: 76,
    description: 'Tinh bột kháng lên men thành các acid béo chuỗi ngắn (SCFA), hỗ trợ tối ưu sức khỏe niêm mạc ruột.'
  }
];

export const TRIAL_TREATMENTS: TrialTreatment[] = [
  {
    code: 'ĐỐI CHỨNG',
    name: 'Khẩu phần cơ sở (ĐC)',
    desc: 'Thức ăn chuẩn không bổ sung chế phẩm',
    finalWeight: 1904,
    weightError: 34,
    fcr: 1.72,
    fcrError: 0.02,
    color: '#6B685B'
  },
  {
    code: 'SYN-TD',
    name: 'Synbiotic + Probiotic tự do',
    desc: 'Bột chuối xanh kết hợp lợi khuẩn chưa qua vi bao',
    finalWeight: 2000,
    weightError: 34,
    fcr: 1.65,
    fcrError: 0.01,
    color: '#D5A62E'
  },
  {
    code: 'SYN-VB',
    name: 'Synbiotic + Probiotic vi bao',
    desc: 'Công thức hoàn chỉnh Thụy Việt với vi bao sinh học',
    finalWeight: 2097,
    weightError: 34,
    fcr: 1.58,
    fcrError: 0.02,
    color: '#244F42'
  }
];

export const LAB_TO_FARM_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'CHUỐI XANH',
    subtitle: 'Tuyển chọn nguồn phụ phẩm chuối xanh chưa đạt chuẩn thương phẩm giàu RS',
    image: ASSETS.BANANA_RAW,
    caption: 'Chuối xanh nguyên liệu thu gom trực tiếp tại nhà vườn',
    hasPhoto: true
  },
  {
    step: '02',
    title: 'SƠ CHẾ',
    subtitle: 'Rửa sạch, loại bỏ mủ và tạp chất bề mặt',
    image: ASSETS.BANANA_WASH,
    caption: 'Làm sạch và sơ chế loại mủ tự nhiên',
    hasPhoto: true
  },
  {
    step: '03',
    title: 'XỬ LÝ',
    subtitle: 'Cắt lát với độ dày tiêu chuẩn nhằm giữ trọn tinh bột kháng',
    image: ASSETS.BANANA_SLICES,
    caption: 'Lát chuối xanh đồng đều trước khi sấy',
    hasPhoto: true
  },
  {
    step: '04',
    title: 'SẤY',
    subtitle: 'Sấy kiểm soát nhiệt độ để bảo toàn hoạt tính sinh học',
    image: ASSETS.BANANA_DRY,
    caption: 'Quy trình sấy kiểm soát nhiệt bảo toàn tinh bột kháng',
    hasPhoto: true
  },
  {
    step: '05',
    title: 'NGHIỀN – RÂY',
    subtitle: 'Nghiền mịn đạt kích thước hạt tối ưu cho phối trộn thức ăn',
    image: ASSETS.STEP_GRIND_SIEVE,
    caption: 'Thao tác nghiền và rây bột chuối xanh đạt chuẩn kích thước hạt',
    hasPhoto: true
  },
  {
    step: '06',
    title: 'PROBIOTIC VI BAO',
    subtitle: 'Bao gói Bacillus subtilis & Lactobacillus spp. bằng màng sinh học',
    image: ASSETS.LAB_PROCESS,
    caption: 'Thực nghiệm vi bao trong phòng lab NLU',
    hasPhoto: true
  },
  {
    step: '07',
    title: 'PHỐI TRỘN SYNBIOTIC',
    subtitle: 'Phối trộn prebiotic và probiotic vi bao theo tỷ lệ vàng',
    image: ASSETS.STEP_MIXING,
    caption: 'Thao tác phối trộn công thức Synbiotic tại phòng thí nghiệm',
    hasPhoto: true
  },
  {
    step: '08',
    title: 'KIỂM NGHIỆM',
    subtitle: 'Đánh giá mật độ CFU và mô phỏng hệ tiêu hóa in-vitro',
    image: ASSETS.STEP_TESTING,
    caption: 'Kiểm nghiệm vi sinh vật và đo lường hoạt tính sinh học',
    hasPhoto: true
  },
  {
    step: '09',
    title: 'THỬ NGHIỆM VẬT NUÔI',
    subtitle: 'Theo dõi in-vivo trên 45 con gà thịt qua 35 ngày',
    image: ASSETS.CHICKEN_TRIAL_01,
    caption: 'Khu vực chuồng thử nghiệm in-vivo thực tế',
    hasPhoto: true
  },
  {
    step: '10',
    title: 'PROTOTYPE',
    subtitle: 'Đóng gói quy cách thương phẩm THỤY VIỆT FEED',
    image: ASSETS.PRODUCT_PACKAGING_BOX,
    caption: 'Bao bì thương phẩm hoàn chỉnh Thụy Việt',
    hasPhoto: true
  }
];

export const CIRCULAR_VALUES = [
  {
    target: 'NGƯỜI TRỒNG CHUỐI',
    badge: 'Đầu vào bền vững',
    title: 'Tăng giá trị chuối dạt',
    desc: 'Tạo thêm hướng tiêu thụ ổn định cho lượng chuối xanh không đạt chuẩn xuất khẩu/thương mại, nâng cao thu nhập nông hộ.'
  },
  {
    target: 'TRANG TRẠI CHĂN NUÔI',
    badge: 'Giải pháp sinh học',
    title: 'Tối ưu hiệu quả chăn nuôi',
    desc: 'Tiếp cận giải pháp tự nhiên hỗ trợ sức khỏe đường ruột, cải thiện hệ số chuyển đổi thức ăn và hướng tới giảm phụ thuộc kháng sinh.'
  },
  {
    target: 'NGƯỜI TIÊU DÙNG',
    badge: 'An toàn thực phẩm',
    title: 'Sản phẩm thịt an toàn',
    desc: 'Thúc đẩy chuỗi cung ứng thực phẩm sạch, giảm nỗi lo tồn dư chất kháng sinh trong các sản phẩm thịt chăn nuôi.'
  },
  {
    target: 'MÔI TRƯỜNG',
    badge: 'Kinh tế tuần hoàn',
    title: 'Giảm phát thải nông nghiệp',
    desc: 'Tận dụng triệt để phụ phẩm nông nghiệp, biến chất thải hữu cơ tiềm ẩn thành chế phẩm sinh học giá trị cao.'
  }
];

export const HERITAGE_COLORS: HeritageColor[] = [
  {
    id: 'trang-diep',
    name: 'TRẮNG ĐIỆP',
    meaning: 'Thuần khiết & An toàn',
    hex: '#F4E8C8',
    borderHex: '#D5C49F',
    desc: 'Sắc trắng ánh xà cừ từ vỏ sò điệp nghiền mịn của tranh Đông Hồ — tượng trưng cho nguồn gốc tự nhiên, an lành và minh bạch của sản phẩm.'
  },
  {
    id: 'do-son',
    name: 'ĐỎ SON',
    meaning: 'Sinh khí & Tinh hoa nông nghiệp',
    hex: '#A63A2B',
    borderHex: '#7E2519',
    desc: 'Màu khoáng son đỏ rực rỡ — đại diện cho năng lượng sống, sức khỏe miễn dịch vật nuôi và tinh thần khởi nghiệp nhiệt huyết.'
  },
  {
    id: 'vang-hoe',
    name: 'VÀNG HÒE',
    meaning: 'Thịnh vượng & Bội thu',
    hex: '#D5A62E',
    borderHex: '#A67D16',
    desc: 'Sắc vàng từ hoa hòe dân gian — biểu trưng cho sự trù phú của đất đai, vụ mùa bội thu và thành tựu kinh tế cho nông trại.'
  },
  {
    id: 'xanh-cham',
    name: 'XANH CHÀM',
    meaning: 'Kinh tế tuần hoàn & Khoa học',
    hex: '#244F42',
    borderHex: '#143128',
    desc: 'Màu chàm từ lá cây rừng — biểu tượng của sự bền vững, công nghệ sinh học bản địa và chu trình tuần hoàn khép kín.'
  },
  {
    id: 'den-than',
    name: 'ĐEN THAN RƠM',
    meaning: 'Gốc rễ & Nền tảng thực nghiệm',
    hex: '#292820',
    borderHex: '#171612',
    desc: 'Màu đen mực in mộc bản làm từ tro than rơm nếp — tượng trưng cho dữ liệu kiểm chứng vững chắc, tính kỷ luật khoa học và cội nguồn đất mẹ.'
  }
];

export const MARKET_SURVEY_SECTIONS = [
  {
    id: 'summary',
    title: 'TỔNG QUAN KHẢO SÁT',
    subtitle: 'Nhu cầu thực tế từ các chủ trang trại & đại lý thức ăn',
    placeholder: 'DỮ LIỆU KHẢO SÁT SẼ ĐƯỢC CẬP NHẬT',
    desc: 'Nhóm đang tổng hợp dữ liệu khảo sát trực tiếp từ 60+ hộ chăn nuôi và đại lý thuốc thú y tại khu vực Đông Nam Bộ.'
  },
  {
    id: 'concern',
    title: 'MỐI QUAN TÂM LỚN NHẤT',
    subtitle: 'Chi phí thức ăn, bệnh tiêu hóa & áp lực giảm kháng sinh',
    placeholder: 'DỮ LIỆU KHẢO SÁT SẼ ĐƯỢC CẬP NHẬT',
    desc: 'Phân tích các rào cản chính khi tiếp cận chế phẩm vi sinh sinh học.'
  },
  {
    id: 'criteria',
    title: 'TIÊU CHÍ LỰA CHỌN SẢN PHẨM',
    subtitle: 'Hiệu quả thực chứng, độ ổn định & giá thành/tấn cám',
    placeholder: 'DỮ LIỆU KHẢO SÁT SẼ ĐƯỢC CẬP NHẬT',
    desc: 'Xác định các yếu tố quyết định hành vi thử nghiệm sản phẩm mới.'
  },
  {
    id: 'willingness',
    title: 'MỨC ĐỘ SẴN SÀNG THỬ NGHIỆM',
    subtitle: 'Tỷ lệ quan tâm đến giải pháp synbiotic nguồn gốc Việt',
    placeholder: 'DỮ LIỆU KHẢO SÁT SẼ ĐƯỢC CẬP NHẬT',
    desc: 'Ghi nhận phản hồi về ý tưởng tận dụng chuối xanh làm prebiotic.'
  },
  {
    id: 'format',
    title: 'QUY CÁCH ĐÓNG GÓI ƯU TIÊN',
    subtitle: 'Dạng bột trộn thức ăn 1kg - 5kg - 25kg',
    placeholder: 'DỮ LIỆU KHẢO SÁT SẼ ĐƯỢC CẬP NHẬT',
    desc: 'Định hình quy cách thương mại phù hợp với từng quy mô đàn.'
  }
];

export const BUSINESS_METRICS = {
  pricePerKg: '145.000đ/kg',
  costPerTonFeed: '≈580.000đ',
  costDosageNote: 'ở liều 4 kg/tấn thức ăn',
  year1Target: '8 TẤN',
  year1Revenue: '≈1,16 TỶ',
  breakEven: '≈12,2 TẤN/NĂM',
  year3Target: '35 TẤN',
  startupCapital: '≈780 TRIỆU ĐỒNG',
  productName: 'THỤY VIỆT FEED',
  targetCustomers: [
    'Trang trại / Hợp tác xã gà thịt quy mô vừa và lớn',
    'Doanh nghiệp sản xuất thức ăn chăn nuôi (Feedmills) tìm kiếm phụ gia sinh học',
    'Đại lý thuốc thú y & dinh dưỡng vật nuôi trong giai đoạn phân phối phù hợp'
  ],
  model: 'B2B (Business-to-Business)',
  productionPlan: [
    { year: 'Năm 1', volume: '8 tấn', revenue: '≈ 1,16 tỷ VNĐ' },
    { year: 'Năm 2', volume: '18 tấn', revenue: '≈ 2,61 tỷ VNĐ' },
    { year: 'Năm 3', volume: '35 tấn', revenue: '≈ 5,07 tỷ VNĐ' }
  ],
  note: 'Các con số trên thuộc mô hình kế hoạch kinh doanh và cần tiếp tục được kiểm chứng khi thương mại hóa.'
};

export const WHAT_NEEDS_PROOF = [
  {
    number: '01',
    tag: 'VALIDATION',
    title: 'Mở rộng quy mô & điều kiện kiểm chứng',
    desc: 'Tiếp tục tiến hành các thử nghiệm in-vivo trên các lứa nuôi tiếp theo, mở rộng sang các đối tượng gia súc/thủy sản và kiểm tra trong các điều kiện tiểu khí hậu chuồng trại đa dạng.'
  },
  {
    number: '02',
    tag: 'STABILITY & QUALITY',
    title: 'Độ ổn định & Kiểm soát chất lượng',
    desc: 'Đánh giá độ ổn định của màng vi bao và tỷ lệ sống của probiotic theo thời gian bảo quản (real-time shelf-life), nhiệt độ và độ ẩm bảo quản thực tế.'
  },
  {
    number: '03',
    tag: 'COMMERCIALIZATION',
    title: 'Hiệu quả kinh tế thực tế',
    desc: 'Kiểm chứng hiệu quả kinh tế trên quy mô đàn thương phẩm thực tế, hoàn thiện quy trình sản xuất bán công nghiệp và tối ưu chi phí nguyên liệu.'
  }
];

export const JOURNEY_TIMELINE = [
  {
    id: 'idea',
    title: 'Ý TƯỞNG',
    desc: 'Nhận diện vấn đề chuối xanh dạt và bài toán kháng sinh trong chăn nuôi.',
    status: 'completed'
  },
  {
    id: 'banana-research',
    title: 'NGHIÊN CỨU CHUỐI XANH',
    desc: 'Tối ưu hóa quy trình thu hồi tinh bột kháng từ phụ phẩm chuối xanh.',
    status: 'completed'
  },
  {
    id: 'prototype',
    title: 'PROTOTYPE SYNBIOTIC',
    desc: 'Tạo công thức phối trộn bột chuối xanh và probiotic.',
    status: 'completed'
  },
  {
    id: 'in-vitro',
    title: 'IN-VITRO',
    desc: 'Mô phỏng khả năng sống sót của vi bao qua hệ tiêu hóa nhân tạo.',
    status: 'completed'
  },
  {
    id: 'in-vivo',
    title: 'IN-VIVO (45 GÀ)',
    desc: 'Thử nghiệm thực tế 35 ngày thu được kết quả khối lượng 2.097g, FCR 1,58.',
    status: 'completed'
  },
  {
    id: 'knnn-2026',
    title: 'KHỞI NGHIỆP NÔNG NGHIỆP 2026',
    desc: 'Tham gia cuộc thi Khởi nghiệp Nông nghiệp do ĐH Nông Lâm TP.HCM tổ chức.',
    status: 'completed'
  },
  {
    id: 'semifinals',
    title: 'VÒNG CHUNG KẾT',
    desc: 'Trình bày giải pháp và bảo vệ dự án tại vòng Chung kết – Chúng tôi đang ở đây.',
    status: 'current',
    isCurrent: true
  },
  {
    id: 'refinement',
    title: 'HOÀN THIỆN',
    desc: 'Hoàn thiện công nghệ vi bao và tiêu chuẩn hóa quy trình sản xuất.',
    status: 'future'
  },
  {
    id: 'scale-validation',
    title: 'KIỂM CHỨNG MỞ RỘNG',
    desc: 'Thực hiện kiểm chứng mở rộng trên các quy mô đàn lớn hơn.',
    status: 'future'
  },
  {
    id: 'commercialization',
    title: 'THƯƠNG MẠI HÓA',
    desc: 'Đăng ký lưu hành sản phẩm và tiếp cận đối tác B2B trang trại.',
    status: 'future'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'toan',
    name: 'LÂM THANH TOÀN',
    major: 'Bác sĩ Thú y',
    role: 'PROJECT LEAD · ANIMAL HEALTH',
    roleDetails: [
      'Chủ nhiệm dự án DA55',
      'Nghiên cứu thử nghiệm in-vivo gia cầm',
      'Đánh giá hiệu quả thú y & chỉ tiêu chăn nuôi'
    ],
    institution: 'Trường Đại học Nông Lâm TP.HCM',
    image: ASSETS.TEAM_TOAN_IMAGE
  },
  {
    id: 'duy',
    name: 'PHẠM ĐỨC DUY',
    major: 'Kỹ thuật Hóa học',
    role: 'R&D · MICROENCAPSULATION',
    roleDetails: [
      'Nghiên cứu công nghệ vi bao Probiotic',
      'Thu hồi tinh bột kháng RS từ chuối',
      'Đánh giá mô phỏng in-vitro tiêu hóa'
    ],
    institution: 'Trường Đại học Nông Lâm TP.HCM',
    image: ASSETS.TEAM_DUY_IMAGE
  },
  {
    id: 'thao',
    name: 'PHAN NGỌC THANH THẢO',
    major: 'Nông học',
    role: 'MARKETING · BRAND COMMUNICATIONS',
    roleDetails: [
      'Xây dựng chiến lược Marketing cho dự án',
      'Phát triển thương hiệu và nội dung truyền thông',
      'Phân tích khách hàng và kế hoạch tiếp cận thị trường'
    ],
    institution: 'Trường Đại học Nông Lâm TP.HCM',
    image: ASSETS.TEAM_THAO_IMAGE
  },
  {
    id: 'tien',
    name: 'TÔ THANH TIỀN',
    major: 'Nuôi trồng Thủy sản',
    role: 'BUSINESS PLANNING · DIGITAL PRODUCT',
    roleDetails: [
      'Xây dựng kế hoạch và mô hình kinh doanh',
      'Phát triển website và trải nghiệm số dự án',
      'Định hướng phát triển và thương mại hóa'
    ],
    institution: 'Trường Đại học Nông Lâm TP.HCM',
    image: ASSETS.TEAM_TIEN_IMAGE
  }
];

export const PROJECT_CONTACT: ProjectContact = {
  code: 'DA55',
  name: 'THỤY VIỆT',
  institution: 'Trường Đại học Nông Lâm TP.HCM',
  email: 'thuyviet.da55@gmail.com',
  phone: 'Liên hệ qua QR đại diện',
  facebook: '',
  website: '',
  socialOther: '',
  qrCodeLink: ASSETS.QR_REPRESENTATIVE
};
