// Single source of truth for portfolio copy and links.
// Edit text here; components only handle layout.
// In strings, wrap a phrase in **double asterisks** to bold it.

export const PROFILE = {
  name: 'Vamshi Krishna Balupari',
  role: 'Data Analyst and Analytics Engineer',
  email: 'vamshikrishnabalupari@gmail.com',
  phone: '+1 (660) 493-5399',
  phoneHref: 'tel:+16604935399',
  location: 'Houston, TX',
  linkedin: 'https://www.linkedin.com/in/vamshikrishnabalupari/',
  github: 'https://github.com/Vamshi6665',
}

// Role lenses used to filter the Work section.
export const LENSES = [
  { id: 'da', label: 'Data Analyst' },
  { id: 'de', label: 'Data Engineer' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'genai', label: 'Gen AI' },
]

export const HERO = {
  availability: 'Open to Data Analyst and Analytics Engineer roles',
  availabilityShort: 'Open to data and analytics roles',
  summary:
    'I build the pipelines, models, and dashboards that turn messy operational data into decisions people trust. **4+ years** delivering Power BI and Snowflake reporting for **AT&T** and **VFS Global**, plus graduate research in **explainable AI**.',
  stats: [
    { value: '5M+', label: 'Records in daily executive reporting', href: '#case-vfs' },
    { value: '90%+', label: 'Fewer reporting errors', href: '#case-vfs' },
    { value: '25%', label: 'Fewer storage incident escalations', href: '#case-att' },
    { value: '271', label: 'Automated tests in a live inventory app', href: '#case-tifa-inventory' },
  ],
}

export const ABOUT = {
  title: 'Reliable data first. Clear decisions next.',
  paragraphs: [
    'I started at **DXC Technology**, building reporting for AT&T and VFS Global. That meant pipelines into Snowflake, data quality checks, and the executive Power BI layer leadership used every day.',
    'I then earned an **M.S. in Applied Computer Science (4.0 GPA)** at Northwest Missouri State University, where I researched explainable AI and co-authored a study on LLM tools for code analysis.',
    'Today I build data products end to end, from schema and pipeline to the dashboard people actually open.',
  ],
  pillars: [
    { title: 'Data analysis', body: 'KPI design, trend and root cause analysis, and Power BI reporting leaders rely on.' },
    { title: 'Data engineering', body: 'Pipelines across AWS S3, Snowflake, Athena, Postgres, dbt, Spark, and Airflow, with validation built in.' },
    { title: 'Machine learning and Gen AI', body: 'Explainable models with SHAP and Anchor, anomaly detection, and LLM apps grounded in real data.' },
  ],
  facts: [
    { label: 'Education', value: 'M.S. Applied Computer Science, 4.0 GPA' },
    { label: 'Certified', value: 'PL-300 · DP-203 · AZ-900 · AWS CCP' },
    { label: 'Currently', value: 'Data Analyst Intern at Tifa Chocolate & Gelato' },
  ],
}

export const EXPERIENCE = [
  {
    role: 'Data Analyst Intern',
    org: 'Tifa Chocolate & Gelato',
    location: 'Walnut Creek, CA',
    dates: 'Jul 2026 – Present',
    groups: [
      {
        bullets: [
          'Built and shipped the shop’s **inventory system** (React, TypeScript, Supabase Postgres, Vercel) with staff roles, transparent usage forecasting, reorder planning, and an AI assistant, on **$0 infrastructure**.',
          'Replaced **seven paper and spreadsheet logs**; quantity parsing is tested against all **1,721 real count values** from the shop.',
          'Building **inventory analysis dashboards** on AWS (S3) to track usage, run-out risk, and reorder needs.',
          'Built the shop’s **customer website** with an AI flavor guide and live visit analytics.',
        ],
      },
    ],
    chips: ['React', 'TypeScript', 'Supabase Postgres', 'AWS S3', 'Vercel', 'Claude API'],
    links: [
      { label: 'Inventory case study', href: '#case-tifa-inventory' },
      { label: 'Website case study', href: '#case-tifa-website' },
    ],
  },
  {
    role: 'Research Assistant',
    org: 'Northwest Missouri State University',
    location: 'Missouri, USA',
    dates: 'May 2025 – Apr 2026',
    groups: [
      {
        bullets: [
          'Integrated **SHAP and Anchor** into ML experimentation pipelines to explain feature contributions and model behavior, producing **audit-ready outputs** and reducing manual review.',
          'Built a **conversational codebase analysis agent** and benchmarked GitHub Copilot SDK against OpenAI SDK on comprehension, accuracy, consistency, and implementation effort for a co-authored paper.',
        ],
      },
    ],
    chips: ['SHAP', 'Anchor', 'Python', 'scikit-learn', 'OpenAI SDK', 'Copilot SDK'],
    links: [
      { label: 'Explainable AI case study', href: '#case-xai' },
      { label: 'CodeRepoReader case study', href: '#case-coderepo' },
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
        label: 'Client · VFS Global',
        bullets: [
          'Built the **first unified Power BI executive reporting layer** for global visa operations, consolidating **40+ regional systems** and **5M+ records** for daily leadership decisions.',
          'Led requirements with business teams across **40+ regions** to standardize KPI definitions for volume, turnaround, and regional performance.',
          'Automated data quality validation that cut reporting errors by **90%+** and made executive metrics audit ready.',
        ],
      },
      {
        label: 'Client · AT&T',
        bullets: [
          'Built a daily pipeline from **AWS S3 into Snowflake** with one validated record per device per day.',
          'Built a **Power BI capacity dashboard** with an **80% risk threshold** that flagged storage devices before they ran out of space.',
          'Flagged abnormal utilization and used root cause analysis to separate recurring growth from one-off anomalies.',
          'Cut storage incident escalations by **25%** and eliminated capacity-related service disruptions through proactive upgrades.',
        ],
      },
    ],
    chips: ['Power BI', 'DAX', 'Snowflake', 'AWS S3', 'SQL', 'Python', 'Anomaly detection'],
    links: [
      { label: 'VFS Global case study', href: '#case-vfs' },
      { label: 'AT&T case study', href: '#case-att' },
    ],
  },
]

// Featured case studies. Each one is tagged with the role lenses it serves.
// pipeline = Data Engineer view, kpis = Data Analyst view, ml / genai = their views.
export const CASE_STUDIES = [
  {
    id: 'tifa-inventory',
    badge: 'Production · Small business',
    tone: 'teal',
    year: '2026',
    title: 'Tifa Inventory System',
    hook: 'The system a Walnut Creek chocolate and gelato shop runs its stock on: live counts, usage forecasts, reorders, and staff access, on $0 of infrastructure.',
    lenses: ['da', 'de', 'genai'],
    links: [{ label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/tifa-inventory', primary: true }],
    meta: [
      { label: 'Role', value: 'Solo build: data model, app, and deployment' },
      { label: 'Stack', value: 'React, TypeScript, Supabase Postgres, Vercel' },
    ],
    pipeline: ['Stock count on a phone', 'Validated write (Postgres function)', 'Append-only history and audit log', 'Realtime sync to every device', 'Usage and reorder rules', 'Dashboards and Excel export'],
    metrics: [
      { value: '7 → 1', label: 'Paper and spreadsheet logs replaced' },
      { value: '271', label: 'Automated tests in CI' },
      { value: '100', label: 'Lighthouse performance and accessibility, desktop' },
      { value: '$0', label: 'Monthly infrastructure cost' },
    ],
    shots: [
      { src: '/images/tifa-inventory/overview-light.webp', w: 1600, h: 1000, caption: 'Overview: out of stock, low, needs review, and not counted lately, with the reason behind each insight.' },
      { src: '/images/tifa-inventory/item-detail.webp', w: 1600, h: 1000, caption: 'Item detail: usage per day, run-out date, suggested order, and a 12-week trend, each with its math shown.' },
      { src: '/images/tifa-inventory/reorder.webp', w: 1600, h: 1000, caption: 'Reorder: items at or below par plus items projected to cross it, grouped by supplier.' },
      { src: '/images/tifa-inventory/analytics-dark.webp', w: 1600, h: 1000, caption: 'Analytics: running out soonest, counting activity, and fastest movers.' },
      { src: '/images/tifa-inventory/inventory.webp', w: 1600, h: 1000, caption: 'Inventory grid: search, facet filters, inline count edits, and saved views.' },
      { src: '/images/tifa-inventory/team.webp', w: 1600, h: 1000, caption: 'Team: approve sign-ups and set each person’s role and categories, enforced by the database.' },
      { src: '/images/tifa-inventory/mobile-count.webp', w: 390, h: 844, mobile: true, caption: 'Stock count on a phone.' },
      { src: '/images/tifa-inventory/mobile-overview.webp', w: 390, h: 844, mobile: true, caption: 'Overview on a phone.' },
      { src: '/images/tifa-inventory/mobile-inventory.webp', w: 390, h: 844, mobile: true, caption: 'Inventory as cards on a phone.' },
    ],
    shotsNote: 'Screens show the app’s built-in demo data with fictional names.',
    overview: [
      'Tifa Chocolate & Gelato in Walnut Creek, CA goes through ingredients every day. Stock lived in **seven paper and spreadsheet logs**, counts were written as free text such as "1new+.75" or "45% remaining", and reordering was guesswork, which leads to stockouts and over-ordering.',
      'I built the system the shop now runs stock on. Version 1 replaced the logs with a live dashboard. **Version 2.0** rebuilt it as a typed React app with staff roles, an audit log, transparent forecasting, and purchasing. I used Claude as a pair engineer and reviewed every change before it shipped.',
    ],
    workflow: [
      { step: 'Frontend', text: 'React 19 and strict TypeScript on Vite. TanStack Query caches server data so count edits feel instant, and one shared data grid powers every table, with a card layout on phones.' },
      { step: 'Backend', text: 'Supabase Postgres with email and Google sign-in. Roles (admin, staff, viewer) and category access are enforced by Row Level Security. Every stock change runs through a database function that writes history and an audit entry in one transaction.' },
      { step: 'Trend analysis', text: 'Daily usage is the drop between counts divided by the days, with deliveries left out. That drives run-out dates, fastest movers, 12-week trends, and reorder quantities that show their arithmetic.' },
      { step: 'Zero-cost deploy', text: 'Static build on Vercel’s free tier and data on Supabase’s free tier. Pull requests get preview deploys on sample data. The only paid piece is the optional AI assistant, billed per use.' },
      { step: 'Quality', text: '241 Vitest and 30 Playwright tests run in GitHub Actions with type, lint, contrast, and bundle-size checks.' },
    ],
    kpis: ['Daily usage per item', 'Run-out date', 'Weeks of cover', 'Items at or below par', 'Projected to cross par before next order', 'Readable count rate', 'Counts per week', 'Not counted in 14+ days'],
    genai: [
      'An inventory assistant answers plain-English questions about stock using Claude.',
      'It reads data with the asking user’s own permissions, so the model only sees what that person can see.',
      'Item names are treated as data, not instructions; requests are rate limited per user.',
    ],
    decisions: [
      {
        title: 'Permissions in the database',
        why: 'Row Level Security decides who can see and change what, so a UI bug cannot open a data hole. 22 database tests prove the boundary.',
        tradeoff: 'Rules exist in SQL and are mirrored in the UI, so both must stay in sync.',
      },
      {
        title: 'Read what’s clear, flag the rest',
        why: 'Free-text counts are parsed when unambiguous. Mixed units go to a review list instead of becoming wrong numbers. Tested on all 1,721 real values.',
        tradeoff: 'Staff fix a few entries by hand in exchange for numbers they can trust.',
      },
      {
        title: 'Transparent forecasts over black boxes',
        why: 'Every forecast explains its math in one sentence, so the owner can check it before ordering.',
        tradeoff: 'Simple rates can miss seasonality a heavier model might catch.',
      },
    ],
    outcome: 'Live in production for the shop. Purchase orders, suppliers, and the activity log switch on with a pending database migration.',
    stack: ['React 19', 'TypeScript', 'TanStack Query', 'Supabase Postgres', 'Row Level Security', 'Realtime', 'Vercel', 'Vitest', 'Playwright', 'Claude API'],
  },
  {
    id: 'tifa-website',
    badge: 'Customer website',
    tone: 'teal',
    year: '2026',
    title: 'Tifa Website',
    hook: 'The shop’s customer website: 27 flavors, an AI flavor guide, and first-party visit analytics, with no framework and no database bill.',
    lenses: ['da', 'genai'],
    links: [{ label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/tifa-walnut-creek', primary: true }],
    meta: [
      { label: 'Role', value: 'Design and build' },
      { label: 'Stack', value: 'HTML, CSS, JavaScript, Vercel functions, Upstash Redis' },
    ],
    pipeline: ['Visitor takes the flavor quiz', 'Vercel function', 'Upstash Redis counters', 'Live Insights panel'],
    metrics: [
      { value: '4', label: 'Questions to a personal flavor pick' },
      { value: '27', label: 'Flavors with dietary tags' },
      { value: '3', label: 'Serverless functions' },
      { value: '0', label: 'API keys exposed to the browser' },
    ],
    shots: [
      { src: '/images/tifa-website/hero.webp', w: 1440, h: 900, caption: 'Home: shop details, quick facts, and entry points to the flavor tools.' },
      { src: '/images/tifa-website/ai-guide.webp', w: 1440, h: 800, caption: 'AI Gelato Guide: four questions and dietary filters lead to a personal pick.' },
      { src: '/images/tifa-website/flavors.webp', w: 1440, h: 900, caption: 'Today’s menu with dietary and allergen tags.' },
      { src: '/images/tifa-website/mobile-hero.webp', w: 390, h: 844, mobile: true, caption: 'Home on a phone.' },
    ],
    overview: [
      'The shop needed a site that does more than list hours: something that helps customers choose before they visit, and tells the owner what they are choosing.',
      'I designed and built it as one fast static page with a few serverless functions behind it.',
    ],
    workflow: [
      { step: 'Front end', text: 'Hand-built HTML, CSS, and JavaScript: the flavor menu with dietary tags, a mood picker, Taste Twins, a birthday flavor finder, and a countdown to the next flavor drop.' },
      { step: 'AI guide', text: 'A short quiz gathers mood and diet, then a serverless function asks Claude for a pick from today’s menu.' },
      { step: 'Live context', text: 'A banner shows current Walnut Creek weather from Open-Meteo.' },
      { step: 'Analytics', text: 'Quiz events increment counters in Upstash Redis (totals, by day, by hour, by flavor and diet) that feed a live Insights panel.' },
      { step: 'Deploy', text: 'A static page plus three serverless functions on Vercel.' },
    ],
    kpis: ['Quizzes taken, total and today', 'Top flavor matches', 'Peak quiz hours', 'Dietary filter use', 'Occasions'],
    genai: [
      'AI Gelato Guide: Claude picks a flavor from today’s menu based on the quiz answers and dietary needs.',
      'Taste Twins: surfaces the four closest flavors with a short AI note on why they pair.',
      'All model calls go through a server-side function, so the API key never reaches the browser.',
    ],
    decisions: [
      {
        title: 'No framework',
        why: 'A single static page loads fast on phones in the store and costs nothing to host.',
        tradeoff: 'One large file gets harder to maintain as features grow.',
      },
      {
        title: 'Counters, not a database',
        why: 'Redis increments answer exactly what the owner asks (how many, when, which flavors) with no schema or server.',
        tradeoff: 'No raw event history for deeper analysis later.',
      },
      {
        title: 'Server-side AI proxy',
        why: 'Keeps the API key off the client and in one place.',
        tradeoff: 'Each AI answer adds a network hop and a small per-use cost.',
      },
    ],
    outcome: 'Customers get a playful way to choose before they visit, and the owner gets live counts of what they pick.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel functions', 'Upstash Redis', 'Claude API', 'Open-Meteo'],
  },
  {
    id: 'recruitment-hub',
    badge: 'Analytics app · AWS',
    tone: 'indigo',
    year: '2026',
    title: 'Recruitment Hub',
    hook: 'Recruiting KPIs rebuilt from Power BI into a web app, running live SQL on Amazon Athena over data in S3.',
    lenses: ['da', 'de'],
    links: [{ label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/RecruitmentDashboard', primary: true }],
    meta: [
      { label: 'Role', value: 'Data model, SQL, API, and front end' },
      { label: 'Stack', value: 'AWS S3, Amazon Athena, Node.js, Express, React' },
    ],
    pipeline: ['Recruiting CSVs in AWS S3', 'Athena tables and SQL views', 'Express API (validated, cached)', 'React dashboards', 'Parity checks vs Power BI'],
    metrics: [
      { value: '80 / 80', label: 'Validation checks passed against Power BI' },
      { value: '57', label: 'Automated tests' },
      { value: '20,000', label: 'Applications modeled' },
      { value: '15 min', label: 'Query cache, so repeat filters skip Athena' },
    ],
    shots: [
      { src: '/images/recruitment-hub/overview.webp', w: 1440, h: 900, caption: 'Recruitment Overview: six KPIs, positions summary, monthly trend, and hires by position.' },
      { src: '/images/recruitment-hub/recruiter-analysis.webp', w: 1440, h: 900, caption: 'Recruiter Analysis: outcomes per recruiter, monthly trend, and stage conversion.' },
      { src: '/images/recruitment-hub/jobs.webp', w: 1440, h: 900, caption: 'Jobs: 340 requisitions with status, openings, and hires.' },
      { src: '/images/recruitment-hub/mobile.webp', w: 390, h: 844, mobile: true, caption: 'Overview on a phone.' },
    ],
    shotsNote: 'Built on a synthetic dataset: 20,000 applications, 340 requisitions, 10 recruiters. Client names are placeholders.',
    overview: [
      'Recruiting reports usually live in Power BI, apart from the jobs and recruiter screens managers use all day. This app puts both in one place: the **Recruitment Overview** and **Recruiter Analysis** reports sit next to Jobs and Recruiters, with live numbers from Amazon Athena.',
      'The hard part was trust. Every KPI had to match the Power BI report exactly, for every filter.',
    ],
    workflow: [
      { step: 'Land', text: 'Recruiting history (applications, events, jobs, recruiters) lands as CSV in S3, one folder per table.' },
      { step: 'Model', text: 'Athena external tables and SQL views define each metric once, counted by event date.' },
      { step: 'Serve', text: 'An Express API validates every filter with Zod, runs four Athena queries in parallel, and caches results for 15 minutes.' },
      { step: 'Show', text: 'React 19 front end: KPI cards, positions summary, monthly trend, hires by position, stage activity, a recruiter table, and a candidate timeline drill-down.' },
      { step: 'Fallback', text: 'If Athena is unreachable, the same report is computed from exported JSON, and the sidebar shows which source answered.' },
      { step: 'Ship', text: 'Docker image, GitHub Actions CI on Node 20 and 22, and a Vercel serverless deploy.' },
    ],
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
    decisions: [
      {
        title: 'One metric definition, three engines',
        why: 'Athena SQL, the JSON fallback, and the Power BI DAX share the same rules, so numbers never drift between them.',
        tradeoff: 'Every new KPI has to be written and tested three ways.',
      },
      {
        title: 'Prove parity with Power BI',
        why: 'A script runs the API’s SQL verbatim in DuckDB and compares 80 values with JSON mode and the Power BI references. All pass.',
        tradeoff: 'Extra tooling to maintain, but no silent mismatch reaches a manager.',
      },
      {
        title: 'Athena first, JSON second',
        why: 'Querying S3 directly means no database server to run. The fallback keeps the app usable without AWS access.',
        tradeoff: 'Athena bills per data scanned, which the cache keeps low.',
      },
    ],
    outcome: 'Every filter (date, recruiter, position, client) returns the same answer Power BI gives, inside one app with the daily workflow.',
    stack: ['AWS S3', 'Amazon Athena', 'SQL', 'Node.js', 'Express', 'React 19', 'Zod', 'Vitest', 'DuckDB', 'Docker', 'Power BI'],
  },
  {
    id: 'vfs',
    badge: 'Enterprise · Client work',
    tone: 'violet',
    year: '2021 – 2024',
    title: 'VFS Global Executive Reporting',
    hook: 'The first unified Power BI reporting layer for global visa operations: 40+ regional systems, 5M+ records, one set of KPIs.',
    lenses: ['da', 'de'],
    links: [],
    privateNote: 'Client work at DXC Technology · code and data belong to the client',
    meta: [
      { label: 'Role', value: 'Analyst on the DXC delivery team' },
      { label: 'Stack', value: 'SQL, Power BI, DAX' },
    ],
    pipeline: ['40+ regional systems', 'Consolidated reporting layer', 'Automated data quality checks', 'Power BI model (DAX)', 'Executive dashboards'],
    metrics: [
      { value: '40+', label: 'Regional systems unified' },
      { value: '5M+', label: 'Records in daily reporting' },
      { value: '90%+', label: 'Fewer reporting errors' },
    ],
    overview: [
      'Global visa operations ran across **40+ regional systems**. Leadership needed one daily view of volumes, turnaround, and regional performance they could trust.',
      'As part of the DXC team, I built the reporting layer that unified them.',
    ],
    workflow: [
      { step: 'Requirements', text: 'Worked with business teams across 40+ regions to agree on one definition for every KPI.' },
      { step: 'Consolidate', text: 'Brought regional data into one reporting layer covering 5M+ records.' },
      { step: 'Validate', text: 'Automated data quality checks ran before reporting, cutting errors by 90%+.' },
      { step: 'Model', text: 'Power BI semantic model with DAX measures for volume, turnaround, and regional comparisons.' },
      { step: 'Present', text: 'Executive dashboards with regional drill-downs for daily leadership decisions.' },
    ],
    kpis: ['Application processing volume', 'Turnaround time trends', 'Regional performance comparisons', 'Data quality status'],
    decisions: [
      {
        title: 'Definitions before dashboards',
        why: 'A number is only trusted when every region defines it the same way, so KPI alignment came first.',
        tradeoff: 'A slower start, in exchange for no debates over whose number is right.',
      },
      {
        title: 'Validate before every refresh',
        why: 'Automated checks stop bad data before leaders see it.',
        tradeoff: 'A failed check can delay a refresh, which beats a wrong number.',
      },
      {
        title: 'Drill-downs, not more reports',
        why: 'One executive view with regional drill-downs instead of a separate report per region.',
        tradeoff: 'A larger model to keep fast.',
      },
    ],
    outcome: 'Leadership got one daily view of global operations, and executive metrics became audit ready.',
    stack: ['SQL', 'Power BI', 'DAX', 'Data validation', 'Stakeholder management'],
  },
  {
    id: 'att',
    badge: 'Enterprise · Client work',
    tone: 'amber',
    year: '2021 – 2024',
    title: 'AT&T Storage Capacity Monitoring',
    hook: 'A daily AWS S3 to Snowflake to Power BI pipeline that flagged storage devices before they ran out of space.',
    lenses: ['da', 'de', 'ml'],
    links: [],
    privateNote: 'Client work at DXC Technology · code and data belong to the client',
    meta: [
      { label: 'Role', value: 'Analyst on the DXC delivery team' },
      { label: 'Stack', value: 'AWS S3, Snowflake, SQL, Python, Power BI' },
    ],
    pipeline: ['Daily CSV files in AWS S3', 'Snowflake: one validated row per device per day', 'Utilization, growth, and anomaly flags', 'Power BI 80% threshold dashboard', 'Proactive upgrades'],
    metrics: [
      { value: '25%', label: 'Fewer storage incident escalations' },
      { value: '0', label: 'Capacity-related service disruptions' },
      { value: '80%', label: 'Capacity risk threshold' },
    ],
    overview: [
      'Telecom storage devices that reach full capacity cause service disruptions and emergency escalations.',
      'The team needed to see which devices were heading there early enough to schedule upgrades instead of reacting to outages.',
    ],
    workflow: [
      { step: 'Land', text: 'Daily device utilization files arrived as CSV in AWS S3.' },
      { step: 'Load', text: 'Loaded into Snowflake as a history table with one validated record per device per day.' },
      { step: 'Analyze', text: 'Calculated utilization and growth per device and flagged abnormal patterns.' },
      { step: 'Alert', text: 'Power BI dashboard with an 80% capacity risk threshold showing which devices to upgrade next.' },
      { step: 'Act', text: 'Operations scheduled upgrades before devices reached capacity.' },
    ],
    kpis: ['Daily utilization per device', 'Growth rate over time', 'Devices above the 80% threshold', 'Abnormal utilization patterns'],
    ml: [
      'Anomaly detection on daily utilization flagged devices behaving outside their normal pattern.',
      'Root cause analysis separated recurring growth (upgrade needed) from one-off spikes (no action).',
      'Growth rates on the device history supported capacity forecasting.',
    ],
    decisions: [
      {
        title: 'One record per device per day',
        why: 'A clean daily grain makes growth rates and trends reliable.',
        tradeoff: 'Late or duplicate files must be resolved before each load.',
      },
      {
        title: 'Act at 80%, not 100%',
        why: 'Leaves enough runway to schedule an upgrade instead of reacting to an outage.',
        tradeoff: 'Some devices get upgraded a little earlier than strictly needed.',
      },
      {
        title: 'Separate growth from spikes',
        why: 'Anomaly flags plus root cause analysis kept one-off spikes from triggering upgrades.',
        tradeoff: 'Flagged devices still need an analyst’s review.',
      },
    ],
    outcome: 'Storage incident escalations fell 25% and capacity-related service disruptions stopped.',
    stack: ['AWS S3', 'Snowflake', 'SQL', 'Python', 'Power BI', 'DAX', 'Anomaly detection'],
  },
  {
    id: 'xai',
    badge: 'Research · Explainable AI',
    tone: 'rose',
    year: '2025 – 2026',
    title: 'Explainable AI Research',
    hook: 'Five studies on making classification models explain each decision with readable rules and feature contributions.',
    lenses: ['ml'],
    links: [{ label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/Explainable-AI-research-prototypes', primary: true }],
    meta: [
      { label: 'Role', value: 'Research Assistant, Northwest Missouri State' },
      { label: 'Stack', value: 'Python, scikit-learn, SHAP, Anchor, Jupyter' },
    ],
    metrics: [
      { value: '95.6%', label: 'Random Forest accuracy, breast cancer data' },
      { value: '0.97+', label: 'Anchor rule precision on sample cases' },
      { value: '94.3%', label: 'Accuracy from a 5-rule interpretable model' },
      { value: '5', label: 'Studies in the repository' },
    ],
    overview: [
      'A model can be accurate on average and still be wrong for specific cases. A bare probability gives a reviewer nothing to check.',
      'I studied how to pair each prediction with an explanation a domain expert can verify, and how to measure whether that explanation is any good.',
    ],
    workflow: [
      { step: 'Train', text: 'Decision trees, Random Forest, logistic regression, and stacked models in scikit-learn.' },
      { step: 'Explain globally', text: 'Extract IF/THEN rules from decision trees and select compact probabilistic rule lists (ARCC).' },
      { step: 'Explain locally', text: 'Anchor rules and SHAP contributions for each individual prediction.' },
      { step: 'Evaluate', text: 'Score rules by precision, coverage, support, confidence, lift, and conviction. Check calibration with Brier score.' },
    ],
    kpis: ['Accuracy', 'Rule precision and coverage', 'Brier score', 'ROC AUC', 'Lift and conviction'],
    ml: [
      'Models: decision trees, Random Forest, logistic regression, stacking, and probability calibration.',
      'SHAP: how much each feature pushed an individual prediction up or down.',
      'Anchor: a short IF/THEN rule that holds for a prediction, scored by precision and coverage.',
      'ARCC: candidate rule mining and greedy selection into a calibrated rule list.',
    ],
    decisions: [
      {
        title: 'Rules and contributions together',
        why: 'Anchor gives a short rule a reviewer can check. SHAP shows how much each feature moved the score.',
        tradeoff: 'Two methods to compute and keep consistent with each other.',
      },
      {
        title: 'Measure the explanation',
        why: 'An explanation that rarely applies is not useful, so coverage and precision are tracked for every rule.',
        tradeoff: 'Higher precision rules usually cover fewer cases.',
      },
      {
        title: 'Calibrate confidence',
        why: 'A 90% prediction should be right about 90% of the time. Brier score and calibration keep confidence honest.',
        tradeoff: 'Calibration needs held-out data, which shrinks the training set.',
      },
    ],
    outcome: 'Results are recorded in the notebooks. Notebook 02 runs end to end on scikit-learn’s built-in breast cancer dataset.',
    stack: ['Python', 'scikit-learn', 'SHAP', 'Anchor', 'pandas', 'Jupyter'],
  },
  {
    id: 'coderepo',
    badge: 'Research · Gen AI',
    tone: 'indigo',
    year: '2025 – 2026',
    title: 'CodeRepoReader',
    hook: 'Ask plain-English questions about any codebase. Built for a co-authored paper comparing two LLM SDK approaches.',
    lenses: ['genai'],
    links: [
      { label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/Codereporeader', primary: true },
      { label: 'Original research build', href: 'https://github.com/ViswasS/DeepSynth' },
    ],
    meta: [
      { label: 'Role', value: 'Engineer and co-author' },
      { label: 'Stack', value: 'Python, Flask, OpenAI SDK, Copilot SDK, Vercel' },
    ],
    pipeline: ['ZIP upload or GitHub URL', 'Tarball download and extract', 'Static analysis (AST + regex)', 'Compact repo summary as context', 'LLM answer via OpenAI SDK'],
    metrics: [
      { value: '2', label: 'SDK approaches benchmarked' },
      { value: '3', label: 'Models compared in the study' },
      { value: '4', label: 'Languages statically analyzed' },
    ],
    overview: [
      'Understanding an unfamiliar codebase is slow. LLMs can help, but a real repository is far larger than any context window.',
      'Our research asked two questions: how do you fit a codebase into a model’s context, and which SDK approach works better for this kind of agent? I built the agent, then rebuilt it to run serverless on Vercel.',
    ],
    workflow: [
      { step: 'Ingest', text: 'Upload a ZIP or paste a GitHub URL. The server downloads the repo tarball through the GitHub API.' },
      { step: 'Distill', text: 'A static analyzer (Python AST, plus regex for JS, Java, and C#) extracts languages, classes, functions, dependencies, entry points, and patterns.' },
      { step: 'Ground', text: 'The compact analysis, not raw source, becomes the model’s context.' },
      { step: 'Answer', text: 'Chat runs through the OpenAI SDK with a configurable base URL, so OpenAI, GitHub Models, or Azure OpenAI all work.' },
      { step: 'Deploy', text: 'Packaged as a single Flask serverless function on Vercel.' },
    ],
    kpis: ['Comprehension', 'Accuracy', 'Consistency', 'Implementation effort'],
    genai: [
      'Paper: "CodeRepoReader AI: A Comparative Study of Multi-Model SDKs for Conversational Codebase Analysis Agent", with S. S. Kanneganti, C. R. Chilipi Reddy, and V. Setty, advised by Dr. Ajay Bandi. Under revision.',
      'Build one: a GitHub Copilot SDK agent with event-driven streaming sessions, model auto-detection, and gh sign-in.',
      'Build two: an OpenAI-style app on GitHub Models comparing GPT-4o, GPT-4o Mini, and Llama 3.1 70B.',
      'Latest: rebuilt on the OpenAI SDK as a stateless Vercel function that works with any OpenAI-compatible provider.',
    ],
    decisions: [
      {
        title: 'Distill before prompting',
        why: 'A structured summary instead of source files keeps prompts small and answers grounded in real structure.',
        tradeoff: 'The model sees structure, not every line, so very detailed questions may need a follow-up.',
      },
      {
        title: 'Stateless for serverless',
        why: 'The first version cached analysis in server memory. Now the analysis returns to the browser and travels with each question.',
        tradeoff: 'Larger requests, but no session store and nothing lost on a cold start.',
      },
      {
        title: 'Tarball API over git clone',
        why: 'Serverless functions have no git binary and a read-only file system, so the app downloads and extracts the tarball.',
        tradeoff: 'Unauthenticated downloads are rate limited per IP. A GitHub token raises the limit.',
      },
    ],
    outcome: 'A co-authored paper under revision, and a deployable agent that answers architecture questions about any public repository.',
    stack: ['Python', 'Flask', 'OpenAI SDK', 'GitHub Copilot SDK', 'GitHub Models', 'Python AST', 'Vercel'],
  },
]

// Compact case studies for the projects grid.
export const PROJECTS = [
  {
    title: 'Hospital Readmissions Analytics',
    year: '2026',
    status: 'In progress',
    lenses: ['da', 'de', 'ml'],
    problem: 'CMS penalizes hospitals with high 30-day readmission rates. The goal is to find what drives readmission risk.',
    build: 'PostgreSQL warehouse with dbt staging, intermediate, and mart layers over 101,766 encounters from 130 US hospitals.',
    decision: 'A star schema (encounter facts with patient and diagnosis dimensions) so BI and modeling share one tested source.',
    impact: '8 dbt models and 61 data tests in place. A predictive model with SHAP and a Power BI report are next.',
    chips: ['PostgreSQL', 'dbt', 'SQL', 'Python', 'Power BI'],
    repo: 'https://github.com/Vamshi6665/hospital-readmissions-analytics',
  },
  {
    title: 'Instacart Big Data Pipeline',
    year: '2025',
    status: 'Shipped',
    lenses: ['da', 'de'],
    problem: 'Turn 3.4M+ raw grocery orders into customer segments and product insights a BI tool can use.',
    build: 'Dockerized Spark 3.5 cluster orchestrated by Airflow, loading four marts into PostgreSQL, then SQL Server for Power BI.',
    decision: 'Simple rule-based segments (Loyal 20+ orders, Occasional 5 to 19, Churn Risk under 5) that business users can read and challenge.',
    impact: 'Customer features, segments, peak order times, and product performance tables feeding a Power BI dashboard.',
    chips: ['PySpark', 'Airflow', 'Docker', 'PostgreSQL', 'SQL Server', 'Power BI'],
    repo: 'https://github.com/Vamshi6665/BigData',
  },
]
