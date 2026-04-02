"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiInfo, FiFileText, FiTag, FiCheck, FiX } from "react-icons/fi";

const tabs = [
  { id: "info", icon: FiInfo, label: "Infos" },
  { id: "policy", icon: FiFileText, label: "Politique" },
  { id: "pricing", icon: FiTag, label: "Tarifs" },
];

const VipBookingSection = () => {
  const [activeTab, setActiveTab] = useState("pricing");

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return (
          <motion.div
            key="info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6 text-center"
          >
            <div className="space-y-6 text-white">
              {/* Accès à la salle */}
              <div>
                <p className="text-xl md:text-2xl font-semibold">
                  Accès à la salle
                </p>
                <p className="text-base md:text-lg text-gray-300 mt-2">
                  Votre salle n’est pas accessible avant l’heure exacte de votre réservation.
                  Si vous prévoyez du temps pour la décoration, veuillez réserver une heure supplémentaire.
                </p>
              </div>
            
              {/* Consommations sur place */}
              <div>
                <p className="text-xl md:text-2xl font-semibold">
                  Consommations sur place
                </p>
                <p className="text-base md:text-lg text-gray-300 mt-2">
                  Il est obligatoire de se procurer sur place les chips, chocolats, bonbons, popcorn, jus, eau et boissons gazeuses (tous les produits que nous offrons).
                </p>
              </div>
            
              {/* Interdictions */}
              <div>
                <p className="text-xl md:text-2xl font-semibold text-red-400">
                  Interdictions importantes
                </p>
                <ul className="list-disc list-inside text-base md:text-lg text-gray-300 mt-2 space-y-1">
                  <li>Les ballons contenant des confettis, les gommes et les bouteilles d’eau réutilisables ne sont pas permis.</li>
                  <li>
                    Il est strictement interdit d’apporter de la bière, des prêts-à-boire alcoolisés ou de l’alcool fort, puisque nous détenons un permis de vente d’alcool.
                  </li>
                </ul>
                <p className="text-sm text-red-400 mt-3 font-semibold">
                  Le non-respect de ces règles peut entraîner une expulsion immédiate.
                </p>
              </div>
            
              {/* Fin de réservation */}
              <div>
                <p className="text-xl md:text-2xl font-semibold">
                  Fin de réservation
                </p>
                <p className="text-base md:text-lg text-gray-300 mt-2">
                  Cinq minutes avant la fin de votre réservation, un employé passera vérifier l’état de la salle.
                </p>
                <p className="text-base md:text-lg text-gray-300 mt-2">
                  La salle doit être remise propre, en ordre et sans décorations.
                  Des frais supplémentaires pourraient être appliqués selon l’état des lieux.
                </p>
                <p className="text-base md:text-lg text-gray-300 mt-2 font-medium">
                  Vous devez avoir quitté les lieux au plus tard une minute avant l’heure de fin (xxh59).
                </p>
              </div>
            </div>
          </motion.div>
        );
      case "policy":
        return (
          <motion.div
            key="policy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Politique d&apos;annulation
            </h3>
            
            <ul className="space-y-3 text-base md:text-lg">
              <li className="flex items-center justify-center gap-3 text-green-400">
                <FiCheck /> 14 jours et plus : remboursement en carte cadeau (moins 5% de frais d’administration)
              </li>
            
              <li className="flex items-center justify-center gap-3 text-yellow-400">
                <FiCheck /> 8 à 13 jours : 50% du montant en carte cadeau
              </li>
            
              <li className="flex items-center justify-center gap-3 text-red-500">
                <FiX /> 7 jours et moins : aucun remboursement
              </li>
            </ul>
          </motion.div>
        );
      case "pricing":
        return (
          <motion.div
            key="pricing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3 className="text-center text-4xl md:text-5xl font-black text-white mb-10">
              Réserver une Salle VIP
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* Salle A */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 opacity-0 group-hover:opacity-100 transition duration-300" />
            
                <div className="relative">
                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-bold mb-3">
                    Salle A
                  </p>
            
                  <p className="text-4xl md:text-5xl font-black text-white">
                    65$
                  </p>
                  <p className="text-sm text-gray-400">+ taxes / h</p>
                  <p className="text-base md:text-lg text-gray-300 mt-2">
                    avec activités
                  </p>
            
                  <div className="my-4 h-px bg-white/10" />
            
                  <p className="text-3xl md:text-4xl font-bold text-yellow-400">
                    75$
                  </p>
                  <p className="text-sm text-gray-400">+ taxes / h</p>
                  <p className="text-base md:text-lg text-gray-300 mt-2">
                    sans activités
                  </p>
                </div>
              </div>
            
              {/* Salle B */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 opacity-0 group-hover:opacity-100 transition duration-300" />
            
                <div className="relative">
                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-bold mb-3">
                    Salle B
                  </p>
            
                  <p className="text-4xl md:text-5xl font-black text-white">
                    60$
                  </p>
                  <p className="text-sm text-gray-400">+ taxes / h</p>
                  <p className="text-base md:text-lg text-gray-300 mt-2">
                    avec activités
                  </p>
            
                  <div className="my-4 h-px bg-white/10" />
            
                  <p className="text-3xl md:text-4xl font-bold text-yellow-400">
                    70$
                  </p>
                  <p className="text-sm text-gray-400">+ taxes / h</p>
                  <p className="text-base md:text-lg text-gray-300 mt-2">
                    sans activités
                  </p>
                </div>
              </div>
            
              {/* Salle C */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 opacity-0 group-hover:opacity-100 transition duration-300" />
            
                <div className="relative">
                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-bold mb-3">
                    Salle C
                  </p>
            
                  <p className="text-4xl md:text-5xl font-black text-white">
                    50$
                  </p>
                  <p className="text-sm text-gray-400">+ taxes / h</p>
                  <p className="text-base md:text-lg text-gray-300 mt-2">
                    avec activités
                  </p>
            
                  <div className="my-4 h-px bg-white/10" />
            
                  <p className="text-3xl md:text-4xl font-bold text-yellow-400">
                    60$
                  </p>
                  <p className="text-sm text-gray-400">+ taxes / h</p>
                  <p className="text-base md:text-lg text-gray-300 mt-2">
                    sans activités
                  </p>
                </div>
              </div>
            
              {/* Combo A + B */}
              <div className="group relative overflow-hidden rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-white/5 to-white/5 p-6 md:p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 opacity-100" />
            
                <div className="relative">
                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-bold mb-3">
                    Combo Salle A + B
                  </p>
            
                  <p className="text-4xl md:text-5xl font-black text-yellow-400">
                    500$
                  </p>
            
                  <p className="text-base md:text-lg text-gray-200 mt-3">
                    De 17h00 à 1h00
                  </p>
            
                  <p className="text-sm md:text-base text-gray-300 mt-3 leading-relaxed">
                    Possibilité de service de bar inclus pour les groupes de plus de 40 personnes.
                  </p>
                </div>
              </div>
            </div>
            
            <a
              href="https://book.timify.com/?accountId=604d33264585c611886149c1&hideCloseButton=true"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto mt-10"
            >
              <motion.button
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-300 px-8 py-4 md:py-5 text-lg md:text-xl font-black uppercase tracking-wide text-black shadow-lg shadow-yellow-400/30 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Réserver
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.button>
            </a>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto bg-gray-900/50 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="p-4 bg-black/30 flex justify-center border-b border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-white/60"
              } relative rounded-full px-3 py-2 md:px-4 md:py-2.5 text-base md:text-lg font-medium text-white transition-colors`}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="vip-booking-bubble"
                  className="absolute inset-0 z-10 bg-white/10 border border-yellow-400/50 rounded-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <tab.icon />
                <span className="hidden sm:inline">{tab.label}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="p-6 md:p-10 min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default VipBookingSection;
