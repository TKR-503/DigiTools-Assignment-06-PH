import userImg      from '../../../assets/user.png'
import productImg   from '../../../assets/package.png'
import creatingImg  from '../../../assets/rocket.png'

const STEPS = [
  {
    number: '01',
    image:  userImg,
    alt:    'Create Account',
    title:  'Create Account',
    desc:   'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    number: '02',
    image:  productImg,
    alt:    'Choose Products',
    title:  'Choose Products',
    desc:   'Browse our catalog and select the tools that fit your needs.',
  },
  {
    number: '03',
    image:  creatingImg,
    alt:    'Start Creating',
    title:  'Start Creating',
    desc:   'Download and start using your premium tools immediately.',
  },
]

const Steps_Section = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* ── Heading ──*/}
        <div className="text-center mb-10">
          <h2 className="text-gray-900 font-extrabold text-3xl md:text-4xl">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

            {/* ── Steps grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STEPS.map(({ number, image, alt, title, desc }) => (
            <div
              key={number}
              className="
                bg-white rounded-2xl border border-gray-100 shadow-sm
                hover:shadow-md hover:border-violet-100
                transition-all duration-200
                p-6 flex flex-col items-center text-center relative
              "
            >
                {/* Step number badge */}
              <div className="
                absolute top-4 right-4
                w-7 h-7 rounded-full bg-violet-600
                flex items-center justify-center
                text-white text-[11px] font-bold
              ">
                {number}
              </div>

              {/* PNG image */}
              <div className="
                w-16 h-16 rounded-full bg-violet-50
                flex items-center justify-center mb-5 mt-2
                overflow-hidden
              ">
                <img
                  src={image}
                  alt={alt}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-[15px] mb-2">
                {title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[12.5px] leading-relaxed max-w-[180px]">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Steps_Section
