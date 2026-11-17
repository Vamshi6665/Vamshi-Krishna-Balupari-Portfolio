/** @type {import('tailwindcss').Config} */
// Colors come from CSS variables so the palette switcher (Lumina, Aurora, Ember) can re-tint the whole site.
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: 'rgb(var(--bg) / <alpha-value>)',
        deep: 'rgb(var(--bg-2) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        g1: 'rgb(var(--g1) / <alpha-value>)',
        g2: 'rgb(var(--g2) / <alpha-value>)',
        g3: 'rgb(var(--g3) / <alpha-value>)',
        tint: 'rgb(var(--tint) / <alpha-value>)',
        shade: 'rgb(var(--shade) / <alpha-value>)',
        live: '#4ADE80',
      },
      fontFamily: {
        disp: ["'Unbounded Variable'", 'system-ui', 'sans-serif'],
        sans: ["'Geist Variable'", 'system-ui', 'sans-serif'],
        mono: ["'Geist Mono Variable'", 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '1240px' },
    },
  },
  plugins: [],
}
