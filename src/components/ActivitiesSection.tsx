"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const activities = [
  {
    name: "Jeu Laser",
    image: "/laser-tag.jpg",
    href: "/tarifs#laser-tag",
  },
  {
    name: "Minigolf",
    image: "/golf.jpg",
    href: "/tarifs#minigolf",
  },
  {
    name: "Réalité Virtuelle",
    image: "/virtual-real.jpg",
    href: "/tarifs#vr",
  },
  {
    name: "Karting",
    image: "/karting.jpg",
    href: "/tarifs#karting",
  },
  {
    name: "Paintball",
    image: "/paintball.jpg",
    href: "/tarifs#paintball",
  },
  {
    name: "Cube SPK",
    image: "/labyrinth.jpg",
    href: "/tarifs#cube",
  },
  {
    name: "Salle Arcade VIP",
    image: "/arcade.jpg",
    href: "/tarifs#arcade",
  },
];

const ActivityCard = ({ activity }: { activity: (typeof activities)[0] }) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <div
      ref={targetRef}
      className="embla__slide relative h-[70vh] flex items-end justify-start p-8 md:p-12 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y }}
          className="absolute -inset-24 w-[calc(100%+12rem)] h-[calc(100%+12rem)]"
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src={activity.image}
            alt={activity.name}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
      <div className="relative z-20">
        <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter -skew-x-12">
          {activity.name}
        </h3>
        <Link href={activity.href}>
          <motion.button
            className="mt-4 text-lg font-bold text-yellow-300 border-2 border-yellow-300 rounded-full px-8 py-2 uppercase tracking-widest"
            whileHover={{
              backgroundColor: "#fde047",
              color: "#000000",
              scale: 1.1,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Découvrir
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

const ActivitiesSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
      loop: true,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="activities" className="pt-25 relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_70%,#3b0764_100%)]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white text-center font-[family-name:var(--font-montserrat)]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
            Nos Activités
          </span>
        </h2>
      </div>
      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container">
          {activities.map((activity) => (
            <ActivityCard key={activity.name} activity={activity} />
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={scrollPrev}
          className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-colors"
        >
          <FiChevronLeft size={32} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={scrollNext}
          className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-colors"
        >
          <FiChevronRight size={32} />
        </button>
      </div>
      <style jsx global>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 80%;
          min-width: 0;
          padding-left: 1rem;
        }
        @media (min-width: 768px) {
          .embla__slide {
            flex: 0 0 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default ActivitiesSection;
