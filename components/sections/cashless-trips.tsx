import Image from "next/image";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

import ArrowRight from "@/public/icons/arrow-right.svg";

const CashlessTrips = () => {
  return (
    <Box
      bg="#F8F8F8"
      position="relative"
      color="black"
      minH={{ base: "100vh", lg: "100vh" }}
    >
      {/* Hero Content */}
      <Container maxW="container.xl" py={20}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", lg: "flex-start" }}
          gap={10}
        >
          {/* Left Content */}
          <Box
            flex="1"
            textAlign={{ base: "center", lg: "left" }}
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", lg: "flex-start" }}
          >
            <Heading
              fontSize={{ base: "16px", md: "2rem", lg: "2.5rem" }}
              lineHeight={{ base: "23px", md: "3rem", lg: "3.6125rem" }}
              fontWeight="semibold"
              mb={6}
            >
              <span className="text-[#0C8036]"> Are you a Rider? </span> <br />
              Enjoy seamless, cashless trips with digital payment options
            </Heading>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "12px", md: "1.125rem", lg: "1.25rem" }}
              lineHeight={{ base: "17px", md: "1.75rem", lg: "1.80625rem" }}
              mb={10}
            >
              Discover the convenience of seamless, cashless trips with our
              advanced digital payment options. Say goodbye to cash hassles and
              enjoy effortless payments every time you ride. Your journey, made
              smoother and smarter!
            </Text>

            <Button
              bg="#222222"
              color="#FFFFFF"
              fontWeight="bold"
              px={{ base: 4, md: 6 }}
              py={{ base: 5, md: 7 }}
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight="34px"
              borderRadius="10px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx={{ base: "auto", lg: "0" }}
            >
              Download Rider&#39;s App
              <Image
                src={ArrowRight}
                alt="arrow-right"
                className="w-6 h-6 ml-2"
              />
            </Button>
          </Box>

          {/* Right Content - Images */}
          <Box flex="1" position="relative">
            <Box mt={{ base: 5, lg: 0 }}>
              <Image
                src="/images/phones-mobile.png"
                alt="World Map"
                width={695.23}
                height={267.68}
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CashlessTrips;
