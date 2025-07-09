"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const CircuitSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      className="relative h-[150vh] bg-black overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/karting-track.jpg"
          alt="Vue aérienne de la piste de karting"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <motion.div className="text-center" style={{ y: textY, opacity }}>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter -skew-x-12 mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">
              Notre Circuit
            </span>
          </h2>
          <div className="flex justify-center items-baseline gap-8 md:gap-16 mb-12">
            <div className="text-center">
              <p className="text-6xl md:text-8xl font-black tracking-tighter text-red-500">
                900
                <span className="text-2xl md:text-4xl text-gray-400 ml-2">
                  m
                </span>
              </p>
            </div>
            <div className="text-center">
              <p className="text-6xl md:text-8xl font-black tracking-tighter text-orange-400">
                75
                <span className="text-2xl md:text-4xl text-gray-400 ml-2">
                  km/h
                </span>
              </p>
            </div>
          </div>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Équipé de karts les plus puissants au Québec, Centre Amusement SPK
            possède une piste totalement asphaltée de près de 1 kilomètre. Elle
            mesure 900 mètres par 7.5 mètres de largeur. Plusieurs moniteurs
            seront disponibles pour vous dicter les règlements ainsi que de
            veiller à votre sécurité tout au long de votre activité. Équipée
            d&apos;un système de chronométrage à transpondeurs (du même type que
            celui utilisé en Formule 1) ainsi qu&apos;un éclairage de soir sur
            le circuit, terrasse extérieure et stationnement.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CircuitSection;
