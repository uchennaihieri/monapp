import Hero from "@/components/sections/hero";
import Commercial from "@/components/sections/commercial";
import CreditCardSection from "@/components/sections/credit-card";
import WhatsMoreSection from "@/components/sections/whats-more";

export default function Home() {
  return (
    <>
      <Hero />
      <Commercial />
      <CreditCardSection />
      <WhatsMoreSection />
    </>
  );
}
