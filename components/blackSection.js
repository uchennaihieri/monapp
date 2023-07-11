import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image, Container, VStack } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Bree_Serif, Roboto_Slab, DM_Sans } from '@next/font/google'

const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })

const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })
const roboto = Roboto_Slab({ weight: '300', subsets: ['latin'] })

const Feature = ({ title, text, icon }) => {
    return (

        <Flex justify={'left'} w={{ base: '22.25rem', md: '19.3125rem' }} h='17.4375rem' borderRadius={'0.875rem'} border={' 2px solid #FFF'} background='#000'
            boxShadow='4px 12px 28px 2px rgba(143, 143, 143, 0.12)' flexDirection={'column'} py='1.75rem' px='1.5rem'
        >
            <Box
                p="0"
                mb={{ base: '1.55rem', md: '0px' }}
                mr={'1.9rem'}>
                <Text className={roboto.className} fontSize={{ base: '2.81rem', md: '3rem' }} lineHeight={{ base: '2.93rem', md: '3.125rem' }} letterSpacing={{ base: '-0.47px', md: '-0.5px' }}> {icon}</Text>

            </Box>
            <Box>
                <Text color={'#ffffff'} className='clashMedium' fontSize={{ base: "1.01rem", md: '1.25rem' }} mb={{ base: "0.91rem", md: '0.88rem' }} >{title}</Text>
                <Text fontWeight={400} className={dmsans.className} fontSize={{ base: "0.90rem", md: '1rem' }} lineHeight={{ base: "1.37rem", md: '1.15863rem' }} >{text}</Text>
            </Box>
        </Flex>
    );
};

export default function BlackSection() {



    return (
        <Box bg="#000000" color={'#FFFFFF'}
            bgImage="url('/blackSectionShades.png')"
            backgroundPosition="center"
            backgroundSize="cover">
            <Container maxW='100%' centerContent>
                <Box maxW={{ base: '21.62em', md: "62.375rem" }} mt={{ base: '3rem', md: "6.62rem" }} mb={{ base: '2.68rem', md: "5rem" }} align="center">
                    <Text
                        mb={{ base: '0.5rem', md: '1.75rem' }}
                        lineHeight={{ base: '2.2rem', md: '3.66644rem' }}
                        fontWeight={600}
                        fontSize={{ base: '1.32rem', md: '3.4375rem' }}
                        className='clashSemiBold'

                    >Our exclusive services to help you make and receive payments</Text>
                    <Text
                        lineHeight={{ base: '1.25rem', md: '1.73838rem' }}
                        fontWeight={500}
                        fontSize={{ base: '0.7rem', md: '1.25rem' }}
                        letterSpacing={'-0.01rem'}
                        className={dmsansBold.className}

                    >Take control of your finances and optimize your money flow like never before.</Text>
                </Box>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} >

                    <VStack justify={'center'} align='center' spacing='3.62rem'>
                        <Feature title='Mobile & Web App' text='Intuitive features so you can effortlessly manage your financial transactions' />
                        <Feature title='Monapp QR Code Card' text='Shop online and offline with our QR code card. Free delivery and zero maintenance fee' />
                    </VStack>

                    <Box overflow={'hidden'}>
                        <Image w='34.48656rem' h='48.97763rem' src='/bPhone.png' />
                    </Box>

                    <VStack justify={'center'} align='center' spacing='3.62rem'>
                        <Feature title='Payment Links' text='Use Payment Links to collect payments swiftly. Share the link with your customers and they can pay through multiple channels.' />
                        <Feature title='First-Level Technical Support' text='No queue. Resolve your queries and concerns swiftly on the app with our one-on-one first-level support.' />
                    </VStack>

                </SimpleGrid>
            </Container>
        </Box>
    );
}