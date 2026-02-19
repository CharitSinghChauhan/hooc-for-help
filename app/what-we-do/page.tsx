import Image from "next/image";
import { MapPin, Utensils, Heart, Megaphone, Package } from "lucide-react";
import FAQWhatWeDo from "@/components/faq-what-we-do";
import Link from "next/link";

const statistics = [
  {
    id: 1,
    title: "Food Distribution Drive",
    location: "Urban & Rural Communities",
    image: "/food-distribution.jpg",
    goal: "₹5,00,000",
    raised: "₹34,000",
  },
  {
    id: 2,
    title: "Clean Streets Initiative",
    location: "City Public Areas",
    image: "/street-cleaning.jpg",
    goal: "₹3,00,000",
    raised: "₹18,500",
  },
  {
    id: 3,
    title: "River Restoration Program",
    location: "Local Rivers & Water Bodies",
    image: "/river-cleaning.webp",
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
    image: "/impact-1.jpg",
  },
  {
    value: "212,079",
    label: "People supported through education initiatives",
    bgColor: "bg-[#f1f5f9]",
    image: "/impact-2.jpg",
  },
  {
    value: "40,479",
    label: "Families benefited from livelihood programs",
    bgColor: "bg-[#fff1f2]",
    image: "/impact-3.jpg",
  },
  {
    value: "5,311",
    label: "Individuals rehabilitated and reintegrated",
    bgColor: "bg-[#f0fdfa]",
    image: "/impact-4.jpg",
  },
  {
    value: "50,832",
    label: "Community members engaged in local collectives",
    bgColor: "bg-[#fff7ed]",
    image: "/impact-5.jpg",
  },
];

export default function WhatWeDoPage() {
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

      {/* Statistics Section */}
      <section id="education" className="section-padding">
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
                We are committed to building healthier communities through food
                support programs and environmental initiatives. From feeding
                families in need to restoring clean streets and rivers, every
                project is designed to create sustainable impact.
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

                  <div className="flex justify-between items-center mb-6 pt-4 -t -gray-100">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400">
                        Funding Goal
                      </p>
                      <p className="font-bold">{project.goal}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] uppercase font-bold text-gray-400">
                        Funds Raised
                      </p>
                      <p className="font-bold">{project.raised}</p>
                    </div>
                  </div>

                  <button className="w-full bg-primary py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors rounded-xl">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* //TODO : change the images */}
      <section id="health" className="pb-16 md:pb-20">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Strengthening Communities Through <br />
            <span className="text-primary italic font-semibold">
              Nutrition & Support Programs
            </span>
          </h2>

          <p className="body-lg max-w-3xl mx-auto mb-12 md:mb-16">
            Our community outreach initiatives focus on providing nutritious
            meals, essential resources, and long-term support to underserved
            families. We work directly with local communities to address food
            insecurity, improve well-being, and create sustainable systems that
            empower people to build healthier futures.
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

      <section className="pb-16 md:pb-20">
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
      <section className="section-padding">
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
                Your contribution helps us provide nutritious meals, emergency
                ration kits, and long-term food security solutions to
                underserved families. Whether you give once or become a monthly
                supporter, your generosity directly impacts lives in communities
                that need it most.
              </p>
            </div>

            <div className="flex-1 grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-radius overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src="/support-our-mission-1.jpg"
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
                  src="/support-our-mission-2.png"
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
                  src="/support-our-mission-3.png"
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
      <section id="stories" className="section-padding-lg">
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
                  In underserved communities, limited access to healthcare,
                  education, and livelihood opportunities often keeps families
                  trapped in cycles of hardship. Many struggle daily to meet
                  basic needs.
                </p>

                <p>
                  Through our integrated community initiatives, we provide
                  essential support — from skill development and educational
                  assistance to health awareness programs and emergency relief.
                  Each effort is designed to create sustainable, long-term
                  change.
                </p>

                <p>
                  What begins as support often turns into empowerment. Families
                  regain stability, individuals build confidence, and
                  communities grow stronger together.
                </p>

                <p>
                  With the continued support of our volunteers and partners, we
                  are expanding our reach and creating measurable impact across
                  multiple regions.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full md:w-2/5 relative overflow-hidden rounded-2xl">
              <Image
                src="/stories-impact-1.jpg"
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

      {/* Testimonials */}
      <section className="section-padding bg-primary/5">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Testimonials from <br />
            <span className="text-primary italic font-semibold">
              Beneficiaries, Educators, And Parents
            </span>
          </h2>

          <div className="mt-12 md:mt-16">
            <p className="text-lg italic text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 body-lg">
              &quot;What makes Hooc for Help special is the drive and the
              genuineness of the volunteer team, year after year. By adopting
              projects themselves, some of these volunteers have put their money
              where their mouth is. Thank you Hooc for Help for making giving so
              easy and impactful.&quot;
            </p>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl mb-1">Usha Rao</p>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider">
                Hooc for Help Donor
              </p>
              <div className="flex gap-2 mt-6 md:mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${i === 1 ? "bg-primary" : "bg-gray-200"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked{" "}
              <span className="text-primary italic font-semibold">
                Questions
              </span>
            </h2>
          </div>

          <FAQWhatWeDo />
        </div>
      </section>
    </main>
  );
}
