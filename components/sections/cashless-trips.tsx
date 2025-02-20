"use client";

import { useRef } from "react";
import Image from "next/image";
import { Box,  Container, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import DownloadDialog from "../download-modal";

const CashlessTrips = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      bg="#F8F8F8"
      position="relative"
      color="black"
      minH={{ base: "100vh", lg: "100vh" }}
    >
      {/* Hero Content */}
      <Container maxW="container.xl" py={20}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", lg: "flex-start" }}
          gap={10}
        >
          {/* Left Content */}
          <Box
            flex="1"
            textAlign={{ base: "center", lg: "left" }}
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", lg: "flex-start" }}
          >
            <Heading
              fontSize={{ base: "16px", md: "2rem", lg: "2.5rem" }}
              lineHeight={{ base: "23px", md: "3rem", lg: "3.6125rem" }}
              fontWeight="semibold"
              mb={6}
            >
              <span className="text-[#0C8036]"> Are you a Rider? </span> <br />
              Enjoy seamless, cashless trips with digital payment options
            </Heading>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "12px", md: "1.125rem", lg: "1.25rem" }}
              lineHeight={{ base: "17px", md: "1.75rem", lg: "1.80625rem" }}
              mb={10}
            >
              Discover the convenience of seamless, cashless trips with our
              advanced digital payment options. Say goodbye to cash hassles and
              enjoy effortless payments every time you ride. Your journey, made
              smoother and smarter!
            </Text>
            <DownloadDialog buttonType='Rider' />
          </Box>

          {/* Right Content - Images */}
          <Box flex="1" position="relative" ref={ref} overflow={"hidden"}>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: isInView ? 0 : "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box mt={{ base: 5, lg: 0 }}>
                <Image
                  src="/images/phones-mobile.png"
                  alt="World Map"
                  width={695.23}
                  height={267.68}
                />
              </Box>
            </motion.div>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CashlessTrips;
