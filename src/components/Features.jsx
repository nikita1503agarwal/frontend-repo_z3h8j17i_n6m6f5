import { CreditCard, DoorOpen, CalendarCheck, Activity } from 'lucide-react'

const features = [
  {
    icon: CalendarCheck,
    title: 'Smart booking',
    desc: 'Classes, open gym slots, and trainers—manage capacity and waitlists with ease.',
  },
  {
    icon: CreditCard,
    title: 'Stripe-native payments',
    desc: 'One-off sessions, memberships, bundles and add-ons. Tax handling built-in.',
  },
  {
    icon: DoorOpen,
    title: 'Door access',
    desc: 'Grant time-bound access from your dashboard. Works with leading smart locks.',
  },
  {
    icon: Activity,
    title: 'Activity hub',
    desc: 'Track attendance, renewals, no-shows and trends in one place.',
  },
]

function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything in one modern platform</h2>
          <p className="mt-3 text-white/70">Built for independent gyms and studio chains alike.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow hover:shadow-xl transition-all">
              <div className="h-10 w-10 rounded-lg bg-white text-slate-900 flex items-center justify-center shadow">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
