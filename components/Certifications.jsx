import Reveal from './Reveal'
import SectionHead from './SectionHead'

const CERTS = [
  { icon: '⚡', name: 'Power BI Data Analyst Associate', org: 'Microsoft · PL-300' },
  { icon: '☁', name: 'Azure Data Engineer Associate', org: 'Microsoft · DP-203' },
  { icon: '◇', name: 'Azure Fundamentals', org: 'Microsoft · AZ-900' },
  { icon: '⬡', name: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 md:px-12 py-24">
      <div className="max-w-[1060px] mx-auto">
        <SectionHead tag="Credentials" title="Certifications & Education"
          sub="Microsoft & AWS certified, with a 4.0 GPA graduate program." />
        <div className="grid md:grid-cols-2 gap-4">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 0.07}>
              <div className="bg-white border border-line rounded-[18px] p-6 flex gap-4 items-start hover:border-indigo/35 hover:-translate-y-0.5 transition-all">
                <div className="w-11 h-11 rounded-xl bg-grad-soft border border-indigo/20 flex items-center justify-center text-lg shrink-0">{c.icon}</div>
                <div>
                  <h4 className="font-disp font-semibold text-[15px] text-ink mb-0.5">{c.name}</h4>
                  <p className="font-mono text-[11.5px] text-soft">{c.org}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.1} className="md:col-span-2">
            <div className="bg-white border border-line rounded-[18px] p-6 flex gap-4 items-start hover:border-indigo/35 transition-all">
              <div className="w-11 h-11 rounded-xl bg-grad-soft border border-indigo/20 flex items-center justify-center text-lg shrink-0">🎓</div>
              <div>
                <h4 className="font-disp font-semibold text-[15px] text-ink mb-0.5">M.S. Applied Computer Science — GPA 4.0</h4>
                <p className="font-mono text-[11.5px] text-soft">Northwest Missouri State University · Missouri, USA · Jan 2025 – May 2026</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
