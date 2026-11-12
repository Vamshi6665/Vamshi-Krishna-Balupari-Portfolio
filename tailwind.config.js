/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ground: '#ECEEF2', // page background between tiles
        tile: '#FFFFFF',
        chip: '#F3F4F7', // inset panels and chips inside tiles
        night: '#11151C', // dark tiles and headings
        ink: '#11151C',
        slate: '#474F5C', // body text
        fog: '#5A6270', // muted text (AA on white, ground, and chip)
        line: '#D5D9E0',
        rule: '#E3E6EB',
        // Role lens colors (AA with white text)
        da: '#2563EB',
        de: '#047857',
        ml: '#7C3AED',
        gi: '#BE185D',
      },
      fontFamily: {
        disp: ["'Sora Variable'", 'system-ui', 'sans-serif'],
        sans: ["'Inter Variable'", 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono Variable'", 'ui-monospace', 'monospace'],
      },
      borderRadius: { tile: '22px' },
      maxWidth: { page: '1280px' },
    },
  },
  plugins: [],
}
