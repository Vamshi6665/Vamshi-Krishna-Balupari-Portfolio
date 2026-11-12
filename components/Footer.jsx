import { PROFILE } from '../data/content'

export default function Footer() {
  return (
    <footer className="max-w-page mx-auto px-4 md:px-8 pt-10 pb-10">
      <div className="px-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[13.5px] text-fog">
        <p>© 2026 {PROFILE.name}</p>
        <p>Built with Next.js and Tailwind CSS, deployed on Vercel.</p>
      </div>
    </footer>
  )
}
