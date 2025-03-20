import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

import Navbar from "./Navbar";

interface NewHeroProps {
  children: ReactNode;
}

const NewHero: React.FC<NewHeroProps> = ({ children }) => {
  return (
    <Box
      bg="#000000"
      h={{ base: "100%", md: "100%" }}
      w="100%"
      backgroundColor="#1A1A1A"
      backgroundPosition="center"
      backgroundSize="cover"
      position="relative"
    >
      <div>
        <Navbar />
      </div>

      {children}

      <Image
        src="/Spiral.png"
        className="absolute top-auto md:top-0 bottom-[-4rem] md:bottom-auto right-16 md:right-0 h-[16.429375rem] md:h-[38.0175rem] w-[8.191875rem] md:w-[17.4675rem] object-cover transform rotate-90 md:rotate-0 opacity-90"
        alt="spiral-image"
        width={500}
        height={500}
      />
    </Box>
  );
};

export default NewHero;
