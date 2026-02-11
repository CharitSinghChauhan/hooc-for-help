import Image from "next/image";

const cards = [
  {
    img: "/Children-impacted-overall.png",
    number: "860,931",
    label: "Children impacted overall",
    bg: "bg-[#f7f7fb]",
  },
  {
    img: "/Children-6-18-years-in-schools.png",
    number: "365,581",
    label: "Children 6-18 years in schools",
    bg: "bg-[#fff5f7]",
  },
  {
    img: "/0-1-years-children-fully-immunized.png",
    number: "243,546",
    label: "0-1 years children fully immunized",
    bg: "bg-[#f0fbff]",
  },
  {
    img: "/Govt.-schools-approved-or-strengthened.png",
    number: "1,851",
    label: "Govt. schools approved or strengthened",
    bg: "bg-[#fafafa]",
  },
  {
    img: "/Villages-freed-from-child-labor.png",
    number: "2,691",
    label: "Villages freed from child labor",
    bg: "bg-[#f2fbf8]",
  },
  {
    img: "/strengthened.png",
    number: "4,531",
    label: "Children's Collectives formed/strengthened",
    bg: "bg-[#fff7f7]",
  },
  {
    img: "/Children-mainstreamed-into-schools.png",
    number: "215,728",
    label: "Children mainstreamed into schools",
    bg: "bg-[#fff6f6]",
  },
  {
    img: "/Rescued-children-(labor-or-rafficked)-mainstreamed-in-formal-education.png",
    number: "5,434",
    label:
      "Rescued children (labor or trafficked) mainstreamed in formal education",
    bg: "bg-[#fff7f7]",
  },
];

export default function Impact() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-gochi text-4xl md:text-5xl text-[#1a1a1a] mb-2">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-[#FCDA16] mx-auto mb-6" />
          <p className="max-w-4xl mx-auto text-[15px] md:text-16px] text-gray-700 leading-relaxed font-sans">
            There is nothing more precious than a child's smile. Since 2004, CRY
            America has helped create more than 800,000 happy childhoods thanks
            to supporters like YOU!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mx-32">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              {/* Illustration Area */}
              <div
                className={`${card.bg} aspect-[2/1.2] flex items-center justify-center`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={card.img}
                    alt={card.label}
                    fill
                    className="object-fill"
                  />
                </div>
              </div>

              {/* Stats Area */}
              <div className="bg-[#FCDA16] pt-4 pb-8 text-center grow flex flex-col justify-center">
                <span className="block text-3xl md:text-3xl font-bold text-[#1a1a1a] mb-1">
                  {card.number}
                </span>
                <p className="text-[13px] md:text-sm text-[#1a1a1a] leading-snug">
                  {card.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#FCDA16] hover:bg-[#ebd034] text-black font-bold uppercase tracking-wider px-8 py-3 rounded-sm transition-colors text-sm shadow-sm">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
