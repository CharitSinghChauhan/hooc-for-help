import About from "@/components/about";
import Impact from "@/components/impact";
import DonorVoices from "@/components/donorVoices";
import Focus from "@/components/focus";
import FAQ from "@/components/faq";
import Donate from "@/components/donate";
import Image from "next/image";
import { Hero2 } from "@/components/hero-2";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero2 />
      <About />
      <Impact />
      <div className="w-full section-padding-sm bg-white">
        <Image
          src="https://pub-c04812680e704832932dbed286b7de2a.r2.dev/hooc-help/Page-breaker-image.webp"
          alt="landing-page"
          width={1440}
          height={160}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
      <DonorVoices />
      <Focus />
      <Donate />
      <FAQ />
    </main>
  );
}
