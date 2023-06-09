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
    Alert,
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
import MyChart from '@/components/myChart';
import { activePage } from '@/recoil/atoms';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardIcon from '@/components/Icons/dashboardIcon';
import MyCardsIcon from '@/components/Icons/myCardsIcon';
import TransactionIcon from '@/components/Icons/transactionIcon';
import MerchantsIcon from '@/components/Icons/merchantsIcon';
import settingIcon from '@/components/Icons/settingIcon';
import LogoutIcon from '@/components/Icons/logoutIcon';


const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })
const dmsansbold = DM_Sans({ weight: '500', subsets: ['latin'] })
const rubik = Rubik({ weight: ['300', '400'], subsets: ['latin'] })

const LinkItems = [
    { name: 'Dashboard', icon: DashboardIcon, pathname: '/dashboardd' },
    { name: 'My Cards', icon: MyCardsIcon, pathname: '/my_cards' },
    { name: 'Transaction', icon: TransactionIcon, pathname: '/transactions' },
    { name: 'Merchants', icon: MerchantsIcon, pathname: '/merchants' },
    { name: 'Setting', icon: settingIcon, pathname: '/settings' },
    { name: 'Logout', icon: LogoutIcon, pathname: '#' },
];







export default function NewDash({
    children,
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentPage, setCurrentPage] = useRecoilState(activePage)
    return (
        <Box minH="100vh" bg={'#FCFCFC'}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: '17.25rem' }} p="4">


                {children}



            </Box>
        </Box>
    );
}



const SidebarContent = ({ onClose, ...rest }) => {



    return (
        <Box
            transition="3s ease"
            bg={'#FFFFFF'}
            borderRight="1px"
            borderRightColor={'#EEF1F6'}
            w={{ base: 'full', md: '19.16%' }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex mt='51px' mb="47px" alignItems="center" mx="4rem" justifyContent="space-between">
                <Image src={'/footerlogo.png'} width={{ base: '158px' }} height={'auto'} />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            <Text mx="4rem" mb="10px" fontSize={'12px'} color={'#A5B3CD'} textTransform="uppercase">Manage</Text>
            {LinkItems.map((link) => (

                <NavItem key={link.name} name={link.name} to={link.pathname} icon={link.icon}>
                    {link.name}
                </NavItem>

            ))}

        </Box>
    );
};


const NavItem = ({ icon, to, name, children, ...rest }) => {

    const router = useRouter();
    const checkClick = (name) => {

        if (name === 'Logout') {

            alert('a')
        } else null
    }

    return (
        <Link
            href={`${to}`}
            onClick={() => checkClick(name)}


            passHref style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="12"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                color={router.pathname === to ? '#000000' : '#A5B3CD'}
                fontWeight={router.pathname === to ? 'bold' : 'normal'}
                className={dmsans.className}
                fontSize={'18px'}
                _hover={{
                    color: '#000000',
                    fontWeight: 'semibold'
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="17.5px"
                        fontSize="16px"
                        color={router.pathname === to ? '#000000' : '#A5B3CD'}
                        _groupHover={{
                            color: '#000000',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};


const MobileNav = ({ onOpen, ...rest }) => {

    const router = useRouter();
    const routeNames = {
        '/dashboardd': 'Dashboard',
        '/my_cards': 'My Cards',
        '/transactions': 'Transaction',
        '/merchants': 'Merchants',
        '/settings': 'Settings',
    };

    const currentRoute = router.pathname;
    const title = routeNames[currentRoute];

    return (
        <>
            <Flex
                ml={{ base: 0, md: '6.375rem' }}
                px={{ base: 4, md: '3.1875rem' }}
                height={{ base: '20', md: '8.8rem' }}
                alignItems="center"
                bg={'#FCFCFC'}
                // borderBottomWidth="1px"
                // borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
                justifyContent={{ base: 'space-between', md: 'flex-end' }}
                {...rest}>
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onOpen}
                    variant="outline"
                    aria-label="open menu"
                    icon={<FiMenu />}
                />


                <Image display={{ base: 'flex', md: 'none' }} src={'/footerlogo.png'} width={{ base: '9.8rem' }} height={'auto'} />
                <HStack display={{ base: 'none', md: 'flex' }} w='100%' ml="17.25rem" mr="2.375rem" >
                    <Box display={{}}>
                        <Text fontSize={'32px'} fontWeight={500} >{title}</Text>
                        <Text fontSize={'14px'} fontWeight={400} >Tuesday, 14th May, 2023</Text>
                    </Box>
                    <Spacer />

                    <InputGroup align="center" w="35.125rem" h="3.75rem"  >
                        <InputLeftElement
                            h="3.75rem"
                            pointerEvents='none'
                            children={<SearchIcon w="14.91px" h="15.06px" color="#A5B3CD" />}
                        />
                        <Input type="search"
                            borderRadius="8px" w="35.125rem" h="3.75rem" variant='outline' _placeholder={{ opacity: 1, color: "#A5B3CD", fontSize: '1rem' }} placeholder='Search a transaction' bg="#FFFFFF" />
                    </InputGroup>

                </HStack>
                <HStack spacing={{ base: '.75rem', md: '1.39rem' }}>
                    <IconButton
                        borderRadius={'100%'}
                        size="lg"
                        variant="outline"
                        aria-label="open menu"

                        icon={<FiBell />}
                    />

                    <Box
                        style={{
                            filter: "drop-shadow(0px 14px 54px rgba(0, 0, 0, 0.06))",
                        }}
                    >
                        <Avatar
                            display={{ base: 'none', md: 'flex' }}
                            size={'lg'}
                            src={
                                'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                            }
                        />


                    </Box>
                </HStack>

            </Flex >
            <Box display={{ md: 'none' }}
                ml={{ base: 0, md: '6.375rem' }}
                px={{ base: 4, md: '3.1875rem' }}
                height={{ base: '20', md: '8.8rem' }}
            >
                <Text fontSize={'22px'} fontWeight={500} >{title}</Text>
                <Text fontSize={'14px'} fontWeight={400} >Tuesday, 14th May, 2023</Text>
            </Box>
        </>
    );
};