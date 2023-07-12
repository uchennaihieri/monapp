import {
  Box,
  Heading,
  Flex,
  Text,
  Card,
  Icon,
  VStack,
  Image,
  Spacer
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Inter } from "@next/font/google";



const inter = Inter({ weight: '500', subsets: ['latin'] })
const interBold = Inter({ weight: '600', subsets: ['latin'] })

function OurCommunity() {
  return (

    <>

      <VStack mt={'15rem'} mb='5rem' pb={["10rem", "12rem"]} alignItems={'center'} justifyContent={'center'}>
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
            borderRadius="14.045px"
            w='27.504rem'
            h={'15.3125rem'}
            bg="#fff"
            boxShadow=" 0px 3.1210196018218994px 17.165607452392578px 0px rgba(21, 19, 91, 0.04), 0px 2.340764284133911px 4.681528568267822px 0px rgba(51, 71, 255, 0.01), 0px 0.7802549004554749px 3.1210196018218994px 0px rgba(20, 20, 43, 0.01)"
            py='1.9rem' px='1.56rem'
          >
            <Flex h='100%' flexDirection={'column'} justify={'space-between'}  >
              <Box>
                <Text className={interBold.className} fontSize="0.97531rem" fontWeight={'600'} color="#14142B" lineHeight={'1.65844rem'}>
                  “Beat service ever. Fast and reliable”
                </Text>
                <Text className={inter.className} fontSize="0.78025rem" fontStyle={'normal'} color="#6E7191" mt="0.5rem" lineHeight={'1.26794rem'} >
                  I have been using this for months on a regular and is just
                  everything you will ever need to buy, sell and transact. Their
                  fees are overwhelming too. Keep up guys.
                </Text>
              </Box>
              <Spacer />
              <Flex justify={"space-between"} align={"center"} >
                <Flex >
                  <Image
                    w='3.121rem'
                    h='3.121rem'
                    src={"/playstorelogo.png"}
                    mr="1rem"
                  />
                  <Flex flexDirection={'column'} justify={'center'}>

                    <Text className={interBold.className} fontSize={'0.7315rem'} color='#14142B'
                      lineHeight='0.97525rem' mb='0.25rem'>Emmanuel Davies</Text>
                    <Text color="#6E7191" className={inter.className} fontSize={'0.7315rem'}
                      lineHeight='0.97525rem'>review</Text>
                  </Flex>
                </Flex>
                <Box>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"> </Icon>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>


                </Box>
              </Flex>

            </Flex>
          </Card>

          <Card
            borderRadius="14.045px"
            w='27.504rem'
            h={'15.3125rem'}
            bg="#fff"
            boxShadow=" 0px 3.1210196018218994px 17.165607452392578px 0px rgba(21, 19, 91, 0.04), 0px 2.340764284133911px 4.681528568267822px 0px rgba(51, 71, 255, 0.01), 0px 0.7802549004554749px 3.1210196018218994px 0px rgba(20, 20, 43, 0.01)"
            py='1.9rem' px='1.56rem'
          >
            <Flex h='100%' flexDirection={'column'} justify={'space-between'}  >
              <Box>
                <Text className={interBold.className} fontSize="0.97531rem" fontWeight={'600'} color="#14142B" lineHeight={'1.65844rem'}>
                  “Beat service ever. Fast and reliable”
                </Text>
                <Text className={inter.className} fontSize="0.78025rem" color="#6E7191" mt="0.5rem" lineHeight={'1.26794rem'} >
                  I have been using this for months on a regular and is just
                  everything you will ever need to buy, sell and transact. Their
                  fees are overwhelming too. Keep up guys.
                </Text>
              </Box>
              <Spacer />
              <Flex justify={"space-between"} align={"center"} >
                <Flex >
                  <Image
                    w='3.121rem'
                    h='3.121rem'
                    src={"/appstorelogo.png"}
                    mr="1rem"
                  />
                  <Flex flexDirection={'column'} justify={'center'}>

                    <Text className={interBold.className} fontSize={'0.7315rem'} color='#14142B'
                      lineHeight='0.97525rem' mb='0.25rem'>Emmanuel Davies</Text>
                    <Text color="#6E7191" className={inter.className} fontSize={'0.7315rem'}
                      lineHeight='0.97525rem'>review</Text>
                  </Flex>
                </Flex>
                <Box>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"> </Icon>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>


                </Box>
              </Flex>

            </Flex>
          </Card>

          <Card
            borderRadius="14.045px"
            w='27.504rem'
            h={'15.3125rem'}
            bg="#fff"
            boxShadow=" 0px 3.1210196018218994px 17.165607452392578px 0px rgba(21, 19, 91, 0.04), 0px 2.340764284133911px 4.681528568267822px 0px rgba(51, 71, 255, 0.01), 0px 0.7802549004554749px 3.1210196018218994px 0px rgba(20, 20, 43, 0.01)"
            py='1.9rem' px='1.56rem'
          >
            <Flex h='100%' flexDirection={'column'} justify={'space-between'}  >
              <Box>
                <Text className={interBold.className} fontSize="0.97531rem" fontWeight={'600'} color="#14142B" lineHeight={'1.65844rem'}>
                  “Beat service ever. Fast and reliable”
                </Text>
                <Text className={inter.className} fontSize="0.78025rem" color="#6E7191" mt="0.5rem" lineHeight={'1.26794rem'} >
                  I have been using this for months on a regular and is just
                  everything you will ever need to buy, sell and transact. Their
                  fees are overwhelming too. Keep up guys.
                </Text>
              </Box>
              <Spacer />
              <Flex justify={"space-between"} align={"center"} >
                <Flex >
                  <Image
                    w='3.121rem'
                    h='3.121rem'
                    src={"/playstorelogo.png"}
                    mr="1rem"
                  />
                  <Flex flexDirection={'column'} justify={'center'}>

                    <Text className={interBold.className} fontSize={'0.7315rem'} color='#14142B'
                      lineHeight='0.97525rem' mb='0.25rem'>Emmanuel Davies</Text>
                    <Text color="#6E7191" className={inter.className} fontSize={'0.7315rem'}
                      lineHeight='0.97525rem'>review</Text>
                  </Flex>
                </Flex>
                <Box>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"> </Icon>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>
                  <Icon as={StarIcon} color={"#ffc148"} mx="2px"></Icon>


                </Box>
              </Flex>

            </Flex>
          </Card>

        </Flex>
      </VStack>

    </>
  )
}

export default OurCommunity