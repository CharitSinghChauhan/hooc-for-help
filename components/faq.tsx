"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "How is my donation used?",
    answer:
      "Donations directly support program implementation, community outreach, training materials, healthcare initiatives, environmental drives, and emergency relief efforts. We prioritize transparency and responsible fund utilization.",
  },
  {
    question: " Do you offer recurring donation options?",
    answer:
      "Yes. You can become a monthly supporter to provide consistent funding that helps us plan and sustain long-term initiatives.",
  },
  {
    question: "Is my donation secure?",
    answer:
      "Yes. We use secure and verified payment systems to ensure that your transaction information remains protected and confidential.",
  },
  {
    question: "How can I track the impact of my contribution?",
    answer:
      "We share impact reports, program highlights, and success stories through our website and communication channels so you can see how your support creates change.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white" id="faq">
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
