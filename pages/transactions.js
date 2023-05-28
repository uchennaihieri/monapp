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
import { SearchIcon } from '@chakra-ui/icons';
import { DM_Sans, Rubik, } from '@next/font/google';
import { BsChevronDown, BsDot } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import DebitTransaction from '@/components/debitTransaction';
import CreditTransaction from '@/components/creditTransaction';
import NewDash from './NewDash';



const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })
const dmsansbold = DM_Sans({ weight: '500', subsets: ['latin'] })
const rubik = Rubik({ weight: ['300', '400'], subsets: ['latin'] })

function Transactions() {
    return (
        <NewDash>
            <div>


                <Box ml={{ base: 0, md: '8rem' }} mt='18px' px='10px'>
                    <Flex dir='row' justify={'space-between'} align='center'>
                        <Text color='#141736' fontSize='20px' className={dmsans.className} fontWeight={400} lineHeight='19px'>Transaction History</Text>
                        <Button
                            colorScheme='gray' variant='outline' rightIcon={<BsChevronDown />}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }} color='#A5B3CD'>
                            All Transactions

                        </Button>

                    </Flex>












                    <Box dropShadow='lg' w='100%' minH='221px' my='26px'>
                        <Flex flexDir="column">
                            <Flex overflow="auto">
                                <Table variant="simple" bg='#FFFFFF' boxShadow={'0px 14px 54px rgba(0, 0, 0, 0.03);'} borderRadius={'8px'}>
                                    <Thead h='60px' bg='rgba(0, 0, 0, 0.04)'>
                                        <Tr color="gray"  >
                                            <Th w='104px'>S/N</Th>
                                            <Th w='257px'>Name</Th>
                                            <Th w='167px'>Reference No</Th>
                                            <Th w='174px'>Amount</Th>
                                            <Th w='180px'>Date</Th>
                                            <Th >Status</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody fontSize='14px' className={dmsans.className} fontWeight={400} >
                                        <DebitTransaction />
                                        <CreditTransaction />
                                        <CreditTransaction />
                                        <CreditTransaction />
                                        <DebitTransaction />
                                        <DebitTransaction />
                                        <DebitTransaction />
                                        <DebitTransaction />


                                    </Tbody>

                                </Table>
                            </Flex>
                        </Flex>

                    </Box>

                </Box>




















            </div>
        </NewDash>
    )
}

export default Transactions