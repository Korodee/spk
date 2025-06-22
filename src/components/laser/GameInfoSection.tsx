"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedLine = ({
  path,
  duration = 2,
  delay = 0,
}: {
  path: string;
  duration?: number;
  delay?: number;
}) => (
  <svg
    className="absolute w-full h-full"
    viewBox="0 0 500 200"
    preserveAspectRatio="none"
  >
    <motion.path
      d={path}
      fill="none"
      stroke="#ef4444"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration, delay, ease: "easeInOut" }}
    />
    <motion.circle
      r="4"
      fill="#ef4444"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay + 0.2, duration: 0.5 }}
    >
      <animateMotion dur={`${duration}s`} repeatCount="1" path={path} />
    </motion.circle>
  </svg>
);

const GameInfoSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#000428] to-[#0a011a] relative overflow-hidden py-24 px-4">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-red-900/40 opacity-50" />
      <div className="absolute top-0 left-0">
        <AnimatedLine path="M -10,10 L 100,40 L 80, 80" delay={0.5} />
      </div>
      <div className="absolute bottom-0 right-0 transform scale-x-[-1] scale-y-[-1]">
        <AnimatedLine path="M -10,10 L 100,40 L 80, 80" delay={1} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          className="text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-6xl font-black uppercase tracking-tighter mb-8">
            La Partie
          </h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Accumulez autant de points que possible en atteignant la veste de
              vos adversaires avec votre pistolet au laser. En désactivant les
              autres joueurs, vous marquez des points; si vous êtes touché, vous
              en perdez. Utilisez votre précision pour viser l&apos;une des
              cibles d&apos;un autre joueur pour le désactiver pendant quelques
              secondes.
            </p>
            <p>
              Chaque partie de 15 minutes peut accueillir jusqu&apos;à 30
              participants. À la fin de la partie, nous vous remettrons une
              feuille détaillée de votre pointage.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
        >
          <Image
            src="/la-partie.png"
            alt="Laser tag game in action"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export default GameInfoSection;
