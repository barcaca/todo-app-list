import Pattern from '@/components/pattern'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Josefin_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import '../styles/globals.css'
import { Providers } from './providers'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-josefin',
})
const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

export const metadata: Metadata = {
  authors: [{ name: 'Luan Barcaça', url: '' }],
  category: 'design',
  creator: 'Luan Barcaça',
  title: 'Todo App',
  description: 'Todo App List',
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'TailwindCSS',
    'Design',
    'Frontend',
    'Developer',
    'Todo',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${josefin.variable} ${monaSans.variable}`}
      suppressHydrationWarning
    >
      <body className="h-screen min-h-screen antialiased">
        <Providers>
          <Pattern />
          {children}
        </Providers>
      </body>
    </html>
  )
}
