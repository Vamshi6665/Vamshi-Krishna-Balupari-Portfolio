'use client'
// Work experience as flip cards (after the reference portfolio): role on the front, what I did on the back.
// Hover flips on desktop; the button flips on touch and keyboard.
import { useState } from 'react'
import { Icon, SectionTitle } from './ui'

const ROLES = [
  {
    org: 'Tifa Chocolate & Gelato',
    legal: 'LAMA Desserts LLC',
    role: 'Data Associate',
    front: 'Inventory analytics on AWS, plus the inventory system and website the shop runs on.',
    dates: 'Jul 2026 – Present',
    place: 'Walnut Creek, CA',
    points: [
      'Built AWS Glue ETL that consolidates sales, product, inventory, and vendor extracts from S3 into validated datasets.',
      'Athena views and QuickSight dashboards for inventory analysis, refreshed on a schedule.',
      'Designed, built, and shipped the shop’s inventory system and its website.',
    ],
  },
  {
    org: 'Northwest Missouri State University',
    role: 'Research Assistant',
    front: 'Explainable-AI research and the LLM codebase agent behind a co-authored paper.',
    dates: 'May 2025 – Apr 2026',
    place: 'Maryville, MO',
    points: [
      'Explainable-AI framework pairing predictions with SHAP contributions and Anchor rules.',
      'Built CodeRepoReader and benchmarked the OpenAI and GitHub Copilot SDKs for a co-authored paper.',
      'Reproducible Python and SQL workflows for preparing and validating ML datasets.',
    ],
  },
  {
    org: 'DXC Technology',
    role: 'Analyst',
    front: 'Data platforms for enterprise clients AT&T and VFS Global, on Azure and AWS.',
    dates: 'Jul 2021 – Dec 2024',
    place: 'Hyderabad, India',
    points: [
      'VFS Global: Data Factory and Databricks pipelines from 40+ SQL Server sources into Snowflake; 90%+ fewer reporting errors.',
      'AT&T: AWS Glue pipelines and Power BI exception reports; 25% fewer storage escalations.',
      'Recognized with a Best Employee award.',
    ],
  },
]

function FlipCard({ r }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <li className={`flip h-[400px] ${flipped ? 'is-flipped' : ''}`}>
      <div className="flip-inner">
        <div className="flip-face glass grad-border rounded-[26px] p-7 flex flex-col">
          <span aria-hidden="true" className="grid place-items-center w-14 h-14 rounded-2xl grad-bg font-disp font-bold text-[18px]">
            {r.org.split(' ').map((w) => w[0]).join('').slice(0, 2)}
          </span>
          <h3 className="mt-7 font-disp font-semibold text-[22px] leading-tight tracking-[-0.015em]">{r.org}</h3>
          {r.legal && <p className="text-[13px] text-muted mt-1">{r.legal}</p>}
          <p className="mt-4 text-accent text-[16px] font-medium">{r.role}</p>
          <p className="mt-1 text-[14.5px] text-ink/80">{r.dates}</p>
          <p className="text-[14px] text-muted">{r.place}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/80">{r.front}</p>
          <button
            type="button"
            onClick={() => setFlipped(true)}
            tabIndex={flipped ? -1 : 0}
            className="mt-auto self-start inline-flex items-center gap-2 text-[13.5px] text-muted hover:text-ink"
            aria-label={`Show what I did at ${r.org}`}
          >
            <Icon name="flip" className="w-4 h-4" /> What I did here
          </button>
        </div>
        <div className="flip-face flip-back rounded-[26px] p-7 flex flex-col bg-[linear-gradient(150deg,rgb(var(--g1)/.35),rgb(var(--bg-2))_45%,rgb(var(--g2)/.22))] border border-tint/12">
          <p className="text-[13px] text-muted">{r.role}, {r.dates}</p>
          <h3 className="mt-1 font-disp font-semibold text-[17px]">{r.org}</h3>
          <ul className="mt-4 space-y-3 text-[14.5px] leading-relaxed text-ink/90">
            {r.points.map((p) => (
              <li key={p} className="flex gap-2.5"><span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full grad-bg shrink-0" />{p}</li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setFlipped(false)}
            tabIndex={flipped ? 0 : -1}
            className="mt-auto self-start inline-flex items-center gap-2 text-[13.5px] text-muted hover:text-ink"
            aria-label={`Back to the ${r.org} summary`}
          >
            <Icon name="flip" className="w-4 h-4" /> Back
          </button>
        </div>
      </div>
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-20 md:py-24" aria-labelledby="experience-title">
      <div className="max-w-page mx-auto px-5 md:px-8">
        <SectionTitle id="experience-title" ghost="EXPERIENCE" title="Work experience" sub="Hover a card, or tap “What I did here”, to flip it." />
        <ul className="grid md:grid-cols-3 gap-5 md:gap-6">
          {ROLES.map((r) => <FlipCard key={r.org} r={r} />)}
        </ul>
      </div>
    </section>
  )
}
