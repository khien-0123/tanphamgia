/** Variant texture nền section — khai báo pattern trong tailwind.config.mjs */

export type TextureVariant = 'fabric' | 'grain';

/** Section có texture: bọc nền, không tràn pseudo-layer */
export const surfaceTextureSectionShell = 'relative overflow-hidden';

/** Nội dung nổi trên lớp texture */
export const surfaceTextureContent = 'relative z-10';

/** Lớp texture tuyệt đối — opacity giữ nhẹ để không ảnh hưởng đọc chữ */
export const textureLayerClasses: Record<TextureVariant, string> = {
  fabric:
    'pointer-events-none absolute inset-0 bg-texture-fabric opacity-[0.06] max-md:opacity-[0.045]',
  grain:
    'pointer-events-none absolute inset-0 bg-texture-grain bg-[length:128px_128px] opacity-[0.04] max-md:opacity-[0.03]',
};
