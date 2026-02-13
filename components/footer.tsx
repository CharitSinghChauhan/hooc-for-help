"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--primary)] text-[var(--primary-foreground)] pt-12 pb-8">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">
              Home
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about-us"
                  className="text-sm hover:opacity-80 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:opacity-80 transition-colors"
                >
                  Grants
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:opacity-80 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="text-sm hover:opacity-80 transition-colors"
                >
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* What We Do Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">
              What We Do?
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/what-we-do"
                  className="text-sm hover:opacity-80 transition-colors"
                >
                  Child Education
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:opacity-80 transition-colors"
                >
                  Health and Nutrition
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:opacity-80 transition-colors"
                >
                  Child Labor
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:opacity-80 transition-colors"
                >
                  Girl Child Education
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:opacity-80 transition-colors"
                >
                  Child Marriage
                </Link>
              </li>
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
                  href="mailto:support@hooc-help.org"
                  className="text-sm hover:opacity-80 transition-colors block"
                >
                  support@hooc-help.org
                </Link>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide mb-1">
                  Call Us
                </p>
                <Link
                  href="tel:+16179812288"
                  className="text-sm hover:opacity-80 transition-colors block"
                >
                  617 981 2288
                </Link>
                <Link
                  href="tel:+16179591273"
                  className="text-sm hover:opacity-80 transition-colors block"
                >
                  617 959 1273
                </Link>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide mb-1">
                  Write Us
                </p>
                <p className="text-sm leading-relaxed">
                  HOOC Help, P.O. Box 850948, Braintree,
                  <br />
                  MA 02185-0948
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
          <Link href="#" className="text-sm hover:opacity-80 transition-colors">
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
        <div className="border-t border-[var(--primary-foreground)]/10 my-6" />

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
