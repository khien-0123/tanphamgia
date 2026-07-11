/** Metric tách từ chuỗi stats dự án */
export interface CaseStudyStat {
  value: string;
  label: string;
}

/**
 * Tách chuỗi stats pipe-separated thành value + label.
 * Ví dụ: "950 sản phẩm | 40 ngày triển khai | Đối tác 2 năm"
 */
export function parseCaseStudyStats(stats: string): CaseStudyStat[] {
  return stats
    .split('|')
    .map((part) => part.trim())
    .filter(Boolean)
    .map(parseStatSegment);
}

function parseStatSegment(part: string): CaseStudyStat {
  // Số đứng đầu: "950 sản phẩm", "500+ sản phẩm", "1.086 sản phẩm"
  const numberFirst = part.match(/^([\d.,+]+\+?)\s+(.+)$/);
  if (numberFirst) {
    return { value: numberFirst[1], label: numberFirst[2] };
  }

  // Số + đơn vị ngày: "45 ngày triển khai"
  const daysFirst = part.match(/^(\d+)\s+ngày\s+(.+)$/i);
  if (daysFirst) {
    return { value: `${daysFirst[1]} ngày`, label: daysFirst[2] };
  }

  // Năm ở cuối: "Đối tác 2 năm", "Hợp tác hơn 4 năm"
  const yearsLast = part.match(/^(.+?)\s+(\d+\s+năm)$/i);
  if (yearsLast) {
    return { value: yearsLast[2], label: yearsLast[1] };
  }

  // "Đối tác hơn 5 năm" — có từ xen giữa
  const yearsFlexible = part.match(/^(.+?)\s+(hơn\s+\d+\s+năm|\d+\+\s+năm)$/i);
  if (yearsFlexible) {
    return { value: yearsFlexible[2], label: yearsFlexible[1] };
  }

  return { value: part, label: '' };
}
