/**
 * API Case study / Khách hàng — STUB: luôn trả data local.
 * Khi VPS có CPT `case_study` + ACF: bật CASE_STUDIES_LIST_QUERY + mapper.
 */

import { clientCaseStudies, type ClientCaseStudy } from '../../data/site';
import { isCmsEnabled } from './config';
// import { wpGraphql } from './client';
// import { CASE_STUDIES_LIST_QUERY } from './queries/case-studies';

export async function getAllCaseStudies(): Promise<ClientCaseStudy[]> {
  if (!isCmsEnabled()) return clientCaseStudies;

  console.info('[cms:stub] getAllCaseStudies → data local (chưa bật fetch WP)');
  return clientCaseStudies;
}

export async function getCaseStudyBySlug(slug: string): Promise<ClientCaseStudy | null> {
  const list = await getAllCaseStudies();
  return list.find((item) => item.slug === slug) ?? null;
}
