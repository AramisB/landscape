import React, { useState } from 'react';

const MpesaPayButton = ({ totalAmount, phone }) => {
  const [loading, setLoading] = useState(false);

  const handleMpesaPay = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/mpesa-pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, amount: totalAmount }),
      });
      const result = await res.json();
      if (result.success) {
        alert('Check your phone to complete the payment.');
      } else {
        alert('M-Pesa payment failed: ' + result.message);
      }
    } catch (err) {
      alert('M-Pesa error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <button
      className="w-full mt-6 bg-[var(--primary-green)] text-white py-3 rounded text-lg font-semibold hover:bg-[var(--light-green)] transition"
      onClick={handleMpesaPay}
      disabled={loading || !phone}
    >
      {loading ? 'Processing...' : 'Pay with M-Pesa'}
    </button>
  );
};

export default MpesaPayButton;