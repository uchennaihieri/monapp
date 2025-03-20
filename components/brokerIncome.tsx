import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";


export default function BrokerIncome() {
  return (
    <Flex
      background="#fff"
      flexDirection={{ base: "column-reverse", md: "row" }}
      w={{ base: "90%", md: "90%", lg: "90%" }}
      pt={{base:"", md:"6.06rem"}}
    
  
    >
    

      <Box
        alignSelf={{ base: "flex-start", md: "flex-end" }} 
        justifyContent='center'
      
        mb={{base:"1.25rem", md:'2rem'}}
      >
        <Text
          
          fontWeight={800}
          color="#3A974C"
          fontSize={{ base: "1.125rem", md: "2.35rem" }}
          
          textAlign={{ base: "left", md: "left" }}
          
        >
         Earning Potential
        </Text>
        <Text
          w={{ base: "18.56rem", md: "37.8125rem" }}
          fontWeight={500}
          color="#000"
          fontSize={{ base: "1.5rem", md: "3rem" }}
          
          textAlign={{ base: "left", md: "left" }}
          mb={{ base: "0.625rem", md: "2rem" }}
          lineHeight={{base:"1.875rem", md:'3.125rem'}}
        >
            Maximize Your Income as a Monapp Broker
        </Text>

        <Text
          w={{ base: "100%", md: "35.8125rem" }}
          
          color="#000"
          lineHeight={{ base: "1.25rem", md: "2.3rem" }}
          fontWeight={400}
          fontSize={{ base: "0.875rem", md: "1.8rem" }}
          textAlign={{ base: "left", md: "left" }}
        >
            As a Monapp Broker, you have the exciting opportunity to earn substantial income by simply helping others with their financial transactions. 
             </Text>

     
      </Box>
      <Box 
      mb={{ base: "2rem", md:0 }}
        zIndex={1} // Ensure it overlaps the text container
        ml={{ base: 0, md: "-7rem" }}
            
              >
      <Image
              alt={"brokerIncome image"}
              src={"/peopleBG.png"}
              loading="lazy"
              width={744}
              height={485} 
              
        />
      </Box>
    </Flex>
  );
}
