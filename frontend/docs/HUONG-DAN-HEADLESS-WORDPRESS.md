# Hướng dẫn Headless WordPress + Astro (WPGraphQL + ACF)

WordPress = kho nội dung · Astro = mặt tiền · GraphQL = đường vận chuyển.

Plugin: **WPGraphQL** + **ACF** + **WPGraphQL for ACF**.

---

## Setup file trong repo (đã có)

```text
src/lib/cms/
  config.ts              # đọc WORDPRESS_GRAPHQL_URL
  client.ts              # fetch GraphQL + timeout
  get-posts.ts           # Tin tức — LIVE (có URL thì lấy WP)
  get-documents.ts       # Tài liệu — STUB → local
  get-solutions.ts       # Giải pháp — STUB → local
  get-case-studies.ts    # Case study — STUB → local
  queries/               # Query GraphQL sẵn (khớp ACF khi có VPS)
  mappers/post.ts
  status.ts              # xem module nào live / stub
  index.ts
```

**Chưa có VPS:** để trống `WORDPRESS_GRAPHQL_URL` → mọi thứ dùng `src/data/*`.

**Có VPS:** chỉ điền URL vào `.env` / host → rebuild.

---

## 1. Khi có VPS — việc cần làm trên WordPress

1. Cài WordPress trên subdomain (vd. `cms.tanphamgia.com`).
2. Permalinks → **Post name**.
3. Cài & Activate: WPGraphQL, ACF, WPGraphQL for ACF.
4. Kiểm tra `https://cms…/graphql` trên GraphiQL.
5. Astro env:

```bash
WORDPRESS_GRAPHQL_URL=https://cms.tanphamgia.com/graphql
WORDPRESS_IMAGE_HOSTNAME=cms.tanphamgia.com
PUBLIC_SITE_URL=https://tanphamgia.vercel.app
```

---

## 2. Module & CPT

| Module | CPT / nguồn | Field ACF chính | Code status |
|--------|-------------|-----------------|-------------|
| Tin tức | `post` | category, featured image, content | **live** |
| Tài liệu | `document` | meta, doc_category, file, cover… | stub |
| Giải pháp | `solution` | icon, summary, bullets | stub |
| Case study | `case_study` | client_name, badge, metrics… | stub |

Chi tiết field:

### Post (Tin tức)
Không bắt buộc ACF lúc đầu. Query list + content đã có trong `queries/posts.ts`.

### CPT `document`
| Field name | Type |
|------------|------|
| meta | Text |
| doc_category | Select: brand / catalogue / guide |
| file | File |
| cover | Image |
| cover_type | Text |
| cover_title | Text |

GraphQL field group name gợi ý: `documentFields` (khớp `queries/documents.ts`).

### CPT `solution`
| Field name | Type |
|------------|------|
| icon | Text (Material Symbols) |
| summary | Textarea |
| bullets | Repeater hoặc textarea |

Group: `solutionFields`.

### CPT `case_study`
| Field name | Type |
|------------|------|
| client_name | Text |
| badge | Text |
| intro | Textarea |
| logo | Image |
| metrics | Repeater: value, label |

Group: `caseStudyFields`.

Mỗi group + CPT: **Show in GraphQL = Yes**.

---

## 3. Bật stub → live (khi VPS sẵn)

Ví dụ Tài liệu: sửa `get-documents.ts` — bỏ early-return stub, gọi `wpGraphql(DOCUMENTS_LIST_QUERY)`, viết mapper → `DocumentItem`, `try/catch` fallback `allDocuments`.

Cùng pattern với `get-posts.ts`.

---

## 4. Local test (tuỳ chọn trước VPS)

1. [LocalWP](https://localwp.com/) → tạo site.
2. Cài 3 plugin.
3. `.env`: `WORDPRESS_GRAPHQL_URL=http://….local/graphql`
4. Đăng vài Post → `npm run dev` → `/tin-tuc`.

---

## 5. Lỗi thường gặp

| Hiện tượng | Xử lý |
|------------|--------|
| Site vẫn data cũ | Chưa set / sai `WORDPRESS_GRAPHQL_URL` hoặc chưa rebuild |
| 404 `/graphql` | Permalink + plugin WPGraphQL |
| ACF không ra GraphQL | Show in GraphQL trên group + CPT |
| Ảnh WP | `WORDPRESS_IMAGE_HOSTNAME` |
