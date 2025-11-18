import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-white/80 backdrop-blur text-slate-900 font-black flex items-center justify-center shadow ring-1 ring-slate-200">
            S
          </div>
          <span className="text-white/90 text-xl font-semibold tracking-tight">sportybook</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="/test" className="hover:text-white transition-colors">Status</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg bg-white/10 text-white"><Menu size={20} /></button>
      </div>
    </header>
  )
}

export default Navbar
