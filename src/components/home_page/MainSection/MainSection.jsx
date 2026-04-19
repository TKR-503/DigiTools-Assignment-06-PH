import { useState } from 'react'
import { ShoppingCart, Package } from 'lucide-react'
import { toast } from 'react-toastify'
import ProductCard from '../ProductsCard/ProductCard'
import CartSection from '../Cart_section/Cart_Section'

export default function MainSection({ products, cartItems, setCartItems }) {
  const [activeTab, setActiveTab] = useState('products')

  const isInCart  = (p) => cartItems.some(i => i.id === p.id)
  const cartCount = cartItems.length

  const handleAddToCart = (product) => {
    if (isInCart(product)) return
    setCartItems(prev => [...prev, product])
    toast.success(`🛒 "${product.name}" added to cart!`, { theme: 'light' })
  }

  const handleRemove = (product) => {
    setCartItems(prev => prev.filter(i => i.id !== product.id))
    toast.info(`🗑️ "${product.name}" removed.`, { theme: 'light' })
  }

  const handleCheckout = () => {
    setCartItems([])
    toast.success('✅ Checkout successful!', { theme: 'light' })
  }

  return (
    <section id="products" className="bg-white min-h-screen py-14 px-4">
      <div className="max-w-5xl mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-8">
          <h2 className="text-gray-900 font-extrabold text-4xl leading-tight">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-[13px] mt-2 max-w-xs mx-auto leading-relaxed">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>
        </div>

        {/* ── Toggle ── */}
        <div className="flex justify-center items-center gap-1 mb-10">

          <button
            onClick={() => setActiveTab('products')}
            className={`
              flex items-center gap-2
              px-5 py-2 rounded-full font-semibold text-[13px]
              transition-all duration-150
              ${activeTab === 'products'
                ? 'bg-violet-600 text-white shadow-sm'
                : 'bg-transparent text-gray-500 hover:text-violet-600 hover:bg-violet-50'
              }
            `}
          >
            <Package size={14} />
            Products
          </button>

        
          <button
            onClick={() => setActiveTab('cart')}
            className={`
              flex items-center gap-2
              px-5 py-2 rounded-full font-semibold text-[13px]
              transition-all duration-150
              ${activeTab === 'cart'
                ? 'bg-violet-600 text-white shadow-sm'
                : 'bg-transparent text-gray-500 hover:text-violet-600 hover:bg-violet-50'
              }
            `}
          >
            <ShoppingCart size={14} />
            Cart
            {cartCount > 0 && (
              <span
                className={`
                  min-w-5 h-5 px-1.5 rounded-full text-[11px] font-bold
                  flex items-center justify-center transition-all duration-150
                  ${activeTab === 'cart'
                    ? 'bg-white/20 text-white'
                    : 'bg-violet-100 text-violet-600'
                  }
                `}
              >
                {cartCount}
              </span>
            )}
          </button>

        </div>

        {/*  Products grid */}
        {activeTab === 'products' && (
          products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-sm animate-pulse">Loading products…</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  isInCart={isInCart(product)}
                />
              ))}
            </div>
          )
        )}

        {/* ── Cart view ── */}
        {activeTab === 'cart' && (
          <CartSection
            cartItems={cartItems}
            onRemove={handleRemove}
            onCheckout={handleCheckout}
          />
        )}

      </div>
    </section>
  )
}
