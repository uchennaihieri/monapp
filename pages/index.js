import Head from 'next/head'
import Image from 'next/image'
import { Inter, Poppins } from '@next/font/google'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/heroSection'
import Features from '@/components/features'
import DataSection from '@/components/dataSection'
import CardSection from '@/components/cardSection'
import { Box, Flex } from '@chakra-ui/react'
import FooterSection from '@/components/footerSection'
import BlackSection from '@/components/blackSection'
import PageSeo from '@/Seo/pageSeo'
import NewHero from '@/components/NewHero'
import OurCommunity from '@/components/OurCommunity'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <PageSeo title="Super fast payments for the next gen - Monapp" description="" />
      <main bg="#FFFFFF">

        <NewHero>
          <div><HeroSection /></div>

        </NewHero>

        <Flex bg="#FFFFFF" flexDirection={'row'} justify={'center'} ><Features /></Flex>

        <div><CardSection /></div>
        <div><BlackSection /></div>
        <div><DataSection /></div>

        <div><OurCommunity /></div>
        <div><FooterSection /></div>
      </main>

    </>
  )
}
