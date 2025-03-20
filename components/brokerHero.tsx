import { 
  Stack, 
  Flex, 
  Box, 
  Text, 
  HStack} from "@chakra-ui/react";

import Image from "next/image";
import BrokerSectionButtons from "./brokerSectionButtons";



const BrokerHero: React.FC = () => {

  return (
    <Flex direction="column" justify="center" align="center">
      <Stack
        mt={{ base: "3.0265rem", md: "5rem" }}
        pb={{ base: "5.233rem", md: "6rem" }}
        direction={{ base: "column", md: "row" }}
        w={{ base: "90%", md: "90%", lg: "90%" }}
        height="100%"
      >
        <Stack w={{ base: "90%", md: "31.5rem", lg: "35rem" }} align="start">
          <Box textAlign="start" w={{ base: "23.812rem", md: "44.26rem" }}>
            <Text
              fontWeight={400}
              color="white"
              letterSpacing="0%"
              fontSize={{ base: "1.125rem", md: "2.30rem" }}
              mb={{ base: "0.625rem", md: "1.5rem" }}
            >
              Join the Monapp brokers community for free!
            </Text>
            <Text
              letterSpacing={{ base: "-0.71px", md: "-0.08625rem" }}
              lineHeight={{ base: "2.5rem", md: "5rem" }}
              fontWeight={{ base: 500, md: 600 }}
              color="white"
              fontSize={{ base: "2rem", md: "3.44rem" }}
            >
              Support Businesses, Support People, Earn Big: Become a Monapp Broker
            </Text>
          </Box>
          <Box textAlign="start" w={{ base: "23.3125rem", md: "43.69rem" }}>
            <Text
              
              fontWeight="400"
              color="#FFFFFF"
              fontSize={{ base: "0.75rem", md: "1.8rem" }}
              mt={{ base: "1.5rem", md: "1rem" }}
              mb={{ base: "1.25rem", md: "1.88rem" }}
              lineHeight={{ base: "auto", md: "2.408125rem" }}
            >
              Earn Income by Providing Personalized Support for Customers. Easy, Simple, and very Profitable.
            </Text>
          </Box>
          <HStack gap={{ base: "0.85rem", md: "2.3rem" }}>
            <BrokerSectionButtons section="brokerHero" />
          </HStack>
        </Stack>

        <Flex 
          pt={{ base: "2.03rem", md: 0 }} 
          flex={1} 
          justify={{ base: "center", md: "right" }} 
          align={{ base: "start", md: "center" }} 
          w="full"
        >
          <Box
            height="auto"
            width={{ base: "full", md: 379 }}
            position="relative"
            overflow="hidden"
            display="flex"
            justifyContent="center"
            alignItems="center"
            zIndex="10"
          >
            <Image
              alt="Hero Image"
              src="/brokerHeroImg.png"
              loading="lazy"
              width={379}
              height={340}
            />
          </Box>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default BrokerHero;
