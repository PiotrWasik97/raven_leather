import React from "react";

import portfel from '../assets/portfel-m-1.jpg';
import cardholder from '../assets/cardholder-model-1-1.jpg';
import brelok from '../assets/brelok-1.jpg';
import pasek from '../assets/paski-spodnie-1.jpg';
import torebka from '../assets/torebka-1.jpg';
import kostka from '../assets/kostki-gitarowe-1.jpg';
import pasgitara from '../assets/pasy-gitarowe-1.jpg';

const categories = [
    { id: 1, img: portfel, title: "Portfele", keyName: "Portfele", span: "md:col-span-2 md:row-span-2" }, 
    { id: 3, img: pasek, title: "Paski", keyName: "Paski do spodni", span: "md:col-span-1 md:row-span-2" },      
    { id: 2, img: torebka, title: "Torebki", keyName: "Torebki", span: "md:col-span-1 md:row-span-1" },   
    { id: 4, img: cardholder, title: "Etui", keyName: "Etui", span: "md:col-span-1 md:row-span-1" },   
    { id: 7, img: pasgitara, title: "Pasy Gitarowe", keyName: "Pasy gitarowe", span: "md:col-span-2 md:row-span-1" },
    { id: 5, img: brelok, title: "Breloki", keyName: "Breloki", span: "md:col-span-1 md:row-span-1" },         
    { id: 6, img: kostka, title: "Akcesoria", keyName: "Akcesoria", span: "md:col-span-1 md:row-span-1" },       
];

export default function Galeria({ onCategoryClick }) {
    return (
        <section className="py-20 bg-stone-50">
            {/* ZMIANA: Zwiększony padding boczny na LG (lg:px-20), żeby ścisnąć siatkę na szerokość */}
            <div className="container mx-auto px-4 md:px-8 lg:px-20 max-w-screen-xl">
                
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 lg:mb-16 text-stone-900 leading-tight">
                    Wybierz <span className="italic text-stone-500">Kategorię</span>
                </h2>

                {/* ZMIANA: lg:auto-rows-[200px] - zmniejsza wysokość rzędów na dużych ekranach */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px] lg:auto-rows-[200px] grid-flow-dense">
                    
                    {categories.map((item) => (
                        <div 
                            key={item.id} 
                            onClick={() => onCategoryClick(item.keyName)}
                            className={`relative group overflow-hidden rounded-sm cursor-pointer ${item.span}`}
                        >
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100"></div>

                            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start justify-end">
                                
                                <h3 className="text-white text-xl font-bold tracking-wide mb-1 drop-shadow-md">
                                    {item.title}
                                </h3>

                                <div className="flex items-center gap-2 group/btn">
                                    <span className="text-stone-300 text-xs font-bold uppercase tracking-[0.2em] transition-colors group-hover:text-white">
                                        Zobacz Kolekcję
                                    </span>

                                    <span className="text-stone-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                                        →
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}