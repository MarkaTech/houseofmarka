import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050507',
          900: '#0a0a0d',
          800: '#111116',
          700: '#1a1a21',
          600: '#26262f',
        },
        bone: {
          50: '#fbfbfa',
          100: '#f2f2f0',
          200: '#e2e2df',
          300: '#c4c4bf',
          400: '#8d8d88',
        },
        gold: {
          400: '#d8b66a',
          500: '#c39b4b',
          600: '#a37c33',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'SF Pro Display', '-apple-system', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 42s linear infinite',
        // The dashed ring behind the hero on devices that skip the WebGL scene.
        'spin-slow': 'spin 26s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
