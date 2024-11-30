"use client";

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Icon,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaCreditCard, FaChartLine, FaWallet, FaLock } from "react-icons/fa";

export default function CreditCardSection() {
  return (
    <Box
      position="relative"
      overflow="hidden"
      pt={20}
      pb={"64"}
      bg={"white"}
      color={"black"}
    >
      <Box
        position="absolute"
        bottom="-100px"
        left="-100px"
        width="600px"
        height="600px"
        bg="black"
        borderRadius="50%"
        transform="scale(2)"
        zIndex={-1}
      />
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={5}
          alignItems="start"
        >
          <GridItem>
            <Stack maxW="32.4375rem" spaceY={6} color={"#222222"}>
              <Heading
                as="h2"
                size="2xl"
                lineHeight="3.6125rem"
                fontWeight="600"
                fontSize="2.5rem"
              >
                Monapp's credit card gives you instant credit for vehicle
                maintenance — And That's Just the Start!
              </Heading>
              <Text
                fontSize="1.25rem"
                fontWeight={"semibold"}
                lineHeight="1.80625rem"
              >
                Whether it's repairs or upkeep, simply swipe the card and get
                back on the road without worrying about upfront costs. It's the
                ultimate financial tool for hassle-free driving!
              </Text>
            </Stack>
          </GridItem>

          <GridItem>
            <Grid
              templateColumns="repeat(2, 16.0625rem)"
              gap={6}
              justifyContent="center"
              mx="auto"
            >
              <Box
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="0px 18px 58px 16px #0000000F"
                spaceY={3}
                width="16.0625rem"
                height="17.3125rem"
              >
                <Image
                  src="/icons/circle-layer.svg"
                  height={27}
                  width={30}
                  alt="credit-icon"
                />
                <Heading
                  as="h3"
                  fontSize="22px"
                  lineHeight="22px"
                  fontWeight="700"
                  letterSpacing="0.5px"
                >
                  Familiar Technology
                </Heading>
                <Text
                  color="#222222"
                  fontSize="0.875rem"
                  lineHeight="1.5rem"
                  fontWeight="400"
                  letterSpacing="0.01875rem"
                >
                  Monapp's credit card for vehicle maintenance works just like
                  any other card you already know. It's easy to use, no
                  complicated apps or systems—just swipe and go!
                </Text>
              </Box>

              <Box
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="0px 18px 58px 16px #0000000F"
                spaceY={3}
                width="16.0625rem"
                height="17.3125rem"
              >
                <Image
                  src="/icons/rocket.svg"
                  height={27}
                  width={30}
                  alt="credit-icon"
                />
                <Heading
                  as="h3"
                  fontSize="22px"
                  lineHeight="22px"
                  fontWeight="700"
                  letterSpacing="0.5px"
                >
                  Instant Credit Access
                </Heading>
                <Text
                  color="#222222"
                  fontSize="0.875rem"
                  lineHeight="1.5rem"
                  fontWeight="400"
                  letterSpacing="0.01875rem"
                >
                  Get Funds Instantly. Monapp ensures you have access to credit
                  right when you need it—no delays!
                </Text>
              </Box>

              <Box
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="0px 18px 58px 16px #0000000F"
                spaceY={3}
                width="16.0625rem"
                height="17.3125rem"
              >
                <Image
                  src="/icons/bag.svg"
                  height={27}
                  width={30}
                  alt="credit-icon"
                />
                <Heading
                  as="h3"
                  fontSize="22px"
                  lineHeight="22px"
                  fontWeight="700"
                  letterSpacing="0.5px"
                >
                  Affordable Daily Repayment
                </Heading>
                <Text
                  color="#222222"
                  fontSize="0.875rem"
                  lineHeight="1.5rem"
                  fontWeight="400"
                  letterSpacing="0.01875rem"
                >
                  Repay daily based on your earnings. Enjoy rates as low as 0.2%
                  daily interest. We adapt to your schedule for ease.
                </Text>
              </Box>

              <Box
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="0px 18px 58px 16px #0000000F"
                spaceY={3}
                width="16.0625rem"
                height="17.3125rem"
              >
                <Image
                  src="/icons/restrict.svg"
                  height={27}
                  width={30}
                  alt="credit-icon"
                />
                <Heading
                  as="h3"
                  fontSize="22px"
                  lineHeight="22px"
                  fontWeight="700"
                  letterSpacing="0.5px"
                >
                  Restricted Spending
                </Heading>
                <Text
                  color="#222222"
                  fontSize="0.875rem"
                  lineHeight="1.5rem"
                  fontWeight="400"
                  letterSpacing="0.01875rem"
                >
                  Your credit is strictly for vehicle repairs and maintenance.
                  Stay on track and keep your vehicle running.
                </Text>
              </Box>
            </Grid>
          </GridItem>
        </Grid>
      </Container>

      <Box position="absolute" bottom={"-20"} left={0} zIndex={1}>
        <Image
          src="/icons/squigle-black.svg"
          alt="World Map"
          width={660.23}
          height={267.68}
        />
      </Box>
    </Box>
  );
}
