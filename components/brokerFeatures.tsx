import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

const BrokerFeatures: FC = () => {
  const featureData = [
    {
      title: "Be a Part of Something Big",
      description:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      icon: "/br1.svg",
    },
    {
      title: "Help Businesses Succeed",
      description:
        "Your guidance will empower businesses to reach more customers and grow.",
      icon: "/br2.svg",
    },
    {
      title: "Get Rewarded for Your Expertise",
      description:
        "Earn a steady income based on the success of the businesses and customers you manage.",
      icon: "/br3.svg",
    },
    {
      title: "Flexible Work, Big Impact",
      description:
        "Work from anywhere and make a real difference in the Nigerian business landscape.",
      icon: "/br4.svg",
    },
  ];

  return (
    <Flex
      borderRadius="0.736rem"
      background="#fff"
      w={{ base: "90%", md: "70rem", lg: "93rem" }}
      flexDirection={{ base: "column", md: "row" }}
      justify={{ base: "left", md: "center" }}
    >
      <Box
        pt={{ base: "3.125rem", md: "3.5rem" }}
        bgImage="url('/oval.svg')"
        backgroundPosition="center"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        textAlign={{ base: "left", md: "center" }}
      >
        <Text
          fontWeight={800}
          color="#3A974C"
          fontSize={{ base: "1.125rem", md: "2.35rem" }}
          mb={{ base: "0.625rem", md: "0" }}
        >
          Why become a Monapp broker?
        </Text>
        <Text
          mx="auto"
          fontWeight={{ base: 500, md: 600 }}
          color="#000"
          fontSize={{ base: "1.5rem", md: "2.5rem" }}
          maxWidth="53rem"
        >
          Here&apos;s why becoming a Monapp Broker is awesome
        </Text>

        <Flex
          w="full"
          flexDirection={{ base: "column", md: "row" }}
          flexWrap="wrap"
          gap={{ base: "0.625rem", md: "2.5rem" }}
          alignItems={{ base: "left", md: "center" }}
          justify={{ base: "start", md: "center" }}
          mt={{ base: "2rem", md: "6.24rem" }}
          pl={{ base: "1rem", md: "0" }}
          pb={{ base: "2.375rem", md: "0" }}
        >
          {featureData.map((feature, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="row"
              w={{ base: "auto", md: "35rem" }}
              h={{ base: "auto", md: "11rem" }}
            >
              {/* Icon Box */}
              <Box
                h={{ base: "40px", md: "4.93rem" }}
                w={{ base: "40px", md: "4.93rem" }}
                bgColor="rgba(15, 24, 40, 0.1)"
                mr={{ base: "0.625rem", md: "1.875rem" }}
                borderRadius="0.9375rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                <Box width={{ base: "1.1075rem", md: "2.1875rem" }} height={{ base: "1.17rem", md: "2.3125rem" }}>
                  <Image src={feature.icon} layout="responsive" width={100} height={100} alt="" />
                </Box>
              </Box>

              {/* Text Box */}
              <Box w={{ base: "17.68rem", md: "auto" }}>
                <Text
                  fontSize={{ base: "1.125rem", md: "2rem" }}
                  color="#161C2D"
                  fontWeight={500}
                  letterSpacing="-0.5px"
                  lineHeight="2rem"
                  mb={{ base: "0.3125rem", md: "0.93rem" }}
                >
                  {feature.title}
                </Text>
                <Text
                  fontSize={{ base: "0.875rem", md: "2rem" }}
                  color="#161C2D"
                  opacity="70%"
                  fontWeight={400}
                  letterSpacing="-0.2px"
                  lineHeight={{ base: "1.25rem", md: "1.8125rem" }}
                  w={{ base: "100%", md: "27rem" }}
                >
                  {feature.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default BrokerFeatures;
