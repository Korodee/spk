"use client";

import React from "react";
import PhoneParallax from "./phone/page";
import StadiumParallax from "./stadium/page";
import RestaurantParallax from "./restaurant/page";

export default function Sportzio() {
  return (
    <div className="relative w-full min-h-screen bg-black">
      <PhoneParallax />
      <div className="md:h-[10vh]" />
      <StadiumParallax />
      <div className="md:h-[10vh]" />
      <RestaurantParallax />
    </div>
  );
}
