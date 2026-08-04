'use client'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

const PROJECTS = [
  {
    icon: '▦', tint: 'bg-tealx/10 text-tealx', year: '2026',
    title: 'Tifa Inventory Analytics Platform',
    desc: 'Production inventory system for a Texas chocolate & gelato business — replaced 7 paper/spreadsheet logs. Historical reporting, weekly trends, consumption-based reorder forecasting, Excel export. Built with an AI-assisted workflow on $0/month infrastructure.',
    chips: ['PostgreSQL', 'Supabase', 'JavaScript', 'Vercel', 'SheetJS'],
  },
  {
    icon: '◈', tint: 'bg-indigo/10 text-indigo', year: '2025–26',
    title: 'CodeRepoReader — Conversational Codebase Agent',
    desc: 'Upload a repo or ZIP, ask questions about its architecture. Multi-model (GPT-4o, GPT-4o Mini, Llama 3.1 70B), AST-based static analysis to beat context limits, per-session caching, streaming chat. Benchmarked Copilot SDK vs OpenAI SDK for a research paper.',
    chips: ['Python', 'Flask', 'GitHub Models API', 'Copilot SDK', 'AST'],
  },
  {
    icon: '◎', tint: 'bg-rosex/10 text-rosex', year: '2025–26',
    title: 'Explainable AI Research Pipeline',
    desc: 'SHAP feature-contribution analysis and Anchor rule extraction integrated into ML experimentation pipelines — evaluating prediction sensitivity and model behavior with audit-ready outputs for Responsible AI governance.',
    chips: ['SHAP', 'Anchor', 'scikit-learn', 'Python', 'Interpretable ML'],
  },
  {
    icon: '◔', tint: 'bg-amberx/10 text-amberx', year: '2021–24',
    title: 'AT&T Storage Capacity Forecasting',
    desc: 'Automated CSV → Snowflake ingestion with one validated record per device per day. Power BI capacity-risk dashboard with 80% threshold alerting — 25% fewer incident escalations, zero capacity-related service disruptions.',
    chips: ['Snowflake', 'Power BI', 'SQL', 'Forecasting'],
  },
  {
    icon: '▤', tint: 'bg-violet/10 text-violet', year: '2021–24',
    title: 'VFS Global Executive Reporting Layer',
    desc: "The organization's first unified Power BI reporting layer — 40+ regional systems consolidated, 5M+ records daily, DAX KPI dashboards, automated data-quality validation cutting reporting errors 90%+. Requirements led across 40+ regions.",
    chips: ['Power BI', 'DAX', 'Data Quality', 'Stakeholder Mgmt'],
  },
  {
    icon: '⬡', tint: 'bg-tealx/10 text-tealx', year: '2025',
    title: 'Instacart Big Data ETL Pipeline',
    desc: 'End-to-end pipeline on the real Kaggle Instacart dataset — PySpark processing 3.4M+ orders, Airflow orchestration, customer segmentation (Loyal / Occasional / Churn-Risk), dual-warehouse loading to PostgreSQL and SQL Server.',
    chips: ['PySpark', 'Airflow', 'Docker', 'PostgreSQL'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-24">
      <div className="max-w-[1060px] mx-auto">
        <SectionHead tag="Portfolio" title="Projects"
          sub="Selected work across analytics engineering, AI research, and product development." />
        <div className="grid md:grid-cols-2 gap-[18px]">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.07}>
              <motion.div whileHover={{ y: -4 }}
                className="h-full bg-white border border-line rounded-[20px] p-7 flex flex-col hover:border-indigo/35 hover:shadow-[0_18px_44px_-22px_rgba(25,24,35,.14)] transition-all">
                <div className="flex justify-between items-center mb-3.5">
                  <div className={`w-11 h-11 rounded-[13px] flex items-center justify-center text-[19px] ${p.tint}`}>{p.icon}</div>
                  <span className="font-mono text-[11.5px] text-soft">{p.year}</span>
                </div>
                <h3 className="font-disp font-semibold text-[17.5px] text-ink mb-2">{p.title}</h3>
                <p className="text-[13.8px] flex-1 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.chips.map((c) => (
                    <span key={c} className="font-mono text-[10.5px] px-2.5 py-0.5 rounded-full bg-[#f4f3f0] border border-line">{c}</span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
