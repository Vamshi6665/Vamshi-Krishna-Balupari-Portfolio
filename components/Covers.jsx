// Drawn previews for projects that have no screen to capture (research, pipelines, system designs, an Android app).
// Each fills its parent, which sets the aspect ratio.

const mono = 'font-mono text-[10.5px] md:text-[11px]'

function Shell({ children, className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-[radial-gradient(120%_90%_at_0%_0%,rgb(var(--g1)/.28),transparent_55%),radial-gradient(90%_80%_at_100%_100%,rgb(var(--g2)/.22),transparent_60%)] bg-deep ${className}`}>
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgb(var(--tint))_1px,transparent_1px),linear-gradient(90deg,rgb(var(--tint))_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
      <div className="relative h-full">{children}</div>
    </div>
  )
}

function Governance() {
  return (
    <Shell>
      <div className="h-full flex flex-col justify-center gap-2.5 px-[7%]">
        <div className="rounded-lg bg-shade/35 border border-tint/10 px-3 py-2">
          <p className={`${mono} text-tint/45`}>user types</p>
          <p className={`${mono} text-tint/90 mt-0.5`}>Summarise <mark className="bg-g2/30 text-ink rounded px-1">Ravi Kumar</mark>’s loan, account <mark className="bg-g2/30 text-ink rounded px-1">4471-8892</mark></p>
        </div>
        <div className="flex items-center gap-2 pl-3">
          <span className="w-px h-5 bg-gradient-to-b from-g2 to-g1" />
          <span className="px-2 py-0.5 rounded-full grad-bg text-[10.5px] font-semibold">gateway swaps</span>
        </div>
        <div className="rounded-lg bg-shade/35 border border-tint/10 px-3 py-2">
          <p className={`${mono} text-tint/45`}>sent to the AI provider</p>
          <p className={`${mono} text-tint/90 mt-0.5`}>Summarise <mark className="bg-g1/35 text-ink rounded px-1">[CUSTOMER-1]</mark>’s loan, <mark className="bg-g1/35 text-ink rounded px-1">[ACCT-1]</mark></p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {['regex', 'keywords', 'NER', 'classifier', 'LLM judge'].map((s) => (
            <span key={s} className={`${mono} px-1.5 py-0.5 rounded bg-tint/[0.07] text-tint/75`}>{s}</span>
          ))}
        </div>
      </div>
    </Shell>
  )
}

function Xai() {
  const bars = [78, -52, 44, -30, 22, -14]
  return (
    <Shell>
      <div className="h-full grid grid-cols-[1.1fr_1fr] gap-4 items-center px-[6%]">
        <div>
          <p className={`${mono} text-tint/50 mb-2`}>SHAP: what moved this prediction</p>
          <div className="space-y-1.5">
            {bars.map((v, i) => (
              <div key={i} className="flex items-center h-3">
                <div className="w-1/2 flex justify-end">{v < 0 && <span className="h-3 rounded-l bg-g3/80" style={{ width: `${-v}%` }} />}</div>
                <span className="w-px h-4 bg-tint/30" />
                <div className="w-1/2">{v > 0 && <span className="block h-3 rounded-r bg-g2/85" style={{ width: `${v}%` }} />}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-shade/35 border border-tint/10 p-3">
          <p className={`${mono} text-tint/50`}>Anchor rule</p>
          <p className={`${mono} text-tint/90 mt-1 leading-relaxed`}>
            IF mean symmetry &gt; 0.18<br />AND mean concave points &gt; 0.07
          </p>
          <p className="mt-2 text-[11px] text-tint/70">precision <span className="text-ink font-semibold">0.97–1.00</span></p>
          <p className="mt-2 font-disp font-bold text-[22px] grad-text inline-block">95.6%</p>
          <p className="text-[10.5px] text-tint/55 -mt-0.5">model accuracy</p>
        </div>
      </div>
    </Shell>
  )
}

function Flow({ steps }) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-1.5">
          <span className={`${mono} px-2 py-1 rounded-md bg-shade/35 border border-tint/10 text-tint/85 whitespace-nowrap`}>{s}</span>
          {i < steps.length - 1 && <span className="w-3 h-px bg-gradient-to-r from-g1 to-g2" aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}

function Instacart() {
  return (
    <Shell>
      <div className="h-full flex flex-col justify-center gap-4 px-[7%]">
        <div>
          <p className="font-disp font-bold text-[clamp(30px,4vw,44px)] leading-none grad-text inline-block">32M+</p>
          <p className="text-[12px] text-tint/60 mt-1">order lines through Spark and Airflow</p>
        </div>
        <Flow steps={['Kaggle CSVs', 'Spark 3.5', 'Airflow DAG', 'Postgres + SQL Server', 'Power BI']} />
        <div className="flex gap-1.5">
          {['Loyal', 'Occasional', 'Churn risk'].map((s, i) => (
            <span key={s} className="px-2 py-0.5 rounded-full text-[10.5px] border border-tint/15 text-tint/80" style={{ background: `rgb(var(--g${i + 1}) / .18)` }}>{s}</span>
          ))}
        </div>
      </div>
    </Shell>
  )
}

function Hospital() {
  const box = 'rounded-md bg-shade/35 border border-tint/10 px-2 py-1 text-tint/85 whitespace-nowrap'
  return (
    <Shell>
      <div className="h-full flex flex-col justify-center gap-3 px-[6%]">
        {[
          ['staging', ['stg_encounters', 'stg_diagnoses', 'stg_medications']],
          ['intermediate', ['int_icd9_grouped', 'int_age_numeric']],
          ['marts', ['fct_encounter', 'dim_patient', 'dim_diagnosis_category']],
        ].map(([layer, models]) => (
          <div key={layer}>
            <p className={`${mono} text-tint/45 mb-1`}>{layer}</p>
            <div className="flex flex-wrap gap-1.5">
              {models.map((m) => (
                <span key={m} className={`${mono} ${m === 'fct_encounter' ? 'rounded-md px-2 py-1 grad-bg font-semibold' : box}`}>{m}</span>
              ))}
            </div>
          </div>
        ))}
        <p className="text-[11.5px] text-tint/65"><span className="text-ink font-semibold">61</span> dbt tests on 101,766 encounters</p>
      </div>
    </Shell>
  )
}

function Rere() {
  const rows = [
    { t: '8:00 AM', what: 'Medication', note: '1 tablet with breakfast' },
    { t: '6:00 PM', what: 'Therapy exercises', note: '20 minutes' },
    { t: '10:30 PM', what: 'Sleep', note: 'Lights out goal' },
  ]
  return (
    <Shell>
      <div className="h-full flex items-center justify-center gap-6 px-6">
        <div className="w-[38%] max-w-[150px] aspect-[9/17] rounded-[22px] p-[5px] bg-[#16131c] border border-tint/15">
          <div className="h-full rounded-[18px] bg-deep p-2.5 flex flex-col gap-1.5">
            <p className="text-[10px] font-semibold text-tint/85">Today</p>
            {rows.map((r) => (
              <div key={r.what} className="rounded-lg bg-tint/[0.06] p-1.5">
                <p className="text-[8.5px] text-tint/50">{r.t}</p>
                <p className="text-[9.5px] text-tint/90 font-medium leading-tight">{r.what}</p>
                <p className="text-[8px] text-tint/50 leading-tight">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden sm:block max-w-[46%]">
          <p className="font-disp font-semibold text-[18px] leading-tight">Remind &amp; Recover</p>
          <p className="text-[12px] text-tint/60 mt-1.5">Medication, therapy, sleep, and appointment reminders on Android.</p>
        </div>
      </div>
    </Shell>
  )
}

const ARTS = { governance: Governance, xai: Xai, instacart: Instacart, hospital: Hospital, rere: Rere }

export default function CoverArt({ art }) {
  const C = ARTS[art]
  return C ? <C /> : null
}
