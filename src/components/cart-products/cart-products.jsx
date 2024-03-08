import React from 'react'

export const CartProducts = () => {
    return (
        <div key={item.id} className="border border-gray-200 p-4 rounded-lg">
            <div>
                <img src={item.image} alt={item.title} />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <button className="text-red-500 hover:text-red-700" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
            <p className="text-gray-500">Price: {item.price} Сум</p>
            <p className="text-gray-500">Subtotal: {calculateSubtotal(item)} Сум</p>
            <div className="flex items-center mt-2">
                <button className="text-sm bg-gray-200 px-2 py-1 rounded-md" onClick={() => handleDecrement(item.id)}>-</button>
                <p className="text-lg font-semibold mx-2">{item.quantity}</p>
                <button className="text-sm bg-gray-200 px-2 py-1 rounded-md" onClick={() => handleIncrement(item.id)}>+</button>
            </div>
        </div>
    )
}
