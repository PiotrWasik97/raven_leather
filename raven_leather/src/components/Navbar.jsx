import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../assets/logo/raven-leather-poziome.svg';

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

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-100 h-24 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between max-w-screen-xl">

          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          >
            <img
              src={logoNav}
              alt="Raven Leather"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden xl:flex items-center gap-12">
            <Link
              to="/"
              className="text-stone-600 hover:text-stone-900 text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
            >
              Start
            </Link>
            <Link
              to="/kolekcja"
              className="text-stone-600 hover:text-stone-900 text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
            >
              Kolekcja
            </Link>
            <Link
              to="/o-mnie"
              className="text-stone-600 hover:text-stone-900 text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
            >
              O Mnie
            </Link>
            <Link
              to="/jak-zamowic"
              className="text-stone-600 hover:text-stone-900 text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
            >
              Jak zamówić
            </Link>
            <Link
              to="/kontakt"
              className="px-6 py-3 bg-stone-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors cursor-pointer rounded-sm shadow-md"
            >
              Kontakt
            </Link>
          </div>

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

      <div 
        className={`fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-stone-50 z-50 shadow-2xl transform transition-transform duration-500 ease-out xl:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 relative">
            
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 transition-colors"
            >
                <CloseIcon />
            </button>

            <div className="mt-12 mb-10 border-b border-stone-200 pb-6">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400">Menu</span>
            </div>

            <div className="flex flex-col gap-6 justify-center align-center">
                <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="text-2xl font-serif text-stone-900 hover:text-stone-600 text-left transition-colors"
                >
                    Start
                </Link>
                <Link
                    to="/kolekcja"
                    onClick={closeMobileMenu}
                    className="text-2xl font-serif text-stone-900 hover:text-stone-600 text-left transition-colors"
                >
                    Kolekcja
                </Link>
                <Link
                    to="/o-mnie"
                    onClick={closeMobileMenu}
                    className="text-2xl font-serif text-stone-900 hover:text-stone-600 text-left transition-colors"
                >
                    O Mnie
                </Link>
                <Link
                    to="/jak-zamowic"
                    onClick={closeMobileMenu}
                    className="text-2xl font-serif text-stone-900 hover:text-stone-600 text-left transition-colors"
                >
                    Jak zamówić
                </Link>
                <Link
                    to="/kontakt"
                    onClick={closeMobileMenu}
                    className="text-2xl font-serif text-stone-900 hover:text-stone-600 text-left transition-colors"
                >
                    Kontakt
                </Link>
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