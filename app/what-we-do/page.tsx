import Image from "next/image";
import { MapPin, Utensils, Heart, Megaphone, Package } from "lucide-react";
import Link from "next/link";
import FAQ from "@/components/faq";

const statistics = [
  {
    id: 1,
    title: "Food Distribution Drive",
    location: "Urban & Rural Communities",
    image:
      "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/food-distribution.webp",
    goal: "₹5,00,000",
    raised: "₹34,000",
  },
  {
    id: 2,
    title: "Clean Streets Initiative",
    location: "City Public Areas",
    image:
      "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/street-cleaning.webp",
    goal: "₹3,00,000",
    raised: "₹18,500",
  },
  {
    id: 3,
    title: "River Restoration Program",
    location: "Local Rivers & Water Bodies",
    image:
      "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/river-cleaning.webp",
    goal: "₹7,50,000",
    raised: "₹42,000",
  },
];

const programs = [
  {
    title: "Community Meal Distribution",
    icon: <Utensils className="w-10 h-10 text-primary" />,
  },
  {
    title: "Nutrition Support For Communities",
    icon: <Heart className="w-10 h-10 text-primary" />,
  },
  {
    title: "Food Security Awareness Drives",
    icon: <Megaphone className="w-10 h-10 text-primary" />,
  },
  {
    title: "Emergency Relief & Ration Kits",
    icon: <Package className="w-10 h-10 text-primary" />,
  },
];

const impacts = [
  {
    value: "342,558",
    label: "Individuals reached through community programs",
    bgColor: "bg-[#fdf2f2]",
    image:
      "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/impact-1.webp",
  },
  {
    value: "212,079",
    label: "People supported through education initiatives",
    bgColor: "bg-[#f1f5f9]",
    image:
      "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/impact-2.webp",
  },
  {
    value: "40,479",
    label: "Families benefited from livelihood programs",
    bgColor: "bg-[#fff1f2]",
    image:
      "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/impact-3.webp",
  },
  {
    value: "5,311",
    label: "Individuals rehabilitated and reintegrated",
    bgColor: "bg-[#f0fdfa]",
    image:
      "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/impact-4.webp",
  },
  {
    value: "50,832",
    label: "Community members engaged in local collectives",
    bgColor: "bg-[#fff7ed]",
    image:
      "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/impact-5.webp",
  },
];

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen ">
      <section className="relative h-screen w-full">
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
          <Image
            src="https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/volunter-2-hero.webp"
            alt="Volunteers"
            fill
            sizes="100vw"
            className="object-cover brightness-75 bg-fixed"
            priority
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section
        id="education"
        className="section-padding relative z-10 bg-white"
      >
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Our Ongoing <br />
                <span className="text-primary font-semibold">
                  Community Impact Projects
                </span>
              </h2>
              <p className="body-base">
                We are dedicated to building healthier, stronger communities
                through structured food support programs and environmental
                initiatives. From providing essential nutrition to families in
                need to driving clean-up and restoration efforts for public
                spaces and waterways, each initiative is designed to deliver
                sustainable, long-term impact.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {statistics.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={project.id === 1}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>

                  <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* //TODO : change the images */}
      <section id="health" className="pb-16 md:pb-20 bg-white">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Strengthening Communities Through <br />
            <span className="text-primary italic font-semibold">
              Nutrition & Support Programs
            </span>
          </h2>

          <p className="body-lg max-w-3xl mx-auto mb-12 md:mb-16">
            Our outreach initiatives are designed to address food insecurity and
            promote long-term well-being in underserved communities. By
            providing nutritious meals, essential resources, and structured
            support programs, we help families meet immediate needs while
            building sustainable pathways toward healthier, more stable futures.
            We work closely with local communities to understand their
            challenges, implement practical solutions, and create systems that
            foster resilience, dignity, and lasting empowerment.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-radius shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <div className="mb-6 bg-primary/10 p-4 rounded-full">
                  {prog.icon}
                </div>
                <h4 className="font-bold text-sm leading-snug">{prog.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16 relative">
            <h2 className="text-4xl md:text-5xl font-bold inline-block">
              Our Impact in Empowering{" "}
              <span className="text-primary italic">
                Communities Across Sectors
              </span>
              <div className="h-1.5 w-full bg-primary/30 rounded-full mt-2 -rotate-1"></div>
            </h2>
          </div>

          <div className="space-y-10 md:space-y-12">
            {/* Top 3 */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {impacts.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div
                    className={`flex items-center justify-center h-56 ${item.bgColor}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="bg-primary py-8 px-6 text-center">
                    <p className="text-4xl font-bold text-black mb-2">
                      {item.value}
                    </p>
                    <p className="text-sm font-medium leading-relaxed text-black/80">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom 2 (Centered Properly) */}
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {impacts.slice(3).map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div
                    className={`flex items-center justify-center h-56 ${item.bgColor}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="bg-primary py-8 px-6 text-center">
                    <p className="text-4xl font-bold text-black mb-2">
                      {item.value}
                    </p>
                    <p className="text-sm font-medium leading-relaxed text-black/80">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donate Page Component Placeholder Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
            <div className="max-w-md">
              <h2 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">
                Support Our Mission
              </h2>
              <h3 className="text-4xl font-bold mb-6">
                Help Provide <br />
                <span className="text-primary italic font-semibold">
                  Meals & Hope
                </span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Your contribution enables us to deliver nutritious meals,
                emergency ration kits, and sustainable food security programs to
                underserved families. Whether you make a one-time donation or
                choose to become a monthly supporter, your generosity creates
                meaningful, measurable impact where it is needed most.
              </p>
            </div>

            <div className="flex-1 grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-radius overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src="https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/support-our-mission-1.webp"
                  alt="Community Meals"
                  width={400}
                  height={200}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4 flex flex-col items-center">
                  <h4 className="text-center font-bold text-xs mb-4">
                    Sponsor Community Meal Distribution
                  </h4>
                  <button className="bg-primary text-white px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    <Link href="/donation">Donate Now</Link>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-radius overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src="https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/support-our-mission-2.webp"
                  alt="Nutrition Support"
                  width={400}
                  height={200}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4 flex flex-col items-center">
                  <h4 className="text-center font-bold text-xs mb-4">
                    Support Child Nutrition Programs
                  </h4>
                  <button className="bg-primary text-white px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-wider ">
                    <Link href={"/donation"}> Donate Monthly</Link>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-radius overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src="https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/support-our-mission-3.webp"
                  alt="Emergency Relief"
                  width={400}
                  height={200}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4 flex flex-col items-center">
                  <h4 className="text-center font-bold text-xs mb-4">
                    Provide Emergency Ration Kits
                  </h4>
                  <button className="bg-primary text-white px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    Support A Family
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Impact */}
      <section id="stories" className="section-padding-lg bg-white">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-5xl md:text-6xl font-bold">
              Stories{" "}
              <span className="text-primary italic font-semibold">
                of Transformation
              </span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col md:flex-row gap-10 md:gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="flex-1">
              <h3 className="text-4xl font-bold mb-6 italic text-gray-800">
                Rebuilding Lives Through Community Support
              </h3>

              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  In many underserved communities, limited access to healthcare,
                  quality education, and livelihood opportunities continues to
                  restrict growth and stability. Families often face ongoing
                  challenges in meeting essential needs and building secure
                  futures.
                </p>

                <p>
                  Through our integrated community programs, we provide
                  structured support — including skill development training,
                  educational assistance, health awareness initiatives, and
                  emergency relief services. Each program is thoughtfully
                  designed to address immediate concerns while fostering
                  sustainable, long-term progress.
                </p>

                <p>
                  What begins as timely assistance evolves into lasting
                  empowerment. Individuals gain skills and confidence, families
                  move toward stability, and communities build stronger
                  foundations for collective growth.
                </p>

                <p>
                  With the continued collaboration of our volunteers, partners,
                  and supporters, we are expanding our reach and delivering
                  measurable impact across multiple regions.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full md:w-2/5 relative overflow-hidden rounded-2xl">
              <Image
                src="https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/stories-impact-1.webp"
                alt="Community Support Initiative"
                width={500}
                height={600}
                className="object-cover w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 text-[10px] rounded-full backdrop-blur-sm italic">
                Image used for representational purposes only
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
