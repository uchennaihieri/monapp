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
<VStack pt={["3rem"]} pb={["10rem","12rem"]}>
          <Flex flexDir={"column"} align={"center"}>
            <Heading mb="1rem">Why our community love us</Heading>
            <Text fontSize="1rem" px={["7rem","31rem"]} textAlign={"center"} mb="1rem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Text>
          </Flex>
          <Flex
            w={"80%"}
            m="auto"
            gap={"10px"}
            align={"center"}
            justify="space-between"
            flexDirection={["column", "row"]}
          >
            <Card
              borderRadius-="12.032px"
              bg="#ffffff"
              boxShadow="0px 8px 64px 0px rgba(167, 167, 167, 0.24)"
              p="30px 20px"
            >
              <Heading fontSize="18px" color="#14142B">
                “Beat service ever. Fast and reliable”
              </Heading>
              <Text fontSize="14px" color="#6E7191" mt="0.5rem">
                I have been using this for months on a regular and is just
                everything you will ever need to buy, sell and transact. Their
                fees are overwhelming too. Keep up guys.
              </Text>
              <Flex justify={"space-between"} align={"center"} mt="2rem">
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
            </Card>
            <Card
              borderRadius-="12.032px"
              bg="#ffffff"
              boxShadow="0px 8px 64px 0px rgba(167, 167, 167, 0.24)"
              p="30px 20px"
            >
              <Heading fontSize="18px" color="#14142B">
                “Beat service ever. Fast and reliable”
              </Heading>
              <Text fontSize="14px" color="#6E7191" mt="0.5rem">
                I have been using this for months on a regular and is just
                everything you will ever need to buy, sell and transact. Their
                fees are overwhelming too. Keep up guys.
              </Text>
              <Flex justify={"space-between"} align={"center"} mt="2rem">
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
            </Card>
            <Card
              borderRadius-="12.032px"
              bg="#ffffff"
              boxShadow="0px 8px 64px 0px rgba(167, 167, 167, 0.24)"
              p="30px 20px"
            >
              <Heading fontSize="18px" color="#14142B">
                “Beat service ever. Fast and reliable”
              </Heading>
              <Text fontSize="14px" color="#6E7191" mt="0.5rem">
                I have been using this for months on a regular and is just
                everything you will ever need to buy, sell and transact. Their
                fees are overwhelming too. Keep up guys.
              </Text>
              <Flex justify={"space-between"} align={"center"} mt="2rem">
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
            </Card>
          </Flex>
        </VStack>

</>
  )
}

export default OurCommunity