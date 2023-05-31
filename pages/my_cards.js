import React, { ReactNode, useState } from 'react';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Image,
    InputGroup,
    InputLeftElement,
    Input,
    Spacer,
    Button,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Heading,
    Divider,
    Checkbox,
    Stack,
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { ArrowForwardIcon, SearchIcon } from '@chakra-ui/icons';
import { DM_Sans, Rubik, } from '@next/font/google';
import { BsChevronDown, BsDot } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import MyChart from '@/components/myChart';
import NewDash from './NewDash';
import MerchantHorizontalCard from '@/components/merchantHorizontalCard';



const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })
const dmsansbold = DM_Sans({ weight: '500', subsets: ['latin'] })
const rubik = Rubik({ weight: ['300', '400'], subsets: ['latin'] })

function My_Cards() {
    return (
        <NewDash>
            <div>

                <HStack ml={{ base: 0, md: '8rem' }} align='start'>
                    <Box mr='10px' >
                        <VStack>
                            <HStack w={'60em'} mb='52.79px' display={{base:'none',md:'flex'}}>
                                <Box  boxShadow="md" h='176.21px' w='311px' borderRadius={'5.12px'} bg='linear-gradient(to bottom, #000000 0, #000000 72.80%, #191919 72.80%, #191919 86.52%, #000000 86.52%, #000000 100%)' pt='9.87px' pb='9.74px' pl='11.39px' pr='11.26px' mr='16px'>
                                    <Flex justify={'space-between'} align='center'>
                                        <Image src={'/logo.png'} width={'50px'} height={'auto'} />
                                        <Text fontSize={'5.55345px'} lineHeight='4px' letterSpacing='-0.174251px' className={rubik.className} color='white' fontWeight={400}>cards@monapp.ng</Text>
                                    </Flex>
                                    <Flex flexDirection={'column'} align='center' justify='center' mt='28.51px'>
                                        <Text className={rubik.className} color='white' fontSize={'16.07px'} letterSpacing='0.517008px' lineHeight='12px' mb='8.73px' fontWeight={400}> Phillip Chatham Ansalem</Text>
                                        <Text className={rubik.className} color='white' fontSize={'10px'} letterSpacing='0.409298px' lineHeight='10px' fontWeight={400}>@PhillipCA</Text>
                                        <Text className={rubik.className} color='white' fontSize={'5.36156px'} letterSpacing='0.409298px' lineHeight='7px' fontWeight={300} width='175.46px' textAlign={'center'} mt='24.21px' >This card is issued by Monapp and may be used by the holder in accordance to the Monapp terms and conditions</Text>
                                    </Flex>


                                    <Flex justify={'space-between'} align='center' mt='42.09px'>
                                        <Text fontSize={'5.55345px'} lineHeight='4px' letterSpacing='-0.174251px' className={rubik.className} color='white' fontWeight={400}>Monapp Authentication card </Text>
                                        <Text fontSize={'5.55345px'} lineHeight='4px' letterSpacing='-0.174251px' className={rubik.className} color='white' fontWeight={400}>www.monapp.ng</Text>
                                    </Flex>


                                </Box>
                                <Flex flexDirection={'column'} justify='space-between' h='176.21px'>

                                    <Stack direction={'row'} spacing='12px'>

                                        <Flex flexDirection={'row'} justify='center' align='center' w='124px' h='38px' borderWidth="0.2px" borderStyle="solid" bg='rgba(255, 255, 255, 0.4)' borderRadius={'4px'} boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.08)'} >
                                            <Image src={'/addMoneyIcon.svg'} width={'18px'} height={'18px'} mr='6px' />
                                            <Text color='#000000' fontSize={'12px'} className={dmsansbold.className} >Add Money </Text></Flex>

                                        <Flex flexDirection={'row'} justify='center' align='center' w='124px' h='38px' borderWidth="0.2px" borderStyle="solid" bg='rgba(255, 255, 255, 0.4)' borderRadius={'4px'} boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.08)'} >
                                            <Image src={'/freezeCard.svg'} width={'15px'} height={'15px'} mr='6px' />
                                            <Text color='#000000' fontSize={'12px'} className={dmsansbold.className} >Freeze Card </Text></Flex>

                                        <Flex flexDirection={'row'} justify='center' align='center' w='124px' h='38px' borderWidth="0.2px" borderStyle="solid" bg='rgba(255, 255, 255, 0.4)' borderRadius={'4px'} boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.08)'} >
                                            <Image src={'/newCard.svg'} width={'16px'} height={'16px'} mr='6px' />
                                            <Text color='#000000' fontSize={'12px'} className={dmsansbold.className} >New Card </Text></Flex>


                                    </Stack>
                                    {/* nmbh */}

                                    <Stack direction={'row'} spacing='12px' >

                                        <Flex flexDirection={'column'} w='124px' h='122px' border="0.6px solid #BFBFBF" pt='14px' pl='12px' bg='#000000' borderRadius={'8px'} boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.08)'} position='relative' overflow={'hidden'}>
                                            <Image color='black' position='absolute' opacity={'0.2'} src={'/blackcard.svg'} top='0px' />
                                            <Box bg='#FFFFFF'
                                                border='1px solid #000000'
                                                borderRadius='4px'
                                                h='32px'
                                                w='32px'>
                                            </Box>
                                            <Text color='#FFFFFF' fontSize='12px' className={dmsans.className} fontWeight={400} mt='10px'>Balance</Text>
                                            <Text color='#FFFFFF' fontSize='16px' className={dmsans.className} fontWeight={700} >N182,000</Text>
                                            <HStack mt='4px' spacing='2px' align={'center'}> <Image src={'/upArrow.svg'} /> <Text color='#2CC16B' fontSize='7.25px' className={dmsans.className} fontWeight={400}>+24%</Text></HStack>

                                        </Flex>

                                        <Flex position='relative' flexDirection={'column'} w='124px' h='122px' border="0.8px solid #27AE60" pt='14px' pl='12px' bg='rgba(44, 193, 107, 0.08)' borderRadius={'8px'} boxShadow={'0px 14px 54px rgba(0, 0, 0, 0.03'} overflow={'hidden'}>
                                            <Image color='black' position='absolute' opacity={'0.2'} src={'/greenCard.svg'} top='0px' />
                                            <Box bg='#219653'
                                                border='1px solid #219653'
                                                borderRadius='4px'
                                                h='32px'
                                                w='32px'>
                                            </Box>
                                            <Text color='#000000' fontSize='12px' className={dmsans.className} fontWeight={400} mt='10px'>Income</Text>
                                            <Text color='#000000' fontSize='16px' className={dmsans.className} fontWeight={700} >N182,000</Text>
                                            <HStack mt='4px' spacing='2px' align={'center'}> <Image src={'/upArrow.svg'} /> <Text color='#2CC16B' fontSize='7.25px' className={dmsans.className} fontWeight={400}>+24%</Text></HStack>

                                        </Flex>

                                        <Flex flexDirection={'column'} w='124px' h='122px' border=" 0.8px solid #EB5757" pt='14px' pl='12px' bg='rgba(235, 87, 87, 0.1)' borderRadius={'8px'} boxShadow={'0px 14px 54px rgba(0, 0, 0, 0.03)'} position='relative' overflow={'hidden'}>

                                            <Box bg='#EB5757'
                                                border='1px solid #EB5757'
                                                borderRadius='4px'
                                                h='32px'
                                                w='32px'>
                                            </Box>
                                            <Text color='#000000' fontSize='12px' className={dmsans.className} fontWeight={400} mt='10px'>Spending</Text>
                                            <Text color='#000000' fontSize='16px' className={dmsans.className} fontWeight={700} >N182,000</Text>
                                            <HStack mt='4px' spacing='2px' align={'center'}> <Image src={'/redArrow.svg'} /> <Text color='#EB5757' fontSize='7.25px' className={dmsans.className} fontWeight={400}>+24%</Text></HStack>
                                            <Image color='black' position='absolute' opacity={'0.2'} src={'/redCard.svg'} top='0px' />
                                        </Flex>





                                    </Stack>
                                    

                                </Flex>
                                
                               

                            </HStack>

                            {/* responsive */}
                            <Stack w={'60em'} mb='52.79px' display={{base:'flex',md:'none'}}>
                                <Box  boxShadow="md" h='200px' w='384.71px' borderRadius={'5.12px'} bg='linear-gradient(to bottom, #000000 0, #000000 72.80%, #191919 72.80%, #191919 86.52%, #000000 86.52%, #000000 100%)' pt='9.87px' pb='9.74px' pl='11.39px' pr='11.26px' mb={'5'}>
                                    <Flex justify={'space-between'} align='center'>
                                        <Image src={'/logo.png'} width={'50px'} height={'auto'} />
                                        <Text fontSize={'5.55345px'} lineHeight='4px' letterSpacing='-0.174251px' className={rubik.className} color='white' fontWeight={400}>cards@monapp.ng</Text>
                                    </Flex>
                                    <Flex flexDirection={'column'} align='center' justify='center' mt='28.51px'>
                                        <Text className={rubik.className} color='white' fontSize={'16.07px'} letterSpacing='0.517008px' lineHeight='12px' mb='8.73px' fontWeight={400}> Phillip Chatham Ansalem</Text>
                                        <Text className={rubik.className} color='white' fontSize={'10px'} letterSpacing='0.409298px' lineHeight='10px' fontWeight={400}>@PhillipCA</Text>
                                        <Text className={rubik.className} color='white' fontSize={'5.36156px'} letterSpacing='0.409298px' lineHeight='7px' fontWeight={300} width='175.46px' textAlign={'center'} mt='24.21px' >This card is issued by Monapp and may be used by the holder in accordance to the Monapp terms and conditions</Text>
                                    </Flex>


                                    <Flex justify={'space-between'} align='center' mt='42.09px'>
                                        <Text fontSize={'5.55345px'} lineHeight='4px' letterSpacing='-0.174251px' className={rubik.className} color='white' fontWeight={400}>Monapp Authentication card </Text>
                                        <Text fontSize={'5.55345px'} lineHeight='4px' letterSpacing='-0.174251px' className={rubik.className} color='white' fontWeight={400}>www.monapp.ng</Text>
                                    </Flex>


                                </Box>

                                
                                <Flex flexDirection={'column'} justify='space-between' h='176.21px' >
                                    <Stack direction={'row'} >

                                        <Flex flexDirection={'column'} w='122.43px' h='122px' border="0.6px solid #BFBFBF" pt='14px' pl='12px' bg='#000000' borderRadius={'8px'} boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.08)'} position='relative' overflow={'hidden'}>
                                            <Image color='black' position='absolute' opacity={'0.2'} src={'/blackcard.svg'} top='0px' />
                                            <Box bg='#FFFFFF'
                                                border='1px solid #000000'
                                                borderRadius='4px'
                                                h='32px'
                                                w='32px'>
                                            </Box>
                                            <Text color='#FFFFFF' fontSize='12px' className={dmsans.className} fontWeight={400} mt='10px'>Balance</Text>
                                            <Text color='#FFFFFF' fontSize='16px' className={dmsans.className} fontWeight={700} >N182,000</Text>
                                            <HStack mt='4px' spacing='2px' align={'center'}> <Image src={'/upArrow.svg'} /> <Text color='#2CC16B' fontSize='7.25px' className={dmsans.className} fontWeight={400}>+24%</Text></HStack>

                                        </Flex>

                                        <Flex position='relative' flexDirection={'column'} w='122.43px' h='122px' border="0.8px solid #27AE60" pt='14px' pl='12px' bg='rgba(44, 193, 107, 0.08)' borderRadius={'8px'} boxShadow={'0px 14px 54px rgba(0, 0, 0, 0.03'} overflow={'hidden'}>
                                            <Image color='black' position='absolute' opacity={'0.2'} src={'/greenCard.svg'} top='0px' />
                                            <Box bg='#219653'
                                                border='1px solid #219653'
                                                borderRadius='4px'
                                                h='32px'
                                                w='32px'>
                                            </Box>
                                            <Text color='#000000' fontSize='12px' className={dmsans.className} fontWeight={400} mt='10px'>Income</Text>
                                            <Text color='#000000' fontSize='16px' className={dmsans.className} fontWeight={700} >N182,000</Text>
                                            <HStack mt='4px' spacing='2px' align={'center'}> <Image src={'/upArrow.svg'} /> <Text color='#2CC16B' fontSize='7.25px' className={dmsans.className} fontWeight={400}>+24%</Text></HStack>

                                        </Flex>

                                        <Flex flexDirection={'column'} w='122.43px' h='122px' border=" 0.8px solid #EB5757" pt='14px' pl='12px' bg='rgba(235, 87, 87, 0.1)' borderRadius={'8px'} boxShadow={'0px 14px 54px rgba(0, 0, 0, 0.03)'} position='relative' overflow={'hidden'}>

                                            <Box bg='#EB5757'
                                                border='1px solid #EB5757'
                                                borderRadius='4px'
                                                h='32px'
                                                w='32px'>
                                            </Box>
                                            <Text color='#000000' fontSize='12px' className={dmsans.className} fontWeight={400} mt='10px'>Spending</Text>
                                            <Text color='#000000' fontSize='16px' className={dmsans.className} fontWeight={700} >N182,000</Text>
                                            <HStack mt='4px' spacing='2px' align={'center'}> <Image src={'/redArrow.svg'} /> <Text color='#EB5757' fontSize='7.25px' className={dmsans.className} fontWeight={400}>+24%</Text></HStack>
                                            <Image color='black' position='absolute' opacity={'0.2'} src={'/redCard.svg'} top='0px' />
                                        </Flex>

                                    </Stack>
                                    
                                    <Stack direction={'row'} spacing='12px'>

                                        <Flex flexDirection={'row'} justify='center' align='center' w='122px' h='42px' borderWidth="0.2px" borderStyle="solid" bg='rgba(255, 255, 255, 0.4)' borderRadius={'4px'} boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.08)'} >
                                            <Image src={'/addMoneyIcon.svg'} width={'18px'} height={'18px'} mr='6px' />
                                            <Text color='#000000' fontSize={'12px'} className={dmsansbold.className} >Add Money </Text></Flex>

                                        <Flex flexDirection={'row'} justify='center' align='center' w='122px' h='42px' borderWidth="0.2px" borderStyle="solid" bg='rgba(255, 255, 255, 0.4)' borderRadius={'4px'} boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.08)'} >
                                            <Image src={'/freezeCard.svg'} width={'15px'} height={'15px'} mr='6px' />
                                            <Text color='#000000' fontSize={'12px'} className={dmsansbold.className} >Freeze Card </Text></Flex>

                                        <Flex flexDirection={'row'} justify='center' align='center' w='122px' h='42px' borderWidth="0.2px" borderStyle="solid" bg='rgba(255, 255, 255, 0.4)' borderRadius={'4px'} boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.08)'} >
                                            <Image src={'/newCard.svg'} width={'16px'} height={'16px'} mr='6px' />
                                            <Text color='#000000' fontSize={'12px'} className={dmsansbold.className} >New Card </Text></Flex>


                                    </Stack>

                                </Flex>
                                
                                <Stack>

                            <Box h={'auto'} w={'28rem'} borderRadius={'8px'} bg='rgba(255, 255, 255, 0.4)' align={'center'} p='18px' >
                                <Flex flexDirection={'row'} justify='space-between' align='center' mb='36px'>
                                    <Text color='#141736' fontSize='16px' className={dmsansbold.className} fontWeight={500} lineHeight='20.83px' >
                                        Subscribed Merchants
                                    </Text>
                                    <Button variant='link' color='#141736' fontSize={'12px'} className={dmsans.className} rightIcon={<ArrowForwardIcon color='#000000' />} m='0px' pr='0px'>See All</Button>

                                </Flex>
                                <Stack >
                                <MerchantHorizontalCard />
                                <MerchantHorizontalCard />
                              

                                </Stack>

                            </Box>

                        </Stack>


                            {/* all transactions */}

                            <Box w={'28rem'}>

                                <Box mt='18px'>
                                    <Flex dir='row' justify={'space-between'} align='center'>
                                        <Text color='#141736' fontSize='20px' className={dmsans.className} fontWeight={400} lineHeight='19px'>Transaction History</Text>
                                        <Button
                                            rightIcon={<BsChevronDown />}
                                            transition="all 0.3s"
                                            >
                                            All Transactions

                                        </Button>

                                    </Flex>

                                    <Box  w='100%' h='221px' my='26px'>
                                        <Flex flexDir="column" gap={5}>
                                            <Flex overflow="auto" justify={'space-between'} mr={'2'}>
                                
                                                            <HStack alignItems={'flex-start'}>
                                                                <Image src={'/sentImage.svg'} width={'24px'} height={'24px'} />
                                                                <VStack>
                                                                <Text fontSize={'14'} lineHeight={'18.23px'}>Franklin U. Stores</Text>
                                                                <Text fontSize={'12'} lineHeight={'15.6px'}>25 April at 09:30am</Text>
                                                                </VStack>
                                                            </HStack>

                                                             
                                                             <VStack>
                                                                <Text fontSize={'14'} lineHeight={'18.23px'} fontWeight={'bold'}>NGN 42,000.98</Text>
                                                                <HStack spacing={0}> <Icon as={GoPrimitiveDot} boxSize={8} color='#27AE60' p='0px' />
                                                                <Text > Success </Text></HStack>                 
                                                            </VStack>
                                            </Flex>
                                            <Flex overflow="auto" justify={'space-between'} mr={'2'}>
                                
                                                            <HStack alignItems={'flex-start'}>
                                                                <Image src={'/receiveImage.svg'} width={'24px'} height={'24px'} />
                                                                <VStack>
                                                                <Text fontSize={'14'} lineHeight={'18.23px'}>Franklin U. Stores</Text>
                                                                <Text fontSize={'12'} lineHeight={'15.6px'}>25 April at 09:30am</Text>
                                                                </VStack>
                                                            </HStack>

                                                             
                                                             <VStack>
                                                                <Text fontSize={'14'} lineHeight={'18.23px'} fontWeight={'bold'}>NGN 42,000.98</Text>
                                                                <HStack spacing={0}> <Icon as={GoPrimitiveDot} boxSize={8} color='#27AE60' p='0px' />
                                                                <Text > Success </Text></HStack>                 
                                                            </VStack>
                                            </Flex>
                                            <Flex overflow="auto" justify={'space-between'} mr={'2'}>
                                
                                                            <HStack alignItems={'flex-start'}>
                                                                <Image src={'/sentImage.svg'} width={'24px'} height={'24px'} />
                                                                <VStack>
                                                                <Text fontSize={'14'} lineHeight={'18.23px'}>Franklin U. Stores</Text>
                                                                <Text fontSize={'12'} lineHeight={'15.6px'}>25 April at 09:30am</Text>
                                                                </VStack>
                                                            </HStack>

                                                             
                                                             <VStack>
                                                                <Text fontSize={'14'} lineHeight={'18.23px'} fontWeight={'bold'}>NGN 42,000.98</Text>
                                                                <HStack spacing={0}> <Icon as={GoPrimitiveDot} boxSize={8} color='#27AE60' p='0px' />
                                                                <Text > Success </Text></HStack>                 
                                                            </VStack>
                                            </Flex>
                                            <Flex overflow="auto" justify={'space-between'} mr={'2'}>
                                
                                                            <HStack alignItems={'flex-start'}>
                                                                <Image src={'/sentImage.svg'} width={'24px'} height={'24px'} />
                                                                <VStack>
                                                                <Text fontSize={'14'} lineHeight={'18.23px'}>Franklin U. Stores</Text>
                                                                <Text fontSize={'12'} lineHeight={'15.6px'}>25 April at 09:30am</Text>
                                                                </VStack>
                                                            </HStack>

                                                             
                                                             <VStack>
                                                                <Text fontSize={'14'} lineHeight={'18.23px'} fontWeight={'bold'}>NGN 42,000.98</Text>
                                                                <HStack spacing={0}> <Icon as={GoPrimitiveDot} boxSize={8} color='#27AE60' p='0px' />
                                                                <Text > Success </Text></HStack>                 
                                                            </VStack>
                                            </Flex>

                                                      
                                                       


                                        </Flex>

                                    </Box>

                                </Box>
                            </Box>

                            </Stack>


                            {/* responsive end */}


                            <Box w={'60rem'} display={{base:'none', md:'flex'}}>

                                <Box mt='18px'>
                                    <Flex dir='row' justify={'space-between'} align='center'>
                                        <Text color='#141736' fontSize='20px' className={dmsans.className} fontWeight={400} lineHeight='19px'>Transaction History</Text>
                                        <Button
                                            colorScheme='gray' variant='outline' rightIcon={<BsChevronDown />}
                                            transition="all 0.3s"
                                            _focus={{ boxShadow: 'none' }} color='#A5B3CD'>
                                            All Transactions

                                        </Button>

                                    </Flex>

                                    <Box dropShadow='lg' w='100%' h='221px' my='26px'>
                                        <Flex flexDir="column">
                                            <Flex overflow="auto">
                                                <Table variant="simple" bg='#FFFFFF' boxShadow={'0px 14px 54px rgba(0, 0, 0, 0.03);'} borderRadius={'8px'}>
                                                    <Thead h='60px' bg='rgba(0, 0, 0, 0.04)'>
                                                        <Tr color="gray"  >
                                                            <Th w='104px'>S/N</Th>
                                                            <Th w='257px'>Name</Th>
                                                            <Th w='174px'>Amount</Th>
                                                            <Th >Status</Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody fontSize='14px' className={dmsans.className} fontWeight={400} >
                                                        <Tr h='79px'>
                                                            <Td>
                                                                1
                                                            </Td>
                                                            <Td> <HStack> <Image src={'/sentImage.svg'} width={'24px'} height={'24px'} />
                                                                <Text> Franklin Uchemba Stores </Text></HStack> </Td>

                                                            <Td fontWeight={'bold'}> NGN 42,000.98</Td>

                                                            <Td><HStack spacing={0}> <Icon as={GoPrimitiveDot} boxSize={8} color='#27AE60' p='0px' />
                                                                <Text > Success </Text></HStack> </Td>

                                                        </Tr>
                                                        <Tr h='79px'>
                                                            <Td>
                                                                2
                                                            </Td>
                                                            <Td> <HStack> <Image src={'/receiveImage.svg'} width={'24px'} height={'24px'} />

                                                                <Text> Franklin Uchemba Stores </Text></HStack> </Td>

                                                            <Td fontWeight={'bold'}>NGN 42,000.98</Td>

                                                            <Td><HStack spacing={0}> <Icon as={GoPrimitiveDot} boxSize={8} color='#27AE60' p='0px' />
                                                                <Text > Success </Text></HStack> </Td>

                                                        </Tr>


                                                    </Tbody>

                                                </Table>
                                            </Flex>
                                        </Flex>

                                    </Box>

                                </Box>
                            </Box>

                        </VStack>


                    </Box>
                    <Box >
                        <VStack>

                            <Box h={'auto'} w={'28rem'} borderRadius={'8px'} bg='rgba(255, 255, 255, 0.4)' align={'center'} p='18px' border='0.4px solid rgba(0, 0, 0, 0.2)'>
                                <Flex flexDirection={'row'} justify='space-between' align='center' mb='36px'>
                                    <Text color='#141736' fontSize='16px' className={dmsansbold.className} fontWeight={500} lineHeight='19px' >
                                        Subscribed Merchants
                                    </Text>
                                    <Button variant='link' color='#141736' fontSize={'12px'} className={dmsans.className} rightIcon={<ArrowForwardIcon color='#000000' />} m='0px' pr='0px'>See All</Button>

                                </Flex>
                                <MerchantHorizontalCard />
                                <MerchantHorizontalCard />
                                <MerchantHorizontalCard />
                                <MerchantHorizontalCard />
                                <MerchantHorizontalCard />
                                <MerchantHorizontalCard />
                                <MerchantHorizontalCard />
                                <MerchantHorizontalCard />

                            </Box>

                        </VStack>

                        <VStack>


                        </VStack>
                    </Box>
                </HStack>



            </div>
        </NewDash>
    )
}

export default My_Cards