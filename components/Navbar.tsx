'use client'

import { Box, Container, Flex, Button } from '@chakra-ui/react'
import Logo from "@/public/icons/monapp-logo-white.svg";
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

function Navbar() {
    return (
<Box>
<Container maxW="container.xl" py={6}>
  <Flex justify="space-between" align="center">
  <Link href="https://monapp.ng" passHref>
    <Image
      src={Logo}
      alt="Monapp Logo"
      className="w-[138px] h-[25px] md:w-[150px] md:h-[40px]"
    />
    </Link>
<Link href="https://ebanker.monapp.ng" passHref>
    <Button className="group border-2 border-white text-white font-bold rounded-[10px] flex items-center justify-center gap-2 w-[196px] md:w-[269px] h-[42px] md:h-[50px] text-[14px] md:text-[18px] hover:bg-white/20">
      Become an eBanker
      <Image
        src="/icons/arrow-right.svg"
        alt="arrow-right-icon"
        className="transform transition-transform duration-300 group-hover:translate-x-2"
        width={20}
        height={20}
      />
    </Button>
    </Link>
  </Flex>
</Container>
        </Box>
    )
}

export default Navbar