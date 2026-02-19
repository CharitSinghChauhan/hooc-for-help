"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const footerContent = {
  home: {
    title: "Home",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Volunteer", href: "/volunteer" },
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
      { label: "Our Mission", href: "/about-us#our-mission" },
      { label: "Our Vision", href: "/about-us#our-vision" },
      { label: "Our Story", href: "/about-us#our-team" },
    ],
    whatWeDoTitle: "Our Focus Areas",
    whatWeDoLinks: [
      { label: "Education", href: "/what-we-do#education" },
      { label: "Healthcare", href: "/what-we-do#health" },
      { label: "Community Development", href: "/what-we-do#community" },
      { label: "Women Empowerment", href: "/what-we-do#women" },
    ],
  },
  volunteer: {
    title: "Volunteer",
    links: [
      { label: "Join Us", href: "/volunteer#join" },
      { label: "Volunteer Stories", href: "/volunteer#stories" },
      { label: "Benefits", href: "/volunteer#benefits" },
      { label: "FAQ", href: "/volunteer#faq" },
    ],
    whatWeDoTitle: "Volunteer Programs",
    whatWeDoLinks: [
      { label: "Teaching Volunteers", href: "/volunteer#teaching" },
      { label: "Healthcare Volunteers", href: "/volunteer#healthcare" },
      { label: "Event Volunteers", href: "/volunteer#events" },
      { label: "Fundraising", href: "/volunteer#fundraising" },
    ],
  },
  whatWeDo: {
    title: "What We Do",
    links: [
      { label: "Community Impact Projects", href: "/what-we-do#education" },
      { label: "Nutrition & Support", href: "/what-we-do#health" },
      { label: "Stories of Transformation", href: "/what-we-do#stories" },
      { label: "FAQ", href: "/what-we-do#faq" },
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
      { label: "One-time Donation", href: "/donation" },
      { label: "Monthly Giving", href: "/donation#monthly" },
      { label: "Other Ways to Donate", href: "/donation#other" },
      { label: "FAQ", href: "/donation#faq" },
    ],
    whatWeDoTitle: "Your Impact",
    whatWeDoLinks: [
      { label: "Where Your Money Goes", href: "/donation#impact" },
      { label: "Success Stories", href: "/donation#stories" },
      { label: "Tax Benefits", href: "/donation#tax" },
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
    if (pathname.startsWith("/volunteer")) return "volunteer";
    if (pathname.startsWith("/what-we-do")) return "whatWeDo";
    if (pathname.startsWith("/donation")) return "donation";
    return "home"; // Default to home
  };

  const currentSection = getCurrentSection();
  const content = footerContent[currentSection as keyof typeof footerContent];
  return (
    <footer className="relative bg-primary text-primary-foreground pt-12 pb-8 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">
              {content.title}
            </h3>
            <ul className="space-y-2.5">
              {content.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Second Column - Dynamic What We Do Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">
              {content.whatWeDoTitle}
            </h3>
            <ul className="space-y-2.5">
              {content.whatWeDoLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">
              Contact Us
            </h3>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide mb-1">
                  Email Us
                </p>
                <Link
                  href="mailto:hoocforhelp@gmail.com"
                  className="text-sm hover:opacity-80 transition-colors block"
                >
                  hoocforhelp@gmail.com
                </Link>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide mb-1">
                  Call Us
                </p>
                <Link
                  href="tel:+917983141007"
                  className="text-sm hover:opacity-80 transition-colors block"
                >
                  7983141007
                </Link>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide mb-1">
                  Visit Us
                </p>
                <p className="text-sm leading-relaxed">
                  403 Tan Oak Madhuban Bapudham Govindpuram,
                  <br />
                  Ghaziabad 201013
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Link
            href="#"
            className="hover:opacity-80 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="hover:opacity-80 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="hover:opacity-80 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="hover:opacity-80 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="hover:opacity-80 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link href="#" className="text-sm hover:opacity-80 transition-colors">
            Blog
          </Link>
          <Link href="#" className="text-sm hover:opacity-80 transition-colors">
            Careers
          </Link>
          <Link href="#" className="text-sm hover:opacity-80 transition-colors">
            FAQs
          </Link>
          <Link href="#" className="text-sm hover:opacity-80 transition-colors">
            Privacy Policy
          </Link>
          <Link
            href="mailto:hoocforhelp@gmail.com"
            className="text-sm hover:opacity-80 transition-colors"
          >
            Contact Us
          </Link>
          <Link href="#" className="text-sm hover:opacity-80 transition-colors">
            Sitemap
          </Link>
        </div>

        {/* Information Text */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <p className="text-sm leading-relaxed">
            HOOC Help is the sole representative of the HOOC name & trademarks.
            HOOC Help is a 501c3 registered organization and all donations to
            HOOC Help are tax-deductible. You will receive periodic updates, so
            you can stay informed about HOOC Help’s projects, events &
            initiatives.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-primatext-primary-foreground/10 my-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">
            Copyright 2023 HOOC, Help Our Own Children Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
