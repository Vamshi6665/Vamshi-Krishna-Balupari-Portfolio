'use client'
import { PROFILE } from '../data/content'
import { Tile, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from './ui'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="max-w-page mx-auto px-4 md:px-8 pt-16 md:pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3.5">
        <Tile className="lg:col-span-3 lens-bg text-white p-7 md:p-10 flex flex-col justify-between gap-10 min-h-[300px]">
          <p className="font-mono text-[12.5px] text-white/90">open to full-time and contract roles</p>
          <div>
            <h2 id="contact-title" className="font-disp font-bold text-[38px] md:text-[56px] leading-[1.02] tracking-[-0.03em] max-w-[760px]">
              Hiring for data, analytics, ML, or Gen AI?
            </h2>
            <p className="mt-4 text-[16px] text-white/90">Email is the fastest way to reach me.</p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-xl bg-white text-ink font-semibold text-[15px] break-all hover:bg-night hover:text-white transition-colors">
                <MailIcon className="w-4 h-4 shrink-0" /> {PROFILE.email}
              </a>
            </div>
          </div>
        </Tile>

        <Tile delay={0.05} className="bg-white p-3">
          <ul className="h-full flex flex-col text-[15px]">
            <li>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-ink hover:bg-chip">
                <LinkedInIcon className="w-5 h-5 text-fog" /> LinkedIn <span aria-hidden="true" className="ml-auto text-fog">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-ink hover:bg-chip">
                <GitHubIcon className="w-5 h-5 text-fog" /> GitHub <span aria-hidden="true" className="ml-auto text-fog">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={PROFILE.phoneHref} className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-ink hover:bg-chip">
                <PhoneIcon className="w-5 h-5 text-fog" /> {PROFILE.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 px-4 py-3.5 text-ink">
              <PinIcon className="w-5 h-5 text-fog" /> {PROFILE.location}
            </li>
          </ul>
        </Tile>
      </div>
    </section>
  )
}
