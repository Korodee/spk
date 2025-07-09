"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiPlay, FiStar, FiArrowRight, FiX } from "react-icons/fi";

const rooms = [
  {
    id: "salle-a",
    name: "Salle A",
    subtitle: "Arcade & Gaming",
    description:
      "Un véritable havre d'amusement avec bornes d'arcade classiques et jeux modernes",
    image: "/amusement.jpg",
    features: [
      "Table de Mississippi",
      "Baby-foot",
      "Basket",
      "Air hockey",
    ],
    price: "70$/h ou 60$/h avec 50$+ d'activités",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "salle-b",
    name: "Salle B",
    subtitle: "Bar & Lounge",
    description:
      "Salle ludique avec bar spacieux et convivial pour vos événements",
    image: "/paradis.jpg",
    features: [
      "Table de Mississippi",
      "Baby-foot",
      "Basket",
      "Air hockey",
    ],
    price: "70$/h ou 60$/h avec 50$+ d'activités",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "salle-c",
    name: "Salle C",
    subtitle: "Petite Salle Privée",
    description: "Salle intime et polyvalente pour petits groupes, réunions ou événements privés.",
    image: "/paradis-3.jpg",
    features: [
      "Table de Mississippi",
      "Baby-foot",
      "Basket",
      "Table interactive Infinity",
    ],
    price: "70$/h ou 60$/h avec 50$+ d'activités",
    color: "from-orange-500 to-red-500",
  },
];

const SalleVipPageContent = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRoomDetails = (roomId: string) => {
    setSelectedRoom(roomId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedRoom(null), 300);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30 blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Glitch Title Effect */}
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 mb-4">
                Salles VIP
              </h1>
              <motion.div
                className="absolute inset-0 text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
                animate={{
                  x: [0, -2, 2, 0],
                  opacity: [1, 0.8, 0.9, 1],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                Salles VIP
              </motion.div>
            </div>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Choisissez votre expérience. Trois salles uniques pour des moments
              inoubliables.
            </motion.p>

            {/* Start Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="tel:418-693-3334">
                <motion.button
                  className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg uppercase tracking-wider shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative text-sm z-10 flex items-center gap-2">
                    <FiPlay className="text-xl" />
                    Sélectionner une salle
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">SCROLL</p>
            <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center mx-auto">
              <motion.div
                className="w-1 h-3 bg-purple-500 rounded-full mt-2"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Room Selection Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Choisissez
              </span>{" "}
              votre salle
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Chaque salle offre une expérience unique. Sélectionnez celle qui
              correspond à votre événement.
            </p>
          </motion.div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div
                  className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
                  }}
                  onClick={() => openRoomDetails(room.id)}
                >
                  {/* Room Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Room Badge */}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${room.color} text-white font-bold text-sm`}
                      >
                        {room.price}
                      </div>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                        <FiPlay className="text-white text-2xl ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Room Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">
                      {room.name}
                    </h3>
                    <p className="text-purple-400 font-semibold mb-3">
                      {room.subtitle}
                    </p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {room.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Voir détails
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Room Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedRoom && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <FiX className="text-xl" />
              </button>

              {/* Modal Content */}
              <div className="p-6">
                {(() => {
                  const room = rooms.find((r) => r.id === selectedRoom);
                  if (!room) return null;

                  return (
                    <div>
                      {/* Header */}
                      <div className="text-center mb-8">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
                          {room.name}
                        </h2>
                        <p className="text-xl text-purple-400 font-semibold mb-4">
                          {room.subtitle}
                        </p>
                        <div
                          className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${room.color} text-white font-bold text-lg`}
                        >
                          {room.price}
                        </div>
                      </div>

                      {/* Image and Description */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                          <Image
                            src={room.image}
                            alt={room.name}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-4">
                            Description
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {room.description}
                          </p>

                          <h4 className="text-xl font-bold mb-4">
                            Caractéristiques
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {room.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-3 text-gray-300"
                              >
                                <FiStar className="text-purple-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Booking CTA */}
                      <div className="text-center">
                        <a href="tel:418-693-3334">
                          <motion.button
                            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg uppercase tracking-wider shadow-2xl"
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Réserver cette salle
                          </motion.button>
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SalleVipPageContent;
