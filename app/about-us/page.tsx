import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white font-sans text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-start overflow-hidden">
        {/* Yellow splash background effect - simplified implementation */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-1/3 z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--primary)]/20" />

        {/* Placeholder for the banner image */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Using a placeholder or one of the banner images */}
          <Image
            src="/about-us.png"
            alt="Banner"
            fill
            className="object-cover object-top opacity-90"
          />
        </div>

        <div className="relative z-20 text-center mt-20 md:ml-20 ml-5">
          <h1 className="font-gochi text-2xl md:text-4xl text-[var(--foreground)]">
            <span className="text-[var(--primary)] text-2xl md:text-4xl">
              20 years
            </span>{" "}
            of enabling <br /> brighter futures!
          </h1>
        </div>
      </section>

      {/* Our Vision */}
      <section
        id="our-vision"
        className="pt-24 px-4 text-center max-w-4xl mx-auto scroll-mt-32"
      >
        <h2 className="font-gochi text-4xl md:text-5xl mb-6">Our Vision</h2>
        <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-8 rounded-[var(--radius)]" />
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          A happy, healthy and creative child whose rights are protected and
          honored in a society that is built on respect for dignity, justice and
          equity for all.
        </p>
      </section>

      {/* Our Mission */}
      <section
        id="our-mission"
        className="py-16 px-4 bg-gray-50/30 scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-gochi text-4xl md:text-5xl mb-6">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-8 rounded-[var(--radius)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/mission-1-uai-516x503-1.jpg",
                title: "Taking Responsibility",
              },
              {
                img: "/mission-2-uai-516x503-1.jpg",
                title: "Mobilizing Potential",
              },
              {
                img: "/mission-3-uai-516x503-1.jpg",
                title: "Inspiring Collective Action",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[var(--radius)] shadow-sm hover:shadow-md transition-shadow border-b-2 border-[var(--primary)]"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletters & Media */}
      <section
        id="newsletters-media"
        className="py-16 px-4 max-w-7xl mx-auto scroll-mt-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Our Newsletters */}
          <div>
            <h2 className="font-gochi text-4xl mb-6 text-center">
              Our Newsletters
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-8 rounded-[var(--radius)]" />

            <div className="space-y-6">
              {[
                {
                  title: "Online Newsletter, Volume 62",
                  date: "June 2025",
                  img: "/June-2025-newsletter-thumbnail.png",
                },
                {
                  title: "Online Newsletter, Volume 61",
                  date: "September 2024",
                  img: "/Vol-61.png",
                },
                {
                  title: "Online Newsletter, Volume 60",
                  date: "June 2024",
                  img: "/Vol.-60.png",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border border-[var(--primary)]/20 bg-[var(--primary)]/10 p-4 rounded-[var(--radius)] hover:shadow-sm transition-shadow"
                >
                  <div className="shrink-0 w-24 h-24 relative bg-gray-200">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm md:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-right shrink-0 flex flex-col items-end gap-2">
                    <span className="text-xs font-bold text-gray-500">
                      {item.date}
                    </span>
                    <button className="w-8 h-8 flex items-center justify-center bg-[var(--primary)] rounded-full hover:opacity-90 transition-colors">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] font-bold text-xs uppercase px-8 py-3 rounded-[var(--radius)] shadow-sm tracking-widest">
                Load More
              </button>
            </div>
          </div>

          {/* In The Media */}
          <div>
            <h2 className="font-gochi text-4xl mb-6 text-center">
              In The Media
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-8 rounded-[var(--radius)]" />

            <div className="space-y-6">
              {[
                {
                  title:
                    "CRY Gala celebrates supporters for shaping children's destinies",
                  date: "May 2024",
                  img: "/mission-1-uai-516x503-1.jpg",
                }, // Reuse generic image if specific not found
                {
                  title: "CRY Houston Gala raises $400,000",
                  date: "May 2024",
                  img: "/mission-2-uai-516x503-1.jpg",
                },
                {
                  title:
                    "CRY Gala to Thank Supporters for Shaping Children's Destinies",
                  date: "April 2024",
                  img: "/mission-3-uai-516x503-1.jpg",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border border-[var(--primary)]/20 bg-[var(--primary)]/10 p-4 rounded-[var(--radius)] hover:shadow-sm transition-shadow"
                >
                  <div className="shrink-0 w-24 h-24 relative bg-gray-200">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm md:text-base leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-right shrink-0 flex flex-col items-end gap-2">
                    <span className="text-xs font-bold text-gray-500">
                      {item.date}
                    </span>
                    <span className="bg-[var(--primary)] text-[10px] text-[var(--primary-foreground)] font-bold px-2 py-1 rounded-[var(--radius)] uppercase">
                      Read Article
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] font-bold text-xs uppercase px-8 py-3 rounded-[var(--radius)] shadow-sm tracking-widest">
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="w-full relative h-[400px] md:h-[600px] my-12">
        <Image
          src="/two-girls-1.jpg"
          alt="Smiling women"
          fill
          className="object-cover object-top"
        />
      </section>

      {/* Honor Roll */}
      <section
        id="honor-roll"
        className="py-16 md:py-24 px-4 text-center max-w-6xl mx-auto scroll-mt-32"
      >
        <h2 className="font-gochi text-4xl md:text-5xl mb-4">Honor Roll</h2>
        <p className="text-sm text-gray-500 mb-6">
          You've been our superheroes! Thank YOU for enabling brighter futures
          for vulnerable children!
        </p>
        <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-12 rounded-[var(--radius)]" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Using generic icons from lucide or placeholders since specific SVGs might not match perfectly */}
          {[
            { title: "INDIVIDUALS", icon: "/honor-1.svg" },
            { title: "CORPORATES & FOUNDATIONS", icon: "/honor-2.svg" },
            { title: "MEDIA", icon: "/honor-3.svg" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[var(--primary)]/20 p-8 rounded-[var(--radius)] shadow-sm flex flex-col items-center"
            >
              <img
                className="text-5xl mb-6 text-[var(--primary)]"
                src={`${item.icon}`}
                alt={`${item.title}`}
              />
              <h3 className="font-bold text-sm uppercase tracking-wide mb-6">
                {item.title}
              </h3>
              <button className="bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] font-bold text-xs uppercase px-6 py-2 rounded-[var(--radius)] shadow-sm tracking-widest">
                Know More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section id="our-team" className="py-16 px-4 bg-gray-50 scroll-mt-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-gochi text-4xl md:text-5xl mb-8">Our Team</h2>

          {/* Tabs */}
          <div className="flex justify-center border-b border-gray-200 mb-12">
            <button className="px-8 py-4 text-sm font-bold uppercase tracking-wider border-b-4 border-[var(--primary)] text-[var(--primary)]">
              Trustees
            </button>
            <button className="px-8 py-4 text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-black">
              Advisory Board
            </button>
            <button className="px-8 py-4 text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-black">
              CRY America Staff
            </button>
          </div>

          {/* Profile Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
            {[
              {
                name: "SHEFALI SUNDERLAL",
                role: "President & Program Director",
                img: null,
              },
              {
                name: "SHEKHAR YERRAMILLI",
                role: "Honorary Trustee & Treasurer",
                img: null,
              },
              {
                name: "PERCY PRESSWALLA",
                role: "Honorary Trustee, Board Secretary & National Volunteer Representative",
                img: null,
              },
              { name: "PUJA MARWAHA", role: "Honorary Trustee", img: null },
              { name: "YAMINI KAPOOR", role: "Honorary Trustee", img: null },
            ].map((person, i) => (
              <div
                key={i}
                className={`flex flex-col items-center ${i >= 3 ? "md:col-span-1 md:col-start-auto" : ""} ${i === 3 ? "md:ml-auto" : ""} ${i === 4 ? "md:mr-auto" : ""}`}
              >
                <div className="w-48 h-48 rounded-full bg-gray-300 relative overflow-hidden mb-4 border-4 border-white shadow-md group">
                  {/* Placeholder/Generic image */}
                  <Image
                    src="/home-about.webp"
                    alt={person.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />

                  {/* Arrow overlay */}
                  <div className="absolute right-2 bottom-2 bg-[var(--primary)] w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-5 h-5 text-[var(--primary-foreground)]" />
                  </div>
                </div>
                <h3 className="font-bold text-[var(--primary)] text-sm uppercase mb-1">
                  {person.name}
                </h3>
                <p className="text-xs text-[var(--foreground)] max-w-[200px] leading-tight">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Financials */}
      <section id="our-financials" className="py-16 md:py-24 px-4 scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-gochi text-4xl md:text-5xl mb-4">
              Our Financials
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-[var(--radius)]" />
            <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto">
              As a custodian of public funds, we believe we are accountable to
              the wider public for the efficient use of these funds.
              Accountability and transparency have always been guiding
              principles.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 w-full space-y-4">
              {["ANNUAL REPORTS", "FEDERAL FORM 990", "AUDITED FINANCIALS"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="bg-[var(--primary)] p-4 rounded-[var(--radius)] shadow-sm flex items-center justify-between cursor-pointer hover:opacity-90 transition-colors text-[var(--primary-foreground)]"
                  >
                    <span className="font-bold text-xs md:text-sm uppercase tracking-wide">
                      {item}
                    </span>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                ),
              )}
            </div>
            <div className="shrink-0 w-64 h-64 md:w-80 md:h-80 bg-[var(--primary)] rounded-full p-4 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                <Image
                  src="/about-us.png"
                  alt="Smiling Girl"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The CRY America Pledge */}
      <section
        id="pledge"
        className="py-16 px-4 max-w-5xl mx-auto scroll-mt-32"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="shrink-0 w-64 h-64 md:w-80 md:h-80 bg-black rounded-full p-0 flex items-center justify-center overflow-hidden relative shadow-xl">
            <Image
              src="/0-1-years-children-fully-immunized.png"
              alt="Smiling Child"
              fill
              className="object-cover opacity-90"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="font-gochi text-4xl md:text-5xl mb-6">
              The CRY America Pledge
            </h2>
            <div className="w-24 h-1 bg-[#FCDA16] mx-auto md:mx-0 mb-8 rounded-sm" />

            <div className="space-y-4 text-xs md:text-sm font-medium leading-relaxed">
              <p>
                Before anything else, I am a human being. As are these little
                children. The rights I enjoy are theirs too. They have a right
                to a home and family, education, healthcare, play time and
                protection from being exploited. Most of all, they have the
                right to be children.
              </p>
              <p>A right they are denied, for no fault of theirs.</p>
              <p>
                And so, I pledge to do whatever I can, in my own way, to fight
                for their right to have a childhood. With my skills, with my
                resources, with my heart, I will fight for them because I can
                and they can't.
              </p>
            </div>

            <div className="mt-8">
              <button className="bg-[#FCDA16] hover:bg-yellow-400 text-black font-bold text-xs uppercase px-8 py-3 rounded-sm shadow-sm tracking-widest">
                Take Pledge
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
