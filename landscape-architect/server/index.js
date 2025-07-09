import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Stripe from 'stripe';
import axios from 'axios';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(bodyParser.json());

//const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// === Stripe Payment ===
/*app.post('/api/pay', async (req, res) => {
  const { paymentMethodId, amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'kes',
      payment_method: paymentMethodId,
      confirm: true,
    });
    res.json({ success: true, paymentIntent });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// === PayPal Verification ===
app.post('/api/paypal-verify', async (req, res) => {
  const { orderID } = req.body;
  try {
    const basicAuth = Buffer.from(
      `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
    ).toString('base64');

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

// === M-Pesa Config ===
const {
  MPESA_CONSUMER_KEY,
  MPESA_CONSUMER_SECRET,
  MPESA_SHORTCODE,
  MPESA_PASSKEY,
  MPESA_CALLBACK_URL,
} = process.env;

// === Helper: M-Pesa Token ===
async function getMpesaToken() {
  const url =
    'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
  const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString(
    'base64'
  );
  const { data } = await axios.get(url, {
    headers: { Authorization: `Basic ${auth}` },
  });
  return data.access_token;
}

// === Helper: M-Pesa Password & Timestamp ===
function getPasswordAndTimestamp() {
  const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
  const password = Buffer.from(`${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`).toString(
    'base64'
  );
  return { password, timestamp };
}

// === M-Pesa STK Push ===
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
      PartyA: phone,
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

    if (data.ResponseCode === '0') {
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
*/
// === Contact Form Endpoint ===
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
