import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Img,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { DM_Sans } from '@next/font/google'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
} from '@chakra-ui/icons';
import Image from 'next/image';
import { RiMenu3Line } from 'react-icons/ri';

const dmsans = DM_Sans({ weight: ['500', '700'], subsets: ['latin'] })

export default function Navbar() {



    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box className={dmsans.className}>
            <Flex
                color={useColorModeValue('gray.600', 'white')}
                pt={{ base: '2.875rem', md: '4.08vh' }}
                pl={{ base: '1.25rem', md: '15.885vw' }}
                align={'center'}>

                <Flex justify={{ base: 'start', md: 'start' }}>
                    <Img src="/logo.png" width={{ base: '8.625rem', md: "14.4275rem" }} height={{ base: '1.569rem', md: "2.625rem" }} />
                </Flex>

                <Flex pl={{ base: '36.154vw' }} justify={{ base: 'center', md: 'start' }}>
                    <Flex display={{ base: 'none', md: 'flex' }} >
                        <DesktopNav />
                    </Flex>
                </Flex>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    justify="end"
                    display={{ base: 'flex', md: 'none' }}
                    marginRight="1.25rem"
                >

                    {
                        isOpen ? <CloseIcon color="white" w={5} h={5} onClick={onToggle} /> : <RiMenu3Line color="white" w={5} h={5} onClick={onToggle} />
                    }

                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.400', 'white');

    return (
        <Stack direction={'row'} spacing={'2.875rem'} align={'center'}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label} align={'center'} justify={'center'} role="group" position={'relative'}>

                    <Link

                        href={navItem.href ?? '#'}
                        fontSize={'1rem'}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                        }}>
                        {navItem.label}
                    </Link>

                    <Img position={'absolute'} w={'0em'} _groupHover={{ width: "100%" }} src="line.svg" height="0.6em" transition={'width .5s ease-in-out'} />
                </Box>
            ))}
        </Stack>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};



const NAV_ITEMS = [
    {
        label: 'Pricing',
        href: '/pricing'

    },
    {
        label: 'Support',
        href: '/support'
    },
    {
        label: 'Sign in',
        href: '/auth?task=signin'
    },
    {
        label: 'Get Started',
        href: '/auth?task=signup'
    }

];