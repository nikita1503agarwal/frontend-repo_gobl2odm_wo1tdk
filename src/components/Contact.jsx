import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', website: '', monthly_spend: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = {
        ...form,
        monthly_spend: form.monthly_spend ? parseFloat(form.monthly_spend) : undefined,
      }
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', company: '', role: '', website: '', monthly_spend: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get your free ad spend audit</h2>
          <p className="mt-2 text-gray-600">Share a few details and we’ll reply within 1 business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl ring-1 ring-gray-200">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Work Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <input name="role" value={form.role} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Website</label>
              <input name="website" value={form.website} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Monthly Ad Spend (USD)</label>
              <input type="number" step="0.01" name="monthly_spend" value={form.monthly_spend} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">What would you like to fix or learn?</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button type="submit" disabled={status==='sending'} className="inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 disabled:opacity-60">
              {status==='sending' ? 'Sending...' : 'Request audit'}
            </button>
            {status==='success' && <span className="text-emerald-600 text-sm">Thanks! We’ll be in touch shortly.</span>}
            {status==='error' && <span className="text-red-600 text-sm">Something went wrong. Please try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
