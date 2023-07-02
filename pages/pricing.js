import FooterSection from "@/components/footerSection";
import NewHero from "@/components/NewHero";
import OurCommunity from "@/components/OurCommunity";
import PageSeo from "@/Seo/pageSeo";
import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  Flex,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  HStack,
  Card,
  Icon,
  VStack,
  Image,
} from "@chakra-ui/react";
import { Bree_Serif, DM_Sans } from "@next/font/google";
import { CheckCircleIcon, SettingsIcon } from "@chakra-ui/icons";

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

const dmsansBold = DM_Sans({ weight: "500", subsets: ["latin"] });
const bree = Bree_Serif({ weight: "400", subsets: ["latin"] });

// const PackageTier = ({ checked, typePlan, title, options }) => {

//     return (

//     );
// };
const Pricing = () => {
  return (
    <>
      <PageSeo title="Our Prices - Monapp" description="" />

      <main>
        <NewHero>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
            color={"white"}
            width={["80%", "50%"]}
            m={" 8rem auto"}
          >
            <Text fontSize="1.2rem">Pricing with you in mind</Text>
            <Text
              fontSize={["1.5rem", "2.8rem"]}
              fontWeight={"600"}
              lineHeight={"1.3"}
              letterSpacing={"-1px"}
              px={["0", "8rem"]}
            >
              Simple and fair pricing on budget and that works best for your on{" "}
            </Text>
            <Text
              p={["20px", "10px 90px"]}
              fontSize={"1.4rem"}
              px={["0", "8rem"]}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Text>
          </Flex>
        </NewHero>
        <Flex
          maxWidth={"80%"}
          margin={"auto"}
          flexDirection={["column", "row"]}
          justify={"space-between"}
          align={"center"}
          gap={"20px"}
          py={"4rem"}
          fontSize={"1.4rem"}
        >
          <Card
            bg={"ffffff"}
            borderRadius="12px;"
            b="2px solid rgba(0, 0, 0, 0.20)"
            boxShadow="0px 8px 64px 0px rgba(167, 167, 167, 0.24)"
            px={"1.5rem"}
            pt={"3rem"}
            pb={"10rem"}
            mt={["-8rem", "-16rem"]}
          >
            <Heading fontWeight={"700"} fontSize={"2rem"} mb={"10px"}>
              Mobile app
            </Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Button
              colorScheme="#000000"
              variant={"outline"}
              width="160px"
              height="45px"
              m="1.5rem 0"
            >
              {" "}
              Get app now
            </Button>
            <Heading fontSize={"2rem"} fontWeight={"700"}>
              Free
            </Heading>
            <Text>Lorem Ipsum is simply dummy</Text>
            <Box mt={"1rem"}>
              <HStack lineHeight={"2.5"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Zero Download Fee</span>
              </HStack>
              <HStack lineHeight={"2.5"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Zero Setup Fee</span>
              </HStack>
              <HStack lineHeight={"2.5"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Community Support</span>
              </HStack>
            </Box>
          </Card>
          <Card
            bg={"ffffff"}
            borderRadius="12px;"
            b="2px solid rgba(0, 0, 0, 0.20)"
            boxShadow="0px 8px 64px 0px rgba(167, 167, 167, 0.24)"
            px={"1.5rem"}
            pt={"3rem"}
            pb={"10rem"}
            mt={["0rem", "-16rem"]}
          >
            <Heading fontWeight={"700"} fontSize={"2rem"} mb={"10px"}>
              Monapp QR Card
            </Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Button
              colorScheme="#000000"
              bg={"#000000"}
              height="45px"
              // variant={"outline"}
              width="160px"
              m="1.5rem 0"
            >
              Order now
            </Button>
            <Heading fontSize={"2rem"} fontWeight={"700"}>
              N3,000
            </Heading>
            <Text>Lorem Ipsum is simply dummy</Text>
            <Box mt={"1rem"}>
              <HStack lineHeight={"2.5"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Zero Download Fee</span>
              </HStack>
              <HStack lineHeight={"2.5"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Zero Setup Fee</span>
              </HStack>
              <HStack lineHeight={"2.5"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Community Support</span>
              </HStack>
            </Box>
          </Card>
          <Card
            bg={"ffffff"}
            borderRadius="12px;"
            b="2px solid rgba(0, 0, 0, 0.20)"
            boxShadow="0px 8px 64px 0px rgba(167, 167, 167, 0.24)"
            px={"1.5rem"}
            pt={"3rem"}
            pb={"10rem"}
            mt={["0rem", "-16rem"]}
          >
            <Heading fontWeight={"700"} fontSize={"2rem"} mb={"10px"}>
              Transact
            </Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Button
              colorScheme="#000000"
              variant={"outline"}
              width="160px"
              height="45px"
              m="1.5rem 0"
            >
              Signup now
            </Button>
            <Heading fontSize={"2rem"} fontWeight={"700"}>
              Free
            </Heading>
            <Text>Lorem Ipsum is simply dummy</Text>
            <Box mt={"1rem"}>
              <HStack lineHeight={"2.5"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Zero Download Fee</span>
              </HStack>
              <HStack lineHeight={"2.5"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Zero Setup Fee</span>
              </HStack>
              <HStack lineHeight={"2.5"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Community Support</span>
              </HStack>
            </Box>
          </Card>
        </Flex>
        <VStack
          bg={"#000000"}
          w={"80%"}
          m={"auto"}
          color="#ffffff"
          borderRadius="16px"
          py="3rem"
        >
            <Image
            src="/birds.png"
            
            />
          <Heading>Getting Started in 3 easy steps</Heading>
          <Text fontSize="1.4rem" px="27rem" textAlign="center" letterSpacing="1.4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </Text>
          <Flex align="center" justify={"space-between"} textAlign={"center"} w="80%" m="auto">
            <Box>
            <Flex
                  bg="white"
                  borderRadius="50%"
                  color="#000000"
                  fontWeight="bold"
                  w={"25px"}
                  h={"25px"}
                  textAlign={"center"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  1
                </Flex>
              <Flex border="1px dashed white" w="12rem" h={"12rem"} borderRadius="50%" alignItems="center" justifyContent="center"                   m="auto"
>
                <Icon as={SettingsIcon} fontSize={"5rem"}></Icon>
              </Flex>
              <Heading fontSize="1.6rem">Download & Register</Heading>
              <Text fontSize="1.2rem">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Text>
            </Box>
            <Image 
            src="/curveup.png"
            w={"110px"}

            />
            <Box>
            <Flex
                  bg="white"
                  borderRadius="50%"
                  color="#000000"
                  fontWeight="bold"
                  w={"25px"}
                  h={"25px"}
                  textAlign={"center"}
                  alignItems={"center"}
                  justifyContent={"center"}
                 
                >
                  1
                </Flex>
              <Flex border="1px dashed white" w="12rem" h={"12rem"} borderRadius="50%" alignItems="center" justifyContent="center"                   m="auto"
>
                <Icon as={SettingsIcon} fontSize={"5rem"}></Icon>
              </Flex>
              <Heading fontSize="1.6rem">Download & Register</Heading>
              <Text fontSize="1.2rem">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Text>
            </Box>
            <Image 
            src="/curvedown.png"
            w={"110px"}
            />

              <Box>
            <Flex
                  bg="white"
                  borderRadius="50%"
                  color="#000000"
                  fontWeight="bold"
                  w={"25px"}
                  h={"25px"}
                  textAlign={"center"}
                  alignItems={"center"}
                  justifyContent={"center"}
              
                >
                  1
                </Flex>
              <Flex border="1px dashed white" w="12rem" h={"12rem"} borderRadius="50%" alignItems="center" justifyContent="center"                   m="auto"
>
                <Icon as={SettingsIcon} fontSize={"5rem"}></Icon>
              </Flex>
              <Heading fontSize="1.6rem">Download & Register</Heading>
              <Text fontSize="1.2rem">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Text>
            </Box>
          </Flex>
        </VStack>
        <OurCommunity />
        <FooterSection />
      </main>
    </>
  );
};

export default Pricing;
