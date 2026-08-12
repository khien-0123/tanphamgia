/**
 * Map bài WP → BlogPost nội bộ.
 * ACF (badge, …) gắn thêm khi Field Group đã Show in GraphQL.
 */

import type { BlogPost } from '../../../data/site';
import { blogPostHref } from '../../routes';
import type { WpPostNode } from '../wp-types';

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function toIsoDate(date: string | null | undefined): string {
  if (!date) return new Date().toISOString().slice(0, 10);
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date.slice(0, 10);
  return d.toISOString().slice(0, 10);
}

export function mapWpPostToBlogPost(node: WpPostNode): BlogPost | null {
  const slug = node.slug?.trim();
  const title = node.title?.trim();
  if (!slug || !title) return null;

  const category =
    node.categories?.nodes?.find((c) => c?.name?.trim())?.name?.trim() || 'Tin tức';
  const image = node.featuredImage?.node?.sourceUrl?.trim() || '';
  const alt = node.featuredImage?.node?.altText?.trim() || title;

  return {
    slug,
    title,
    excerpt: stripHtml(node.excerpt ?? '') || title,
    category,
    publishedAt: toIsoDate(node.date),
    image,
    alt,
    href: blogPostHref(slug),
  };
}
