import React from 'react'

function HowItWorks() {
  const steps = [
    {
      title: 'Performance audit',
      desc: 'We dig into accounts, analytics, and pipelines to baseline performance and surface waste.',
    },
    {
      title: 'Action plan',
      desc: 'Clear fixes, prioritized tests, and channel mix recommendations tied to revenue KPIs.',
    },
    {
      title: 'Prove and scale',
      desc: 'We implement, measure, and report. Scale only what demonstrates incrementality.',
    },
  ]

  return (
    <section id="how" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How we maximize ROI</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">No black boxes. Transparent measurement and senior execution from day one.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="p-6 rounded-xl ring-1 ring-gray-200 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
