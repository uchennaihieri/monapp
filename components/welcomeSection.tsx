import { Box, Text, Flex } from "@chakra-ui/react";

const WelcomeSection: React.FC = () => {
  return (
    <Flex
      background="#fff"
      flexDirection={{ base: "column", md: "row" }}
      w={{ base: "90%", md: "90%", lg: "71.295vw" }}
      pt={{ base: "3.413rem", md: "6.06rem" }}
      pb={{ base: "0rem", md: "8.06rem" }}
    >
      <Box>
        <Text
          fontWeight={400}
          color="#3A974C"
          fontSize={{ base: "1.125rem", md: "2.35rem" }}
          textAlign="left"
          mb={{ base: "0.625rem", md: "0" }}
        >
          Welcome to Monapp
        </Text>

        <Text
          w={{ base: "100%", md: "54.54rem" }}
          fontWeight={{ base: 500, md: 600 }}
          color="#000"
          fontSize={{ base: "1.5rem", md: "2.5rem" }}
          textAlign="left"
          mb={{ base: "1.25rem", md: "2rem" }}
        >
          Making Financial Transactions Seamless, While Empowering People To Be Their Own Boss
        </Text>

        <Text
          w={{ base: "100%", md: "54.54rem" }}
          color="#000"
          lineHeight={{ base: "1.5625rem", md: "2.3rem" }}
          fontWeight={400}
          fontSize={{ base: "0.875rem", md: "1.5rem" }}
          textAlign="left"
        >
          At Monapp, we&apos;re dedicated to creating a cashless world by making payment transactions easy and accessible
          for everyone. As a pioneering Nigerian fintech company, our mobile app allows users to send and receive money,
          pay bills, purchase goods and services, recharge airtime, buy data, and much more—all from their smartphones.
          Our mission is to empower individuals and businesses with seamless, secure, and efficient financial solutions.
        </Text>
      </Box>
    </Flex>
  );
};

export default WelcomeSection;
