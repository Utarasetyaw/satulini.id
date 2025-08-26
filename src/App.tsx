import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Plant from './pages/Plant';
import About from './pages/About';
import Article from './pages/Article';
import Event from './pages/Event';
import EventDetail from './pages/EventDetail';
import ArticleDetail from './pages/ArticleDetail';
import PlantDetail from './pages/PlantDetail';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plant />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/plants/:id" element={<PlantDetail />} />
      </Routes>
       <Footer /> 
    </>
  );
}

export default App;