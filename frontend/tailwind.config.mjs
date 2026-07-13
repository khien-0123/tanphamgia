/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  safelist: ['bg-surface-alt', 'bg-white', 'bg-texture-fabric', 'bg-texture-grain', 'py-16', 'md:py-24'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Thang VÀNG — cùng hue ~44°, sat 100%, chỉ khác độ sáng: 39 → 60 → 77 → 93 */
        'accent-gold-dark': '#C9A000',
        'accent-gold': '#FFC933',
        'accent-gold-mid': '#FFE08A',
        'accent-gold-light': '#FFF6DC',
        'accent-teal': '#102C4D',
        'accent-teal-light': '#E8EDF3',
        /* Thang MỰC — cùng hue ~211°, độ sáng 15 → 23 → 26 */
        'ink-dark': '#0E2640',
        'ink-mid': '#1A3A5C',
        'ink-light': '#1A4569',
        background: '#FFFFFF',
        'surface-warm': '#FFFFFF',
        /** @deprecated Dùng surface-alt — giữ token để không vỡ class cũ */
        'surface-fresh': '#EDEDED',
        /** Nền section xen kẽ — xám nhạt (#EDEDED), qua --color-surface-alt */
        'surface-alt': 'rgb(var(--color-surface-alt) / <alpha-value>)',
        'surface-neutral': '#E0E0E0',
        'surface-container-low': '#F5F5F5',
        'surface-muted': '#E5E5E5',
        'border-subtle': '#D4D4D4',
        'text-muted': '#5F6F78',
        'on-surface': '#1A2B36',
        'primary-container': '#0E2640',
        error: '#E05252',
        'on-primary': '#ffffff',
        'on-background': '#1A2B36',
        'surface-container-lowest': '#ffffff',
      },
      borderRadius: {
        DEFAULT: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '1.25rem',
        full: '9999px',
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(14, 38, 64, 0.08)',
        card: '0 8px 32px -8px rgba(14, 38, 64, 0.12)',
        gold: '0 8px 24px -6px rgba(255, 201, 51, 0.4)',
      },
      backgroundImage: {
        /** Vân vải — Intro (weave 1px, navy 3.5%) */
        'texture-fabric':
          'repeating-linear-gradient(0deg, rgba(14, 38, 64, 0.035) 0, rgba(14, 38, 64, 0.035) 1px, transparent 1px, transparent 5px), repeating-linear-gradient(90deg, rgba(14, 38, 64, 0.035) 0, rgba(14, 38, 64, 0.035) 1px, transparent 1px, transparent 5px)',
        /** Grain giấy — Chứng nhận (SVG noise, tile 128px) */
        'texture-grain':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      spacing: {
        'container-max-width': '1280px',
        'section-padding-mobile': '64px',
        baseline: '8px',
        'section-padding-desktop': '120px',
        'grid-gutter': '32px',
      },
      /** Trỏ về biến trong global.css :root — đổi font chỉ sửa 1 chỗ duy nhất. */
      fontFamily: {
        'body-lg': ['var(--font-body)'],
        'body-md': ['var(--font-body)'],
        'label-sm': ['var(--font-body)'],
        /* Eyebrow dùng cùng Google Sans — phân tầng bằng uppercase + tracking */
        eyebrow: ['var(--font-body)'],
        'display-lg': ['var(--font-display)'],
        'headline-md': ['var(--font-display)'],
        'display-lg-mobile': ['var(--font-display)'],
        mono: ['var(--mono)'],
      },
      fontSize: {
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'display-lg': ['72px', { lineHeight: '80px', letterSpacing: '-0.02em', fontWeight: '800' }],
        eyebrow: ['14px', { lineHeight: '20px', letterSpacing: '0.15em', fontWeight: '600' }],
        'headline-md': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'display-lg-mobile': ['48px', { lineHeight: '52px', letterSpacing: '-0.01em', fontWeight: '800' }],
      },
      maxWidth: {
        'container-max-width': '1280px',
      },
      keyframes: {
        navItemIn: {
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        certificateColumnScroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        navItemIn: 'navItemIn 0.38s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'certificate-scroll-15': 'certificateColumnScroll 15s linear infinite',
        'certificate-scroll-17': 'certificateColumnScroll 17s linear infinite',
        'certificate-scroll-19': 'certificateColumnScroll 19s linear infinite',
      },
      transitionTimingFunction: {
        'nav-panel': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
