"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const honorRoll = [
  { name: "John Doe", role: "Lorem ipsum", img: "/Vol-61.png" },
  { name: "Jane Smith", role: "Lorem ipsum", img: "/Vol.-60.png" },
  { name: "Mark Wilson", role: "Lorem ipsum", img: "/Vol-61.png" },
  { name: "Alice Brown", role: "Lorem ipsum", img: "/Vol.-60.png" },
  { name: "Bob Johnson", role: "Lorem ipsum", img: "/Vol-61.png" },
  { name: "Sarah Davis", role: "Lorem ipsum", img: "/Vol.-60.png" },
];

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-200 w-full flex items-center justify-center overflow-hidden pt-32">
        <Image
          src="/volunter-2-hero.png"
          alt="Volunteers"
          fill
          className="object-cover brightness-75"
          priority
        />
      </section>

      <section id="join" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-full overflow-hidden border-15p border-primary/10 shadow-2xl">
              <Image
                src="/impact-3.png"
                alt="Child with pinwheel"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl text-gray-900 leading-tight">
                  Why Volunteer With <br />
                  Hooc for Help?
                </h2>
                <div className="w-32 h-1 bg-primaryborder-primary" />
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Volunteering is a simple and rewarding way to support a cause
                  you care about!
                </p>
                <p>
                  The Hooc for Help volunteer community is a close-knit group of
                  dynamic individuals from diverse backgrounds who are deeply
                  dedicated to making the world a better place for communities.
                  We dream together and plan to achieve those dreams together in
                  the most fun, yet meaningful way possible.
                </p>
                <p>
                  Our volunteers are present across the U.S. as a part of
                  various action centres — click to know more and join us today!
                </p>
              </div>
              <button className="bg-primary border-primary hover:brightness-95 text-primary-foreground font-bold px-10 py-4 rounded-radius shadow-lg transition-all text-sm uppercase tracking-widest">
                SIGN UP TO VOLUNTEER
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div
          className="absolute top-0 left-0 w-full h-12 bg-white z-20 pointer-events-none"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 95% 40%, 90% 100%, 85% 40%, 80% 100%, 75% 40%, 70% 100%, 65% 40%, 60% 100%, 55% 40%, 50% 100%, 45% 40%, 40% 100%, 35% 40%, 30% 100%, 25% 40%, 20% 100%, 15% 40%, 10% 100%, 5% 40%, 0 100%)",
          }}
        />

        <div className="bg-primaryborder-primary py-24" id="stories">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl text-primary-foreground mb-4">
              Volunteer Honor Roll
            </h2>
            <p className="text-primary-foreground/80 mb-16 italic text-lg">
              Congratulations to the volunteers of the year 2019!
            </p>

            <div className="relative max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {honorRoll.map((v, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={v.img}
                        alt={v.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-primary-foreground text-center">
                      <p className="font-bold uppercase tracking-widest text-xs">
                        {v.name}
                      </p>
                      <p className="text-[10px] mt-1 opacity-70 italic">
                        {v.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-black transition-colors hidden md:block">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-black transition-colors hidden md:block">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <section id="benefits" className="pb-25 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl text-gray-900 mb-8 underline decoration-primaryborder-primary decoration-4 underline-offset-8 italic">
              Volunteer Voices
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative px-8">
            <div className="absolute -top-10 -left-10 text-9xl text-primaryborder-primary/10 font-serif leading-none italic opacity-30 select-none">
              &ldquo;
            </div>

            <div className="text-center space-y-12 relative z-10">
              <p className="text-xl md:text-3xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
                &quot;Every child is precious and should have a dignified and
                happy communities. Hooc for Help has promoted equal inclusion of
                every child by encouraging communities to provide opportunities
                to all by preventing violations and fostering empowerment. Hooc
                Help America has also provided a path to individuals —
                volunteers and donors — that we can traverse together to create
                a world that has equal opportunities for all the children.&quot;
              </p>

              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 opacity-60 shrink-0">
                    <Image
                      src="/Vol-61.png"
                      alt="Voice"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary shadow-xl shrink-0 relative scale-110">
                    <Image
                      src="/Vol-61.png"
                      alt="Rajesh Munshi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 opacity-60 shrink-0">
                    <Image
                      src="/Vol.-60.png"
                      alt="Voice"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-2xl font-black text-gray-900 uppercase tracking-widest">
                    Rajesh Munshi
                  </h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-2 flex items-center justify-center gap-2">
                    <span className="w-8 h-px bg-gray-300" /> Hooc for Help
                    Volunteer <span className="w-8 h-px bg-gray-300" />
                  </p>
                </div>

                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((dot) => (
                    <div
                      key={dot}
                      className={`w-2 h-2 rounded-full ${dot === 2 ? "bg-primaryborder-primary w-8" : "bg-gray-200"} transition-all duration-300`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
