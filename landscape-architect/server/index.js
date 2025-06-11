require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Stripe Payment
app.post('/api/pay', async (req, res) => {
  const { paymentMethodId, amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // in smallest unit (e.g., cents)
      currency: 'kes',
      payment_method: paymentMethodId,
      confirm: true,
    });
    res.json({ success: true, paymentIntent });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// PayPal Order Verification
app.post('/api/paypal-verify', async (req, res) => {
  const { orderID } = req.body;
  try {
    const basicAuth = Buffer.from(process.env.PAYPAL_CLIENT_ID + ':' + process.env.PAYPAL_SECRET).toString('base64');
    const tokenRes = await axios.post(
      'https://api-m.sandbox.paypal.com/v1/oauth2/token',
      'grant_type=client_credentials',
      { headers: { Authorization: `Basic ${basicAuth}` } }
    );
    const accessToken = tokenRes.data.access_token;

    const orderRes = await axios.get(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    res.json({ success: true, order: orderRes.data });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});


// === M-Pesa Integration ===
const {
  MPESA_CONSUMER_KEY,
  MPESA_CONSUMER_SECRET,
  MPESA_SHORTCODE,
  MPESA_PASSKEY,
  MPESA_CALLBACK_URL,
} = process.env;

// Helper: Get OAuth token
async function getMpesaToken() {
  const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
  const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString('base64');
  const { data } = await axios.get(url, {
    headers: { Authorization: `Basic ${auth}` }
  });
  return data.access_token;
}

// Helper: Generate password and timestamp
function getPasswordAndTimestamp() {
  const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
  const password = Buffer.from(`${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`).toString('base64');
  return { password, timestamp };
}

// M-Pesa STK Push (REAL)
app.post('/api/mpesa-pay', async (req, res) => {
  const { phone, amount } = req.body;
  try {
    const access_token = await getMpesaToken();
    const { password, timestamp } = getPasswordAndTimestamp();

    const payload = {
      BusinessShortCode: MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phone, // 2547XXXXXXXX
      PartyB: MPESA_SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: MPESA_CALLBACK_URL,
      AccountReference: 'OrderPayment',
      TransactionDesc: 'Payment for order',
    };

    const { data } = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      payload,
      { headers: { Authorization: `Bearer ${access_token}` } }
    );

    if (data.ResponseCode === "0") {
      res.json({ success: true, message: 'STK Push sent. Check your phone to complete payment.' });
    } else {
      res.json({ success: false, message: data.ResponseDescription });
    }
  } catch (err) {
    res.json({
      success: false,
      message: err.response?.data?.errorMessage || err.message,
    });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
