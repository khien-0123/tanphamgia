import { siteAssets } from './assets';

/** Hồ sơ tác giả mặc định — sau này đồng bộ từ WordPress / user meta */
export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  avatarAlt: string;
  verifiedLabel: string;
}

export const defaultBlogAuthor: BlogAuthor = {
  name: 'Đội ngũ Tân Phạm Gia',
  role: 'Chuyên gia đồng phục doanh nghiệp',
  bio: 'Hơn 23 năm tư vấn và sản xuất đồng phục B2B — từ khảo sát hiện trạng, thiết kế form–màu đến QC và bàn giao quy mô lớn.',
  avatar: siteAssets.about.leaderPortrait,
  avatarAlt: 'Chân dung chuyên gia Tân Phạm Gia',
  verifiedLabel: 'Đã kiểm duyệt nội dung',
};

export interface BlogRatingAggregate {
  sum: number;
  count: number;
}
