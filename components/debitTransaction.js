import { HStack, Image, Td, Text, Tr, Icon, useBreakpointValue, Box, Flex} from "@chakra-ui/react";
import React, {useState} from "react";
import { GoPrimitiveDot } from "react-icons/go";
import TransactionDrawer from "@/pages/transactionsDrawer";

function DebitTransaction() {
    const isDesktop=useBreakpointValue({base: false, lg: true})
    const [isDrawerOpen, setIsDrawerOpen]=useState(false)
  
    const handleOpenDrawer=()=>{
      // setSelectedTransaction(transaction);
      setIsDrawerOpen(true);
    }
  
    // fuction to handle closing the drawer
    const handleCloseDrawer=()=>{
      setIsDrawerOpen(false)
    }
  
  return (
    <Tr h="79px" onClick={handleOpenDrawer}>
      <Td display={["none", "table-cell"]}>1</Td>
      <Td>
        <HStack>
          <Image src={"/sentImage.svg"} width={"24px"} height={"24px"} alt='sent' />
          <Text fontSize={["14px", "15px"]}> Franklin U. Stores </Text>
        </HStack>
        <Box marginLeft={"2rem"} fontSize={"sm"}>
     {!isDesktop && <span>25 April at 09:30am</span>} 

        </Box>

             </Td>
      <Td display={["none", "table-cell"]}>RET647UYT9IO</Td>
      <Td fontWeight={"bold"}> NGN 42,000.98
      <Box  fontSize={"sm"} >
     {!isDesktop && <Flex align="center"><Icon as={GoPrimitiveDot} boxSize={6} color="#27AE60" p="0px" />
          <Text fontWeight={"thin"}> Success </Text></Flex>} 

        </Box>

      </Td>
      <Td display={["none", "table-cell"]}>25 April at 09:30am</Td>
      <Td display={["none", "table-cell"]}>
        <HStack spacing={0}>
          {" "}
          <Icon as={GoPrimitiveDot} boxSize={8} color="#27AE60" p="0px" />
          <Text> Success </Text>
        </HStack>{" "}
      </Td>
      <TransactionDrawer isOpen={isDrawerOpen} 
                 onClose={handleCloseDrawer} 
                // transaction={selectedTransaction} 
               />
    </Tr>
  );
}

export default DebitTransaction;
