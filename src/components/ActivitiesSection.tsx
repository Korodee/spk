"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { activities } from "@/lib/activities";
import { motion } from "framer-motion";
import VipSection from "./VipSection";

const ActivityCard = ({ activity }: { activity: (typeof activities)[0] }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="text-3xl font-bold mb-3 group-hover:text-4xl duration-300">
          {activity.name}
        </h3>
        <p className="text-slate-200 text-sm leading-relaxed mb-4 line-clamp-2">
          {activity.description}
        </p>

        <div className="mb-6">
          <ul className="space-y-2">
            {activity.details.slice(0, 2).map((detail, detailIndex) => (
              <li
                key={detailIndex}
                className="flex items-center text-slate-200 text-sm"
              >
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-300"></div>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <Link href={`/activity/${activity.slug}`}>
          <button className="bg-purple-500 cursor-pointer hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-3xl transition-all duration-300 transform group-hover:scale-105 shadow-lg">
            Découvrir
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

const ActivitiesSection = () => {
  const regularActivities = activities.filter(
    (a) => a.slug !== "salle-arcade-vip"
  );

  return (
    <>
      <section id="activities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-2">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-1 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Nos
                </span>{" "}
                <span className="text-gray-900">Activités</span>
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-lg text-gray-600 leading-relaxed font-medium">
                Découvrez notre gamme complète d&apos;activités pour tous les
                âges et tous les goûts
              </p>
            </div>
            <div className="flex mt-4 items-center justify-center space-x-6">
              <div className="w-20  h-px bg-gradient-to-r from-transparent via-gray-300 to-blue-500"></div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-gray-300 to-purple-500"></div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {regularActivities.map((activity) => (
              <ActivityCard key={activity.name} activity={activity} />
            ))}
          </motion.div>
        </div>
      </section>

      <VipSection />
    </>
  );
};

export default ActivitiesSection;
