"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import { BookingButton } from "@/components/BookingButton";


const faqData = [
  {
    question: "Quels sont les tarifs pour les activités ?",
    answer:
      "Nos tarifs varient selon l'activité choisie. Pour le karting, nous offrons des prix réduits à 26$ pour les 15 ans et moins, 36$ pour les 16 ans et plus, et une option 'Les Deux' à 26$ pour 2 courses. La carte VIP karting est disponible à 170$ avec 5 courses de 15 min, puis 26$ + taxes pour le reste de la saison. Pour les autres activités, veuillez consulter nos pages d'activités ou nous contacter directement.",
  },
  {
    question: "Dois-je réserver à l'avance ?",
    answer:
      "Les réservations sont fortement recommandées, surtout pour les groupes et les fins de semaine. Vous pouvez réserver par téléphone au 418-693-3334. Pour les réservations privées en dehors des heures d'ouverture, un nombre minimum de participants est requis.",
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer:
      "Nous sommes ouverts 7 jours sur 7. Du dimanche au jeudi, de 9h à 23h, et le vendredi et samedi de 9h à 24h. Nous restons ouverts les jours fériés (sauf le 25 décembre et le 1er janvier). Les horaires peuvent être ajustés selon l'achalandage, et nous offrons la possibilité de réservations privées en dehors des heures régulières.",
  },
  {
    question: "Y a-t-il des restrictions d'âge pour les activités ?",
    answer:
      "Oui, certaines activités ont des restrictions d'âge. Pour le karting, nous avons des tarifs réduits pour les 15 ans et moins. Pour le paintball, un dépôt de 55$ est requis pour les réservations. Pour plus de détails sur les restrictions spécifiques à chaque activité, n'hésitez pas à nous contacter.",
  },
  {
    question: "Que se passe-t-il en cas de mauvais temps ?",
    answer:
      "Bonne nouvelle ! Nous sommes ouverts en tout temps, même lorsqu'il pleut. La plupart de nos activités peuvent se dérouler à l'intérieur ou sont adaptées pour fonctionner par tous les temps.",
  },
  {
    question: "Proposez-vous des forfaits pour groupes ou événements ?",
    answer:
      "Absolument ! Nous offrons des forfaits pour groupes, événements d'entreprise, fêtes d'anniversaire et autres célébrations. Nous avons également des salles VIP privatisables. Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.",
  },
  {
    question: "Quelle est votre politique d'annulation ?",
    answer:
      "Pour le paintball, un dépôt de 55$ est requis pour réserver. La politique d'annulation est de 48h avant, sinon non remboursable. Pour les autres activités, veuillez nous contacter pour connaître les détails de notre politique d'annulation.",
  },
  {
    question: "Acceptez-vous les cartes de crédit ?",
    answer:
      "Oui, nous acceptons les cartes de crédit ainsi que les paiements en espèces. Pour plus d'informations sur les méthodes de paiement acceptées, contactez-nous.",
  },
  {
    question: "Y a-t-il un service de restauration sur place ?",
    answer:
      "Oui, nous offrons un service de bar et collation pour vous permettre de vous détendre et de vous restaurer après vos activités. Profitez de nos espaces lounge pour célébrer vos victoires !",
  },
  {
    question: "Comment puis-je rejoindre la ligue de karting ?",
    answer:
      "Pour rejoindre notre ligue de karting, vous devez d'abord vous procurer une carte VIP Karting (170$). La ligue se déroule sur 5 semaines, une fois par semaine, avec qualification de 5 minutes, course de 12 minutes, et un système de pointage cumulatif. Contactez-nous pour plus d'informations !",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center shadow-lg">
                <FiHelpCircle className="text-purple-600 text-3xl" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">?</span>
              </div>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Questions
            </span>{" "}
            <span className="text-gray-900">Fréquentes</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Trouvez rapidement les réponses à vos questions et planifiez votre
            visite en toute confiance
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.01 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-xl"
                >
                  <h3
                    className={`text-lg font-bold pr-4 transition-colors duration-300 ${
                      openIndex === index
                        ? "text-purple-600"
                        : "text-gray-900 group-hover:text-purple-600"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 ${
                      openIndex === index
                        ? "text-purple-600"
                        : "text-gray-400 group-hover:text-purple-500"
                    } transition-colors duration-300`}
                  >
                    <FiChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Vous avez d&apos;autres questions ?
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe est là pour vous aider. N&apos;hésitez pas à nous
              contacter !
            </p>
            <BookingButton
  aria-label="Réserver - FAQ"
  className="inline-flex items-center justify-center w-full mt-4 px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-center bg-white hover:bg-gray-200 text-black"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  Réserver
</BookingButton>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
