"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
    ),
    title: "PLONGEZ DANS L'ACTION",
    description:
      "Vivez des expériences immersives uniques grâce à nos arènes de jeu modernes et nos équipements de pointe. Préparez-vous à être transporté.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 18.75h-9a9.75 9.75 0 0 1 0-13.5h9a9.75 9.75 0 0 1 0 13.5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.91 8.915a2.25 2.25 0 0 1 .434 1.585l-.363 3.632a2.25 2.25 0 0 1-2.176 2.036H8.25a2.25 2.25 0 0 1-2.226-2.062l-.363-3.632a2.25 2.25 0 0 1 .434-1.585L8.44 7.24a2.25 2.25 0 0 1 3.12 0l1.35 1.675Z"
        />
      </svg>
    ),
    title: "DÉFIEZ VOS LIMITES",
    description:
      "Participez à nos ligues de Karting, affrontez vos amis et visez la première place. La compétition est à son comble chez SPK!",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
    title: "DÉTENDEZ-VOUS & PROFITEZ",
    description:
      "Après l'effort, le réconfort. Notre service de bar et collation vous attend pour célébrer une victoire ou simplement pour vous détendre.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="mx-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Notre Philosophie
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Une Expérience{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Totale
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Découvrez ce qui rend SPK unique et pourquoi nos visiteurs reviennent sans cesse pour vivre des moments inoubliables
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <div
                className={`relative bg-gradient-to-br ${feature.bgGradient} rounded-xl p-6 lg:p-8 border border-gray-200/50 hover:border-gray-300 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 group-hover:-translate-y-1 h-full flex flex-col`}
              >
                {/* Icon Container */}
                <motion.div
                  className={`w-12 h-12 mx-auto mb-6 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 flex-shrink-0`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight flex-shrink-0">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-md flex-1">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              </div>

              {/* Background glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 -z-10`}
              ></div>
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
          <motion.button
            className="cursor-pointer inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir Nos Activités
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
