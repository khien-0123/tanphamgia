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

export function caseStudyHref(solutionSlug: string, projectSlug: string): string {
  return `${routes.giaiPhap}/${solutionSlug}/du-an/${projectSlug}`;
}

export function blogPostHref(slug: string): string {
  return `${routes.tinTuc}/${slug}`;
}

export function blogPageHref(page: number): string {
  return page <= 1 ? routes.tinTuc : `${routes.tinTuc}/trang/${page}`;
}

/**
 * Trang thư viện tài liệu. `category` là 'all' thì dùng route gốc /tai-lieu,
 * còn lại đi qua /tai-lieu/danh-muc/<slug> — nhờ vậy lọc nhóm và phân trang
 * không giẫm chân nhau khi thư viện vượt quá một trang.
 */
export function docLibraryHref(category: string, page = 1): string {
  const base = category === 'all' ? routes.taiLieu : `${routes.taiLieu}/danh-muc/${category}`;
  return page <= 1 ? base : `${base}/trang/${page}`;
}

export function solutionAnchorHref(solutionSlug: string, anchor: string): string {
  return `${solutionHref(solutionSlug)}#${anchor}`;
}
