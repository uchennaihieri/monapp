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
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import { Inter, Poppins } from '@next/font/google'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import Image from 'next/image';

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function Navbar() {



    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box className={poppins.className}>
            <Flex
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: '54px' }}
                px={{ base: '47px' }}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Image src="/logo.svg" width={212.3} height={64}
                        priority />
                </Flex>

                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Flex display={{ base: 'none', md: 'flex' }} >
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        as={'a'}
                        fontWeight={500}
                        variant={'outline'}
                        width="131px"
                        height="49px"
                        padding={'10px'}
                        borderRadius={'10px'}
                        borderColor={'#002ECF'}
                        color={'white'}
                        fontSize={'18px'}
                        gap={'10px'}
                        href={'#'}
                        _hover={{
                            bg: '#002ECF',
                        }}>
                        Sign In
                    </Button>
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        width="131px"
                        height="49px"
                        padding={'10px'}
                        borderRadius={'10px'}
                        fontSize={'18px'}
                        gap={'10px'}
                        fontWeight={500}
                        color={'white'}
                        bg={'#002ECF'}
                        href={'#'}
                        _hover={{
                            bg: '#0110A4',
                        }}>
                        Sign Up
                    </Button>
                </Stack>
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
        <Stack direction={'row'} spacing={'33px'} align={'center'}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
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
        label: 'Home'

    },
    {
        label: 'Pricing'
    },
    {
        label: 'Contact Us'
    }
];