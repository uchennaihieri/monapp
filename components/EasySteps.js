import React from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  VStack,
  Image,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Bree_Serif, DM_Sans } from "@next/font/google";
import profileCircleIcon from "./Icons/profileCircleIcon";
import easySettingIcon from "./Icons/easySettingIcon";
import flashIcon from "./Icons/flashIcon";
import settingIcon from "./Icons/settingIcon";

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

const dmsansBold = DM_Sans({ weight: "500", subsets: ["latin"] });
const bree = Bree_Serif({ weight: "400", subsets: ["latin"] });

function EasySteps() {
  return (
    <>
      <VStack
        bg={"#000000"}
        maxWidth={"87.375rem"}
        m={"auto"}
        h="44.4375rem"
        color="#ffffff"
        borderRadius="3rem"
      >
        <Image
          src="/birds.png"
          w={" 4.35788rem"}
          h={"3.93819rem"}
          mt={"2.81rem"}
          mb={"0.94rem"}
        />
        <Text
          fontSize="2.5rem"
          className="clashRegular"
          fontWeight="500"
          lineHeight="3rem"
          letterSpacing="0.05rem"
        >
          Getting Started in 3 easy steps
        </Text>
        <Text
          textAlign="center"
          letterSpacing="1.4"
          fontSize="1.25rem"
          className="manRope"
          w="31.25rem"
          lineHeight={"2.1875rem"}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </Text>
        <Flex
          align="center"
          textAlign={"center"}
          alignItems={"center"}
          justify={"center"}
          maxWidth={"80%"}
          m={"auto"}
          pt={"2rem"}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Flex
              bg="#f6f6f7"
              borderRadius="5rem"
              color="#000000"
              w="2.5rem"
              h="2.5rem"
              textAlign={"center"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize="1.125rem"
              className={dmsans.className}
              fontWeight="400"
              mr="10rem"
            >
              1
            </Flex>
            <Flex
              border="1px dashed white"
              w="10rem"
              h={"10rem"}
              borderRadius="5rem"
              alignItems="center"
              justifyContent="center"
            >
              <Icon
                as={profileCircleIcon}
                fontSize={"5rem"}
                h={"5rem"}
                w={"5rem"}
              ></Icon>
            </Flex>
            <Text
              fontSize="1.5rem"
              className={"clashRegular"}
              fontWeight={"500"}
              mt={"2rem"}
              mb={"0.88rem"}
            >
              Download & Register
            </Text>
            <Text
              fontSize="1rem"
              className="manRope"
              lineHeight="2rem"
              letterSpacing="-0.02rem"
              textAlign={"center"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Text>
          </Box>
          <Image
            src="/curveup.png"
            w={"10.59375rem"}
            position={"relative"}
            bottom={"3rem"}
          />
          <Box display="flex" flexDirection="column" alignItems="center">
            <Flex
              bg="#f6f6f7"
              borderRadius="5rem"
              color="#000000"
              w="2.5rem"
              h="2.5rem"
              textAlign={"center"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize="1.125rem"
              className={dmsans.className}
              fontWeight="400"
              mr="10rem"
            >
              2
            </Flex>
            <Flex
              border="1px dashed white"
              w="10rem"
              h={"10rem"}
              borderRadius="5rem"
              alignItems="center"
              justifyContent="center"
            >
              <Icon
                as={easySettingIcon}
                fontSize={"5rem"}
                h={"5rem"}
                w={"5rem"}
              ></Icon>
            </Flex>
            <Text
              fontSize="1.5rem"
              className={"clashRegular"}
              fontWeight={"500"}
              mt={"2rem"}
              mb={"0.88rem"}
            >
              Complete Setup
            </Text>
            <Text
              fontSize="1rem"
              className="manRope"
              lineHeight="2rem"
              letterSpacing="-0.02rem"
              textAlign={"center"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Text>{" "}
          </Box>
          <Image
            src="/curvedown.png"
            w={"10.59375rem"}
            position={"relative"}
            bottom={"3rem"}
          />

          <Box display="flex" flexDirection="column" alignItems="center">
            <Flex
              bg="#f6f6f7"
              borderRadius="5rem"
              color="#000000"
              w="2.5rem"
              h="2.5rem"
              textAlign={"center"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize="1.125rem"
              className={dmsans.className}
              fontWeight="400"
              mr="10rem"
            >
              3
            </Flex>
            <Flex
              border="1px dashed white"
              w="10rem"
              h={"10rem"}
              borderRadius="5rem"
              alignItems="center"
              justifyContent="center"
            >
              <Icon
                as={settingIcon}
                fontSize={"5rem"}
                h={"15rem"}
                w={"5rem"}
              ></Icon>
            </Flex>
            <Text
              fontSize="1.5rem"
              className={"clashRegular"}
              fontWeight={"500"}
              mt={"2rem"}
            >
              Start Transacting
            </Text>
            <Text
              fontSize="1rem"
              className="manRope"
              lineHeight="2rem"
              letterSpacing="-0.02rem"
              textAlign={"center"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Text>{" "}
          </Box>
        </Flex>
      </VStack>
    </>
  );
}

export default EasySteps;
