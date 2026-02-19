"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  FacebookIcon,
} from "lucide-react";

// Dropdown menu items configuration
const menuItems = {
  home: [
    { label: "About Hooc for Help", href: "/#about" },
    { label: "Our Impact", href: "/#impact" },
    { label: "Our Focus Areas", href: "/#focus" },
    { label: "Donate To Make A Difference", href: "/#donate" },
  ],
  aboutUs: [
    { label: "Our Mission", href: "/about-us#our-mission" },
    { label: "Our Vision", href: "/about-us#our-vision" },
    { label: "Our Story", href: "/about-us#our-team" },
    { label: "Financials", href: "/about-us#our-financials" },
  ],
  volunteer: [
    { label: "Become a Volunteer", href: "/volunteer#join" },
    { label: "Volunteer Stories", href: "/volunteer#stories" },
    { label: "Volunteer Benefits", href: "/volunteer#benefits" },
  ],
  whatWeDo: [
    { label: "Our Programs", href: "/what-we-do#education" },
    { label: "Health & Nutrition", href: "/what-we-do#health" },
    { label: "Impact Stories", href: "/what-we-do#stories" },
    { label: "FAQ", href: "/what-we-do#faq" },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  const isActivePage = (dropdown: string) => {
    const pageMap: Record<string, string> = {
      home: "/",
      aboutUs: "/about-us",
      volunteer: "/volunteer",
      whatWeDo: "/what-we-do",
    };
    return pathname === pageMap[dropdown];
  };

  return (
    <>
      <nav
        ref={dropdownRef}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="hidden lg:block bg-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-12 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <input
                    type="text"
                    className="bg-[#333333] text-sm text-white px-4 py-1.5 rounded-full outline-none focus:ring-1 focus:ring-primary w-48 transition-all"
                    placeholder="Search"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Link href="#" className="hover:text-primary transition-colors">
                  <FacebookIcon size={20} className="fill-white" />
                </Link>
                <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
                <Link href="#" className="hover:text-primary transition-colors">
                  <Twitter size={20} className="fill-white" />
                </Link>
                <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
                <Link href="#" className="hover:text-primary transition-colors">
                  <Instagram size={20} className="fill-white" />
                </Link>
                <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
                <Link href="#" className="hover:text-primary transition-colors">
                  <Youtube size={20} className="fill-white" />
                </Link>
                <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
                <Link href="#" className="hover:text-primary transition-colors">
                  <Linkedin size={20} className="fill-white" />
                </Link>
                <div className="w-0.5 h-0.5 bg-white/30 rounded-full" />
                <Link
                  href="mailto:hoocforhelp@gmail.com"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <Phone size={20} className="fill-white" />
                  <span className="text-xs">Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col items-start shrink-0"
              onClick={handleDropdownClose}
            >
              <div className="bg-black text-white px-3 py-2">
                <div className="text-center leading-none">
                  <span className="block text-lg sm:text-xl font-bold tracking-widest">
                    HOOC FOR HELP
                  </span>
                  <span className="text-[8px] sm:text-[10px] uppercase block">
                    Empowerment Alliance
                  </span>
                </div>
              </div>
            </Link>
            <div className="hidden lg:flex items-center gap-2">
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("home")}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                    isActivePage("Home")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  } font-semibold text-sm`}
                >
                  Home
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      openDropdown === "home" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "home" && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-xl rounded-lg border border-gray-100 py-2 animate-fadeIn">
                    {menuItems.home.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleDropdownClose}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About Us Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("aboutUs")}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                    isActivePage("aboutUs")
                      ? "text-primary"
                      : "text-[#1a1a1a] hover:text-primary"
                  } font-semibold text-sm`}
                >
                  About Us
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      openDropdown === "aboutUs" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "aboutUs" && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-xl rounded-lg border border-gray-100 py-2 animate-fadeIn">
                    {menuItems.aboutUs.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleDropdownClose}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Volunteer Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("volunteer")}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                    isActivePage("volunteer")
                      ? "text-primary"
                      : "text-[#1a1a1a] hover:text-primary"
                  } font-semibold text-sm`}
                >
                  Volunteer
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      openDropdown === "volunteer" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "volunteer" && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-xl rounded-lg border border-gray-100 py-2 animate-fadeIn">
                    {menuItems.volunteer.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleDropdownClose}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* What We Do Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("whatWeDo")}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                    isActivePage("whatWeDo")
                      ? "text-primary"
                      : "text-[#1a1a1a] hover:text-primary"
                  } font-semibold text-sm`}
                >
                  What We Do
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      openDropdown === "whatWeDo" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "whatWeDo" && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-xl rounded-lg border border-gray-100 py-2 animate-fadeIn">
                    {menuItems.whatWeDo.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleDropdownClose}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Donate Button */}
              <Link
                href="/donation"
                className="ml-4 bg-primary hover:opacity-90 text-primary-foreground font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                Donate
              </Link>
            </div>

            {/* Tablet Navigation (between lg and md) */}
            <div className="hidden md:flex lg:hidden items-center gap-2">
              {/* Simplified nav for tablet - show main links with dropdowns */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("menu")}
                  className="flex items-center gap-1 px-3 py-2 text-[#1a1a1a] hover:text-primary font-semibold text-sm"
                >
                  Menu
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      openDropdown === "menu" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "menu" && (
                  <div className="absolute right-0 top-full mt-1 w-64 bg-white shadow-xl rounded-lg border border-gray-100 py-2 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <span className="text-xs font-semibold text-gray-400 uppercase">
                        Navigation
                      </span>
                    </div>
                    <Link
                      href="/"
                      onClick={handleDropdownClose}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about-us"
                      onClick={handleDropdownClose}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/volunteer"
                      onClick={handleDropdownClose}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50"
                    >
                      Volunteer
                    </Link>
                    <Link
                      href="/what-we-do"
                      onClick={handleDropdownClose}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50"
                    >
                      What We Do
                    </Link>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        href="/donation"
                        onClick={handleDropdownClose}
                        className="block mx-4 py-2.5 text-center bg-primary text-white rounded-md text-sm font-semibold"
                      >
                        Donate Now
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-md text-[#1a1a1a] hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3 max-h-[calc(100vh-80px)] overflow-y-auto">
              {/* Search for Mobile */}
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full bg-gray-100 text-sm text-gray-800 px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Search..."
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Home Accordion */}
              <div className="border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full py-3 font-semibold text-[#1a1a1a]"
                  onClick={() => handleDropdownToggle("homeMobile")}
                >
                  <span>Home</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === "homeMobile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "homeMobile" && (
                  <div className="pb-3 pl-2 space-y-1">
                    {menuItems.home.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block py-2 text-sm text-gray-600 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About Us Accordion */}
              <div className="border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full py-3 font-semibold text-[#1a1a1a]"
                  onClick={() => handleDropdownToggle("aboutUsMobile")}
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === "aboutUsMobile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "aboutUsMobile" && (
                  <div className="pb-3 pl-2 space-y-1">
                    {menuItems.aboutUs.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block py-2 text-sm text-gray-600 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Volunteer Accordion */}
              <div className="border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full py-3 font-semibold text-[#1a1a1a]"
                  onClick={() => handleDropdownToggle("volunteerMobile")}
                >
                  <span>Volunteer</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === "volunteerMobile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "volunteerMobile" && (
                  <div className="pb-3 pl-2 space-y-1">
                    {menuItems.volunteer.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block py-2 text-sm text-gray-600 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* What We Do Accordion */}
              <div className="border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full py-3 font-semibold text-[#1a1a1a]"
                  onClick={() => handleDropdownToggle("whatWeDoMobile")}
                >
                  <span>What We Do</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === "whatWeDoMobile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "whatWeDoMobile" && (
                  <div className="pb-3 pl-2 space-y-1">
                    {menuItems.whatWeDo.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block py-2 text-sm text-gray-600 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Donate Button - Mobile */}
              <div className="pt-4 pb-2">
                <Link
                  href="/donation"
                  className="block w-full bg-primary hover:opacity-90 text-primary-foreground font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition-colors text-center text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Donate Now
                </Link>
              </div>

              {/* Social Links - Mobile */}
              <div className="flex items-center justify-center gap-6 pt-4 border-t">
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-20" aria-hidden="true" />
    </>
  );
}
