import Image from "next/image";
import { Box, Button, Container, Flex, Heading, Input } from "@chakra-ui/react";

import ArrowRight from "@/public/icons/arrow-right.svg";

const DownloadApp = () => {
  return (
    <Box bg="white" minH="50vh" position="relative">
      <Container
        maxW="container.xl"
        py={{ base: "16", md: "20" }}
        pt={{ base: "20", md: "16" }}
        overflow={"hidden"}
      >
        <Box textAlign="center" spaceY={6} color={"black"}>
          <Heading
            fontWeight="semibold"
            fontSize={{ base: "16px", md: "2rem", lg: "2.5rem" }}
            lineHeight={{ base: "23px", md: "3rem", lg: "3.6125rem" }}
          >
            Download the driver app or fill a form with your phone number{" "}
            <br className="hidden lg:block" />
            for personalized support
          </Heading>

          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            gap={6}
          >
            <Button className="group bg-[#222222] text-white font-bold px-4 md:px-6 py-5 md:py-7 text-[18px] md:text-[20px] leading-[34px] rounded-[10px] flex items-center justify-center mr-10">
              Download Driver&#39;s App
              <Image
                src={ArrowRight}
                alt="arrow-right"
                className="w-6 h-6 ml-1 transform transition-transform duration-300 group-hover:translate-x-2"
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
        zIndex={0}
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
