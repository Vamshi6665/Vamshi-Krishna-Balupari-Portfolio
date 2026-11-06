import Reveal from './Reveal'
import { PROFILE } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from './ui'

export default function Contact() {
  return (
    <section id="contact" className="px-5 md:px-8 py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto">
        <Reveal>
          <div className="relative overflow-hidden bg-ink rounded-[28px] px-6 md:px-14 py-14 md:py-16 text-center">
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(139,92,246,.35),transparent_70%)]" />
            <p className="relative font-mono text-[12px] text-violet tracking-[.12em] uppercase mb-3">Contact</p>
            <h2 className="relative font-disp font-bold text-white text-[34px] md:text-[42px] tracking-tight mb-3">
              Let&apos;s talk
            </h2>
            <p className="relative text-[#b6b4c2] text-[16px] leading-relaxed max-w-[540px] mx-auto mb-8">
              I&apos;m open to Data Analyst, Analytics Engineer, BI, and Data Engineer roles, full time or contract.
              I reply quickly.
            </p>

            <div className="relative flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-9">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center justify-center gap-2 font-disp font-semibold text-[15px] text-white px-6 py-3 rounded-xl bg-grad shadow-[0_8px_24px_-8px_rgba(79,70,229,.5)] hover:-translate-y-0.5 transition-transform"
              >
                <MailIcon className="w-[18px] h-[18px]" /> Email me
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-disp font-semibold text-[15px] text-[#e6e4f0] px-6 py-3 rounded-xl border-[1.5px] border-[#3a3948] hover:border-violet hover:text-white hover:-translate-y-0.5 transition-all"
              >
                <LinkedInIcon className="w-4 h-4" /> LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-disp font-semibold text-[15px] text-[#e6e4f0] px-6 py-3 rounded-xl border-[1.5px] border-[#3a3948] hover:border-violet hover:text-white hover:-translate-y-0.5 transition-all"
              >
                <GitHubIcon className="w-4 h-4" /> GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>

            <ul className="relative flex flex-col sm:flex-row flex-wrap justify-center gap-x-7 gap-y-3 font-mono text-[13px] text-[#c6c4d2]">
              <li className="flex items-center justify-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#8f8d9c]" />
                <a href={PROFILE.phoneHref} className="hover:text-violet transition-colors">{PROFILE.phone}</a>
              </li>
              <li className="flex items-center justify-center gap-2 min-w-0">
                <MailIcon className="w-4 h-4 text-[#8f8d9c] shrink-0" />
                <a href={`mailto:${PROFILE.email}`} className="hover:text-violet transition-colors break-all">{PROFILE.email}</a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <PinIcon className="w-4 h-4 text-[#8f8d9c]" /> {PROFILE.location}
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
