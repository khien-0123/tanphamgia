import type { PostBlock } from '../data/bai-viet';

export interface TocItem {
  id: string;
  label: string;
}

/**
 * Mục lục sinh LÚC BUILD.
 *
 * WordPress không tự gắn `id` cho thẻ h2 — không có `id` thì không có chỗ để
 * nhảy tới. Bản cũ sinh mục lục bằng JavaScript phía trình duyệt, nghĩa là nó
 * không tồn tại với Google và với người tắt JS. Sinh ở đây thì nó nằm sẵn
 * trong HTML tĩnh.
 *
 * Khi nối WordPress: đổi đầu vào từ PostBlock[] sang chuỗi `content.rendered`,
 * bóc thẻ h2 ra rồi chèn `id` ngược lại vào HTML — phần slugify giữ nguyên.
 */
export function slugifyVi(text: string): string {
  return text
    .normalize('NFD')
    /* Tách dấu ra khỏi nguyên âm rồi xoá — 'ế' thành 'e'. Dùng \p{Diacritic}
       thay cho dải mã tổ hợp để mã nguồn không chứa ký tự vô hình. */
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[đĐ]/g, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function buildToc(blocks: PostBlock[]): {
  items: TocItem[];
  idByIndex: Map<number, string>;
} {
  const items: TocItem[] = [];
  const idByIndex = new Map<number, string>();
  const used = new Map<string, number>();

  blocks.forEach((block, index) => {
    if (block.type !== 'h2') return;

    const base = slugifyVi(block.text) || 'muc';
    /* Hai tiêu đề trùng chữ sẽ ra trùng id, neo sẽ nhảy sai chỗ.
       Đánh số từ lần thứ hai trở đi. */
    const count = (used.get(base) ?? 0) + 1;
    used.set(base, count);
    const id = count === 1 ? base : `${base}-${count}`;

    idByIndex.set(index, id);
    items.push({ id, label: block.text });
  });

  return { items, idByIndex };
}
