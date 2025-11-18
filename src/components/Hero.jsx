import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/60 to-slate-950/85 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="text-white/70 text-sm uppercase tracking-widest mb-3">Gym booking • Access control • Payments</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            Book, pay, and unlock your gym life with one platform
          </h1>
          <p className="mt-5 text-white/80 text-lg">
            sportybook brings bookings, Stripe payments, and door access together so your members focus on training, not logistics.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg transition-shadow">Talk to sales</a>
            <a href="#features" className="inline-flex items-center px-5 py-3 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/20 hover:bg-white/15 transition-colors">See features</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
