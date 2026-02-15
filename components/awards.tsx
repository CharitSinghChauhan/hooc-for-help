"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Award = {
  logoColor: string;
  title: string;
  subtitle?: string;
  year?: string;
};

const AWARDS: Award[] = [
  {
    logoColor: "#6b7280",
    title: "Recognized With The GuideStar Platinum Seal of Transparency",
    year: "2024",
  },
  {
    logoColor: "#2b9348",
    title: "India Philanthropy Alliance",
    subtitle: "Member since 2020",
  },
  {
    logoColor: "#1a1a1a",
    title: "New York State Assembly- Honoring Child Rights and You America.",
    year: "2024",
  },
];

function logoDataUrl(bg = "#ddd", text = "AW") {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='140'><rect width='100%' height='100%' fill='${bg}' rx='8' ry='8'/><text x='50%' y='50%' font-size='18' fill='#fff' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif'>${text}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function Awards() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % AWARDS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const items = useMemo(
    () =>
      AWARDS.map((a, i) => ({
        src: logoDataUrl(a.logoColor, `Logo ${i + 1}`),
        ...a,
      })),
    [],
  );

  return (
    <section id="awards" className="w-full bg-white py-20 scroll-mt-32.5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl mb-2">Awards &amp; Recognitions</h2>
        <div className="mx-auto h-1 w-40 bg-[#FCDA16] rounded-sm mb-12" />

        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-center gap-8 md:gap-12">
            {items.map((it, i) => {
              const isActive = i === index;
              return (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`group flex flex-col items-center gap-6 transition-transform duration-500 focus:outline-none ${
                    isActive ? "scale-105" : "opacity-80 hover:scale-105"
                  }`}
                  aria-label={`Show award ${i + 1}`}
                >
                  <div
                    className={`rounded-md overflow-hidden shadow-md w-40 h-32 flex items-center justify-center ${
                      isActive ? "ring-4 ring-[#FCDA16]" : ""
                    }`}
                  >
                    <Image
                      src={it.src}
                      alt={it.title}
                      width={220}
                      height={140}
                      className="object-contain"
                    />
                  </div>

                  <div className="max-w-55 text-center">
                    <p className="text-sm text-black leading-snug">
                      {it.title}
                    </p>
                    {it.subtitle && (
                      <p className="mt-2 text-sm text-[#b91c1c]">
                        {it.subtitle}
                      </p>
                    )}
                    {it.year && (
                      <p className="mt-1 text-sm text-[#FCDA16]">{it.year}</p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-[#FCDA16] scale-125" : "bg-gray-300"
                }`}
                aria-label={`Go to award ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
