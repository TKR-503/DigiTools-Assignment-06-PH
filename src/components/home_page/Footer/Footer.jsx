import { Zap } from 'lucide-react'

const FOOTER_LINKS = {
  Product: ['Features', 'Pricing', 'Updates'],
  Company: ['About', 'Careers', 'Blog'],
  Support: ['Help Center', 'Contact', 'Status'],
}

const SOCIALS = ['Twitter', 'LinkedIn', 'GitHub', 'Facebook']

export default function Footer() {
  return (
    <footer className="w-full bg-[#13131a] border-t border-[#1e1e2e] pt-14 pb-8">

      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-6 md:px-10 lg:px-20">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <span className="w-8 h-8 bg-[#7c3aed] rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </span>
              DigiTools
            </a>

            <p className="text-[#4e5a6a] text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Dynamic Links */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#4e5a6a] hover:text-white text-sm transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Social Links</h4>
            <ul className="space-y-3">
              {SOCIALS.map(label => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-[#4e5a6a] hover:text-white text-sm transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e1e2e] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-[#3a4252] text-sm text-center sm:text-left">
            © 2026 DigiTools. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map(item => (
              <a
                key={item}
                href="#"
                className="text-[#3a4252] hover:text-[#6b7280] text-xs transition"
              >
                {item}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  )
}