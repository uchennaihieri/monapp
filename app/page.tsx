import Hero from "@/components/sections/hero";
import Commercial from "@/components/sections/commercial";
import CreditCardSection from "@/components/sections/credit-card";
import WhatsMoreSection from "@/components/sections/whats-more";
import CashlessTrips from "@/components/sections/cashless-trips";
import GetStarted from "@/components/sections/get-started";
import OpenAccount from "@/components/sections/open-account";
import DownloadApp from "@/components/sections/download-app";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Commercial />
      <CreditCardSection />
      <WhatsMoreSection />
      <CashlessTrips />
      <GetStarted />
      <OpenAccount />
      <DownloadApp />
      <Footer />
    </main>
  );
}
