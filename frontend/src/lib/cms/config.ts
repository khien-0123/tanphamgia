/** Cấu hình CMS Headless WordPress — chỉ đọc env lúc build/dev */

export function getWordpressGraphqlUrl(): string | undefined {
  const url = import.meta.env.WORDPRESS_GRAPHQL_URL?.trim();
  return url || undefined;
}

/** true khi đã khai báo endpoint — pages thử fetch WP trước, lỗi thì fallback local */
export function isCmsEnabled(): boolean {
  return Boolean(getWordpressGraphqlUrl());
}

export function getWordpressImageHostname(): string | undefined {
  const host = import.meta.env.WORDPRESS_IMAGE_HOSTNAME?.trim();
  if (host) return host.replace(/^https?:\/\//, '').replace(/\/$/, '');

  const graphqlUrl = getWordpressGraphqlUrl();
  if (!graphqlUrl) return undefined;
  try {
    return new URL(graphqlUrl).hostname;
  } catch {
    return undefined;
  }
}
