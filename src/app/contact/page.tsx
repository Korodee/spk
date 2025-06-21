"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import { FiMail, FiMapPin, FiPhone, FiStar } from "react-icons/fi";
import Footer from "@/components/Footer";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

const title = "Contactez-nous";
const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <div className="absolute inset-0 -z-20 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl pt-12 md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500 mb-4 font-[family-name:var(--font-montserrat)]"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Une question, une suggestion ou besoin de réserver pour un grand
            groupe ? N&apos;hésitez pas à nous laisser un message.
          </motion.p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-6">Envoyer un message</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/10 border-white/20 border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/10 border-white/20 border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white/10 border-white/20 border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-orange-500 to-purple-600 font-bold py-4 rounded-lg uppercase tracking-wider text-white shadow-lg hover:shadow-purple-500/50 transition-shadow"
              >
                Envoyer
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white/5 p-8 rounded-2xl flex-1 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FiMapPin /> Notre Adresse
              </h3>
              <p className="text-gray-300">
                2175 Bd Saint-Paul, Chicoutimi, QC G7J 3Y9
              </p>
              <p className="text-gray-300 mt-2">
                Passez nous voir pour une dose d&apos;adrénaline !
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl flex-1 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Infos Contact</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-300">
                  <FiMail /> info@spk.com
                </p>
                <p className="flex items-center gap-3 text-gray-300">
                  <FiPhone /> 418-693-3334
                </p>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl flex-1 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FiStar /> Nos Atouts
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>✓ Piste intérieure sur plusieurs niveaux</p>
                <p>✓ Karts électriques haute performance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative w-full h-[500px] mt-12">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FiMapPin className="text-white text-3xl" />
          </motion.div>
          <div className="w-4 h-4 bg-purple-400 rounded-full absolute" />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.3256077874313!2d-71.0560248843258!3d48.420888979247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cbfd12a32c77a49%3A0x8c1b69a19d76506a!2sSPK%20Karting!5e0!3m2!1sen!2sca!4v1624300000000!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale invert-[90%] contrast-[1.2]"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
