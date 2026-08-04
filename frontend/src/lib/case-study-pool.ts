/** Gom dự án từ 4 nhóm giải pháp — dùng section Dự án khác */
import { duAnGiaiPhap1 } from '../data/giai-phap-1-du-an';
import { duAnGiaiPhap2 } from '../data/giai-phap-2-du-an';
import { duAnGiaiPhap3 } from '../data/giai-phap-3-du-an';
import { duAnGiaiPhap4 } from '../data/giai-phap-4-du-an';

export interface PooledCaseStudy {
  slug: string;
  name: string;
  field?: string;
  image: string;
  solutionSlug: string;
}

const toPooled = (
  items: { slug: string; name: string; field?: string; image: string }[],
  solutionSlug: string,
): PooledCaseStudy[] => items.map(({ slug, name, field, image }) => ({ slug, name, field, image, solutionSlug }));

const CASE_STUDY_POOL: PooledCaseStudy[] = [
  ...toPooled(duAnGiaiPhap1, 'giai-phap-1'),
  ...toPooled(duAnGiaiPhap2, 'giai-phap-2'),
  ...toPooled(duAnGiaiPhap3, 'giai-phap-3'),
  ...toPooled(duAnGiaiPhap4, 'giai-phap-4'),
];

/** Lấy tối đa `limit` dự án khác — ưu tiên cùng nhóm giải pháp, bổ sung từ nhóm khác */
export function getOtherCaseStudies(
  currentSolutionSlug: string,
  currentSlug: string,
  limit = 4,
): PooledCaseStudy[] {
  const isCurrent = (item: PooledCaseStudy) =>
    item.slug === currentSlug && item.solutionSlug === currentSolutionSlug;

  const sameGroup = CASE_STUDY_POOL.filter(
    (item) => item.solutionSlug === currentSolutionSlug && !isCurrent(item),
  );
  const otherGroups = CASE_STUDY_POOL.filter(
    (item) => item.solutionSlug !== currentSolutionSlug && !isCurrent(item),
  );

  return [...sameGroup, ...otherGroups].slice(0, limit);
}
