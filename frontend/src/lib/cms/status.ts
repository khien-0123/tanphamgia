/**
 * Trạng thái nối CMS theo module.
 * live = đã fetch GraphQL + fallback; stub = API sẵn, vẫn đọc data local.
 */

import type { CmsModuleInfo } from './types';

export const cmsModules: CmsModuleInfo[] = [
  {
    id: 'posts',
    label: 'Tin tức',
    status: 'live',
    localFallback: 'src/data/site.ts (blogPosts) + bai-viet.ts',
    note: 'Đã nối WP Post. Có WORDPRESS_GRAPHQL_URL thì lấy WP.',
  },
  {
    id: 'documents',
    label: 'Tài liệu',
    status: 'stub',
    localFallback: 'src/data/tai-lieu.ts',
    note: 'Chờ CPT document + ACF trên VPS rồi bật query trong get-documents.ts',
  },
  {
    id: 'solutions',
    label: 'Giải pháp',
    status: 'stub',
    localFallback: 'src/data/site.ts (solutions) + giai-phap-*.ts',
    note: 'Chờ CPT solution + ACF trên VPS',
  },
  {
    id: 'caseStudies',
    label: 'Khách hàng / Case study',
    status: 'stub',
    localFallback: 'src/data/site.ts (clientCaseStudies) + giai-phap-*-du-an.ts',
    note: 'Chờ CPT case_study + ACF trên VPS',
  },
];
