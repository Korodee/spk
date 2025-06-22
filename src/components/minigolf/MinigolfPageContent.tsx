"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

interface FloatingBallProps {
  className: string;
  delay?: number;
}

const FloatingBall = ({ className, delay = 0 }: FloatingBallProps) => (
  <motion.div
    className={`absolute w-16 h-16 rounded-full shadow-lg ${className}`}
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: [0, -20, 0], opacity: 1 }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    <div className="absolute inset-0 rounded-full bg-white/80" />
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/20" />
  </motion.div>
);

interface PricingTierProps {
  title: string;
  price: string;
  details: string;
  color: string;
  delay: number;
}

const PricingTier = ({
  title,
  price,
  details,
  color,
  delay,
}: PricingTierProps) => (
  <motion.div
    className="relative text-center p-8 rounded-2xl"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8, delay }}
  >
    <div
      className={`absolute -inset-20 w-48 h-48 rounded-full blur-3xl opacity-40 ${color}`}
    />
    <p className="text-sm font-bold uppercase tracking-widest text-white/50">
      {title}
    </p>
    <p className="text-7xl font-black my-4 text-white">{price}</p>
    <div className="flex items-center justify-center gap-2 text-white/60">
      <FiCheckCircle className="text-purple-400" />
      <span>{details}</span>
    </div>
  </motion.div>
);

const MinigolfPageContent = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center text-gray-300">
          Bienvenue dans notre incroyable parcours de mini-golf fluo ! Plongez
          dans un monde fantastique où les couleurs s&apos;illuminent et les
          défis deviennent encore plus excitants.
        </div>
      </motion.div>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-black to-purple-900/50" />
        <FloatingBall className="top-1/4 left-1/4" delay={0.5} />
        <FloatingBall className="bottom-1/4 right-1/4 w-12 h-12" delay={1} />
        <FloatingBall className="top-1/2 right-1/5" delay={1.5} />

        <div className="text-center z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-8xl font-black uppercase tracking-tighter">
              Mini Golf <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
                Fluo
              </span>
            </h1>
          </motion.div>
          <motion.div
            className="relative w-80 h-80"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <Image
              src="/mini-golf.png"
              alt="Mini Golf Fluo"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          18 trous passionnants, mais également deux trous bonus pour ajouter
          une dimension supplémentaire à votre expérience de jeu. Chaque trou
          est soigneusement conçu pour défier vos compétences et stimuler votre
          créativité. De plus, nous sommes fiers de vous offrir un module de
          jeux d&apos;enfants gratuit et inclus dans le mini-golf.
        </motion.div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 px-4 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-yellow-800/50 via-transparent to-transparent blur-3xl" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-800/50 via-transparent to-transparent blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h2
            className="text-6xl font-black text-center uppercase tracking-tighter mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            Nos Tarifs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingTier
              title="Adulte"
              price="13.50$"
              details="16 ans et plus"
              color="bg-yellow-500/50"
              delay={0.2}
            />
            <PricingTier
              title="Enfant"
              price="10$"
              details="Enfant (de 3 à 15 ans)"
              color="bg-green-500/50"
              delay={0.4}
            />
            <PricingTier
              title="Nourrisson"
              price="GRATUIT"
              details="Enfant (2 ans et moins)"
              color="bg-purple-500/50"
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinigolfPageContent;
