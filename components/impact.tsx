import Image from "next/image";

const cards = [
  {
    img: "/impact-1.png",
    number: "1,20,000",
    label: "Individuals empowered overall",
    bg: "bg-[#f7f7fb]",
  },
  {
    img: "/impact-2.png",
    number: "450,000",
    label: "People educated and skilled",
    bg: "bg-[#fff5f7]",
  },
  {
    img: "/impact-3.png",
    number: "75,000",
    label: "Families supported through livelihood programs",
    bg: "bg-[#f0fbff]",
  },
  {
    img: "/impact-4.png",
    number: "2,500",
    label: "Health camps and medical assistance provided",
    bg: "bg-[#fafafa]",
  },
  {
    img: "/impact-5.png",
    number: "50,000",
    label: "Trees planted in community drives",
    bg: "bg-[#f2fbf8]",
  },
  {
    img: "/impact-6.jpg",
    number: "30,000",
    label: "Women empowered through initiatives",
    bg: "bg-[#fff7f7]",
  },
  {
    img: "/impact-7.png",
    number: "15,000",
    label: "Disaster relief efforts conducted",
    bg: "bg-[#fff6f6]",
  },
  {
    img: "/impact-8.png",
    number: "5,000",
    label: "Individuals rehabilitated and reintegrated",
    bg: "bg-[#fff7f7]",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="bg-white scroll-mt-32.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-[#1a1a1a] mb-2">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-[#FCDA16] mx-auto mb-6" />
          <p className="max-w-4xl mx-auto text-[15px] md:text-16px] text-gray-700 leading-relaxed ">
            Every community transformed is a step toward global change. Since
            2020, Hooc for Help has empowered over 1,20,000 individuals through
            sustainable initiatives, thanks to supporters like YOU!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mx-2 sm:mx-4 lg:mx-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div
                className={`${card.bg} aspect-video flex items-center justify-center`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={card.img}
                    alt={card.label}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#FCDA16] pt-2 pb-4 text-center grow flex flex-col justify-center">
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
      </div>
    </section>
  );
}
