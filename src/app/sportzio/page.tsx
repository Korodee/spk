"use client";

import React from "react";
import PhoneParallax from "./phone/page";
import StadiumParallax from "./stadium/page";
import RestaurantParallax from "./restaurant/page";

export default function Sportzio() {
  return (
    <div className="relative w-full min-h-screen bg-black">
      <PhoneParallax />
      <div style={{ height: `20vh` }} />
      <StadiumParallax />
      <div style={{ height: `20vh` }} />
      <RestaurantParallax />
    </div>
  );
}
