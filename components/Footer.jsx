export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-line flex flex-wrap justify-between items-center gap-2.5">
      <p className="text-[12.5px] text-soft">© 2026 Vamshi Krishna Balupari. All rights reserved.</p>
      <p className="text-[12.5px] text-soft">Built with Next.js, Tailwind CSS, and Framer Motion</p>
      <div className="flex gap-4">
        {[['Experience', 'experience'], ['Featured Work', 'deepdives'], ['Projects', 'projects'], ['Contact', 'contact']].map(([l, id]) => (
          <a key={id} href={`#${id}`} className="text-[12.5px] text-soft hover:text-indigo transition-colors">{l}</a>
        ))}
      </div>
    </footer>
  )
}
