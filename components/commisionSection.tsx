import { Box, Text, Flex, Highlight } from "@chakra-ui/react";

const CommisionSection: React.FC = () => {
  return (
    <Box w={{ base: "90%", md: "auto" }}>
      <Text
        mt={{ base: "0rem", md: "-1rem" }}
        fontWeight={500}
        color="#3A974C"
        fontSize={{ base: "1.125rem", md: "2.5rem" }}
        textAlign={{ base: "left", md: "left" }}
      >
        Commission Structure:
      </Text>

      <Flex
        background="#fff"
        flexDirection={{ base: "column", md: "row" }}
        w={{ base: "100%", md: "90%", lg: "71.295vw" }}
        pb={{ base: "3.125rem", md: "8.06rem" }}
      >
        {[
          {
            title: "Transaction Fee",
            description: "Monapp charges a 0.5% fee on every transaction made through our platform.",
            highlight: "0.5%",
            width: "37.8125rem",
          },
          {
            title: "Broker's Share",
            description: "As a Broker, you will earn 0.35% of this fee.",
            highlight: "0.35%",
            width: "25.56rem",
          },
          {
            title: "Monapp's Share",
            description: "Monapp retains 0.15% of the transaction fee.",
            highlight: "0.15%",
            width: "23.25rem",
          },
        ].map(({ title, description, highlight, width }) => (
          <Box key={title} w={{ base: "100%", md: width }} mb={{ base: "0.625rem", md: "2rem" }}>
            <Text fontWeight={500} color="#000" fontSize={{ base: "1.5rem", md: "2rem" }} textAlign="left" mb="1rem">
              {title}
            </Text>
            <Text color="#000" lineHeight={{ base: "1.5rem", md: "3.1rem" }} fontWeight={400} fontSize={{ base: "1rem", md: "2rem" }}>
              <Highlight query={highlight} styles={{ color: "#0C8036" }}>
                {description}
              </Highlight>
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CommisionSection;
