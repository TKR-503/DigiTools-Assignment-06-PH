import { ShoppingBag } from 'lucide-react'

const CartSection = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  /* Empty state  */
  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="border border-gray-200 rounded-2xl bg-white p-16 flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <ShoppingBag size={28} className="text-gray-400" />
          </div>
          <p className="text-gray-800 font-semibold text-lg">Your cart is empty</p>
          <p className="text-gray-400 text-sm">Browse our products and add something great!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
    
      <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden">

        {/* my Cart header */}
        <div className="px-6 pt-5 pb-3">
          <h3 className="text-gray-900 font-bold text-[15px]">Your Cart</h3>
        </div>

        {/* Cart item rows */}
        <div className="flex flex-col gap-2 px-4 pb-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3"
            >
              {/* Product icon */}
              <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-lg shrink-0">
                {item.icon}
              </div>

              {/* Name + price */}
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 font-semibold text-[13px] leading-tight truncate">
                  {item.name}
                </p>
                <p className="text-gray-500 text-[12px] mt-0.5">${item.price}</p>
              </div>

              {/* Remove link — red text, no background */}
              <button
                onClick={() => onRemove(item)}
                className="text-red-500 hover:text-red-600 text-[13px] font-semibold shrink-0 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mx-4" />

        {/* Total row */}
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-gray-400 text-[13px]">Total:</span>
          <span className="text-gray-900 font-extrabold text-[22px]">${total}</span>
        </div>

        {/* Proceed to Checkout button */}
        <div className="px-4 pb-5">
          <button
            onClick={onCheckout}
            className="
              w-full py-3 rounded-full
              bg-violet-600 hover:bg-violet-700
              text-white font-bold text-[14px]
              transition-all duration-150 active:scale-[0.98]
            "
          >
            Proceed To Checkout
          </button>
        </div>

      </div>
    </div>
  )
}

export default CartSection
