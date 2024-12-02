import { Box, Container, Heading, Text } from "@chakra-ui/react";

const OpenAccount = () => {
  return (
    <Box bg="black">
      <Container
        maxW="container.xl"
        py={{ base: "12", md: "20" }}
        position="relative"
        overflow="hidden"
        color="white"
      >
        <Box textAlign="center" spaceY={6}>
          <Heading
            fontWeight="semibold"
            fontSize={{ base: "16px", md: "2rem", lg: "2.5rem" }}
            lineHeight={{ base: "23px", md: "3rem", lg: "3.6125rem" }}
          >
            Enjoy a business solution designed to help you <br /> grow.
          </Heading>
          <Text
            fontWeight="semibold"
            fontSize={{ base: "12px", md: "1.125rem", lg: "1.25rem" }}
            lineHeight={{ base: "17px", md: "1.75rem", lg: "1.80625rem" }}
          >
            Discover a business solution tailored to help you grow, with tools
            for effortless management, <br className="hidden md:block" />{" "}
            scalability, financial support, and data-driven insights. Enhance
            operations, make informed <br className="hidden md:block" />{" "}
            decisions, and stay ahead —all with comprehensive support at every
            step.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default OpenAccount;
