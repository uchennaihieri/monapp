import Image from "next/image";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

import ArrowRight from "@/public/icons/arrow-right-black.svg";

const OpenAccount = () => {
  return (
    <Box bg="black">
      <Container
        maxW="container.xl"
        py={"20"}
        position="relative"
        overflow="hidden"
        minH="50vh"
        color={"white"}
      >
        <Box textAlign="center" spaceY={10}>
          <Heading fontWeight="semibold" fontSize="40px" lineHeight="4.335rem">
            Enjoy a business solution designed to help you <br /> grow.
          </Heading>
          <Text
            fontWeight="semibold"
            fontSize="1.25rem"
            lineHeight="2.16625rem"
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
            px={6}
            py={7}
            fontSize={"24px"}
            borderRadius={"10px"}
            lineHeight={"34px"}
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
