import React, { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Componente HeroShowcase para la sección derecha del Hero.
 * Carrusel limpio y visual para exhibir exclusivamente las fotos de la tienda/colección.
 * 
 * Conceptos utilizados:
 * - useState: Manejo de la diapositiva actual y pausa en hover.
 * - useEffect con Cleanup: Temporizador de autoplay seguro.
 * - Event Handlers: Navegación por flechas, puntos (dots) y soporte táctil (swipe).
 * - Prop Normalization: Admite arreglo de URLs directas o de objetos.
 *
 * @param {Object} props
 * @param {Object} [props.showcaseData] - Datos del showcase definidos en landingData.js
 */
export default function HeroShowcase({ showcaseData }) {
  const data = showcaseData || {};

  // Normalizamos las diapositivas para soportar tanto un arreglo de URLs directas como objetos
  const rawSlides = data.slides || data.images || [
    '/images/hero/01_carrusel.png',
    '/images/hero/02_carrusel.png',
    '/images/hero/03_carrusel.png',
    '/images/hero/04_carrusel.png',
    '/images/hero/05_carrusel.png',
  ];

  const slides = rawSlides.map((slide, index) => {
    if (typeof slide === 'string') {
      return { id: `slide-${index}`, image: slide, alt: `Foto ${index + 1} de la tienda` };
    }
    return {
      id: slide.id || `slide-${index}`,
      image: slide.image || slide.src || slide,
      alt: slide.alt || `Foto ${index + 1} de la tienda`,
    };
  });

  // Estado para el índice actual y pausa en interacción
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Referencias para gestos táctiles (swipe móvil)
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Autoplay con temporizador (4 segundos)
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide, slides.length]);

  // Gestos táctiles
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative w-full max-w-lg mx-auto lg:max-w-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Resplandor exterior suave de fondo */}
      <div
        className="absolute -inset-2 bg-gradient-to-br from-sky-200/40 via-pink-200/20 to-mystic-200/30 rounded-3xl blur-2xl opacity-80"
        aria-hidden="true"
      />

      <div className="relative rounded-3xl bg-white border border-slate-200 p-3 sm:p-4 shadow-xl">
        {/* Contenedor del Carrusel de Imágenes */}
        <div
          className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-inner group aspect-[4/3] sm:aspect-[4/3.2]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Diapositivas con transición suave */}
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={!isActive}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}

          {/* Botón Navegación Izquierda */}
          {slides.length > 1 && (
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Ver imagen anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md flex items-center justify-center opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-400 border border-white/20 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Botón Navegación Derecha */}
          {slides.length > 1 && (
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Ver imagen siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md flex items-center justify-center opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-400 border border-white/20 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Indicadores de Paginación (Puntos / Dots) */}
          {slides.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-md">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Ir a imagen ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-6 bg-sky-400' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



