"use client";
import { motion, Variants } from "framer-motion";
import ActivitiesSection from "@/components/ActivitiesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ScheduleSection from "@/components/ScheduleSection";
import ImportantInfoSection from "@/components/ImportantInfoSection";
import UpcomingActivitiesSection from "@/components/UpcomingActivitiesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import InfoBar from "@/components/InfoBar";
import { BookingButton } from "@/components/BookingButton";

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

            {/* AMUSEMENT */}
            <motion.h1
  className="spk-hero-title text-5xl md:text-8xl font-black"
  variants={itemVariants}
>
  Amusement
</motion.h1>

<motion.h2
  className="spk-hero-title text-5xl md:text-8xl font-black"
  variants={itemVariants}
>
  SPK
</motion.h2>


            <motion.div variants={itemVariants} className="mt-8">
              <BookingButton
                className="px-10 py-4 font-semibold text-white uppercase tracking-wider bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                whileHover={{ boxShadow: "0px 0px 20px rgb(255,255,255,0.4)" }}
              >
                Réserver
              </BookingButton>
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

      <section className="bg-neutral-950 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-orange-400 uppercase tracking-widest font-bold">
              Journée québécoise du steamé 2026
            </p>

            <h2 className="text-3xl md:text-5xl font-black mt-3">
              Party hot-dogs vapeurs
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto mt-4 text-lg">
              Pour l’occasion, profitez de forfaits découvertes à moindre prix
              et de hot-dogs vapeurs pas chers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-black mb-4 text-orange-400">
                Nourriture
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <span>Trio 2 hot-dogs vapeur + chips + liqueur</span>
                  <span className="font-black whitespace-nowrap">7.50 $</span>
                </div>

                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <span>Trio 2 hot-dogs vapeur + chips + bière</span>
                  <span className="font-black whitespace-nowrap">11.00 $</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Hot-dog</span>
                  <span className="font-black whitespace-nowrap">2.00 $</span>
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-4">Taxes incluses</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-black mb-4 text-purple-400">
                Forfaits découvertes
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <span>Active Zone 30 min + carte d’arcade 40 crédits</span>
                  <span className="font-black whitespace-nowrap">30.00 $</span>
                </div>

                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <span>Carte d’arcade 40 crédits + karting 10 min</span>
                  <span className="font-black whitespace-nowrap">35.00 $</span>
                </div>

                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <span>Karting 10 min + Active Zone 30 min</span>
                  <span className="font-black whitespace-nowrap">40.00 $</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>
                    Karting 10 min + Active Zone 30 min + carte d’arcade 40 crédits
                  </span>
                  <span className="font-black whitespace-nowrap">50.00 $</span>
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-4">Taxes incluses</p>
            </div>
          </div>
        </div>
      </section>

      <ActivitiesSection />
      <UpcomingActivitiesSection />
      <ExperienceSection />
      <ScheduleSection />
      <ImportantInfoSection />
      <FAQSection />
      <Footer />
    </>
  );
}
