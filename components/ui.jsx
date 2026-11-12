'use client'
// Shared building blocks: tiles, rich text, buttons, section headings, device frames, icons.
import { useEffect, useRef, useState } from 'react'

// Renders **bold** segments inside a plain string.
export function Rich({ text, strongClass = 'text-ink font-semibold' }) {
  return text.split('**').map((p, i) =>
    i % 2 === 1 ? <strong key={i} className={strongClass}>{p}</strong> : <span key={i}>{p}</span>,
  )
}

// A bento tile that rises into place once when scrolled into view.
// Tiles are visible in the HTML; they only start hidden once scripts are running (see .js .reveal in globals.css).
export function Tile({ as: Comp = 'div', className = '', delay = 0, style, children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setShown(true)
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Comp ref={ref} className={`reveal ${shown ? 'in' : ''} rounded-tile ${className}`} style={{ ...style, '--d': `${delay}s` }} {...rest}>
      {children}
    </Comp>
  )
}

// Small monospace label used at the top of tiles.
export function Eyebrow({ children, className = 'text-fog' }) {
  return <p className={`font-mono text-[12px] leading-none ${className}`}>{children}</p>
}

export function SectionHead({ id, title, intro, aside }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3 mb-5 md:mb-6 px-1">
      <h2 id={id} className="font-disp font-bold text-ink text-[34px] md:text-[44px] leading-[1.02] tracking-[-0.03em]">
        {title}
      </h2>
      {(intro || aside) && <div className="max-w-[560px] text-[15px] leading-relaxed text-fog">{intro}{aside}</div>}
    </div>
  )
}

// External link button. Primary = solid night (lens on hover), secondary = outline.
export function LinkButton({ href, children, primary = false, note, icon = 'github', className = '' }) {
  const look = primary
    ? 'bg-night text-white hover:bg-[color:var(--lens)]'
    : 'bg-white text-ink border border-line hover:border-ink'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 min-h-[44px] font-medium text-[14.5px] px-4 py-2.5 rounded-xl transition-colors ${look} ${className}`}
    >
      {icon === 'github' && href.includes('github.com') && <GitHubIcon className="w-4 h-4" />}
      <span>{children}</span>
      {note && <span className={primary ? 'text-white/75' : 'text-fog'}>({note})</span>}
      <span aria-hidden="true">↗</span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

export function BrowserFrame({ src, w, h, label, caption, eager = false }) {
  return (
    <figure className="rounded-[16px] border border-line bg-white overflow-hidden shadow-[0_28px_60px_-34px_rgba(17,21,28,.45)]">
      <div className="flex items-center gap-2 h-9 px-3.5 border-b border-rule bg-chip">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
        </span>
        {label && (
          <span className="ml-2 flex-1 min-w-0 truncate text-center font-mono text-[11.5px] text-fog bg-white border border-rule rounded-md px-2 py-0.5">
            {label}
          </span>
        )}
      </div>
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size screenshot: ${caption}`}>
        <img src={src} alt={caption} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className="block w-full h-auto" />
      </a>
    </figure>
  )
}

export function PhoneFrame({ src, w, h, caption, className = '' }) {
  return (
    <figure className={`rounded-[26px] border-[5px] border-night bg-night overflow-hidden shadow-[0_24px_50px_-26px_rgba(17,21,28,.6)] ${className}`}>
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size screenshot: ${caption}`}>
        <img src={src} alt={caption} width={w} height={h} loading="lazy" decoding="async" className="block w-full h-auto rounded-[20px]" />
      </a>
    </figure>
  )
}

const svg = (path, props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>{path}</svg>
)
const stroke = (children, props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
    {children}
  </svg>
)

export const GitHubIcon = (p) =>
  svg(<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />, p)
export const LinkedInIcon = (p) =>
  svg(<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />, p)
export const MailIcon = (p) => stroke(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>, p)
export const PhoneIcon = (p) => stroke(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />, p)
export const PinIcon = (p) => stroke(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>, p)
export const MenuIcon = (p) => stroke(<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>, p)
export const CloseIcon = (p) => stroke(<><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>, p)
export const LockIcon = (p) => stroke(<><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>, p)
export const ArrowIcon = (p) => stroke(<path d="M5 12h14M13 6l6 6-6 6" />, p)
export const FlipIcon = (p) => stroke(<><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16" /><path d="M3 21v-5h5" /></>, p)
