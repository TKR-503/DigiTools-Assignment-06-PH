import { Check } from 'lucide-react'

const PLANS = [
  {
    id:         'starter',
    name:       'Starter',
    tagline:    'Perfect for getting started',
    price:      0,
    period:     'Month',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    cta:        'Get Started Free',
    highlight:  false,
  },
  {
    id:         'pro',
    name:       'Pro',
    tagline:    'Best for professionals',
    price:      29,
    period:     'Month',
    badge:      'Most Popular',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    cta:        'Start Pro Trial',
    highlight:  true,      
  },
  {
    id:         'enterprise',
    name:       'Enterprise',
    tagline:    'For teams and businesses',
    price:      99,
    period:     'Month',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    cta:        'Contact Sales',
    highlight:  false,
  },
]

const Feature = ({ text, highlight }) => (
  <li className="flex items-center gap-2">
    <Check
      size={14}
      strokeWidth={2.5}
      className={`shrink-0 ${highlight ? 'text-white' : 'text-violet-500'}`}
    />
    <span className={`text-[12.5px] ${highlight ? 'text-white/90' : 'text-gray-600'}`}>
      {text}
    </span>
  </li>
)

const Pricing_Section = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* ── Heading ─── */}
        <div className="text-center mb-10">
          <h2 className="text-gray-900 font-extrabold text-3xl md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* ── Plan cards grid ──*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-2xl p-6 flex flex-col gap-4
                transition-all duration-200
                ${plan.highlight
              
                  ? 'bg-violet-600 shadow-xl shadow-violet-200'
                  : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                }
              `}
            >
           
              {plan.badge && (
                <div className="
                  absolute -top-3 left-1/2 -translate-x-1/2
                  bg-yellow-400 text-yellow-900
                  text-[11px] font-bold px-4 py-1 rounded-full
                  whitespace-nowrap shadow-sm
                ">
                  {plan.badge}
                </div>
              )}

              {/* Plan name + tagline */}
              <div className={plan.badge ? 'mt-2' : ''}>
                <h3 className={`font-bold text-[17px] ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-[12px] mt-0.5 ${plan.highlight ? 'text-white/70' : 'text-gray-400'}`}>
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span className={`font-extrabold text-[40px] leading-none ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  ${plan.price}
                </span>
                <span className={`text-[12px] font-medium ${plan.highlight ? 'text-white/70' : 'text-gray-400'}`}>
                  /{plan.period}
                </span>
              </div>

          
              <div className={`h-px w-full ${plan.highlight ? 'bg-white/20' : 'bg-gray-100'}`} />

              {/* Features list */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <Feature key={f} text={f} highlight={plan.highlight} />
                ))}
              </ul>

              {/* cta button */}
              <button
                className={`
                  w-full mt-2 py-2 rounded-full font-bold text-[13px]
                  transition-all duration-150 active:scale-95
                  ${plan.highlight
               
                    ? 'bg-white text-violet-600 hover:bg-violet-50'

                    : 'bg-violet-600 text-white hover:bg-violet-700'
                  }
                `}
              >
                {plan.cta}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing_Section
