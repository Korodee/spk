"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface VrExperience {
  image: string;
  title: string;
  price: string;
  description: string;
}

const vrExperiences: VrExperience[] = [
  {
    image: "/chaise.png",
    title: "Chaise 360 degrés",
    price: "12$",
    description: "Par scénario par joueur (durées variables de 8 minutes)",
  },
  {
    image: "/glissade.png",
    title: "La Glissade",
    price: "7$",
    description: "Par scénario par joueur (durées variables de 3 à 6 minutes)",
  },
  {
    image: "/vaisseau.webp",
    title: "La Vaisseau",
    price: "7$",
    description: "Par scénario par joueur (durées variables de 3 à 6 minutes)",
  },
  {
    image: "/cinema.jpg",
    title: "Cinéma 9D",
    price: "7$",
    description: "Par scénario par joueur (durées variables de 3 à 6 minutes)",
  },
  {
    image: "/simulator.png",
    title: "Simulateur de Course",
    price: "7$",
    description: "Par scénario par joueur (durées variables de 3 à 6 minutes)",
  },
  {
    image: "/special-force.png",
    title: "Zombie",
    price: "10$",
    description:
      'Par joueurs pour nos modules multijoueurs "Zombies attaque" en coopération. Équipe de 4 en même temps contre l\'ordinateur.',
  },
  {
    image: "/dance.png",
    title: "Dance mania",
    price: "2$",
    description: "Pour 2 chansons par joueur.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const VrCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
      inViewThreshold: 0.7,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-black uppercase tracking-tighter text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Les Tarifs
        </motion.h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {vrExperiences.map((exp, index) => (
                <div
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
                  key={exp.title}
                >
                  <motion.div
                    className="bg-gradient-to-b from-blue-900/20 via-black to-black border border-blue-500/30 rounded-2xl overflow-hidden h-full flex flex-col"
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="p-6 text-center flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-semibold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-5xl font-bold text-blue-400 my-4">
                          {exp.price}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 disabled:opacity-0 transition-all"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            <FiChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 disabled:opacity-0 transition-all"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            <FiChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VrCarousel;
