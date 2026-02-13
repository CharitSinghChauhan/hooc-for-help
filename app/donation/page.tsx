"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Awards from "@/components/awards";
import { ChevronRight } from "lucide-react";

const amounts = ["$49", "$99", "$159", "$196", "$340", "Other"];

const projects = [
  {
    name: "Project VSS",
    location: "Madhya Pradesh",
    goal: "$62,193",
    raised: "$0",
    img: "/Donate_4.jpg",
  },
  {
    name: "Project KAS",
    location: "Rajasthan",
    goal: "$29,531",
    raised: "$0",
    img: "/Thumbnail-Pragathi.jpg",
  },
  {
    name: "Project Pragathi",
    location: "Andhra Pradesh",
    goal: "$53,986",
    raised: "$0",
    img: "/Donate.jpg",
  },
  {
    name: "Project Sikshasandhan",
    location: "Odisha",
    goal: "$26,248",
    raised: "$0",
    img: "/Donate-1.jpg",
  },
  {
    name: "Project CHARDS",
    location: "Bihar",
    goal: "$31,385",
    raised: "$0",
    img: "/mission-1-uai-516x503-1.jpg",
  },
  {
    name: "Project EFFORT",
    location: "Telangana",
    goal: "$41,517",
    raised: "$0",
    img: "/mission-2-uai-516x503-1.jpg",
  },
  {
    name: "Project VSS",
    location: "Baran",
    goal: "$19,274",
    raised: "$0",
    img: "/mission-3-uai-516x503-1.jpg",
  },
  {
    name: "Project SWATI",
    location: "Odisha",
    goal: "$31,274",
    raised: "$0",
    img: "/two-girls-1.jpg",
  },
];

const otherWays = [
  "CHECK DONATION & ACH DONATION",
  "MONTHLY DONATIONS - BANK TRANSFER/ ACH",
  "CORPORATE MATCHING GIFTS",
  "CORPORATES AND FOUNDATIONS",
  "PLEDGE YOUR SPECIAL DAY TO CHILDREN!",
  "STOCK DONATIONS",
  "LEGACY GIVING",
];

const impactCards = [
  {
    img: "/Children-impacted-overall.png",
    number: "825,539",
    label: "Children impacted overall",
    bg: "bg-[#f7f7fb]",
  },
  {
    img: "/Children-6-18-years-in-schools.png",
    number: "342,558",
    label: "6–18 years children in schools",
    bg: "bg-[#fff5f7]",
  },
  {
    img: "/0-1-years-children-fully-immunized.png",
    number: "239,996",
    label: "0–1 years children fully immunized",
    bg: "bg-[#f0fbff]",
  },
  {
    img: "/Govt.-schools-approved-or-strengthened.png",
    number: "1,699",
    label: "Public schools activated",
    bg: "bg-[#fafafa]",
  },
];

export default function DonationPage() {
  const [selectedTab, setSelectedTab] = useState("DONATE NOW");
  const [selectedAmount, setSelectedAmount] = useState("$99");

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-gochi text-gray-900 leading-tight">
                Your contribution <br />
                will transform a <br />
                child&apos;s life
              </h1>

              {/* Donation Form Card */}
              <div className="bg-white rounded-[var(--radius)] shadow-xl overflow-hidden max-w-lg border border-gray-100">
                <div className="flex bg-gray-50 border-b">
                  {["DONATE NOW", "DONATE MONTHLY", "SUPPORT A PROJECT"].map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`flex-1 py-3 text-[10px] md:text-xs font-bold transition-colors ${
                          selectedTab === tab
                            ? "bg-white text-gray-900"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {tab}
                      </button>
                    ),
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <label className="flex items-start gap-3 bg-[var(--primary)] p-3 rounded-[var(--radius)] cursor-pointer group">
                    <input
                      type="checkbox"
                      className="mt-1 accent-gray-900"
                      defaultChecked
                    />
                    <span className="text-[11px] md:text-xs font-semibold text-[var(--primary-foreground)] leading-snug">
                      Yes, I believe every child has the right to a happy &
                      healthy childhood. (Please choose an amount to donate)
                    </span>
                  </label>

                  <div className="grid grid-cols-3 gap-2">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setSelectedAmount(amt)}
                        className={`py-3 rounded-[var(--radius)] text-[13px] md:text-base font-bold transition-all ${
                          selectedAmount === amt
                            ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
                            : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                        }`}
                      >
                        {amt}
                      </button>
                    ))}
                  </div>

                  <p className="text-center text-xs text-gray-600 font-medium py-2">
                    {selectedAmount === "$99"
                      ? "Help 9 girls in villages pursue higher education"
                      : "Your support makes a difference"}
                  </p>

                  <button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] font-bold py-3 rounded-[var(--radius)] shadow-sm transition-colors text-sm uppercase tracking-wider">
                    Make Donation
                  </button>

                  <div className="flex justify-center gap-6 text-[10px] md:text-xs font-bold text-gray-900 mt-2">
                    <Link href="#" className="underline">
                      Donate by Check
                    </Link>
                    <Link href="#" className="underline">
                      Donate by ACH
                    </Link>
                  </div>

                  <p className="text-[10px] text-gray-500 text-center leading-tight">
                    CRY America is a 501(c)3 exempt organization and all
                    donations are tax deductible.
                  </p>

                  <div className="flex justify-center gap-2 pt-2 grayscale opacity-60">
                    <Image
                      src="/next.svg"
                      alt="Visa"
                      width={30}
                      height={20}
                      className="w-auto h-4"
                    />
                    <Image
                      src="/vercel.svg"
                      alt="Mastercard"
                      width={30}
                      height={20}
                      className="w-auto h-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/one-time-donation-1.webp"
                alt="Child smiling"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-gochi text-gray-900">
                  Why Donate
                </h2>
                <div className="w-20 h-1 bg-[var(--primary)]" />
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed font-sans text-sm md:text-base">
                <p>
                  Your contribution to CRY America will enable children to
                  complete their education, get proper nutrition and healthcare
                  and stay protected from abuse and exploitation.
                </p>
                <p>
                  We cannot do the work that we do without your support and it
                  will need each and every one of us to come together to ensure
                  happier childhoods for children everywhere!
                </p>
                <p>All donations to CRY America are tax-deductible.</p>
              </div>
              <button className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] font-bold px-8 py-3 rounded-[var(--radius)] shadow-sm transition-colors text-sm uppercase">
                Donate Now
              </button>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                <div className="absolute inset-0 rounded-full border-[15px] border-[var(--primary)]/20 animate-pulse" />
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <Image
                    src="/home-about.webp"
                    alt="Child in frame"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Giving Circle */}
      <section className="py-20 bg-[var(--primary)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <div className="absolute inset-0 rounded-full border-[10px] border-[var(--primary)]" />
                <div className="absolute inset-3 rounded-full overflow-hidden">
                  <Image
                    src="/monthly-donation.webp"
                    alt="Monthly giving"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-gochi text-gray-900 leading-tight">
                  Join Our Monthly <br />
                  Giving Circle
                </h2>
                <div className="w-20 h-1 bg-[#FCDA16]" />
              </div>
              <p className="text-gray-600 leading-relaxed font-sans text-sm md:text-base">
                Join our monthly giving community that aims to create a larger
                impact. Regular monthly contributions not only give
                underprivileged children the steady support they need but also
                help us plan for the long term in a more sustainable manner.
              </p>
              <p className="text-gray-600 leading-relaxed font-sans text-sm md:text-base">
                You can choose to donate monthly through credit cards or even
                through a direct bank transfer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] font-bold px-6 py-3 rounded-[var(--radius)] shadow-sm transition-colors text-xs uppercase tracking-wider">
                  Donate by Credit Card
                </button>
                <button className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] font-bold px-6 py-3 rounded-[var(--radius)] shadow-sm transition-colors text-xs uppercase tracking-wider">
                  Donate by Bank Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support A Project */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-gochi text-gray-900 mb-6 font-medium">
            Support A Project
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 mb-12 font-sans text-sm md:text-base leading-relaxed">
            If you wish to donate $2,500 or more, you can support an entire or
            part of a CRY America Project. Select a Project of your choice and
            we will send you progress reports and organize a year end zoom call
            with the Project Partner that will help track the impact you have
            enabled in the lives of children.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="group bg-white rounded-[var(--radius)] border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden rounded-t-[var(--radius)]">
                  <Image
                    src={proj.img}
                    alt={proj.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col items-center">
                  <h3 className="font-bold text-sm text-gray-900 uppercase tracking-tight">
                    {proj.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{proj.location}</p>

                  <div className="grid grid-cols-2 w-full gap-4 mt-4 text-center">
                    <div>
                      <p className="text-[10px] font-bold text-gray-900">
                        {proj.goal}
                      </p>
                      <p className="text-[9px] text-gray-400 uppercase">
                        Funding Goal
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-900">
                        {proj.raised}
                      </p>
                      <p className="text-[9px] text-gray-400 uppercase">
                        Funds Raised
                      </p>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-black text-white text-[10px] font-bold py-2 rounded-[var(--radius)] uppercase tracking-wider hover:bg-gray-800 transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] font-bold px-10 py-3 rounded-[var(--radius)] shadow-sm transition-all text-xs uppercase tracking-widest">
            View More
          </button>
        </div>
      </section>

      {/* Other Ways To Donate */}
      <section className="py-24 bg-[var(--primary)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-gochi text-gray-900 mb-2">
              Other Ways To Donate
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-8" />
            <p className="text-gray-600 font-sans">
              There are so many ways to create happy childhoods and ensure that
              children have a chance at a brighter future!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-3">
              {otherWays.map((way, i) => (
                <button
                  key={i}
                  className="w-full flex items-center justify-between bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] px-6 py-5 rounded-[var(--radius)] transition-all text-left group"
                >
                  <span className="text-xs font-bold tracking-wider">
                    {way}
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/other-ways-to-donate.png"
                alt="Other ways to donate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Your Donations Are Used */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-gochi text-gray-900 mb-4">
            How Your Donations Are Used
          </h2>
          <p className="text-gray-600 mb-12 font-sans">
            Here is how your contributions are used to create impact for
            vulnerable children!
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100">
              <Image
                src="/donutchart.png"
                alt="Donation usage chart"
                width={700}
                height={400}
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-gochi text-gray-900 mb-2">
            Our Impact
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-8" />
          <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
            There is nothing more precious than a child&apos;s smile. Since
            2004, CRY America has helped create more than 800,000 happy
            childhoods thanks to supporters like YOU!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactCards.map((card, i) => (
              <div
                key={i}
                className="flex flex-col rounded-[var(--radius)] overflow-hidden border border-gray-100 shadow-sm transition-transform hover:translate-y-[-4px]"
              >
                <div
                  className={`${card.bg} py-8 px-4 flex justify-center items-center h-40`}
                >
                  <Image
                    src={card.img}
                    alt={card.label}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="bg-[var(--primary)] py-8 text-[var(--primary-foreground)]">
                  <span className="block text-3xl font-bold mb-1">
                    {card.number}
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-tight px-4 leading-tight">
                    {card.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-16 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] font-bold px-10 py-3 rounded-[var(--radius)] shadow-sm transition-all text-xs uppercase tracking-widest">
            View More
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-gochi text-gray-900 mb-2 text-center">
            What Our Donors Have To Say
          </h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-16" />
          <div className="bg-white">
            <div className="max-w-4xl mx-auto p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
              <p className="text-lg text-gray-600 italic leading-relaxed mb-8">
                &quot;Yogita Maghnani, Seattle Volunteer: Child marriage takes
                away a girl&apos;s right to a happy childhood. It forces her to
                give up her education &amp; family to take on the role of a wife
                at a very young age. The girl child may not be ready to handle
                pregnancies, leading to complications for both the mom and baby.
                She deserves to enjoy her childhood, play and go to school just
                like a male child; contribute to the family and society at her
                own terms; choose to marry when she is physically and
                emotionally ready to build her own family.&quot;
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--primary)] mb-4">
                  <Image
                    src="/Vol-61.png"
                    alt="Yogita Maghnani"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-gray-900">Yogita Maghnani</h4>
                <p className="text-xs text-gray-500 uppercase">
                  CRY America Volunteer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Awards />
      <Footer />
    </main>
  );
}
