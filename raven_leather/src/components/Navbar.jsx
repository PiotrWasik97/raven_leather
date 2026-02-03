import React, { useState } from 'react';
import logoNav from '../assets/Raven_logo.png';

// Ikony SVG
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar({ onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (action) => {
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ZMIANA: 'sticky' zamiast 'fixed'. 
          Dzięki temu navbar zajmuje fizyczne miejsce (96px) i nie zasłania góry strony. */}
      <nav className="sticky top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-100 h-24 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between max-w-screen-xl">
          
          {/* LEWA STRONA: LOGO */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          >
            <img 
              src={logoNav} 
              alt="Raven Leather" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </div>

          {/* ŚRODEK: MENU DESKTOPOWE */}
          {/* ZMIANA: hidden xl:flex (zamiast lg:flex).
              Pełne menu pokazuje się dopiero na b. dużych ekranach (XL).
              Na tabletach i laptopach (LG) będzie hamburger, żeby logo nie wchodziło na tekst. */}
          <div className="hidden xl:flex items-center gap-12">
            <button 
              onClick={() => onNavigate('home')} 
              className="text-stone-600 hover:text-stone-900 text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
            >
              Start
            </button>
            <button 
              onClick={() => onNavigate('products')} 
              className="text-stone-600 hover:text-stone-900 text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
            >
              Kolekcja
            </button>
            <button 
              onClick={() => onNavigate('about')} 
              className="text-stone-600 hover:text-stone-900 text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
            >
              O Mnie
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="px-6 py-3 bg-stone-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors cursor-pointer rounded-sm shadow-md"
            >
              Kontakt
            </button>
          </div>

          {/* PRAWA STRONA: HAMBURGER */}
          {/* ZMIANA: xl:hidden (Widoczny na mobile, tabletach i mniejszych laptopach) */}
          <div className="xl:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-900 hover:text-stone-600 focus:outline-none transition-colors p-2"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

        </div>
      </nav>

      {/* ROZWIJANE MENU BOCZNE (Dla ekranów mniejszych niż XL) */}
      
      {/* Overlay tła */}
      <div 
        className={`fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Panel boczny */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-stone-50 z-50 shadow-2xl transform transition-transform duration-500 ease-out xl:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 relative">
            
            {/* Przycisk zamknięcia */}
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 transition-colors"
            >
                <CloseIcon />
            </button>

            {/* Nagłówek menu */}
            <div className="mt-12 mb-10 border-b border-stone-200 pb-6">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400">Menu</span>
            </div>

            {/* Linki */}
            <div className="flex flex-col gap-6 justify-center align-center">
                <button 
                    onClick={() => handleLinkClick(() => onNavigate('home'))}
                    className="text-2xl font-serif text-stone-900 hover:text-stone-600 text-left transition-colors"
                >
                    Start
                </button>
                <button 
                    onClick={() => handleLinkClick(() => onNavigate('products'))}
                    className="text-2xl font-serif text-stone-900 hover:text-stone-600 text-left transition-colors"
                >
                    Kolekcja
                </button>
                <button 
                    onClick={() => handleLinkClick(() => onNavigate('about'))}
                    className="text-2xl font-serif text-stone-900 hover:text-stone-600 text-left transition-colors"
                >
                    O Mnie
                </button>
                <button 
                    onClick={() => handleLinkClick(() => onNavigate('contact'))}
                    className="text-2xl font-serif text-stone-900 hover:text-stone-600 text-left transition-colors"
                >
                    Kontakt
                </button>
            </div>

            <div className="mt-auto pt-8 border-t border-stone-200">
                <p className="text-xs text-stone-400 font-light text-center">
                    &copy; {new Date().getFullYear()} Raven Leather
                </p>
            </div>
        </div>
      </div>
    </>
  );
}