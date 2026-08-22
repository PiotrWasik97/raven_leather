import { useState } from 'react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Galeria from './components/Galeria.jsx';
import Kontakt from './components/Kontakt.jsx'; 
import Products from './components/Products.jsx';
import OMnie from './components/OMnie.jsx';
import ContactPage from './components/ContactPage.jsx';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('Portfele');

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGalleryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar 
        onNavigate={handleNavigate} 
        onContactClick={() => handleNavigate('contact')} 
      />

      {currentView === 'home' && (
        <>
          <div id="start">
            <Hero onNavigate={handleNavigate} />
          </div>
          <div id="galeria">
            <Galeria onCategoryClick={handleGalleryClick} />
          </div>
          <div id="kontakt-footer">
            <Kontakt />
          </div>
        </>
      )}

      {currentView === 'products' && (
        <div id="produkty">
          <Products initialCategory={selectedCategory} />
        </div>
      )}

      {currentView === 'about' && (
        <div id="omnie">
          <OMnie />
        </div>
      )}

      {currentView === 'contact' && (
        <div id="contact-page">
          <ContactPage />
        </div>
      )}
      
    </>
  )
}

export default App;