import Image from "next/image";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

import PersonalDriver from "@/public/images/personal-driver.jpg";
import CircleNumber1 from "@/public/icons/number-circle.svg";
import CircleNumber2 from "@/public/icons/number-circle-2.svg";
import CircleNumber3 from "@/public/icons/number-circle-3.svg";
import CircleNumber4 from "@/public/icons/number-circle-4.svg";

const GetStarted = () => {
  return (
    <Box bg="white" minH="100vh">
      <Container maxW="container.xl" py={"16"} pb={"32"}>
        <Box textAlign="center" color={"black"}>
          <Heading fontWeight="semibold" fontSize="40px" lineHeight="4.335rem">
            How to Get Started
          </Heading>
          <Text
            fontWeight="semibold"
            fontSize="1.25rem"
            lineHeight="2.16625rem"
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
            top={0}
            left={"14%"}
            bg="white"
            px={7}
            py={5}
            borderRadius="md"
            boxShadow="0px 41px 89px 0px #0000001A"
            maxW="400px"
            mx="auto"
            textAlign="start"
          >
            <Image
              src={CircleNumber1}
              alt="World Map"
              className="absolute w-[45px] h-[44px] -top-6 -left-0"
            />
            <Heading fontSize="2xl" mb={4} fontWeight={"bold"}>
              Fill your details
            </Heading>
            <Text fontWeight={"medium"}>
              Provide your email and phone number and verify your phone number
              with an OTP
            </Text>
          </Box>

          <Box
            position={"absolute"}
            top={0}
            right={"14%"}
            bg="white"
            px={7}
            py={5}
            borderRadius="md"
            boxShadow="0px 41px 89px 0px #0000001A"
            maxW="400px"
            mx="auto"
            textAlign="start"
          >
            <Image
              src={CircleNumber2}
              alt="World Map"
              className="absolute w-[45px] h-[44px] -top-6 -left-0"
            />
            <Heading fontSize="2xl" mb={4} fontWeight={"bold"}>
              Get Verified
            </Heading>
            <Text fontWeight={"medium"}>
              Provide your KYC details, e.g NIN, Face and ID verification
            </Text>
          </Box>

          <Box
            position={"absolute"}
            bottom={-14}
            left={"14%"}
            bg="white"
            px={7}
            py={5}
            borderRadius="md"
            boxShadow="0px 41px 89px 0px #0000001A"
            maxW="400px"
            mx="auto"
            textAlign="start"
          >
            <Image
              src={CircleNumber3}
              alt="World Map"
              className="absolute w-[45px] h-[44px] -top-6 -left-0"
            />
            <Heading fontSize="2xl" mb={4} fontWeight={"bold"}>
              Activate Your Card
            </Heading>
            <Text fontWeight={"medium"}>
              Activation is straightforward and takes only a few minutes.
            </Text>
          </Box>

          <Box
            position={"absolute"}
            bottom={-14}
            right={"14%"}
            bg="white"
            px={7}
            py={5}
            borderRadius="md"
            boxShadow="0px 41px 89px 0px #0000001A"
            maxW="400px"
            mx="auto"
            textAlign="start"
          >
            <Image
              src={CircleNumber4}
              alt="World Map"
              className="absolute w-[45px] h-[44px] -top-6 -left-0"
            />
            <Heading fontSize="2xl" mb={4} fontWeight={"bold"}>
              Get Access to Credits!
            </Heading>
            <Text fontWeight={"medium"}>
              Your Monapp Credit Card is ready for swiping! Use it for vehicle
              maintenance and repairs.
            </Text>
          </Box>

          <Image
            src={PersonalDriver}
            alt="personal driver"
            className="w-[612px] h-[408px]"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default GetStarted;
