"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import StarWhiteIcon from "@/public/icons/star-white.svg";
import StarBlackIcon from "@/public/icons/star-black.svg";

export default function WhatsMoreSection() {
  const lightCardBg = "white";

  return (
    <Box bg="#000000" py={{ base: 10, md: 20 }}>
      <Container maxW="container.xl">
        <VStack spaceY={4} mb={16} textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "16px", md: "2.5rem" }}
            lineHeight={{ base: "23px", md: "3.6125rem" }}
            fontWeight="600"
            textAlign="center"
            color="white"
          >
            What&apos;s More?
          </Heading>
          <Text
            fontSize={{ base: "12px", md: "1.25rem" }}
            lineHeight={{ base: "17px", md: "1.80625rem" }}
            fontWeight="600"
            textAlign="center"
            color="white"
            maxW="519px"
          >
            Enhance your transportation business experience with our added
            payment features:
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spaceX={2}
          spaceY={{ base: 5, lg: 0 }}
          justifyItems="center"
          alignItems="center"
          maxW="1200px"
          mx="auto"
        >
          {/* Fast Collections Card */}
          <Box
            bg={"black"}
            p={8}
            borderRadius="16px"
            boxShadow="4px 4px 24px 0px #FFFFFF33 inset, -8px -8px 24px 0px #00000040 inset"
            spaceY={4}
            width={{ base: "100%", sm: "22.375rem" }}
            color={"white"}
            height="12.75rem"
          >
            <Image src={StarWhiteIcon} alt="star-icon" />
            <Heading
              as="h3"
              fontSize={{ base: "14px", md: "1.375rem" }}
              lineHeight={{ base: "20px", md: "1.98625rem" }}
              fontWeight="700"
              color={"#FFFFF"}
            >
              Fast Collections
            </Heading>
            <Text color={"#FFFFF"} fontSize={"sm"}>
              Quick and seamless payment collection process for your
              convenience.
            </Text>
          </Box>

          {/* No Transaction Fees Card */}
          <Box
            bg={lightCardBg}
            p={8}
            borderRadius="16px"
            boxShadow="xl"
            spaceY={4}
            width={{ base: "100%", sm: "22.375rem" }}
            height="12.75rem"
          >
            <Image src={StarBlackIcon} alt="star-icon" />
            <Heading
              as="h3"
              fontSize={{ base: "14px", md: "1.375rem" }}
              lineHeight={{ base: "20px", md: "1.98625rem" }}
              fontWeight="700"
              color={"#222222"}
            >
              No Transaction Fees
            </Heading>
            <Text color={"#222222"} fontSize={"sm"}>
              Enjoy zero transaction fees, keeping all your hard-earned money.
            </Text>
          </Box>

          {/* Instant Transaction Alerts Card */}
          <Box
            bg={"black"}
            p={8}
            borderRadius="16px"
            boxShadow="4px 4px 24px 0px #FFFFFF33 inset, -8px -8px 24px 0px #00000040 inset"
            spaceY={4}
            color={"white"}
            width={{ base: "100%", sm: "22.375rem" }}
            height="12.75rem"
          >
            <Image src={StarWhiteIcon} alt="star-icon" />
            <Heading
              as="h3"
              fontSize={{ base: "14px", md: "1.375rem" }}
              lineHeight={{ base: "20px", md: "1.98625rem" }}
              fontWeight="700"
              color={"#FFFFF"}
            >
              Instant Transaction Alerts
            </Heading>
            <Text color={"#FFFFF"} fontSize={"sm"}>
              Get immediate notifications for every payment, ensuring you stay
              informed at all times.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
