import { useLayoutEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Galeria from "./components/Galeria.jsx";
import Kontakt from "./components/Kontakt.jsx";
import Products from "./components/Products.jsx";
import OMnie from "./components/OMnie.jsx";
import ContactPage from "./components/ContactPage.jsx";
import useSEO from "./hooks/useSEO.js";

function HomePage() {
  useSEO({
    title: "Strona Główna",
    description:
      "Ręcznie robione portfele, etui na karty i torebki z naturalnej skóry najwyższej klasy. Pracownia rzemieślnicza w Będzinie.",
    path: "/",
  });

  return (
    <>
      <div id="start">
        <Hero />
      </div>
      <div id="galeria">
        <Galeria />
      </div>
      <div id="kontakt-footer">
        <Kontakt />
      </div>
    </>
  );
}

function AboutPage() {
  useSEO({
    title: "O mnie",
    description:
      "Poznaj Marcina Wasika – twórcę Raven Leather. Rzemieślnicza pracownia skórzana w Będzinie, gdzie każdy produkt powstaje w pełni ręcznie.",
    path: "/o-mnie",
  });

  return (
    <div id="omnie">
      <OMnie />
    </div>
  );
}

function ContactRoutePage() {
  useSEO({
    title: "Kontakt",
    description:
      "Skontaktuj się z pracownią Raven Leather w Będzinie – zapytaj o dostępność produktu lub zamówienie indywidualne.",
    path: "/kontakt",
  });

  return (
    <div id="contact-page">
      <ContactPage />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kolekcja" element={<Products />} />
        <Route path="/kolekcja/:kategoria" element={<Products />} />
        <Route path="/o-mnie" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactRoutePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
