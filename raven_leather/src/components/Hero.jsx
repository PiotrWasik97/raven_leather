import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/raven-leather-poziome.svg";
import { coverOf } from "../data/catalog.js";

const images = [
  {
    folder: "bikerwallet",
    alt: "Ręcznie robiony portfel Biker Wallet – Raven Leather",
  },
  { folder: "bifold", alt: "Ręcznie robiony portfel Bifold – Raven Leather" },
  {
    folder: "card-holder-1",
    alt: "Skórzane etui na karty Card Holder – Raven Leather",
  },
  {
    folder: "card-holder-minimalist",
    alt: "Minimalistyczne etui na karty – Raven Leather",
  },
  { folder: "paszport", alt: "Skórzane etui na paszport – Raven Leather" },
  {
    folder: "torba-damska-model-1",
    alt: "Ręcznie szyta skórzana torba damska – Raven Leather",
  },
  {
    folder: "pasek",
    alt: "Ręcznie robiony skórzany pasek do spodni – Raven Leather",
  },
]
  .map(({ folder, alt }) => ({ src: coverOf(folder)?.medium, alt }))
  .filter((image) => image.src);

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-96px)] w-full bg-stone-50 overflow-hidden">
      <div className="flex flex-col justify-center items-center lg:items-start px-8 md:px-14 lg:px-20 py-4 z-10 order-1">
        <div>
          <img
            src={logo}
            alt="Raven Leather Logo"
            className="w-40 md:w-52 lg:w-64 opacity-90"
          />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 leading-tight mb-4 text-center lg:text-left">
          Ponadczasowe rękodzieło <br />
          skórzane <br />
          <span className="italic text-stone-500">Timeless leather craft</span>
        </h1>

        <p className="text-stone-600 max-w-md text-sm md:text-base leading-relaxed font-light mb-8 text-center lg:text-left">
          W świecie masowej produkcji wybierz przedmiot z duszą. Moja pracownia
          to miejsce, gdzie luksus spotyka się z codzienną funkcjonalnością.
          Każdą torebkę, portfel, pasek czy brelok wykonuję w pełni ręcznie - od
          pierwszego cięcia po ostatni szew. Wykorzystuję wyłącznie naturalną
          skórę najwyższej klasy. Poczuj wyjątkową fakturę i dotyk autentycznego
          rzemiosła. Sięgnij po unikatową jakość, którą osobiście dla Ciebie
          sygnuję.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            to="/kolekcja"
            className="px-8 py-3 bg-stone-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-xl rounded-sm text-center"
          >
            Zobacz Kolekcję
          </Link>

          <Link
            to="/o-mnie"
            className="px-8 py-3 border border-stone-300 text-stone-800 text-xs font-bold uppercase tracking-[0.2em] hover:border-stone-900 hover:bg-stone-50 transition-all duration-300 cursor-pointer rounded-sm text-center"
          >
            Poznaj Markę
          </Link>
        </div>
      </div>

      <div className="hidden lg:block relative w-full h-full order-2 p-4 md:p-8 bg-stone-50">
        <div className="relative w-full h-full overflow-hidden rounded-sm md:rounded-lg shadow-sm">
          {images.map((photo, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
