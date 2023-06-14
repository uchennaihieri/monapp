import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue,
  Box,
  Text,
  Table,Thead,Th, Tbody,
  Tr,Td, Textarea,Button

} from "@chakra-ui/react";

const TransactionDrawer = ({ isOpen, onClose }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      {!isDesktop && (
        <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent borderTopRadius="20px" >
            <DrawerCloseButton  mt={"15px"}/>
            <DrawerHeader mt={"15px"} fontWeight={"bold"}>
              Transaction Details 
              <Text fontSize={"md"} fontWeight={"light"}>See transaction details below</Text>
            </DrawerHeader>
            <DrawerBody>
              {/* Display transaction details here */}
              <Box >
                <Table
                  variant="simple"
                  bg="#FFFFFF"
                  fontSize={"12px"}
                >
                  <Thead fontSize={"16px"}>
                    <Tr>
                      <Th color={"black"} fontWeight={"bold"}>NGN -3,041,730</Th>
                      <Th color="#27AE60" textAlign={"right"}>Success</Th>

                    </Tr>
                  </Thead>
                  <Tbody>
                  <Tr>
                    <Td>Recipient</Td>
                    <Td fontWeight={"bold"} textAlign={"right"}>Christopher Aniedi Udoh</Td>
                  </Tr>
                  <Tr>
                    <Td>Type</Td>
                    <Td fontWeight={"bold"} textAlign={"right"}>Purchase</Td>
                  </Tr>
                  <Tr>
                   <Td>Reference</Td> 
                   <Td fontWeight={"bold"} textAlign={"right"}>Rt7890yt</Td>
                  </Tr>
                  <Tr>
                    <Td> Paid on</Td>
                    <Td fontWeight={"bold"} textAlign={"right"}>Fri, May 19th 2023 at 8:15pm</Td>
                  </Tr>
                  </Tbody>
                </Table>
                <Box pt={"15px"}>
                  <Text pb={"7px"} fontSize={"12px"} ml={"20px"}>Description</Text>
                  <Textarea > </Textarea>
                  <Button my={"60px"} width={"100%"} p={"20px"} color={"white"} bg={"#000000"} fontWeight={"light"}>DOWNLOAD RECEIPT</Button>
                </Box>
              </Box>
              {/* Access transaction properties like transaction.date, transaction.amount, etc. */}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default TransactionDrawer;
