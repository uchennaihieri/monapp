import Head from 'next/head'
import Image from 'next/image'
import { Inter, Poppins } from '@next/font/google'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/heroSection'
import Features from '@/components/features'
import DataSection from '@/components/dataSection'
import CardSection from '@/components/cardSection'
import { Box } from '@chakra-ui/react'
import FooterSection from '@/components/footerSection'
import BlackSection from '@/components/blackSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main bg="#F5F5F5">
        <Box bg="#000000" >
          <div><Navbar /></div>
          <div><HeroSection /></div>

        </Box>
        <div><Features /></div>
        <div><DataSection /></div>
        <div><CardSection /></div>
        <div><BlackSection /></div>
        <div><FooterSection /></div>
      </main>

    </>
  )
}
