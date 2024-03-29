import tailwindAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        'cycle-words': {
          // cycle through horizontal list of 20 items
          '0%': { transform: 'translateX(0)' },
          '4%': { transform: 'translateX(0)' },
          '5%': { transform: 'translateX(100%)' },
          '9%': { transform: 'translateX(100%)' },
          '10%': { transform: 'translateX(200%)' },
          '14%': { transform: 'translateX(200%)' },
          '15%': { transform: 'translateX(300%)' },
          '19%': { transform: 'translateX(300%)' },
          '20%': { transform: 'translateX(400%)' },
          '24%': { transform: 'translateX(400%)' },
          '25%': { transform: 'translateX(500%)' },
          '29%': { transform: 'translateX(500%)' },
          '30%': { transform: 'translateX(600%)' },
          '34%': { transform: 'translateX(600%)' },
          '35%': { transform: 'translateX(700%)' },
          '39%': { transform: 'translateX(700%)' },
          '40%': { transform: 'translateX(800%)' },
          '44%': { transform: 'translateX(800%)' },
          '45%': { transform: 'translateX(900%)' },
          '49%': { transform: 'translateX(900%)' },
          '50%': { transform: 'translateX(1000%)' },
          '54%': { transform: 'translateX(1000%)' },
          '55%': { transform: 'translateX(1100%)' },
          '59%': { transform: 'translateX(1100%)' },
          '60%': { transform: 'translateX(1200%)' },
          '64%': { transform: 'translateX(1200%)' },
          '65%': { transform: 'translateX(1300%)' },
          '69%': { transform: 'translateX(1300%)' },
          '70%': { transform: 'translateX(1400%)' },
          '74%': { transform: 'translateX(1400%)' },
          '75%': { transform: 'translateX(1500%)' },
          '79%': { transform: 'translateX(1500%)' },
          '80%': { transform: 'translateX(1600%)' },
          '84%': { transform: 'translateX(1600%)' },
          '85%': { transform: 'translateX(1700%)' },
          '89%': { transform: 'translateX(1700%)' },
          '90%': { transform: 'translateX(1800%)' },
          '94%': { transform: 'translateX(1800%)' },
          '95%': { transform: 'translateX(1900%)' },
          '99%': { transform: 'translateX(1900%)' },
          '100%': { transform: 'translateX(1900%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        'cycle-words': 'cycle-words 40s ease-out infinite',
      },
    },
  },
  plugins: [tailwindAnimate],
}
