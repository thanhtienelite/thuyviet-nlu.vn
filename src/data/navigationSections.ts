export interface NavSection {
  id: string;
  number: string;
  label: string;
  title: string;
}

export const NAVIGATION_SECTIONS: NavSection[] = [
  { id: 'thuy-viet', number: '01', label: 'Thụy Việt', title: 'Tổng quan dự án DA55' },
  { id: 'buoc-ngoat', number: '02', label: 'Bước ngoặt', title: 'Khởi điểm Thụy Việt' },
  { id: 'khoa-hoc', number: '03', label: 'Cấu trúc', title: 'Công thức Synbiotic' },
  { id: 'vi-sao-synbiotic', number: '04', label: 'Synbiotic', title: 'So sánh cơ chế sinh học' },
  { id: 'mo-phong-tieu-hoa', number: '05', label: 'Tiêu hóa', title: 'Mô phỏng In-vitro' },
  { id: 'kinh-te-tuan-hoan', number: '06', label: 'Tuần hoàn', title: 'Giá trị kinh tế tuần hoàn' },
  { id: 'cau-chuyen', number: '07', label: 'Bản sắc', title: 'Mỹ học dân gian Đông Hồ' },
  { id: 'khao-sat-thi-truong', number: '08', label: 'Thị trường', title: 'Khảo sát khách hàng' },
  { id: 'kinh-doanh', number: '09', label: 'Mô hình B2B', title: 'Mô hình kinh doanh B2B' },
  { id: 'lo-trinh-kiem-chung', number: '10', label: 'Minh bạch', title: 'Khoa học trung thực' },
  { id: 'lo-trinh-phat-trien', number: '11', label: 'Lộ trình', title: 'Cột mốc phát triển' },
  { id: 'doi-ngu', number: '12', label: 'Đội ngũ', title: '4 Sáng lập viên NLU' },
  { id: 'lien-he', number: '13', label: 'Liên hệ', title: 'Kết nối & Ban tổ chức' },
];
