"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const cards = [
  {
    img: "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/river-cleaning.webp",
    number: 120,
    label: "Volunteers in river-cleaning drives",
    bg: "bg-[#f7f7fb]",
  },
  {
    img: "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/impact-2.webp",
    number: 450,
    label: "People educated and skilled",
    bg: "bg-[#fff5f7]",
  },
  {
    img: "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/impact-3.webp",
    number: 750,
    label: "Families supported programs",
    bg: "bg-[#f0fbff]",
  },
  {
    img: "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/impact-4.webp",
    number: 250,
    label: "Health camps and medical assistance provided",
    bg: "bg-[#fafafa]",
  },
  {
    img: "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/impact-5.webp",
    number: 500,
    label: "Trees planted in community drives",
    bg: "bg-[#f2fbf8]",
  },
  {
    img: "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/impact-6.webp",
    number: 300,
    label: "Women empowered through initiatives",
    bg: "bg-[#fff7f7]",
  },
  {
    img: "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/clothes-distribution.webp",
    number: 150,
    label: "Donate Warm Clothes & Blankets To orphans",
    bg: "bg-[#fff6f6]",
  },
  {
    img: "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/impact-8.webp",
    number: 500,
    label: "Individuals rehabilitated and reintegrated",
    bg: "bg-[#fff7f7]",
  },
];

export default function Impact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section
      id="impact"
      className="section-padding bg-white scroll-mt-32.5"
      ref={ref}
    >
      <div className="section-container">
        <div className="text-center space-heading-content">
          <h2 className="heading-2">Our Impact</h2>
          <div className="divider-center" />
          <p className="body-lg max-w-4xl mx-auto">
            Every community transformed is a step toward global change. Since
            2025, Hooc for Help has empowered over 3000+ individuals through
            sustainable initiatives, thanks to supporters like YOU!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-gap-md">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div
                className={`${card.bg} aspect-video flex items-center justify-center`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={card.img}
                    alt={card.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="bg-primary py-4 text-center grow flex flex-col justify-center">
                <span className="block text-3xl md:text-3xl font-bold text-[#1a1a1a] ">
                  {inView ? (
                    <div className="flex justify-center items-center gap-0.5">
                      <CountUp
                        end={card.number}
                        duration={2}
                        separator=","
                        enableScrollSpy={false}
                      />
                      <span>+</span>
                    </div>
                  ) : (
                    "0"
                  )}
                </span>
                <p className="text-sm md:text-base text-black leading-relaxed px-2">
                  {card.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
