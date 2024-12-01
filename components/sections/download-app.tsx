import Image from "next/image";
import { Box, Button, Container, Flex, Heading, Input } from "@chakra-ui/react";

import ArrowRight from "@/public/icons/arrow-right.svg";

const DownloadApp = () => {
  return (
    <Box bg="white" minH="50vh" overflow={"hidden"} position="relative">
      <Container maxW="container.xl" py={{ base: "12", md: "20" }}>
        <Box textAlign="center" spaceY={6} color={"black"}>
          <Heading
            fontWeight="semibold"
            fontSize={{ base: "24px", md: "40px" }}
            lineHeight={{ base: "2.5rem", md: "4.335rem" }}
          >
            Download the driver app or fill a form with your phone number <br />
            for personalized support
          </Heading>

          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            gap={6}
          >
            <Button
              bg="#222222"
              color="#FFFFFF"
              fontWeight="bold"
              px={{ base: 4, md: 6 }}
              py={{ base: 5, md: 7 }}
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight={"34px"}
              borderRadius={"10px"}
              mr={10}
            >
              Download App
              <Image
                src={ArrowRight}
                alt="arrow-right"
                className="w-6 h-6 mt-1"
              />
            </Button>

            {/* Phone Input Group */}
            <Flex
              gap={2}
              maxW="600px"
              bg="white"
              px={{ base: "1", md: "2" }}
              py={{ base: "1", md: "2" }}
              border="2px solid"
              borderColor="#222222"
              borderRadius="14px"
              height="auto"
              width={{ base: "100%", md: "689px" }}
              alignItems="center"
            >
              <Input placeholder="Enter your Phone Number" flex="1" pl={4} />
              <Button
                bg="#222222"
                color="white"
                borderRadius="10px"
                height={{ base: "40px", md: "50px" }}
                width={{ base: "30%", md: "160px" }}
                fontSize="18px"
              >
                Get Started
              </Button>
            </Flex>
          </Box>
        </Box>
      </Container>
      <Box
        position="absolute"
        bottom={{ base: "-24", lg: "0" }}
        right={0}
        zIndex={1}
      >
        <Image
          src="/icons/squigle-black-small.svg"
          alt="World Map"
          width={215.23}
          height={293.68}
        />
      </Box>
    </Box>
  );
};

export default DownloadApp;
