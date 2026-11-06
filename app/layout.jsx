import './globals.css'
import Providers from '../components/Providers'

const SITE_URL = 'https://vamshikrishna-portfolio-three.vercel.app'
const DESCRIPTION =
  'Data Analyst and Analytics Engineer with 4+ years of experience in Power BI, SQL, Snowflake, and Python, plus research in explainable AI.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Vamshi Krishna Balupari | Data Analyst and Analytics Engineer',
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Vamshi Krishna Balupari | Data Analyst and Analytics Engineer',
    description: DESCRIPTION,
    siteName: 'Vamshi Krishna Balupari',
  },
  twitter: {
    card: 'summary',
    title: 'Vamshi Krishna Balupari | Data Analyst and Analytics Engineer',
    description: DESCRIPTION,
  },
}

export const viewport = {
  themeColor: '#fbfaf8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
