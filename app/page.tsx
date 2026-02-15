import Hero from "@/components/hero";
import About from "@/components/about";
import Impact from "@/components/impact";
import DonorVoices from "@/components/donorVoices";
import Focus from "@/components/focus";
import FAQ from "@/components/faq";
import Donate from "@/components/donate";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <Impact />
      <div className="w-full my-8">
        <Image
          src="/Page-breaker-image.webp"
          alt=""
          width={1440}
          height={160}
          className="w-full h-auto"
        />
      </div>
      <Focus />
      <DonorVoices />
      <Donate />
      <FAQ />
    </main>
  );
}
