"use client";

import React from "react";
import { Box, Container, Heading, Text, Image, Flex } from "@chakra-ui/react";

const Commercial = () => {
  const images = [
    "/images/driver-1.svg",
    "/images/driver-2.svg",
    "/images/driver-3.svg",
    "/images/driver-4.svg",
  ];

  const extendedImages = [...images, ...images];

  return (
    <Box bg="white" py={16}>
      <Container maxW="container.xl" bg={"#F4F4F4A6"} px={10} py={20}>
        <Heading
          textAlign="center"
          fontSize="3rem"
          lineHeight="4.335rem"
          fontWeight="semibold"
          color="black"
          mb={12}
        >
          <Text as="span" color="green.600">
            30+
          </Text>{" "}
          commercial drivers grow their transportation business with Monapp.
        </Heading>

        <Box position="relative" overflow="hidden" width="full">
          <Flex
            css={{
              display: "flex",
              gap: "16px",
              animation: "scroll 20s linear infinite",
              width: "max-content",
            }}
          >
            {extendedImages.map((image, index) => (
              <Box
                key={index}
                flexShrink={0}
                height="64"
                width="248.43"
                mx="2px"
              >
                <Image
                  src={image}
                  alt={`Driver ${(index % images.length) + 1}`}
                  objectFit="cover"
                  height="64"
                  width="248.43"
                  rounded="lg"
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>

      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
};

export default Commercial;
