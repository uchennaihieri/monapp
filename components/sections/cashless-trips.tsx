import Image from "next/image";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

import Phone1 from "@/public/images/phone-center.svg";
import Phone2 from "@/public/images/phone-left.svg";
import Phone3 from "@/public/images/phone-right.svg";

const CashlessTrips = () => {
  return (
    <Box
      bg="#F8F8F8"
      position="relative"
      color={"black"}
      overflow="hidden"
      minH="100vh"
    >
      {/* Hero Content */}
      <Container maxW="container.xl" py={"24"} mt={10}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          alignItems={"center"}
          gap={10}
        >
          {/* Left Content */}
          <Box flex="1">
            <Heading
              fontSize="3rem"
              fontWeight={"semibold"}
              lineHeight="4.335rem"
              mb={6}
            >
              While allowing riders enjoy seamless, cashless trips with reliable
              digital payment options
            </Heading>
            <Text
              fontSize="1.5rem"
              fontWeight={"semibold"}
              lineHeight="2.16625rem"
              mb={10}
            >
              Monapp ensures riders enjoy seamless, cashless trips <br /> with
              reliable digital payment options. With secure transactions,
              transparent billing, and multiple payment methods, it offers a
              convenient, hassle-free experience <br /> for uninterrupted
              travel.
            </Text>
          </Box>

          {/* Right Content - Images */}
          <Box flex="1" position="relative">
            <Box
              position="absolute"
              top={-250}
              bottom={0}
              right={10}
              zIndex={1}
            >
              <Image
                src="/images/world-map.svg"
                alt="World Map"
                width={695.23}
                height={267.68}
              />
            </Box>

            <Box position="absolute" top={-370} zIndex={2}>
              <Image src={Phone1} alt="phone Images" width={691} height={616} />
            </Box>

            <Box position="absolute" top={-170} left={-150} zIndex={2}>
              <Image src={Phone2} alt="phone Images" width={563} height={502} />
            </Box>

            <Box position="absolute" top={-170} right={-150} zIndex={2}>
              <Image
                src={Phone3}
                className="w-[563px] h-[502px]"
                alt="phone Images"
                width={563}
                height={502}
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CashlessTrips;
