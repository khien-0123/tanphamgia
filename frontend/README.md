# Tan Phạm Gia — Astro Frontend

Trang chủ Tân Phạm Gia được xây dựng bằng **Astro** + **Tailwind CSS**, migrate từ `business1/home.html`.

## Chạy dự án

```bash
cd web
npm install
npm run dev
```

Mở trình duyệt tại `http://localhost:4321`.

## Build production

```bash
npm run build
npm run preview
```

## Cấu trúc

```
web/
├── src/
│   ├── layouts/BaseLayout.astro   # Shell HTML, fonts, global CSS
│   ├── pages/index.astro          # Trang chủ (13 sections)
│   ├── scripts/site-nav.ts        # Nav scroll + smooth anchor
│   └── styles/global.css          # Custom utilities (liquid-glass, hero, nav…)
├── tailwind.config.mjs            # Theme tokens từ prototype HTML
└── astro.config.mjs
```

## Ghi chú kỹ thuật

- **Zero-JS mặc định**: chỉ script nav scroll được bundle tối thiểu.
- **Tailwind**: dùng `@astrojs/tailwind`, không còn CDN.
- **Ảnh**: hiện dùng URL `aida-public` (sẽ chuyển sang `<Image />` khi tích hợp WordPress).
