/**
 * Client GraphQL tới Headless WordPress.
 * “Đường vận chuyển” — UI không gọi trực tiếp.
 */

import { getWordpressGraphqlUrl } from './config';

export class CmsRequestError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = 'CmsRequestError';
  }
}

interface GraphqlEnvelope<T> {
  data?: T;
  errors?: { message: string }[];
}

const DEFAULT_TIMEOUT_MS = 12_000;

export async function wpGraphql<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: { timeoutMs?: number },
): Promise<T> {
  const endpoint = getWordpressGraphqlUrl();
  if (!endpoint) {
    throw new CmsRequestError('Thiếu WORDPRESS_GRAPHQL_URL — chưa bật CMS');
  }

  const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new CmsRequestError(`WPGraphQL HTTP ${res.status}`, res.status);
    }

    const json = (await res.json()) as GraphqlEnvelope<T>;
    if (json.errors?.length) {
      throw new CmsRequestError(json.errors.map((e) => e.message).join('; '));
    }
    if (json.data === undefined) {
      throw new CmsRequestError('WPGraphQL không trả data');
    }
    return json.data;
  } catch (err) {
    if (err instanceof CmsRequestError) throw err;
    if (err instanceof Error && err.name === 'AbortError') {
      throw new CmsRequestError(`WPGraphQL timeout sau ${timeoutMs}ms`);
    }
    throw new CmsRequestError(err instanceof Error ? err.message : 'Lỗi gọi WPGraphQL');
  } finally {
    clearTimeout(timer);
  }
}
