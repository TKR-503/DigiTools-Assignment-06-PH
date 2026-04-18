import { Check, ShoppingCart } from 'lucide-react'

// ── Badge colours ──────────────────────────────────────
const BADGE = {
  popular:    { bg: 'bg-violet-100', text: 'text-violet-700' },
  new:        { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  bestseller: { bg: 'bg-amber-100',   text: 'text-amber-700'   },
  featured:   { bg: 'bg-pink-100',    text: 'text-pink-700'    },
  enterprise: { bg: 'bg-sky-100',     text: 'text-sky-700'     },
}

// ── Icon background tints ──────────────────────────────
const ICON_BG = {
  popular:    'bg-violet-50',
  new:        'bg-sky-50',
  bestseller: 'bg-orange-50',
  featured:   'bg-pink-50',
  enterprise: 'bg-sky-50',
}

const ProductCard = ({ product, isInCart, onAddToCart }) => {
  const badge  = BADGE[product.tagType]  ?? BADGE.popular
  const iconBg = ICON_BG[product.tagType] ?? 'bg-gray-50'

  const periodLabel =
    product.period === 'one-time' ? '/One-Time'
    : product.period === 'yearly'  ? '/Yr'
    : '/Mo'

  return (
    <div className="container mx-auto  bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-200 p-5 flex flex-col gap-3">

      {/* ── Icon + Badge ─────────────────────────────── */}
      <div className="flex items-start justify-between">
        <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center text-[22px]`}>
          {product.icon}
        </div>
        <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${badge.bg} ${badge.text}`}>
          {product.tag}
        </span>
      </div>

      {/* ── Name & Description ────────────────────────── */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
          {product.name}
        </h2>
        <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* ── Price ────────────────────────────────────── */}
      <div className="flex items-baseline gap-1">
        <span className="text-[28px] font-extrabold text-gray-900 leading-none">
          ${product.price}
        </span>
        <span className="text-[12px] text-gray-400 font-medium">
          {periodLabel}
        </span>
      </div>

      {/* ── Features list ────────────────────────────── */}
      <ul className="flex flex-col gap-[7px] flex-1">
        {product.features?.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check size={13} className="text-violet-600 shrink-0" strokeWidth={2.5} />
            <span className="text-[12px] text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* ── Buy Now button ────────────────────────────── */}
      <button
        onClick={() => !isInCart && onAddToCart(product)}
        disabled={isInCart}
        className={`
          w-full py-[11px] rounded-full font-bold text-[13px]
          flex items-center justify-center gap-2 mt-1
          transition-all duration-150 active:scale-[0.98]
          ${isInCart
            ? 'bg-violet-100 text-violet-400 cursor-default'
            : 'bg-violet-600 hover:bg-violet-700 text-white cursor-pointer'
          }
        `}
      >
        <ShoppingCart size={14} />
        {isInCart ? 'Added to Cart' : 'Buy Now'}
      </button>

    </div>
  )
}

export default ProductCard