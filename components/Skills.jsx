import Reveal from './Reveal'
import SectionHead from './SectionHead'

const GROUPS = [
  { name: 'BI and reporting', items: ['Power BI', 'DAX', 'Executive dashboards', 'KPI design', 'Data storytelling', 'Tableau', 'Excel'] },
  { name: 'Analytics', items: ['Trend analysis', 'Root cause analysis', 'Forecasting', 'Statistical analysis', 'Predictive modeling', 'Ad hoc analysis'] },
  { name: 'Programming and querying', items: ['SQL', 'Python', 'pandas', 'NumPy', 'scikit-learn', 'JavaScript', 'MySQL'] },
  { name: 'Data platforms and engineering', items: ['Snowflake', 'dbt', 'Apache Airflow', 'Azure Data Factory', 'Databricks', 'PostgreSQL', 'SQL Server', 'Amazon Athena', 'ETL / ELT design'] },
  { name: 'Big data, ML, and explainable AI', items: ['Apache Spark', 'Kafka', 'SHAP', 'Anchor', 'Interpretable ML', 'LLM SDKs'] },
  { name: 'Cloud, quality, and delivery', items: ['Microsoft Azure', 'AWS', 'GCP', 'Docker', 'Data validation', 'Git and GitHub', 'Agile', 'Jira', 'Stakeholder management'] },
]

export default function Skills() {
  return (
    <section id="skills" className="px-5 md:px-8 py-16 md:py-24 bg-gradient-to-b from-bg via-[#f5f3ff] to-bg">
      <div className="max-w-[1120px] mx-auto">
        <SectionHead tag="Toolkit" title="Skills" sub="The tools behind the work above." />
        <div className="grid md:grid-cols-2 gap-4">
          {GROUPS.map((g, i) => (
            <Reveal key={g.name} delay={(i % 2) * 0.06} className="h-full">
              <div className="h-full bg-white border border-line rounded-[20px] p-6 md:p-7">
                <h3 className="font-disp font-semibold text-[16px] text-ink mb-4 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-[3px] bg-grad" aria-hidden="true" /> {g.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="text-[13.5px] font-medium px-3 py-1.5 rounded-[10px] bg-[#f6f5f2] border border-line"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
