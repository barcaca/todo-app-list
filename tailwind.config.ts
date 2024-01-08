import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./{src,mdx}/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-josefin)',
        display: 'var(--font-mona-sans)',
      },
      backgroundImage: {
        mobileLight: 'url("/bg-mobile-light.jpg")',
        mobileDark: 'url("/bg-mobile-dark.jpg")',
        desktopLight: 'url("/bg-desktop-light.jpg")',
        desktopDark: 'url("/bg-desktop-dark.jpg")',
        image: 'url("/bg-dave-hoefler.jpg")',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
