"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What does Hooc for Help do as a non-profit organization?",
    answer:
      "Hooc for Help is a non-profit organization dedicated to empowering underserved communities through education, healthcare, livelihood development, and environmental initiatives. It works to provide access to quality education, healthcare, economic opportunities, and sustainable practices. Through partnerships with local organizations, Hooc for Help empowers communities to create lasting change.",
  },
  {
    question:
      "How is Hooc for Help different from other Nonprofit initiatives?",
    answer:
      "Hooc for Help stands out from other Nonprofit initiatives because it goes beyond temporary relief. It works to address the root causes of poverty, lack of education, and environmental degradation that affect communities. Through these efforts, it creates ripples of change that spread and last. It empowers individuals to become advocates of change rather than mere beneficiaries, giving them the voice, confidence, and opportunity to shape a brighter future for themselves and their communities.",
  },
  {
    question: "How can I support Hooc for Help's work?",
    answer:
      "You can support Hooc for Help in several ways. Make a one-time contribution to help immediately, or choose a monthly donation to provide consistent support. You can also support a specific project to create a bigger impact. Every contribution helps empower communities and improve lives, giving people hope, opportunity, and a brighter future.",
  },
  {
    question: "Are donations to Hooc for Help tax-deductible?",
    answer:
      "Hooc for Help is a 501c3 tax-exempt organization and all donations made to Hooc for Help are tax-deductible. Please note that these tax exemption receipts apply only to U.S. residents and cannot be used for tax deductions outside the United States.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="heading-2 text-center mb-6 md:mb-8">
          Frequently Asked{" "}
          <span className="text-primabg-primary">Questions</span>
        </h2>
        <div className="divider-center mb-10 md:mb-12" />

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-5">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <h3 className="heading-4 mb-0 pr-4">{item.question}</h3>
                <span className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-6 h-6 text-primabg-primary transition-transform duration-200 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 md:p-5 bg-white border-t border-gray-100">
                  <p className="body-base">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
