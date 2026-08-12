/** Kiểu kết quả CMS cho tầng page — tách khỏi schema GraphQL thô */

import type { BlogPost } from '../../data/site';
import type { PostBlock } from '../../data/bai-viet';

export interface BlogPostDetail {
  post: BlogPost;
  /** Thân bài từ data local (blocks) */
  blocks: PostBlock[];
  /** Thân bài HTML từ WordPress — ưu tiên khi có */
  contentHtml?: string;
}

/** Trạng thái nối CMS từng module */
export type CmsModuleStatus = 'live' | 'stub';

export interface CmsModuleInfo {
  id: string;
  label: string;
  status: CmsModuleStatus;
  /** File data local dùng làm fallback */
  localFallback: string;
  note: string;
}
