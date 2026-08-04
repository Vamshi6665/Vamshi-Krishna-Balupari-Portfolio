import Reveal from './Reveal'
import SectionHead from './SectionHead'

const Chip = ({ children }) => (
  <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-grad-soft border border-indigo/20 text-indigo">{children}</span>
)

const Bullet = ({ children }) => (
  <li className="text-[14.5px] py-1.5 pl-6 relative before:content-['▹'] before:absolute before:left-0.5 before:text-indigo before:text-[13px]">{children}</li>
)

const B = ({ children }) => <strong className="text-ink font-semibold">{children}</strong>

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-24">
      <div className="max-w-[1060px] mx-auto">
        <SectionHead tag="Career" title="Experience"
          sub="From enterprise-scale analytics at DXC to explainability research and real-world product building." />

        <Reveal>
          <div className="group bg-white border border-line rounded-[20px] p-7 md:p-9 mb-5 hover:border-indigo/30 hover:shadow-[0_16px_40px_-20px_rgba(25,24,35,.12)] transition-all relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-grad opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-wrap justify-between items-start gap-2 mb-1.5">
              <div>
                <h3 className="font-disp font-semibold text-xl text-ink">Data Analyst Intern</h3>
                <p className="font-disp font-medium text-[14.5px] text-grad">Tifa · Texas, USA</p>
              </div>
              <span className="font-mono text-xs text-soft">Jul 2026 – Present</span>
            </div>
            <ul className="mt-3.5">
              <Bullet>Designed and deployed an <B>inventory analytics system</B> using PostgreSQL, JavaScript, and Vercel — historical inventory reporting, secure access, weekly trend analysis, and consumption-based reorder forecasting.</Bullet>
              <Bullet>Reconciled and standardized <B>1,783+ historical inventory records</B> from Excel into a reliable dataset for weekly trend analysis.</Bullet>
            </ul>
            <div className="flex flex-wrap gap-1.5 mt-4">
              <Chip>PostgreSQL</Chip><Chip>JavaScript</Chip><Chip>Supabase</Chip><Chip>Vercel</Chip><Chip>AI-Assisted Development</Chip>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="group bg-white border border-line rounded-[20px] p-7 md:p-9 mb-5 hover:border-indigo/30 hover:shadow-[0_16px_40px_-20px_rgba(25,24,35,.12)] transition-all relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-grad opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-wrap justify-between items-start gap-2 mb-1.5">
              <div>
                <h3 className="font-disp font-semibold text-xl text-ink">Research Assistant</h3>
                <p className="font-disp font-medium text-[14.5px] text-grad">Northwest Missouri State University · Missouri, USA</p>
              </div>
              <span className="font-mono text-xs text-soft">May 2025 – Apr 2026</span>
            </div>
            <ul className="mt-3.5">
              <Bullet>Integrated <B>SHAP and Anchor explainability</B> into ML experimentation pipelines to evaluate feature contributions, prediction sensitivity, and model behavior — producing <B>audit-ready outputs</B> while reducing manual review effort.</Bullet>
              <Bullet>Built a <B>conversational codebase-analysis agent</B>; benchmarked GitHub Copilot SDK vs. OpenAI SDK on comprehension, accuracy, consistency, and implementation tradeoffs.</Bullet>
            </ul>
            <div className="flex flex-wrap gap-1.5 mt-4">
              <Chip>SHAP</Chip><Chip>Anchor</Chip><Chip>Responsible AI</Chip><Chip>Python</Chip><Chip>LLM SDKs</Chip>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="group bg-white border border-line rounded-[20px] p-7 md:p-9 hover:border-indigo/30 hover:shadow-[0_16px_40px_-20px_rgba(25,24,35,.12)] transition-all relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-grad opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-wrap justify-between items-start gap-2 mb-1.5">
              <div>
                <h3 className="font-disp font-semibold text-xl text-ink">Analyst</h3>
                <p className="font-disp font-medium text-[14.5px] text-grad">DXC Technology · Hyderabad, India</p>
              </div>
              <span className="font-mono text-xs text-soft">Jul 2021 – Dec 2024</span>
            </div>

            <p className="font-mono text-[11px] text-amberx tracking-[.08em] uppercase mt-5 mb-1">Client · AT&amp;T</p>
            <ul>
              <Bullet>Automated daily CSV ingestion into <B>Snowflake</B>; created a historical device-utilization model with one validated record per device per day, enabling growth-rate analysis and capacity forecasting.</Bullet>
              <Bullet>Built a <B>Power BI capacity-monitoring dashboard</B> on Snowflake tracking daily utilization across telecom storage devices, applying an <B>80% capacity-risk threshold</B> to flag devices approaching exhaustion.</Bullet>
              <Bullet>Performed trend and root-cause analysis on abnormal utilization patterns, distinguishing recurring growth risks from isolated anomalies.</Bullet>
              <Bullet>Reduced storage-related incident escalations by <B>25%</B> and eliminated service disruptions by enabling proactive upgrade scheduling.</Bullet>
            </ul>

            <p className="font-mono text-[11px] text-amberx tracking-[.08em] uppercase mt-5 mb-1">Client · VFS Global</p>
            <ul>
              <Bullet>Built the organization&apos;s <B>first unified Power BI executive reporting layer</B> for global visa operations, consolidating <B>40+ regional systems</B> and enabling daily leadership decisions across <B>5M+ records</B>.</Bullet>
              <Bullet>Developed DAX measures and KPI dashboards for processing volumes, turnaround trends, and regional performance comparisons.</Bullet>
              <Bullet>Led requirements gathering with business teams across <B>40+ regions</B> to align KPI definitions and translate operational needs into reporting specs.</Bullet>
              <Bullet>Implemented automated data-quality validation reducing reporting errors by <B>90%+</B>, making executive metrics audit-ready.</Bullet>
              <Bullet>Designed executive visualizations and regional drill-downs converting complex metrics into clear data stories for leadership.</Bullet>
            </ul>
            <div className="flex flex-wrap gap-1.5 mt-4">
              <Chip>Power BI</Chip><Chip>DAX</Chip><Chip>Snowflake</Chip><Chip>SQL</Chip><Chip>Python</Chip><Chip>Forecasting</Chip><Chip>Root Cause Analysis</Chip>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
