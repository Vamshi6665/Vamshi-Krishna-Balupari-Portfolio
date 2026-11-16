// Shared building blocks: rich text, icons, buttons, section titles, device frames.

// Renders **bold** segments inside a plain string. `code` spans in backticks become inline code.
export function Rich({ text, strongClass = 'text-ink font-semibold' }) {
  return text.split('**').map((p, i) => {
    if (i % 2 === 1) return <strong key={i} className={strongClass}>{p}</strong>
    return p.split('`').map((q, j) =>
      j % 2 === 1 ? (
        <code key={`${i}-${j}`} className="font-mono text-[0.9em] px-1.5 py-0.5 rounded bg-white/[0.07] text-ink">{q}</code>
      ) : (
        <span key={`${i}-${j}`}>{q}</span>
      ),
    )
  })
}

const PATHS = {
  github:
    'M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z',
  linkedin:
    'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z',
  vercel: 'M12 2 23 21H1L12 2Z',
}

export function Icon({ name, className = 'w-4 h-4' }) {
  if (PATHS[name]) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d={PATHS[name]} />
      </svg>
    )
  }
  const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const shapes = {
    external: <><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
    pin: <><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>,
    close: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
    up: <><path d="M12 19V5" /><path d="m5 12 7-7 7 7" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" /></>,
    doc: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    flip: <><path d="M4 12a8 8 0 0 1 14-5.3L20 9" /><path d="M20 4v5h-5" /><path d="M20 12a8 8 0 0 1-14 5.3L4 15" /><path d="M4 20v-5h5" /></>,
    lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      {shapes[name]}
    </svg>
  )
}

// Buttons. variant: 'grad' (filled gradient), 'glass' (outline on glass), 'ghost' (text-only).
export function Button({ href, onClick, children, variant = 'glass', icon, iconRight, className = '', size = 'md', disabled, title, ...rest }) {
  const sizes = { sm: 'h-9 px-3.5 text-[13.5px] gap-1.5', md: 'h-11 px-5 text-[15px] gap-2' }
  const looks = {
    grad: 'grad-bg font-semibold shadow-[0_10px_30px_-12px_rgb(var(--g1)/.8)] hover:brightness-110',
    glass: 'glass text-ink hover:bg-white/[0.08] hover:border-white/20',
    ghost: 'text-muted hover:text-ink',
  }
  const cls = `inline-flex items-center justify-center rounded-full transition ${sizes[size]} ${looks[variant]} ${disabled ? 'opacity-45 pointer-events-none' : ''} ${className}`
  const inner = (
    <>
      {icon && <Icon name={icon} className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} className="w-3.5 h-3.5 opacity-80" />}
    </>
  )
  if (href && !disabled) {
    const ext = /^https?:/.test(href)
    return (
      <a href={href} className={cls} title={title} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls} disabled={disabled} title={title} {...rest}>
      {inner}
    </button>
  )
}

// Section title after the reference portfolio: a giant outlined word, a short gradient rule, the real heading, one line of context.
export function SectionTitle({ ghost, title, sub, id }) {
  return (
    <header className="relative text-center mb-12 md:mb-16 overflow-x-clip">
      <div aria-hidden="true" className="ghost absolute left-1/2 -translate-x-1/2 top-0">{ghost}</div>
      <div className="relative pt-[clamp(22px,4.2vw,62px)]">
        <span aria-hidden="true" className="block mx-auto mb-5 h-10 w-px bg-gradient-to-b from-transparent via-g1 to-g2" />
        <h2 id={id} className="font-disp font-semibold text-[28px] md:text-[38px] leading-tight tracking-[-0.02em]">{title}</h2>
        {sub && <p className="mt-3 text-muted text-[15.5px] max-w-[52ch] mx-auto">{sub}</p>}
      </div>
    </header>
  )
}

// Browser chrome around a screenshot.
export function BrowserFrame({ label, children, className = '' }) {
  return (
    <div className={`rounded-xl overflow-hidden border border-white/10 bg-[#121018] shadow-[0_30px_60px_-30px_rgb(0_0_0/.8)] ${className}`}>
      <div className="flex items-center gap-2 h-7 px-3 bg-white/[0.04] border-b border-white/[0.06]">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <i className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <i className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </span>
        {label && <span className="mx-auto pr-8 truncate text-[11px] text-white/45 font-mono">{label}</span>}
      </div>
      {children}
    </div>
  )
}

export function PhoneFrame({ children, className = '' }) {
  return (
    <div className={`rounded-[26px] p-[6px] bg-[#0d0c12] border border-white/10 shadow-[0_30px_60px_-30px_rgb(0_0_0/.8)] ${className}`}>
      <div className="rounded-[20px] overflow-hidden">{children}</div>
    </div>
  )
}
