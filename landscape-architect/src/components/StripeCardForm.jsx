// components/StripeCardForm.jsx
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const StripeCardForm = ({ billing, totalAmount }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
            billing_details: {
                name: billing.name,
            },
        });

        if (error) {
            alert(error.message);
            return;
        }

        // Send paymentMethod.id and totalAmount to backend
        const response = await fetch('/api/pay', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                paymentMethodId: paymentMethod.id,
                amount: totalAmount,
            }),
        });

        const result = await response.json();

        if (result.success) {
            alert('Payment successful!');
        } else {
            alert(`Payment failed: ${result.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full border p-2 rounded"
                value={billing.name}
                onChange={e => billing.setName(e.target.value)}
                required
            />
            <div className="border p-4 rounded bg-white">
                <CardElement />
            </div>
            <button
                type="submit"
                disabled={!stripe}
                className="w-full mt-4 bg-[var(--primary-green)] text-white py-3 rounded text-lg font-semibold hover:bg-[var(--light-green)] transition"
            >
                Pay Now
            </button>
        </form>
    );
};

export default StripeCardForm;
