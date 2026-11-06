import { PROFILE } from '../data/content'

const LINKS = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Work', '#work'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

export default function Footer() {
  return (
    <footer className="px-5 md:px-8 py-8 border-t border-line">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-[13px] text-soft">© 2026 {PROFILE.name}. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="text-[13px] text-soft hover:text-indigo transition-colors">{label}</a>
          ))}
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-[13px] text-soft hover:text-indigo transition-colors">
            GitHub ↗
          </a>
        </nav>
      </div>
    </footer>
  )
}
