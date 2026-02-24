"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const cards = [
  {
    id: "education",
    icon: "/focus-icon-1.svg",
    title: "EDUCATION & SKILL DEVELOPMENT",
    desc: "Providing learning resources, awareness workshops, and community education initiatives.",
  },
  {
    id: "health",
    icon: "/focus-icon-2.svg",
    title: "HEALTH & NUTRITION",
    desc: "Health awareness drives, basic support services, and nutrition outreach programs.",
    featured: true,
  },
  {
    id: "environment",
    icon: "/focus-icon-3.svg",
    title: "ENVIRONMENTAL SUSTAINABILITY",
    desc: "Health awareness drives, basic support services, and nutrition outreach programs.",
  },
  {
    id: "empowerment",
    icon: "/focus-icon-4.svg",
    title: "COMMUNITY EMPOWERMENT",
    desc: "Women empowerment and social awareness programs for inclusive growth.",
  },
];

export default function Focus() {
  const [active, setActive] = useState<number | null>(1); // default highlight the second card
  const [locked, setLocked] = useState<number | null>(null);

  function handleEnter(i: number) {
    if (locked === null) setActive(i);
  }
  function handleLeave() {
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
    <section id="focus" className="section-padding bg-white scroll-mt-32.5">
      <div className="section-container text-center">
        <h2 className="heading-2">OUR PROGRAMS</h2>
        <div className="divider-center" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const isActive = active === i;
            return (
              <motion.article
                key={card.id}
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave()}
                onClick={() => handleClick(i)}
                className={`relative cursor-pointer rounded-xl border-2 transition-colors duration-300 overflow-hidden h-72 p-6 flex flex-col justify-between ${
                  isActive ? "border-primary" : "border-gray-200 bg-white"
                }`}
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ clipPath: "circle(0% at 90% 90%)" }}
                      animate={{ clipPath: "circle(150% at 90% 90%)" }}
                      exit={{ clipPath: "circle(0% at 90% 90%)" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 bg-primary z-0"
                    />
                  )}
                </AnimatePresence>

                {/* Content Layer */}
                <div className="relative z-10 w-full h-full">
                  {!isActive ? (
                    // Inactive State
                    <div className="flex flex-col items-center justify-center h-full gap-4">
                      <div className="relative w-24 h-24">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-center font-bold text-lg leading-tight">
                        {card.title}
                      </h3>
                      <div className="absolute right-0 bottom-0 text-primary text-xl">
                        ➤
                      </div>
                    </div>
                  ) : (
                    // Active State
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex flex-col h-full justify-between text-primary-foreground"
                    >
                      <div className="flex justify-between items-start">
                        <div className="relative w-12 h-12 bg-primary-foreground/10 rounded-full p-2">
                          <Image
                            src={card.icon}
                            alt={card.title}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <h3 className="text-right font-bold text-lg w-2/3 leading-tight">
                          {card.title}
                        </h3>
                      </div>

                      <div className="w-12 h-1 bg-primary-foreground/20 my-2" />

                      <p className="text-sm leading-relaxed">{card.desc}</p>
                    </motion.div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
