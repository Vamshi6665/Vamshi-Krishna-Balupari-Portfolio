import Reveal from './Reveal'
import SectionHead from './SectionHead'

const CERTS = [
  { code: 'PL-300', name: 'Power BI Data Analyst Associate', org: 'Microsoft' },
  { code: 'DP-203', name: 'Azure Data Engineer Associate', org: 'Microsoft' },
  { code: 'AZ-900', name: 'Azure Fundamentals', org: 'Microsoft' },
  { code: 'AWS', name: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="px-5 md:px-8 py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto">
        <SectionHead tag="Credentials" title="Certifications and education" />
        <div className="grid sm:grid-cols-2 gap-3">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 0.06}>
              <div className="h-full bg-white border border-line rounded-[18px] p-5 flex gap-4 items-center hover:border-indigo/35 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-grad-soft border border-indigo/20 flex items-center justify-center font-mono text-[11.5px] font-medium text-indigo shrink-0">
                  {c.code}
                </div>
                <div>
                  <h3 className="font-disp font-semibold text-[16px] text-ink leading-snug">{c.name}</h3>
                  <p className="font-mono text-[12px] text-soft mt-0.5">{c.org}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.1} className="sm:col-span-2">
            <div className="bg-white border border-line rounded-[18px] p-5 flex gap-4 items-center hover:border-indigo/35 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-grad text-white flex items-center justify-center font-mono text-[12px] font-medium shrink-0">
                M.S.
              </div>
              <div>
                <h3 className="font-disp font-semibold text-[16px] text-ink leading-snug">
                  M.S. Applied Computer Science · GPA 4.0
                </h3>
                <p className="font-mono text-[12px] text-soft mt-0.5">
                  Northwest Missouri State University · Jan 2025 – May 2026
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
