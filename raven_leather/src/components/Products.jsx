import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categoryToSlug, slugToCategory } from "../utils/categorySlugs.js";
import useSEO from "../hooks/useSEO.js";

import biker1 from "../assets/biker-1.jpg";
import biker2 from "../assets/biker-2.jpg";
import biker3 from "../assets/biker-3.jpg";
import biker4 from "../assets/biker-4.jpg";
import biker5 from "../assets/biker-5.jpg";
import biker6 from "../assets/biker-6.jpg";
import biker7 from "../assets/biker-7.jpg";

import bifold from "../assets/Bifold.jpg";
import bifold1 from "../assets/Bifold(1).jpg";
import bifold2 from "../assets/Bifold(2).jpg";
import bifold3 from "../assets/Bifold(3).jpg";
import bifold4 from "../assets/Bifold(4).jpg";
import bifold5 from "../assets/Bifold(5).jpg";
import bifold6 from "../assets/Bifold(6).jpg";
import bifold7 from "../assets/Bifold(7).jpg";
import bifold8 from "../assets/Bifold(8).jpg";
import bifold9 from "../assets/Bifold(9).jpg";
import bifoldProfil from "../assets/Bifold - profil.jpg";

import brelok1 from "../assets/brelok-1.jpg";
import brelok2 from "../assets/brelok-2.jpg";
import brelok3 from "../assets/brelok-3.jpg";

import cardholder1 from "../assets/Card Holder 1.jpg";
import cardholder1_1 from "../assets/Card Holder 1(1).jpg";
import cardholder1_2 from "../assets/Card Holder 1(2).jpg";
import cardholder1_3 from "../assets/Card Holder 1(3).jpg";
import cardholder1_4 from "../assets/Card Holder 1(4).jpg";
import cardholder1_5 from "../assets/Card Holder 1(5).jpg";
import cardholder1_6 from "../assets/Card Holder 1(6).jpg";
import cardholder1_7 from "../assets/Card Holder 1(7).jpg";
import cardholder1_8 from "../assets/Card Holder 1(8).jpg";
import cardholder1Profil from "../assets/Card Holder 1 - profil.jpg";

import cardholderMinimalist from "../assets/Card Holder minimalist.jpg";
import cardholderMinimalist1 from "../assets/Card Holder minimalist(1).jpg";
import cardholderMinimalist2 from "../assets/Card Holder minimalist(2).jpg";
import cardholderMinimalist3 from "../assets/Card Holder minimalist(3).jpg";
import cardholderMinimalist4 from "../assets/Card Holder minimalist(4).jpg";
import cardholderMinimalistProfil from "../assets/Card Holder minimalist - profil.jpg";

import passport from "../assets/Passport.jpg";
import passport1 from "../assets/Passport(1).jpg";
import passport2 from "../assets/Passport(2).jpg";
import passport3 from "../assets/Passport(3).jpg";
import passport4 from "../assets/Passport(4).jpg";
import passportProfil from "../assets/Passport - profil.jpg";

import akcesoria1 from "../assets/kostki-gitarowe-1.jpg";
import akcesoria2 from "../assets/kostki-gitarowe-2.jpg";

import paski1 from "../assets/paski-spodnie-1.jpg";
import paski2 from "../assets/paski-spodnie-2.jpg";
import paski3 from "../assets/paski-spodnie-3.jpg";
import paski4 from "../assets/paski-spodnie-4.jpg";

import pasy1 from "../assets/pasy-gitarowe-1.jpg";
import pasy2 from "../assets/pasy-gitarowe-2.jpg";
import pasy3 from "../assets/pasy-gitarowe-3.jpg";
import pasy4 from "../assets/pasy-gitarowe-4.jpg";

import torebka1 from "../assets/torebka-1.jpg";
import torebka2 from "../assets/torebka-2.jpg";
import torebka3 from "../assets/torebka-3.jpg";
import torebka4 from "../assets/torebka-4.jpg";
import torebka5 from "../assets/torebka-5.jpg";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);
const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default function Products() {
  const { kategoria } = useParams();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const scrollContainerRef = useRef(null);

  const productsData = {
    Portfele: [
      {
        title: "Biker",
        images: [biker1, biker2, biker3, biker4, biker5, biker6, biker7],
      },
      {
        title: "Bifold",
        images: [
          bifold,
          bifold1,
          bifold2,
          bifold3,
          bifold4,
          bifold5,
          bifold6,
          bifold7,
          bifold8,
          bifold9,
          bifoldProfil,
        ],
      },
    ],
    Etui: [
      {
        title: "Cardholders",
        images: [
          cardholder1,
          cardholder1_1,
          cardholder1_2,
          cardholder1_3,
          cardholder1_4,
          cardholder1_5,
          cardholder1_6,
          cardholder1_7,
          cardholder1_8,
          cardholder1Profil,
        ],
      },
      {
        title: "Card Holders Minimalist",
        images: [
          cardholderMinimalist,
          cardholderMinimalist1,
          cardholderMinimalist2,
          cardholderMinimalist3,
          cardholderMinimalist4,
          cardholderMinimalistProfil,
        ],
      },
      {
        title: "Passport",
        images: [passport, passport1, passport2, passport3, passport4, passportProfil],
      },
    ],
    /*
    Torebki: [
      {
        title: "Kolekcja Podstawowa",
        images: [torebka1, torebka2, torebka3, torebka4, torebka5],
      },
    ],
    "Paski do spodni": [
      { title: "Paski do spodni", images: [paski1, paski2, paski3, paski4] },
    ],
    Akcesoria: [
      { title: "Kostki Gitarowe", images: [akcesoria1, akcesoria2] },
      { title: "Breloki", images: [brelok1, brelok2, brelok3] },
      { title: "Pasy Gitarowe", images: [pasy1, pasy2, pasy3, pasy4] },
    ],
    */
  };

  const categories = Object.keys(productsData);

  const requestedCategory = kategoria ? slugToCategory(kategoria) : null;
  const activeCategory =
    requestedCategory && categories.includes(requestedCategory)
      ? requestedCategory
      : categories[0];

  useEffect(() => {
    const correctSlug = categoryToSlug(activeCategory);
    if (kategoria !== correctSlug) {
      navigate(`/kolekcja/${correctSlug}`, { replace: true });
    }
  }, [kategoria, activeCategory, navigate]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [activeCategory]);

  useSEO({
    title: activeCategory,
    description: `${activeCategory} – ręcznie robiona galanteria skórzana z naturalnej skóry najwyższej klasy. Zobacz kolekcję Raven Leather.`,
    path: `/kolekcja/${categoryToSlug(activeCategory)}`,
  });

  const allImagesInCategory = productsData[activeCategory]
    ? productsData[activeCategory].flatMap((section) => section.images)
    : [];

  const openLightbox = (imgSrc) => {
    const index = allImagesInCategory.indexOf(imgSrc);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % allImagesInCategory.length);
  }, [allImagesInCategory.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex(
      (prev) =>
        (prev - 1 + allImagesInCategory.length) % allImagesInCategory.length,
    );
  }, [allImagesInCategory.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  const getModelCountText = (category) => {
    if (!productsData[category]) return "";

    const count = productsData[category].length;

    if (count === 1) return "1 model";

    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (
      lastDigit >= 2 &&
      lastDigit <= 4 &&
      (lastTwoDigits < 10 || lastTwoDigits >= 20)
    ) {
      return `${count} modele`;
    }

    return `${count} modeli`;
  };

  return (
    <section className="w-full bg-stone-50 h-[calc(100vh-80px)] flex flex-col md:flex-row overflow-hidden relative">
      <div className="md:hidden w-full bg-white border-b border-stone-200 flex-shrink-0 z-20">
        <div className="flex overflow-x-auto py-4 px-4 gap-3 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => navigate(`/kolekcja/${categoryToSlug(category)}`)}
              className={`whitespace-nowrap px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === category
                  ? "bg-stone-900 text-white"
                  : "bg-stone-100 text-stone-500 hover:bg-stone-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <aside className="hidden md:block w-64 lg:w-80 bg-stone-50 h-full border-r border-stone-200 flex-shrink-0 overflow-y-auto">
        <div className="py-12 px-6">
          <h3 className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 pl-4">
            Kategorie
          </h3>
          <nav className="flex flex-col space-y-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => navigate(`/kolekcja/${categoryToSlug(category)}`)}
                className={`text-left text-base py-3 px-4 transition-all duration-300 border-l-2 ${
                  activeCategory === category
                    ? "border-stone-900 text-stone-900 font-bold bg-white shadow-sm pl-6"
                    : "border-transparent text-stone-500 hover:text-stone-900 hover:bg-stone-100 font-medium hover:pl-6"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <main
        ref={scrollContainerRef}
        className="flex-1 h-full bg-white md:bg-stone-50/50 p-0 md:p-12 lg:p-16 overflow-y-auto scroll-smooth"
      >
        <div className="hidden md:flex mb-12 border-b border-stone-200 pb-6 flex-col md:flex-row md:items-end justify-between gap-2">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
            {activeCategory}
          </h2>
          <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">
            {getModelCountText(activeCategory)}
          </p>
        </div>

        {productsData[activeCategory] &&
        productsData[activeCategory].length > 0 ? (
          productsData[activeCategory].map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-0 md:mb-16 last:mb-0">
              {section.title && (
                <div className="flex items-center justify-center py-4 md:mb-8 bg-stone-50 md:bg-transparent">
                  <h3 className="text-sm md:text-xl font-serif text-stone-800 italic">
                    — {section.title} —
                  </h3>
                </div>
              )}

              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-6 px-2">
                {section.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    onClick={() => openLightbox(img)}
                    className="group relative aspect-square overflow-hidden bg-stone-100 md:rounded-sm cursor-pointer shadow-none md:shadow-sm md:hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={img}
                      alt={`${activeCategory} ${section.title} ${imgIndex + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                    />

                    <div className="hidden md:flex absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300 items-center justify-center"></div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-stone-400 border border-dashed border-stone-200 rounded-sm mx-4 md:mx-0 mt-8">
            <p className="text-sm font-light">Kolekcja w przygotowaniu.</p>
          </div>
        )}
      </main>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-sm flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-stone-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-50"
          >
            <CloseIcon />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 md:left-8 text-stone-500 hover:text-white p-2 md:p-4 hover:bg-white/5 rounded-full transition-all z-50"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 md:right-8 text-stone-500 hover:text-white p-2 md:p-4 hover:bg-white/5 rounded-full transition-all z-50"
          >
            <ChevronRight />
          </button>

          <div
            className="relative w-full h-full p-4 md:p-12 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <img
              src={allImagesInCategory[lightboxIndex]}
              alt="Full screen"
              className="max-h-full max-w-full object-contain shadow-2xl animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 text-stone-500 text-xs tracking-[0.2em]">
              {lightboxIndex + 1} / {allImagesInCategory.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
