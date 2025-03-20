"use client";
import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface BrokerSectionButtonsProps {
  section: "brokerHero" | "adincome" | "getStarted";
}

const BrokerSectionButtons: FC<BrokerSectionButtonsProps> = ({ section }) => {
  return (
    <>
      {section === "brokerHero" && (
        <Button
          borderRadius={"0.669375rem"}
          color={"white"}
          border={"2px"}
          borderColor={"white"}
          w={{ base: "17.8125rem", md: "32.31rem" }}
          h={{ base: "2.4375rem", md: "3.81rem" }}
          fontWeight={500}
          fontSize={{ base: "0.921875rem", md: "1.561875rem" }}
          lineHeight={{ base: "1.729375rem", md: "2.93rem" }}
          variant={"plain"}
          p={{
            base: "0.288125rem 1.22625rem 0.288125rem 1.225rem",
            md: "0.488125rem 2.076875rem 0.488125rem 2.075rem",
          }}
        >
          Join The Monapp Brokers Community
        </Button>
      )}

      {section === "adincome" && (
        <Button
          mt={{ base: "1.28125rem", md: "2rem" }}
          borderRadius={{ base: "0.395rem", md: "0.669375rem" }}
          color={"white"}
          border={"2px"}
          borderColor={"white"}
          w={{ base: "17.8125rem", md: "32.31rem" }}
          h={{ base: "2.4775rem", md: "3.81rem" }}
          fontWeight={500}
          fontSize={{ base: "0.921875rem", md: "1.561875rem" }}
          lineHeight={{ base: "1.729375rem", md: "2.93rem" }}
          variant={"plain"}
          p={{
            base: "0.288125rem 1.22625rem 0.288125rem 1.225rem",
            md: "0.488125rem 2.076875rem 0.488125rem 2.075rem",
          }}
        >
          Join The Monapp Brokers Community
        </Button>
      )}

      {section === "getStarted" && (
        <Button
          mt={{ base: "1.28125rem", md: "2rem" }}
          borderRadius={"0.669375rem"}
          color={"white"}
          bg={"#000000"}
          borderColor={"white"}
          w={{ base: "17.8125rem", md: "32.31rem" }}
          h={{ base: "2.4775rem", md: "3.81rem" }}
          fontWeight={500}
          _hover={{ bg: "black.200" }}
          fontSize={{ base: "0.921875rem", md: "1.561875rem" }}
          lineHeight={{ base: "1.729375rem", md: "2.93rem" }}
          variant={"solid"}
          p={{
            base: "0.288125rem 1.22625rem 0.288125rem 1.225rem",
            md: "0.488125rem 2.076875rem 0.488125rem 2.075rem",
          }}
        >
          Fill Out Our Quick Application
        </Button>
      )}
    </>
  );
};

export default BrokerSectionButtons;
