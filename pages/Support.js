import Head from 'next/head'
import Image from 'next/image'

import { Inter, DM_Sans } from '@next/font/google'

import Navbar from '@/components/navbar'
import HeroSection from '@/components/heroSection'
import Features from '@/components/features'
import DataSection from '@/components/dataSection'
import CardSection from '@/components/cardSection'

import { Box, Center, InputGroup,Input, HStack,Button, Text ,InputLeftElement} from '@chakra-ui/react'

import FooterSection from '@/components/footerSection'
import BlackSection from '@/components/blackSection'
import PageSeo from '@/Seo/pageSeo'
import NewHero from '@/components/NewHero'

import { BiSearch } from 'react-icons/bi'

const inter = Inter({ subsets: ['latin'] })
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });



export default function Support() {
  return (
    <>
      <PageSeo title="Super fast payments for the next gen - Monapp" description="" />
      <main bg="#F5F5F5">
       
        <NewHero>

           <Center color='#fff' flexDirection={'column'}>
            <Text fontSize={'1rem'} mt='3rem' >
             What you want to know about Monapp</Text>
            <Text fontSize='3.75rem' fontWeight={'600'} lineHeight={'5.28rem'} letterSpacing={'-0.0625rem'} >
                How can we help you today ?</Text>
            <Text fontSize='1.125rem' lineHeight={'1.75rem'}  mt='1rem' textAlign='center' className={dmsans.className} h='5.9375rem' w='36.75rem'>
                Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,</Text>

                  <HStack mt='2rem' spacing='1rem' >
                    <InputGroup w='26.625rem'  borderRadius={'12px'} >
                    <InputLeftElement pointerEvents='none'>
                    <BiSearch color='' />
                    </InputLeftElement>
                    <Input type='text' placeholder='write a question or problem' />
                     </InputGroup>

                     <Button w='8rem'  bgColor={'#fff'} borderRadius={'10px'}  color='#000' _hover={{bg:'#eee',color:'#000'}} >Search</Button>
                        
                  </HStack>

           </Center>

        </NewHero>
       

        {/* <div><FooterSection /></div> */}
        {/* <div><Features /></div>
        <div><DataSection /></div>
        <div><CardSection /></div>
        <div><BlackSection /></div>
        <div><FooterSection /></div> */}
      </main>

    </>
  )
}
