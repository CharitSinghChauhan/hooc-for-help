import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Left image circle */}
        <div className="shrink-0 w-56 h-56 md:w-72 md:h-72 rounded-full bg-[#F4D03F] p-4 flex items-center justify-center">
          <div className="w-full h-full rounded-full overflow-hidden shadow-md">
            <Image
              src="/home-about.webp"
              alt="Children smiling"
              width={400}
              height={400}
              className="object-cover object-center w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 max-w-3xl">
          <h2 className="font-gochi text-4xl md:text-5xl">About CRY America</h2>
          <div className="w-24 h-1 mt-2 mb-6 bg-[#FCDA16] rounded-sm" />

          <div className="space-y-4 text-[16px] leading-relaxed text-[#111827]">
            <p>
              CRY America, an NGO in the USA, stands as a powerful advocate for
              underprivileged children, addressing their rights, education,
              healthcare, and overall development. Being an NGO for children,
              our focus lies in promoting child rights and extending crucial
              support.
            </p>

            <p>
              We work tirelessly to ensure that underprivileged children
              complete their education, get proper nutrition, have access to
              quality healthcare and stay protected from child labour and child
              marriage.
            </p>

            <p>
              Since 2004, we have impacted the lives of over 800,000 children
              and, with your support, aim to create brighter futures for many
              more!
            </p>

            <div className="mt-6">
              <button className="bg-[#FCDA16] hover:bg-[#e3c314] text-black font-bold py-3 px-6 rounded-sm shadow-md uppercase tracking-widest">
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
