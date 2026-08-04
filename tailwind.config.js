/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fbfaf8',
        ink: '#191823',
        body: '#4b4a57',
        soft: '#807f8c',
        line: '#e8e6e1',
        indigo: { DEFAULT: '#4f46e5' },
        violet: { DEFAULT: '#8b5cf6' },
        tealx: '#0d9488',
        amberx: '#d97706',
        rosex: '#e11d48',
      },
      fontFamily: {
        disp: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grad: 'linear-gradient(120deg,#4f46e5,#8b5cf6)',
        'grad-soft': 'linear-gradient(120deg,rgba(79,70,229,.08),rgba(139,92,246,.08))',
      },
    },
  },
  plugins: [],
}
