import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import BrokerSectionButtons from "./brokerSectionButtons";

const AddIncomeSection: React.FC = () => {
  return (
    <Box
      bg="#000000"
      h={{ base: "auto", md: "103.3rem" }}
      w="100%"
      bgColor="#1A1A1A"
      backgroundPosition="center"
      backgroundSize="cover"
      display="flex"
      justifyContent="center"
      position="relative"
      pt={{ base: "3.1075rem", md: "8.8rem" }}
      pb={{ base: "2.544rem", md: "auto" }}
    >
      <Box w={{ base: "90%", md: "90%" }}>
        <Text
          w="100%"
          fontWeight={800}
          color="#FFFFFF"
          fontSize={{ base: "1.5rem", md: "3rem" }}
          textAlign="left"
          mb={{ base: "1.25rem", md: "2rem" }}
        >
          Additional Income Potential for Brokers
        </Text>

        {/* BNPL Section */}
        <Box mb="2rem">
          <Text
            w={{ base: "auto", md: "60.56rem" }}
            fontWeight={500}
            color="#3A974C"
            fontSize={{ base: "0.875rem", md: "2rem" }}
            textAlign="left"
          >
            Fund Buy Now, Pay Later Bills And Earn Interest on BNPL Transactions:
          </Text>
          <Text
            w={{ base: "auto", md: "63.56rem" }}
            fontWeight={400}
            color="#FFFFFF"
            fontSize={{ base: "0.875rem", md: "2rem" }}
            textAlign="left"
          >
            As a Monapp Broker, you have the opportunity to fund Buy Now, Pay Later (BNPL) bills for customers. 
            By providing the necessary funds upfront, you help customers make immediate purchases while allowing them to pay back over time. 
            In return, you earn interest on the funded amount.
          </Text>
        </Box>

        {/* Escrow Payment Dispute Resolution */}
        <Box>
          <Text
            w={{ base: "auto", md: "60.56rem" }}
            fontWeight={500}
            color="#3A974C"
            fontSize={{ base: "0.875rem", md: "2rem" }}
            textAlign="left"
          >
            Resolve Escrow Payment Disputes Earn Resolution Fees:
          </Text>
          <Text
            w={{ base: "auto", md: "63.56rem" }}
            fontWeight={400}
            color="#FFFFFF"
            fontSize={{ base: "0.875rem", md: "2rem" }}
            textAlign="left"
          >
            Brokers play a crucial role in ensuring smooth transactions by resolving escrow payment disputes. 
            When buyers and sellers have disagreements over transactions, brokers step in to mediate and resolve the issues. 
            For their efforts in settling these disputes, brokers earn resolution fees. 
            This service enhances trust in the platform and encourages more transactions.
          </Text>
        </Box>

        {/* Call to Action Section */}
        <Box
          w="full"
          mt={{ base: "2rem", md: "8.125rem" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Text
            maxW={{ base: "20.5rem", md: "40.187rem" }}
            fontWeight={500}
            color="#FFFFFF"
            fontSize={{ base: "1.5rem", md: "2.5rem" }}
            lineHeight={{ base: "2.1875rem", md: "3.125rem" }}
            mb="1.25rem"
          >
            Become a Monapp Broker: It&apos;s Easy to Get Started!
          </Text>
          <Text
            maxW={{ base: "23.75rem", md: "68rem" }}
            fontWeight={400}
            color="#FFFFFF"
            fontSize={{ base: "0.875rem", md: "2.5rem" }}
            lineHeight={{ base: "1.25rem", md: "3.125rem" }}
          >
            Ready to join a community of passionate individuals making a difference in the Nigerian business landscape? 
            Becoming a Monapp Broker is a simple process that opens doors to exciting opportunities. 
            While we look for individuals with a drive to help businesses succeed, we also value a positive attitude and a willingness to learn.
          </Text>
          <BrokerSectionButtons section="adincome" />
        </Box>

        {/* Decorative Images */}
        <Image
          src="/Ellipse.svg"
          className="absolute top-0 md:top-80 left-[15%] md:left-[-5rem] md:transform md:rotate-[270deg] md:w-[27.976875rem] md:h-[27.976875rem]"
          alt="ellipse-image"
          width={500}
          height={500}
        />

        <Image
          src="/Spiral.png"
          className="absolute top-auto md:top-0 bottom-[-4rem] md:bottom-auto right-16 md:right-0 h-[16.429375rem] md:h-[38.0175rem] w-[8.191875rem] md:w-[17.4675rem] object-cover transform rotate-90 md:rotate-0 opacity-90"
          alt="spiral-image"
          width={500}
          height={500}
        />
      </Box>
    </Box>
  );
};

export default AddIncomeSection;
