// Single source of truth for portfolio copy and links.
// Components only handle layout. Wrap a phrase in **double asterisks** to bold it.

export const PROFILE = {
  name: 'Vamshi Krishna Balupari',
  email: 'vamshikrishnabalupari@gmail.com',
  phone: '+1 (660) 493-5399',
  phoneHref: 'tel:+16604935399',
  location: 'Houston, TX',
  linkedin: 'https://www.linkedin.com/in/vamshikrishnabalupari/',
  github: 'https://github.com/Vamshi6665',
}

// Role lenses. The selected lens re-tunes the hero, the KPI tiles, the work grid, and each project's detail panel.
// color = accent on white (AA with white text too), onDark = accent on dark tiles, short = label in the switcher.
export const LENSES = [
  { id: 'all', label: 'All work', short: 'All', color: '#C2410C', onDark: '#FDBA74' },
  { id: 'da', label: 'Data Analyst', short: 'Analyst', color: '#2563EB', onDark: '#93C5FD' },
  { id: 'de', label: 'Data Engineer', short: 'Engineer', color: '#047857', onDark: '#6EE7B7' },
  { id: 'ml', label: 'Machine Learning', short: 'ML', color: '#7C3AED', onDark: '#C4B5FD' },
  { id: 'genai', label: 'Gen AI', short: 'Gen AI', color: '#BE185D', onDark: '#F9A8D4' },
]

// Hero copy and the four KPI flip tiles per lens. `from` is printed on the back of each tile.
export const HERO = {
  all: {
    title: 'Data pipelines, dashboards, and AI tools, built end to end.',
    body: '4+ years engineering data for AT&T and VFS Global at DXC Technology, an M.S. in Applied Computer Science with a 4.0 GPA, and production systems for a retail business today.',
    proof: [
      { value: '5M+', label: 'records consolidated from 40+ regional sources', from: 'VFS Global: Azure Data Factory and Databricks into Snowflake', href: '#case-vfs' },
      { value: '90%+', label: 'fewer recurring reporting errors', from: 'VFS Global: automated validation and reconciliation', href: '#case-vfs' },
      { value: '25%', label: 'fewer storage escalations', from: 'AT&T: 80% utilization alerts in Power BI', href: '#case-att' },
      { value: '271', label: 'automated tests in a live inventory app', from: 'Tifa Inventory: Vitest and Playwright in CI', href: '#case-tifa-inventory' },
    ],
  },
  da: {
    title: 'Metrics leaders can act on.',
    body: 'KPI models and Power BI reporting over millions of records, from executive views across 40+ regions to capacity alerts, recruiting funnels, and inventory dashboards.',
    proof: [
      { value: '90%+', label: 'fewer reporting errors after automated validation', from: 'VFS Global: schema, duplicate, and integrity checks', href: '#case-vfs' },
      { value: '25%', label: 'fewer escalations from 80% threshold alerts', from: 'AT&T: Power BI exception reports', href: '#case-att' },
      { value: '80/80', label: 'recruiting KPIs matching Power BI exactly', from: 'Recruitment Hub: DuckDB parity script', href: '#case-recruitment-hub' },
      { value: '8', label: 'customer and product KPIs from 3.4M orders', from: 'Instacart: PySpark marts for Power BI', href: '#case-instacart' },
    ],
  },
  de: {
    title: 'Pipelines that hold up in production.',
    body: 'Azure Data Factory, Databricks, AWS Glue, Snowflake, and Athena pipelines with layered storage, incremental loads, star schemas, and reconciliation built in.',
    proof: [
      { value: '40+', label: 'SQL Server sources consolidated into Snowflake', from: 'VFS Global: ADF ingestion, Databricks PySpark', href: '#case-vfs' },
      { value: '5M+', label: 'records in curated reporting datasets', from: 'VFS Global: star schemas with SQL MERGE', href: '#case-vfs' },
      { value: '32M+', label: 'order lines processed in Spark', from: 'Instacart: Dockerized Spark and Airflow', href: '#case-instacart' },
      { value: '61', label: 'dbt data tests on a healthcare star schema', from: 'Hospital Readmissions: dbt on PostgreSQL', href: '#case-hospital' },
    ],
  },
  ml: {
    title: 'Models that explain their decisions.',
    body: 'Calibrated scikit-learn models with SHAP and Anchor explanations, plus utilization and growth features for anomaly analysis on device telemetry.',
    proof: [
      { value: '95.6%', label: 'Random Forest accuracy with explained predictions', from: 'XAI study: breast cancer data with Anchor', href: '#case-xai' },
      { value: '0.97+', label: 'Anchor rule precision on sample cases', from: 'XAI study: local Anchor rules', href: '#case-xai' },
      { value: '94.3%', label: 'accuracy from a readable 5-rule model', from: 'XAI study: rule-based interpretable model', href: '#case-xai' },
      { value: '5', label: 'explainability studies with code', from: 'Explainable AI research notebooks', href: '#case-xai' },
    ],
  },
  genai: {
    title: 'LLM apps grounded in real data.',
    body: 'Agents and assistants on the OpenAI, GitHub Copilot, and Claude SDKs, built with an AI-assisted workflow where tests, not prompts, decide what ships.',
    proof: [
      { value: '3', label: 'LLM features built into working apps', from: 'Inventory assistant, flavor guide, codebase agent', href: '#build-with-ai' },
      { value: '2', label: 'LLM SDKs benchmarked for a research paper', from: 'CodeRepoReader AI: OpenAI vs GitHub Copilot SDK', href: '#case-coderepo' },
      { value: '271', label: 'tests guarding an AI-assisted build', from: 'Tifa Inventory: tests decide what ships', href: '#case-tifa-inventory' },
      { value: '0', label: 'API keys exposed to the browser', from: 'Tifa Website: server-side AI proxy', href: '#case-tifa-website' },
    ],
  },
}

// Small tiles in the intro grid.
export const NOW = { role: 'Data Associate', org: 'Tifa Chocolate & Gelato', place: 'Walnut Creek, CA', since: 'Jul 2026' }
export const STACK = ['Azure Data Factory', 'Databricks', 'PySpark', 'Snowflake', 'AWS Glue', 'Amazon Athena', 'Power BI', 'DAX', 'Apache Airflow', 'dbt', 'scikit-learn', 'SHAP', 'Claude API', 'React', 'Supabase', 'Docker']

// One tile per project in the Work grid, in grid order. `look` picks the tile's visual.
export const WORK_TILES = [
  { id: 'tifa-inventory', look: 'hero', eyebrow: 'live product · 2026', line: 'Live counts, forecasts, and reorders for a gelato shop. 271 tests, $0 a month.' },
  { id: 'recruitment-hub', look: 'wide', eyebrow: 'analytics app · 2026', line: 'Athena over S3, matching Power BI on 80 of 80 checks.' },
  { id: 'vfs', look: 'dark', eyebrow: 'client work · dxc', big: '40+ → 1', line: 'regional sources into one Snowflake model' },
  { id: 'att', look: 'gauge', eyebrow: 'client work · dxc', gauge: 80, gaugeLabel: 'alert at 80% utilization', line: '25% fewer storage escalations' },
  { id: 'tifa-website', look: 'shot', eyebrow: 'customer site · 2026', line: 'AI flavor guide with Claude' },
  { id: 'xai', look: 'stat', eyebrow: 'research', big: '95.6%', line: 'accuracy, each prediction explained with SHAP and Anchor' },
  { id: 'coderepo', look: 'chat', eyebrow: 'research · paper', ask: 'Where is authentication handled in this repo?', line: 'OpenAI vs GitHub Copilot SDKs' },
  { id: 'tifa-aws', look: 'flow', eyebrow: 'company work · 2026', flow: ['S3', 'Glue', 'Athena', 'QuickSight'], line: 'Inventory analysis dashboards on AWS' },
  { id: 'instacart', look: 'wide-stat', eyebrow: 'big data · 2025', big: '32M+', line: 'order lines through Spark and Airflow into customer segments and product marts' },
  { id: 'hospital', look: 'wide-stat', eyebrow: 'in progress', big: '61', line: 'dbt data tests on a 101,766-encounter healthcare star schema' },
]

// Case studies, in the order shown under "All work".
// pipeline = Data Engineer view, kpis = Data Analyst view, ml / genai = their views.
export const CASE_STUDIES = [
  {
    id: 'tifa-inventory',
    kind: 'Live product',
    year: '2026',
    title: 'Tifa Inventory System',
    hook: 'The system a Walnut Creek chocolate and gelato shop runs its stock on: live counts, usage forecasts, reorders, and staff access, on $0 of infrastructure.',
    lenses: ['da', 'de', 'genai'],
    role: 'Solo build: data model, app, and deployment',
    stack: 'React, TypeScript, Supabase Postgres, Vercel',
    links: [
      { label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/tifa-inventory', primary: true },
      { label: 'Open live app', href: 'https://tifa-inventory.vercel.app', note: 'sign-in required' },
    ],
    frameLabel: 'tifa-inventory.vercel.app',
    metrics: [
      { value: '7 → 1', label: 'paper and spreadsheet logs replaced' },
      { value: '271', label: 'automated tests in CI' },
      { value: '100', label: 'Lighthouse performance, desktop' },
      { value: '$0', label: 'monthly infrastructure' },
    ],
    shots: [
      { src: '/images/tifa-inventory/overview-light.webp', w: 1600, h: 1000, caption: 'Overview: out of stock, low, needs review, and not counted lately, each with its reason.' },
      { src: '/images/tifa-inventory/mobile-count.webp', w: 390, h: 844, mobile: true, caption: 'Stock count on a phone.' },
      { src: '/images/tifa-inventory/item-detail.webp', w: 1600, h: 1000, caption: 'Item detail: usage per day, run-out date, suggested order, and a 12-week trend with its math shown.' },
      { src: '/images/tifa-inventory/reorder.webp', w: 1600, h: 1000, caption: 'Reorder: items at or below par plus items projected to cross it, grouped by supplier.' },
      { src: '/images/tifa-inventory/analytics-dark.webp', w: 1600, h: 1000, caption: 'Analytics: running out soonest, counting activity, and fastest movers.' },
      { src: '/images/tifa-inventory/inventory.webp', w: 1600, h: 1000, caption: 'Inventory grid: search, filters, inline count edits, and saved views.' },
      { src: '/images/tifa-inventory/team.webp', w: 1600, h: 1000, caption: 'Team: approve sign-ups and set each person’s role and categories, enforced by the database.' },
      { src: '/images/tifa-inventory/mobile-overview.webp', w: 390, h: 844, mobile: true, caption: 'Overview on a phone.' },
      { src: '/images/tifa-inventory/mobile-inventory.webp', w: 390, h: 844, mobile: true, caption: 'Inventory as cards on a phone.' },
    ],
    shotsNote: 'Screens show the app’s built-in demo data with fictional names.',
    kpis: ['Daily usage per item', 'Run-out date', 'Weeks of cover', 'Items at or below par', 'Projected to cross par before the next order', 'Readable count rate', 'Counts per week', 'Not counted in 14+ days'],
    pipeline: [
      { tool: 'Phone count', note: 'Staff type counts as they walk the shelves' },
      { tool: 'Postgres function', note: 'Validates and writes in one transaction' },
      { tool: 'History + audit log', note: 'Append-only, written by the database' },
      { tool: 'Realtime', note: 'Every open device updates' },
      { tool: 'Forecast rules', note: 'Usage per day, run-out, reorder quantity' },
      { tool: 'Dashboards + Excel', note: 'Overview, reorder, analytics, exports' },
    ],
    deNotes: [
      'Row Level Security enforces roles (admin, staff, viewer) and category access in the database, proven by 22 database tests.',
      'Built for growth: multi-location (multi-tenant) support is planned by adding a location ID and location membership to the same security rules.',
      'Zero cost: static build on Vercel and data on Supabase free tiers; pull requests deploy previews on sample data.',
    ],
    genai: [
      'Inventory assistant: retrieves the asking user’s stock data under their own permissions, then answers with Claude, so the model only sees what that person can.',
      'Guardrails: item names are treated as data, not instructions; answers run at temperature 0 with per-user rate limits.',
      'Built with an AI-assisted workflow: a written spec, Claude as pair engineer, and 271 tests deciding what ships.',
    ],
    overview: [
      'Tifa Chocolate & Gelato in Walnut Creek, CA goes through ingredients every day. Stock lived in **seven paper and spreadsheet logs**, counts were free text such as "1new+.75" or "45% remaining", and reordering was guesswork, which leads to stockouts and over-ordering.',
      'I built the system the shop now runs stock on. Version 1 replaced the logs with a live dashboard. **Version 2.0** rebuilt it as a typed React app with staff roles, an audit log, transparent forecasting, and purchasing.',
    ],
    workflow: [
      { step: 'Frontend', text: 'React 19 and strict TypeScript on Vite. TanStack Query caches server data so count edits feel instant, and one shared data grid powers every table, with a card layout on phones.' },
      { step: 'Backend', text: 'Supabase Postgres with email and Google sign-in. Every stock change runs through a database function that writes history and an audit entry in one transaction.' },
      { step: 'Trend analysis', text: 'Daily usage is the drop between counts divided by the days, with deliveries left out. That drives run-out dates, fastest movers, 12-week trends, and reorder quantities.' },
      { step: 'Quality', text: '241 Vitest and 30 Playwright tests run in GitHub Actions with type, lint, contrast, and bundle-size checks.' },
    ],
    decisions: [
      { title: 'Permissions in the database', why: 'Row Level Security decides who can see and change what, so a UI bug cannot open a data hole.', tradeoff: 'Rules exist in SQL and are mirrored in the UI, so both must stay in sync.' },
      { title: 'Read what’s clear, flag the rest', why: 'Free-text counts are parsed when unambiguous; mixed units go to a review list. Tested on all 1,721 real values from the shop.', tradeoff: 'Staff fix a few entries by hand in exchange for numbers they can trust.' },
      { title: 'Transparent forecasts', why: 'Every forecast explains its math in one sentence, so the owner can check it before ordering.', tradeoff: 'Simple rates can miss seasonality a heavier model might catch.' },
    ],
    outcome: 'Live in production for the shop. Purchase orders, suppliers, and the activity log switch on with a pending database migration.',
  },
  {
    id: 'recruitment-hub',
    kind: 'Analytics app',
    year: '2026',
    title: 'Recruitment Hub',
    hook: 'Recruiting KPIs rebuilt from Power BI into a web app, running live SQL on Amazon Athena over data in S3, with every number checked against Power BI.',
    lenses: ['da', 'de'],
    role: 'Data model, SQL, API integration, and front end',
    stack: 'AWS S3, Amazon Athena, Node.js, Express, React',
    links: [{ label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/RecruitmentDashboard', primary: true }],
    frameLabel: 'Recruitment Hub, offline demo mode',
    metrics: [
      { value: '80/80', label: 'validation checks match Power BI' },
      { value: '57', label: 'automated tests' },
      { value: '20,000', label: 'applications modeled' },
      { value: '15 min', label: 'query cache in front of Athena' },
    ],
    shots: [
      { src: '/images/recruitment-hub/overview.webp', w: 1440, h: 900, caption: 'Recruitment Overview: six KPIs, positions, monthly trend, and hires by position.' },
      { src: '/images/recruitment-hub/mobile.webp', w: 390, h: 844, mobile: true, caption: 'Overview on a phone.' },
      { src: '/images/recruitment-hub/recruiter-analysis.webp', w: 1440, h: 900, caption: 'Recruiter Analysis: outcomes per recruiter, monthly trend, and stage conversion.' },
      { src: '/images/recruitment-hub/jobs.webp', w: 1440, h: 900, caption: 'Jobs: 340 requisitions with status, openings, and hires.' },
    ],
    shotsNote: 'Built on a synthetic dataset: 20,000 applications, 340 requisitions, 10 recruiters. Client names are placeholders.',
    kpis: [
      { label: 'Candidates reached', value: '16,730' },
      { label: 'Submissions', value: '9,622' },
      { label: 'Interviewed', value: '5,456' },
      { label: 'Offers', value: '2,277' },
      { label: 'Hires', value: '1,892' },
      { label: 'Fill rate', value: '72.8%' },
      { label: 'Hires per submission', value: '19.7%' },
      { label: 'Offer to hire', value: '83%' },
    ],
    pipeline: [
      { tool: 'Amazon S3', note: 'Applications, events, jobs, recruiters as CSV' },
      { tool: 'Athena tables + views', note: 'Each KPI defined once in SQL' },
      { tool: 'Express API', note: 'Zod validation, 4 parallel queries, cache' },
      { tool: 'React dashboards', note: 'KPIs, trends, drill-down timeline' },
      { tool: 'Parity checks', note: 'DuckDB runs the same SQL vs Power BI' },
    ],
    deNotes: [
      'API integration: parameterized Athena queries through the AWS SDK v3, with Helmet security headers, rate limiting, and CORS.',
      'Resilience: if Athena is unreachable, the same report is computed from exported JSON and the app shows which source answered.',
      'Delivery: Docker image, GitHub Actions CI on Node 20 and 22, and a Vercel serverless deploy.',
    ],
    overview: [
      'Recruiting reports usually live in Power BI, apart from the jobs and recruiter screens managers use all day. This app puts both in one place: the **Recruitment Overview** and **Recruiter Analysis** reports sit next to Jobs and Recruiters, with live numbers from Amazon Athena.',
      'The hard part was trust. Every KPI had to match the Power BI report exactly, for every filter.',
    ],
    workflow: [
      { step: 'Land', text: 'Recruiting history lands as CSV in S3, one folder per table.' },
      { step: 'Model', text: 'Athena external tables and SQL views define each metric once, counted by event date.' },
      { step: 'Serve', text: 'An Express API validates every filter, runs four Athena queries in parallel, and caches results for 15 minutes.' },
      { step: 'Show', text: 'React 19 front end with KPI cards, positions summary, monthly trend, stage activity, a recruiter table, and a candidate timeline.' },
    ],
    decisions: [
      { title: 'One definition, three engines', why: 'Athena SQL, the JSON fallback, and Power BI DAX share the same rules, so numbers never drift.', tradeoff: 'Every new KPI is written and tested three ways.' },
      { title: 'Prove parity with Power BI', why: 'A script runs the API’s SQL verbatim in DuckDB and compares 80 values with JSON mode and Power BI. All pass.', tradeoff: 'Extra tooling, but no silent mismatch reaches a manager.' },
      { title: 'Query S3 directly', why: 'Athena over S3 means no database server to run.', tradeoff: 'Athena bills per data scanned, which the cache keeps low.' },
    ],
    outcome: 'Every filter (date, recruiter, position, client) returns the same answer Power BI gives, inside one app with the daily workflow.',
  },
  {
    id: 'vfs',
    kind: 'Client work at DXC',
    year: '2021 – 2024',
    title: 'VFS Global Reporting Platform',
    hook: 'Consolidated 40+ regional SQL Server sources into Snowflake for global visa operations reporting, cutting recurring reporting errors by more than 90%.',
    lenses: ['de', 'da'],
    role: 'Analyst on the DXC delivery team',
    stack: 'Azure Data Factory, Databricks, PySpark, Snowflake, Power BI',
    links: [],
    privateNote: 'Client work. Code and data belong to the client.',
    metrics: [
      { value: '40+', label: 'regional SQL Server sources' },
      { value: '5M+', label: 'records in reporting datasets' },
      { value: '90%+', label: 'fewer recurring reporting errors' },
    ],
    kpis: ['Application volume by region', 'Turnaround time', 'Service-level performance', 'Regional comparisons', 'Source-to-target reconciliation status'],
    pipeline: [
      { tool: 'SQL Server × 40+', note: 'On-premises regional sources' },
      { tool: 'Azure Data Factory', note: 'Ingestion and load dependencies' },
      { tool: 'Databricks PySpark', note: 'Harmonize schemas, IDs, dates, services' },
      { tool: 'Validation', note: 'Schema, duplicates, referential integrity' },
      { tool: 'Snowflake', note: 'Star schemas, MERGE, backfills' },
      { tool: 'Power BI', note: 'Executive and regional reporting' },
    ],
    deNotes: [
      'Raw, standardized, and curated layers separate ingestion from transformation and make discrepancies traceable.',
      'Incremental loading with SQL MERGE and controlled backfills adds new and corrected records without rebuilding history.',
      'Fact tables, conformed dimensions, and star schemas with defined grain and business keys.',
      'Releases through Git and Azure DevOps with code review and acceptance testing against source records.',
    ],
    overview: [
      'Global visa operations ran on **40+ regional SQL Server systems**, each with its own schemas, identifiers, and date formats. Leadership needed one consistent view of volumes, turnaround, and service levels.',
      'As part of the DXC team, I built the ingestion and transformation pipelines and the warehouse models behind that reporting.',
    ],
    workflow: [
      { step: 'Ingest', text: 'Azure Data Factory pipelines pull from on-premises SQL Server with defined extraction logic, mappings, and load dependencies.' },
      { step: 'Transform', text: 'Databricks PySpark harmonizes regional schemas, identifiers, date formats, and service classifications.' },
      { step: 'Validate', text: 'Schema validation, duplicate detection, referential-integrity checks, and reconciliation run before publishing.' },
      { step: 'Model', text: 'Snowflake star schemas with incremental MERGE loads and reusable warehouse views.' },
    ],
    decisions: [
      { title: 'Incremental, not full rebuilds', why: 'MERGE loads and controlled backfills add new and corrected records without reprocessing all history.', tradeoff: 'Merge keys and late-arriving data need careful handling.' },
      { title: 'Layered storage', why: 'Keeping raw, standardized, and curated layers makes every number traceable to its source.', tradeoff: 'More storage and more stages to monitor.' },
      { title: 'Reconcile before release', why: 'Source-to-target checks stop bad data before leaders see it.', tradeoff: 'A failed check can delay a load, which beats a wrong number.' },
    ],
    outcome: 'One consistent reporting foundation across regions, with recurring reporting errors down more than 90%.',
  },
  {
    id: 'att',
    kind: 'Client work at DXC',
    year: '2021 – 2024',
    title: 'AT&T Storage Capacity Analytics',
    hook: 'AWS pipelines that turned regional storage telemetry into curated datasets and Power BI exception reports, contributing to 25% fewer storage escalations.',
    lenses: ['de', 'da', 'ml'],
    role: 'Analyst on the DXC delivery team',
    stack: 'AWS Glue, PySpark, Amazon S3, Athena, Power BI',
    links: [],
    privateNote: 'Client work. Code and data belong to the client.',
    metrics: [
      { value: '25%', label: 'fewer storage-related escalations' },
      { value: '80%', label: 'utilization threshold for alerts' },
      { value: '3', label: 'storage layers: raw, validated, curated' },
    ],
    kpis: ['Daily utilization per device', 'Growth rate over time', 'Devices approaching 80% utilization', 'Exception list for intervention'],
    pipeline: [
      { tool: 'Storage telemetry', note: 'Regional device files' },
      { tool: 'AWS Glue ETL', note: 'Ingest into Amazon S3' },
      { tool: 'Amazon S3', note: 'Raw, validated, curated layers' },
      { tool: 'PySpark', note: 'Standardize IDs, timestamps, units, utilization' },
      { tool: 'Parquet + Athena', note: 'Partition pruning, column reads' },
      { tool: 'Power BI', note: '80% threshold exception reports' },
    ],
    deNotes: [
      'Monitored runs with CloudWatch logs and metrics, investigated failures, and restored deliveries through controlled reruns.',
      'Record-completeness checks, field validation, and source-to-target reconciliation kept bad telemetry out of curated data.',
      'IAM policies scoped access to datasets and processing resources.',
    ],
    ml: [
      'Prepared historical utilization and growth-rate datasets for forecasting and anomaly analysis.',
      'Flagged abnormal utilization and separated recurring growth (upgrade needed) from one-off spikes (no action).',
    ],
    overview: [
      'Storage devices that reach full capacity cause service disruptions and emergency escalations.',
      'The team needed reliable daily utilization data to see which devices were heading there early enough to act.',
    ],
    workflow: [
      { step: 'Ingest', text: 'AWS Glue ETL pipelines ingest regional storage telemetry into Amazon S3.' },
      { step: 'Standardize', text: 'PySpark standardizes device identifiers, timestamps, units, and utilization calculations.' },
      { step: 'Store', text: 'Partitioned Parquet in curated layers, queried through Athena with partition pruning.' },
      { step: 'Alert', text: 'Power BI measures and exception reports flag devices approaching 80% utilization.' },
    ],
    decisions: [
      { title: 'Keep the raw files', why: 'A raw layer preserves source files for traceability and reprocessing.', tradeoff: 'More storage to manage.' },
      { title: 'Partition for cost', why: 'Partitioned Parquet lets Athena skip data it doesn’t need.', tradeoff: 'Partition keys must match how people query.' },
      { title: 'Act at 80%, not 100%', why: 'Leaves enough runway to schedule upgrades instead of reacting to outages.', tradeoff: 'Some devices are upgraded a little early.' },
    ],
    outcome: 'Earlier intervention on at-risk devices contributed to a 25% reduction in storage-related escalations.',
  },
  {
    id: 'tifa-aws',
    kind: 'Company work',
    year: '2026',
    title: 'Tifa Inventory Analytics on AWS',
    hook: 'A serverless AWS pipeline that turns sales, product, inventory, and vendor extracts into validated datasets and inventory analysis dashboards.',
    lenses: ['de', 'da'],
    role: 'Data Associate',
    stack: 'AWS Glue, PySpark, Amazon S3, Athena, QuickSight',
    links: [],
    privateNote: 'Company work for LAMA Desserts LLC. No public repository.',
    metrics: [
      { value: '4', label: 'source domains in one pipeline' },
      { value: '3', label: 'quality gates before publishing' },
    ],
    kpis: ['Inventory position by item', 'Consumption over time', 'Replenishment needs', 'Product performance', 'Period-over-period stock comparison'],
    pipeline: [
      { tool: 'Amazon S3', note: 'Sales, product, inventory, vendor extracts' },
      { tool: 'Glue Crawlers', note: 'Schemas in the Data Catalog' },
      { tool: 'Glue ETL (PySpark)', note: 'Standardize IDs, timestamps, units' },
      { tool: 'Validation', note: 'Schema, duplicates, required fields' },
      { tool: 'Parquet snapshots', note: 'Date-partitioned history' },
      { tool: 'Athena views', note: 'Shared sales and inventory logic' },
      { tool: 'QuickSight', note: 'SPICE dashboards on a schedule' },
    ],
    deNotes: [
      'Invalid records are isolated before curated datasets are published.',
      'CloudWatch monitors each run; source and transformed totals are reconciled.',
      'IAM permissions keep processing and data access controlled.',
    ],
    overview: [
      'The inventory app captures counts. The business also needs sales, product, and vendor data in one place to see consumption and plan replenishment.',
      'I built the AWS pipeline that consolidates those extracts and feeds the inventory analysis dashboards.',
    ],
    workflow: [
      { step: 'Catalog', text: 'Glue Crawlers register each extract’s schema so jobs and Athena can query them as tables.' },
      { step: 'Transform', text: 'Glue PySpark jobs standardize identifiers, timestamps, quantities, and units.' },
      { step: 'Snapshot', text: 'Historical stock positions are stored as date-partitioned Parquet for period comparisons.' },
      { step: 'Serve', text: 'Athena views centralize calculations; QuickSight dashboards refresh on a schedule.' },
    ],
    decisions: [
      { title: 'Serverless end to end', why: 'Glue, Athena, and QuickSight need no servers to run or patch.', tradeoff: 'Glue job startup adds latency, fine for scheduled loads.' },
      { title: 'Snapshots, not overwrites', why: 'Keeping each period’s stock position makes consumption and comparisons possible.', tradeoff: 'Storage grows over time.' },
      { title: 'Logic in Athena views', why: 'Calculations live in one place, so every dashboard agrees.', tradeoff: 'View changes need care because dashboards depend on them.' },
    ],
    outcome: 'Inventory positions and product performance refresh on schedule from validated data.',
  },
  {
    id: 'instacart',
    kind: 'Big data project',
    year: '2025',
    title: 'Instacart Big Data Pipeline',
    hook: 'A Dockerized Spark and Airflow pipeline over 3.4M orders and about 32M order lines, producing customer segments and product marts for Power BI.',
    lenses: ['de', 'da'],
    role: 'Solo build',
    stack: 'PySpark, Apache Airflow, Docker, PostgreSQL, SQL Server, Power BI',
    links: [{ label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/BigData', primary: true }],
    metrics: [
      { value: '32M+', label: 'order lines processed' },
      { value: '3.4M', label: 'orders' },
      { value: '4', label: 'analytics marts' },
      { value: '3', label: 'customer segments' },
    ],
    kpis: ['Orders per customer', 'Average basket size', 'Reorder ratio', 'Days between orders', 'Segment mix: Loyal, Occasional, Churn Risk', 'Peak order day and hour', 'Purchases by product, aisle, department', 'Product reorder rate'],
    pipeline: [
      { tool: 'Kaggle CSVs', note: '3.4M orders, 32M+ order lines' },
      { tool: 'Spark 3.5 cluster', note: 'Master and worker in Docker' },
      { tool: 'PySpark job', note: 'Joins, aggregations, segments' },
      { tool: 'Airflow DAG', note: 'Runs the job, then row-count checks' },
      { tool: 'PostgreSQL', note: '4 analytics marts' },
      { tool: 'SQL Server', note: 'Batched copy for BI' },
      { tool: 'Power BI', note: 'Customer and product dashboard' },
    ],
    deNotes: [
      'Small dimension tables (products, aisles, departments) are broadcast to avoid shuffling 32M rows.',
      'The SQL Server copy uses chunked, fast batch inserts sized to the column count.',
    ],
    overview: [
      'The Instacart dataset holds 3.4M grocery orders and about 32M order lines. Raw CSVs answer nothing on their own.',
      'I built a reproducible pipeline that turns them into customer and product tables a BI tool can use.',
    ],
    workflow: [
      { step: 'Process', text: 'A PySpark job on a Dockerized Spark 3.5 cluster joins orders with order lines and builds customer features.' },
      { step: 'Segment', text: 'Customers are labeled Loyal (20+ orders), Occasional (5 to 19), or Churn Risk (under 5).' },
      { step: 'Orchestrate', text: 'An Airflow DAG runs the job and checks row counts in each mart.' },
      { step: 'Serve', text: 'Marts load to PostgreSQL, then copy to SQL Server for the Power BI dashboard.' },
    ],
    decisions: [
      { title: 'Broadcast small dimensions', why: 'Avoids shuffling 32M rows when joining products, aisles, and departments.', tradeoff: 'Only works while the dimensions stay small.' },
      { title: 'Readable segments', why: 'Simple order-count rules business users can read and challenge.', tradeoff: 'Less nuanced than a clustering model.' },
      { title: 'Containers for everything', why: 'Spark, Airflow, and Postgres run the same on any machine.', tradeoff: 'Heavier local setup.' },
    ],
    outcome: 'Customer features, segments, peak order times, and product performance tables feeding a Power BI dashboard.',
  },
  {
    id: 'xai',
    kind: 'Research',
    year: '2025 – 2026',
    title: 'Explainable AI Research',
    hook: 'Five studies on making classification models explain each decision with readable rules and feature contributions.',
    lenses: ['ml'],
    role: 'Research Assistant, Northwest Missouri State',
    stack: 'Python, scikit-learn, SHAP, Anchor, Jupyter',
    links: [{ label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/Explainable-AI-research-prototypes', primary: true }],
    metrics: [
      { value: '95.6%', label: 'Random Forest accuracy, breast cancer data' },
      { value: '0.97+', label: 'Anchor rule precision on sample cases' },
      { value: '94.3%', label: 'accuracy from a 5-rule model' },
      { value: '5', label: 'studies with notebooks' },
    ],
    kpis: ['Accuracy', 'Rule precision and coverage', 'Brier score', 'ROC AUC', 'Lift and conviction'],
    studies: [
      { name: 'Rule-based interpretable model', shows: 'Decision-tree rules with confidence and calibration', result: '94.3% accuracy, 0.0496 Brier, 5 rules' },
      { name: 'Anchor explanations, breast cancer', shows: 'Random Forest explained with local Anchor rules', result: '95.6% accuracy, anchors at 0.97 to 1.00 precision' },
      { name: 'ARCC probabilistic rules', shows: 'Rule mining, greedy rule lists, calibration', result: '89.1% accuracy, 0.0864 Brier' },
      { name: 'Enhanced Anchor with rule quality', shows: 'Anchors scored with association-rule measures', result: 'Support, confidence, lift, conviction' },
      { name: 'Hybrid ARCC experiments', shows: 'Hard rules, stacking, thresholds, SHAP', result: '94% accuracy, 0.9644 ROC AUC (synthetic run)' },
    ],
    ml: [
      'Models: decision trees, Random Forest, logistic regression, stacking, and probability calibration in scikit-learn.',
      'SHAP: how much each feature pushed an individual prediction up or down.',
      'Anchor: a short IF/THEN rule that holds for a prediction, scored by precision and coverage.',
      'ARCC: candidate rule mining and greedy selection into a calibrated rule list.',
    ],
    overview: [
      'A model can be accurate on average and still be wrong for specific cases. A bare probability gives a reviewer nothing to check.',
      'I studied how to pair each prediction with an explanation a domain expert can verify, and how to measure whether that explanation is any good.',
    ],
    workflow: [
      { step: 'Train', text: 'Decision trees, Random Forest, logistic regression, and stacked models.' },
      { step: 'Explain globally', text: 'Extract IF/THEN rules and select compact probabilistic rule lists.' },
      { step: 'Explain locally', text: 'Anchor rules and SHAP contributions for each prediction.' },
      { step: 'Evaluate', text: 'Precision, coverage, support, confidence, lift, conviction, and Brier score.' },
    ],
    decisions: [
      { title: 'Rules and contributions together', why: 'Anchor gives a rule a reviewer can check; SHAP shows how much each feature moved the score.', tradeoff: 'Two methods to keep consistent.' },
      { title: 'Measure the explanation', why: 'An explanation that rarely applies is not useful, so coverage is tracked for every rule.', tradeoff: 'Higher precision rules usually cover fewer cases.' },
      { title: 'Calibrate confidence', why: 'A 90% prediction should be right about 90% of the time.', tradeoff: 'Calibration needs held-out data.' },
    ],
    outcome: 'Results are recorded in the notebooks. Notebook 02 runs end to end on scikit-learn’s built-in breast cancer dataset.',
  },
  {
    id: 'coderepo',
    kind: 'Research',
    year: '2025 – 2026',
    title: 'CodeRepoReader AI',
    hook: 'Ask plain-English questions about any codebase. Built for a co-authored paper comparing the OpenAI and GitHub Copilot SDKs.',
    lenses: ['genai'],
    role: 'Engineer and co-author',
    stack: 'Python, Flask, OpenAI SDK, GitHub Copilot SDK, Vercel',
    links: [
      { label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/Codereporeader', primary: true },
      { label: 'Original research build', href: 'https://github.com/ViswasS/DeepSynth' },
      // Add the paper here once it is published, for example:
      // { label: 'Read the paper (PDF)', href: '/papers/coderepo-reader.pdf' },
    ],
    metrics: [
      { value: '2', label: 'SDKs benchmarked' },
      { value: '3', label: 'models compared' },
      { value: '4', label: 'languages statically analyzed' },
    ],
    kpis: ['Comprehension', 'Accuracy', 'Consistency', 'Implementation effort'],
    pipeline: [
      { tool: 'ZIP or GitHub URL', note: 'Any public repository' },
      { tool: 'Tarball fetch', note: 'Works on a read-only serverless disk' },
      { tool: 'AST analysis', note: 'Python AST, regex for JS, Java, C#' },
      { tool: 'Repo summary', note: 'Compact, structured context' },
      { tool: 'LLM answer', note: 'OpenAI SDK, any compatible provider' },
    ],
    genai: [
      'Paper: "CodeRepoReader AI: A Comparative Study of Multi-Model SDKs for Conversational Codebase Analysis Agent", with S. S. Kanneganti, C. R. Chilipi Reddy, and V. Setty, advised by Dr. Ajay Bandi. Under revision.',
      'Agent one: GitHub Copilot SDK with event-driven streaming sessions, model auto-detection, and gh sign-in.',
      'Agent two: OpenAI-style app on GitHub Models comparing GPT-4o, GPT-4o Mini, and Llama 3.1 70B.',
      'Grounding: static analysis distills the repository so the model reasons over real structure, not raw code.',
    ],
    overview: [
      'Understanding an unfamiliar codebase is slow, and a real repository is far larger than any context window.',
      'Our research asked how to fit a codebase into a model’s context, and which SDK approach works better for this kind of agent. I built the agent, then rebuilt it to run serverless on Vercel.',
    ],
    workflow: [
      { step: 'Ingest', text: 'Upload a ZIP or paste a GitHub URL; the server downloads the tarball.' },
      { step: 'Distill', text: 'Static analysis extracts languages, classes, functions, dependencies, entry points, and patterns.' },
      { step: 'Answer', text: 'The compact analysis becomes the model’s context for each question.' },
      { step: 'Deploy', text: 'A single stateless Flask function on Vercel.' },
    ],
    decisions: [
      { title: 'Distill before prompting', why: 'A structured summary keeps prompts small and grounded.', tradeoff: 'Very detailed questions may need a follow-up.' },
      { title: 'Stateless for serverless', why: 'The analysis travels with each question instead of living in server memory.', tradeoff: 'Larger requests, but nothing lost on a cold start.' },
      { title: 'Tarball over git clone', why: 'Serverless functions have no git binary.', tradeoff: 'Unauthenticated downloads are rate limited.' },
    ],
    outcome: 'A co-authored paper under revision and a deployable agent that answers architecture questions about any public repository.',
  },
  {
    id: 'tifa-website',
    kind: 'Customer website',
    year: '2026',
    title: 'Tifa Website',
    hook: 'The shop’s customer site: 27 flavors, an AI flavor guide, and first-party visit analytics, with no framework and no database bill.',
    lenses: ['genai', 'da'],
    role: 'Design and build',
    stack: 'HTML, CSS, JavaScript, Vercel functions, Upstash Redis, Claude API',
    links: [{ label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/tifa-walnut-creek', primary: true }],
    frameLabel: 'Tifa Chocolate & Gelato, Walnut Creek',
    metrics: [
      { value: '4', label: 'questions to a personal pick' },
      { value: '27', label: 'flavors with dietary tags' },
      { value: '3', label: 'serverless functions' },
      { value: '0', label: 'API keys in the browser' },
    ],
    shots: [
      { src: '/images/tifa-website/hero.webp', w: 1440, h: 900, caption: 'Home: shop details and entry points to the flavor tools.' },
      { src: '/images/tifa-website/mobile-hero.webp', w: 390, h: 844, mobile: true, caption: 'Home on a phone.' },
      { src: '/images/tifa-website/ai-guide.webp', w: 1440, h: 800, caption: 'AI Gelato Guide: four questions and dietary filters lead to a personal pick.' },
      { src: '/images/tifa-website/flavors.webp', w: 1440, h: 900, caption: 'Today’s menu with dietary and allergen tags.' },
    ],
    kpis: ['Quizzes taken, total and today', 'Top flavor matches', 'Peak quiz hours', 'Dietary filter use'],
    genai: [
      'AI Gelato Guide: Claude picks a flavor from today’s menu based on quiz answers and dietary needs.',
      'Taste Twins: the four closest flavors with a short AI note on why they pair.',
      'Every model call goes through a server-side function, so the API key never reaches the browser.',
    ],
    overview: [
      'The shop needed a site that does more than list hours: something that helps customers choose before they visit, and tells the owner what they choose.',
      'I designed and built it as one fast static page with a few serverless functions behind it.',
    ],
    workflow: [
      { step: 'Front end', text: 'Hand-built HTML, CSS, and JavaScript: menu with dietary tags, mood picker, Taste Twins, birthday flavor finder.' },
      { step: 'AI guide', text: 'A short quiz gathers mood and diet; a serverless function asks Claude for a pick.' },
      { step: 'Analytics', text: 'Quiz events increment Upstash Redis counters by day, hour, flavor, and diet, feeding a live insights panel.' },
      { step: 'Deploy', text: 'A static page plus three serverless functions on Vercel.' },
    ],
    decisions: [
      { title: 'No framework', why: 'A single static page loads fast on phones in the store and costs nothing to host.', tradeoff: 'One large file gets harder to maintain as it grows.' },
      { title: 'Counters, not a database', why: 'Redis increments answer exactly what the owner asks with no schema or server.', tradeoff: 'No raw event history for deeper analysis.' },
      { title: 'Server-side AI proxy', why: 'Keeps the API key off the client.', tradeoff: 'Each answer adds a network hop and a small cost.' },
    ],
    outcome: 'Customers get a playful way to choose before they visit, and the owner gets live counts of what they pick.',
  },
]

export const SMALL_PROJECTS = [
  {
    id: 'hospital',
    title: 'Hospital Readmissions Analytics',
    status: 'In progress',
    lenses: ['de', 'da', 'ml'],
    body: 'PostgreSQL warehouse with dbt staging, intermediate, and mart layers over 101,766 encounters from 130 US hospitals: a star schema with 8 models and 61 data tests. A SHAP-explained readmission model and a Power BI report are next.',
    stack: 'PostgreSQL, dbt, SQL, Python, Power BI',
    repo: 'https://github.com/Vamshi6665/hospital-readmissions-analytics',
  },
]

export const AI_WORKFLOW = {
  intro: 'I use Claude and other LLMs as engineering tools with the same discipline as any other code: a written spec, small reviewed steps, and tests that decide what ships.',
  steps: [
    { title: 'Write the spec', body: 'Requirements and data rules in plain language before any code. The inventory system started from a written spec in its repository.' },
    { title: 'Plan the architecture', body: 'Compare options with Claude, then record the decisions and trade-offs in an architecture document.' },
    { title: 'Build in small steps', body: 'Claude drafts and refactors as a pair engineer; I review every change before it merges.' },
    { title: 'Let tests decide', body: '271 tests plus type, accessibility, contrast, and bundle-size checks run on every pull request.' },
    { title: 'Document for the next person', body: 'Security, accessibility, migration, and production-readiness notes ship with the code.' },
  ],
  sdks: [
    { name: 'Claude API', use: 'Inventory assistant and the AI flavor guide' },
    { name: 'OpenAI SDK', use: 'CodeRepoReader, serverless on Vercel' },
    { name: 'GitHub Copilot SDK', use: 'Streaming research agent' },
    { name: 'GitHub Models', use: 'GPT-4o, GPT-4o Mini, and Llama 3.1 70B compared' },
  ],
  shipped: [
    { name: 'Retrieval-grounded inventory assistant', where: 'Tifa Inventory System', href: '#case-tifa-inventory' },
    { name: 'AI flavor guide and Taste Twins', where: 'Tifa Website', href: '#case-tifa-website' },
    { name: 'Codebase question-answering agent', where: 'CodeRepoReader AI', href: '#case-coderepo' },
  ],
}

export const EXPERIENCE = [
  {
    role: 'Data Associate',
    org: 'LAMA Desserts LLC (Tifa Chocolate & Gelato)',
    location: 'Walnut Creek, CA',
    dates: 'Jul 2026 – Present',
    groups: [
      {
        bullets: [
          'Engineered **AWS Glue ETL workflows** consolidating sales, product, inventory, and vendor extracts in Amazon S3 into standardized reporting datasets.',
          'Registered schemas with **Glue Crawlers and the Data Catalog** and built reusable **Athena SQL views** for sales and inventory movements.',
          'Isolated invalid records with schema, duplicate, and required-field checks; kept history as **date-partitioned Parquet snapshots**.',
          'Published **QuickSight dashboards on SPICE datasets** with scheduled refreshes; monitored runs in CloudWatch with IAM-scoped access.',
          'Built and shipped the shop’s **inventory system** and **customer website**.',
        ],
      },
    ],
    links: [
      { label: 'AWS analytics', href: '#case-tifa-aws' },
      { label: 'Inventory system', href: '#case-tifa-inventory' },
      { label: 'Website', href: '#case-tifa-website' },
    ],
  },
  {
    role: 'Research Assistant',
    org: 'Northwest Missouri State University',
    location: 'Missouri',
    dates: 'May 2025 – Apr 2026',
    groups: [
      {
        bullets: [
          'Built reproducible **Python and SQL workflows** for preprocessing, feature engineering, and validation of ML datasets.',
          'Designed an **explainable AI framework with SHAP and Anchor** and evaluated models through performance comparisons and error analysis.',
          'Built **CodeRepoReader AI** (LLMs, agent workflows, AST analysis) and benchmarked the OpenAI and GitHub Copilot SDKs for a co-authored paper.',
        ],
      },
    ],
    links: [
      { label: 'Explainable AI', href: '#case-xai' },
      { label: 'CodeRepoReader AI', href: '#case-coderepo' },
    ],
  },
  {
    role: 'Analyst',
    org: 'DXC Technology',
    location: 'Hyderabad, India',
    dates: 'Jul 2021 – Dec 2024',
    note: 'Recognized with a Best Employee award.',
    groups: [
      {
        label: 'Client: VFS Global',
        bullets: [
          'Engineered **Azure Data Factory** ingestion and **Databricks PySpark** transformations consolidating **40+ regional SQL Server sources** into Snowflake datasets covering about **5M records**.',
          'Implemented **incremental loading, SQL MERGE, and controlled backfills**, and designed **star schemas** with conformed dimensions.',
          'Automated schema validation, duplicate detection, referential-integrity checks, and reconciliation, cutting recurring reporting errors by **more than 90%**.',
          'Coordinated acceptance testing, code reviews, and releases through **Git and Azure DevOps**.',
        ],
      },
      {
        label: 'Client: AT&T',
        bullets: [
          'Engineered **AWS Glue ETL pipelines** ingesting regional storage telemetry into S3 with **raw, validated, and curated layers**.',
          'Built **PySpark** standardization and **partitioned Parquet with Athena** to limit data scanned.',
          'Monitored runs with **CloudWatch**, ran controlled reruns, and reconciled source to target.',
          'Delivered **Power BI exception reports** for devices near **80% utilization**, contributing to a **25% reduction** in storage-related escalations.',
        ],
      },
    ],
    links: [
      { label: 'VFS Global', href: '#case-vfs' },
      { label: 'AT&T', href: '#case-att' },
    ],
  },
]

export const SKILLS = [
  { name: 'Data engineering', lens: 'de', items: ['Azure Data Factory', 'AWS Glue', 'Databricks', 'Apache Spark', 'PySpark', 'Spark SQL', 'Apache Airflow', 'dbt', 'Snowflake', 'Amazon S3', 'Amazon Athena', 'AWS Lambda', 'Glue Data Catalog', 'CloudWatch', 'IAM', 'Azure Synapse', 'Microsoft Fabric', 'SQL Server', 'PostgreSQL', 'ADLS Gen2', 'Delta Lake', 'Parquet', 'Incremental loads', 'SQL MERGE', 'Star schemas', 'Reconciliation'] },
  { name: 'Analytics and BI', lens: 'da', items: ['SQL', 'Power BI Desktop', 'Power BI Service', 'DAX', 'Power Query', 'Amazon QuickSight', 'Excel', 'KPI design', 'Trend analysis', 'Root cause analysis'] },
  { name: 'Machine learning', lens: 'ml', items: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'SHAP', 'Anchor', 'Model calibration', 'Error analysis', 'Anomaly analysis'] },
  { name: 'Gen AI', lens: 'genai', items: ['Claude API', 'OpenAI SDK', 'GitHub Copilot SDK', 'GitHub Models', 'Retrieval-grounded assistants', 'Agent workflows', 'AI-assisted development'] },
  { name: 'Apps and delivery', lens: 'all', items: ['React', 'TypeScript', 'Node.js', 'Express', 'Flask', 'Supabase', 'Git', 'GitHub Actions', 'Azure DevOps', 'Docker', 'Terraform', 'Vercel'] },
]

export const CREDENTIALS = {
  degree: { name: 'M.S. in Applied Computer Science', school: 'Northwest Missouri State University', detail: 'GPA 4.0', dates: 'Jan 2025 – May 2026' },
  certs: [
    { code: 'DP-203', name: 'Azure Data Engineer Associate', org: 'Microsoft' },
    { code: 'PL-300', name: 'Power BI Data Analyst Associate', org: 'Microsoft' },
    { code: 'AZ-900', name: 'Azure Fundamentals', org: 'Microsoft' },
    { code: 'CCP', name: 'Certified Cloud Practitioner', org: 'AWS' },
  ],
}
