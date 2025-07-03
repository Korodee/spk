"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { activities } from "@/lib/activities";
import AnimatedTitle from "./AnimatedTitle";

type Activity = (typeof activities)[0];

interface ActivityHeroProps {
  activity: Activity;
  customTitle?: React.ReactNode;
}

const ActivityHero = ({ activity, customTitle }: ActivityHeroProps) => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={activity.image}
        alt={activity.name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {customTitle || <AnimatedTitle text={activity.name} />}
          <motion.div className="mt-8">
            <a href="tel:418-693-3334">
              <motion.button
                className="px-10 py-4 font-semibold text-white uppercase tracking-wider bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                whileHover={{
                  boxShadow: "0px 0px 20px rgb(255,255,255,0.4)",
                }}
              >
                Réserver
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ActivityHero;
