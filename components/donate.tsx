import Image from "next/image";

export default function Donate() {
  return (
    <section id="donate" className="py-16 px-4 md:px-8 bg-white scroll-mt-32.5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start">
          {/* Left Content */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 sm:mb-6">
              <span className="text-black">Donate To</span>
              <br />
              <span className="text-primary">Make A Difference</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
              <p>
                Your smallest contribution makes a big difference to
                communities&apos; lives. We count on the generosity of people
                like you to be able to create real change for underserved
                populations!
              </p>
              <p>
                Hooc for Help is a 5013 exempt organization and all donations
                are tax deductible.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#FCDA16]">
              <Image
                src="/one-time-donation-1.webp"
                alt="One Time Donation"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold uppercase tracking-wide mb-3">
                  One Time
                </h3>
                <p className="text-gray-700 mb-6">I’d Like To Contribute Now</p>
                <button className="bg-primary hover:bg-[#e3c314] text-black font-bold py-2 px-6 rounded-sm transition-colors text-sm tracking-wider">
                  Donate Now
                </button>
              </div>
            </div>

            {/* Monthly Donation */}
            <div className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#FCDA16]">
              <Image
                src="/impact-3.png"
                alt="Monthly Donation"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold uppercase tracking-wide mb-3">
                  Monthly
                </h3>
                <p className="text-gray-700 mb-6">
                  I’d Like To Become A<br />
                  Monthly Donor
                </p>
                <button className="bg-[#FCDA16] hover:bg-[#e3c314] text-black font-bold py-2 px-6 rounded-sm transition-colors text-sm tracking-wider">
                  Donate Monthly
                </button>
              </div>
            </div>

            {/* Support a Project */}
            <div className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#FCDA16]">
              <Image
                src="/support-a-project-1.webp"
                alt="Support a Project"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold uppercase tracking-wide mb-3">
                  Support a Project
                </h3>
                <p className="text-gray-700 mb-6">
                  I’d Like To Make A<br />
                  Bigger Impact
                </p>
                <button className="bg-[#FCDA16] hover:bg-[#e3c314] text-black font-bold py-2 px-6 rounded-sm transition-colors text-sm tracking-wider">
                  Support a Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
