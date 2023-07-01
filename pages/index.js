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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <PageSeo title="Super fast payments for the next gen - Monapp" description="" />
      <main bg="#F5F5F5">

        <NewHero>
          <div><HeroSection /></div>

        </NewHero>

        <Flex bg="#F9FAFC" flexDirection={'row'} justify={'center'} ><Features /></Flex>

        <div><DataSection /></div>
        <div><CardSection /></div>
        <div><BlackSection /></div>
        <div><FooterSection /></div>
      </main>

    </>
  )
}
