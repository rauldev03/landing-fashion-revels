/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Celeste — color de marca principal
        brand: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Rosa — acento anime secundario
        anime: {
          50:  '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        },
        // Lila — acento terciario suave
        mystic: {
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        // Fondo base crema/blanco cálido
        surface: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#efefef',
        },
      },
      boxShadow: {
        'sky-glow':    '0 0 25px -5px rgba(14, 165, 233, 0.18)',
        'sky-glow-lg': '0 0 40px -5px rgba(56, 189, 248, 0.22)',
        'pink-glow':   '0 0 25px -5px rgba(236, 72, 153, 0.18)',
        'card':        '0 2px 20px -4px rgba(0,0,0,0.08), 0 1px 4px -2px rgba(0,0,0,0.06)',
        'card-hover':  '0 8px 30px -6px rgba(0,0,0,0.12), 0 2px 8px -2px rgba(14,165,233,0.12)',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
