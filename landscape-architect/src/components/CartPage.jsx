import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const TAX_RATE = 0.16; // 16% tax

const CartPage = () => {
    const { cart, updateQuantity, removeFromCart } = useCart();
    const navigate = useNavigate();
    const subtotal = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
        return sum + price * (item.quantity || 1);
    }, 0);
    const tax = Math.round(subtotal * TAX_RATE);
    const total = subtotal + tax;

    return (
        <div className="max-w-5xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
                <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                {cart.length === 0 ? (
                    <div className="text-gray-500">Your cart is empty.</div>
                ) : (
                    <div>
                        <div className="grid grid-cols-4 font-semibold text-gray-700 border-b pb-2 mb-2">
                            <span>Product</span>
                            <span>Quantity</span>
                            <span>Subtotal</span>
                            <span></span>
                        </div>
                        <ul className="divide-y divide-gray-200 mb-6">
                            {cart.map((item) => {
                                const price = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
                                return (
                                    <li key={item.id} className="py-4 grid grid-cols-4 items-center">
                                        <div className="flex items-center gap-4">
                                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                            <span>{item.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                aria-label="Decrease quantity"
                                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
                                                onClick={() =>
                                                    item.quantity > 1
                                                        ? updateQuantity(item.id, item.quantity - 1)
                                                        : removeFromCart(item.id)
                                                }
                                            >-</button>
                                            <span className="px-3 py-1 border rounded bg-white">{item.quantity || 1}</span>
                                            <button
                                                aria-label="Increase quantity"
                                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
                                                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                            >+</button>
                                        </div>
                                        <span className="font-semibold">
                                            KES {(price * (item.quantity || 1)).toLocaleString()}
                                        </span>
                                        <button
                                            aria-label="Remove item"
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            {/* Trash icon (SVG) */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-7 0h10" />
                                            </svg>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
            {/* Summary Section */}
            <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 sticky top-24">
                    <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>KES {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Tax (16%)</span>
                        <span>KES {tax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
                        <span>Total</span>
                        <span>KES {total.toLocaleString()}</span>
                    </div>
                    <button
                        className="w-full mt-6 bg-[var(--primary-green)] text-white py-3 rounded text-lg font-semibold hover:bg-[var(--light-green)] transition"
                        disabled={cart.length === 0}
                        onClick={() => navigate('/checkout')}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;