"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/home-banner.jpg",
  "/hero-2.jpg",
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
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-white">
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
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <Image
          src="/banner-cutout-new.png"
          alt="Overlay"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-30 container mx-auto h-full flex items-center px-4 md:px-8">
        <div className="max-w-xl md:max-w-2xl pt-10 md:pt-0">
          <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl leading-tight space-y-2">
            <p className="text-foreground">Empowering communities.</p>
            <p className="text-primary">Building bridges to</p>
            <p className="text-foreground">brighter futures together.</p>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:opacity-90 text-primary-foreground font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-radius shadow-md transition-colors text-sm sm:text-base tracking-wider flex items-center justify-center gap-2">
              DONATE NOW
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 -translate-x-1/2 left-1/2 md:left-2/3 z-30 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primatext-primary scale-125"
                : "bg-gray-400 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
