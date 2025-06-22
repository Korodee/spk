"use client";
import { motion } from "framer-motion";

const pricingData = [
  {
    tier: "1 ÈRE PARTIE",
    price: "11.50",
    color: "red",
    gradient: "from-red-500 to-orange-500",
    shadow: "shadow-red-500/40",
  },
  {
    tier: "2 IÈME PARTIE",
    price: "9.50",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/40",
  },
  {
    tier: "3 IÈME PARTIE",
    price: "7.50",
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/40",
  },
];

const PricingCard = ({ tier, price, color, gradient, shadow, index }: any) => {
  return (
    <motion.div
      className="relative p-1 rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: "easeOut" }}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`absolute -inset-1 bg-gradient-to-br ${gradient} opacity-20 blur-xl`}
      />
      <motion.div
        className={`relative text-white bg-black/60 backdrop-blur-md border border-${color}-500/50 p-8 rounded-xl h-full flex flex-col items-center text-center`}
        whileHover={{
          transform: "translateZ(50px)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-lg font-semibold tracking-widest uppercase text-gray-400">
          {tier}
        </p>
        <p className="text-7xl font-black my-4">
          {price}
          <span className={`text-5xl text-${color}-400`}>$</span>
        </p>
        <p className="text-gray-500 mb-8">+ Taxes</p>
        <motion.button
          className={`w-full py-4 mt-auto font-bold uppercase rounded-lg bg-gradient-to-r ${gradient} shadow-lg ${shadow} transition-all duration-300`}
          whileHover={{ scale: 1.05, y: -3, filter: "brightness(1.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Réserver
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#000428] to-black relative overflow-hidden py-24 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-black text-white text-center uppercase tracking-tighter mb-16">
          Nos Tarifs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((item, index) => (
            <PricingCard key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
