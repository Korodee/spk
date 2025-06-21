"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { activities } from "@/lib/activities";

type Activity = (typeof activities)[0];

interface ActivityPageClientProps {
  activity: Activity;
}

const ActivityPageClient = ({ activity }: ActivityPageClientProps) => {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
      <motion.p
        className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {activity.description}
      </motion.p>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
          Détails de l&apos;activité
        </h2>
        <ul className="space-y-4">
          {activity.details.map((detail, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-4 text-lg bg-white/5 p-4 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <FiCheckCircle
                className="text-green-400 flex-shrink-0"
                size={24}
              />
              <span>{detail}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ActivityPageClient;
