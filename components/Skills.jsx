import Reveal from './Reveal'
import SectionHead from './SectionHead'

const GROUPS = [
  { name: 'BI & Reporting', items: ['Power BI', 'Executive Dashboards', 'KPI Reporting', 'Data Storytelling', 'Tableau', 'Excel', 'Data Visualization'] },
  { name: 'Analytics', items: ['Trend Analysis', 'Root Cause Analysis', 'Forecasting', 'Statistical Analysis', 'Predictive Modeling', 'Ad Hoc Analysis'] },
  { name: 'Programming & Querying', items: ['SQL', 'Python', 'Pandas', 'NumPy', 'scikit-learn', 'DAX', 'MySQL', 'JavaScript'] },
  { name: 'Data Platforms & Engineering', items: ['Snowflake', 'Azure Data Factory', 'Databricks', 'ETL/ELT Design', 'Batch & Real-Time', 'PostgreSQL'] },
  { name: 'Big Data, ML & Responsible AI', items: ['Apache Spark', 'Kafka', 'SHAP', 'Anchor', 'Interpretable ML', 'Responsible AI', 'LLM SDKs'] },
  { name: 'Cloud, Quality & Collaboration', items: ['Microsoft Azure', 'AWS', 'GCP', 'Data Validation', 'Data Cleansing', 'Agile', 'Git/GitHub', 'Jira', 'Stakeholder Management'] },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 bg-gradient-to-b from-bg via-[#f5f3ff] to-bg">
      <div className="max-w-[1060px] mx-auto">
        <SectionHead tag="Toolkit" title="Skills" sub="The stack behind the numbers." />
        <div className="grid md:grid-cols-2 gap-[18px]">
          {GROUPS.map((g, i) => (
            <Reveal key={g.name} delay={(i % 2) * 0.07}>
              <div className="h-full bg-white border border-line rounded-[20px] p-7">
                <h3 className="font-disp font-semibold text-[15px] text-ink mb-4 flex items-center gap-2.5">
                  <span className="w-[9px] h-[9px] rounded-[3px] bg-grad" /> {g.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s}
                      className="text-[12.5px] font-medium px-3.5 py-1.5 rounded-[10px] bg-[#f6f5f2] border border-line hover:border-indigo hover:text-indigo hover:bg-grad-soft transition-colors cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
