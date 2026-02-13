"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  initials?: string;
  color?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "CRY is a one of a kind NGO that embraces a holistic approach providing health, education, and nutrition to ensure a safer and better future for children in India.",
    name: "Harsh & Rupal Patil",
    role: "CRY America Donors",
    initials: "HP",
    color: "#FDE68A",
  },
  {
    quote:
      "We are touched by the breadth and level of commitment of its volunteers, donors and partners. It is an honor to serve with CRY in our own little way.",
    name: "Anita Sharma",
    role: "Volunteer",
    initials: "AS",
    color: "#FBCFE8",
  },
  {
    quote:
      "Supporting CRY has been rewarding and impactful — the team truly transforms lives on the ground.",
    name: "Michael & Priya",
    role: "Donors",
    initials: "MP",
    color: "#C7F9CC",
  },
  {
    quote:
      "The programs focus on both education and nutrition, which makes a big difference.",
    name: "Sanjay Iyer",
    role: "Partner",
    initials: "SI",
    color: "#C7D2FE",
  },
  {
    quote:
      "We love the way CRY engages communities — it's sustainable and respectful of local needs.",
    name: "Leela & Arun",
    role: "Supporters",
    initials: "LA",
    color: "#FFE4B5",
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
        src: avatarDataUrl(t.initials, t.color),
        name: t.name,
      })),
    [],
  );

  return (
    <section
      id="donor-voices"
      className="w-full bg-white pb-20 scroll-mt-[130px]"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-gochi mb-2">Donor Voices</h2>
        <div className="mx-auto h-1 w-40 bg-[#FCDA16] rounded-sm mb-8" />

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 italic text-lg md:text-xl leading-relaxed">
            “{active.quote}”
          </p>
          <p className="mt-6 font-semibold text-lg">{active.name}</p>
          {active.role && (
            <p className="text-sm text-gray-500">{active.role}</p>
          )}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          {avatars.map((a, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full overflow-hidden transition-transform duration-300 focus:outline-none ${{
                true: "",
              }} ${i === idx ? "scale-110 ring-4 ring-[#FCDA16]" : "opacity-70 hover:scale-105"}`}
              aria-label={`Show testimonial ${i + 1}`}
            >
              {/* use plain img so it's easy to replace with real photos in /public */}
              <Image
                src={a.src}
                alt={a.name}
                width={112}
                height={112}
                className={`w-24 h-24 md:w-28 md:h-28 object-cover rounded-full`}
              />
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === idx ? "bg-[#FCDA16] scale-125" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
