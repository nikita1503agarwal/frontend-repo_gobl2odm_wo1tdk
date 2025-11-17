import React from 'react'

const Logo = ({ name }) => (
  <div className="px-4 py-2 rounded-md bg-white shadow-sm ring-1 ring-gray-100 text-gray-600 text-sm">
    {name}
  </div>
)

function Proof() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-center text-sm font-medium text-gray-500">Trusted by data-driven teams</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
          {['B2B SaaS', 'Ecommerce', 'FinTech', 'Healthcare', 'Marketplace', 'Education'].map((n) => (
            <Logo key={n} name={n} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proof
