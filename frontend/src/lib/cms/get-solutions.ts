/**
 * API Giải pháp — STUB: luôn trả data local.
 * Khi VPS có CPT `solution` + ACF: bật SOLUTIONS_LIST_QUERY + mapper.
 */

import { solutions } from '../../data/site';
import { isCmsEnabled } from './config';
// import { wpGraphql } from './client';
// import { SOLUTIONS_LIST_QUERY } from './queries/solutions';

export type SolutionCard = (typeof solutions)[number];

export async function getAllSolutions(): Promise<SolutionCard[]> {
  if (!isCmsEnabled()) return [...solutions];

  console.info('[cms:stub] getAllSolutions → data local (chưa bật fetch WP)');
  return [...solutions];
}

export async function getSolutionBySlug(slug: string): Promise<SolutionCard | null> {
  const list = await getAllSolutions();
  return list.find((item) => item.slug === slug) ?? null;
}
