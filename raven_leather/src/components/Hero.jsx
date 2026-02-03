import React, { useState, useEffect } from 'react';
import logo from '../assets/Raven_logo.png';
import frontphoto1 from '../assets/biker-1.jpg';
import frontphoto2 from '../assets/biker-2.jpg';
import frontphoto3 from '../assets/biker-3.jpg';
import frontphoto4 from '../assets/biker-4.jpg';
import frontphoto5 from '../assets/biker-5.jpg';

export default function Hero({ onNavigate }) {
    const images = [frontphoto1, frontphoto2, frontphoto3, frontphoto4, frontphoto5];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (

        <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-96px)] w-full bg-stone-50 overflow-hidden">
            
            <div className="flex flex-col justify-center items-center lg:items-start px-8 md:px-16 lg:px-24 py-4 z-10 order-1">
                
                <div>
                    <img 
                        src={logo} 
                        alt="Raven Leather Logo" 
                        className="w-48 md:w-64 lg:w-80 opacity-90" 
                    />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-6 text-center lg:text-left">
                    Sztuka <br/>
                    <span className="italic text-stone-500">Rzemiosła</span>
                </h1>
                
                <p className="text-stone-600 max-w-md text-base md:text-lg leading-relaxed font-light mb-10 text-center lg:text-left">
                    Minimalizm formy, szlachetność skóry i precyzja ręcznego wykonania. 
                    Tworzymy przedmioty, które nabierają charakteru z każdym dniem.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button 
                        onClick={() => onNavigate('products')}
                        className="px-10 py-4 bg-stone-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-xl rounded-sm"
                    >
                        Zobacz Kolekcję
                    </button>
                    
                    <button 
                        onClick={() => onNavigate('about')}
                        className="px-10 py-4 border border-stone-300 text-stone-800 text-xs font-bold uppercase tracking-[0.2em] hover:border-stone-900 hover:bg-stone-50 transition-all duration-300 cursor-pointer rounded-sm"
                    >
                        Poznaj Markę
                    </button>
                </div>
            </div>

            <div className="hidden lg:block relative w-full h-full order-2 p-4 md:p-8 bg-stone-50">
                <div className="relative w-full h-full overflow-hidden rounded-sm md:rounded-lg shadow-sm">
                    {images.map((photo, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                             <img
                                src={photo}
                                alt={`Slide ${index}`}
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