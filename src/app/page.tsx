"use client";
import ExperienceSection from "@/components/ExperienceSection";
import InfoBar from "@/components/InfoBar";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import ScheduleSection from "@/components/ScheduleSection";
import ImportantInfoSection from "@/components/ImportantInfoSection";
import Footer from "@/components/Footer";
import ActivitiesSection from "@/components/ActivitiesSection";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/hero-img.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center pt-[52%] md:pt-0 md:h-full text-white font-sans">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-lg md:text-xl px-4 tracking-widest uppercase mb-4 text-gray-300"
              variants={itemVariants}
            >
              Passer une journée inoubliable
            </motion.p>
            <motion.h1
              className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter -skew-x-12"
              variants={itemVariants}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">
                Centre
              </span>{" "}
              Amusement
            </motion.h1>
            <motion.h2
              className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter -skew-x-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400"
              variants={itemVariants}
            >
              SPK
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-8">
              <a href="tel:418-693-3334">
                <motion.button
                  className="px-10 py-4 font-semibold text-white uppercase tracking-wider bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  whileHover={{
                    boxShadow: "0px 0px 20px rgb(255,255,255,0.4)",
                  }}
                >
                  Réserver
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute hidden md:block bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 w-full z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
        >
          <InfoBar />
        </motion.div>
      </div>
      <ActivitiesSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Schedule Section */}
      <ScheduleSection />

      {/* Important Info Section */}
      <ImportantInfoSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
