import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import GetAquote from './pages/GetAquote';
import ServiceDetails from './pages/ServiceDetails';
import './styles/index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:title" element={<ServiceDetails />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="products" element={<Products />} />
          <Route path="get-a-quote" element={<GetAquote />} />
        </Route>
      </Routes>
    </Router>
  );
}
