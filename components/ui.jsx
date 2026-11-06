// Shared building blocks: rich text, chips, buttons, icons.

// Renders **bold** segments inside a plain string.
export function Rich({ text, strongClass = 'text-ink font-semibold' }) {
  const parts = text.split('**')
  return parts.map((p, i) =>
    i % 2 === 1 ? <strong key={i} className={strongClass}>{p}</strong> : <span key={i}>{p}</span>,
  )
}

export function Chip({ children, variant = 'soft' }) {
  const styles =
    variant === 'accent'
      ? 'bg-grad-soft border-indigo/20 text-indigo'
      : 'bg-[#f4f3f0] border-line text-body'
  return (
    <span className={`inline-flex items-center font-mono text-[11.5px] leading-none px-2.5 py-1.5 rounded-full border ${styles}`}>
      {children}
    </span>
  )
}

// External link button. Primary = gradient, secondary = outline.
export function LinkButton({ href, children, primary = false, icon = 'github', className = '' }) {
  const base =
    'inline-flex items-center justify-center gap-2 font-disp font-semibold text-[14px] px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2'
  const look = primary
    ? 'text-white bg-grad shadow-[0_8px_24px_-10px_rgba(79,70,229,.6)]'
    : 'text-ink bg-white border-[1.5px] border-line hover:border-indigo hover:text-indigo'
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${look} ${className}`}>
      {icon === 'github' && <GitHubIcon className="w-4 h-4" />}
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

const svg = (path, props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>{path}</svg>
)

export const GitHubIcon = (p) =>
  svg(
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />,
    p,
  )

export const LinkedInIcon = (p) =>
  svg(
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />,
    p,
  )

const stroke = (children, props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
    {children}
  </svg>
)

export const MailIcon = (p) => stroke(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>, p)
export const PhoneIcon = (p) => stroke(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />, p)
export const PinIcon = (p) => stroke(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>, p)
export const MenuIcon = (p) => stroke(<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>, p)
export const CloseIcon = (p) => stroke(<><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>, p)
