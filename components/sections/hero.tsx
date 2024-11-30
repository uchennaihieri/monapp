"use client";

import Image from "next/image";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box bg="black" position="relative" overflow="hidden" minH="100vh">
      {/* Navigation */}
      <Container maxW="container.xl" py={6}>
        <Flex justify="space-between" align="center">
          <Image
            src="/icons/monapp-logo-white.svg"
            alt="Monapp Logo"
            width={150}
            height={40}
          />
          <Button
            variant="outline"
            color="white"
            borderColor="white"
            fontWeight={"bold"}
            borderWidth="2px"
            borderRadius="10px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ bg: "whiteAlpha.200" }}
            px={5}
            py={4}
          >
            Become a Remote Agent
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow-right-icon"
              width={24}
              height={24}
            />
          </Button>
        </Flex>
      </Container>

      {/* Hero Content */}
      <Container maxW="container.xl" py={"16"} mt={10}>
        <Flex direction={{ base: "column", lg: "row" }} gap={10}>
          {/* Left Content */}
          <Box flex="1">
            <Heading color="white" fontSize="3rem" lineHeight="4.335rem" mb={6}>
              Financial solutions to power Africa's transportation future
            </Heading>
            <Text
              color="white"
              fontSize="1.5rem"
              lineHeight="2.16625rem"
              mb={10}
            >
              From easy access to credit for vehicle maintenance to seamless
              payments and micro-insurance, Monapp keeps your business on the
              road without the stress.
            </Text>

            {/* Phone Input Group */}
            <Flex
              gap={2}
              maxW="600px"
              bg="white"
              px={4}
              py={3}
              borderRadius={14}
              height={"60px"}
              width={"689px"}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Input
                variant="outline"
                placeholder="Enter your Phone Number"
                pl={4}
              />
              <Button
                bg="#222222"
                color="white"
                borderRadius={14}
                width={"155px"}
                height={"50px"}
                fontSize="24px"
                lineHeight="34.68px"
                _hover={{ bg: "blackAlpha.800" }}
              >
                Get Started
              </Button>
            </Flex>
          </Box>

          {/* Right Content - Images */}
          <Box flex="1">
            <Box position="absolute" top={-1} bottom={0} right={10} zIndex={1}>
              <Image
                src="/images/world-map.png"
                alt="World Map"
                width={695.23}
                height={267.68}
              />
            </Box>

            <Box position="relative" zIndex={2}>
              <Image
                src="/images/hero-image.png"
                alt="Hero Images"
                priority
                width={575}
                height={632}
              />
            </Box>
          </Box>
        </Flex>
      </Container>

      <Box position="absolute" bottom={"-20"} left={0} zIndex={1}>
        <Image
          src="/icons/hero-white-squigel.svg"
          alt="World Map"
          width={660.23}
          height={267.68}
        />
      </Box>

      <Box
        position="absolute"
        top="15%"
        bottom={"-20"}
        right="48.5%"
        zIndex={1}
      >
        <Image src="/icons/dot.svg" alt="dot-icon" width={6} height={5} />
      </Box>

      <Box position="absolute" bottom="30%" left="32%" zIndex={1}>
        <Image src="/icons/dot.svg" alt="dot-icon" width={6} height={5} />
      </Box>
    </Box>
  );
}
