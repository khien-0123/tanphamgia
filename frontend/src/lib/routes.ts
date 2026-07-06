/** Đường dẫn nội bộ — single source of truth (path tương đối, không phụ thuộc domain) */

export const routes = {
  home: '/',
  gioiThieu: '/gioi-thieu',
  giaiPhap: '/giai-phap',
  khachHang: '/khach-hang',
  tinTuc: '/tin-tuc',
  taiLieu: '/tai-lieu',
  lienHe: '/lien-he',
} as const;

export function solutionHref(slug: string): string {
  return `${routes.giaiPhap}/${slug}`;
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

export function solutionAnchorHref(solutionSlug: string, anchor: string): string {
  return `${solutionHref(solutionSlug)}#${anchor}`;
}
