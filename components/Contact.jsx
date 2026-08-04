import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-24">
      <div className="max-w-[1060px] mx-auto">
        <Reveal>
          <div className="relative overflow-hidden bg-ink rounded-[28px] px-7 md:px-14 py-14 md:py-16 text-center">
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(139,92,246,.35),transparent_70%)]" />
            <h2 className="relative font-disp font-bold text-white text-3xl md:text-[38px] tracking-tight mb-3">
              Let&apos;s Build Something Together
            </h2>
            <p className="relative text-[#b6b4c2] text-[15.5px] max-w-[520px] mx-auto mb-8">
              Open to Data Analyst, Analytics Engineer, BI Engineer, and Data Engineer roles —
              full-time, contract, or research. I respond fast.
            </p>
            <div className="relative flex flex-wrap justify-center gap-3.5 mb-7">
              <a href="mailto:vamshikrishnabalupari@gmail.com"
                className="font-disp font-semibold text-sm text-white px-7 py-3 rounded-xl bg-grad shadow-[0_8px_24px_-8px_rgba(79,70,229,.5)] hover:-translate-y-0.5 transition-transform">
                ✉ &nbsp;Email Me
              </a>
              <a href="https://www.linkedin.com/in/vamshikrishnabalupari/" target="_blank" rel="noopener"
                className="font-disp font-semibold text-sm text-[#e6e4f0] px-7 py-3 rounded-xl border-[1.5px] border-[#3a3948] hover:border-violet hover:text-white hover:-translate-y-0.5 transition-all">
                LinkedIn ↗
              </a>
            </div>
            <div className="relative flex flex-wrap justify-center gap-6 font-mono text-[12.5px] text-[#8f8d9c]">
              <span>📞 <a href="tel:+16604935399" className="text-[#c6c4d2] hover:text-violet transition-colors">+1 (660) 493-5399</a></span>
              <span>✉ <a href="mailto:vamshikrishnabalupari@gmail.com" className="text-[#c6c4d2] hover:text-violet transition-colors">vamshikrishnabalupari@gmail.com</a></span>
              <span>📍 Houston, TX</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
