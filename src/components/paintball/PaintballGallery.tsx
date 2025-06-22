"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

const images = [
  "/paintball1.jpg",
  "/paintball2.jpg",
  "/paintball3.jpg",
  "/paintball4.jpg",
  "/paintball5.jpg",
  "/paintball6.jpg",
];

const PaintballGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const combatPhrases = [
    "COMBAT READY",
    "TACTICAL STRIKE",
    "STEALTH MODE",
    "FULL AUTO",
    "SNIPER SHOT",
    "VICTORY LAP",
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-black py-32 overflow-hidden"
    >
      {/* Animated combat background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[
            { left: "10%", top: "20%" },
            { left: "25%", top: "15%" },
            { left: "40%", top: "30%" },
            { left: "55%", top: "25%" },
            { left: "70%", top: "40%" },
            { left: "85%", top: "35%" },
            { left: "15%", top: "50%" },
            { left: "30%", top: "45%" },
            { left: "45%", top: "60%" },
            { left: "60%", top: "55%" },
            { left: "75%", top: "70%" },
            { left: "90%", top: "65%" },
            { left: "5%", top: "80%" },
            { left: "20%", top: "75%" },
            { left: "35%", top: "90%" },
            { left: "50%", top: "85%" },
            { left: "65%", top: "95%" },
            { left: "80%", top: "90%" },
            { left: "95%", top: "10%" },
            { left: "12%", top: "95%" },
          ].map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-500 rounded-full"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Dynamic Title */}
        <motion.div style={{ y, opacity }} className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tight"
          >
            <span className="bg-gradient-to-r from-green-500 via-lime-400 to-green-600 bg-clip-text text-transparent animate-gradient">
              COMBAT GALLERY
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-gradient-to-r from-green-500 to-lime-400 mx-auto rounded-full mb-8"
          />

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl font-bold text-lime-400 tracking-wider"
          >
            {combatPhrases[activeIndex]}
          </motion.div>
        </motion.div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              onHoverStart={() => setActiveIndex(index)}
              className="relative group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border-2 border-transparent group-hover:border-green-500 transition-all duration-300">
                <Image
                  src={src}
                  alt={`Paintball ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Combat overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: activeIndex === index ? 1 : 0,
                        y: activeIndex === index ? 0 : 30,
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-white"
                    >
                      <h3 className="text-2xl font-black mb-3 text-lime-400">
                        COMBAT #{index + 1}
                      </h3>
                      <p className="text-sm text-gray-300 font-mono tracking-wider">
                        TACTICAL • STEALTH • PRECISION
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Glitch effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>

                {/* Combat crosshair */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 animate-crosshair-spin">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-green-500 transform -translate-y-1/2 animate-combat-pulse"></div>
                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-green-500 transform -translate-x-1/2 animate-combat-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 border-2 border-green-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full animate-combat-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Floating combat badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-green-600 to-lime-500 rounded-full flex items-center justify-center text-white font-black text-xl shadow-2xl border-4 border-black animate-combat-pulse"
              >
                {index + 1}
              </motion.div>

              {/* Particle burst effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-lime-400 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    initial={{ scale: 0, x: 0, y: 0 }}
                    whileHover={{
                      scale: [0, 1, 0],
                      x: [0, Math.cos((i * 45 * Math.PI) / 180) * 50],
                      y: [0, Math.sin((i * 45 * Math.PI) / 180) * 50],
                    }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 text-xl mb-8 font-mono tracking-wider">
            PRÊT POUR LE COMBAT ULTIME ?
          </p>
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-600 to-lime-500 text-white px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 border-2 border-green-400 animate-combat-pulse"
          >
            ENGAGER LE COMBAT
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PaintballGallery;
