/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  safelist: ['bg-surface-alt', 'bg-white'],
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
        background: '#F7FAF9',
        'surface-warm': '#FFFFFF',
        'surface-fresh': '#EEF6F3',
        /** Nền section xen kẽ — xám nhạt (#EDEDED), qua --color-surface-alt */
        'surface-alt': 'rgb(var(--color-surface-alt) / <alpha-value>)',
        'surface-neutral': '#DDE3EA',
        'surface-container-low': '#F1F5F4',
        'surface-muted': '#E8EEEC',
        'border-subtle': '#DCE5E2',
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
        /* Eyebrow = giọng "spec label" → IBM Plex Mono, tách hẳn khỏi thân Archivo.
           Đổi về var(--font-body) nếu muốn eyebrow trở lại sans. */
        eyebrow: ['var(--mono)'],
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
