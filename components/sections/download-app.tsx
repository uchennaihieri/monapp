import Image from "next/image";
import { Box, Button, Container, Flex, Heading, Input } from "@chakra-ui/react";

import ArrowRight from "@/public/icons/arrow-right.svg";

const DownloadApp = () => {
  return (
    <Box bg="white" minH="50vh" position="relative">
      <Container maxW="container.xl" py={"20"}>
        <Box textAlign="center" spaceY={10} color={"black"}>
          <Heading fontWeight="semibold" fontSize="40px" lineHeight="4.335rem">
            Download the driver app or fill a form with your phone number <br />{" "}
            for personalized support
          </Heading>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            gap={8}
          >
            <Button
              bg="#222222"
              color="#FFFFFF"
              fontWeight="bold"
              px={6}
              py={7}
              fontSize={"24px"}
              lineHeight={"34px"}
              borderRadius={"10px"}
            >
              Download App
              <Image
                src={ArrowRight}
                alt="arrow-right"
                className="w-6 h-6 mt-1"
              />
            </Button>

            {/* Phone Input Group */}
            <Flex
              gap={2}
              maxW="600px"
              bg="white"
              px={3}
              py={2}
              border="2px solid"
              borderColor="#222222"
              borderRadius="14px"
              height="auto"
              width="689px"
              alignItems="center"
            >
              <Input placeholder="Enter your Phone Number" flex="1" pl={4} />
              <Button
                bg="#222222"
                color="white"
                borderRadius="10px"
                height="50px"
                width="160px"
                fontSize="18px"
              >
                Get Started
              </Button>
            </Flex>
          </Box>
        </Box>
      </Container>
      <Box position="absolute" bottom={"0"} right={0} zIndex={1}>
        <Image
          src="/icons/squigle-black-small.svg"
          alt="World Map"
          width={215.23}
          height={293.68}
        />
      </Box>
    </Box>
  );
};

export default DownloadApp;
