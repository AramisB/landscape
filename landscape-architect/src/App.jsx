import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Projects from './pages/Projects';
import ProjectsSection from './pages/ProjectsSection';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetails';
import Blog from './pages/Blog';
import GetAquote from './pages/GetAquote';
import ServiceDetails from './pages/ServiceDetails';
import AboutUsSection from './pages/AboutUsSection';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './styles/index.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetail />} />
            <Route path="projects/section/:id" element={<ProjectsSection />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:title" element={<ServiceDetails />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="about-us/:id" element={<AboutUsSection />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:category" element={<Products />} />
            <Route path="cart" element={<CartPage />} />
            <Route
              path="checkout"
              element={
                <Elements stripe={stripePromise}>
                  <CheckoutPage />
                </Elements>
              }
            />
            <Route path="get-a-quote" element={<GetAquote />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}
