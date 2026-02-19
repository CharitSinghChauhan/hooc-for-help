"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What causes does your Nonprofit initiatives focus on?",
    answer:
      "Our Nonprofit initiatives focuses on food distribution drives, street and river cleaning initiatives, women empowerment programs, skill development, and free health camps. We work to create sustainable impact by addressing both immediate needs and long-term community development.",
  },
  {
    question: "How can I contribute to your initiatives?",
    answer:
      "You can contribute through one-time or monthly donations, volunteering in community drives, sponsoring health camps, or supporting environmental campaigns. Every contribution helps us expand our reach and impact more lives.",
  },
  {
    question: "How is my donation utilized?",
    answer:
      "Donations are used to fund food distribution programs, sanitation campaigns, river restoration efforts, skill-building workshops, and free medical check-ups. We prioritize transparency and ensure funds are directed toward programs that deliver measurable impact.",
  },
  {
    question: "Can I volunteer in your projects?",
    answer:
      "Yes. We actively welcome volunteers for food drives, environmental clean-up campaigns, awareness programs, and health camps. Volunteers play a crucial role in strengthening community engagement and outreach.",
  },
  {
    question: "Do you provide impact reports to donors?",
    answer:
      "Yes. We provide regular updates and impact reports to ensure transparency and accountability. Our goal is to keep supporters informed about how their contributions are transforming communities.",
  },
];

export default function FAQWhatWeDo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
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
            <h4 className="text-lg font-bold mb-0 pr-4">{item.question}</h4>
            <span className="flex-shrink-0 ml-4">
              <svg
                className={`w-6 h-6 text-primary transition-transform duration-200 ${
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
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 md:p-5 bg-white border-t border-gray-100">
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
