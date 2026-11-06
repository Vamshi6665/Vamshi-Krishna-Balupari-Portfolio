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

export const HERO = {
  availability: 'Open to Data Analyst and Analytics Engineer roles',
  availabilityShort: 'Open to data and analytics roles',
  summary:
    'I build the pipelines, models, and dashboards that turn messy operational data into decisions people trust. **4+ years** delivering Power BI and Snowflake reporting for **AT&T** and **VFS Global**, plus graduate research in **explainable AI**.',
  stats: [
    { value: '4+', label: 'Years in data and analytics' },
    { value: '5M+', label: 'Records in daily executive reporting' },
    { value: '40+', label: 'Regional systems unified' },
    { value: '90%+', label: 'Fewer reporting errors' },
  ],
}

export const ABOUT = {
  title: 'Reliable data first. Clear decisions next.',
  paragraphs: [
    'I started at **DXC Technology**, building reporting for AT&T and VFS Global. That meant Snowflake pipelines, data quality checks, and the executive Power BI layer leadership used every day.',
    'I then earned an **M.S. in Applied Computer Science (4.0 GPA)** at Northwest Missouri State University, where I researched explainable AI and co-authored a study on LLM tools for code analysis.',
    'Today I build data tools end to end, from schema and migration to the dashboard people actually open.',
  ],
  pillars: [
    {
      title: 'Analytics engineering',
      body: 'SQL, Snowflake, dbt, Spark, and Airflow pipelines with tests and validation built in.',
    },
    {
      title: 'BI and reporting',
      body: 'Power BI and DAX models that give leaders one trusted set of KPIs.',
    },
    {
      title: 'Explainable AI',
      body: 'SHAP and Anchor methods that show why a model made each prediction.',
    },
  ],
  facts: [
    { label: 'Education', value: 'M.S. Applied Computer Science, 4.0 GPA' },
    { label: 'Certified', value: 'PL-300 · DP-203 · AZ-900 · AWS CCP' },
    { label: 'Currently', value: 'Data Analyst Intern at Tifa' },
  ],
}

export const EXPERIENCE = [
  {
    role: 'Data Analyst Intern',
    org: 'Tifa',
    location: 'Texas, USA',
    dates: 'Jul 2026 – Present',
    groups: [
      {
        bullets: [
          'Designed and deployed an **inventory analytics system** on PostgreSQL, JavaScript, and Vercel with secure sign in, historical reporting, weekly trend analysis, and consumption-based reorder forecasting.',
          'Migrated and standardized **1,783+ historical records** from 8 Excel exports, preserving original dates and recorder initials.',
        ],
      },
    ],
    chips: ['PostgreSQL', 'Supabase', 'JavaScript', 'Vercel', 'AI-assisted development'],
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
    chips: ['SHAP', 'Anchor', 'Python', 'scikit-learn', 'LLM SDKs'],
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
          'Designed DAX measures, KPI dashboards, and regional drill downs that turned complex metrics into clear stories for leadership.',
        ],
      },
      {
        label: 'Client · AT&T',
        bullets: [
          'Automated daily CSV ingestion into **Snowflake** and built a device utilization history with one validated record per device per day.',
          'Built a **Power BI capacity dashboard** with an **80% risk threshold** that flagged storage devices before they ran out of space.',
          'Used trend and root cause analysis to separate recurring growth risks from one-off anomalies.',
          'Cut storage incident escalations by **25%** and eliminated capacity-related service disruptions through proactive upgrades.',
        ],
      },
    ],
    chips: ['Power BI', 'DAX', 'Snowflake', 'SQL', 'Python', 'Forecasting', 'Root cause analysis'],
  },
]

// Featured case studies. Each follows the same four-part structure.
export const CASE_STUDIES = [
  {
    id: 'tifa',
    badge: 'Production · Small business',
    tone: 'teal',
    year: '2026',
    title: 'Tifa Inventory Platform',
    hook: 'Replaced seven paper and spreadsheet logs with one secure inventory system, on a $0 monthly budget.',
    meta: [
      { label: 'Role', value: 'Solo build, data model to deployment' },
      { label: 'Stack', value: 'Supabase PostgreSQL, JavaScript, SheetJS, Vercel' },
    ],
    links: [{ label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/tifa-inventory', primary: true }],
    // Optional screenshots. Add files to public/images/ and uncomment.
    // shots: [
    //   { src: '/images/tifa-dashboard.png', alt: 'Tifa inventory dashboard with stat cards', caption: 'Dashboard and reorder schedule' },
    //   { src: '/images/tifa-category-table.png', alt: 'Inventory table grouped by category', caption: 'Category view with par levels' },
    // ],
    overview: [
      'A Texas chocolate and gelato shop tracked stock across **seven separate paper and spreadsheet logs**. Counts were free text such as "1 new + 3" or percentages, history was scattered across files, and reorder thresholds lived as notes beside each item.',
      'I designed and built one system to replace them, using Claude as a pair engineer and reviewing every change before it shipped.',
    ],
    workflow: [
      { step: 'Migrate', text: '8 CSV exports parsed into a clean item catalog. Old count columns became dated history rows with recorder initials kept.' },
      { step: 'Store', text: 'Supabase PostgreSQL with an items table (category, unit type, par level, supplier, status) and an append-only counts table.' },
      { step: 'Secure', text: 'Supabase Auth with Row Level Security on both tables. Only signed-in users can read or write.' },
      { step: 'Analyze', text: 'A tolerant parser turns free-text counts into comparable numbers and checks them against par levels.' },
      { step: 'Act', text: 'Dashboard with stat cards, a reorder schedule, per-item history, and one-click Excel export.' },
    ],
    decisions: [
      {
        title: 'Append-only count history',
        why: 'Every count is a new row, so trends and audits come for free and nothing is overwritten.',
        tradeoff: 'More rows to query, handled with indexes on item, category, status, and date.',
      },
      {
        title: 'Flag bad values, never guess',
        why: 'Anything the parser cannot read goes to a "needs manual review" list instead of becoming a wrong number.',
        tradeoff: 'The owner fixes a few entries by hand in exchange for numbers they can trust.',
      },
      {
        title: 'Free tier, single owner',
        why: 'Supabase and Vercel free tiers keep running cost at $0. Version one has one owner login.',
        tradeoff: 'No staff roles yet. The schema leaves room for a role column when they are needed.',
      },
    ],
    impact: {
      metrics: [
        { value: '7 → 1', label: 'Logs replaced by one system' },
        { value: '1,783+', label: 'Historical records migrated' },
        { value: '8', label: 'Excel exports reconciled' },
        { value: '$0', label: 'Monthly infrastructure cost' },
      ],
      summary: 'The owner sees current stock, item history, and what to reorder in one place, and can still export to Excel.',
    },
    stack: ['PostgreSQL', 'Supabase Auth', 'Row Level Security', 'JavaScript', 'SheetJS', 'Vercel'],
  },
  {
    id: 'coderepo',
    badge: 'Research · LLM engineering',
    tone: 'indigo',
    year: '2025 – 2026',
    title: 'CodeRepoReader',
    hook: 'Ask plain-English questions about any codebase. Built for a co-authored study comparing two LLM SDK approaches.',
    meta: [
      { label: 'Role', value: 'Engineer and co-author' },
      { label: 'Stack', value: 'Python, Flask, OpenAI SDK, Copilot SDK, Vercel' },
    ],
    links: [
      { label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/Codereporeader', primary: true },
      { label: 'Original research build', href: 'https://github.com/ViswasS/DeepSynth' },
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
    impact: {
      metrics: [
        { value: '2', label: 'SDK approaches benchmarked' },
        { value: '3', label: 'Models compared in the study' },
        { value: '4', label: 'Languages statically analyzed' },
      ],
      summary: 'Co-authored research paper with NWMSU researchers, currently under revision. Benchmarked on comprehension, accuracy, consistency, and implementation effort.',
    },
    stack: ['Python', 'Flask', 'OpenAI SDK', 'GitHub Copilot SDK', 'Python AST', 'Vercel'],
  },
  {
    id: 'xai',
    badge: 'Research · Explainable AI',
    tone: 'rose',
    year: '2025 – 2026',
    title: 'Explainable AI Research',
    hook: 'Five studies on making classification models explain each decision with readable rules and feature contributions.',
    meta: [
      { label: 'Role', value: 'Research Assistant, NWMSU' },
      { label: 'Stack', value: 'Python, scikit-learn, SHAP, Anchor, Jupyter' },
    ],
    links: [{ label: 'View GitHub Repository', href: 'https://github.com/Vamshi6665/Explainable-AI-research-prototypes', primary: true }],
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
    impact: {
      metrics: [
        { value: '95.6%', label: 'Random Forest accuracy, breast cancer data' },
        { value: '0.97+', label: 'Anchor rule precision on sample cases' },
        { value: '94.3%', label: 'Accuracy from a 5-rule interpretable model' },
        { value: '5', label: 'Studies in the repository' },
      ],
      summary: 'Results are recorded in the notebooks. Notebook 02 runs end to end on scikit-learn’s built-in breast cancer dataset.',
    },
    stack: ['Python', 'scikit-learn', 'SHAP', 'Anchor', 'pandas', 'Jupyter'],
  },
]

// Compact case studies for the projects grid.
export const PROJECTS = [
  {
    title: 'Recruitment Hub',
    year: '2026',
    status: 'Shipped',
    problem: 'Recruiting reports lived in Power BI, separate from the jobs and recruiter screens managers use every day.',
    build: 'React and Express app with Power BI style reports, reading live from Amazon Athena with automatic fallback to exported JSON.',
    decision: 'One shared metrics module defines every KPI, so Athena SQL, JSON mode, and Power BI DAX return the same numbers.',
    impact: '57 automated tests and an 80-check validation against Power BI references.',
    chips: ['React', 'Express', 'Amazon Athena', 'SQL', 'Power BI', 'Docker'],
    repo: 'https://github.com/Vamshi6665/RecruitmentDashboard',
  },
  {
    title: 'Hospital Readmissions Analytics',
    year: '2026',
    status: 'In progress',
    problem: 'CMS penalizes hospitals with high 30-day readmission rates. The goal is to find what drives readmission risk.',
    build: 'PostgreSQL warehouse with dbt staging, intermediate, and mart layers over 101,766 encounters from 130 US hospitals.',
    decision: 'A star schema (encounter facts with patient and diagnosis dimensions) so BI and modeling share one tested source.',
    impact: '8 dbt models and 61 data tests in place. Predictive model with SHAP and a Power BI report are next.',
    chips: ['PostgreSQL', 'dbt', 'SQL', 'Python', 'Power BI'],
    repo: 'https://github.com/Vamshi6665/hospital-readmissions-analytics',
  },
  {
    title: 'Instacart Big Data Pipeline',
    year: '2025',
    status: 'Shipped',
    problem: 'Turn 3.4M+ raw grocery orders into customer segments and product insights a BI tool can use.',
    build: 'Dockerized Spark 3.5 cluster orchestrated by Airflow, loading four marts into PostgreSQL, then SQL Server for Power BI.',
    decision: 'Simple rule-based segments (Loyal 20+ orders, Occasional 5 to 19, Churn Risk under 5) that business users can read and challenge.',
    impact: 'Customer features, segments, peak order times, and product performance tables feeding a Power BI dashboard.',
    chips: ['PySpark', 'Airflow', 'Docker', 'PostgreSQL', 'SQL Server', 'Power BI'],
    repo: 'https://github.com/Vamshi6665/BigData',
  },
]
