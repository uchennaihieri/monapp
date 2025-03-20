"use client";
import { FC } from "react";
import { 
  Flex} from "@chakra-ui/react";
import dynamic from "next/dynamic";

import NewHero from "@/components/NewHero";
import BrokerHero from "@/components/brokerHero";
import BrokerFeatures from "@/components/brokerFeatures";
import BrokerIncome from "@/components/brokerIncome";
import CommisionSection from "@/components/commisionSection";
import AddIncomeSection from "@/components/AddIncomeSection";
import GetStartedSection from "@/components/getStartedSection";

const WelcomeSection = dynamic(() => import("@/components/welcomeSection"));
const Footer = dynamic(() => import("@/components/footer"));

const BrokerUpdate: FC = () => {
  return (
    <>
      <main style={{ backgroundColor: "#FFFFFF" }}>
        <NewHero>
          <div>
            <BrokerHero />
          </div>
        </NewHero>
        <Flex bg="#FFFFFF" flexDirection="row" justify="center">
          <WelcomeSection />
        </Flex>
        <Flex bg="#FFFFFF" flexDirection="row" justify="center">
          <BrokerFeatures />
        </Flex>
        <Flex bg="#FFFFFF" flexDirection="row" justify="center">
          <BrokerIncome />
        </Flex>
        <Flex bg="#FFFFFF" flexDirection="row" justify="center">
          <CommisionSection />
        </Flex>
        <div>
          <AddIncomeSection />
        </div>
        <div>
          <GetStartedSection />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default BrokerUpdate;
