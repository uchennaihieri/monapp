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

import Logo from "@/public/icons/monapp-logo-white.svg";

export default function Hero() {
  return (
    <Box bg="black" position="relative" overflow="hidden" minH="100vh">
      {/* Navigation */}
      <Container maxW="container.xl" py={6}>
        <Flex justify="space-between" align="center">
          <Image
            src={Logo}
            alt="Monapp Logo"
            className="w-[120px] md:w-[150px] md:h-[40px]"
          />
          <Button
            variant="outline"
            color="white"
            borderColor="white"
            fontWeight="bold"
            borderWidth="2px"
            borderRadius="10px"
            fontSize={{ base: "14px", md: "18px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ bg: "whiteAlpha.200" }}
            px={{ base: 3, md: 4, lg: 5 }}
            py={{ base: 2, md: 3, lg: 4 }}
            gap={2}
          >
            Become a Remote Agent
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow-right-icon"
              width={20}
              height={20}
            />
          </Button>
        </Flex>
      </Container>

      {/* Hero Content */}
      <Container
        maxW="container.xl"
        py={{ base: "0", md: "16" }}
        pb={{ base: "8", md: "0" }}
        mt={10}
      >
        <Flex direction={{ base: "column", lg: "row" }} gap={10}>
          {/* Left Content */}
          <Box flex="1" textAlign={{ base: "center", md: "left" }}>
            <Heading
              color="white"
              fontWeight={"semibold"}
              fontSize={{ base: "1.8rem", md: "2.5rem", lg: "3rem" }}
              lineHeight={{ base: "2.5rem", md: "4rem" }}
              mb={6}
            >
              Financial solutions to power Africa&apos;s transportation future
            </Heading>
            <Text
              color="white"
              fontWeight={"semibold"}
              fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
              lineHeight={{ base: "1.25rem", md: "2rem" }}
              mb={10}
            >
              From easy access to credit for vehicle maintenance to seamless
              payments and micro-insurance, Monapp keeps your business on the
              road without the stress.
            </Text>

            {/* Phone Input Group */}
            <Flex
              gap={2}
              bg="white"
              px={{ base: "1", md: "2" }}
              py={{ base: "1", md: "2" }}
              borderRadius={14}
              maxW="100%"
              width={{ base: "100%", md: "600px" }}
              height="auto"
              align="center"
            >
              <Input placeholder="Enter your Phone Number" flex="1" pl={4} />
              <Button
                bg="#222222"
                color="white"
                borderRadius="10px"
                height={{ base: "40px", md: "50px" }}
                width={{ base: "35%", md: "160px" }}
                fontSize="18px"
              >
                Get Started
              </Button>
            </Flex>
          </Box>

          {/* Right Content - Images */}
          <Box flex="1" mt={{ base: "10", md: "0" }}>
            <Box
              position="absolute"
              top={{ base: "24rem", md: "-1" }}
              right={{ base: "20", md: "10" }}
              zIndex={1}
            >
              <Image
                src="/images/world-map.png"
                alt="World Map"
                className="w-[300] h-[100] md:w-[695.23] md:h-[267.68]"
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

      <Box
        position="absolute"
        bottom={{ base: "-28", md: "0" }}
        left={0}
        zIndex={1}
      >
        <Image
          src="/icons/hero-white-squigel.svg"
          alt="white-squigle"
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
        display={{ base: "none", md: "block" }}
      >
        <Image src="/icons/dot.svg" alt="dot-icon" width={6} height={5} />
      </Box>

      <Box
        position="absolute"
        bottom="30%"
        left="32%"
        zIndex={1}
        display={{ base: "none", md: "block" }}
      >
        <Image src="/icons/dot.svg" alt="dot-icon" width={6} height={5} />
      </Box>
    </Box>
  );
}
