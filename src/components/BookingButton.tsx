"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BOOKING_URL } from "@/lib/booking";

type BookingButtonProps = {
  children?: React.ReactNode;
  href?: string;
  newTab?: boolean;
  className?: string;
  whileHover?: any;
  whileTap?: any;
  "aria-label"?: string;
};

export function BookingButton({
  children = "Réserver",
  href = BOOKING_URL,
  newTab = true,
  className = "",
  whileHover,
  whileTap = { scale: 0.97 },
  "aria-label": ariaLabel = "Réserver",
}: BookingButtonProps) {
  const targetProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.a
      href={href}
      {...targetProps}
      aria-label={ariaLabel}
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.a>
  );
}
