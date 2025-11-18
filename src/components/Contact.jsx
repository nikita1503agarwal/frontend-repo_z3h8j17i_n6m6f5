import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = e.currentTarget
    const data = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      message: form.message.value,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed to send')
      const json = await res.json()
      setStatus({ type: 'success', message: 'Thanks! We’ll be in touch shortly.' })
      form.reset()
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Talk to our team</h2>
          <p className="mt-3 text-white/70">Tell us about your gym and the workflows you want to streamline. No pricing publicly listed—our plans adapt to your needs.</p>
          <ul className="mt-6 space-y-3 text-white/70 text-sm">
            <li>• Seamless migration from spreadsheets or legacy tools</li>
            <li>• Stripe integration included</li>
            <li>• Hardware guidance for door access</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-white/80 text-sm mb-1">Name</label>
              <input name="name" required placeholder="Your name" className="w-full rounded-lg bg-white/10 text-white placeholder-white/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">Email</label>
              <input name="email" type="email" required placeholder="you@company.com" className="w-full rounded-lg bg-white/10 text-white placeholder-white/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">Company</label>
              <input name="company" placeholder="Gym or studio name" className="w-full rounded-lg bg-white/10 text-white placeholder-white/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">Message</label>
              <textarea name="message" required rows="4" placeholder="Tell us about your setup and goals" className="w-full rounded-lg bg-white/10 text-white placeholder-white/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <button disabled={loading} className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg transition-shadow disabled:opacity-60">
              {loading ? 'Sending…' : 'Send message'}
            </button>
            {status && (
              <p className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>{status.message}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
