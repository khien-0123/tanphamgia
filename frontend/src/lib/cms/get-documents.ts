/**
 * API Tài liệu — STUB: luôn trả data local.
 * Khi VPS có CPT `document` + ACF: bỏ early-return, map từ DOCUMENTS_LIST_QUERY.
 */

import {
  allDocuments,
  type DocumentItem,
} from '../../data/tai-lieu';
import { isCmsEnabled } from './config';
// import { wpGraphql } from './client';
// import { DOCUMENTS_LIST_QUERY } from './queries/documents';

/** Danh sách tài liệu (hiện = local) */
export async function getAllDocuments(): Promise<DocumentItem[]> {
  if (!isCmsEnabled()) return allDocuments;

  // TODO(VPS): fetch DOCUMENTS_LIST_QUERY + mapper → DocumentItem[]
  // try { ... } catch { fallback allDocuments }
  console.info('[cms:stub] getAllDocuments → data local (chưa bật fetch WP)');
  return allDocuments;
}

export async function getDocumentById(id: string): Promise<DocumentItem | null> {
  const docs = await getAllDocuments();
  return docs.find((d) => d.id === id) ?? null;
}
