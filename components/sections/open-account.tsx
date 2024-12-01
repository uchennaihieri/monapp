import Image from "next/image";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

import ArrowRight from "@/public/icons/arrow-right-black.svg";

const OpenAccount = () => {
  return (
    <Box bg="black">
      <Container
        maxW="container.xl"
        py={{ base: "12", md: "20" }}
        position="relative"
        overflow="hidden"
        minH="50vh"
        color="white"
      >
        <Box textAlign="center" spaceY={6}>
          <Heading
            fontWeight="semibold"
            fontSize={{ base: "30px", md: "40px" }}
            lineHeight={{ base: "2.5rem", md: "3.5625rem" }}
          >
            Enjoy a business solution designed to help you <br /> grow.
          </Heading>
          <Text
            fontWeight="semibold"
            fontSize={{ base: "1rem", md: "1.25rem" }}
            lineHeight={{ base: "1.5rem", md: "2.16625rem" }}
          >
            Discover a business solution tailored to help you grow, with tools
            for effortless management, <br /> scalability, financial support,
            and data-driven insights. Enhance operations, make informed <br />{" "}
            decisions, and stay ahead —all with comprehensive support at every
            step.
          </Text>

          <Button
            bg="white"
            color="#222222"
            fontWeight="bold"
            px={{ base: 4, md: 6 }}
            py={{ base: 5, md: 7 }}
            fontSize={{ base: "18px", md: "24px" }}
            borderRadius="10px"
            lineHeight="34px"
            _hover={{ bg: "#f7f7f7" }}
          >
            Open an account
            <Image
              src={ArrowRight}
              alt="arrow-right"
              className="w-6 h-6 mt-1"
            />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OpenAccount;
