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
      pt={{ base: "5", md: "20" }}
      pb={{ base: "32", md: "64" }}
      bg={"white"}
      color={"black"}
    >
      <Container maxW="container.xl" overflow={"hidden"}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 5, md: 10 }}
          alignItems="start"
          overflow={"hidden"}
        >
          <GridItem>
            <Stack maxW="100%" spaceY={6} color={"#222222"}>
              <Heading
                as="h2"
                size="2xl"
                lineHeight={{ base: "23px", md: "3rem", lg: "3.6125rem" }}
                fontWeight="600"
                fontSize={{ base: "16px", md: "2rem", lg: "2.5rem" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Monapp&apos;s credit card gives
                <br className="hidden lg:block" />
                you instant credit for vehicle maintenance — And That&apos;s
                <br className="hidden lg:block" />
                Just the Start!
              </Heading>

              <Text
                fontSize={{ base: "12px", md: "1.125rem", lg: "1.25rem" }}
                fontWeight={"semibold"}
                lineHeight={{ base: "17px", md: "1.75rem", lg: "1.80625rem" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Whether it&apos;s repairs or upkeep, simply swipe the card{" "}
                <br className="hidden lg:block" />
                and get back on the road without worrying about upfront{" "}
                <br className="hidden lg:block" />
                costs. It&apos;s the ultimate financial tool for hassle-free
                driving!
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
              overflow={"hidden"}
              gap={6}
              justifyContent={{ base: "center", lg: "start" }}
              py={"10"}
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
                  boxShadow="0px 4px 12px rgba(0, 0, 0, 0.08)"
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
                    fontSize={{ base: "14px", md: "20px", lg: "22px" }}
                    lineHeight={{ base: "15px", md: "22px" }}
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

      <Box
        position="absolute"
        bottom={{ base: "-30", md: "-20" }}
        left={0}
        zIndex={0}
        overflow={"hidden"}
      >
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
