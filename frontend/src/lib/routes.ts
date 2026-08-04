/** Đường dẫn nội bộ — single source of truth (path tương đối, không phụ thuộc domain) */

export const routes = {
  home: '/',
  gioiThieu: '/gioi-thieu',
  dichVu: '/dich-vu',
  giaiPhap: '/giai-phap',
  khachHang: '/khach-hang',
  tinTuc: '/tin-tuc',
  taiLieu: '/tai-lieu',
  lienHe: '/lien-he',
} as const;

export function solutionHref(slug: string): string {
  return `${routes.giaiPhap}/${slug}`;
}

export function serviceHref(slug: string): string {
  return `${routes.dichVu}/${slug}`;
}

export function caseStudyHref(projectSlug: string): string {
  return `${routes.khachHang}/du-an/${projectSlug}`;
}

export function blogPostHref(slug: string): string {
  return `${routes.tinTuc}/${slug}`;
}

export function blogPageHref(page: number): string {
  return page <= 1 ? routes.tinTuc : `${routes.tinTuc}/trang/${page}`;
}

/** Slug URL cho tên chuyên mục tin tức (vd. «Kiến thức đồng phục» → kien-thuc-dong-phuc) */
export function blogCategorySlug(label: string): string {
  return label
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/gi, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Trang listing tin tức theo chuyên mục + trang.
 * `category` = 'all' hoặc nhãn chuyên mục gốc (không phải slug).
 */
export function blogLibraryHref(category: string, page = 1): string {
  const base =
    category === 'all' ? routes.tinTuc : `${routes.tinTuc}/danh-muc/${blogCategorySlug(category)}`;
  return page <= 1 ? base : `${base}/trang/${page}`;
}

/**
 * Trang thư viện tài liệu. `category` là 'all' thì dùng route gốc /tai-lieu,
 * còn lại đi qua /tai-lieu/danh-muc/<slug>.
 * Không gắn hash — lọc client-side, tránh scroll/nháy khi đổi danh mục.
 */
export function docLibraryHref(category: string, page = 1): string {
  const base = category === 'all' ? routes.taiLieu : `${routes.taiLieu}/danh-muc/${category}`;
  return page <= 1 ? base : `${base}/trang/${page}`;
}

export function solutionAnchorHref(solutionSlug: string, anchor: string): string {
  return `${solutionHref(solutionSlug)}#${anchor}`;
}
