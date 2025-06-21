"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const iconVariants: Variants = {
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

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
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div
        aria-hidden="true"
        className="absolute inset-0 top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[-1] bg-gradient-to-br from-purple-900/20 via-black to-orange-900/10"
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white font-[family-name:var(--font-montserrat)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
            Une Expérience
          </span>{" "}
          Totale
        </motion.h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10"
              variants={cardVariants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="relative w-16 h-16 mx-auto text-yellow-400"
              >
                <feature.icon className="w-full h-full" />
              </motion.div>
              <h3 className="mt-6 text-xl font-bold text-white uppercase">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
