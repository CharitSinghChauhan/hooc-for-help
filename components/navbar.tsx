"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    (async () => {
      setIsMobileMenuOpen(false);
    })();
  }, [pathname]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about-us" },
    { name: "WHAT WE DO", href: "/what-we-do" },
    { name: "wesbite", href: "https://www.hooc.tech" },
  ];

  /* 
    The navbar text should be black if:
    1. We have scrolled down (isScrolled is true)
    2. OR we are on specific pages like "/about-us" where the background is light
  */
  const isDarkText = isScrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 font-gochi ",
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-3xl font-bold tracking-wider",
            isDarkText ? "text-black" : "text-white",
          )}
        >
          Hooc For Help
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-lg font-medium hover:opacity-80 transition-colors uppercase tracking-wide",
                isDarkText ? "text-black" : "text-white",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Donate Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/donation"
            className={cn(
              "px-6 py-2 rounded-full font-bold transition-colors uppercase tracking-wider text-sm bg-primary text-black",
            )}
          >
            DONATE NOW
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              className={cn(
                "h-6 w-6",
                isDarkText ? "text-black" : "text-white",
              )}
            />
          ) : (
            <Menu
              className={cn(
                "h-6 w-6",
                isDarkText ? "text-black" : "text-white",
              )}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black text-xl font-medium hover:text-gray-600 uppercase"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donation"
            className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 uppercase tracking-wider mt-4"
          >
            DONATE NOW
          </Link>
        </div>
      )}
    </nav>
  );
}
