import Image from "next/image";
import Link from "next/link";

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
              src="/Donate-1.webp"
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
              Hooc for Help is a non-profit initiative in India dedicated to
              empowering underserved communities through sustainable
              development. We focus on education, healthcare, nutrition,
              livelihood development, and environmental responsibility to create
              long-term, meaningful impact.
            </p>

            <p>
              Through skill development programs, tree plantation drives,
              donation campaigns, and disaster relief efforts, we work to ensure
              communities have access to essential resources and opportunities
              for growth.
            </p>

            <p>
              Since 2025, we have positively impacted over 1,200 individuals,
              and with continued support, we aim to build stronger, self-reliant
              communities across India.
            </p>

            <div className="mt-8 md:mt-10">
              <button className="bg-primary font-bold py-3 px-6 sm:py-3.5 sm:px-8 rounded shadow-md uppercase tracking-widest text-sm sm:text-base text-white">
                <Link href={"/about-us"}>About us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
