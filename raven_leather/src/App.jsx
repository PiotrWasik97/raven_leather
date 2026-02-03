import { useState } from 'react';

// Importy komponentów
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Galeria from './components/Galeria.jsx';
import Kontakt from './components/Kontakt.jsx'; // To zostaje jako stopka na stronie głównej (opcjonalnie)
import Products from './components/Products.jsx';
import OMnie from './components/OMnie.jsx';
import ContactPage from './components/ContactPage.jsx'; // <--- NOWY IMPORT

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
      {/* Navbar: Zmieniamy onContactClick na standardowe onNavigate */}
      <Navbar 
        onNavigate={handleNavigate} 
        onContactClick={() => handleNavigate('contact')} 
      />

      {/* 1. STRONA GŁÓWNA */}
      {currentView === 'home' && (
        <>
          <div id="start">
            <Hero onNavigate={handleNavigate} />
          </div>
          <div id="galeria">
            <Galeria onCategoryClick={handleGalleryClick} />
          </div>
          {/* Opcjonalnie: Możesz zostawić starą stopkę na dole strony głównej, 
              albo ją usunąć, jeśli wolisz minimalizm. Zostawiam ją tutaj. */}
          <div id="kontakt-footer">
            <Kontakt />
          </div>
        </>
      )}

      {/* 2. STRONA PRODUKTÓW */}
      {currentView === 'products' && (
        <div id="produkty">
          <Products initialCategory={selectedCategory} />
        </div>
      )}

      {/* 3. STRONA O MNIE */}
      {currentView === 'about' && (
        <div id="omnie">
          <OMnie />
        </div>
      )}

      {/* 4. NOWA STRONA KONTAKTU */}
      {currentView === 'contact' && (
        <div id="contact-page">
          <ContactPage />
        </div>
      )}
      
    </>
  )
}

export default App;