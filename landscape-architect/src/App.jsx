import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ProjectDetail from './components/ProjectDetails';
import Blog from './pages/Blog';
import GetAquote from './pages/GetAquote';
import ServiceDetails from './components/ServiceDetails';
import AboutUsSection from './components/AboutUsSection';
import './styles/index.css';
import ImagePreloader from './components/ImagePreloader';
import ProductsPage from './pages/Products';
import ProjectSection from './components/projects/ProjectsSection';
import Testimonials from './components/Testimonials';
import BlogDetail from './components/BlogDetail';

// Critical images to preload
const criticalImages = [
  '/logo.webp',
  '/hero.webp',
  '/aboutUs.webp',
  '/servicesSlider.webp',
  '/contactSlider.webp'
];

export default function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <ImagePreloader images={criticalImages} />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<ProjectDetail />} />
              <Route path="projects/section/:id" element={<ProjectSection />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:title" element={<ServiceDetails />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="products/:category" element={<ProductsPage />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="about-us/:id" element={<AboutUsSection />} />
              <Route path="contact" element={<Contact />} />
              <Route path="blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="get-a-quote" element={<GetAquote />} />
              <Route path="testimonials" element={<Testimonials />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}
