import { ArrowRight, ChevronDown } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <section className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-1/3 z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-primary/20" />

        <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/about-us-hero.avif"
              alt="Banner"
              className="w-full h-full object-cover object-top opacity-90"
            />
          </div>
        </div>
      </section>

      <section
        id="our-vision"
        className="pt-16 md:pt-24 px-4 md:px-6 text-center max-w-4xl mx-auto scroll-mt-32"
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl mb-6">Our Vision</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-sm" />
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
          A thriving, equitable society where every community member has access
          to opportunities, dignity, and sustainable development.
        </p>
      </section>

      <section
        id="our-mission"
        className="py-16 md:py-24 px-4 md:px-6 bg-gray-50/30 scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-6">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                img: "/about-us-mission-1.jpeg",
                title: "Building Sustainable Communities",
              },
              {
                img: "/about-us-mission-2.png",
                title: "Empowering Through Education",
              },
              {
                img: "/about-us-mission-3.avif",
                title: "Fostering Environmental Care",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow border-b-2 border-primary"
              >
                <div className="relative h-48 md:h-64 w-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6 text-center">
                  <h3 className="font-bold text-sm md:text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="newsletters-media"
        className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto scroll-mt-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-4xl mb-6 text-center">
              Our Newsletters
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-sm" />

            <div className="space-y-4 md:space-y-6">
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
                  className="flex flex-col md:flex-row items-center gap-4 border border-primary/20 bg-primary/10 p-4 rounded-sm hover:shadow-sm transition-shadow"
                >
                  <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 relative bg-gray-200">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-bold text-xs md:text-sm lg:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-center md:text-right shrink-0 flex flex-col items-center md:items-end gap-2">
                    <span className="text-xs font-bold text-gray-500">
                      {item.date}
                    </span>
                    <button className="w-8 h-8 flex items-center justify-center bg-primary rounded-full hover:opacity-90 transition-colors">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="bg-primary hover:opacity-90 text-primary-foreground font-bold text-xs uppercase px-8 py-3 rounded-sm shadow-sm tracking-widest">
                Load More
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl mb-6 text-center">
              In The Media
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-sm" />

            <div className="space-y-4 md:space-y-6">
              {[
                {
                  title:
                    "Hooc for Help celebrates supporters for shaping sustainable futures",
                  date: "May 2024",
                  img: "/mission-1-uai-516x503-1.jpg",
                }, // Reuse generic img if specific not found
                {
                  title: "Hooc for Help Gala raises $400,000",
                  date: "May 2024",
                  img: "/mission-2-uai-516x503-1.jpg",
                },
                {
                  title:
                    "Hooc for Help Gala to Thank Supporters for Shaping Sustainable Futures",
                  date: "April 2024",
                  img: "/mission-3-uai-516x503-1.jpg",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row items-center gap-4 border border-primary/20 bg-primary/10 p-4 rounded-sm hover:shadow-sm transition-shadow"
                >
                  <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 relative bg-gray-200">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-bold text-xs md:text-sm lg:text-base leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-center md:text-right shrink-0 flex flex-col items-center md:items-end gap-2">
                    <span className="text-xs font-bold text-gray-500">
                      {item.date}
                    </span>
                    <span className="bg-primary text-[10px] text-primary-foreground font-bold px-2 py-1 rounded-sm uppercase">
                      Read Article
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="bg-primary hover:opacity-90 text-primary-foreground font-bold text-xs uppercase px-8 py-3 rounded-sm shadow-sm tracking-widest">
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative h-[200px] md:h-[300px] lg:h-[400px] my-12">
        <img
          src="/two-girls-1.jpg"
          alt="Smiling women"
          className="w-full h-full object-cover object-top"
        />
      </section>

      <section
        id="our-team"
        className="py-16 md:py-24 px-4 md:px-6 bg-gray-50 scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8">Our Team</h2>
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
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gray-300 relative overflow-hidden mb-4 border-4 border-white shadow-md group">
                  <img
                    src="/home-about.webp"
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />

                  <div className="absolute right-2 bottom-2 bg-primary w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-bold text-primary text-xs md:text-sm uppercase mb-1">
                  {person.name}
                </h3>
                <p className="text-xs md:text-sm text-foreground max-w-[200px] md:max-w-[250px] leading-tight">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="our-financials"
        className="py-16 md:py-24 px-4 md:px-6 scroll-mt-32"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-4">
              Our Financials
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-sm" />
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
                    className="bg-primary p-4 rounded-sm shadow-sm flex items-center justify-between cursor-pointer hover:opacity-90 transition-colors text-primary-foreground"
                  >
                    <span className="font-bold text-xs md:text-sm uppercase tracking-wide">
                      {item}
                    </span>
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                ),
              )}
            </div>
            <div className="shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-primary rounded-full p-4 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                <img
                  src="/about-us.png"
                  alt="Smiling Girl"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pledge"
        className="py-16 md:py-24 px-4 md:px-6 max-w-5xl mx-auto scroll-mt-32"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-black rounded-full p-0 flex items-center justify-center overflow-hidden relative shadow-xl">
            <img
              src="/pledge.jpeg"
              alt="Smiling Child"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-6">
              The Hooc for Help Pledge
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
                and they can&apos;t.
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
