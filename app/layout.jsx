import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '@fontsource-variable/bricolage-grotesque/opsz.css'
import './globals.css'
import Providers from '../components/Providers'

const SITE_URL = 'https://vamshikrishna-portfolio-three.vercel.app'
const TITLE = 'Vamshi Krishna Balupari | Data Engineer, Analyst, ML and Gen AI'
const DESCRIPTION =
  'Data pipelines, dashboards, and AI tools built end to end. 4+ years engineering data for AT&T and VFS Global, plus live products and explainable AI research.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: SITE_URL, title: TITLE, description: DESCRIPTION, siteName: 'Vamshi Krishna Balupari' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

export const viewport = { themeColor: '#FFFFFF', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
