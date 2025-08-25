import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Plant from './pages/Plant';
import About from './pages/About';
import Article from './pages/Article';
import FAQ from './pages/FAQ';
import Event from './pages/Event';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plant />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/events" element={<Event />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
       <Footer /> 
    </>
  );
}

export default App;