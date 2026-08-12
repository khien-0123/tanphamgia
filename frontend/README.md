# Tân Phạm Gia — Astro Frontend

Frontend **Astro** + **Tailwind**. Nội dung sẵn sàng nối **Headless WordPress** (WPGraphQL + ACF).

## Chạy dự án

```bash
cd frontend
npm install
npm run dev
```

Mở `http://localhost:4321`.

## Headless WordPress

Hướng dẫn đầy đủ: [`docs/HUONG-DAN-HEADLESS-WORDPRESS.md`](./docs/HUONG-DAN-HEADLESS-WORDPRESS.md)

**Chưa có VPS:** để trống `WORDPRESS_GRAPHQL_URL` trong `.env` → dùng `src/data/*`.

**Có VPS:** copy `.env.example` → `.env`, điền:

```bash
WORDPRESS_GRAPHQL_URL=https://cms.ten-mien.com/graphql
WORDPRESS_IMAGE_HOSTNAME=cms.ten-mien.com
```

Rồi rebuild. Tin tức lấy từ WP; module khác vẫn local cho đến khi bật stub → live.

| Module | API | Trạng thái |
|--------|-----|------------|
| Tin tức | `getAllBlogPosts` / `getBlogPostBySlug` | live |
| Tài liệu | `getAllDocuments` | stub → local |
| Giải pháp | `getAllSolutions` | stub → local |
| Case study | `getAllCaseStudies` | stub → local |

Import từ `src/lib/cms`.

## Cấu trúc

```
frontend/
├── docs/HUONG-DAN-HEADLESS-WORDPRESS.md
├── src/
│   ├── lib/cms/          # Client GraphQL + getter + stub
│   ├── data/             # Fallback khi chưa/mất CMS
│   ├── pages/
│   └── ...
└── astro.config.mjs
```
