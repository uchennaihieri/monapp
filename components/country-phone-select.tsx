"use client";

import React from "react";
import {
  Box,
  Input,
  Button,
  Flex,
  Menu,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const countries = [
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  // Add more countries as needed
];

export default function PhoneInput() {
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = React.useState("");

  return (
    <Flex
      maxWidth="md"
      width="100%"
      borderRadius="full"
      border="1px"
      borderColor="gray.300"
      overflow="hidden"
      bg="white"
    >
      <div>
        <Button
          as={Button}
          variant="ghost"
          borderRadius="full"
          px={2}
          height="100%"
          _hover={{ bg: "gray.100" }}
          _active={{ bg: "gray.200" }}
        >
          <Text fontSize="xl">{selectedCountry.flag}</Text>
          <ChevronDownIcon />
          {selectedCountry.code}
        </Button>
        <div>
          {countries.map((country) => (
            <div key={country.code} onClick={() => setSelectedCountry(country)}>
              <Text fontSize="xl" mr={2}>
                {country.flag}
              </Text>
              <Text>{country.name}</Text>
              <Text ml="auto" opacity={0.5}>
                {country.code}
              </Text>
            </div>
          ))}
        </div>
      </div>
      <Input
        type="tel"
        placeholder="Enter your Phone Number"
        flex={1}
        border="none"
        _focus={{ boxShadow: "none" }}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button
        type="submit"
        borderRadius="full"
        px={6}
        bg="black"
        color="white"
        _hover={{ bg: "gray.800" }}
      >
        Get Started
      </Button>
    </Flex>
  );
}
