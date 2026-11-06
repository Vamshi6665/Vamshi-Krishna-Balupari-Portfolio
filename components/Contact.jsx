import { PROFILE } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from './ui'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-28">
      <div className="max-w-page mx-auto px-5 md:px-8 grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-10 lg:gap-16 items-end">
        <div>
          <h2 id="contact-title" className="font-disp font-bold text-ink text-[40px] md:text-[64px] leading-[1.02] tracking-[-0.025em]">
            Hiring for data, analytics, ML, or Gen AI?
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed max-w-[560px]">
            I&apos;m open to full-time and contract roles. Email is the fastest way to reach me.
          </p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-8 inline-flex items-center gap-3 font-disp font-semibold text-[20px] sm:text-[26px] text-ink border-b-2 lens-border pb-1 break-all"
          >
            {PROFILE.email}
          </a>
        </div>

        <ul className="divide-y divide-rule border-y border-rule text-[15.5px]">
          <li>
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 py-4 text-ink hover:lens-text"><MailIcon className="w-5 h-5 text-fog" /> Email</a>
          </li>
          <li>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-4 text-ink">
              <LinkedInIcon className="w-5 h-5 text-fog" /> LinkedIn <span aria-hidden="true" className="text-fog">↗</span>
            </a>
          </li>
          <li>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-4 text-ink">
              <GitHubIcon className="w-5 h-5 text-fog" /> GitHub <span aria-hidden="true" className="text-fog">↗</span>
            </a>
          </li>
          <li>
            <a href={PROFILE.phoneHref} className="flex items-center gap-3 py-4 text-ink"><PhoneIcon className="w-5 h-5 text-fog" /> {PROFILE.phone}</a>
          </li>
          <li className="flex items-center gap-3 py-4 text-ink"><PinIcon className="w-5 h-5 text-fog" /> {PROFILE.location}</li>
        </ul>
      </div>
    </section>
  )
}
