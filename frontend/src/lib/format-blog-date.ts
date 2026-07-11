/** Định dạng ngày đăng bài — hiển thị trên thẻ tin tức */
export function formatBlogDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return '';

  return date
    .toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' })
    .toUpperCase();
}
