import { PROFILE } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="max-w-page mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[13.5px] text-fog">
        <p>© 2026 {PROFILE.name}</p>
        <p>Built with Next.js and Tailwind CSS, deployed on Vercel.</p>
      </div>
    </footer>
  )
}
