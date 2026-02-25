"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronRight,
  Heart,
  Sparkles,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import FAQ from "@/components/faq";

const amounts = [
  { amount: "₹2,000", impact: "Provides school supplies for 2 children" },
  { amount: "₹4,000", impact: "Feeds a family of 4 for a month" },
  { amount: "₹8,000", impact: "Sponsors one child's education for a year" },
  { amount: "₹20,000", impact: "Provides healthcare for 5 children" },
  { amount: "₹40,000", impact: "Supports a community literacy program" },
  { amount: "Other", impact: "Any amount makes a difference!" },
];

const projects = [
  {
    name: "Project VSS",
    location: "Madhya Pradesh",
    goal: "₹50,00,000",
    raised: "₹20,00,000",
    progress: 39,
    img: "/donate-support-1.webp",
    description: "Education & empowerment for rural communities",
  },
  {
    name: "Project KAS",
    location: "Rajasthan",
    goal: "₹24,50,000",
    raised: "₹15,00,000",
    progress: 62,
    img: "/donate-support-2.webp",
    description: "Skill development for tribal youth",
  },
  {
    name: "Project Pragathi",
    location: "Andhra Pradesh",
    goal: "₹45,00,000",
    raised: "₹35,00,000",
    progress: 78,
    img: "/impact-2.webp",
    description: "education initiative",
  },
  {
    name: "Project Sikshasandhan",
    location: "Odisha",
    goal: "₹22,00,000",
    raised: "₹7,50,000",
    progress: 34,
    img: "/support-a-project-1.webp",
    description: "Early childhood development program",
  },
];

const otherWays = [
  {
    title: "Check Donation & ACH",
    description: "Send your donation via check or bank transfer",
  },
  {
    title: "Monthly Giving Program",
    description: "Become a monthly donor for sustained impact",
  },
  {
    title: "Corporate Matching",
    description: "Double your impact through employer matching",
  },
  {
    title: "Corporate Partnerships",
    description: "Partner with us for CSR initiatives",
  },
  {
    title: "Donate Your Birthday",
    description: "Ask friends to donate instead of gifts",
  },
  { title: "Stock Donations", description: "Donate appreciated securities" },
  {
    title: "Legacy Giving",
    description: "Include us in your will or estate plan",
  },
];

const impactStats = [
  { number: "342", label: "Individuals Reached", icon: Users },
  { number: "212", label: "Educated & Skilled", icon: Sparkles },
  { number: "400", label: "Families Supported", icon: Heart },
  { number: "531", label: "Rehabilitated", icon: Shield },
];

const testimonials = [
  {
    quote:
      "Donating to HOOC has been the most fulfilling experience. Seeing the progress in the communities we support keeps me motivated to continue giving.",
    name: "Priya Sharma",
    role: "Monthly Donor since 2021",
  },
  {
    quote:
      "The transparency and impact reports from HOOC make me confident that every rupee I donate is making a real difference in children's lives.",
    name: "Rajesh Kumar",
    role: "Corporate Partner",
  },
];

const DonationForm = ({
  selectedTab,
  setSelectedTab,
  selectedAmount,
  setSelectedAmount,
  customAmount,
  setCustomAmount,
  currentImpact,
  className = "",
  id = "donate-form",
}: {
  selectedTab: string;
  setSelectedTab: (val: string) => void;
  selectedAmount: string;
  setSelectedAmount: (val: string) => void;
  customAmount: string;
  setCustomAmount: (val: string) => void;
  currentImpact: string;
  className?: string;
  id?: string;
}) => (
  <div
    id={id}
    className={`bg-white rounded-3xl shadow-2xl overflow-hidden ${className}`}
  >
    <div className="bg-gradient-to-r from-primary to-primary/80 p-6">
      <h3 className="text-2xl font-bold text-white text-center">
        Make Your Donation
      </h3>
      <p className="text-white/80 text-center text-sm mt-1">
        Choose amount and payment method
      </p>
    </div>

    <div className="p-6 space-y-6">
      {/* Donation Type Tabs */}
      <div className="flex bg-gray-100 rounded-xl p-1">
        {[
          { id: "one-time", label: "One-Time" },
          { id: "monthly", label: "Monthly" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${
              selectedTab === tab.id
                ? "bg-white text-primary shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Amount Selection */}
      <div>
        <label className="text-sm font-semibold text-gray-700 mb-3 block">
          Select Amount
        </label>
        <div className="grid grid-cols-3 gap-3">
          {amounts.map((amt) => (
            <button
              key={amt.amount}
              onClick={() => {
                setSelectedAmount(amt.amount);
                setCustomAmount("");
              }}
              className={`py-4 rounded-xl text-lg font-bold transition-all ${
                selectedAmount === amt.amount
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {amt.amount}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div>
        <label className="text-sm font-semibold text-gray-700 mb-2 block">
          Or enter custom amount
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
            ₹
          </span>
          <input
            type="number"
            placeholder="Enter amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount("");
            }}
            className="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Impact Message */}
      <div className="bg-primary/10 rounded-xl p-4 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-700">
          <span className="font-bold">
            {selectedAmount || customAmount || "₹8,000"}
          </span>{" "}
          {currentImpact || "makes a real difference"}
        </p>
      </div>

      {/* Donate Button */}
      <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] text-lg">
        Donate {selectedAmount || customAmount || "₹8,000"}
      </button>
    </div>
  </div>
);

export default function DonationPage() {
  const [selectedTab, setSelectedTab] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState("₹8,000");
  const [customAmount, setCustomAmount] = useState("");

  const currentImpact =
    amounts.find((a) => a.amount === selectedAmount)?.impact || "";

  return (
    <main className="min-h-screen bg-white">
      {/* Fixed Background Image */}
      <div className="h-screen">
        <Image
          src="/hero-2.webp"
          alt="Children learning"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Donation Form Section */}
      <section
        className="pb-16 bg-gray-50 relative z-20 px-4"
        id="donate-form"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="text-black space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Give the Gift of{" "}
                  <span className="text-primabg-primary">Hope</span>
                </h1>
                <p className="text-lg md:text-xl text-black/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Every contribution transforms lives. Join thousands of donors
                  creating brighter futures for children and communities in
                  need.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  <button
                    onClick={() => {
                      document
                        .getElementById("donate-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-primary hover:bg-[#e5c714] text-black font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-2"
                  >
                    Donate Now <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-black font-bold px-8 py-4 rounded-xl transition-all border border-black/10"
                    onClick={() => {
                      // Scroll to same section or specific projects section if needed
                      document
                        .getElementById("donate-form-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Support a Project
                  </button>
                </div>
              </div>
            </div>
            <div className="max-w-xl mx-auto w-full bg-white rounded-3xl shadow-xl overflow-hidden mt-8 lg:mt-0">
              <DonationForm
                id="donate-form"
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                selectedAmount={selectedAmount}
                setSelectedAmount={setSelectedAmount}
                customAmount={customAmount}
                setCustomAmount={setCustomAmount}
                currentImpact={currentImpact}
                className="shadow-none rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-16 bg-primary" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primabg-primary" />
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Giving Section */}
      <section
        id="monthly"
        className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-primabg-primary" />
                <span className="font-bold text-sm text-primary">
                  Monthly Giving
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Join Our <span className="text-primary">Giving Circle</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Monthly donors provide steady, reliable support that enables us
                to plan long-term programs and create lasting change. Your
                recurring gift multiplies its impact over time.
              </p>
              <ul className="space-y-3">
                {[
                  "Consistent support for children year-round",
                  "Quarterly impact reports with progress updates",
                  "Special recognition in our annual report",
                  "Cancel or modify anytime",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105">
                Become a Monthly Donor
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primabg-primary rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Monthly Giving Benefits
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      amount: "₹2,000/month",
                      impact: "Provides monthly nutrition for 2 children",
                    },
                    {
                      amount: "₹4,000/month",
                      impact: "Sponsors one child's school supplies",
                    },
                    {
                      amount: "₹8,000/month",
                      impact: "Funds entire classroom activities",
                    },
                  ].map((plan, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors"
                    >
                      <span className="font-bold text-primary">
                        {plan.amount}
                      </span>
                      <span className="text-sm text-gray-600">
                        {plan.impact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="project" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Support Our <span className="text-primary">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose a specific project to support. You&apos;ll receive regular
              updates and have the opportunity to connect directly with the
              project team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {project.location}
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Donate */}
      <section id="other" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Other Ways to <span className="text-primary">Give</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the giving method that works best for you. Every way of
              giving creates impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherWays.map((way, i) => (
              <button
                key={i}
                className="bg-white hover:bg-primary hover:text-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-left group"
              >
                <h3 className="font-bold text-lg mb-2 group-hover:text-white">
                  {way.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80">
                  {way.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-primary">Donors Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div>
                    <p className="text-gray-700 italic mb-4">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="pb-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              href="mailto:hoocforhelp@gmail.com"
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-xl transition-all inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
