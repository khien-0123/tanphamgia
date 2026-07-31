/**
 * Keyword ngắn cho lưới thẻ ngành ở /giai-phap.
 *
 * Bullet gốc trong `data/site.ts` dài tới 60 ký tự — vừa cột nội dung, KHÔNG vừa thẻ ảnh
 * rộng 411px. Đây là bản nén, giữ nguyên ý, cắt bớt chữ đệm.
 *
 * Slug không có ở đây sẽ tự lấy `homeBullets` (nếu có), rồi mới đến 3 bullet đầu.
 * `giai-phap-3` cố tình để trống vì `homeBullets` của nó đã đủ ngắn.
 *
 * TODO gộp vào `data/site.ts` thành field `listingBullets` khi nhánh của đồng đội đã merge —
 * để riêng file này lúc này chỉ để tránh sửa cùng lúc một file.
 */
export const listingKeywords: Record<string, string[]> = {
  // cả 3 lấy nguyên văn bullets[0], [2], [3]
  'giai-phap-1': [
    'Tuân thủ an toàn lao động',
    'Đồng nhất hình ảnh thương hiệu',
    'Tăng tuổi thọ đồng phục',
  ],
  // 2 dòng đầu nguyên văn; dòng 3 nén từ 'Tự tin, thoải mái và tự hào khi mặc trên 12 tiếng/ngày'
  'giai-phap-2': [
    'Xây dựng nhận diện thương hiệu',
    'Hình ảnh chuyên nghiệp, nhất quán',
    'Thoải mái khi mặc 12 tiếng/ngày',
  ],
  // cả 3 dòng đều nén — bullet gốc đều trên 45 ký tự
  'giai-phap-4': [
    'Phù hợp môi trường đặc thù',
    'Thoải mái, linh hoạt, thẩm mỹ',
    'Tăng tuổi thọ đồng phục',
  ],
};
