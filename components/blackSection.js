import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image, Container } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Bree_Serif, Roboto_Slab, DM_Sans } from '@next/font/google'

const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })

const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })
const roboto = Roboto_Slab({ weight: '300', subsets: ['latin'] })

const Feature = ({ title, text, icon }) => {
    return (
        <Flex justify={'left'} w={{ base: '22.25rem', md: 'auto' }} align="start" flexDirection={'row'}>
            <Box
                p="0"
                mb={{ base: '1.55rem', md: '0px' }}
                mr={'1.9rem'}>
                <Text className={roboto.className} fontSize={{ base: '2.81rem', md: '3rem' }} lineHeight={{ base: '2.93rem', md: '3.125rem' }} letterSpacing={{ base: '-0.47px', md: '-0.5px' }}> {icon}</Text>

            </Box>
            <Box>
                <Text color={'#ffffff'} className={dmsansBold.className} fontSize={{ base: "1.01rem", md: '1.125rem' }} mb={{ base: "0.91rem", md: '0.9375rem' }} >{title}</Text>
                <Text fontWeight={400} className={dmsans.className} fontSize={{ base: "0.90rem", md: '1rem' }} lineHeight={{ base: "1.37rem", md: '1.875rem' }} >{text}</Text>
            </Box>
        </Flex>
    );
};

export default function BlackSection() {
    return (
        <Box bg="#000000" color={'#FFFFFF'}>
            <Container maxW='79.81em' h={{ base: '50em', md: "40.625em" }} centerContent>
                <Box maxW={{ base: '21.62em', md: "36.43em" }} mt={{ base: '3rem', md: "5.31rem" }} mb={{ base: '2.68rem', md: "7.62rem" }} align="center">
                    <Text
                        mb={{ base: '0.5rem', md: '0.8rem' }}
                        letterSpacing={{ base: '-0.35px', md: '-0.5px' }}
                        lineHeight={{ base: '2.2rem', md: '3.125rem' }}
                        fontWeight={400}
                        fontSize={{ base: '1.32rem', md: '1.87rem' }}
                        className={bree.className}

                    >Get started in 3 easy steps</Text>
                    <Text
                        lineHeight={{ base: '1.25rem', md: '2.18rem' }}
                        fontWeight={400}
                        fontSize={{ base: '0.7rem', md: '1rem' }}
                        className={dmsans.className}

                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</Text>
                </Box>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <Feature
                        icon={'01'}
                        title={'Sign up on the website'}
                        text={
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.'
                        }
                    />
                    <Feature
                        icon={'02'}
                        title={'Download the app'}
                        text={
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.'
                        }
                    />
                    <Feature
                        icon={'03'}
                        title={'Sign in and start paying'}
                        text={
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.'
                        }
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
}