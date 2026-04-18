import { ShoppingBag, Trash2, CreditCard } from 'lucide-react'

const CartSection = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  if (cartItems.length === 0) {
    return (
      <div className="text-center">
        <ShoppingBag size={40} />
        <p>Your cart is empty</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto bg-white rounded-2xl shadow-md p-6">
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between p-3 border">
          <span>{item.name}</span>

          <div>
            ${item.price}
            <button onClick={() => onRemove(item)}>
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <h3>Total: ${total}</h3>

        <button onClick={onCheckout}>
          <CreditCard size={16} />
          Checkout
        </button>
      </div>
    </div>
  )
}

export default CartSection