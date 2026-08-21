import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Impact } from './pages/Impact';
import { Collaborations } from './pages/Collaborations';
import { ScrollToTop } from './components/ScrollToTop';
import { Seo } from './components/Seo';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Seo />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand selection:text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
