/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        mist: '#F4F6F9',
        ink: '#10192B',
        slate: '#4A5468',
        fog: '#687185',
        rule: '#E3E7EE',
        da: '#2563EB',
        de: '#047857',
        ml: '#7C3AED',
        gi: '#C2410C',
      },
      fontFamily: {
        disp: ["'Bricolage Grotesque Variable'", 'var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '1200px' },
    },
  },
  plugins: [],
}
