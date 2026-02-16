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
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full flex">
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center bg-primary w-32 md:w-45 p-4 shrink-0"
        >
          <div className="bg-black text-white p-2 mb-2 w-full h-20 flex items-center justify-center">
            <div className="text-center leading-none">
              <span className="block text-xl font-bold tracking-widest">
                HOOC HELP
              </span>
              <span className="text-[10px] uppercase">
                Empowerment Alliance
              </span>
            </div>
          </div>
          <span className="text-xs font-medium text-primary-foreground/80">
            www.hooc-help.org
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-col flex-1">
          <div className="h-12.5 bg-foreground flex items-center justify-end px-8 gap-6 text-white/80">
            <div className="relative group">
              <input
                type="text"
                className="bg-[#333333] text-sm text-white px-4 py-1.5 rounded-full outline-none focus:ring-1 focus:ring-primary w-50 transition-all"
                placeholder="Search"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
            </div>

            <div className="flex items-center gap-1 text-white/50 px-2">•</div>
            <div className="flex items-center gap-5">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-4 h-4 fill-current" />
              </Link>
              <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-4 h-4 fill-current" />
              </Link>
              <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
              <Link href="#" className="hover:text-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </Link>
              <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4 fill-current" />
              </Link>
              <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
              <Link href="#" className="hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="h-20 bg-white flex items-center justify-between px-10 shadow-sm">
            <ul className="flex flex-wrap items-center gap-8 text-[#1a1a1a] font-semibold text-sm">
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
                      { label: "About Hooc Help", href: "#about" },
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
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  What We Do{" "}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${isWhatWeDoOpen ? "rotate-180" : ""}`}
                  />
                </Link>

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
                          className="block px-8 py-2.5 text-[14px] text-black hover:text-primary transition-colors whitespace-nowrap text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <Link
              href="/donation"
              className="bg-primary hover:opacity-90 text-primary-foreground font-bold uppercase tracking-wider px-8 py-3 rounded-radius transition-colors text-sm"
            >
              Donate
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-1 flex-col">
          <div className="h-16 bg-white flex items-center justify-between px-4 shadow-sm">
            <div className="flex items-center gap-3">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#1a1a1a]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#1a1a1a]" />
                )}
              </button>
            </div>

            <Link
              href="/donation"
              className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-md text-sm transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Drawer */}
          {isMobileMenuOpen && (
            <div className="bg-white border-t">
              <div className="px-4 py-3 space-y-3">
                <div>
                  <button
                    className="flex items-center justify-between w-full font-semibold text-[#1a1a1a]"
                    onClick={() => setIsHomeOpen(!isHomeOpen)}
                  >
                    <span>Home</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isHomeOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isHomeOpen && (
                    <div className="mt-2 pl-4 space-y-2 text-sm">
                      {[
                        { label: "About Hooc Help", href: "#about" },
                        { label: "Our Impact", href: "#impact" },
                        { label: "Our Focus Areas", href: "#focus" },
                        { label: "Donor Voices", href: "#donor-voices" },
                        {
                          label: "Donate To Make A Difference",
                          href: "#donate",
                        },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setIsHomeOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                          className="block py-1.5 text-gray-700 hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t pt-3">
                  <Link
                    href="/about-us"
                    className="block py-2 font-semibold text-[#1a1a1a] hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 font-semibold text-[#1a1a1a] hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Grants
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 font-semibold text-[#1a1a1a] hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Events
                  </Link>
                  <Link
                    href="/volunteer"
                    className="block py-2 font-semibold text-[#1a1a1a] hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Volunteer
                  </Link>
                </div>

                <div className="border-t pt-3">
                  <button
                    className="flex items-center justify-between w-full font-semibold text-[#1a1a1a]"
                    onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                  >
                    <span>What We Do</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isWhatWeDoOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isWhatWeDoOpen && (
                    <div className="mt-2 pl-4 space-y-2 text-sm">
                      {[
                        { label: "Child Education", href: "/what-we-do" },
                        { label: "Health and Nutrition", href: "#" },
                        { label: "Child Labor", href: "#" },
                        { label: "Girl Child Education", href: "#" },
                        { label: "Child Marriage", href: "#" },
                      ].map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => {
                            setIsWhatWeDoOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                          className="block py-1.5 text-gray-700 hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="h-32.5" aria-hidden="true" />
    </>
  );
}
