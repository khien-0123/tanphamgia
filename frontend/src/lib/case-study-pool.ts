/** Gom dự án từ 4 nhóm giải pháp — lookup theo slug (URL /khach-hang/du-an/:slug) */
import { duAnGiaiPhap1 } from '../data/giai-phap-1-du-an';
import { duAnGiaiPhap2 } from '../data/giai-phap-2-du-an';
import { duAnGiaiPhap3 } from '../data/giai-phap-3-du-an';
import { duAnGiaiPhap4 } from '../data/giai-phap-4-du-an';
import type { CaseStudyProject } from './case-study-types';

export interface PooledCaseStudy {
  slug: string;
  name: string;
  field?: string;
  image: string;
  solutionId: 1 | 2 | 3 | 4;
  solutionSlug: string;
  project: CaseStudyProject;
}

const toPooled = (
  items: CaseStudyProject[],
  solutionId: 1 | 2 | 3 | 4,
  solutionSlug: string,
): PooledCaseStudy[] =>
  items.map((project) => ({
    slug: project.slug,
    name: project.name,
    field: project.field,
    image: project.image,
    solutionId,
    solutionSlug,
    project,
  }));

/** Thứ tự ưu tiên khi slug trùng (vd. savisco ở GP2 & GP3) — bản đầu thắng */
const CASE_STUDY_POOL_RAW: PooledCaseStudy[] = [
  ...toPooled(duAnGiaiPhap1, 1, 'giai-phap-1'),
  ...toPooled(duAnGiaiPhap2, 2, 'giai-phap-2'),
  ...toPooled(duAnGiaiPhap3, 3, 'giai-phap-3'),
  ...toPooled(duAnGiaiPhap4, 4, 'giai-phap-4'),
];

/** Danh sách slug unique — dùng getStaticPaths */
export const CASE_STUDY_POOL: PooledCaseStudy[] = (() => {
  const seen = new Set<string>();
  const unique: PooledCaseStudy[] = [];
  for (const item of CASE_STUDY_POOL_RAW) {
    if (seen.has(item.slug)) continue;
    seen.add(item.slug);
    unique.push(item);
  }
  return unique;
})();

export function getCaseStudyBySlug(slug: string): PooledCaseStudy | undefined {
  return CASE_STUDY_POOL.find((item) => item.slug === slug);
}

/** Lấy tối đa `limit` dự án khác (không gắn nhóm giải pháp trên UI) */
export function getOtherCaseStudies(currentSlug: string, limit = 4): PooledCaseStudy[] {
  return CASE_STUDY_POOL.filter((item) => item.slug !== currentSlug).slice(0, limit);
}
