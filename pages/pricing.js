import FooterSection from "@/components/footerSection";
import Navbar from "@/components/navbar";
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
  Image
} from "@chakra-ui/react";
import { Bree_Serif, DM_Sans } from "@next/font/google";
import { CheckCircleIcon} from "@chakra-ui/icons";

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
            width={["80%","50%"]}
            m={" 5rem auto"}
          >
            <Text>Pricing with you in mind</Text>
            <Text
              fontSize={["1.5rem","2.6rem"]}
              fontWeight={"600"}
              lineHeight={"1.1"}
              letterSpacing={"-1px"}
            >
              Simple and fair pricing on budget and that works best for your on{" "}
            </Text>
            <Text p={["20px","10px 90px"]} fontSize={"1rem"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Text>
          </Flex>
        </NewHero>
        <Flex
          maxWidth={"80%"}
          margin={"auto"}
          flexDirection={["column","row"]}
          justify={"space-between"}
          align={"center"}
          gap={"20px"}
          py={"4rem"}
        >
          <Card
            bg={"ffffff"}
            borderRadius="12px;"
            b="2px solid rgba(0, 0, 0, 0.20)"
            boxShadow="0px 8px 64px 0px rgba(167, 167, 167, 0.24)"
            p={"2rem 1.5rem"}
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
              <HStack lineHeight={"2"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Zero Download Fee</span>
              </HStack>
              <HStack lineHeight={"2"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Zero Setup Fee</span>
              </HStack>
              <HStack lineHeight={"2"}>
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
            p={"2rem 1.5rem"}
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
              <HStack lineHeight={"2"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Zero Download Fee</span>
              </HStack>
              <HStack lineHeight={"2"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Zero Setup Fee</span>
              </HStack>
              <HStack lineHeight={"2"}>
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
            p={"2rem 1.5rem"}
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
              m="1.5rem 0"
            >
              Signup now
            </Button>
            <Heading fontSize={"2rem"} fontWeight={"700"}>
              Free
            </Heading>
            <Text>Lorem Ipsum is simply dummy</Text>
            <Box mt={"1rem"}>
              <HStack lineHeight={"2"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Zero Download Fee</span>
              </HStack>
              <HStack lineHeight={"2"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Zero Setup Fee</span>
              </HStack>
              <HStack lineHeight={"2"}>
                <Icon as={CheckCircleIcon} mr={"10px"} />
                <span>Community Support</span>
              </HStack>
            </Box>
          </Card>
        </Flex>

        <OurCommunity />
        <FooterSection />
      </main>
    </>
  );
};

export default Pricing;
