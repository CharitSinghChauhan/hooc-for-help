import Image from "next/image";
import Link from "next/link";

export default function Donate() {
  return (
    <section id="donate" className="section-padding bg-white scroll-mt-32.5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row grid-gap-md items-start">
          {/* Left Content */}
          <div className="w-full md:w-1/3">
            <h2 className="heading-2 mb-6 md:mb-8">
              <span className="text-black">Donate To</span>
              <br />
              <span className="text-primary">Make A Difference</span>
            </h2>
            <div className="space-y-content-content body-base space-paragraph">
              <p>
                Your smallest contribution makes a big difference to
                communitie&apos;s lives. Every contribution directly supports
                education access, healthcare initiatives, livelihood training,
                and environmental programs.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-gap-sm">
            {[
              {
                image:
                  "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/one-time-donation-1.webp",
                title: "One Time Donation",
                description: "I’d Like To Contribute Now",
                buttonText: "Donate Now",
                href: "/donation",
              },
              {
                image:
                  "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/impact-3.webp",
                title: "Monthly Supporter",
                description: "Become A Monthly Donor",
                buttonText: "Donate Monthly",
                href: "/donation",
              },
              {
                image:
                  "https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/support-a-project-1.webp",
                title: "Sponsor a Program",
                description: "Bigger Impact",
                buttonText: "Support a Project",
                href: "/donation",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#FCDA16]"
              >
                <Link href={card.href}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6 text-center">
                  <Link
                    href={card.href}
                    className="block text-lg font-bold uppercase tracking-wide mb-3 hover:text-primary transition-colors"
                  >
                    {card.title}
                  </Link>
                  <p className="text-gray-700 mb-6">{card.description}</p>
                  <Link href={card.href}>
                    <button className="bg-primary hover:bg-[#e3c314] text-black font-bold py-2 px-6 rounded-sm transition-colors text-sm tracking-wider">
                      {card.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
