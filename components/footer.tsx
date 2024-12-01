import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="black" color="white" py={16}>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: "1fr", md: "2fr 6fr" }}
          gap={8}
          alignItems={{ base: "center", md: "flex-start" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          {/* Logo and Social Icons */}
          <VStack
            spaceY={6}
            textAlign={{ base: "center", md: "left" }}
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <Image
              src="/icons/monapp-logo-white.svg"
              alt="Monapp Logo"
              w="150px"
            />
            <Flex gap={4}>
              <Link href="#">
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  w="24px"
                  h="24px"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  w="24px"
                  h="24px"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  w="24px"
                  h="24px"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  w="24px"
                  h="24px"
                />
              </Link>
            </Flex>
          </VStack>

          <Grid
            templateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
            gapX={8}
            gapY={{ base: "12", md: "8" }}
            justifyItems={{ base: "center", md: "start" }}
            alignItems={{ base: "center", md: "flex-start" }}
          >
            {/* Features Column */}
            <Stack spaceY={4}>
              <Heading size="md" fontSize={"18px"}>
                Features
              </Heading>
              <Stack spaceY={2} fontSize={"11.25px"}>
                <Link href="#">QR Code</Link>
                <Link href="#">Escrow Service</Link>
                <Link href="#">Buy Now, Pay Later (BNPL)</Link>
                <Link href="#">Saving Options</Link>
                <Link href="#">Access To Loans</Link>
              </Stack>
            </Stack>

            {/* Company Column */}
            <Stack spaceY={4}>
              <Heading size="md" fontSize={"18px"}>
                Company
              </Heading>
              <Stack spaceY={2} fontSize={"11.25px"}>
                <Link href="#">About us</Link>
                <Link href="#">Careers</Link>
                <Link href="#">Press</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Contact</Link>
              </Stack>
            </Stack>

            {/* Legal Column */}
            <Stack spaceY={4}>
              <Heading size="md" fontSize={"18px"}>
                Legal
              </Heading>
              <Stack spaceY={2} fontSize={"11.25px"}>
                <Link href="#">Privacy</Link>
                <Link href="#">Terms & Condition</Link>
              </Stack>
            </Stack>

            {/* QR Code */}
            <VStack align="flex-start" spaceY={4}>
              <Heading size="md" fontSize={"18px"}>
                Get the app
              </Heading>
              <Image
                src="/icons/qr-code.svg"
                alt="QR Code"
                w="129px"
                h="124px"
              />
            </VStack>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Text mt={16} textAlign="center" color="white">
          Copyright @ MONAPP 2023. All Rights Reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
