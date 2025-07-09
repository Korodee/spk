"use client";

import { motion } from "framer-motion";
import VrCarousel from "./VrCarousel";

const vrInfo = (
  <>
    <p>
      Nous vous offrons de la réalité virtuelle 9D sans réservations !
    </p>
    <p>
      Embarquez et vivez des sensations extrêmes à bord de nos simulateurs de
      vol, de drift, de montagne russe et d&apos;horreur.
    </p>
  </>
);

const VrPageContent = () => {
  return (
    <>
      <div className="bg-black py-12 px-4">
        <motion.div
          className="max-w-5xl mx-auto border border-gray-700 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-white text-center text-lg leading-relaxed space-y-4">
            {vrInfo}
          </div>
        </motion.div>
      </div>
      <VrCarousel />
    </>
  );
};

export default VrPageContent;
