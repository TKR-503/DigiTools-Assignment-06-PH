import { ArrowRight } from 'lucide-react'

export default function Cta_Banner() {
  return (
    <section className="border-t border-[#2a2a40]">
      <div className="relative overflow-hidden bg-linear-to-br from-[#5b21b6] via-[#7c3aed] to-[#8b5cf6] px-8 py-20 md:py-24 text-center">

        {/* Ambient glow blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 bg-[#a78bfa]/20 rounded-full blur-[110px]" />
          <div className="absolute -top-16 -left-16 w-70 bg-[#c4b5fd]/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-16 -right-16 w-70 bg-[#3b0764]/50 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[2.6rem] font-extrabold text-white mb-4 leading-[1.15] tracking-tight">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-white/70 text-[15px] max-w-md mx-auto mb-9 leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter.
            <br className="hidden md:block" />
            Start your free trial today.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-400 text-[#7a35f1] font-semibold py-2.5 px-8 text-sm rounded-full border border-white/50 hover:border-white/80 backdrop-blur-sm transition-all duration-200"
            >
              Explore Products
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-gray-400 text-white font-semibold py-2.5 px-8 text-sm rounded-full border border-white/50 hover:border-white/80 backdrop-blur-sm transition-all duration-200"
            >
              View Pricing
            </a>
          </div>

          <p className="text-white/45 text-sm tracking-wide">
            14-day free trial &nbsp;•&nbsp; No credit card required &nbsp;•&nbsp; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
