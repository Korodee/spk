"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { activities } from "@/lib/activities";
import GlitchTitle from "./GlitchTitle";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 footer-bg" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <GlitchTitle />
            </div>
            <p className="text-gray-400 text-center md:text-left text-sm leading-relaxed">
              Le complexe de divertissement ultime. Adrénaline et plaisir
              garantis pour tous les âges.
            </p>
          </div>

          {/* Column 2: Activités */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider text-purple-300 mb-6 text-center md:text-left">
              Activités
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              {activities.map((activity) => (
                <li key={activity.slug}>
                  <Link
                    href={`/activity/${activity.slug}`}
                    className="group text-gray-300 hover:text-white transition-colors duration-300 relative"
                  >
                    <span>{activity.name}</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider text-purple-300 mb-6 text-center md:text-left">
              Contact
            </h3>
            <ul className="space-y-3 text-gray-300 text-center md:text-left">
              <li>2175 Bd Saint-Paul</li>
              <li>Chicoutimi, QC</li>
              <li>info@spk.com</li>
              <li>418-693-3334</li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider text-purple-300 mb-6 text-center md:text-left">
              Suivez-nous
            </h3>
            <div className="flex justify-center md:justify-start gap-5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="#"
                aria-label="Tiktok"
                className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
              >
                <FaTiktok size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} SPK Entertainment. Tous droits
            réservés.
          </p>
          <p className="text-sm mt-2">
            Made by{" "}
            <a
              href="https://salutary.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Salutary Agency
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
