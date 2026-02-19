import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-white flex justify-center items-center scroll-mt-32.5"
    >
      <div className="section-container flex flex-col md:flex-row items-center grid-gap-md">
        <div className="shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full bg-primary p-3 sm:p-4 flex items-center justify-center">
          <div className="w-full h-full rounded-full overflow-hidden shadow-md">
            <Image
              src="/Donate-1.jpg"
              alt="Children smiling"
              width={400}
              height={400}
              className="object-cover object-center w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="flex-1 max-w-3xl text-center md:text-left">
          <h2 id="about-heading" className="heading-2">
            About Hooc for Help
          </h2>
          <h3 id="approach" className="sr-only">
            Our Approach
          </h3>
          <div className="divider md:mx-0" />

          <div className="space-y-content-content body-base space-paragraph">
            <p>
              Hooc for Help, an Nonprofit initiatives in India, stands as a
              powerful advocate for underserved communities, addressing their
              needs in education, healthcare, livelihood development, and
              overall empowerment. Being an Nonprofit initiatives for community
              development, our focus lies in promoting sustainable initiatives
              and extending crucial support.
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

            <div className="mt-8 md:mt-10">
              <button className="bg-primary font-bold py-3 px-6 sm:py-3.5 sm:px-8 rounded shadow-md uppercase tracking-widest text-sm sm:text-base">
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
