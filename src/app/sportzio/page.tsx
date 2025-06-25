"use client";

import React, { useEffect, useState } from "react";
import PhoneParallax from "./phone/page";
import StadiumParallax from "./stadium/page";
import RestaurantParallax from "./restaurant/page";

const PHONE_FRAME_COUNT = 3;
const STADIUM_FRAME_COUNT = 60;
const RESTAURANT_FRAME_COUNT = 74;
const PHONE_FRAME_PATH = (i: number) => `/sportzio/phone/${i + 1}.png`;
const STADIUM_FRAME_PATH = (i: number) => `/sportzio/stadium/${i + 1}.png`;
const RESTAURANT_FRAME_PATH = (i: number) =>
  `/sportzio/restaurant/RES${i + 1}.png`;

export default function Sportzio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalFrames =
      PHONE_FRAME_COUNT + STADIUM_FRAME_COUNT + RESTAURANT_FRAME_COUNT;
    const handleImgLoad = () => {
      loadedCount++;
      if (loadedCount === totalFrames) setLoaded(true);
    };
    for (let i = 0; i < PHONE_FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = PHONE_FRAME_PATH(i);
      img.onload = handleImgLoad;
      img.onerror = handleImgLoad;
    }
    for (let i = 0; i < STADIUM_FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = STADIUM_FRAME_PATH(i);
      img.onload = handleImgLoad;
      img.onerror = handleImgLoad;
    }
    for (let i = 0; i < RESTAURANT_FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = RESTAURANT_FRAME_PATH(i);
      img.onload = handleImgLoad;
      img.onerror = handleImgLoad;
    }
  }, []);

  if (!loaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="w-14 h-14 border-1 border-t-transparent border-blue-800 rounded-full animate-spin" />
      </div>
    );
  }

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
