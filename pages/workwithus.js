import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Box,
    IconButton,
    Button,
} from '@chakra-ui/react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoLogoWhatsapp,
    IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import Navbar from '@/components/navbar';
import FormSteps from '@/components/formSteps';
import Headline from '@/components/headline';
import { FaSlack, FaSlackHash, FaTelegramPlane } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { HiSpeakerphone } from 'react-icons/hi';
import { TiSpanner } from 'react-icons/ti';
import { Bree_Serif, DM_Sans } from '@next/font/google';
import PageSeo from '@/Seo/pageSeo';


const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })

const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })

const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={'white'}>
                {icon}
            </Flex>
            <Button fontWeight={600} variant={'link'} color='white'>{text}</Button>
        </Stack>
    );
};

export default function Workwithus() {
    return (
        <>
            <PageSeo title="Work with us - Monapp" description="" />

            <Box bg="#000000" color="#ffffff">
                <Navbar />
                <Container maxW={'7xl'} py={{ base: 12, md: 24 }} minH={'100vh'}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
                        <Stack spacing={8}>

                            <Text mt={{ base: '1.5rem', md: '1.8rem' }} mb={{ base: '0.5rem', md: '0.8rem' }}
                                letterSpacing={{ base: '-0.79px', md: '-1px' }}
                                lineHeight={{ base: '3rem', md: '5rem' }}
                                fontWeight={400}
                                color="white"
                                fontSize={{ base: '2.75rem', md: '3.75rem' }}
                                className={bree.className}>Be a payment broker - work and earn from home.</Text>
                            <Text className={dmsans.className} fontWeight={400} color={'#FFFFFF'} fontSize={{ base: '1.125rem' }} mt={{ base: '1.5rem', md: '1rem' }} mb={'2.3em'} lineHeight={{ base: '1.5rem', md: '1.75rem' }}>
                                Work with the fastest growing payment startup in Nigeria and be a vital piece of our financial inclusion movement. You decide when, where, and how much you work.
                            </Text>
                            <Stack
                                spacing={4}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue('gray.100', 'gray.700')}
                                    />
                                }>
                                <Feature
                                    icon={
                                        <IconButton as={HiSpeakerphone} variant="ghost" _hover={{ bg: 'none' }} colorScheme='whatsapp' w={5} h={5} />
                                    }

                                    text={'Marketing'}
                                />
                                <Feature
                                    icon={<IconButton as={BiSupport} variant="ghost" colorScheme='telegram' _hover={{ bg: 'none' }} w={5} h={5} />}

                                    text={'1st Level Customer Support'}
                                />
                                <Feature
                                    icon={
                                        <Icon as={TiSpanner} color={'purple.500'} w={5} h={5} />
                                    }

                                    text={'1st Level Technical Support'}
                                />
                            </Stack>
                        </Stack>
                        <Flex>
                            <Image
                                rounded={'lg'}
                                alt={'feature image'}
                                src={
                                    '/person.png'
                                }
                                objectFit={'cover'}
                            />
                        </Flex>
                    </SimpleGrid>
                    <Headline />
                    <FormSteps />
                </Container>
            </Box>
        </>
    );
}