"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const images = [
  "/vr1.jpg",
  "/vr2.jpg",
  "/vr3.jpg",
  "/vr4.jpg",
  "/vr5.jpg",
  "/vr6.jpg",
];

const VrGallery = () => {
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const radius = 300;
  const angleIncrement = 360 / images.length;

  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-blue-900/10" />
      <div className="absolute inset-0 animate-grid-pattern" />

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-6xl md:text-7xl font-black uppercase tracking-widest mb-4"
        >
          <span className="text-glow">VR Gallery</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-purple-300 mb-24"
        >
          Explorez nos mondes virtuels
        </motion.p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-[600px] flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d", rotateY: `${rotation}deg` }}
        >
          {images.map((src, index) => {
            const angle = angleIncrement * index;
            return (
              <motion.div
                key={src}
                className="absolute top-1/2 left-1/2 w-[300px] h-[400px] -mt-[200px] -ml-[150px] rounded-2xl overflow-hidden"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 30px 5px rgba(168, 85, 247, 0.7)",
                  zIndex: 10,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={src}
                  alt={`VR experience ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <motion.div
                  className="absolute inset-0 glitch-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default VrGallery;
