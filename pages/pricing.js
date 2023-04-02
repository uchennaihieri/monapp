import Navbar from '@/components/navbar';
import PageSeo from '@/Seo/pageSeo';
import {
    Box,
    Button,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Bree_Serif, DM_Sans } from '@next/font/google';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';



const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })

const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })



const PackageTier = ({ checked, typePlan, title, options }) => {


    return (
        <Stack
            p={3}
            py={3}
            justifyContent={{
                base: 'flex-start',
                md: 'space-around',
            }}
            direction={{
                base: 'column',
                md: 'row',
            }}
            alignItems={{ md: 'center' }}>
            <Text color={'#ffffff'} fontSize={{ base: '1.75rem', md: '2.75rem' }} className={dmsans.className}>{title}</Text>
            <List spacing={3} textAlign="start">
                {options.map((desc, id) => (
                    <ListItem key={desc.id} className={dmsans.className} fontSize={'1.12rem'}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        {desc.desc}
                    </ListItem>
                ))}
            </List>
            <Text fontSize={'1.75em'} className={dmsans.className}>{typePlan}</Text>

        </Stack>
    );
};
const Pricing = () => {
    const appOptions = [
        { id: 1, desc: 'Zero download fee' },
        { id: 2, desc: 'Zero setup fee' },
        { id: 3, desc: 'Community support' },
    ];


    const cardOptions = [
        { id: 1, desc: 'Zero Maintenance fee' },
        { id: 2, desc: 'Free delivery fee' },
        { id: 3, desc: 'Pay later available' },
    ];


    const payOptions = [
        { id: 1, desc: 'No hidden charges' },
        { id: 2, desc: 'Low transaction fees' },
        { id: 3, desc: 'On-demand settlements' },
    ];

    return (
        <>
            <PageSeo title="Our Prices - Monapp" description="" />


            <Box bg="#000000" color="#ffffff">
                <Navbar />
                <Box py={12} px={5} minH={'100vh'}>
                    <Stack spacing={4} width={'100%'} direction={'column'}>
                        <Stack
                            p={5}
                            alignItems={'center'}
                            justifyContent={{
                                base: 'flex-start',
                                md: 'space-around',
                            }}
                            direction={{
                                base: 'column',
                                md: 'column',
                            }}>
                            <Stack
                                width={{
                                    base: '100%',
                                    md: '40%',
                                }}
                                textAlign={'center'}>
                                <Text mt={{ base: '1.5rem', md: '1.8rem' }} mb={{ base: '0.5rem', md: '0.8rem' }}
                                    letterSpacing={{ base: '-0.79px', md: '-1px' }}
                                    lineHeight={{ base: '3rem', md: '5rem' }}
                                    fontWeight={400}
                                    color="white"
                                    fontSize={{ base: '2.75rem', md: '3.75rem' }}
                                    className={bree.className}>
                                    Simple and fair pricing <br /> <span style={{ color: "#3183FF" }}>just for you</span>
                                </Text>
                            </Stack>
                            <Stack
                                width={{
                                    base: '100%',
                                    md: '60%',
                                }}
                                py={{
                                    base: '1rem',
                                    md: '1.5rem',
                                }}
                            >
                                <Text className={dmsans.className} fontWeight={400} color={'#FFFFFF'} fontSize={{ base: '1.125rem' }} mt={{ base: '1.5rem', md: '1rem' }} mb={'2.3em'} lineHeight={{ base: '1.5rem', md: '1.75rem' }} textAlign={'center'}>
                                    * Custom pricing can be made available to businesses with large-volume transactions.
                                </Text>
                            </Stack>
                        </Stack>
                        <Divider />
                        <PackageTier title={'App'} typePlan="Free" options={appOptions} />
                        <Divider />
                        <PackageTier
                            title={'Card'}
                            checked={true}
                            typePlan="&#8358;1,500"
                            options={cardOptions}
                        />
                        <Divider />
                        <PackageTier title={'Transact'} typePlan="1.5%" options={payOptions} />
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default Pricing;