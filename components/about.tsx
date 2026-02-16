import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 md:px-8 flex justify-center items-center scroll-mt-32.5"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16 lg:gap-20">
        <div className="shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full bg-primary p-3 sm:p-4 flex items-center justify-center">
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

        <div className="flex-1 max-w-3xl">
          <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl">
            About Hooc Help
          </h2>
          <h3 id="approach" className="sr-only">
            Our Approach
          </h3>
          <div className="w-24 h-1 mt-2 mb-4 sm:mb-6 bg-primary rounded-radius" />

          <div className="space-y-3 sm:space-y-4 text-sm sm:text-[16px] leading-relaxed text-foreground">
            <p>
              Hooc Help, an NGO in India, stands as a powerful advocate for
              underserved communities, addressing their needs in education,
              healthcare, livelihood development, and overall empowerment. Being
              an NGO for community development, our focus lies in promoting
              sustainable initiatives and extending crucial support.
            </p>

            <p>
              We work tirelessly to ensure that communities have access to
              quality education, proper nutrition, healthcare, and economic
              opportunities. Through tree plantation drives, clothes donation
              campaigns, skill development training, and disaster relief
              efforts, we create lasting positive change.
            </p>

            <p>
              Since 2020, we have impacted the lives of over 1,200 individuals
              and, with your support, aim to create thriving communities for
              many more!
            </p>

            <div className="mt-4 sm:mt-6">
              <button className="bg-primary font-bold py-2.5 px-5 sm:py-3 sm:px-6 rounded-radius shadow-md uppercase tracking-widest text-sm sm:text-base">
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
