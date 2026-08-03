import type { PostBlock } from '../data/bai-viet';

/**
 * Thời gian đọc — tính lúc build, không phải gõ tay.
 *
 * CSS không làm được việc này vì phải đếm chữ. Khi nối WordPress, đổi tham số
 * đầu vào từ PostBlock[] sang chuỗi HTML của `content.rendered` rồi bóc thẻ ra
 * trước khi đếm; phần chia tốc độ đọc giữ nguyên.
 *
 * 200 từ/phút là mức đọc tiếng Việt trên màn hình của người đọc phổ thông —
 * cố tình chọn thấp hơn tốc độ đọc lướt để con số không hứa hão.
 */
const WORDS_PER_MINUTE = 200;

function blockText(block: PostBlock): string {
  switch (block.type) {
    case 'ul':
    case 'ol':
      return block.items.join(' ');
    case 'figure':
      return block.caption;
    case 'table':
      return [...block.head, ...block.rows.flat()].join(' ');
    default:
      return block.text;
  }
}

export function countWords(blocks: PostBlock[]): number {
  const text = blocks.map(blockText).join(' ').trim();
  return text ? text.split(/\s+/).length : 0;
}

export function readingMinutes(blocks: PostBlock[]): number {
  return Math.max(1, Math.round(countWords(blocks) / WORDS_PER_MINUTE));
}

export function readingTimeLabel(blocks: PostBlock[]): string {
  return `${readingMinutes(blocks)} phút đọc`;
}
