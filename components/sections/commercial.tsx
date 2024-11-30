"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  keyframes,
} from "@chakra-ui/react";

// Keyframe animation for infinite left sliding
const slideAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const Commercial = () => {
  const images = [
    "/images/driver-1.svg",
    "/images/driver-2.svg",
    "/images/driver-3.svg",
    "/images/driver-4.svg",
    "/images/driver-5.svg",
  ];

  // Duplicate images to create the loop effect
  const extendedImages = [...images, ...images];

  return (
    <Box bg="white" py={16}>
      <Container maxW="container.xl" bg={"#F4F4F4A6"} px={10} py={20}>
        <Heading
          textAlign="center"
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="bold"
          color={"black"}
          mb={12}
        >
          <Text as="span" color="green.600">
            30+
          </Text>{" "}
          commercial drivers grow their transportation business with Monapp.
        </Heading>

        <Box position="relative" overflow="hidden" width="full">
          <Flex
            as="div"
            animation={`${slideAnimation} 15s linear infinite`}
            whiteSpace="nowrap"
          >
            {extendedImages.map((image, index) => (
              <Box
                key={index}
                flexShrink={0}
                width="248.43px"
                height="64px"
                mx={2}
              >
                <Image
                  src={image}
                  alt={`Driver ${(index % images.length) + 1}`}
                  objectFit="cover"
                  width="full"
                  height="full"
                  rounded="lg"
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Commercial;
