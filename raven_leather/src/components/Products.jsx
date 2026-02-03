import React, { useState, useEffect, useCallback, useRef } from "react";

// --- IMPORTY ZDJĘĆ ---
import biker1 from '../assets/biker-1.jpg';
import biker2 from '../assets/biker-2.jpg';
import biker3 from '../assets/biker-3.jpg';
import biker4 from '../assets/biker-4.jpg';
import biker5 from '../assets/biker-5.jpg';
import biker6 from '../assets/biker-6.jpg';
import biker7 from '../assets/biker-7.jpg';
import biker8 from '../assets/biker-8.jpg';
import biker9 from '../assets/biker-9.jpg';
import biker10 from '../assets/biker-10.jpg';

import portfel1 from '../assets/portfel-m-1.jpg';
import portfel2 from '../assets/portfel-m-2.jpg';
import portfel3 from '../assets/portfel-m-3.jpg';
import portfel4 from '../assets/portfel-m-4.jpg';
import portfel5 from '../assets/portfel-m-5.jpg';

import brelok1 from '../assets/brelok-1.jpg';
import brelok2 from '../assets/brelok-2.jpg';
import brelok3 from '../assets/brelok-3.jpg';

import etuimodel1_1 from '../assets/cardholder-model-1-1.jpg';
import etuimodel1_2 from '../assets/cardholder-model-1-2.jpg';
import etuimodel1_3 from '../assets/cardholder-model-1-3.jpg';
import etuimodel1_4 from '../assets/cardholder-model-1-4.jpg';
import etuimodel1_5 from '../assets/cardholder-model-1-5.jpg';
import etuimodel1_6 from '../assets/cardholder-model-1-6.jpg';
import etuimodel1_7 from '../assets/cardholder-model-1-7.jpg';
import etuimodel1_8 from '../assets/cardholder-model-1-8.jpg';
import etuimodel1_9 from '../assets/cardholder-model-1-9.jpg';

import etuimodel2_1 from '../assets/cardholder-model-2-1.jpg';
import etuimodel2_2 from '../assets/cardholder-model-2-2.jpg';
import etuimodel2_3 from '../assets/cardholder-model-2-3.jpg';

import etuimodel3_1 from '../assets/cardholder-model-3-1.jpg';
import etuimodel3_2 from '../assets/cardholder-model-3-2.jpg';
import etuimodel3_3 from '../assets/cardholder-model-3-3.jpg';
import etuimodel3_4 from '../assets/cardholder-model-3-4.jpg';
import etuimodel3_5 from '../assets/cardholder-model-3-5.jpg';

import etuimodel4_1 from '../assets/cardholder-model-4-1.jpg';
import etuimodel4_2 from '../assets/cardholder-model-4-2.jpg';
import etuimodel4_3 from '../assets/cardholder-model-4-3.jpg';
import etuimodel4_4 from '../assets/cardholder-model-4-4.jpg';

import akcesoria1 from '../assets/kostki-gitarowe-1.jpg';
import akcesoria2 from '../assets/kostki-gitarowe-2.jpg';

import paski1 from '../assets/paski-spodnie-1.jpg';
import paski2 from '../assets/paski-spodnie-2.jpg';
import paski3 from '../assets/paski-spodnie-3.jpg';
import paski4 from '../assets/paski-spodnie-4.jpg';

import pasy1 from '../assets/pasy-gitarowe-1.jpg';
import pasy2 from '../assets/pasy-gitarowe-2.jpg';
import pasy3 from '../assets/pasy-gitarowe-3.jpg';
import pasy4 from '../assets/pasy-gitarowe-4.jpg';

import torebka1 from '../assets/torebka-1.jpg';
import torebka2 from '../assets/torebka-2.jpg';
import torebka3 from '../assets/torebka-3.jpg';
import torebka4 from '../assets/torebka-4.jpg';
import torebka5 from '../assets/torebka-5.jpg';

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
);
const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
    </svg>
);
const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
    </svg>
);

export default function Products({ initialCategory }) {
    const [activeCategory, setActiveCategory] = useState(initialCategory || "Portfele");
    const [lightboxIndex, setLightboxIndex] = useState(null); 
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        if (initialCategory) {
            setActiveCategory(initialCategory);
        }
    }, [initialCategory]);

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ top: 0, behavior: 'auto' }); 
        }
    }, [activeCategory]);

    const productsData = {
        "Portfele": [
            { title: "Biker", images: [biker1, biker2, biker3, biker4, biker5, biker6, biker7, biker8, biker9, biker10] },
            { title: "Portfel Model 1", images: [portfel1, portfel2, portfel3, portfel4, portfel5] }
        ],
        "Etui": [
            { title: "Model 1", images: [etuimodel1_1, etuimodel1_2, etuimodel1_3, etuimodel1_4, etuimodel1_5, etuimodel1_6, etuimodel1_7, etuimodel1_8, etuimodel1_9] },
            { title: "Model 2", images: [etuimodel2_1, etuimodel2_2, etuimodel2_3] },
            { title: "Model 3", images: [etuimodel3_1, etuimodel3_2, etuimodel3_3, etuimodel3_4, etuimodel3_5] },
            { title: "Model 4", images: [etuimodel4_1, etuimodel4_2, etuimodel4_3, etuimodel4_4] }
        ],
        "Torebki": [
            { title: "Kolekcja Podstawowa", images: [torebka1, torebka2, torebka3, torebka4, torebka5] }
        ],
        "Paski do spodni": [
            { title: "Paski do spodni", images: [paski1, paski2, paski3, paski4] }
        ],
        "Pasy gitarowe": [
            { title: "Handmade Straps", images: [pasy1, pasy2, pasy3, pasy4] }
        ],
        "Akcesoria": [
            { title: "Kostki Gitarowe", images: [akcesoria1, akcesoria2] }
        ],
        "Breloki": [
            { title: "Breloki", images: [brelok1, brelok2, brelok3] }
        ],
    };

    const categories = Object.keys(productsData);

    const allImagesInCategory = productsData[activeCategory]
        ? productsData[activeCategory].flatMap(section => section.images)
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
        setLightboxIndex((prev) => (prev - 1 + allImagesInCategory.length) % allImagesInCategory.length);
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

    // --- NOWA FUNKCJA: Liczy modele i odmienia końcówki ---
    const getModelCountText = (category) => {
        if (!productsData[category]) return "";
        
        const count = productsData[category].length; // Liczymy sekcje (modele), a nie zdjęcia

        if (count === 1) return "1 model";
        
        // Logika odmiany dla 2, 3, 4 (z wyłączeniem 12, 13, 14)
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;
        
        if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
            return `${count} modele`;
        }
        
        return `${count} modeli`;
    };

    return (
        <section className="w-full bg-stone-50 h-[calc(100vh-80px)] flex flex-col md:flex-row overflow-hidden relative">
            
            {/* --- MENU MOBILNE --- */}
            <div className="md:hidden w-full bg-white border-b border-stone-200 flex-shrink-0 z-20">
                <div className="flex overflow-x-auto py-4 px-4 gap-3 no-scrollbar">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
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

            {/* --- SIDEBAR DESKTOPOWY --- */}
            <aside className="hidden md:block w-64 lg:w-80 bg-stone-50 h-full border-r border-stone-200 flex-shrink-0 overflow-y-auto">
                <div className="py-12 px-6">
                    <h3 className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 pl-4">
                        Kategorie
                    </h3>
                    <nav className="flex flex-col space-y-1">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
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

            {/* --- GŁÓWNA ZAWARTOŚĆ --- */}
            <main 
                ref={scrollContainerRef}
                className="flex-1 h-full bg-white md:bg-stone-50/50 p-0 md:p-12 lg:p-16 overflow-y-auto scroll-smooth"
            >
                
                {/* NAGŁÓWEK KATEGORII */}
                <div className="hidden md:flex mb-12 border-b border-stone-200 pb-6 flex-col md:flex-row md:items-end justify-between gap-2">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900">{activeCategory}</h2>
                    {/* ZMIANA: Wyświetlanie liczby modeli z odmianą */}
                    <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">
                        {getModelCountText(activeCategory)}
                    </p>
                </div>

                {productsData[activeCategory] && productsData[activeCategory].length > 0 ? (
                    productsData[activeCategory].map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-0 md:mb-16 last:mb-0">
                            
                            {section.title && (
                                <div className="flex items-center justify-center py-4 md:mb-8 bg-stone-50 md:bg-transparent">
                                    <h3 className="text-sm md:text-xl font-serif text-stone-800 italic">
                                        — {section.title} —
                                    </h3>
                                </div>
                            )}

                            {/* ZMIANA SIATKI GRID:
                                Mobile: grid-cols-3, gap-1
                                Desktop: lg:grid-cols-4, xl:grid-cols-5 (mniejsze obrazki, więcej kolumn) 
                            */}
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
                                            className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                                        />
                                        
                                        <div className="hidden md:flex absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300 items-center justify-center">
                                        </div>
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

            {/* --- LIGHTBOX --- */}
            {lightboxIndex !== null && (
                <div className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-sm flex items-center justify-center">
                    
                    <button 
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-stone-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-50"
                    >
                        <CloseIcon />
                    </button>

                    <button 
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-2 md:left-8 text-stone-500 hover:text-white p-2 md:p-4 hover:bg-white/5 rounded-full transition-all z-50"
                    >
                        <ChevronLeft />
                    </button>

                    <button 
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-2 md:right-8 text-stone-500 hover:text-white p-2 md:p-4 hover:bg-white/5 rounded-full transition-all z-50"
                    >
                        <ChevronRight />
                    </button>

                    <div className="relative w-full h-full p-4 md:p-12 flex items-center justify-center" onClick={closeLightbox}>
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