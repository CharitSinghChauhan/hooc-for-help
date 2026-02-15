"use client";

import { useState } from "react";
import Image from "next/image";

const cards = [
  {
    id: "education",
    icon: "/focus-icon-1.svg",
    title: "EDUCATION",
    desc: "Quality education and learning opportunities for every child",
  },
  {
    id: "health",
    icon: "/focus-icon-2.svg",
    title: "HEALTH &\nNUTRITION",
    desc: "Increasing access to proper nutrition and quality healthcare",
    featured: true,
  },
  {
    id: "safety",
    icon: "/focus-icon-3.svg",
    title: "SAFETY & PROTECTION",
    desc: "Protecting children from abuse, harm and exploitation",
  },
  {
    id: "participation",
    icon: "/focus-icon-4.svg",
    title: "CHILD PARTICIPATION",
    desc: "Giving children a voice in decisions that affect them",
  },
];

export default function Focus() {
  const [active, setActive] = useState<number | null>(1); // default highlight the second card
  const [locked, setLocked] = useState<number | null>(null);

  function handleEnter(i: number) {
    if (locked === null) setActive(i);
  }
  function handleLeave(i: number) {
    if (locked === null) setActive(null);
  }
  function handleClick(i: number) {
    if (locked === i) {
      setLocked(null);
      setActive(null);
    } else {
      setLocked(i);
      setActive(i);
    }
  }

  return (
    <section id="focus" className="py-20 scroll-mt-32.5">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl">Our Focus Areas</h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-3 mb-8 rounded-md" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, i) => {
            const isActive = i === active;
            return (
              <article
                key={card.id}
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
                onClick={() => handleClick(i)}
                className={`relative cursor-pointer rounded-radius border-2 transition-all duration-200 ease-in-out overflow-hidden flex items-center justify-center h-64 md:h-72 p-6 ${
                  isActive
                    ? "bg-primary border-primabg-primary"
                    : "bg-white border-primabg-primary/50"
                }`}
              >
                {/* Inactive view: icon centered, title below */}
                {!isActive && (
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 md:w-28 md:h-28 relative">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="font-bold text-sm md:text-base">
                      {card.title}
                    </div>
                    <div className="absolute right-3 bottom-3 text-primabg-primary font-bold">
                      ➤
                    </div>
                  </div>
                )}

                {/* Active view: show detailed yellow panel */}
                {isActive && (
                  <div className="w-full h-full flex flex-col justify-between text-left p-6 text-primary-foreground">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 md:w-12 md:h-12 relative">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-right">
                        <h3 className="text-base md:text-lg font-bold leading-tight whitespace-pre-line">
                          {card.title}
                        </h3>
                        <div className="w-16 h-0.5 bg-primatext-primary-foreground mt-2 mb-2" />
                      </div>
                    </div>

                    <div className="flex-1 flex items-center">
                      <p className="text-sm md:text-base leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="text-left">
                      <a href="#" className="underline font-bold">
                        Know More
                      </a>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
