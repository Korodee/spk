"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Un véritable havre d'amusement",
    description:
      "Durée de l'activité: De 30 minutes à 2 heures selon le nombre de catégories d'énigmes que vous désirez résoudre. Le tarif est le même que vous fassiez une catégories d'énigmes ou 3 catégories.",
    image: "/activite.jpg",
    thumbnailText: "Activité",
  },
  {
    id: 2,
    title: "Aventure pour tous",
    description:
      "Découvrez un labyrinthe captivant, relevez des défis, stimulez votre esprit et vivez une expérience mémorable pour tous.",
    image: "/pourtous.jpg",
    thumbnailText: "Pour tous",
  },
  {
    id: 3,
    title: "Immersion",
    description:
      "Plongez dans une expérience immersive où énigmes, défis, collaboration et créativité s'unissent pour vous offrir des souvenirs inoubliables.",
    image: "/immersion.jpg",
    thumbnailText: "Immersion",
  },
];

const LabyrinthSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
  };

  const resetSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startSlideshow();
  };

  useEffect(() => {
    startSlideshow();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleSetActiveSlide = (index: number) => {
    setActiveSlide(index);
    resetSlideshow();
  };

  return (
    <section className="relative my-10 w-full h-screen overflow-hidden bg-black">
      <AnimatePresence>
        <motion.div
          key={activeSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={slides[activeSlide].image}
            alt={slides[activeSlide].title}
            layout="fill"
            objectFit="cover"
            className="animate-ken-burns"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full pt-12 md:pt-0 p-8 md:p-16">
        <div className="w-full md:w-1/2 text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                {slides[activeSlide].title}
              </h2>
              <p className="mt-6 text-lg md:text-xl max-w-xl">
                {slides[activeSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full md:w-auto mt-8 md:mt-0">
          <div className="p-4 bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl">
            <ul className="space-y-3">
              {slides.map((slide, index) => (
                <li key={slide.id}>
                  <button
                    onClick={() => handleSetActiveSlide(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      activeSlide === index
                        ? "bg-white/20"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-12 rounded-md overflow-hidden">
                        <Image
                          src={slide.image}
                          alt={slide.thumbnailText}
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                      </div>
                      <span className="font-bold text-white text-lg">
                        {slide.thumbnailText}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabyrinthSlider;
