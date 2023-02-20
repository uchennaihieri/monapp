import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    StackDivider,
    HStack,
} from '@chakra-ui/react';
import { DM_Sans, Bree_Serif } from '@next/font/google'

const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })

const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })

export default function HeroSection() {
    return (

        <Stack
            mt={{ base: '3.93em', md: '5.604375em' }}
            pb={'6rem'}
            direction={{ base: 'column', md: 'row' }}>
            <Stack w={{ base: '100%', md: '31.5rem' }} mr={{ base: '0rem', md: "7.37vw" }} mt={{ base: '0em', md: '3.395625em' }} ml={{ base: '0rem', md: '16.302vw' }} align={{ base: "center", md: "start" }} >

                <Box
                    textAlign={{ base: "center", md: "start" }}
                    w={{ base: '23.812rem', md: 'auto' }}
                >
                    <Text
                        letterSpacing={{ base: '-0.79px', md: '-1px' }}
                        lineHeight={{ base: '3rem', md: '5rem' }}
                        fontWeight={400}
                        color="white"
                        fontSize={{ base: '2.75rem', md: '3.75rem' }}
                        className={bree.className}

                    >
                        A better way to make payment for the next gen
                    </Text>

                </Box>
                <Box
                    textAlign={{ base: "center", md: "start" }}
                    w={{ base: '22.43rem', md: 'auto' }}


                >
                    <Text className={dmsans.className} fontWeight={400} color={'#FFFFFF'} fontSize={{ base: '1.125rem' }} mt={{ base: '1.5rem', md: '1rem' }} mb={'2.3em'} lineHeight={{ base: '1.5rem', md: '1.75rem' }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </Text>
                </Box>
                <HStack spacing={{ base: '0.85rem', md: '2.3rem' }}  >
                    <Image
                        alt={'Hero Image'}

                        align={'center'}
                        width={{ base: '10.3rem', md: '10.677vw' }}
                        height={{ base: '3.36rem', md: '7.39vh' }}
                        src={
                            '/playstore.png'
                        }
                    />
                    <Image
                        alt={'Hero Image'}

                        align={'center'}
                        width={{ base: '10.37rem', md: '10.75vw' }}
                        height={{ base: '3.43rem', md: '7.55vh' }}
                        src={
                            '/appstore.png'
                        }
                    />

                </HStack>
                {/* 
                <Flex flexDirection={'row'} mr={'1.87rem'} align="center">
                    <Text className={dmsans.className} fontWeight={400} color={'#FFFFFF'} fontSize={{ base: '1rem' }} lineHeight={'2.63rem'} letterSpacing={'0px'} opacity={'0.6'}></Text>

                </Flex> */}


            </Stack>
            <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                w={'full'}>

                <Box
                    height={'auto'}
                    boxShadow={'2xl'}
                    width={{ base: 'auto', md: 'full' }}
                    mt={{ base: '3.93rem', md: '0px' }}
                >

                    <Image
                        alt={'Hero Image'}

                        align={'center'}
                        width={{ base: '18.53rem', md: '35.26vw' }}
                        height={{ base: '17.06rem', md: '68.87vh' }}
                        src={
                            '/heroPhones.png'
                        }
                    />
                </Box>
            </Flex>
        </Stack>

    );
}
