import Head from 'next/head'
import Image from 'next/image'

import { Inter, DM_Sans, } from '@next/font/google'

import Navbar from '@/components/navbar'
import HeroSection from '@/components/heroSection'
import Features from '@/components/features'
import DataSection from '@/components/dataSection'
import CardSection from '@/components/cardSection'

import { Box, Center, InputGroup,Input, HStack,Button, Text ,InputLeftElement, Flex, VStack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, IconButton, FormControl, FormLabel, ButtonGroup, Textarea} from '@chakra-ui/react'

import FooterSection from '@/components/footerSection'
import BlackSection from '@/components/blackSection'
import PageSeo from '@/Seo/pageSeo'
import NewHero from '@/components/NewHero'

import { BiSearch } from 'react-icons/bi'
import OurCommunity from '@/components/OurCommunity'

const inter = Inter({ subsets: ['latin'] })
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });



export default function Support() {
  return (
    <>
      <PageSeo title="Super fast payments for the next gen - Monapp" description="" />
      <main bg="#F5F5F5">
       
        <NewHero>

           <Center color='#fff' flexDirection={'column'} gap={{'2xl':'3rem'}}>
            <Text fontSize={'1.625rem'} mt={{md:'3rem','2xl':'9rem'}} className='clashRegular' >
             What you want to know about Monapp</Text>

            <Text fontSize={{md:'3.75rem','2xl':'5rem'}} fontWeight={'600'} lineHeight={'5.28125rem'} letterSpacing={'-0.0625rem'} className='clashBold' >
                How can we help you today ?</Text>

            <Text fontSize={{md:'1.125rem','2xl':'1.3rem'}}   mt='1rem' textAlign='center' className={dmsans.className} h='5.9375rem' w='36.75rem'>
                Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,</Text>

                  <HStack mt='2rem' gap='3rem' >
                    <InputGroup >
                        <InputLeftElement __css={{mt:'1.8rem',mx:'0.5rem', }}>
                          <BiSearch   size='2em' color='white.400' />
                        </InputLeftElement>
                       
                    <Input h="5.0625rem" w='46.625rem'  borderRadius={'12px'} fontSize={'2rem'} fontFamily={dmsans.className} fontWeight={400} lineHeight={'1.65625rem'}  border={'1.4px solid #fff'} type='text' placeholder='write a question or problem'  />              
                        </InputGroup>
                   {/* <Box >
                   
                    <Input h="5.0625rem" w='46.625rem'  borderRadius={'12px'}    border={'1.4px solid #fff'} type='text' placeholder='write a question or problem'  />              
                    </Box> */}

                     <Button variant='solid'  bgColor={'#fff'} borderRadius={'9px'}  _hover={{bg:'#eee',color:'#000'}} w={'15rem'} h='5.0625rem' >
                      <Text  fontSize={'1.45rem'} color='#000' fontWeight={700} lineHeight='2.71944rem' letterSpacing={'0.00831rem'} className={dmsans.className} >Search</Text>
                      </Button>
                        
                  </HStack>

           </Center>

        </NewHero>

          <Box ml={{md:'15rem','2xl':'30rem'}} mb='5rem' color={'#000'}>
              <HStack  mt={'3rem'} gap='10'>
                  <Flex direction={'column'} w='19.1875rem' h='11.6875rem' justifyContent='center' bgColor={'#fff'} borderRadius={'12px'}
                  alignItems='center' border='1.2px solid rgba(0, 0, 0, 0.20)'  _hover={{border:'2px #000 solid'}}  gap='5' boxShadow='0px 8px 64px 0px rgba(167, 167, 167,0.24)'>

                      <Box w=' 3.375rem' h=' 3.375rem' borderRadius='50%' bgColor='#D9D9D9' />

                      <Text fontSize={'1.625rem'} className='clashRegular' fontWeight={'500'}>Getting Started</Text>
                  </Flex>
                  <Flex direction={'column'} w='19.1875rem' h='11.6875rem' justifyContent='center' bgColor={'#fff'} borderRadius={'12px'}
                  alignItems='center' border='1.2px solid rgba(0, 0, 0, 0.20)'  _hover={{border:'2px #000 solid'}} gap='5' boxShadow='0px 8px 64px 0px rgba(167, 167, 167,0.24)'>

                      <Box w=' 3.375rem' h=' 3.375rem' borderRadius='50%' bgColor='#D9D9D9' />

                      <Text fontSize={'1.625rem'} className='clashRegular' fontWeight={'500'}>Pricing and Plan</Text>
                  </Flex>
                  <Flex direction={'column'} w='19.1875rem' h='11.6875rem' justifyContent='center' bgColor={'#fff'} borderRadius={'12px'}
                  alignItems='center' border='1.2px solid rgba(0, 0, 0, 0.20)'  _hover={{border:'2px #000 solid'}} gap='5' boxShadow='0px 8px 64px 0px rgba(167, 167, 167,0.24)'>

                      <Box w=' 3.375rem' h=' 3.375rem' borderRadius='50%' bgColor='#D9D9D9' />

                      <Text fontSize={'1.625rem'} className='clashRegular' fontWeight={'500'}>Sales Questions</Text>
                  </Flex>
                  <Flex direction={'column'} w='19.1875rem' h='11.6875rem' justifyContent='center' bgColor={'#fff'} borderRadius={'12px'}
                  alignItems='center' border='1.2px solid rgba(0, 0, 0, 0.20)'  _hover={{border:'2px #000 solid'}} gap='5' boxShadow='0px 8px 64px 0px rgba(167, 167, 167,0.24)'>

                      <Box w=' 3.375rem' h=' 3.375rem' borderRadius='50%' bgColor='#D9D9D9' />

                      <Text fontSize={'1.625rem'} className='clashRegular' fontWeight={'500'}>Usage Guides</Text>
                  </Flex>
              </HStack>
            
                <Text   mt='5rem' fontSize='2.25rem' fontWeight={'600'} className='clashSemiBold' lineHeight={'2.97894rem'} >
                    Popular Questions
                </Text>

                

                  <Accordion allowToggle  mb='3rem' variant='custom'>
                      <AccordionItem >
                        <h2>
                          <AccordionButton className='clashRegular' >
                            <Box as="span" flex='1' textAlign='left'>
                            How does the Monapp QR card works ?
                              
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel >
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                          been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy 
                          text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem >
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            How does the Monapp QR card works ?
                              
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel >
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                          been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy 
                          text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem >
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            How does the Monapp QR card works ?
                              
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel >
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                          been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy 
                          text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem >
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            How does the Monapp QR card works ?
                              
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel >
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                          been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy 
                          text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem >
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            How does the Monapp QR card works ?
                              
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel >
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                          been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy 
                          text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem >
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            How does the Monapp QR card works ?
                              
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel >
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                          been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy 
                          text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem >
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            How does the Monapp QR card works ?
                              
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel >
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                          been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy 
                          text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </AccordionPanel>
                      </AccordionItem>

                    </Accordion>
                  
              <Text   mt='5rem' mb='3rem' fontSize='2.25rem' className='clashSemiBold' fontWeight={'600'} lineHeight={'2.97894rem'} >
                Send us a message
                </Text>

                <Text w='47.0625rem' h='3.875rem' fontSize={'1.51888rem'} lineHeight={'2.23838rem'} letterSpacing={'-0.01rem'} mb='5rem'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand
                </Text>

          <form>
                {/* <HStack mb='32px'><IconButton icon={<AiOutlinePicture fontSize={'20px'} />} w='36px' h='36px' isRound /> <Text> Upload New Image</Text></HStack> */}
                <HStack gap={'12'}>
                    <Box mb="21.87px">
                        <FormControl id="firstName" >
                            <FormLabel fontSize={'1.5rem'} fontWeight={'500'} lineHeight={'200%'} letterSpacing={'0.03rem'} color={'#000'}>First Name</FormLabel>
                            <Input h="5.5625rem" w='42rem' borderRadius={'2px'} bg="#ffffff" border={'1.4px solid #000'} type="text" />

                        </FormControl>
                    </Box>
                    <Box mb="21.87px">
                        <FormControl id="firstName" >
                            <FormLabel fontSize={'1.5rem'} fontWeight={'500'} lineHeight={'200%'} letterSpacing={'0.03rem'} color={'#000'}>Last Name</FormLabel>
                            <Input h="5.5625rem" w='42rem' borderRadius={'2px'} bg="#ffffff" border={'1.4px solid #000'} type="text" />

                        </FormControl>
                    </Box>

                </HStack>
                <HStack gap={'12'}>
                    <Box mb="21.87px">
                        <FormControl id="firstName" >
                            <FormLabel fontSize={'1.5rem'} fontWeight={'500'} lineHeight={'200%'} letterSpacing={'0.03rem'} color={'#000'}>Email</FormLabel>
                            <Input h="5.5625rem" w='42rem' borderRadius={'2px'} bg="#ffffff" border={'1.4px solid #000'} type="email" />

                        </FormControl>
                    </Box>
                    <Box mb="21.87px">
                        <FormControl id="firstName" >
                            <FormLabel fontSize={'1.5rem'} fontWeight={'500'} lineHeight={'200%'} letterSpacing={'0.03rem'} color={'#000'}>Phone Number</FormLabel>
                            <Input h="5.5625rem" w='42rem' borderRadius={'2px'} bg="#ffffff" border={'1.4px solid #000'} type="tel" />

                        </FormControl>
                    </Box>

                </HStack>
                 <Box mb="21.87px">
                        <FormControl id="firstName" >
                            <FormLabel fontSize={'1.5rem'} fontWeight={'500'} lineHeight={'200%'} letterSpacing={'0.03rem'} color={'#000'}>Message</FormLabel>
                            <Textarea h="16.5rem" w='87.375rem' borderRadius={'2px'} bg="#ffffff" border={'1.4px solid #000'} type="text" />

                        </FormControl>
                    </Box>

              

                    <Button variant='solid' colorScheme='blackAlpha' w={'22.6875rem'} h='5.375rem' mt='3rem'  bgColor='#000' borderRadius='10px'>
                      <Text  fontSize={'16px'} color='#FFFFFF' fontWeight={500} lineHeight='2.71944rem' className={dmsans.className} >Submit</Text>
                      </Button>

            </form>


          </Box>
            <OurCommunity/>

          <FooterSection/>

      


        
      </main>

    </>
  )
}
