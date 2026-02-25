"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  initials?: string;
  color?: string;
  image?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Hooc for Help embraces a holistic approach providing education, healthcare, and livelihood support to underserved communities. Their environmental initiatives are truly inspiring.",
    name: "Harsh & Rupal Patil",
    role: "Hooc for Help Donors",
    initials: "HP",
    color: "#FDE68A",
    image:
      "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/Harsh-Rupal-Patil-donor.webp",
  },
  {
    quote:
      "We are touched by the breadth and level of commitment of their volunteers, donors and partners. It is an honor to serve with Hooc for Help in our own little way.",
    name: "Anita Sharma",
    role: "Volunteer",
    initials: "AS",
    color: "#FBCFE8",
    image:
      "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/Anita-Agarwal-donor.webp",
  },
  {
    quote:
      "Supporting Hooc for Help has been rewarding and impactful — the team truly transforms lives on the ground through sustainable development.",
    name: "Michael & Priya",
    role: "Donors",
    initials: "MP",
    color: "#C7F9CC",
    image:
      "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/donor-2.webp",
  },
];

function avatarDataUrl(initials = "A", bg = "#ddd") {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><rect width='100%' height='100%' fill='${bg}' rx='80' ry='80'/><text x='50%' y='50%' font-size='52' fill='#222' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif'>${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function DonorVoices() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((p) => (p + 1) % TESTIMONIALS.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  const active = TESTIMONIALS[idx];

  const avatars = useMemo(
    () =>
      TESTIMONIALS.map((t) => ({
        src: t.image || avatarDataUrl(t.initials, t.color),
        name: t.name,
      })),
    [],
  );

  return (
    <section
      id="donor-voices"
      className="section-padding bg-white scroll-mt-32.5"
    >
      <div className="section-container text-center">
        <h2 className="heading-2 mb-6 md:mb-8">Donor Voices</h2>
        <div className="divider-center mb-10" />

        <div className="max-w-3xl mx-auto text-center element-spacing-md">
          <p className="body-lg italic leading-relaxed">
            &ldquo;{active.quote}&rdquo;
          </p>
          <p className="mt-8 font-semibold text-lg text-foreground">
            {active.name}
          </p>
          {active.role && (
            <p className="mt-2 text-muted-foreground body-base">
              {active.role}
            </p>
          )}
        </div>

        <div className="mt-10 md:mt-12 flex items-center justify-center gap-4">
          {avatars.map((a, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full overflow-hidden transition-transform duration-300 focus:outline-none ${
                true ? "" : ""
              } ${i === idx ? "scale-110 ring-4 ring-primary" : "opacity-70 hover:scale-105"}`}
              aria-label={`Show testimonial ${i + 1}`}
            >
              <Image
                src={a.src}
                alt={a.name}
                width={112}
                height={112}
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full`}
              />
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === idx ? "bg-primary scale-125" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
