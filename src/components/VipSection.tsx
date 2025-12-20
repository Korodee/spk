"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { activities } from "@/lib/activities";
import { FaTrophy } from "react-icons/fa";

const VipSection = () => {
  const vipActivity = activities.find((a) => a.slug === "salle-arcade-vip");

  if (!vipActivity) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Premium Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-bold uppercase tracking-widest rounded-full border border-purple-200 shadow-lg">
              <span className="mr-2">⭐</span>
              VIP Exclusive Experience
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-black text-gray-900 mb-2 leading-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800">
              SALLE
            </span>

            <span className="text-gray-900"> VIP</span>
          </motion.h2>

          <motion.p
            className="text-sm md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Une expérience exclusive et privée dans notre salle d&apos;arcade rétro et moderne.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-5 items-center">
          {/* Left: Premium Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center min-h-[220px]"
          >
            <div className="relative flex items-center justify-center w-120 h-90 mx-auto bg-gradient-to-br from-purple-500 via-pink-400 to-blue-500 rounded-2xl shadow-2xl animate-pulse">
              <FaTrophy className="text-white text-9xl drop-shadow-lg" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-80"></div>
          </motion.div>

          {/* Right: Premium Content */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Title & Description */}
            <div className="space-y-6">
              {/* <motion.h3
                className="text-4xl md:text-5xl font-black text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {vipActivity.name}
              </motion.h3> */}
              <motion.p
                className="text-lg text-gray-600 font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {vipActivity.description}
              </motion.p>
            </div>

            {/* Premium Features */}
            <div className="space-y-6">
              <motion.h4
                className="text-2xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Exclusivités VIP
              </motion.h4>

              <div className="space-y-4">
                <motion.div className="flex items-center text-gray-700 group">
                  <div className="mr-4 p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg font-medium">Jeux rétro et modernes</span>
                </motion.div>
                <motion.div className="flex items-center text-gray-700 group">
                  <div className="mr-4 p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg font-medium">Espace privatisable</span>
                </motion.div>
                <motion.div className="flex items-center text-gray-700 group">
                  <div className="mr-4 p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg font-medium">Ambiance unique</span>
                </motion.div>
              </div>
            </div>

            {/* Premium CTA */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/activity/salle-arcade-vip">
                <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 font-bold text-white shadow-2xl transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-3xl">
                  <span className="relative cursor-pointer z-10 flex items-center">
                    Réserver la Salle VIP
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>

              <p className="mt-4 text-sm text-gray-500">
                Réservation exclusive • Accès prioritaire
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VipSection;
