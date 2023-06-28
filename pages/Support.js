import Head from 'next/head'
import Image from 'next/image'
import { Inter, Poppins } from '@next/font/google'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/heroSection'
import Features from '@/components/features'
import DataSection from '@/components/dataSection'
import CardSection from '@/components/cardSection'
import { Box, Flex, Text } from '@chakra-ui/react'
import FooterSection from '@/components/footerSection'
import BlackSection from '@/components/blackSection'
import PageSeo from '@/Seo/pageSeo'
import NewHero from '@/components/NewHero'

const inter = Inter({ subsets: ['latin'] })

export default function Support() {
  return (
    <>
      <PageSeo title="Super fast payments for the next gen - Monapp" description="" />
      <main bg="#F5F5F5">
       
        <NewHero>
            <Flex justify='center'>
        <Text color='#fff' fontSize='6xl' textAlign={'center'}>lorem</Text>

            </Flex>
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
