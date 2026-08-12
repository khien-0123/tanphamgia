/** Kiểu thô từ WPGraphQL — chỉ dùng trong lib/cms */

export interface WpImageNode {
  sourceUrl?: string | null;
  altText?: string | null;
}

export interface WpCategoryNode {
  name?: string | null;
  slug?: string | null;
}

export interface WpPostNode {
  databaseId?: number | null;
  slug?: string | null;
  title?: string | null;
  date?: string | null;
  excerpt?: string | null;
  content?: string | null;
  categories?: { nodes?: WpCategoryNode[] | null } | null;
  featuredImage?: { node?: WpImageNode | null } | null;
}
