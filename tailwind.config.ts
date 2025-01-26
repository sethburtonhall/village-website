import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['var(--font-nunito)'],
        sans: ['var(--font-noto)'],
        signature: ['var(--font-caveat)'],
      },
      colors: {
        primary: {
          '50': '#f0fdf4',
          '100': '#dcfce7',
          '200': '#bbf7d0',
          '300': '#86efac',
          '400': '#4ade80',
          '500': '#22c55e',
          '600': '#16a34a',
          '700': '#15803d',
          '800': '#166534',
          '900': '#14532d',
          '950': '#052e16',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        stone: {
          '50': '#fafaf9',
          '100': '#f5f5f4',
          '200': '#e7e5e4',
          '300': '#d6d3d1',
          '400': '#a8a29e',
          '500': '#78716c',
          '600': '#57534e',
          '700': '#44403c',
          '800': '#292524',
          '900': '#1c1917',
          '950': '#0c0a09',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        'color-1': 'hsl(var(--color-1))',
        'color-2': 'hsl(var(--color-2))',
        'color-3': 'hsl(var(--color-3))',
        'color-4': 'hsl(var(--color-4))',
        'color-5': 'hsl(var(--color-5))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        shine: 'shine var(--duration) infinite linear',
        pulse: 'pulse var(--duration) ease-out infinite',
        gradient: 'gradient 8s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          to: {
            'background-position': '0% 0%',
          },
        },
        pulse: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 var(--pulse-color)',
          },
          '50%': {
            boxShadow: '0 0 0 8px var(--pulse-color)',
          },
        },
        'aurora-border': {
          '0%, 100%': {
            borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%',
          },
          '25%': {
            borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%',
          },
          '50%': {
            borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%',
          },
          '75%': {
            borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%',
          },
        },
        'aurora-1': {
          '0%, 100%': {
            top: '0',
            right: '0',
          },
          '50%': {
            top: '50%',
            right: '25%',
          },
          '75%': {
            top: '25%',
            right: '50%',
          },
        },
        'aurora-2': {
          '0%, 100%': {
            top: '0',
            left: '0',
          },
          '60%': {
            top: '75%',
            left: '25%',
          },
          '85%': {
            top: '50%',
            left: '50%',
          },
        },
        'aurora-3': {
          '0%, 100%': {
            bottom: '0',
            left: '0',
          },
          '40%': {
            bottom: '50%',
            left: '25%',
          },
          '65%': {
            bottom: '25%',
            left: '50%',
          },
        },
        'aurora-4': {
          '0%, 100%': {
            bottom: '0',
            right: '0',
          },
          '50%': {
            bottom: '25%',
            right: '40%',
          },
          '90%': {
            bottom: '50%',
            right: '25%',
          },
        },
        gradient: {
          to: {
            backgroundPosition: 'var(--bg-size) 0',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
