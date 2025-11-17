import React from 'react'

function Navbar({ onCta }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-extrabold text-gray-900 text-lg tracking-tight">Proofmind</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="/test" className="hover:text-gray-900">Status</a>
          <button onClick={onCta} className="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white font-semibold hover:bg-black">Free audit</button>
        </nav>
        <button onClick={onCta} className="md:hidden inline-flex items-center px-3 py-2 rounded-md bg-gray-900 text-white font-semibold">Audit</button>
      </div>
    </header>
  )
}

export default Navbar
