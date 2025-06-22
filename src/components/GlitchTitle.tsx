"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const GlitchTitle = () => {
  const [logoText, setLogoText] = useState("SPK");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrambleOnHover = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setLogoText(
        "SPK"
          .split("")
          .map((_, index) => {
            if (index < iteration) return "SPK"[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= 3) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setLogoText("SPK");
      }

      iteration += 1 / 3;
    }, 40);
  };

  const resetLogo = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setLogoText("SPK");
  };

  return (
    <Link href="/">
      <div
        className="flex items-baseline text-4xl font-black uppercase"
        onMouseEnter={scrambleOnHover}
        onMouseLeave={resetLogo}
      >
        <span className="text-orange-400">{logoText[0]}</span>
        <span className="text-purple-500">{logoText[1]}</span>
        <span className="text-yellow-400">{logoText[2]}</span>
      </div>
    </Link>
  );
};

export default GlitchTitle;
