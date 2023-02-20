import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, VStack, StackDivider, HStack, Image, Center, Button, Divider } from '@chakra-ui/react';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Bree_Serif, DM_Sans, Poppins } from '@next/font/google'

const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })
const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })


export default function FooterSection() {
    return (
        <Box bgColor="#F9FAFC" h={{ base: '24.93em', md: '24.7em' }} color="#000000" >
            <Center>
                <Box h={{ base: '12.93rem', md: '12.5rem' }} w={{ base: '21.81rem', md: '80.625rem' }} mt={{ base: '-6.46rem', md: '-6.25rem' }} bg="#183656" borderRadius={'1rem'}>

                    <Flex flexDirection={{ base: 'column', md: 'row' }} align="center" h="100%" justify={{ base: 'center', md: 'space-around' }}>
                        <Box textAlign={{ base: "center", md: "start" }} mb={{ base: "1.79rem", md: "0rem" }} w={{ base: '15.68em', md: "29.87em" }}>
                            <Text
                                letterSpacing={{ base: '-0.26px', md: '-0.5px' }}
                                lineHeight={{ base: '1.8rem', md: '3.437rem' }}
                                fontWeight={400}
                                fontSize={{ base: '1.18rem', md: '2.25rem' }}
                                className={bree.className}
                                color={'#ffffff'}

                            >
                                Want to join the community to
                                start making payments.
                            </Text>
                        </Box>

                        <Image display={{ base: 'none', md: 'flex' }} src={'/arrow.svg'} w={'12.32rem'} h={'5.895rem'} />
                        <HStack>
                            <Image src={'/playstore.png'} w={{ base: '8rem', md: '12.81rem' }} h={{ base: '2.61rem', md: '4.18rem' }} />
                            <Image src={'/appstore.png'} w={{ base: '8.06rem', md: '12.90rem' }} h={{ base: '2.67rem', md: '4.27rem' }} />
                        </HStack>
                    </Flex>
                </Box>
            </Center>
            <Box pt={{ base: '2.75rem', md: '3.125rem' }} px={{ base: '3.68rem', md: '25.87rem' }}>
                <Flex flexDirection={{ base: 'column', md: 'row' }} justify={{ base: 'center', md: 'space-between' }} align={'center'} mb={{ base: '0.78rem', md: "1.5rem" }}>
                    <Image src={'/footerlogo.png'} width={{ base: '12.5rem', md: '12.5rem' }} height={'2.71rem'} />
                    <HStack display={{ base: 'none', md: 'flex' }}>
                        <Icon as={BsFacebook} fontSize="1.38rem" color="#000000" />
                        <Icon as={BsTwitter} fontSize="1.38rem" color="#000000" />
                        <Icon as={AiFillInstagram} fontSize="1.38rem" color="#000000" />
                        <Icon as={AiFillLinkedin} fontSize="1.38rem" color="#000000" />
                    </HStack>
                </Flex>
                <HStack
                    mb={{ base: "3.93rem", md: "1rem" }}
                    divider={<StackDivider borderColor='#000000' />}
                    spacing={4}
                    h={'1.125rem'}
                    justify={{ base: "center", md: "start" }}
                >

                    <Button m="0" p="0" variant={'ghost'} _hover={{
                        backgroundColor: 'none'
                    }} color={'#000000'} fontSize="0.875rem"
                        fontWeight={400}
                        className={dmsans.className}
                    >Terms of use</Button>

                    <Button m="0" p="0" variant={'ghost'} _hover={{
                        backgroundColor: 'none'
                    }} color={'#000000'} fontSize="0.875rem"
                        fontWeight={400}
                        className={dmsans.className}
                    >Privacy</Button>

                </HStack>
                <Center>
                    <Divider color={'rgba(0, 0, 0, 0.2)'} w="14.5rem" display={{ base: 'flex', md: 'none' }} />
                </Center>
                <Text
                    textAlign={{ base: 'center', md: 'start' }}
                    mt={{ base: '1.43rem', md: '0rem' }}
                    mb={{ base: '0.87rem', md: '0rem' }}
                    color="#000000" opacity={'0.6'} lineHeight={{ base: '1.12rem', md: '2.18rem' }}
                    fontWeight={400}
                    fontSize={{ base: '0.875rem' }}
                    className={dmsans.className}>
                    Copyright @ MONAPP 2023. MONAPP is a product of Creatorh Technologies Limited. All Rights Reserved.
                </Text>

                <HStack display={{ base: 'flex', md: 'none' }} justify="center">
                    <Icon as={BsFacebook} fontSize="1.26rem" color="#000000" />
                    <Icon as={BsTwitter} fontSize="1.26rem" color="#000000" />
                    <Icon as={AiFillInstagram} fontSize="1.26rem" color="#000000" />
                    <Icon as={AiFillLinkedin} fontSize="1.26rem" color="#000000" />
                </HStack>
            </Box >



        </Box>
    );
}