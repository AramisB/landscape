import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import StripeCardForm from '../components/StripeCardForm';
import PayPalButton from '../components/PayPalButton';
import MpesaPayButton from '../components/MpesaPayButton';

const paymentMethods = [
    { id: 'mastercard', label: 'Mastercard', icon: '/icons/mastercard.webp' },
    { id: 'visa', label: 'Visa', icon: '/icons/visa.webp' },
    { id: 'paypal', label: 'PayPal', icon: '/icons/paypal.webp' },
    { id: 'mpesa', label: 'M-Pesa', icon: '/icons/mpesa.webp' },
];

const TAX_RATE = 0.16;

const CheckoutPage = () => {
    const { cart } = useCart();
    const [selectedMethod, setSelectedMethod] = useState('mastercard');
    const [billing, setBilling] = useState({
        name: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        email: '',
        phone: '',
        mpesaCode: '',
    });
    const navigate = useNavigate();

    const subtotal = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
        return sum + price * (item.quantity || 1);
    }, 0);
    const tax = Math.round(subtotal * TAX_RATE);
    const total = subtotal + tax;

    if (cart.length === 0) {
        return (
            <div className="max-w-xl mx-auto py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty.</h2>
                <button
                    className="bg-[var(--primary-green)] text-white px-6 py-2 rounded"
                    onClick={() => navigate('/products')}
                >
                    Continue Shopping
                </button>
            </div>
        );
    }

    // Billing forms for each payment method
    const renderBillingForm = () => {
        switch (selectedMethod) {
            case 'mastercard':
            case 'visa':
                return (
                    <StripeCardForm billing={billing} setBilling={setBilling} totalAmount={total} />
                );
            case 'paypal':
                return (
                    <div className="space-y-4 mt-4">
                        <input
                            type="email"
                            placeholder="PayPal Email"
                            className="w-full border p-2 rounded"
                            value={billing.email}
                            onChange={e => setBilling({ ...billing, email: e.target.value })}
                            required
                        />
                        <PayPalButton totalAmount={total} email={billing.email} />
                    </div>
                );
            case 'mpesa':
                return (
                    <div className="space-y-4 mt-4">
                        <input
                            type="text"
                            placeholder="M-Pesa Phone Number"
                            className="w-full border p-2 rounded"
                            value={billing.phone}
                            onChange={e => setBilling({ ...billing, phone: e.target.value })}
                            required
                        />
                        <MpesaPayButton totalAmount={total} phone={billing.phone} />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Order Summary - Left */}
            <div>
                <h1 className="text-2xl font-bold mb-6">Checkout</h1>
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 mb-8">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                    <ul className="mb-4">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between mb-2">
                                <span>
                                    {item.name} x {item.quantity || 1}
                                </span>
                                <span>
                                    KES {(
                                        parseInt(item.price.replace(/[^0-9]/g, ''), 10) *
                                        (item.quantity || 1)
                                    ).toLocaleString()}
                                </span>
                            </li>
                        ))}
                    </ul>
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
                </div>
            </div>
            {/* Payment Method - Right */}
            <div>
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 mb-8">
                    <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                    <div className="flex flex-wrap gap-4 mb-4">
                        {paymentMethods.map((method) => (
                            <label
                                key={method.id}
                                className={`flex items-center gap-2 border rounded px-4 py-2 cursor-pointer ${selectedMethod === method.id
                                    ? 'border-[var(--primary-green)] ring-2 ring-[var(--primary-green)]'
                                    : 'border-gray-300'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value={method.id}
                                    checked={selectedMethod === method.id}
                                    onChange={() => setSelectedMethod(method.id)}
                                    className="accent-[var(--primary-green)]"
                                />
                                <img src={method.icon} alt={method.label} className="h-6 w-10 object-contain" />
                                <span>{method.label}</span>
                            </label>
                        ))}
                    </div>
                    {/* Billing details for selected method */}
                    {renderBillingForm()}
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;