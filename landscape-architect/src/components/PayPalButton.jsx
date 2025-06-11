import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ totalAmount, email }) => {
    // You must convert KES to USD if your PayPal account is USD based! Adjust the conversion below. 
    const usdAmount = (totalAmount / 150).toFixed(2); // Example conversion KES->USD

    return (
        <PayPalScriptProvider options={{ 'client-id': import.meta.env.VITE_PAYPAL_CLIENT_ID }}>
            <PayPalButtons
                style={{ layout: 'vertical' }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: usdAmount,
                                currency_code: 'USD',
                            }
                        }]
                    });
                }}
                onApprove={async (data, actions) => {
                    // on approve
                    const details = await actions.order.capture();
                    // Optionally inform your backend, alert the user, etc.
                    alert('Payment successful! Thank you, ' + details.payer.name.given_name);
                }}
                onError={err => alert('PayPal error: ' + err)}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalButton;