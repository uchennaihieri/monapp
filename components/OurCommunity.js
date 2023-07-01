import {
    Box,
    Heading,
    Flex,
    Text,
    Card,
    Icon,
    VStack,
    Image
  } from "@chakra-ui/react";
  import {  StarIcon } from "@chakra-ui/icons";

function OurCommunity() {
  return (

<>
<VStack mt={'15rem'} mb='5rem' pb={["10rem","12rem"]} alignItems={'center'} justifyContent={'center'}>
          <Flex flexDir={"column"} align={"center"} mb='5rem' gap='5'>
            <Text fontSize={'2.625rem'} fontWeight={'700'} className='clashSemiBold' lineHeight={'124%'}>Why our community love us</Text>
            <Text fontSize="1.125rem" w={'27.5rem'} h={'3.375rem'} lineHeight={'1.8rem'} textAlign={"center"} >
             Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </Text>
          </Flex>
          
          <Flex                  
            align={"center"}
            flexDirection={["column", "row"]}
            gap={"2rem"}
          >
            <Card
              borderRadius-="14.045px"
              w='27.504rem'
              h={'15.3125rem'}
              bg="#fff"
              boxShadow=" 0px 3.1210196018218994px 17.165607452392578px 0px rgba(21, 19, 91, 0.04), 0px 2.340764284133911px 4.681528568267822px 0px rgba(51, 71, 255, 0.01), 0px 0.7802549004554749px 3.1210196018218994px 0px rgba(20, 20, 43, 0.01)"
              
            >
              <Box p='3'>
              <Text fontSize="180.97531rempx" fontWeight={'600'} color="#14142B" lineHeight={'1.65844rem'}>
                “Beat service ever. Fast and reliable”
              </Text>
              <Text fontSize="0.78025rem" color="#6E7191" mt="0.5rem" lineHeight={'1.26794rem'} h={'3.07225rem'} w={'21.01813rem'}>
                I have been using this for months on a regular and is just
                 everything you will ever need to buy, sell and transact. Their
                fees are overwhelming too. Keep up guys.
              </Text>
              <Flex justify={"space-between"} align={"center"} mt="4rem">
                <Flex >
                    <Image
                    src={"/playstorelogo.png"}
                    mr="1rem"
                    /> 
                    <span >
                  <Text fontWeight={"600"}>Emmanuel Davies</Text>
                  <Text color="#6E7191" fontSize="14px">Reviews</Text>
                  </span>
                </Flex>
                <Box>
                    <Icon as={StarIcon} color={"#ffc148"} mx="2px"> </Icon>
                    <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>
                    <Icon as={StarIcon} color={"#ffc148"}   mx="2px"></Icon>
                    <Icon as={StarIcon} color={"#ffc148"}   mx="2px"></Icon>
                    <Icon as={StarIcon} color={"#ffc148"}  mx="2px"></Icon>


                </Box>
              </Flex>

              </Box>
            </Card>

            <Card
              borderRadius-="14.045px"
              w='27.504rem'
              h={'15.3125rem'}
              bg="#fff"
              boxShadow=" 0px 3.1210196018218994px 17.165607452392578px 0px rgba(21, 19, 91, 0.04), 0px 2.340764284133911px 4.681528568267822px 0px rgba(51, 71, 255, 0.01), 0px 0.7802549004554749px 3.1210196018218994px 0px rgba(20, 20, 43, 0.01)"
              
            >
              <Box p='3'>
              <Text fontSize="180.97531rempx" fontWeight={'600'} color="#14142B" lineHeight={'1.65844rem'}>
                “Beat service ever. Fast and reliable”
              </Text>
              <Text fontSize="0.78025rem" color="#6E7191" mt="0.5rem" lineHeight={'1.26794rem'} h={'3.07225rem'} w={'21.01813rem'}>
                I have been using this for months on a regular and is just
                 everything you will ever need to buy, sell and transact. Their
                fees are overwhelming too. Keep up guys.
              </Text>
              <Flex justify={"space-between"} align={"center"} mt="4rem">
                <Flex >
                   <Image
                    src={"/appstorelogo.png"}
                    mr="1rem"
                    /> 
                    <span >
                  <Text fontWeight={"600"}>Emmanuel Davies</Text>
                  <Text color="#6E7191" fontSize="14px">Reviews</Text>
                  </span>
                </Flex>
                <Box>
                    <Icon as={StarIcon} color={"#ffc148"} mx="2px"> </Icon>
                    <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>
                    <Icon as={StarIcon} color={"#ffc148"}   mx="2px"></Icon>
                    <Icon as={StarIcon} color={"#ffc148"}   mx="2px"></Icon>
                    <Icon as={StarIcon} color={"#ffc148"}  mx="2px"></Icon>


                </Box>
              </Flex>

              </Box>
            </Card>

            <Card
              borderRadius-="14.045px"
              w='27.504rem'
              h={'15.3125rem'}
              bg="#fff"
              boxShadow=" 0px 3.1210196018218994px 17.165607452392578px 0px rgba(21, 19, 91, 0.04), 0px 2.340764284133911px 4.681528568267822px 0px rgba(51, 71, 255, 0.01), 0px 0.7802549004554749px 3.1210196018218994px 0px rgba(20, 20, 43, 0.01)"
              
            >
              <Box p='3'>
              <Text fontSize="180.97531rempx" fontWeight={'600'} color="#14142B" lineHeight={'1.65844rem'}>
                “Beat service ever. Fast and reliable”
              </Text>
              <Text fontSize="0.78025rem" color="#6E7191" mt="0.5rem" lineHeight={'1.26794rem'} h={'3.07225rem'} w={'21.01813rem'}>
                I have been using this for months on a regular and is just
                 everything you will ever need to buy, sell and transact. Their
                fees are overwhelming too. Keep up guys.
              </Text>
              <Flex justify={"space-between"} align={"center"} mt="4rem">
                <Flex >
                    <Image
                    src={"/playstorelogo.png"}
                    mr="1rem"
                    /> 
                    <span >
                  <Text fontWeight={"600"}>Emmanuel Davies</Text>
                  <Text color="#6E7191" fontSize="14px">Reviews</Text>
                  </span>
                </Flex>
                <Box>
                    <Icon as={StarIcon} color={"#ffc148"} mx="2px"> </Icon>
                    <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>
                    <Icon as={StarIcon} color={"#ffc148"}   mx="2px"></Icon>
                    <Icon as={StarIcon} color={"#ffc148"}   mx="2px"></Icon>
                    <Icon as={StarIcon} color={"#ffc148"}  mx="2px"></Icon>


                </Box>
              </Flex>

              </Box>
            </Card>

            
          </Flex>
        </VStack>

</>
  )
}

export default OurCommunity