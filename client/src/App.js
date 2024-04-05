import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

// Pages & Components
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import ProjectPage from './pages/ProjectPage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Footer/Footer';
import linkData from './data/project-data.json';

// import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <div className='App'>
        <NavBar />

        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work linkData={linkData} />} />
          <Route path='/work/:id' element={<ProjectPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
