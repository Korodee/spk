"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slideData = [
  {
    id: "Paradis",
    title: "Salle ludique avec bar spacieux et convivial",
    description:
      "Dans cette salle animée, l'atmosphère est propice à la détente et à l'amusement, offrant un éventail de petits jeux divertissants, le tout agrémenté d'un vaste bar accueillant et spacieux.",
    image: "/paradis.jpg",
  },
  {
    id: "Rétro",
    title: "Univers rétro",
    description:
      "Imaginez-vous plongé dans l'univers rétro des bornes d'arcade, où vous pourrez défier vos amis dans des classiques intemporels tels que Pac-Man, Space Invaders ou Street Fighter.",
    image: "/retro-2.jpg",
  },
  {
    id: "Adrénaline",
    title: "Fan de football ?",
    description:
      "Et si vous êtes plus fan de football, notre baby-foot vous attend pour des parties endiablées. Maniez les joueurs habilement, déjouez les défenses adverses et faites trembler les filets avec vos tirs précis.",
    image: "/adrenaline.jpg",
  },
];

const SalleBSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideData.length);
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
    <div className="relative py-24 px-4 h-[80vh] md:h-screen">
      <AnimatePresence>
        <motion.div
          key={activeSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={slideData[activeSlide].image}
            alt={slideData[activeSlide].title}
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 z-20">
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border-b-2 border-yellow-400">
            <h3 className="text-4xl font-bold uppercase text-yellow-400">
              Salle B
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center min-h-[60vh] pt-24">
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h2 className="text-6xl font-black uppercase tracking-tighter mb-4">
                  {slideData[activeSlide].title}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl">
                  {slideData[activeSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="md:col-span-1 flex justify-center">
            <div className="p-2 bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl">
              <ul className="space-y-2">
                {slideData.map((slide, index) => (
                  <li key={slide.id}>
                    <button
                      onClick={() => handleSetActiveSlide(index)}
                      className={`relative w-full text-left p-3 rounded-lg transition-colors duration-300 ${
                        activeSlide === index ? "" : "hover:bg-white/10"
                      }`}
                    >
                      {activeSlide === index && (
                        <motion.div
                          layoutId="active-vip-slide-b"
                          className="absolute inset-0 bg-white/20 border-2 border-yellow-400 rounded-lg"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="relative w-24 h-16 rounded-md overflow-hidden">
                          <Image
                            src={slide.image}
                            alt={slide.id}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <span className="font-bold uppercase tracking-wider">
                          {slide.id}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalleBSlider;
