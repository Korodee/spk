"use client";

import { motion, Variants } from "framer-motion";
import React, { useState, useRef } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend, FiZap } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Footer from "@/components/Footer";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />

        {/* Main Content */}
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="inline-block mb-8" variants={itemVariants}>
            <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3 mb-6">
              <span className="text-orange-400 font-semibold">
                Prêt à vivre l&apos;aventure ?
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl font-black uppercase tracking-tighter mb-6 font-[family-name:var(--font-montserrat)]"
            variants={itemVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-orange-400">
              Contactez
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-orange-400 to-purple-500">
              Nous
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Une question, une suggestion ou besoin de réserver pour un grand
            groupe ?
            <br />
            <span className="text-orange-400 font-semibold">
              N&apos;hésitez pas à nous laisser un message.
            </span>
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiPhone className="text-orange-400" />
              <span>418-693-3334</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiMail className="text-purple-400" />
              <span>spk@videotron.qc.ca</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Contact Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-4 py-8 md:p-8 shadow-2xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full blur-xl opacity-50"></div>

                <motion.h2
                  className="text-4xl font-bold mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Envoyez-nous un message
                </motion.h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Entrez votre nom"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Votre email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="votre@email.com"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Votre message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                      placeholder="Décrivez votre demande..."
                      required
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-purple-600 font-bold py-4 rounded-xl uppercase tracking-wider text-white shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              {/* Address Card */}
              <motion.div
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-4 py-8 md:p-8 shadow-2xl"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="md:flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br mb-2 md:mb-0 from-orange-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Notre Adresse</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      2175 Bd Saint-Paul, Chicoutimi, QC G7J 3Y9
                    </p>
                    <p className="text-orange-400 font-semibold mt-2">
                      Passez nous voir pour une dose d&apos;adrénaline !
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info Card */}
              <motion.div
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-4 py-8 md:p-8 shadow-2xl"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="md:flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br mb-2 md:mb-0 from-purple-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Infos Contact</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-300">
                        <FiMail className="text-purple-400" />
                        <span className="text-lg">spk@videotron.qc.ca</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <FiPhone className="text-orange-400" />
                        <span className="text-lg">418-693-3334</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Links Card (replaces Nos Atouts) */}
              <motion.div
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-4 py-8 md:p-8 shadow-2xl"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="md:flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br mb-2 md:mb-0 from-orange-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiZap className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Suivez-nous</h3>
                    <div>
                      <div className="mb-4 flex items-center gap-2">
                        <a
                          href="https://web.facebook.com/saguenaypaintballkarting"
                          aria-label="Facebook"
                          className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300 flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook size={32} />
                          <span className="text-lg font-medium">Facebook</span>
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href="https://www.instagram.com/amusement_spk/"
                          aria-label="Instagram"
                          className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300 flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram size={32} />
                          <span className="text-lg font-medium">Instagram</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="relative py-20">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                Trouvez-nous
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Situé au cœur de Chicoutimi, notre centre est facilement
              accessible
            </p>
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            {/* Animated Pin */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              animate={{
                scale: [1, 1.2, 1],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <FiMapPin className="text-white text-2xl" />
              </div>
              <div className="absolute inset-0 bg-orange-500/30 rounded-full animate-ping"></div>
            </motion.div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.3256077874313!2d-71.0560248843258!3d48.420888979247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cbfd12a32c77a49%3A0x8c1b69a19d76506a!2sSPK%20Karting!5e0!3m2!1sen!2sca!4v1624300000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert-[90%] contrast-[1.2]"
            />
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
