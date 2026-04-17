import React, { use } from 'react';
import { CheckCircle2, ShoppingCart } from 'lucide-react'


const ProductCard = ({productsPromise,isInCart, onAddToCart}) => {

    const data = use(productsPromise);

    return (
 <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
  {Array.isArray(data) && data.map((product) => {

    // Badge color based on tagType
    const badgeStyle = {
      popular: "badge-primary",
      new: "badge-success",
      bestseller: "badge-warning",
      featured: "badge-secondary"
    };

    return (
      <div
        key={product.id}
        className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between"
      >
        
        {/* Top Section */}
        <div>
          {/* Icon + Tag */}
          <div className="flex justify-between items-center">
            <div className="text-3xl">{product.icon}</div>
            <span className={`badge badge-sm ${badgeStyle[product.tagType]}`}>
              {product.tag}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold mt-4">
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-500 mt-2">
            {product.description}
          </p>

          {/* Price */}
          <div className="mt-4 text-2xl font-semibold">
            ${product.price}
            <span className="text-sm font-normal">
              {product.period === "monthly" ? "/mo" : " one-time"}
            </span>
          </div>

          {/* Features */}
          <ul className="mt-4 space-y-2 text-sm">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <button
        onClick={() => onAddToCart(product)}
      
        className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-150 active:scale-95 ${
          isInCart
            ? 'bg-[#4F39F6]/20 text-[#a89cff] cursor-default border border-[#4F39F6]/30'
            : 'bg-[#4F39F6] text-white hover:bg-indigo-500'
        }`}
      >
       
      </button>
      </div>
    );
  })}
</div>
    );
}
         

export default ProductCard;