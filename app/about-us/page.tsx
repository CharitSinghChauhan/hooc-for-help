"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Target, Users, Globe, Award } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <main className="min-h-screen text-foreground">
      <section className="relative w-full h-screen">
        {/* Fixed Background Image */}
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
          <Image
            src="/about-us-hero.webp"
            alt="About Hooc for Help"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section
        className="section-padding bg-gradient-to-b from-gray-50 to-white relative z-10"
        id="our-vision"
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-primabg-primary">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primabg-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To build a future where every underserved community has equal
                access to education, healthcare, livelihood opportunities, and
                sustainable resources, enabling individuals to live with
                dignity, independence, and opportunity.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-primabg-primary">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="w-7 h-7 text-primabg-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our mission is to design and implement community-led programs
                that strengthen education, improve health outcomes, promote
                financial independence, and foster sustainable development,
                ensuring every individual has the opportunity to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section ref={ref} className="section-padding bg-[#1a1a1a] text-white">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact So Far
            </h2>
            <div className="w-24 h-1 bg-[#FCDA16] mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: 120000, label: "Lives Impacted", icon: Users },
              { number: 50, label: "Communities Reached", icon: Globe },
              { number: 15000, label: "Children Educated", icon: Award },
              { number: 5000, label: "Families Supported", icon: Heart },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#FCDA16]/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#FCDA16]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#FCDA16] mb-2">
                  {inView ? (
                    <CountUp
                      end={stat.number}
                      duration={2}
                      separator=","
                      enableScrollSpy={false}
                    />
                  ) : (
                    "0"
                  )}
                  +
                </div>
                <div className="text-white/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We work across multiple domains to create comprehensive solutions
              for community development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                img: "/about-us-mission-1.webp",
                title: "Education",
                description:
                  "Providing quality education and skill development to underprivileged children and youth",
              },
              {
                img: "/impact-4.webp",
                title: "Healthcare",
                description:
                  "Ensuring access to quality healthcare and medical assistance for rural communities",
              },
              {
                img: "/about-us-mission-3.webp",
                title: "Environmental Sustainability",
                description:
                  "Promoting eco-friendly practices and sustainable community development",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 md:h-56 w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-400 text-black font-bold px-8 py-3 rounded-sm transition-colors"
            >
              Learn More About Our Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="our-team" className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          </div>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/our-team-image.webp"
              alt="Our Team"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Pledge */}
      <section className="section-padding bg-gray-50" id="pledge">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/pledge.webp"
                alt="The Hooc for Help Pledge"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Hooc for Help Pledge
              </h2>
              <div className="w-24 h-1 bg-primary mb-6" />
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
