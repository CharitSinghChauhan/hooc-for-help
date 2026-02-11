"use client";

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
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full font-sans bg-white/60 backdrop-blur-md flex ">
        {/* Left Logo Section - Spans both top and bottom height */}
        <div className="flex flex-col items-center justify-center bg-[#F4D03F] w-45 p-4 shrink-0">
          <div className="bg-black text-white p-2 mb-2 w-full h-20 flex items-center justify-center  ">
            {/* Placeholder for the distinctive logo in the image */}
            <div className="text-center leading-none">
              <span className="block text-xl font-bold tracking-widest">
                HOOC HELP
              </span>
              <span className="text-[10px] uppercase">Child Rights</span>
            </div>
          </div>
          <span className="text-xs font-medium text-black/80">
            www.hooc-help.org
          </span>
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col flex-1">
          {/* Top Bar - Black Background */}
          <div className="h-[50px] bg-[#1a1a1a] flex items-center justify-end px-8 gap-6 text-white/80">
            {/* Search Input */}
            <div className="relative group">
              <input
                type="text"
                className="bg-[#333333] text-sm text-white px-4 py-1.5 rounded-full outline-none focus:ring-1 focus:ring-yellow-400 w-[200px] transition-all"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
            </div>

            <div className="flex items-center gap-1 text-white/50 px-2">•</div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <Link href="#" className="hover:text-[#F4D03F] transition-colors">
                <Facebook className="w-4 h-4 fill-current" />
              </Link>
              <div className="w-[2px] h-[2px] bg-white/30 rounded-full" />
              <Link href="#" className="hover:text-[#F4D03F] transition-colors">
                <Twitter className="w-4 h-4 fill-current" />
              </Link>
              <div className="w-[2px] h-[2px] bg-white/30 rounded-full" />
              <Link href="#" className="hover:text-[#F4D03F] transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <div className="w-[2px] h-[2px] bg-white/30 rounded-full" />
              <Link href="#" className="hover:text-[#F4D03F] transition-colors">
                <Youtube className="w-4 h-4" />
              </Link>
              <div className="w-[2px] h-[2px] bg-white/30 rounded-full" />
              <Link href="#" className="hover:text-[#F4D03F] transition-colors">
                <Linkedin className="w-4 h-4 fill-current" />
              </Link>
              <div className="w-[2px] h-[2px] bg-white/30 rounded-full" />
              <Link href="#" className="hover:text-[#F4D03F] transition-colors">
                <Phone className="w-4 h-4" />
              </Link>{" "}
              {/* WhatsApp equiv */}
            </div>
          </div>

          {/* Main Navigation Bar - White Background */}
          <div className="h-[80px] bg-white flex items-center justify-between px-10 shadow-sm">
            {/* Navigation Links */}
            <ul className="flex items-center gap-8 text-[#1a1a1a] font-medium text-[15px]">
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-1 hover:text-[#D4B020] transition-colors"
                >
                  Home <ChevronDown className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-1 hover:text-[#D4B020] transition-colors"
                >
                  About Us <ChevronDown className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-1 hover:text-[#D4B020] transition-colors"
                >
                  Grants <ChevronDown className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-1 hover:text-[#D4B020] transition-colors"
                >
                  Events <ChevronDown className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-1 hover:text-[#D4B020] transition-colors"
                >
                  Volunteer <ChevronDown className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-1 hover:text-[#D4B020] transition-colors"
                >
                  What We Do <ChevronDown className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>

            {/* Donate Button */}
            <Link
              href="#"
              className="bg-[#F4D03F] hover:bg-[#eac42e] text-black font-bold uppercase tracking-wider px-8 py-3 rounded-sm transition-colors text-sm"
            >
              Donate
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-[130px]" aria-hidden="true" />
    </>
  );
}
