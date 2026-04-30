ChatGPT

comment réduire la taille du texte dans cette ligne la  <p className="text-7xl font-black my-2">

Dans ton cas, tout se joue dans la classe text-7xl (Tailwind). C’est elle qui définit la grosseur du texte.
✔️ Solution simple

Tu réduis juste la valeur :

<p className="text-5xl font-black my-2">

ou encore plus petit :

<p className="text-3xl font-black my-2">

📏 Repère des tailles (Tailwind)

    text-7xl → énorme

    text-6xl

    text-5xl

    text-4xl

    text-3xl

    text-2xl

    text-xl

    text-lg → taille normale un peu grosse

💡 Bonus (responsive)

Si tu veux que ça soit gros sur desktop mais plus petit sur mobile :

<p className="text-3xl md:text-5xl lg:text-7xl font-black my-2">

👉 Petit écran → text-3xl
👉 Moyen → text-5xl
👉 Grand → text-7xl

Si tu veux, envoie-moi ton bloc complet et je peux te proposer une taille clean qui fit avec ton design SPK 👍

si je veux que la banderole d'avertissement soit plus grosse pour afficher le prix des combot je fait comment ? j'aimerais mettre un tableau dedan  : return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 via-orange-500 to-red-600 shadow-lg"
        >
          <div className="relative w-full">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,rgba(255,255,255,.1)_100%)] bg-[length:20px_20px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
              <div className="flex flex-row items-center justify-center gap-1 sm:gap-3">
                {/* Text Content */}
                <div className="text-center sm:text-left sm:flex-1 flex items-center">
                  <p className="text-white flex flex-row items-center justify-center sm:justify-start font-bold text-sm sm:text-base md:text-lg tracking-wide">
                   {/* <span className="inline-block">
                      Nouveautés{" "}
                      <span className="hidden sm:inline">Découvrez nos nouvelles activités excitantes</span>
                    </span>*/}
                    <span className="inline-block">
                      Journée Québécoise du Steamé 2026 {" "}
                      <span className="hidden sm:inline"> 4 forfaits découvertes et des hot-dogs vapeurs pas chers </span>
                    </span>
                  </p>
                </div>

Oui clairement tu peux faire ça — mais faut comprendre un truc : ta “bannière” est actuellement pensée comme une ligne compacte (flex items-center). Si tu veux mettre un tableau + agrandir visuellement, faut la transformer en bloc vertical.
🔧 1. Agrandir la bannière

Présentement :

py-2.5 sm:py-3

👉 Augmente le padding :

py-6 sm:py-8

🔧 2. Passer en layout vertical (important)

Change ça :

<div className="flex flex-row items-center justify-center gap-1 sm:gap-3">

👉 pour :

<div className="flex flex-col items-center justify-center gap-4">

🔧 3. Agrandir le texte titre

<p className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-wide text-center">

🔥 4. Ajouter un “tableau” de combos

Le plus clean en Tailwind = un mini tableau stylé :

<div className="w-full max-w-3xl mt-2">
  <table className="w-full text-white text-sm sm:text-base text-center border border-white/20 rounded-lg overflow-hidden">
    <thead className="bg-white/10">
      <tr>
        <th className="py-2">Combo</th>
        <th className="py-2">Inclus</th>
        <th className="py-2">Prix</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t border-white/10">
        <td className="py-2">#1</td>
        <td>Karting + Arcade</td>
        <td>XX$</td>
      </tr>
      <tr className="border-t border-white/10">
        <td className="py-2">#2</td>
        <td>Laser Tag + Active Zone</td>
        <td>XX$</td>
      </tr>
    </tbody>
  </table>
</div>

💡 Résultat

Tu passes de ça :
👉 petite bande info

À ça :
👉 vraie bannière promo style “event” avec combos visibles
⚠️ Important UX

Une bannière aussi grosse :

    ça prend beaucoup de place en haut

    ça peut être chiant sur mobile

👉 option smart : limiter hauteur + scroll interne :

max-h-[250px] overflow-y-auto

💬 Mon conseil (SPK style)

Honnêtement, pour ton cas :
👉 fais 2 lignes + 3 cartes de combos au lieu d’un tableau
👉 c’est plus visuel, plus “fun parc d’amusement”

Si tu veux, envoie-moi tes combos exacts et je te fais une version ultra clean + stylée SPK (genre carte Netflix / arcade) 👌

voici la section du code ou je veux mettre mes informations pour la journée québécoise du steamés : "use client";
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

Voici les information que je veux :
Il s'agit d'un party hot-dogs vapeurs. Nous allons vous offrir des forfaits découvertes à moindre prix.

Voici les prix de la nourriture:
-Trio 2 hot-dogs vapeur + chips+ liqueur = 7

Je vois ton fichier Home; le meilleur endroit est probablement juste sous le hero, avant ActivitiesSection, pour que l’info soit visible sans casser ta bannière actuelle.

Oui. Ajoute une section juste après

Voici les information que je veux : Il s'agit d'un party hot-dogs vapeurs. Nous allons vous offrir des forfaits découvertes à moindre prix. 

Voici les prix de la nourriture: 
-Trio 2 hot-dogs vapeur + chips+ liqueur = 7.50$ Taxes incluses
- Trio 2 hot-dogs vapeur + chips+ liqueur = 11.00$ Taxes incluses
-Hot-dog = 2.00$ taxes incluses 

Voici les prix des activitées en Forfaits découvertes:
- Active Zone (30 minutes) + Carte d'arcade (40 crédits) = 30.00 $ Taxes incluses
- Carte d'arcade (40 crédits) + karting (10 minutes) = 35.00 $ Taxes incluses
- Karting (10 minutes) + Active Zone (30 minutes) = 40.00$ Taxes incluses
- Karting (10 minutes) + Active Zone (30 minutes) + Carte d'arcade (40 crédits) = 50.00$ Taxes incluses


Parfait. Dans ton Home, ajoute cette section juste avant :

<ActivitiesSection />

Colle ça :

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
        Pour l’occasion, on vous offre des forfaits découvertes à moindre prix
        et des hot-dogs vapeurs pas chers.
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
            <span>Trio 2 hot-dogs vapeur + chips + liqueur</span>
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
            <span>Karting 10 min + Active Zone 30 min + carte d’arcade 40 crédits</span>
            <span className="font-black whitespace-nowrap">50.00 $</span>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-4">Taxes incluses</p>
      </div>
    </div>
  </div>
</section>

Donc ça devient :

      </div>

      <section className="bg-neutral-950 text-white py-14 px-4">
        ...
      </section>

      <ActivitiesSection />

Petite note : tu as deux trios hot-dogs identiques avec deux prix différents, 7.50 $ et 11.00 $. Il faudrait probablement renommer un des deux pour éviter la confusion.

le 2e c'Est pas une liqueur mais c'Est une bière. peux tu me donne le code complet

Parfait — là ça devient logique 👍
Je t’ai corrigé le menu (bière au lieu de liqueur) et je te donne le code complet prêt à coller avec la section intégrée proprement dans ton Home.
✅ Code complet avec section Steamé

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
      {/* HERO */}
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

      {/* 🔥 SECTION STEAMÉ */}
      <section className="bg-neutral-950 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-orange-400 uppercase tracking-widest font-bold">
              Journée québécoise du steamé 2026
            </p>
            <h2 className="text-3xl md:text-5xl font-black mt-3">
              Party hot-dogs vapeurs 🌭
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mt-4 text-lg">
              Profitez de nos forfaits découvertes à prix réduit et de hot-dogs
              vapeurs pas chers toute la journée.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* NOURRITURE */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-black mb-4 text-orange-400">
                Nourriture
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Trio (2 steamés + chips + liqueur)</span>
                  <span className="font-black">7.50 $</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Trio (2 steamés + chips + bière)</span>
                  <span className="font-black">11.00 $</span>
                </div>

                <div className="flex justify-between">
                  <span>Hot-dog</span>
                  <span className="font-black">2.00 $</span>
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-4">Taxes incluses</p>
            </div>

            {/* FORFAITS */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-black mb-4 text-purple-400">
                Forfaits découvertes
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Active Zone + Arcade</span>
                  <span className="font-black">30.00 $</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Arcade + Karting</span>
                  <span className="font-black">35.00 $</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Karting + Active Zone</span>
                  <span className="font-black">40.00 $</span>
                </div>

                <div className="flex justify-between">
                  <span>Combo complet (3 activités)</span>
                  <span className="font-black">50.00 $</span>
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

💡 Ce que ça t’apporte

    Section visible direct après le hero

    Look pro + événementiel

    Lisible mobile

    Pas trop lourd visuellement

🔥 Si tu veux aller plus loin

Je peux te faire une version encore plus punch :

    cartes avec icônes 🎮🏎️🌭

    badge “MEILLEUR DEAL” sur le combo à 50$

    animation hover (ça fit avec ton framer-motion)

Tu veux ça plus style arcade / SPK vibe ?

en fait toute la page c'Est ce code là :

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

Insere le nouveau code au travers snas modifé l'ancien

Oui — remplace ton fichier complet par celui-ci. J’ai seulement ajouté la section entre le </div> du hero et <ActivitiesSection />.

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


