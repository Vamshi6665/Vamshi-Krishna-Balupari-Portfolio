import Reveal from './Reveal'
import SectionHead from './SectionHead'

const H4 = ({ children }) => (
  <h4 className="font-mono font-medium text-[13px] tracking-[.08em] uppercase text-soft mb-3 pb-2 border-b border-line">{children}</h4>
)
const Li = ({ children }) => (
  <li className="text-[13.8px] py-1.5 pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-violet">{children}</li>
)
const B = ({ children }) => <strong className="text-ink font-semibold">{children}</strong>

export default function DeepDives() {
  return (
    <section id="deepdives" className="px-6 md:px-12 py-24 bg-gradient-to-b from-[#f5f3ff] to-bg">
      <div className="max-w-[1060px] mx-auto">
        <SectionHead tag="Featured Work" title="Three Stories, Told Properly"
          sub="The projects that best show how I think — building with AI, benchmarking AI, and making AI explainable." />

        {/* TIFA */}
        <Reveal>
          <div className="bg-white border border-line rounded-3xl mb-7 overflow-hidden hover:shadow-[0_20px_50px_-24px_rgba(25,24,35,.15)] transition-shadow">
            <div className="px-7 md:px-10 pt-8">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[.06em] uppercase px-3.5 py-1 rounded-full mb-4 bg-tealx/10 border border-tealx/25 text-tealx">● Production · Local Business Impact</span>
              <h3 className="font-disp font-semibold text-2xl text-ink mb-2">Tifa Inventory Analytics — Built With AI, Budgeted for Reality</h3>
              <p className="text-[15px] max-w-[720px] mb-5">
                A small chocolate &amp; gelato business in Texas was running inventory on <B>seven separate paper and
                spreadsheet logs</B>. I replaced them with one production web platform — designed, built, and shipped
                using an <B>AI-assisted development workflow with Claude</B>, at an infrastructure cost of <B>$0/month</B>.
              </p>
            </div>
            <div className="px-7 md:px-10 pb-9 grid md:grid-cols-2 gap-7">
              <div>
                <H4>The AI-Assisted Workflow</H4>
                <ul>
                  <Li>Used <B>Claude as a pair engineer</B> across the full lifecycle — schema design, migration scripts, parsing logic, and code review — with human verification at every step.</Li>
                  <Li>Real inventory values were messy free-text (&quot;1 new + 3&quot;, percentages, notes). Claude helped design a <B>tolerant parser</B> that extracts comparable numbers, and routes anything unparseable to a manual-review list instead of guessing.</Li>
                  <Li>Migrated <B>1,783+ historical records</B> from 8 Excel exports into an append-only history table — preserving original dates and recorder initials for auditability.</Li>
                </ul>
              </div>
              <div>
                <H4>Budget-Conscious Engineering</H4>
                <ul>
                  <Li>Small business = small budget. Entire stack runs free-tier: <B>Supabase</B> (PostgreSQL + Auth + Row-Level Security) and <B>Vercel</B> hosting.</Li>
                  <Li><B>Consumption-based reorder forecasting</B> compares current stock against par levels — so the owner orders what&apos;s actually needed, cutting over-ordering and stockouts.</Li>
                  <Li>Weekly trend analysis, per-item history, and one-click <B>Excel export</B> keep the owner in tools they already trust.</Li>
                </ul>
              </div>
              <div className="md:col-span-2 bg-grad-soft border-l-[3px] border-indigo rounded-r-2xl px-6 py-4 text-sm text-ink">
                <span className="font-mono text-[10.5px] tracking-[.08em] uppercase text-indigo block mb-1.5">Why it matters</span>
                AI-assisted development isn&apos;t about generating code faster — it&apos;s about a solo analyst delivering a
                production system a small business could never otherwise afford, with data-quality guardrails a
                spreadsheet could never enforce.
              </div>
            </div>
          </div>
        </Reveal>

        {/* CODEREPO */}
        <Reveal delay={0.06}>
          <div className="bg-white border border-line rounded-3xl mb-7 overflow-hidden hover:shadow-[0_20px_50px_-24px_rgba(25,24,35,.15)] transition-shadow">
            <div className="px-7 md:px-10 pt-8">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[.06em] uppercase px-3.5 py-1 rounded-full mb-4 bg-indigo/10 border border-indigo/25 text-indigo">● Research · LLM Engineering</span>
              <h3 className="font-disp font-semibold text-2xl text-ink mb-2">CodeRepoReader — Benchmarking SDKs for Codebase Intelligence</h3>
              <p className="text-[15px] max-w-[720px] mb-5">
                A conversational agent that reads an entire GitHub repository and answers natural-language questions
                about its architecture. The research question: <B>which SDK approach actually works better</B> —
                and how do you fit a whole codebase inside a context window that can&apos;t hold it?
              </p>
            </div>
            <div className="px-7 md:px-10 pb-9 grid md:grid-cols-2 gap-7">
              <div className="md:col-span-2 overflow-x-auto">
                <table className="w-full text-[13px] border-collapse">
                  <thead>
                    <tr>
                      <th className="font-mono text-[11px] tracking-[.06em] uppercase text-soft text-left px-3.5 py-2.5 border-b-2 border-line"></th>
                      <th className="font-mono text-[11px] tracking-[.06em] uppercase text-soft text-left px-3.5 py-2.5 border-b-2 border-line">GitHub Copilot SDK</th>
                      <th className="font-mono text-[11px] tracking-[.06em] uppercase text-soft text-left px-3.5 py-2.5 border-b-2 border-line">OpenAI-Style SDK (GitHub Models API)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3.5 py-3 border-b border-line font-semibold text-ink whitespace-nowrap align-top">Strengths</td>
                      <td className="px-3.5 py-3 border-b border-line align-top">Event-driven streaming sessions, built-in auth via <code className="font-mono text-xs">gh</code> CLI, automatic model detection — fast to integrate, great developer ergonomics.</td>
                      <td className="px-3.5 py-3 border-b border-line align-top">Full prompt control, stateless simplicity, and multi-model flexibility — GPT-4o, GPT-4o Mini, and Llama 3.1 70B behind one interface.</td>
                    </tr>
                    <tr>
                      <td className="px-3.5 py-3 border-b border-line font-semibold text-ink whitespace-nowrap align-top">Tradeoffs</td>
                      <td className="px-3.5 py-3 border-b border-line align-top">Less control over prompt construction; session state adds complexity for reproducible benchmarking.</td>
                      <td className="px-3.5 py-3 border-b border-line align-top">Everything is manual — context assembly, token budgeting, and conversation state are your problem.</td>
                    </tr>
                    <tr>
                      <td className="px-3.5 py-3 font-semibold text-ink whitespace-nowrap align-top">Benchmarked on</td>
                      <td className="px-3.5 py-3 align-top" colSpan={2}>Comprehension · Accuracy · Consistency · Implementation effort — across the same repositories and question sets.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <H4>The Context-Limit Problem</H4>
                <ul>
                  <Li>Real repositories are <B>far larger than any context window</B> — you cannot paste a codebase into a prompt.</Li>
                  <Li>Solution: a custom <B>static analyzer</B> (Python AST + regex for JS/Java/C#) distills each repo into a compact structured summary — language breakdown, classes, functions, dependencies, entry points, architecture patterns.</Li>
                  <Li>The model reasons over the <B>distilled representation</B>, not raw code — dramatically reducing token consumption per question.</Li>
                </ul>
              </div>
              <div>
                <H4>Tokenization &amp; Cost Awareness</H4>
                <ul>
                  <Li>Code tokenizes expensively — identifiers, symbols, and whitespace inflate token counts versus prose.</Li>
                  <Li>Per-session <B>analysis caching</B> means the repo is distilled once, then every follow-up question reuses it — cheaper and more consistent answers.</Li>
                  <Li>Built as a Flask web app accepting <B>ZIP upload or GitHub URL</B>, with streaming responses for conversational feel.</Li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RESPONSIBLE AI */}
        <Reveal delay={0.06}>
          <div className="bg-white border border-line rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_-24px_rgba(25,24,35,.15)] transition-shadow">
            <div className="px-7 md:px-10 pt-8">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[.06em] uppercase px-3.5 py-1 rounded-full mb-4 bg-rosex/10 border border-rosex/25 text-rosex">● Research · Explainable AI</span>
              <h3 className="font-disp font-semibold text-2xl text-ink mb-2">SHAP &amp; Anchor — Why Responsible AI Isn&apos;t Optional</h3>
              <p className="text-[15px] max-w-[720px] mb-5">
                Models increasingly make decisions that affect people — loans, hiring, healthcare, operations.
                When a black box says <em>no</em>, someone deserves to know <B>why</B>. My research integrates
                explainability directly into ML pipelines so every prediction ships with its reasoning.
              </p>
            </div>
            <div className="px-7 md:px-10 pb-9 grid md:grid-cols-2 gap-7">
              <div>
                <H4>Why People Need Responsible AI</H4>
                <ul>
                  <Li>An unexplained decision <B>can&apos;t be contested, audited, or trusted</B> — for regulated industries that&apos;s a legal problem, for everyone else it&apos;s a trust problem.</Li>
                  <Li>Hidden bias compounds silently: a model can be accurate on average while being <B>systematically wrong for specific groups</B>. You only find this by looking inside.</Li>
                  <Li>Teams adopt AI they understand and quietly abandon AI they don&apos;t — <B>explainability is what converts a demo into a deployed system</B>.</Li>
                </ul>
              </div>
              <div>
                <H4>How I Make Models Explain Themselves</H4>
                <ul>
                  <Li><B>SHAP</B> quantifies each feature&apos;s contribution to every individual prediction — turning &quot;the model said 0.82&quot; into &quot;utilization trend contributed +0.31, device age +0.19…&quot;</Li>
                  <Li><B>Anchor</B> extracts human-readable IF–THEN rules that are sufficient for a prediction — the format domain experts can actually verify against their own knowledge.</Li>
                  <Li>Integrated both into experimentation pipelines producing <B>audit-ready outputs automatically</B> — cutting manual review effort while raising accountability.</Li>
                </ul>
              </div>
              <div className="md:col-span-2 bg-grad-soft border-l-[3px] border-indigo rounded-r-2xl px-6 py-4 text-sm text-ink">
                <span className="font-mono text-[10.5px] tracking-[.08em] uppercase text-indigo block mb-1.5">The influence of explainability</span>
                When people can see the reasoning, two things happen: they trust correct predictions faster, and they
                catch incorrect ones sooner. Explainability doesn&apos;t just make AI more transparent — it makes the
                human + AI system more accurate than either alone.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
