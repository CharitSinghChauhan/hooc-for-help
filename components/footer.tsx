"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";
import { motion } from "motion/react";

const footerContent = {
  home: {
    title: "Home",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "What We Do", href: "/what-we-do" },
      { label: "Donate", href: "/donation" },
    ],
    whatWeDoTitle: "What We Do",
    whatWeDoLinks: [
      { label: "Community Impact Projects", href: "/what-we-do#education" },
      { label: "Nutrition & Support Programs", href: "/what-we-do#health" },
      { label: "Stories of Transformation", href: "/what-we-do#stories" },
      { label: "FAQ", href: "/what-we-do#faq" },
    ],
  },
  aboutUs: {
    title: "About Us",
    links: [
      { label: "Our Vision", href: "/about-us#our-vision" },
      { label: "Our Team", href: "/about-us#our-team" },
      { label: "pledge", href: "/about-us#pledge" },
    ],
    whatWeDoTitle: "Our Focus Areas",
    whatWeDoLinks: [
      { label: "Education", href: "/what-we-do#education" },
      { label: "Healthcare", href: "/what-we-do#health" },
      { label: "Community Development", href: "/what-we-do#community" },
      { label: "Women Empowerment", href: "/what-we-do#women" },
    ],
  },
  whatWeDo: {
    title: "What We Do",
    links: [
      { label: "Community Impact Projects", href: "/what-we-do#education" },
      { label: "Nutrition & Support", href: "/what-we-do#health" },
      { label: "Stories of Transformation", href: "/what-we-do#stories" },
    ],
    whatWeDoTitle: "Our Programs",
    whatWeDoLinks: [
      { label: "Food Distribution Drive", href: "/what-we-do#education" },
      { label: "Clean Streets Initiative", href: "/what-we-do#education" },
      { label: "River Restoration", href: "/what-we-do#education" },
      { label: "Community Support", href: "/what-we-do#stories" },
    ],
  },
  donation: {
    title: "Donate",
    links: [
      { label: "Support Our Project", href: "/donation#project" },
      { label: "Other Ways to Donate", href: "/donation#other" },
      { label: "FAQ", href: "/donation#faq" },
    ],
    whatWeDoTitle: "Your Impact",
    whatWeDoLinks: [
      { label: "Where Your Money Goes", href: "/donation#impact" },
      { label: "Other way to donate", href: "/donation#other" },
      { label: "Monthly Giving Program", href: "/donation#monthly" },
    ],
  },
};

export default function Footer() {
  const pathname = usePathname();

  // Determine which section's footer to show
  const getCurrentSection = () => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/about-us")) return "aboutUs";
    if (pathname.startsWith("/what-we-do")) return "whatWeDo";
    if (pathname.startsWith("/donation")) return "donation";
    return "home"; // Default to home
  };

  const currentSection = getCurrentSection();
  const content = footerContent[currentSection as keyof typeof footerContent];
  return (
    <footer className="relative bg-primary text-primary-foreground pt-20 pb-10 overflow-hidden min-h-[600px] flex flex-col justify-center">
      <div className="container mx-auto px-4 relative z-10 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column */}
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-4xl font-bold">HoocForHelp</h2>
            <p className="text-primary-foreground/80 leading-relaxed max-w-sm">
              We empower communities by creating opportunities and transforming
              lives through education, healthcare, and sustainable practices.
            </p>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                Our Social Links
              </h4>
              <div className="flex gap-3">
                <Link
                  href="https://www.instagram.com/hooc.tech/"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/hoocai/"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Middle Columns */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              {content.title}
            </h3>
            <ul className="space-y-4">
              {content.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              {content.whatWeDoTitle}
            </h3>
            <ul className="space-y-4">
              {content.whatWeDoLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="mailto:hoocforhelp@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>hoocforhelp@gmail.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+917983141007"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 7983141007</span>
                </Link>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <span>
                  403 Tan Oak Madhuban Bapudham Govindpuram,
                  <br />
                  Ghaziabad 201013
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Marquee Animation at the bottom */}
      <div className="w-full overflow-hidden flex opacity-5 pointer-events-none select-none absolute bottom-20 left-0 translate-y-1/4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          <div className="flex gap-8 pr-8">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-[10vw] font-bold px-8 leading-none">
                HoocForHelp
              </span>
            ))}
          </div>
          <div className="flex gap-8 pr-8">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-[10vw] font-bold leading-none">
                HoocForHelp
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
