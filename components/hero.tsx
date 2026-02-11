"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/Impact-homepage-banner.webp",
  "/ofrc-2025-banner.webp",
  "/turning-dreams-into-reality-with-you.webp",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[500px] overflow-hidden bg-white mt-">
      {/* 1. Carousel Layer (Background) */}
      <div className="absolute inset-0 w-full h-full z-10">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay for better text contrast if needed, though the cutout handles most of it */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* 2. Cutout Overlay Layer */}
      {/* This image acts as the mask/shape. Assuming it covers the left side or provides the torn edge. 
          If it's transparent with a white edge, we might need a white div behind text. 
          Let's assume it handles the visual transition. */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Image
          src="/banner-cutout-new.png"
          alt="Overlay"
          fill
          className="object-cover"
        />
      </div>

      {/* 3. Content Layer */}
      <div className="relative z-30 container mx-auto h-full flex items-center px-4 md:px-8">
        <div className="max-w-xl md:max-w-2xl pt-10 md:pt-0">
          <div className="text-xl md:text-4xl leading-tight space-y-2 font-gochi ">
            <p className="text-black">Childhood was never meant for labor.</p>
            <p className="text-[#FCDA16]">Be the bridge between</p>
            <p className="text-black">lost dreams and new beginnings.</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-[#FCDA16] hover:bg-[#e3c314] text-black font-bold py-3 px-8 rounded-sm shadow-md transition-colors text-sm tracking-wider flex items-center justify-center gap-2">
              DONATE NOW
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 -translate-x-1 left-1/2 md:left-2/3 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-[#FCDA16] scale-125"
                : "bg-gray-400 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
