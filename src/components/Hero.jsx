import React from 'react'

function Hero({ onCta }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
            Stop wasted ad spend
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Make every marketing dollar accountable
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
            We help marketing leaders validate performance, cut waste, and scale channels that actually move the needle — without the smoke and mirrors.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onCta} className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition">
              Get a free spend audit
            </button>
            <a href="#how" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white/10 text-white font-semibold ring-1 ring-white/30 hover:bg-white/20 transition">
              How it works
            </a>
          </div>
          <div className="mt-6 text-sm text-white/80">
            No long-term contracts • Senior experts only • Outcomes over outputs
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
