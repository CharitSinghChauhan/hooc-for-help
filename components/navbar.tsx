"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Phone,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full flex">
        <Link href={"/"} className="flex flex-col items-center justify-center bg-primary w-45 p-4 shrink-0">
          <div className="bg-black text-white p-2 mb-2 w-full h-20 flex items-center justify-center  ">
            <div className="text-center leading-none">
              <span className="block text-xl font-bold tracking-widest">
                HOOC HELP
              </span>
              <span className="text-[10px] uppercase">Child Rights</span>
            </div>
          </div>
          <span className="text-xs font-medium text-primary-foreground/80">
            www.hooc-help.org
          </span>
        </Link>

        <div className="flex flex-col flex-1">
          <div className="h-12.5 bg-foreground flex items-center justify-end px-8 gap-6 text-white/80">
            <div className="relative group">
              <input
                type="text"
                className="bg-[#333333] text-sm text-white px-4 py-1.5 rounded-full outline-none focus:ring-1 focus:ring-primabg-primary w-50 transition-all"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
            </div>

            <div className="flex items-center gap-1 text-white/50 px-2">•</div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <Link
                href="#"
                className="hover:text-primabg-primary transition-colors"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </Link>
              <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
              <Link
                href="#"
                className="hover:text-primabg-primary transition-colors"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </Link>
              <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
              <Link
                href="#"
                className="hover:text-primabg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
              <Link
                href="#"
                className="hover:text-primabg-primary transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </Link>
              <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
              <Link
                href="#"
                className="hover:text-primabg-primary transition-colors"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </Link>
              <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
              <Link
                href="#"
                className="hover:text-primabg-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
              </Link>{" "}
              {/* WhatsApp equiv */}
            </div>
          </div>

          {/* Main Navigation Bar - White Background */}
          <div className="h-20 bg-white flex items-center justify-between px-10 shadow-sm">
            {/* Navigation Links */}
            <ul className="flex items-center gap-8 text-[#1a1a1a] font-semibold text-sm">
              <li
                className="relative group"
                onMouseEnter={() => setIsHomeOpen(true)}
                onMouseLeave={() => setIsHomeOpen(false)}
              >
                <button
                  onClick={() => setIsHomeOpen(!isHomeOpen)}
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  Home
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${isHomeOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`absolute left-0 mt-0 w-60 bg-white shadow-2xl rounded-radius transition-all duration-300 transform origin-top ${
                    isHomeOpen
                      ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <ul className="py-5">
                    {[
                      { label: "About CRY America", href: "#about" },
                      { label: "Our Impact", href: "#impact" },
                      { label: "Our Focus Areas", href: "#focus" },
                      { label: "Donor Voices", href: "#donor-voices" },
                      { label: "Donate To Make A Difference", href: "#donate" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsHomeOpen(false)}
                          className="block px-10 py-3 font-medium hover:text-primary transition-colors whitespace-nowrap text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  href="/about-us"
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  About Us <ChevronDown className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  Grants <ChevronDown className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  Events <ChevronDown className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  Volunteer <ChevronDown className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li
                className="relative group"
                onMouseEnter={() => setIsWhatWeDoOpen(true)}
                onMouseLeave={() => setIsWhatWeDoOpen(false)}
              >
                <Link
                  href="/what-we-do"
                  className="flex items-center gap-1 hover:text-primabg-primary transition-colors"
                >
                  What We Do{" "}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${isWhatWeDoOpen ? "rotate-180" : ""}`}
                  />
                </Link>

                {/* Dropdown Menu (What We Do) */}
                <div
                  className={`absolute left-0 mt-0 w-60 bg-white shadow-2xl rounded-radius transition-all duration-300 transform origin-top ${
                    isWhatWeDoOpen
                      ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <ul className="py-6">
                    {[
                      { label: "Child Education", href: "/what-we-do" },
                      { label: "Health and Nutrition", href: "#" },
                      { label: "Child Labor", href: "#" },
                      { label: "Girl Child Education", href: "#" },
                      { label: "Child Marriage", href: "#" },
                    ].map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setIsWhatWeDoOpen(false)}
                          className="block px-8 py-2.5 text-[14px] text-black hover:text-primabg-primary transition-colors whitespace-nowrap text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            {/* Donate Button */}
            <Link
              href="/donation"
              className="bg-primary hover:opacity-90 text-primary-foreground font-bold uppercase tracking-wider px-8 py-3 rounded-radius transition-colors text-sm"
            >
              Donate
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-32.5" aria-hidden="true" />
    </>
  );
}
