import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { categoryToSlug, slugToCategory } from "../utils/categorySlugs.js";
import useSEO from "../hooks/useSEO.js";

import { PRODUCTS_BY_CATEGORY } from "../data/catalog.js";

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

function LightboxImage({ photo, alt, onLoad }) {
  const [largeReady, setLargeReady] = useState(false);

  useEffect(() => {
    const preload = new Image();
    preload.onload = () => setLargeReady(true);
    preload.src = photo.large;
    return () => {
      preload.onload = null;
    };
  }, [photo.large]);

  return (
    <img
      src={largeReady ? photo.large : photo.medium}
      alt={alt}
      onLoad={(e) => onLoad(e.currentTarget)}
      draggable={false}
      className="max-h-full max-w-full object-contain shadow-2xl animate-fadeIn select-none"
    />
  );
}

export default function Products() {
  const { kategoria } = useParams();
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState(null);
  const [photoBottom, setPhotoBottom] = useState(null);
  const lightboxImgRef = useRef(null);
  const zoomScaleRef = useRef(1);
  const scrollContainerRef = useRef(null);
  const categoryBarRef = useRef(null);
  const categoryBarPositionedRef = useRef(false);
  const pointerDownRef = useRef(null);

  const productsData = PRODUCTS_BY_CATEGORY;
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

  useEffect(() => {
    const bar = categoryBarRef.current;
    const chip = bar?.querySelector('[aria-current="page"]');
    if (!bar || !chip) return;
    const barRect = bar.getBoundingClientRect();
    const chipRect = chip.getBoundingClientRect();
    bar.scrollBy({
      left:
        chipRect.left + chipRect.width / 2 - (barRect.left + barRect.width / 2),
      behavior: categoryBarPositionedRef.current ? "smooth" : "instant",
    });
    categoryBarPositionedRef.current = true;
  }, [activeCategory]);

  useSEO({
    title: activeCategory,
    description: `${activeCategory} – ręcznie robiona galanteria skórzana z naturalnej skóry najwyższej klasy. Zobacz kolekcję Raven Leather.`,
    path: `/kolekcja/${categoryToSlug(activeCategory)}`,
  });

  const openLightbox = (section, photo) => {
    const index = section.photos.indexOf(photo);
    if (index !== -1) {
      zoomScaleRef.current = 1;
      setLightbox({ photos: section.photos, index });
    }
  };

  const closeLightbox = () => {
    setLightbox(null);
    setPhotoBottom(null);
  };

  const nextImage = useCallback(() => {
    zoomScaleRef.current = 1;
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.photos.length,
    }));
  }, []);

  const prevImage = useCallback(() => {
    zoomScaleRef.current = 1;
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.photos.length) % prev.photos.length,
    }));
  }, []);

  const measurePhoto = useCallback((img) => {
    lightboxImgRef.current = img;
    if (zoomScaleRef.current > 1.01) return;
    setPhotoBottom(img.getBoundingClientRect().bottom);
  }, []);

  const isLightboxOpen = lightbox !== null;

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    const handleResize = () => {
      if (lightboxImgRef.current) measurePhoto(lightboxImgRef.current);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLightboxOpen, nextImage, prevImage, measurePhoto]);

  const handleBackdropPointerDown = (e) => {
    pointerDownRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleBackdropClick = (e) => {
    if (e.target.tagName === "IMG") return;
    const start = pointerDownRef.current;
    if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) > 6) {
      return;
    }
    closeLightbox();
  };

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
    <section className="w-full bg-stone-50 h-[calc(100vh-6rem)] supports-[height:100dvh]:h-[calc(100dvh-6rem)] flex flex-col md:flex-row overflow-hidden relative">
      <div className="md:hidden w-full bg-white border-b border-stone-200 flex-shrink-0 z-20">
        <div
          ref={categoryBarRef}
          className="flex overflow-x-auto py-4 px-4 gap-3 no-scrollbar"
        >
          {categories.map((category) => (
            <button
              key={category}
              aria-current={activeCategory === category ? "page" : undefined}
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
                onClick={() =>
                  navigate(`/kolekcja/${categoryToSlug(category)}`)
                }
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
        className="flex-1 min-h-0 h-full bg-white md:bg-stone-50/50 p-0 md:p-12 lg:p-16 overflow-y-auto overscroll-y-contain scroll-smooth"
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
          productsData[activeCategory].map((section, sectionIndex) => {
            const cover = section.photos[0];

            return (
              <div key={sectionIndex} className="mb-0 md:mb-16 last:mb-0">
                {section.title && (
                  <div className="flex flex-col items-center justify-center gap-1 py-4 md:mb-8 bg-stone-50 md:bg-transparent">
                    <h3 className="text-sm md:text-xl font-serif text-stone-800 italic">
                      — {section.title} —
                    </h3>
                    {section.price && (
                      <p className="text-stone-500 text-xs md:text-sm font-light tracking-wide">
                        cena {section.price}
                      </p>
                    )}
                  </div>
                )}

                <div className="md:hidden px-2 pb-1">
                  <div
                    onClick={() => openLightbox(section, cover)}
                    className="aspect-[4/3] w-full overflow-hidden bg-stone-100 cursor-pointer"
                  >
                    <img
                      src={cover.medium}
                      srcSet={`${cover.thumb} 800w, ${cover.medium} 1600w`}
                      sizes="100vw"
                      alt={`${activeCategory} ${section.title} – zdjęcie główne`}
                      loading={sectionIndex === 0 ? "eager" : "lazy"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-6 px-2">
                  {section.photos.map((photo, photoIndex) => (
                    <div
                      key={photoIndex}
                      onClick={() => openLightbox(section, photo)}
                      className={`group relative aspect-square overflow-hidden bg-stone-100 md:rounded-sm cursor-pointer shadow-none md:shadow-sm md:hover:shadow-md transition-all duration-300 ${
                        photo === cover ? "hidden md:block" : ""
                      }`}
                    >
                      <img
                        src={photo.thumb}
                        alt={`${activeCategory} ${section.title} ${photoIndex + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                      />

                      <div className="hidden md:flex absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300 items-center justify-center"></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-stone-400 border border-dashed border-stone-200 rounded-sm mx-4 md:mx-0 mt-8">
            <p className="text-sm font-light">Kolekcja w przygotowaniu.</p>
          </div>
        )}
      </main>

      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-sm">
          <TransformWrapper
            key={lightbox.index}
            minScale={1}
            maxScale={6}
            centerZoomedOut
            wheel={{ step: 0.005 }}
            doubleClick={{ mode: "toggle" }}
            panning={{ velocityDisabled: true }}
            onTransform={(_, state) => {
              zoomScaleRef.current = state.scale;
            }}
          >
            <TransformComponent
              wrapperStyle={{ width: "100%", height: "100%" }}
              contentStyle={{ width: "100%", height: "100%" }}
            >
              <div
                className="w-full h-full p-4 pb-16 md:p-12 md:pb-20 flex items-center justify-center"
                onPointerDown={handleBackdropPointerDown}
                onClick={handleBackdropClick}
              >
                <LightboxImage
                  photo={lightbox.photos[lightbox.index]}
                  alt={`${activeCategory} – zdjęcie ${lightbox.index + 1}`}
                  onLoad={measurePhoto}
                />
              </div>
            </TransformComponent>
          </TransformWrapper>

          <button
            onClick={closeLightbox}
            aria-label="Zamknij"
            className="absolute top-4 right-4 md:top-8 md:right-8 text-stone-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-50"
          >
            <CloseIcon />
          </button>

          <button
            onClick={prevImage}
            aria-label="Poprzednie zdjęcie"
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white p-2 md:p-4 hover:bg-white/5 rounded-full transition-all z-50"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextImage}
            aria-label="Następne zdjęcie"
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white p-2 md:p-4 hover:bg-white/5 rounded-full transition-all z-50"
          >
            <ChevronRight />
          </button>

          {photoBottom !== null && (
            <div
              className="absolute left-0 right-0 mt-5 text-center text-stone-400 text-sm tracking-[0.2em] tabular-nums pointer-events-none [text-shadow:0_1px_3px_rgb(0_0_0/0.9)]"
              style={{ top: photoBottom }}
            >
              {lightbox.index + 1} / {lightbox.photos.length}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
