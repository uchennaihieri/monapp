"use client"

import Image from "next/image";
import { Box, Button, Container, Flex, Heading, Input } from "@chakra-ui/react";
import NaijaFlag from "@/public/icons/naija-flag.svg";

import DownloadDialog from "../download-modal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import SuccessModal from "../success-modal";

const DownloadApp = () => {


  const router = useRouter()
  const [loading, setLoading] =  useState(false)
  const [result, setResult] = useState('none')
  const [phone, setPhone] = useState('')
  const [isModalOpen, setModalOpen] = useState(false);
 

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
 
  const onSubmit = async () => {
      try {
        setLoading(true);
        const response = await axios.post(`${baseUrl}/broker/brokerForm`,
          {
            FULL_NAME: "website customer prospect",
            PHONE_NUMBER: phone,
            EMAIL_ADDRESS: "",
            STATE: "",
          }
        );
        if (response.data.result === 'success') {
          setLoading(false);
          setModalOpen(true);
         resetForm()
        } else {
          setLoading(false);
          setResult('failed');
          console.log('failed')
        }
      } catch (error) {
        setLoading(false);
        console.log('error');
      }
    };
  


    const resetForm = () => {
      setLoading(false);
    setPhone('')
    };

  return (
    <Box bg="white" minH="50vh" position="relative">
      <Container
        maxW="container.xl"
        py={{ base: "16", md: "20" }}
        pt={{ base: "20", md: "16" }}
        overflow={"hidden"}
      >
        <Box textAlign="center" spaceY={6} color={"black"}>
          <Heading
            fontWeight="semibold"
            fontSize={{ base: "16px", md: "2rem", lg: "2.5rem" }}
            lineHeight={{ base: "23px", md: "3rem", lg: "3.6125rem" }}
          >
            Download the driver app or fill a form with your phone number{" "}
            <br className="hidden lg:block" />
            for personalized support
          </Heading>

          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            gap={6}
          >
            <DownloadDialog buttonType="Driver" />

            {/* Phone Input Group */}
            <Flex
              gap={2}
              maxW="600px"
              bg="white"
              px={{ base: "1", md: "2" }}
              py={{ base: "1", md: "2" }}
              border="2px solid"
              borderColor="#222222"
              borderRadius="14px"
              height="auto"
              width={{ base: "100%", md: "689px" }}
              alignItems="center"
            >
              <div className="flex items-center text-black">
                <Image
                  src={NaijaFlag}
                  alt="flag-icon"
                  className="mr-2"
                  width={24}
                  height={24}
                />
                +234
              </div>
              <Input
                value={phone}
                placeholder="Enter your Phone Number"
                className="text-black no-spinner"
                flex="1"
                pl={4}
                type="number"
  maxLength={11}
                onChange={e=> setPhone(e.target.value)}
              />
              <Button
                bg="#222222"
                color="white"
                borderRadius="10px"
                height={{ base: "40px", md: "50px" }}
                width={{ base: "30%", md: "160px" }}
                fontSize="18px"
                onClick={onSubmit}
                disabled={loading}
              >
                Get Started
              </Button>
            </Flex>
          </Box>
        </Box>
        <SuccessModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </Container>
      <Box
        position="absolute"
        bottom={{ base: "-24", lg: "0" }}
        right={0}
        zIndex={0}
      >
        <Image
          src="/icons/squigle-black-small.svg"
          alt="World Map"
          width={215.23}
          height={293.68}
        />
      </Box>
    </Box>
  );
};

export default DownloadApp;
