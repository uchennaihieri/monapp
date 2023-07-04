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
import { CheckCircleIcon} from "@chakra-ui/icons";
import EasySteps from "@/components/EasySteps";

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
            <Text
              fontSize="1.625rem"
              className="clashRegular"
              lineHeight="1.75rem"
            >
              Pricing with you in mind
            </Text>
            <Text
              fontSize={["1.5rem", "3.75rem"]}
              // fontWeight={"600"}
              lineHeight={"5.28125rem"}
              letterSpacing={"-0.0625rem"}
              className="clashSemiBold"
            >
              Simple and fair pricing on budget and that works best for your on{" "}
            </Text>
            <Text
              className={dmsans.className}
              fontSize={"1.125rem"}
              lineHeight="1.75rem"
              w="36.75rem"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Text>
          </Flex>
        </NewHero>
        <Flex
          maxWidth={"87.375rem"}
          margin={"auto"}
          flexDirection={["column", "row"]}
          justify={"space-between"}
          align={"center"}
          gap={"1.5rem"}
          py={"4rem"}
        >
          <Card
            w="28.0625rem"
            h="42.4375rem"
            bg={"ffffff"}
            borderRadius="0.75rem;"
            border="2px solid rgba(0, 0, 0, 0.20)"
            boxShadow="0px 8px 64px 0px rgba(167, 167, 167, 0.24)"
            px={"1.88rem"}
            pt={"3.81rem"}
            pb={"8.5rem"}
            mt={["-8rem", "-16rem"]}
          >
            <Text
              fontWeight={"600"}
              fontSize={"2.25rem"}
              // mb="1.12rem"
              className="clashSemiBold"
              lineHeight="2.97894rem"
            >
              Mobile app
            </Text>
            <Text
              color="#02073E"
              fontSize="1.125rem"
              className={dmsans.className}
              fontWeight="400"
              lineHeight="1.65625rem"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Button
              colorScheme="#000000"
              variant={"outline"}
              width="12.5rem"
              height="3.875rem"
              mt="2rem"
              mb="2.62rem"
              borderRadius="0.62144rem"
              fontSize="1.45rem"
              className={dmsans.className}
              fontWeight="500"
              letterSpacing="-0.00831rem"
              lineHeight=" 2.71944rem"
            >
              {" "}
              Get app now
            </Button>
            <Text
              fontSize={"2.5rem"}
              fontWeight={"600"}
              mb="0.23rem"
              className="clashSemiBold"
              lineHeight="2.97894rem"
            >
              Free
            </Text>
            <Text
              color="#02073E"
              fontSize="1.125rem"
              className={dmsans.className}
              fontWeight="400"
              lineHeight="1.65625rem"
            >
              Lorem Ipsum is simply dummy
            </Text>
            <Box mt={"1rem"}>
              <HStack>
                <Icon as={CheckCircleIcon} mr={"10px"} h="1.5rem" w="1.5rem" />
                <Text
                  letterSpacing="-0.05rem"
                  fontWeight="500"
                  lineHeight={"3rem"}
                  className={dmsans.className}
                  fontSize="1rem"
                >
                  Zero Download Fee
                </Text>
              </HStack>
              <HStack>
                <Icon as={CheckCircleIcon} mr={"10px"} h="1.5rem" w="1.5rem" />
                <Text
                  letterSpacing="-0.05rem"
                  fontWeight="500"
                  lineHeight={"3rem"}
                  className={dmsans.className}
                  fontSize="1rem"
                >
                  Zero Setup Fee
                </Text>
              </HStack>
              <HStack>
                <Icon as={CheckCircleIcon} mr={"10px"} h="1.5rem" w="1.5rem" />
                <Text
                  letterSpacing="-0.05rem"
                  fontWeight="500"
                  lineHeight={"3rem"}
                  className={dmsans.className}
                  fontSize="1rem"
                >
                  Community Support
                </Text>
              </HStack>
            </Box>
          </Card>

          <Card
            w="28.0625rem"
            h="42.4375rem"
            bg={"ffffff"}
            borderRadius="0.75rem;"
            border="2px solid rgba(0, 0, 0, 0.20)"
            boxShadow="0px 8px 64px 0px rgba(167, 167, 167, 0.24)"
            px={"1.88rem"}
            pt={"3.81rem"}
            pb={"8.5rem"}
            mt={["0rem", "-16rem"]}
          >
            <Text
              fontWeight={"600"}
              fontSize={"2.25rem"}
              //  mb="1.12rem"
              className="clashSemiBold"
              lineHeight="2.97894rem"
            >
              Monapp QR Card
            </Text>
            <Text
              color="#02073E"
              fontSize="1.125rem"
              className={dmsans.className}
              fontWeight="400"
              lineHeight="1.65625rem"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Button
              bg={"#000000"}
              color="#ffffff"
              width="12.5rem"
              height="3.875rem"
              mt="2rem"
              mb="2.62rem"
              borderRadius="0.62144rem"
              fontSize="1.45rem"
              className={dmsans.className}
              fontWeight="500"
              letterSpacing="-0.00831rem"
              lineHeight=" 2.71944rem"
            >
              Order now
            </Button>
            <Text
              fontSize={"2.5rem"}
              fontWeight={"600"}
              mb="0.23rem"
              className="clashSemiBold"
              lineHeight="2.97894rem"
            >
              N3,000
            </Text>
            <Text
              color="#02073E"
              fontSize="1.125rem"
              className={dmsans.className}
              fontWeight="400"
              lineHeight="1.65625rem"
            >
              Lorem Ipsum is simply dummy
            </Text>
            <Box mt={"1rem"}>
              <HStack>
                <Icon as={CheckCircleIcon} mr={"10px"} h="1.5rem" w="1.5rem" />
                <Text
                  letterSpacing="-0.05rem"
                  fontWeight="500"
                  lineHeight={"3rem"}
                  className={dmsans.className}
                  fontSize="1rem"
                >
                  Zero Maintenance Fee
                </Text>
              </HStack>
              <HStack>
                <Icon as={CheckCircleIcon} mr={"10px"} h="1.5rem" w="1.5rem" />
                <Text
                  letterSpacing="-0.05rem"
                  fontWeight="500"
                  lineHeight={"3rem"}
                  className={dmsans.className}
                  fontSize="1rem"
                >
                  Free DElivery
                </Text>
              </HStack>
              <HStack>
                <Icon as={CheckCircleIcon} mr={"10px"} h="1.5rem" w="1.5rem" />
                <Text
                  letterSpacing="-0.05rem"
                  fontWeight="500"
                  lineHeight={"3rem"}
                  className={dmsans.className}
                  fontSize="1rem"
                >
                  Manage Card
                </Text>
              </HStack>
            </Box>
          </Card>
          <Card
            w="28.0625rem"
            h="42.4375rem"
            bg={"ffffff"}
            borderRadius="0.75rem;"
            border="2px solid rgba(0, 0, 0, 0.20)"
            boxShadow="0px 8px 64px 0px rgba(167, 167, 167, 0.24)"
            px={"1.88rem"}
            pt={"3.81rem"}
            pb={"8.5rem"}
            mt={["-8rem", "-16rem"]}
          >
            <Text
              fontWeight={"600"}
              fontSize={"2.25rem"}
              className="clashSemiBold"
              lineHeight="2.97894rem"
            >
              Transact
            </Text>
            <Text
              color="#02073E"
              fontSize="1.125rem"
              className={dmsans.className}
              fontWeight="400"
              lineHeight="1.65625rem"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Button
              colorScheme="#000000"
              variant={"outline"}
              width="12.5rem"
              height="3.875rem"
              mt="2rem"
              mb="2.62rem"
              borderRadius="0.62144rem"
              fontSize="1.45rem"
              className={dmsans.className}
              fontWeight="500"
              letterSpacing="-0.00831rem"
              lineHeight=" 2.71944rem"
            >
              Signup now
            </Button>
            <Text
              fontSize={"2.5rem"}
              fontWeight={"600"}
              mb="0.23rem"
              className="clashSemiBold"
              lineHeight="2.97894rem"
            >
              Free
            </Text>
            <Text
              color="#02073E"
              fontSize="1.125rem"
              className={dmsans.className}
              fontWeight="400"
              lineHeight="1.65625rem"
            >
              Lorem Ipsum is simply dummy
            </Text>
            <Box mt={"1rem"}>
              <HStack>
                <Icon as={CheckCircleIcon} mr={"10px"} h="1.5rem" w="1.5rem" />
                <Text
                  letterSpacing="-0.05rem"
                  fontWeight="500"
                  lineHeight={"3rem"}
                  className={dmsans.className}
                  fontSize="1rem"
                >
                  No hidden charges
                </Text>
              </HStack>
              <HStack>
                <Icon as={CheckCircleIcon} mr={"10px"} h="1.5rem" w="1.5rem" />
                <Text
                  letterSpacing="-0.05rem"
                  fontWeight="500"
                  lineHeight={"3rem"}
                  className={dmsans.className}
                  fontSize="1rem"
                >
                  Low Transaction Fee
                </Text>
              </HStack>
              <HStack>
                <Icon as={CheckCircleIcon} mr={"10px"} h="1.5rem" w="1.5rem" />
                <Text
                  letterSpacing="-0.05rem"
                  fontWeight="500"
                  lineHeight={"3rem"}
                  className={dmsans.className}
                  fontSize="1rem"
                >
                  On-demand Settlement
                </Text>
              </HStack>
            </Box>
          </Card>
        </Flex>
        <EasySteps />
        <OurCommunity />
        <FooterSection />
      </main>
    </>
  );
};

export default Pricing;
