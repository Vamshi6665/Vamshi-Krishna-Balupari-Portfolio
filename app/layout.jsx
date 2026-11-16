import '@fontsource-variable/unbounded/wght.css'
import '@fontsource-variable/geist/wght.css'
import '@fontsource-variable/geist-mono/wght.css'
import './globals.css'
import Providers from '../components/Providers'

const SITE_URL = 'https://vamshikrishna-portfolio-three.vercel.app'
const TITLE = 'Vamshi Krishna Balupari | Software Engineer: AI agents, full-stack apps, data platforms'
const DESCRIPTION =
  'Software engineer. Live AI agents and full-stack products with code on GitHub, plus 4 years building data platforms for AT&T and VFS Global.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: SITE_URL, title: TITLE, description: DESCRIPTION, siteName: 'Vamshi Krishna Balupari' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

export const viewport = { themeColor: '#FFFDFA', width: 'device-width', initialScale: 1 }

// Applies the saved palette before first paint so the page never flashes the default colors.
const PALETTE_INIT = `try{var p=localStorage.getItem('palette');if(p==='aurora'||p==='ember'||p==='lumina'||p==='sunrise'){document.documentElement.dataset.palette=p}}catch(e){}`

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-palette="sunrise" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: PALETTE_INIT }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
