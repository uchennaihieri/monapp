"use client";

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";

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
            <Stack maxW="100%" spaceY={6} color={"#222222"}>
              <Heading
                as="h2"
                size="2xl"
                lineHeight={{ base: "2rem", md: "3rem", lg: "3.6125rem" }}
                fontWeight="600"
                fontSize={{ base: "1.75rem", md: "2rem", lg: "2.5rem" }}
                textAlign={{ base: "center", md: "left" }}
              >
                Monapp&apos;s credit card gives you instant credit for vehicle
                maintenance — And That&apos;s Just the Start!
              </Heading>
              <Text
                fontSize={{ base: "1rem", md: "1.125rem", lg: "1.25rem" }}
                fontWeight={"semibold"}
                lineHeight={{ base: "1.5rem", md: "1.75rem", lg: "1.80625rem" }}
                textAlign={{ base: "center", md: "left" }}
              >
                Whether it&apos;s repairs or upkeep, simply swipe the card and
                get back on the road without worrying about upfront costs.
                It&apos;s the ultimate financial tool for hassle-free driving!
              </Text>
            </Stack>
          </GridItem>

          <GridItem>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 16.0625rem)",
              }}
              gap={6}
              justifyContent={{ base: "center", lg: "start" }}
              mx="auto"
            >
              {[
                {
                  image: "/icons/circle-layer.svg",
                  title: "Familiar Technology",
                  text: "Monapp's credit card for vehicle maintenance works just like any other card you already know. It's easy to use, no complicated apps or systems—just swipe and go!",
                },
                {
                  image: "/icons/rocket.svg",
                  title: "Instant Credit Access",
                  text: "Get Funds Instantly. Monapp ensures you have access to credit right when you need it—no delays!",
                },
                {
                  image: "/icons/bag.svg",
                  title: "Affordable Daily Repayment",
                  text: "Repay daily based on your earnings. Enjoy rates as low as 0.2% daily interest. We adapt to your schedule for ease.",
                },
                {
                  image: "/icons/restrict.svg",
                  title: "Restricted Spending",
                  text: "Your credit is strictly for vehicle repairs and maintenance. Stay on track and keep your vehicle running.",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={6}
                  borderRadius="lg"
                  boxShadow="0px 18px 58px 16px #0000000F"
                  spaceY={3}
                  width={{ base: "100%", lg: "16.0625rem" }}
                  height="auto"
                >
                  <Image
                    src={item.image}
                    height={27}
                    width={30}
                    alt={`${item.title}-icon`}
                  />
                  <Heading
                    as="h3"
                    fontSize={{ base: "18px", md: "20px", lg: "22px" }}
                    lineHeight={{ base: "20px", md: "22px" }}
                    fontWeight="700"
                    letterSpacing="0.5px"
                  >
                    {item.title}
                  </Heading>
                  <Text
                    color="#222222"
                    fontSize={{ base: "0.875rem", md: "1rem" }}
                    lineHeight={{ base: "1.25rem", md: "1.5rem" }}
                    fontWeight="400"
                    letterSpacing="0.01875rem"
                  >
                    {item.text}
                  </Text>
                </Box>
              ))}
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
