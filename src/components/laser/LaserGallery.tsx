"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const images = [
  { src: "/laser1.jpg", alt: "Laser tag arena", position: "md:col-span-2" },
  { src: "/laser2.jpg", alt: "Players in action", position: "" },
  { src: "/laser4.jpg", alt: "Team strategy", position: "md:col-span-2" },
  { src: "/laser3.jpg", alt: "Close-up on equipment", position: "" },
];

interface GalleryImageProps {
  src: string;
  alt: string;
  position: string;
}

const GalleryImage = ({ src, alt, position }: GalleryImageProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.div
      ref={ref}
      className={`relative h-80 rounded-2xl overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 ${position}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-110"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </motion.div>
  );
};

const LaserGallery = () => {
  return (
    <div className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center uppercase tracking-tighter text-white mb-16">
          Galerie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          {images.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaserGallery;
