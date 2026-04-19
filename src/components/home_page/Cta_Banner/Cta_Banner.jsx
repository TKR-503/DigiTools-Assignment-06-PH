import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="relative overflow-hidden bg-violet-50 border border-violet-100 rounded-3xl p-12 md:p-16 text-center">

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-56 bg-violet-200/40 rounded-full blur-[90px]" />
          </div>

          <div className="relative">
            <h2 className="text-gray-900 font-extrabold text-3xl md:text-4xl mb-4 leading-tight">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Join thousands of professionals who are already using DigiTools to work smarter.
              Start your free trial today.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="#products"
                className="
                  inline-flex items-center gap-2
                  bg-violet-600 hover:bg-violet-700
                  text-white font-bold text-sm
                  py-3 px-8 rounded-full
                  transition-all duration-150 active:scale-95
                "
              >
                Create Account <ArrowRight size={15} />
              </a>

              <a
                href="#pricing"
                className="
                  inline-flex items-center gap-2
                  bg-white border border-violet-300
                  hover:border-violet-500 hover:text-violet-700
                  text-violet-600 font-bold text-sm
                  py-3 px-8 rounded-full
                  transition-all duration-150 active:scale-95
                "
              >
                View Pricing
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
