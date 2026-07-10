---
version: alpha
name: Tân Phạm Gia — Design System
description: >-
  Hợp đồng thiết kế cho website B2B đồng phục doanh nghiệp Tân Phạm Gia.
  Gửi file này cho bất kỳ ai tham gia thiết kế/code giao diện.
  Layout mỗi trang có thể khác nhau — mọi thứ còn lại phải giống nhau.
  Mọi giá trị dưới đây trích trực tiếp từ code trên nhánh main.

colors:
  # Mực — trục "Manufacture"
  primary: '#0E2640'              # ink-dark   · nav, footer, mọi tiêu đề trên nền sáng
  primary-soft: '#1A3A5C'         # ink-mid    · body nhấn
  secondary: '#102C4D'            # accent-teal · nhãn, link phụ, eyebrow
  secondary-container: '#E8EDF3'  # accent-teal-light

  # Vàng — trục "Fashion". Điểm nhấn DUY NHẤT.
  tertiary: '#FFC933'             # accent-gold
  tertiary-container: '#FFF6DC'   # accent-gold-light

  # Nền
  background: '#F7FAF9'
  surface: '#FFFFFF'              # surface-warm
  surface-fresh: '#EEF6F3'
  surface-container-low: '#F1F5F4'
  surface-muted: '#E8EEEC'        # ⚠️ xem §Colors — trượt AA với text-muted
  surface-neutral: '#DDE3EA'      # ⚠️ chưa ai dùng · trượt AA với text-muted

  # Chữ
  on-surface: '#1A2B36'
  on-surface-variant: '#5F6F78'   # text-muted
  on-primary: '#FFFFFF'

  outline: '#DCE5E2'              # border-subtle
  error: '#E05252'

typography:
  display:
    fontFamily: Hanken Grotesk    # 🔒 mọi tiêu đề
  body:
    fontFamily: Work Sans         # 🔒 mọi văn bản
  # Không có font thứ ba. Nạp qua Google Fonts trong BaseLayout.

spacing:
  container-max-width: 1280px     # 🔒
  page-inline: 24px               # 🔒 px-6
  page-inline-md: 32px            # 🔒 md:px-8
  baseline: 8px                   # 🔒 mọi khoảng cách là bội của 8 (hoặc 4 khi cần tinh)

rounded:                          # ⚠️ thang trong code đang BỊ ĐẢO — xem §Shapes
  DEFAULT: 0.75rem
  lg: 1rem
  xl: 1.5rem
  '2xl': 1.25rem                  # ❌ nhỏ hơn xl
  full: 9999px
  image: 4px                      # lib/image-frame.ts — cố ý nằm ngoài thang

elevation:
  soft: '0 4px 24px -4px rgba(14,38,64,0.08)'
  card: '0 8px 32px -8px rgba(14,38,64,0.12)'
  gold: '0 8px 24px -6px rgba(255,201,51,0.40)'

motion:
  ease: cubic-bezier(0.22, 1, 0.36, 1)   # 🔒 mọi transition
  reveal-duration: 600ms
  reveal-stagger: 80ms
  respect-reduced-motion: true           # 🔒 không thương lượng
---

# DESIGN.md — Tân Phạm Gia

> **Gửi file này cho đồng đội trước khi họ viết dòng code giao diện đầu tiên.**
>
> **Layout tự do. Chi tiết thì không.** Hai người có thể bố trí trang khác nhau hoàn toàn, nhưng cỡ chữ, màu, nút, nhịp, bo góc phải chép từ đây — không tự bịa giá trị mới.
>
> - 🔒 **CHỐT** — không đổi nếu không bàn với cả nhóm.
> - 🔓 **MỞ** — đang thiết kế lại, code hiện tại chỉ là một phương án.
> - ⚠️ **NỢ** — sai/mâu thuẫn đã phát hiện, đừng bắt chước.
>
> Đổi bất cứ thứ gì 🔒: sửa file này **trong một commit riêng**, đừng trộn vào commit sửa trang. Nếu A đổi thang chữ trong nhánh trang Giới thiệu còn B đổi trong nhánh Tài liệu, merge xong sẽ có một tài liệu không ai đọc và hai trang build theo hai chuẩn.

---

## Overview

**Tân Phạm Gia** — nhà sản xuất đồng phục doanh nghiệp, 23 năm, xưởng 2.000m², 30.000+ sản phẩm/tháng.

### 🔒 Định vị: Fashion × Manufacturing

> *"Đồng phục đẹp chuẩn thương hiệu, sản xuất bằng năng lực công nghiệp."*

Khác biệt so với hai nhóm đối thủ: xưởng may thuần túy (rẻ, không có gu) và studio thiết kế (đẹp, không sản xuất nổi 10.000 áo trong 7 ngày). **Cả hai vế phải hiện diện ở mọi trang.**

| Vế | Bằng chứng phải xuất hiện trên giao diện |
|---|---|
| **Fashion** | Ảnh sản phẩm lớn, chỉn chu; "thời trang hóa", Tỷ lệ vàng, Rập 3D, May trên Mannequin |
| **Manufacturing** | Con số (2.000m², 30.000 sp/tháng, 23 năm), bảng chất liệu, quy trình đánh bước, chứng chỉ ISO |

### 🔒 Đối tượng & nhiệm vụ trang

Người đọc là **phòng hành chính / marketing / mua hàng của doanh nghiệp B2B Việt Nam**. Họ không mua theo cảm xúc.

```
Tin được  →  Hiểu giải pháp cho ngành mình  →  Thấy bằng chứng  →  Để lại lead
(số liệu,    (4 nhóm giải pháp,               (case study,       (form tư vấn /
 chứng chỉ)   vấn đề → giải pháp)              testimonial)       tải tài liệu)
```

**Mục tiêu chuyển đổi của toàn site là lead** — form tư vấn (`/lien-he`) và form tải tài liệu (`/tai-lieu`). Mọi hiệu ứng thị giác nhường đường cho hai form này.

### 🔒 Tính cách: "đơn giản, chuyên nghiệp, rõ ràng, nổi bật"

Nguyên văn yêu cầu khách.

- ✅ Chính xác, có thẩm quyền, sạch, nhiều khoảng trắng
- ❌ Brutalism nặng, hazard palette, gradient tím-xanh, icon tròn pastel, "startup vui vẻ"

---

## Colors

🔒 **Chỉ ba màu thật:** mực navy, vàng thương hiệu, giấy. Mọi thứ khác là sắc độ.

| Token | Vai trò |
|---|---|
| `ink-dark` #0E2640 | Mực. Nav, footer, lớp phủ hero, **màu chữ của mọi tiêu đề trên nền sáng**. Không dùng `#000`. |
| `ink-mid` #1A3A5C | Body nhấn |
| `accent-teal` #102C4D | Eyebrow, link phụ, số thứ tự. Là *màu chữ*, gần như không bao giờ là màu nền. |
| `accent-gold` #FFC933 | **Điểm nhấn duy nhất.** CTA chính, số liệu, gạch chân hover, dấu `✓` |
| `text-muted` #5F6F78 | Body phụ, caption |
| `error` #E05252 | Chỉ trong validation form |

### 🔒 Bốn quy tắc

1. **Vàng không bao giờ là nền của một khối lớn.** Nó là đường chỉ, là số, là gạch — không phải mảng.
2. **Không màu thứ tư.** Không đỏ cảnh báo, không xanh lá "thành công". (Đã thử brutalist hazard red → khách bác.)
3. **Chữ trên nền tối:** trắng cho tiêu đề, `white/85` body, `white/60` breadcrumb. Không xám đặc.
4. **Lớp phủ ảnh để chữ đọc được, không phải để làm ảnh tối cho sang.** Có chữ đè lên → giảm `opacity` của **ảnh** (0.25–0.34) rồi phủ gradient nhẹ. Không có chữ đè → không phủ gì. Caption ở góc → gradient **chỉ ở đáy**.

### ⚠️ Hai cặp màu đang TRƯỢT WCAG AA

Đo lại theo WCAG (ngưỡng AA = 4.5:1), màu chữ `text-muted` #5F6F78:

| Trên nền | Tỉ lệ | |
|---|---|---|
| `surface-warm` #FFFFFF | 5.21:1 | ✅ |
| `accent-gold-light` #FFF6DC | 4.83:1 | ✅ |
| `surface-fresh` #EEF6F3 | 4.74:1 | ✅ biên mỏng |
| `surface-container-low` #F1F5F4 | 4.74:1 | ✅ biên mỏng |
| **`surface-muted` #E8EEEC** | **4.43:1** | ❌ **TRƯỢT** |
| **`surface-neutral` #DDE3EA** | **4.03:1** | ❌ **TRƯỢT** |

**Đang hỏng thật ở 2 chỗ** — `contact/ContactInfoAside.astro` (5 chỗ) và `documents/DocumentDownloadForm.astro` (3 chỗ) đặt `text-text-muted` trên `bg-surface-muted`.

Cách sửa: đổi chữ sang `ink-mid` #1A3A5C, hoặc đổi nền sang `surface-fresh`.
`surface-neutral` #DDE3EA hiện **chưa ai dùng** — nếu dùng, đừng đặt `text-muted` lên.

### ⚠️ Có một sắc vàng lạc trong production

`home/HomeFeaturedCases.astro` dùng **`#f2c300` chín lần**. Đó **không phải** vàng thương hiệu (`#FFC933`). Đừng chép sang chỗ khác. Tổng cộng site có **29 hex thô** trong class Tailwind (`#111` ×9, `#f8faf9` ×2…) — mọi màu mới phải đi qua token.

### 🔓 Nhịp nền — đang thiết kế lại

Khách yêu cầu *"nhiều nhịp thị giác hơn — xen kẽ trắng / xám / navy / texture / khối màu lớn."*

Thực tế đang đếm được: `bg-white` **39 lần**, `surface-fresh` 5, `surface-muted` 3, `accent-gold-light` 2. Đây chính là cái "phẳng, đều" khách chê.

**Section navy giữa nội dung — ĐƯỢC PHÉP, có điều kiện:**

1. **Tối đa 1 dải navy mỗi trang**, ngoài hero / CTA / footer (vốn đã tối sẵn).
2. **Phải có lý do nội dung** — dùng để *đóng khung bằng chứng* (dải số liệu, case study, chứng chỉ). Không dùng cho văn bản dài, không dùng để "đổi không khí".
3. **Không đặt liền kề** hero hoặc `SiteCtaSection` — sẽ dính thành một khối tối lớn.

---

## Typography

### 🔒 Một webfont (Archivo) + mono hệ thống. Không có cái thứ ba.

- **Archivo** (variable, trục `wdth`) → **toàn bộ** tiêu đề *và* thân. Đây là webfont **duy nhất** được nạp.
- **Mono hệ thống** (`ui-monospace, Consolas, SF Mono, Menlo…`) → eyebrow + nhãn "spec" (REF, mã, số kỹ thuật). **Không nạp webfont thứ hai** — nhãn ngắn nên khác biệt giữa máy không đáng kể.

Nạp một request duy nhất trong `BaseLayout.astro`. Tên font sống trong `global.css :root` (`--font-display` / `--font-body` / `--mono`) → đổi font sau này chỉ sửa một chỗ.

### 🔒 Phân tầng đến từ 3 cơ chế của Archivo, không phải 3 họ chữ

Đây là câu trả lời cho feedback "heading và body quá gần nhau, trang trông phẳng". Ba giọng phải **nghe khác hẳn nhau**:

| Giọng | Cơ chế | Đọc ra |
|---|---|---|
| **HEADING** | Archivo `font-weight 800` + `wdth` nén (85–93%) + leading siết (0.98–1.1) | Nặng, hẹp, dập khuôn — vế *Manufacturing* |
| **EYEBROW / SUBHEAD** | IBM Plex Mono, IN HOA, `tracking-widest` | Nhãn kỹ thuật, tách hẳn thân — vế *Technical* |
| **BODY** | Archivo `font-weight 400`, khổ 100%, `leading` 1.7 | Nới, thoáng, dễ đọc dài — vế *Editorial* |

Mức nén `wdth` **giảm dần theo cấp** và đã cắm sẵn trong `@layer base` của `global.css` cho mọi `h1..h4` ngữ nghĩa (h1 85% → h2 89% → h3 93%). Với thẻ **không phải** `h1..h4` (div/span/số liệu đóng vai tiêu đề), ép bằng utility: `stretch-hero` (85%) · `stretch-tight` (89%) · `stretch-snug` (93%) · `stretch-normal` (100%).

### 🔒 Bốn quy tắc

1. **Tiêu đề luôn `text-balance`; body luôn `text-pretty`.** Tiếng Việt nhiều từ đơn âm, rất dễ rớt chữ lẻ cuối dòng. (`text-balance` đã có sẵn ở base cho h1..h4.)
2. **Đo dòng:** lead ≤ `60ch`, body ≤ `68ch`. Không để dòng chữ dài hết container 1280px.
3. **Số liệu luôn `tabular-nums`** và dùng `stretch-tight` để cột số dập gọn.
4. **Mỗi section mở bằng một EYEBROW mono.** Đó là "điểm nhấn rõ hơn" mà feedback yêu cầu — mắt bắt được ranh giới section tức thì.

### 🔒 Thang chữ — chép nguyên class, đừng bịa cỡ mới

Site đang có **57 lần dùng `text-[…]` tùy biến, 24 biến thể**. Từ nay chỉ dùng bảng này. Cỡ đã tách xa hơn để hierarchy rõ; `wdth`/leading đã nằm ở base nên class gọn lại:

| Bậc | Class |
|---|---|
| **eyebrow** | `font-eyebrow text-xs uppercase tracking-widest text-accent-teal` |
| **display** | `font-display-lg text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] text-balance` |
| **h1** | `font-display-lg text-4xl md:text-6xl font-extrabold text-balance` |
| **h2** | `font-headline-md text-3xl md:text-5xl font-extrabold text-balance` |
| **h3** | `text-xl md:text-3xl font-bold text-ink-dark` |
| **h4** | `text-lg md:text-xl font-bold text-ink-dark` |
| **lead** | `text-lg md:text-xl text-text-muted leading-relaxed max-w-[60ch] text-pretty` |
| **body** | `text-base text-ink-mid leading-relaxed max-w-[68ch] text-pretty` |
| **small** | `text-sm text-text-muted leading-snug` |
| **stat** | `font-display-lg stretch-tight text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none tabular-nums text-accent-gold` |
| **statLabel** | `text-xs sm:text-sm text-text-muted leading-snug` |

**Trên nền navy** đổi màu chữ: heading → `text-white` · lead/body → `text-white/85` · small → `text-white/60` · eyebrow → `text-accent-gold`

> `wdth`, `letter-spacing`, `line-height` cho `h1..h4` đã cắm ở base — **đừng thêm `tracking-*`/`leading-*`** trừ khi cố ý ghi đè (như hero đa dòng). Cần một cỡ chưa có? **Bàn rồi thêm vào bảng**, đừng gõ thẳng vào component.

### ✅ Đã trả nợ: mono + `:root`

`--mono` = stack mono **hệ thống** đã khai báo trong `global.css :root` (không webfont); `fontFamily.mono` và `fontFamily.eyebrow` trong `tailwind.config.mjs` đều trỏ `var(--mono)`. Tên font tập trung ở `:root`. Nợ mục 7 (Phụ lục C) đã đóng.

---

## Layout

### 🔒 Khung trang — không có biến thể

```
max-w-container-max-width mx-auto px-6 md:px-8
```

`baseline` 8px: mọi khoảng cách là bội của 8 (hoặc 4 khi cần tinh).
`html, body { overflow-x: clip }` đã đặt — mọi phần tử tràn biên phải nằm trong cha `overflow: hidden`.

### 🔒 Khung mọi trang con

```
BaseLayout
 └ SiteNav ──────── solid trên trang con, trong suốt trên trang chủ
 └ PageHero ─────── tiêu đề + mô tả + breadcrumb + ảnh nền theo chủ đề
 └ [section riêng của trang]
 └ SiteCtaSection ─ CTA cuối, dùng chung
 └ SiteFooter
```

### 🔒 Nhịp dọc — chọn 1 trong 3 bậc

Site đang có **9 biến thể** `py-*` khác nhau. Từ nay:

| Bậc | Class | mobile / desktop | Dùng khi |
|---|---|---|---|
| **sm** | `py-12 md:py-16` | 48 / 64px | Dải mảnh, strip số liệu |
| **md** | `py-16 md:py-24` | 64 / 96px | **Mặc định cho mọi section nội dung** |
| **lg** | `py-20 md:py-32` | 80 / 128px | Section cần không khí (hero phụ, case study) |

> **Đây có thể là nguyên nhân gốc của lời chê "phẳng, thiếu không khí".**
> `py-8 md:py-12` (32/48px) đang được dùng **16 lần** — trong khi token thiết kế ban đầu là `section-padding-mobile: 64px` / `section-padding-desktop: 120px`. Section đang **chật hơn ý định 2–2.5 lần**. Bản mới của trang Giải pháp đã chuyển sang `py-16 md:py-24` — đúng hướng.

### ⚠️ Nợ: 3 token spacing chết

`section-padding-mobile`, `section-padding-desktop`, `grid-gutter` trong `tailwind.config.mjs` có **0 lần được dùng**. Chúng khiến người đọc config tin vào giá trị sai. Hoặc dùng, hoặc xóa.

---

## Elevation & Depth

🔒 **Một mô hình độ sâu cho toàn site.** Không trộn "thẻ có bóng" với "kẻ tóc phẳng" trên cùng một trang.

```
shadow-soft   0 4px 24px -4px rgba(14,38,64,0.08)   ← thẻ nghỉ
shadow-card   0 8px 32px -8px rgba(14,38,64,0.12)   ← thẻ hover
shadow-gold   0 8px 24px -6px rgba(255,201,51,0.40) ← CHỈ nút vàng khi hover
```

🔓 Khách yêu cầu *"phân lớp, chồng lấn, khoảng trắng"* — độ sâu có thể đến từ **layering và khoảng trắng** thay vì bóng đổ. Nếu đổi, đổi toàn site.

---

## Shapes

### ⚠️ Thang bo góc đang BỊ ĐẢO

```
DEFAULT 0.75rem  ·  lg 1rem  ·  xl 1.5rem  ·  2xl 1.25rem  ← 2xl < xl (!)
```

**Đừng dùng `rounded-2xl`** cho tới khi sửa. Sửa đúng cách: đổi `xl: 1.25rem` / `2xl: 1.5rem` **và** hoán class ở các file đang dùng để mỗi phần tử giữ nguyên bán kính cũ (`SiteNav`, `ContactInfoAside` giữ 1.5rem; `HomeFeaturedCases`, `DocumentDownloadForm` giữ 1.25rem) — không đổi một pixel nào.

### 🔒 Ảnh dùng `lib/image-frame.ts`

Bo góc ảnh = **`rounded-[4px]`**, cố ý nằm ngoài thang (thang project bắt đầu từ 0.75rem — quá tròn cho ảnh). Đừng gõ tay, import từ `image-frame.ts`:

```ts
imageRadius · landscapeCardFrame/Img · listingZigzagFrame/Img
portraitCardFrame/Img · blogThumbFrame/Img
```

### ⚠️ Bo góc lạc

`SiteNav.astro` có `rounded-[0.625rem]` — không thuộc thang nào. Đừng nhân bản.

**Bo góc là quyết định toàn cục, không phải per-component.** Site hiện trộn `rounded-full` (41), `rounded-xl` (6), `rounded-lg` (2), `rounded-2xl` (2), `rounded-md` (1), `rounded-[4px]`, `rounded-[0.625rem]` — không theo quy luật nào.

---

## Components

### 🔒 Nút — chép nguyên class, đừng tự ghép

Nút vàng chính đang tồn tại ở **6 kích thước khác nhau**, kể cả `px-[0.675rem] py-[0.5625rem] md:px-[1.575rem] md:py-[0.7875rem]`. Từ nay chỉ có 4 kiểu × 3 cỡ.

**Nền chung mọi nút:**
```
inline-flex items-center justify-center gap-2 rounded-full font-bold leading-tight
text-center no-underline transition-all duration-200
focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-gold
```

| Kiểu | Class riêng | Dùng khi |
|---|---|---|
| **primary** | `bg-accent-gold text-ink-dark shadow-soft hover:shadow-gold hover:scale-105` | CTA chính |
| **secondary** | `bg-ink-dark text-white hover:bg-accent-teal hover:scale-105` | CTA phụ, nền sáng |
| **onDark** | `border border-white/45 bg-white/12 text-white backdrop-blur-sm hover:bg-white hover:text-ink-dark` | CTA phụ, nền navy |
| **ghost** | `inline-flex items-center gap-2 text-sm font-bold text-accent-teal` + `group-hover:underline underline-offset-4` + icon `arrow_forward` dịch phải | Không phải nút — link có trọng lượng |

| Cỡ | Padding · cỡ chữ |
|---|---|
| **sm** | `px-4 py-2 text-xs` |
| **md** *(mặc định)* | `px-4 py-2.5 md:px-5 md:py-3 text-xs md:text-sm` |
| **lg** | `px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base` |

`ghost` không nhận cỡ và không bo tròn. Nút dẫn đi nơi khác là `<a>`; nút submit form là `<button type="submit">`.

### 🔒 Chuỗi class dùng lại sống trong `src/lib/`

Không copy-paste class giữa các component. Đã có:

| File | Chứa gì |
|---|---|
| `lib/routes.ts` | **Mọi đường dẫn nội bộ.** `routes.giaiPhap`, `solutionHref()`, `caseStudyHref()`, `blogPostHref()`, `blogPageHref()`, `solutionAnchorHref()`. **Không hard-code `/giai-phap/...`** |
| `lib/site-config.ts` | Domain qua env: `siteUrl`, `legacyUrl()`, `absoluteUrl()`. **Không hard-code domain** |
| `lib/image-frame.ts` | Khung + bo góc ảnh (xem §Shapes) |
| `lib/form-classes.ts` | `formLabelClass`, `formInputClass`, `docDownloadBtnClass` |
| `lib/about-layout.ts` | Zig-zag trang Giới thiệu |
| `lib/solution-theme.ts` | Biến thể 4 nhóm giải pháp |
| `lib/client-logo-scale.ts` | Tỉ lệ logo khách hàng |

### 🔒 Hợp đồng dữ liệu — nội dung KHÔNG nằm trong component

```
src/data/site.ts          → seo, pageSeo, navigation, stats, homeIntro, whyChoose,
                            solutions, homeFeaturedCases, clientLogos, certificates,
                            blogPosts, clientCaseStudies, testimonials*, siteCta, siteFooter
src/data/assets.ts        → đường dẫn ảnh local (thay Unsplash)
src/data/gioi-thieu.ts    → brandStory, timeline, missionVision, coreValues,
                            productionCapacity, teamDepartments
src/data/solution-page.ts → SolutionPageContent  ← TYPE CONTRACT trang chi tiết
src/data/giai-phap-[1-4].ts        → 4 instance của contract trên
src/data/giai-phap-[1-4]-du-an.ts  → case study từng nhóm
src/data/tai-lieu.ts      → brandDocuments, catalogueDocuments, guideDocuments
```

Đổi **trình bày** → sửa `src/components/`. Đổi **nội dung** → sửa `src/data/`.

### 🔒 Form

`lib/form-classes.ts` là nguồn duy nhất. Input là **gạch chân**, không phải hộp: `border-0 border-b border-border-subtle bg-transparent`, focus đổi viền sang `accent-gold`. Label: `text-xs font-bold uppercase tracking-[0.08em]`.

### 🔒 Motion

Một hệ duy nhất, khai báo trong `global.css`, chạy bởi `scripts/scroll-reveal.ts`.

```
easing   cubic-bezier(0.22, 1, 0.36, 1)   ← dùng cho MỌI transition
reveal   [data-reveal] → opacity 0→1, translateY(1.25rem)→0, 600ms
stagger  [data-reveal-stagger] → con nhận --reveal-delay = index × 80ms, tối đa 400ms
observer threshold 0.12, rootMargin '0px 0px -6% 0px'
```

**Ba quy tắc bất di dịch:**

1. **`prefers-reduced-motion: reduce` → hiện ngay, không transition.**
2. **Không animate cái gì ở màn hình đầu.** Hero hiện ngay.
3. **Chuyển động phải phục vụ nội dung.** Ảnh trôi vào để nói "đây là sản phẩm", số đếm lên để nói "đây là con số thật". Hiệu ứng rải rác không mục đích là dấu hiệu thiết kế do máy sinh.

> ⚠️ **Lỗ hổng cần vá:** `[data-reveal]` đặt `opacity: 0` trong CSS và **chỉ được gỡ bằng JS**. Nếu `scroll-reveal.ts` lỗi hoặc trình duyệt thiếu `IntersectionObserver`, **toàn bộ nội dung tàng hình vĩnh viễn**. Thêm:
> ```ts
> if (prefersReducedMotion || !('IntersectionObserver' in window)) { revealAll(); return; }
> ```

---

## Bố cục section — hợp đồng nội dung

> **Đây là phần chốt quan trọng nhất.**
> **Thứ tự và nhiệm vụ của các khối = hợp đồng.** **Cách trình bày từng khối = tự do.**
> Một section có thể là lưới 4 cột, một hàng cuộn ngang, hay khối chồng lớp — miễn nó làm đúng *nhiệm vụ* và chở đúng *nội dung*.
>
> Số hiệu lấy từ **Sitemap PDF của khách**, không phải thứ tự trong code.

### Trang chủ `/`

| Spec | Section | Nhiệm vụ | Nội dung |
|---|---|---|---|
| **1.1** | Hero Banner | Nói định vị trong 3 giây | Video nền; *"Chuyên sản xuất đồng phục & phát triển sản phẩm may mặc dành cho B2B"*; 2 CTA (`Nhận tư vấn giải pháp`, `Tải hồ sơ năng lực`) |
| **1.2** | Strip thông tin nhanh | Đóng đinh quy mô | **3 chỉ số**: 23+ năm · 500+ doanh nghiệp · 1.000.000+ sản phẩm |
| **1.3** | Giới thiệu ngắn | Tạo lòng tin | 2 đoạn (nhấn *Tỷ lệ vàng*, *Rập 3D*, *May trên Mannequin*); 5 bullet; ảnh; CTA |
| **1.4** | Tại sao chọn TPG | Khác biệt hóa | **4 lý do đánh số**: 23 năm ngành may / Tiên phong "Thời trang hóa" / Năng lực quy mô lớn / QC đa tầng |
| **1.5** | Quote thương hiệu + Giải pháp | Điều hướng theo ngành | Brand statement + **4 nhóm giải pháp**, mỗi nhóm 3–4 bullet + `[Xem chi tiết]` |
| **1.6** | Case study + Feedback + Logo | Bằng chứng | 18 logo + dự án tiêu biểu + feedback khách hàng |
| **1.7** | Giấy khen & chứng nhận | Bằng chứng thể chế | ISO 9001 · HVNCLC · Giấy khen · UNIDO |
| **1.8** | Tải tài liệu mới nhất | **Bắt lead #1** | Company Profile + Catalogue 2026; CTA + **form** |
| **1.9** | CTA cuối | **Bắt lead #2** | *"Sẵn Sàng Cho Dự Án Đồng Phục Của bạn?"* |

> ✅ **Trang chủ KHÔNG có block Tin tức.** Sitemap chỉ có 1.1–1.9.

### Giới thiệu `/gioi-thieu`

| Spec | Section | Nội dung |
|---|---|---|
| 2.1 | Page Header | `PageHero` |
| 2.2 | Câu chuyện thương hiệu | *"23 Năm Theo Đuổi Giá Trị Của Một Sản Phẩm May Mặc Chất Lượng"* |
| 2.3 | Hành trình 23 năm | **5 mốc**: 2003 → 2006-2014 → 2007-2012 → 2019 → 2023-Nay |
| 2.4 | Định vị thương hiệu | Sứ mệnh + Tầm nhìn + **5 giá trị cốt lõi** |
| 2.5 | Năng lực sản xuất + QC | **6 chỉ số**: 2.000m² · 30.000+/tháng · QC đa tầng · Đồng bộ · Chủ động · Linh hoạt |
| 2.6 | Đội ngũ nhân sự | **4 phòng ban** |
| 2.7 | Giấy khen & chứng nhận | — |
| 2.8 | Testimonial | 3 quote |
| 2.9 | CTA | — |

> ⚠️ Trong spec, mốc **2006-2014** đứng **trước** 2007-2012 — hai khoảng chồng lấn và ngược thời gian. Giữ đúng spec, nhưng cần khách xác nhận.

### Giải pháp `/giai-phap` (3.1–3.2)

Hero + **4 nhóm giải pháp**: Sản xuất & FDI / Văn phòng & Tập đoàn / FMCG & Chuỗi phân phối / Y tế, Spa & Dịch vụ.

### Chi tiết giải pháp `/giai-phap/giai-phap-[1-4]` (3.3–3.6)

**Trang bán hàng cốt lõi.** Cấu trúc đã mã hóa thành type `SolutionPageContent` — **type đó LÀ hợp đồng nội dung**.

| # | Section | Nhiệm vụ | Contract |
|---|---|---|---|
| 1 | Hero | Định khung ngành | `hero.title`, `hero.description`, `hero.industries[]` |
| 2 | **Vấn đề doanh nghiệp gặp phải** | Gây đồng cảm | `issues[]` — mỗi vấn đề kéo theo chuỗi hệ quả (→) |
| 3 | **Giải pháp của TPG** | Giải quyết từng vấn đề | `plans[]` — mỗi giải pháp nêu *kết quả mang lại* |
| 4 | **Sản phẩm & Chất liệu** | Vế *Manufacturing* | `products[]` + `fabricTable[]` |
| 5 | **Quy trình triển khai** | Giảm rủi ro cảm nhận | `processSteps[]` — 6 bước, **nhất quán cả 4 nhóm** |
| 6 | **Dự án tiêu biểu** | Bằng chứng | `giai-phap-[n]-du-an.ts` |
| 7 | Giải pháp khác | Điều hướng chéo | 3 nhóm còn lại |
| 8 | CTA cuối | — | `SiteCtaSection` |

**Trình tự 2 → 3 → 4 → 5 là bất biến.** Vấn đề trước giải pháp; giải pháp trước thông số; thông số trước quy trình. Đảo là phá logic thuyết phục.

### Chi tiết dự án `/giai-phap/[n]/du-an/[slug]`

Hero → **Dải số liệu** → **Thách thức** → **Giải pháp** → **Kết quả** → Dự án khác.
Trình tự Thách thức → Giải pháp → Kết quả là 🔒.

### Bốn trang còn lại

| Trang | Section |
|---|---|
| **`/khach-hang`** (4.x) | Hero → Logo khách hàng → **3 case study** → Testimonial (3 quote) → CTA |
| **`/tai-lieu`** (6.x) | Hero → Thư viện (3 nhóm: Thương hiệu / Catalogue / Hữu ích) → **Form 5 trường** *(bắt lead)* → CTA |
| **`/tin-tuc`** (5.x) | Hero → Danh sách bài viết + phân trang → CTA. Chi tiết: `/tin-tuc/[slug]` |
| **`/lien-he`** (7.x) | Hero → **Form tư vấn 9 trường + Thông tin liên hệ** *(bắt lead)* → Cam kết phản hồi 24h → CTA |

---

## Do's and Don'ts

### ✅ Do

- **Đọc `src/data/*.ts` trước khi viết component.** Nội dung là dữ liệu có kiểu.
- **Đối chiếu 2 PDF của khách** (SEO & Meta + Sitemap) trước khi viết bất kỳ chữ nào. Không tự bịa nội dung, không lorem.
- **Dùng `lib/routes.ts` cho mọi link nội bộ**, `lib/site-config.ts` cho mọi domain, `lib/image-frame.ts` cho mọi khung ảnh.
- **Chuỗi class dùng lại → `src/lib/`.**
- **Zero-JS mặc định.** Script nạp theo component; chỉ `site-nav.ts` + `scroll-reveal.ts` là toàn cục.
- **`:focus-visible` phải thấy được** — `outline: 2px solid #FFC933; outline-offset: 4px`.
- **Ảnh có `alt` mô tả, `loading="lazy"`** trừ ảnh hero.
- **`npx astro build` phải sạch 27 trang** trước khi push.
- **Thiết kế lại một section: giữ nguyên nhiệm vụ + nội dung**, chỉ đổi cách trình bày.

### ❌ Don't

- **KHÔNG bịa cỡ chữ mới.** Chọn một bậc trong §Typography. Cần bậc mới → bàn, thêm vào bảng.
- **KHÔNG tự ghép nút.** Chép từ §Components.
- **KHÔNG gõ hex thô** (`text-[#f2c300]`). Mọi màu qua token.
- **KHÔNG thêm màu thứ tư, KHÔNG thêm font thứ ba.**
- **KHÔNG đặt `text-muted` trên `surface-muted` hoặc `surface-neutral`** — trượt WCAG AA.
- **KHÔNG dùng `rounded-2xl`** cho tới khi thang bo góc được sửa.
- **KHÔNG tin `spacing.section-padding-*`** — token chết, 0 lần dùng.
- **KHÔNG hard-code đường dẫn hay domain.**
- **KHÔNG đảo thứ tự section** đã chốt ở trên.
- **KHÔNG đánh số các khối không có trình tự.** `01 Vấn đề → 02 Giải pháp → 03 Chất liệu` là chuỗi có thứ tự (hợp lệ); đánh số một lưới tính năng rời rạc (không hợp lệ).
- **KHÔNG phủ tối toàn bộ ảnh.**
- **KHÔNG rải dải navy.** Tối đa 1 dải/trang, phải có lý do nội dung.
- **KHÔNG để animation che hoặc làm chậm 2 form bắt lead.**
- **KHÔNG trộn sửa DESIGN.md vào commit sửa trang.**

---

# Phụ lục A — Yêu cầu khách hàng

## A1. Nguồn nội dung chính thức 🔒

Hai PDF khách gửi (03/07/2026) là nguồn chân lý cho nội dung & SEO:

| File | Chứa gì |
|---|---|
| **Note SEO & Meta** | SEO title (≤60 ký tự) + meta description (≤160) + keywords + URL slug cho 7 trang |
| **Sitemap Overview** | Cấu trúc từng section: Trang chủ 1.1–1.9, Giới thiệu 2.1–2.9, Giải pháp 3.1–3.6, Khách hàng 4.x, Tin tức 5.x, Tài liệu 6.x, Liên hệ 7.x |

## A2. Feedback thiết kế 🔒 về ý định, 🔓 về cách làm

> *"Website vẫn mang cảm giác khá an toàn, chưa tạo được một phong cách thiết kế riêng… vẫn hơi giống nhiều website doanh nghiệp khác trên thị trường. Bên em mong muốn điều chỉnh nhiều hơn về **định hướng thiết kế (Art Direction)** và **trải nghiệm thương hiệu**, thay vì chỉ chỉnh sửa từng section riêng lẻ."*

**Vá từng section sẽ không giải quyết được.** Khách không chê một khối cụ thể — họ chê site *không có giọng nói*.

| # | Yêu cầu | Chẩn đoán từ code |
|---|---|---|
| 1 | **Tính cách thương hiệu** | *Fashion × Manufacturing* phải **nhìn thấy được**, không chỉ nằm trong chữ |
| 2 | **Nhịp màu** | `bg-white` 39 lần vs `surface-fresh` 5. Token có sẵn mà không dùng |
| 3 | **Typography** | Heading và body quá gần nhau về sức nặng. Cần nới hierarchy + khoảng trắng |
| 4 | **Content blocks** | Ảnh lớn hơn, phân lớp, chồng lấn, khoảng trắng thoáng, hover có chủ ý |
| 5 | **Motion** | Animation nhẹ, tinh tế: đếm số, mask reveal, parallax, stagger |

**Site tham chiếu khách đưa:** `hungvietmy.vn` · `dongphuc.aristino.com` · `ricoh.com.vn` (trang giải pháp) · `creativeuniform.ae` · `dongphuchaianh.vn/ve-hai-anh` (timeline)

> **Giả thuyết rẻ nhất cần thử trước:** nới nhịp dọc từ `py-8 md:py-12` lên `py-16 md:py-24` (xem §Layout). Section đang chật hơn ý định 2–2.5 lần. Rất có thể đây là nguyên nhân vật lý của cảm giác *"không có nhịp"* — và nó không cần vẽ lại block nào.

---

# Phụ lục B — Đối chiếu Spec ↔ Code

## B1. Divergence đã xác minh

| Spec | Spec nói | Code làm |
|---|---|---|
| **1.2** | Strip **3 chỉ số** | **4 chỉ số** (thêm `30K+ sp/tháng`) |
| **1.6** | Case study **& Feedback khách hàng** — một khối | Tách 2 component, **không có testimonial trên trang chủ** |
| **1.7 → 1.8** | Chứng nhận **trước** Tải tài liệu | Ngược lại |
| **4.4–4.6** | Case study: Cocacola / **BIDV** / KingGroup | Coca-Cola / **VFM** / King Group |
| **4.3** | 8 logo (Techcombank, VinGroup, Highlands, Samsung VN, Viettel, DHL, Phúc Long, MB Bank) | Dùng chung `clientLogos` (18 brand của 1.6) |
| **6.1–6.5** | Slug `/tai-tai-lieu` (**6 lần, nhất quán cả 2 file**) | `/tai-lieu` |
| **6.2** | *"3 file"* nhưng liệt kê **2** | 3 file — spec tự mâu thuẫn |
| **6.4** | *"3 file"* nhưng liệt kê **5** | 5 file — spec tự mâu thuẫn |
| **7.3** | `20A Thới An 15, **Khu Phố 6**, Phường Thới An` | Thiếu "Khu Phố 6", viết tắt "TA15" |
| **7.2** | Form **Bownow**, 9 trường | `ContactForm` tự viết |
| **3.3–3.6** | *"(Giữ nguyên **6 bước** như trang Sản xuất & FDI)"* | Code có 6 bước — nhưng **spec chưa bao giờ liệt kê chúng** |

## B2. SEO title — đo thật

Khách tự đặt trần 60 ký tự.

| Trang | Spec | | Code | |
|---|---|---|---|---|
| Trang chủ | 66 | ❌ **vượt** | 41 | ✅ |
| Giải pháp | 63 | ❌ **vượt** | 38 | ✅ |
| Giới thiệu | 57 | ✅ | 43 | ✅ |
| Khách hàng | 49 | ✅ | 43 | ✅ |
| Tin tức | 52 | ✅ | 47 | ✅ |
| Tài liệu | 49 | ✅ | 41 | ✅ |
| Liên hệ | 49 | ✅ | 36 | ✅ |

**2/7 title trong spec vượt chính giới hạn khách đặt.** Meta description: **spec và code khớp hoàn toàn**.

## B3. ⛔ Chờ khách quyết — không tự quyết

| # | Vấn đề | Vì sao |
|---|---|---|
| 1 | **Logo trang Khách hàng (4.3)** | 7/8 brand trong spec **không có mặt** ở danh sách 18 logo trang chủ và **không có case study nào**. Đăng logo là **tuyên bố công khai về quan hệ khách hàng** — rủi ro pháp lý & uy tín nếu đó là text mẫu |
| 2 | **Case study #2: BIDV hay VFM?** | Spec ghi BIDV, code có VFM. Cả hai đều nằm trong danh sách logo 1.6 |
| 3 | **Slug `/tai-lieu` hay `/tai-tai-lieu`?** | Xuất hiện 6 lần nhất quán → không phải typo lẻ. `tai-tai-lieu` = *"Tải tài liệu"* (động từ), `tai-lieu` = *"Tài liệu"* (danh từ). URL công khai, đổi sai là hỏng SEO |
| 4 | **SEO title: spec hay code?** | 2 title spec vượt 60 ký tự; spec bỏ brand "Tân Phạm Gia" ở 6/7 trang |
| 5 | **Bảng chất liệu Giải pháp 2** | Spec cho GP2 (*Văn phòng & Tập đoàn*, sản phẩm là **sơ mi công sở, chân váy**) dùng **y hệt** bảng GP1: Oxford *"chống tĩnh điện — điện tử, hóa chất"*, Kaki *"kỹ sư, quản lý xưởng"*. Gần như chắc chắn **copy nhầm** — GP3/GP4 đều có bảng riêng đúng ngành |
| 6 | **6 bước quy trình** | Spec tham chiếu 3 lần nhưng chưa bao giờ liệt kê. Code dùng 6 bước không rõ nguồn |
| 7 | **Trang chủ 1.6 có testimonial không?** | Tiêu đề spec có *"& Feedback khách hàng"* nhưng phần mô tả chỉ có logo + link blog |
| 8 | **Form Bownow (7.2)** | Đã biết 9 trường. Còn thiếu key/embed |

---

# Phụ lục C — Nợ kỹ thuật cần dọn

Ưu tiên từ trên xuống. Không cái nào cần thiết kế lại, chỉ cần sửa.

| # | Nợ | Hậu quả | Cách sửa |
|---|---|---|---|
| 1 | `[data-reveal]` = `opacity:0`, không đường thoát khi thiếu JS | **Nội dung có thể tàng hình vĩnh viễn** | Thêm nhánh `!('IntersectionObserver' in window) → revealAll()` |
| 2 | `text-muted` trên `surface-muted` ở `ContactInfoAside` (5 chỗ) + `DocumentDownloadForm` (3 chỗ) | **Trượt WCAG AA** (4.43:1) | Đổi chữ sang `ink-mid` hoặc nền sang `surface-fresh` |
| 3 | Thang bo góc đảo: `2xl` 1.25rem < `xl` 1.5rem | Người sau chọn nhầm bậc | Đổi thang + hoán class giữ nguyên pixel |
| 4 | `#f2c300` ×9 trong `HomeFeaturedCases` | Sắc vàng lạc, không phải `#FFC933` | Đổi sang token `accent-gold` (kiểm mắt trước) |
| 5 | 3 token spacing chết (`section-padding-*`, `grid-gutter`) | Agent/designer tin vào giá trị sai | Dùng hoặc xóa |
| 6 | `surface-neutral` #DDE3EA khai báo mà 0 lần dùng | Token chết | Dùng hoặc xóa |
| 7 | Không có `:root` trong `global.css`, không có `fontFamily.mono` | Không có chỗ đổi font tập trung | Thêm `--font-display` / `--font-body` / `--mono` |
| 8 | `rounded-[0.625rem]` trong `SiteNav` | Bo góc ngoài thang | Đưa về thang |

> Có một script chặn lệch tự động (`scripts/design-lint.mjs` + baseline ratchet: bắt hex thô, cỡ chữ tự chế, font literal, thang bo góc đảo, token chết) nằm ở nhánh `work/design-md`. Nếu nhóm muốn, cherry-pick sang `main` — nó không vào bundle, chỉ chạy khi `npm run check`.
