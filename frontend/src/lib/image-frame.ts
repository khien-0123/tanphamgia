/** Bo góc ảnh nhẹ — tránh `rounded` mặc định project (0.75rem) */

export const imageRadius = 'rounded-[4px]';

/** Khung ảnh card ngang — case study, thumbnail rộng */
export const landscapeCardFrame = `aspect-video overflow-hidden ${imageRadius} m-0`;

export const landscapeCardImg =
  'h-full w-full object-cover object-top transition-transform duration-500';

/** Zig-zag listing /giai-phap — khung ngang 4:3 như bản gốc */
export const listingZigzagFrame = `relative aspect-[4/3] overflow-hidden ${imageRadius} m-0 w-full min-w-0`;

export const listingZigzagImg =
  'h-full w-full object-cover object-top transition-transform duration-500';

/** Khung ảnh card dọc — ưu tiên giữ đầu/vai khi ảnh nguồn dọc */
export const portraitCardFrame = `aspect-[4/5] overflow-hidden ${imageRadius} m-0`;

export const portraitCardImg =
  'h-full w-full object-cover object-top transition-transform duration-500';

/** Blog thumbnail — hơi ngang hơn card dọc */
export const blogThumbFrame =
  `relative m-0 overflow-hidden ${imageRadius} aspect-[4/3] bg-surface-muted`;

export const blogThumbImg =
  'absolute inset-0 w-full h-full object-cover object-top';
