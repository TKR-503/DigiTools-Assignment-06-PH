import { useState } from 'react'
import { ShoppingCart, Package } from 'lucide-react'
import { toast } from 'react-toastify'
import ProductCard from '../ProductsCard/ProductCard'
import CartSection from '../Cart_section/Cart_Section'

export default function MainSection({ products, cartItems, setCartItems }) {
  const [activeTab, setActiveTab] = useState('products')

  const isInCart = (product) =>
    cartItems.some(i => i.id === product.id)

  const handleAddToCart = (product) => {
    if (isInCart(product)) return

    setCartItems(prev => [...prev, product])

    toast.success(`🛒 "${product.name}" added to cart!`)
  }

  const handleRemove = (product) => {
    setCartItems(prev =>
      prev.filter(i => i.id !== product.id)
    )

    toast.info(`🗑️ "${product.name}" removed from cart.`)
  }

  const handleCheckout = () => {
    setCartItems([])
    toast.success('✅ Checkout successful!')
  }

  return (
    <section id="products" className="py-16">
      <div className="section-wrap">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">
            Choose Products
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4">
          <button
            onClick={() => setActiveTab('products')}
            className={activeTab === 'products' ? 'text-blue-500' : ''}
          >
            <Package size={16} /> Products
          </button>

          <button
            onClick={() => setActiveTab('cart')}
            className={activeTab === 'cart' ? 'text-blue-500' : ''}
          >
            <ShoppingCart size={16} /> Cart ({cartItems.length})
          </button>
        </div>

        {/* Products */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.length === 0 ? (
              <p>No products found</p>
            ) : (
              products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  isInCart={isInCart(product)}
                />
              ))
            )}
          </div>
        )}

        {/* Cart */}
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