import '@fontsource-variable/sora/wght.css'
import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/jetbrains-mono/wght.css'
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

export const viewport = { themeColor: '#ECEEF2', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
