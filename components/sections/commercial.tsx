"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

const Commercial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;

  const images = [
    "/images/driver-1.svg",
    "/images/driver-2.svg",
    "/images/driver-3.svg",
    "/images/driver-4.svg",
  ];

  const extendedImages = [...images, ...images];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const translateX =
    (currentSlide * (100 / slidesToShow)) % (100 * images.length);

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
          commercial driver grow their transportation business with Monapp.
        </Heading>

        <Box position="relative">
          <Flex overflow="hidden">
            {extendedImages.map((image, index) => (
              <Box
                key={index}
                flexShrink={0}
                // width={`${100 / slidesToShow}%`}
                width="248.43"
                transform={`translateX(-${translateX}%)`}
                transition="transform 0.5s ease"
                px={2}
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
    </Box>
  );
};

export default Commercial;
