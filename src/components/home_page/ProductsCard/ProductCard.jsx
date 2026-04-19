import { Check, ShoppingCart } from 'lucide-react'


const BADGE = {
  bestseller: { bg: 'bg-orange-100', text: 'text-orange-600' },
  popular:    { bg: 'bg-violet-100', text: 'text-violet-600' },
  new:        { bg: 'bg-emerald-100',text: 'text-emerald-600'},
  featured:   { bg: 'bg-pink-100',   text: 'text-pink-600'   },
  enterprise: { bg: 'bg-sky-100',    text: 'text-sky-600'    },
}

const ICON_BG = {
  bestseller: 'bg-orange-50',
  popular:    'bg-violet-50',
  new:        'bg-sky-50',
  featured:   'bg-pink-50',
  enterprise: 'bg-slate-50',
}

const periodLabel = (p) =>
  p === 'one-time' ? '/One-Time'
  : p === 'yearly' ? '/Yr'
  : '/Mo'

const ProductCard = ({ product, isInCart, onAddToCart }) => {
  const badge  = BADGE[product.tagType]  ?? BADGE.popular
  const iconBg = ICON_BG[product.tagType] ?? 'bg-gray-50'

  return (
    <div className="
      bg-white rounded-2xl border border-gray-100 shadow-sm
      hover:shadow-md hover:border-violet-200
      transition-all duration-200
      p-5 flex flex-col gap-3
    ">

      {/* Row 1: icon box + badge */}
      <div className="flex items-start justify-between">
    
        <div className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0`}>
          {product.icon}
        </div>

        {/* Tag badge — top-right corner */}
        <span className={`${badge.bg} ${badge.text} text-[11px] font-bold px-3 py-1 rounded-full`}>
          {product.tag}
        </span>
      </div>

      {/* Row 2: name + description */}
      <div>
        <h3 className="text-gray-900 font-bold text-[15px] leading-snug">
          {product.name}
        </h3>
        <p className="text-gray-500 text-[12px] mt-1 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Row 3: price */}
      <div className="flex items-baseline gap-1">
        <span className="text-gray-900 font-extrabold text-[28px] leading-none">
          ${product.price}
        </span>
        <span className="text-gray-400 text-[11px] font-medium">
          {periodLabel(product.period)}
        </span>
      </div>

      {/*  Row 4: features */}
      <ul className="flex flex-col gap-1.5 flex-1">
        {product.features?.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <Check size={13} className="text-violet-500 shrink-0" strokeWidth={2.5} />
            <span className="text-gray-600 text-[12px]">{f}</span>
          </li>
        ))}
      </ul>

      {/* Row 5: Buy Now button */}
      <button
        onClick={() => !isInCart && onAddToCart(product)}
        disabled={isInCart}
        className={`
          w-full py-2.75 rounded-full font-bold text-[13px]
          flex items-center justify-center gap-2 mt-1
          transition-all duration-150 active:scale-95
          ${isInCart
            ? 'bg-violet-100 text-violet-400 cursor-default'
            : 'bg-violet-600 text-white hover:bg-violet-700 cursor-pointer'
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
