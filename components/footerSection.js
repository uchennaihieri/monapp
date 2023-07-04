import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  VStack,
  StackDivider,
  HStack,
  Image,
  Center,
  Button,
  Divider,
  useToast,
  Link
} from "@chakra-ui/react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { Bree_Serif, DM_Sans, Poppins } from "@next/font/google";
import { useRouter } from "next/router";

const bree = Bree_Serif({ weight: "400", subsets: ["latin"] });
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

export default function FooterSection() {
  const toast = useToast();

  const getApp = () => {
    toast({
      title: "Sorry, you cannot get the app at this time.",
      description:
        'This app is only available to pilot users for now. We still have open slots in our pilot which you can join by filling the form on our "work with us" page or simply sign up to be notified when we are available for public use',
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const router = useRouter();
  const goIssues = () => {
    router.push("/issues");
  };

  const goPrivacy = () => {
    router.push("/privacyPolicy");
  };

  const goTerms = () => {
    router.push("/termsofuse");
  };

  return (
    <Box

      bgColor="#000000"
      bgImg="url('/footerbg.svg')"
      color="#ffffff"

      mt='20rem' 

      
    >
      <Center 
      >
        <Box
          h={{ base: "18.93rem", md: "24.8125rem" }}
          w={{ base: "21.81rem", md: "83.75rem" }}
          mt={{ base: "-6.46rem", md: "-15.25rem" }}
          bg="#183656"
          borderRadius={"16px"}
        >
          <Flex
            flexDirection={"column"}
            ml={'7rem'}
            mt={'3.5rem'}
            gap={'2rem'}
            
          >
            {/* <Box
              textAlign={{ base: "center", md: "start" }}
              mb={{ base: "1.79rem", md: "0rem" }}
              w={{ base: "15.68em", md: "29.87em" }}
              
            > */}
              <Text
                // letterSpacing={{ base: "-0.26px", md: "0" }}
                lineHeight={{ base: "1.8rem", md: "2.65625rem" }}
                fontWeight={'600'}
                fontSize={{ base: "1.18rem", md: "2.375rem" }}
                color={"#ffffff"}
                className='clashSemiBold'
                w={'33.5625rem'}
                // pr={["0","11rem"]}
              >
                Join community of 137k+ users start making payment today.
              </Text>
              <Text color="#ffffff"  w='34.0625rem' h='4.6875rem' fontSize={'1.125rem'}justifyContent={'center'}  lineHeight={'1.78125rem'} letterSpacing={'-0.0225rem'} >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum is simply. Lorem Ipsum is simply.
              </Text>
            {/* </Box> */}

            <HStack
            // mt={["0","2rem"]}
            >
              <Image
                src={"/app-store.svg"}
                w={{ base: "8rem", md: "10.81rem" }}
                h={{ base: "2.61rem", md: "3.18rem" }}
                onClick={getApp}
                _hover={{ cursor: "pointer" }}
              />
              <Image
                src={"/play-store.svg"}
                w={{ base: "8.06rem", md: "10.81rem" }}
                h={{ base: "2.67rem", md: "3.18rem" }}
                onClick={getApp}
                _hover={{ cursor: "pointer" }}
              />
            </HStack>
          </Flex>
        </Box>
      </Center>
          <Flex 
          position={'Absolute'}
          bottom={'23rem'}
          right={'25rem'}
          >
            <Image
            width={'18.0185rem'}
            // height={'34.15163rem'}
            alt="mobile dashboard"
            src={'/mobileDash.png'}
            />
            
            <Image
            src="mobilePayment.png"
            width={'16.51756rem'}
            // height={'30.76281rem'}
            alt="mobile Payment"
            ml='-4.2rem'
            mt='4.7rem'
            />
          </Flex>


      <Flex
        py={{ base: "2.75rem", md: "4.125rem" }}
        px={{ base: "3.68rem", md: "11.87rem" }}
        justify="space-between"
        gap={["10px","40px"]}
        flexDirection={["column","row"]}


        
      >
        <Flex
          flexDirection={"column"}
          gap={["10px","40px"]}
          textAlign={["center","start"]}
          alignItems={["center","start"]}
          mb={{ base: "0.78rem", md: "1.5rem" }}
        >
          <Image
            src={"/logo.png"}
            width={{ base: "12.5rem", md: "12.5rem" }}
            height={"2.71rem"}
          />
          <HStack display={"flex"}>
            <Icon as={BsFacebook} fontSize="1.38rem" color="#ffffff" />
            <Icon as={BsTwitter} fontSize="1.38rem" color="#ffffff" />
            <Icon as={AiFillInstagram} fontSize="1.38rem" color="#ffffff" />
            <Icon as={AiFillLinkedin} fontSize="1.38rem" color="#ffffff" />
          </HStack>
          <Text
          textAlign={{ base: "center", md: "start" }}
          mt={{ base: "1.43rem", md: "0rem" }}
          mb={{ base: "0.87rem", md: "0rem" }}
          color="#ffffff"
          opacity={"0.6"}
          lineHeight={{ base: "1.12rem", md: "2.18rem" }}
          fontWeight={400}
          fontSize={{ base: "0.875rem" }}
          className={dmsans.className}
        >
          Copyright @ MONAPP 2023. All Rights Reserved.
        </Text>
        </Flex>
        <Flex
        flexDirection={["column","row"]}
        gap={["30px","60px"]}  

    >
            <VStack
            fontSize="16px"
            textAlign={["center","start"]}
            alignItems={["center","start"]}
            
            
            >
                <Text fontSize="1.2em">Features</Text>
                <Link bg="none" _hover={"none"} fontSize={"12px"}>QR Code </Link>
                <Link bg="none" _hover={"none"} fontSize={"12px"}>QR Code</Link>
                <Link bg="none" _hover={"none"} fontSize={"12px"}>QR Code</Link>
                <Link bg="none" _hover={"none"} fontSize={"12px"}>QR Code</Link>
                <Link bg="none" _hover={"none"} fontSize={"12px"}>QR Code</Link>


            </VStack>
            <VStack
            textAlign={["center","start"]}
            alignItems={["center","start"]}
            

            >
                <Text fontSize="1.2em">Company</Text>
                <Link bg="none" _hover={"none"} fontSize={"12px"}>About us</Link>
                <Link bg="none" _hover={"none"} fontSize={"12px"}>Career</Link>
                <Link bg="none" _hover={"none"} fontSize={"12px"}>Press</Link>
                <Link bg="none" _hover={"none"} fontSize={"12px"}>Blog</Link>
                <Link bg="none" _hover={"none"} fontSize={"12px"}>Contact</Link>
  
            </VStack>
            <VStack
            textAlign={["center","start"]}
            alignItems={["center","start"]}
            
            
            >
            <Text fontSize="1.2em">Legal</Text>
                <Link bg="none" _hover={"none"} fontSize={"12px"}>Privacy</Link>
                <Link bg="none" _hover={"none"} fontSize={"12px"}>Terms and Condition</Link>
            </VStack>
            <VStack
            textAlign={["center","start"]}
            alignItems={["center","start"]}
            
                        
            >
            <Text fontSize="1.2em">Get the app</Text>
                <Image
                 src={"/qr.png"}
                 _hover={{ cursor: "pointer" }}></Image>
            </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}
