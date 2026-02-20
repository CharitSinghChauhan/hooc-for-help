"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

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

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full z-40 bg-transparent font-gochi"
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isScrolled ? "30%" : "0%",
          opacity: isScrolled ? 0 : 1,
          z: isScrolled ? 0.95 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold tracking-wider text-white font-gochi"
          >
            Hooc For Help
          </Link>
          <div className="hidden md:flex items-center space-x-8 font-gochi">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white hover:opacity-80 transition-all uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:block font-gochi">
            <Link
              href="/donation"
              className="px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm bg-primary text-black"
            >
              DONATE NOW
            </Link>
          </div>
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.div>

      {/* 2. White "Roller" Navbar (Slides down from top when scrolled) */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isScrolled ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md font-gochi"
      >
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold tracking-wider text-black"
          >
            Hooc For Help
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-black hover:opacity-80 transition-all uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <Link
              href="/donation"
              className="px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm bg-primary text-black"
            >
              DONATE NOW
            </Link>
          </div>
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed top-[60px] left-0 w-full md:hidden bg-white shadow-lg flex flex-col items-center py-6 space-y-4 transition-transform duration-300 ease-in-out z-40",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-[150%]",
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-black text-xl font-medium hover:text-gray-600 uppercase"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/donation"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 uppercase tracking-wider mt-4"
        >
          DONATE NOW
        </Link>
      </div>
    </>
  );
}
