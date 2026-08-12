/**
 * API Tin tức — CMS trước, lỗi/tắt CMS thì data local.
 */

import { getPostBody } from '../../data/bai-viet';
import { blogPosts, type BlogPost } from '../../data/site';
import { wpGraphql } from './client';
import { isCmsEnabled } from './config';
import { mapWpPostToBlogPost } from './mappers/post';
import { POST_BY_SLUG_QUERY, POSTS_LIST_QUERY } from './queries/posts';
import type { BlogPostDetail } from './types';
import type { WpPostNode } from './wp-types';

interface PostsListData {
  posts?: { nodes?: Array<WpPostNode | null> | null } | null;
}

interface PostBySlugData {
  post?: WpPostNode | null;
}

/** Cache trong một lần build — tránh N lần gọi list */
let listCache: Promise<BlogPost[]> | null = null;

function localDetail(slug: string): BlogPostDetail | null {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return null;
  return { post, blocks: getPostBody(slug) };
}

/** Danh sách bài — listing + getStaticPaths */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!isCmsEnabled()) return blogPosts;

  if (!listCache) {
    listCache = (async () => {
      try {
        const data = await wpGraphql<PostsListData>(POSTS_LIST_QUERY, { first: 100 });
        const mapped = (data.posts?.nodes ?? [])
          .filter((n): n is WpPostNode => Boolean(n))
          .map(mapWpPostToBlogPost)
          .filter((p): p is BlogPost => Boolean(p));

        if (mapped.length === 0) {
          console.warn('[cms] WP không có bài publish — dùng blogPosts local');
          return blogPosts;
        }
        return mapped;
      } catch (err) {
        console.warn('[cms] getAllBlogPosts fallback local:', err);
        return blogPosts;
      }
    })();
  }

  return listCache;
}

/** Chi tiết một bài theo slug */
export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  if (!isCmsEnabled()) return localDetail(slug);

  try {
    const data = await wpGraphql<PostBySlugData>(POST_BY_SLUG_QUERY, { slug });
    const node = data.post;
    if (!node) {
      console.warn(`[cms] Không thấy post slug="${slug}" — thử local`);
      return localDetail(slug);
    }
    const post = mapWpPostToBlogPost(node);
    if (!post) return localDetail(slug);

    const contentHtml = node.content?.trim() || undefined;
    return {
      post,
      blocks: contentHtml ? [] : getPostBody(slug),
      contentHtml,
    };
  } catch (err) {
    console.warn(`[cms] getBlogPostBySlug(${slug}) fallback local:`, err);
    return localDetail(slug);
  }
}
