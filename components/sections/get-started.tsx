import Image from "next/image";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

import PersonalDriver from "@/public/images/personal-driver.jpg";
import CircleNumber1 from "@/public/icons/number-circle.svg";
import CircleNumber2 from "@/public/icons/number-circle-2.svg";
import CircleNumber3 from "@/public/icons/number-circle-3.svg";
import CircleNumber4 from "@/public/icons/number-circle-4.svg";

const GetStarted = () => {
  return (
    <Box bg="white">
      <Container
        maxW="container.xl"
        pt={{ base: 8, md: "16" }}
        pb={{ base: "32", lg: "48" }}
      >
        <Box textAlign="center" color={"black"}>
          <Heading
            fontWeight="semibold"
            fontSize={{ base: "16px", md: "40px" }}
            lineHeight={{ base: "23px", md: "4.335rem" }}
          >
            How to Get Started
          </Heading>
          <Text
            fontWeight="semibold"
            fontSize={{ base: "12px", md: "1.25rem" }}
            lineHeight={{ base: "17px", md: "2.16625rem" }}
            mb={10}
          >
            Your Journey with Monapp Starts here! Just follow these <br /> easy
            steps to get started
          </Text>
        </Box>

        <Box
          textAlign="center"
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position={"relative"}
          pt={"20"}
        >
          <Box
            position={"absolute"}
            top={{ base: 3, md: 10 }}
            left={{ base: "0", md: "10", lg: "20" }}
            bg="white"
            px={{ base: 3, md: 4, lg: 5 }}
            py={{ base: 3, md: 4, lg: 5 }}
            borderRadius="md"
            boxShadow="0px 41px 89px 0px #0000001A"
            width={{ base: "156px", md: "300px", lg: "366px" }}
            height={{ base: "80px", md: "100px", lg: "126px" }}
            mx="auto"
            textAlign="start"
          >
            <Image
              src={CircleNumber1}
              alt="circle-number"
              className="absolute w-[18px] md:w-[30px] h-[18px] md:h-[30px] lg:w-[45px] lg:h-[44px] -top-3 md:-top-4 lg:-top-6 -left-0"
            />
            <Heading
              fontSize={{ base: "8px", md: "xl", lg: "2xl" }}
              lineHeight={{ base: "11px", md: "20px", lg: "23px" }}
              mb={4}
              fontWeight={"bold"}
            >
              Fill your details
            </Heading>
            <Text
              fontWeight={"medium"}
              fontSize={{ base: "8px", md: "14px", lg: "16px" }}
              lineHeight={{ base: "11px", md: "20px", lg: "23px" }}
            >
              Provide your email and phone number and verify your phone number
              with an OTP
            </Text>
          </Box>

          <Box
            position={"absolute"}
            top={{ base: 3, md: 5 }}
            right={{ base: "-0", md: "-0", lg: "20" }}
            bg="white"
            px={{ base: 3, md: 4, lg: 5 }}
            py={{ base: 3, md: 4, lg: 5 }}
            borderRadius="md"
            boxShadow="0px 41px 89px 0px #0000001A"
            width={{ base: "156px", md: "300px", lg: "366px" }}
            height={{ base: "80px", md: "100px", lg: "126px" }}
            mx="auto"
            textAlign="start"
          >
            <Image
              src={CircleNumber2}
              alt="circle-number"
              className="absolute w-[18px] md:w-[30px] h-[18px] md:h-[30px] lg:w-[45px] lg:h-[44px] -top-3 md:-top-4 lg:-top-6 -left-0"
            />
            <Heading
              fontSize={{ base: "8px", md: "xl", lg: "2xl" }}
              lineHeight={{ base: "11px", md: "20px", lg: "23px" }}
              mb={4}
              fontWeight={"bold"}
            >
              Get Verified
            </Heading>
            <Text
              fontWeight={"medium"}
              fontSize={{ base: "8px", md: "14px", lg: "16px" }}
              lineHeight={{ base: "11px", md: "20px", lg: "23px" }}
            >
              Provide your KYC details, e.g NIN, Face and ID verification
            </Text>
          </Box>

          <Box
            position={"absolute"}
            bottom={-14}
            left={{ base: "0", md: "5", lg: "20" }}
            bg="white"
            px={{ base: 3, md: 4, lg: 5 }}
            py={{ base: 3, md: 4, lg: 5 }}
            borderRadius="md"
            boxShadow="0px 41px 89px 0px #0000001A"
            width={{ base: "156px", md: "300px", lg: "366px" }}
            height={{ base: "80px", md: "100px", lg: "126px" }}
            mx="auto"
            textAlign="start"
          >
            <Image
              src={CircleNumber3}
              alt="circle-number"
              className="absolute w-[18px] md:w-[30px] h-[18px] md:h-[30px] lg:w-[45px] lg:h-[44px] -top-3 md:-top-4 lg:-top-6 -left-0"
            />
            <Heading
              fontSize={{ base: "8px", md: "xl", lg: "2xl" }}
              lineHeight={{ base: "11px", md: "20px", lg: "23px" }}
              mb={4}
              fontWeight={"bold"}
            >
              Activate Your Card
            </Heading>
            <Text
              fontWeight={"medium"}
              fontSize={{ base: "8px", md: "14px", lg: "16px" }}
              lineHeight={{ base: "11px", md: "20px", lg: "23px" }}
            >
              Activation is straightforward and takes only a few minutes.
            </Text>
          </Box>

          <Box
            position={"absolute"}
            bottom={-14}
            right={{ base: "-0", md: "-0", lg: "20" }}
            bg="white"
            px={{ base: 3, md: 4, lg: 5 }}
            py={{ base: 3, md: 4, lg: 5 }}
            borderRadius="md"
            boxShadow="0px 41px 89px 0px #0000001A"
            width={{ base: "156px", md: "300px", lg: "366px" }}
            height={{ base: "80px", md: "100px", lg: "126px" }}
            mx="auto"
            textAlign="start"
          >
            <Image
              src={CircleNumber4}
              alt="circle-number"
              className="absolute w-[18px] md:w-[30px] h-[18px] md:h-[30px] lg:w-[45px] lg:h-[44px] -top-3 md:-top-4 lg:-top-6 -left-0"
            />
            <Heading
              fontSize={{ base: "8px", md: "xl", lg: "2xl" }}
              lineHeight={{ base: "11px", md: "20px", lg: "23px" }}
              mb={4}
              fontWeight={"bold"}
            >
              Get Access to Credits!
            </Heading>
            <Text
              fontWeight={"medium"}
              fontSize={{ base: "8px", md: "14px", lg: "16px" }}
              lineHeight={{ base: "11px", md: "20px", lg: "23px" }}
            >
              Your Monapp Credit Card is ready for swiping! Use it for vehicle
              maintenance and repairs.
            </Text>
          </Box>

          <Image
            src={PersonalDriver}
            alt="personal driver"
            className="w-[304px] h-[186px] md:w-[612px] md:h-[408px]"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default GetStarted;
