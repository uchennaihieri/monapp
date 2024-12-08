"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios, { Axios } from "axios";
import { Box, Button, Container, Fieldset, Flex, Input, Stack } from "@chakra-ui/react";
import Logo from "@/public/icons/monapp-logo-white.svg";
import { Field } from "@/components/ui/field";
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select";
import { Toaster, toaster } from "@/components/ui/toaster"

export const VendorForm = () => {
  interface Bank {
    bankCode: string;
    categoryId?: string;
    logoImage?: string | null;
    name: string;
    nubanCode?: string | null;
    routingKey?: string;
  }

  
  const [banks, setBanks] = useState<Bank[]>([]);
  const [loading, setLoading] = useState(false);
  const [accountName, setAccountName] = useState("");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    natureOfBusiness: "",
    location: "",
    accountNumber: "",
    accountName: "",
    bankName: "",
    bankCode: "",
    createdBy: "",
  });


  useEffect(() => {
    const fetchBanks = async () => {
      try {
        console.log(baseUrl);
        const response = await fetch(`${baseUrl}/accounts/transfer/banks`);
        if (!response.ok) {
          throw new Error("Failed to fetch bank list");
        }
        const data = await response.json();
        console.log(data.data);
        const sortedBanks = [...data.data].sort((a, b) => a.name.localeCompare(b.name));
        setBanks(sortedBanks);
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };

    fetchBanks();
  }, []);



  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


   



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/vendors/onboard`, formData); 
console.log(response)
      if (response.data) {
        // Success toast

        toaster.create({
            title: "Vendor submitted successfully!",
          description: "Your vendor information has been submitted.",
          type: "success",
          duration: 5000
          })

        // Reset the form data
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          natureOfBusiness: "",
          location: "",
          accountNumber: "",
          accountName: "",
          bankName: "",
          bankCode: "",
          createdBy: "",
        });
      } else {
        // Failure toast

        toaster.create({
            title: "Submission failed",
            description: "There was an error submitting your vendor information.",
          type: "error",
          duration: 5000
          })
      
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      toaster.create({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      type: "error",
      duration: 5000
      })
    }
  };


  const handleAccountNumberBlur = async () => {
    const { accountNumber, bankCode } = formData;
  
console.log(accountNumber, bankCode)

  
    if (!accountNumber || !bankCode) {
        toaster.create({
            title: "Error",
            description: "Please provide a valid account number and bank.",
          type: "error",
          duration: 5000
          });
      return;
    }
  
    const body = {
      type: "interBank",
      accountNumber: accountNumber,
      bankCode: bankCode,
    };
  
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/merchant/virgin/nameEnquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch account name");
      }
  
      const data = await response.json();
      console.log(data.data)
      setAccountName(data.data.accountName);
      setFormData(prevState => ({
        ...prevState,
        accountName: data.data.accountName, 
      }));
  

      toaster.create({
        title: "Success",
        description: "Account name fetched successfully.",
      type: "success",
      duration: 5000
      })

    } catch (error) {
      console.error("Error fetching account name:", error);
      toaster.create({
        title: "Error",
        description: "Failed to fetch account name. Please try again.",
      type: "error",
      duration: 5000
      });
     
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bg="black" position="relative" minH="100vh">
      {/* Navigation */}
      <Container maxW="container.xl" py={6}>
        <Flex justify="space-between" align="center">
          <Image
            src={Logo}
            alt="Monapp Logo"
            className="w-[138px] h-[25px] md:w-[150px] md:h-[40px]"
          />
          <Button className="group border-2 border-white text-white font-bold rounded-[10px] flex items-center justify-center gap-2 w-[196px] md:w-[269px] h-[42px] md:h-[50px] text-[14px] md:text-[18px] hover:bg-white/20">
            Become a Remote Agent
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow-right-icon"
              className="transform transition-transform duration-300 group-hover:translate-x-2"
              width={20}
              height={20}
            />
          </Button>
        </Flex>
      </Container>

      {/* Form Content */}
      <Container
        maxW="container.xl"
        py={{ base: "0", md: "16" }}
        pb={{ base: "8", md: "12" }}
        mt={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width={{ base: "100%", md: "500px" }}
          padding="6"
          color="black"
          bg="white"
          borderRadius={10}
        >
          <Fieldset.Root size="lg" maxW="md">
            <Stack bg="black" align={"center"} borderRadius={6} py={4}>
              <Fieldset.Legend>Vendor details</Fieldset.Legend>
              <Fieldset.HelperText>
                Please provide the vendor details below.
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field label="First Name">
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  variant="outline"
                  border={"1.5px solid black"}
                  px="10px"
                />
              </Field>

              <Field label="Last Name">
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  variant="outline"
                  border={"1.5px solid black"}
                  px="10px"
                />
              </Field>

              <Field label="Phone Number">
                <Input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  variant="outline"
                  border={"1.5px solid black"}
                  px="10px"
                />
              </Field>

              <Field label="Nature of Business">
                <Input
                  name="natureOfBusiness"
                  value={formData.natureOfBusiness}
                  onChange={handleInputChange}
                  placeholder="Business nature"
                  variant="outline"
                  border={"1.5px solid black"}
                  px="10px"
                />
              </Field>

              <Field label="Location">
                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Location"
                  variant="outline"
                  border={"1.5px solid black"}
                  px="10px"
                />
              </Field>

              <Field label="Bank Name">
                <NativeSelectRoot>
                  <NativeSelectField   
                        name="bankCode" 
                        value={formData.bankCode} 
                        onChange={(e) => {
                          const selectedBankCode = e.target.value;
                          const selectedBank = banks.find(bank => bank.bankCode === selectedBankCode); 
                          setFormData({
                            ...formData,
                            bankCode: selectedBankCode, 
                            bankName: selectedBank ? selectedBank.name : "", 
                          });
                        }}
                  >
                    {banks.map((bank, index) => (
                      <option key={index} value={bank.bankCode}>
                        {bank.name}
                      </option>
                    ))}
                  </NativeSelectField>
                </NativeSelectRoot>
              </Field>

              <Field label="Account Number">
                <Input
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  onBlur={handleAccountNumberBlur}
                  type="num"
                  placeholder="Account number"
                  variant="outline"
                  border={"1.5px solid black"}
                  px="10px"
                />
              </Field>

              <Field label="Account Name">
                <Input
                  name="accountName"
                  value={formData.accountName || ""}
                  onChange={handleInputChange}
                  placeholder="__________________"
                  disabled
                  variant="flushed"
                
                  px="10px"
                />
              </Field>

              <Field label="Created By">
                <Input
                  name="createdBy"
                  value={formData.createdBy}
                  onChange={handleInputChange}
                  placeholder="Created by"
                  variant="outline"
                  border={"1.5px solid black"}
                  px="10px"
                />
              </Field>
            </Fieldset.Content>

            <Button
              alignSelf="flex-start"
              my={10}
              variant="solid"
              bg="#000000"
              color="white"
              borderRadius="10px"
              height={{ base: "40px", md: "50px" }}
              width={{ base: "35%", md: "160px" }}
              fontSize="18px"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Fieldset.Root>
          <Toaster />

        </Box>
      </Container>
    </Box>
  );
};
