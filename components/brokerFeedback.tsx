"use client";
import { Box, Button, Flex, Text, Highlight } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

interface BrokerFeedbackProps {
  heading: string;
  message: string;
  invite: string;
  action: boolean;
}

const BrokerFeedback: FC<BrokerFeedbackProps> = ({ heading, message, invite, action }) => {
  return (
    <Flex flexDirection="column" justify="center" align="center" w="100%" h="auto">
      <Text
        fontSize={["1.5rem", "2.5rem"]}
        lineHeight={["1.125rem", "128.9%"]}
        textAlign="center"
        fontWeight="450"
        mb={{ base: "1.75rem", md: "1.8rem" }}
      >
        {heading}
      </Text>

      <Text
        fontSize={["1rem", "2rem"]}
        lineHeight={["1.125rem", "128.9%"]}
        textAlign="center"
        fontWeight="300"
        mb={{ base: "1rem", md: "1rem" }}
      >
        <Highlight query="Monapp Broker!" styles={{ fontWeight: "500" }}>
          {message}
        </Highlight>
      </Text>

      <Box>
        <Text fontSize={["1rem", "2rem"]} lineHeight={["1.125rem", "128.9%"]} textAlign="center" fontWeight="300">
          {invite}
        </Text>

        {action && (
          <Link href="https://chat.whatsapp.com/BoI1VZNWYsuJ3sQDbMpMF3" target="_blank">
            <Button
              borderRadius="0.125rem"
              h="4rem"
              w="100%"
              bg="#000000"
              color="white"
              _hover={{ bg: "black.400" }}
              my="10px"
            >
              <Text fontSize={{ base: "0.875rem", md: "1.6rem" }} fontWeight="400">
                Join Our WhatsApp Community Now
              </Text>
            </Button>
          </Link>
        )}
      </Box>
    </Flex>
  );
};

export default BrokerFeedback;
