import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image, Container } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Bree_Serif, Inter, DM_Sans } from '@next/font/google'
import CheckIcon from './Icons/checkIcon';

const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })

const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })


const Feature = ({ title, text, icon }) => {
    return (
        <Flex justify={{ base: 'center', md: 'left' }} align={{ base: 'center', md: 'start' }} flexDirection={{ base: 'column', md: 'row' }}>
            <Box
                p="0"
                mb={{ base: '1.55rem', md: '0px' }}
                mr={{ base: '0px', md: '1.9rem' }}>
                {icon}
            </Box>
            <Box
                textAlign={{ base: "center", md: "start" }}
                w={{ base: '16.75rem', md: 'auto' }}
            >
                <Text color={'#000000'} className={dmsansBold.className} fontSize={{ base: "1.01rem", md: '1.125rem' }} mb={{ base: "0.91rem", md: '0.9375rem' }} >{title}</Text>
                <Text fontWeight={400} className={dmsans.className} fontSize={{ base: "0.90rem", md: '1rem' }} lineHeight={{ base: "1.37rem", md: '1.875rem' }} >{text}</Text>
            </Box>
        </Flex>
    );
};

export default function Features() {
    return (
        <Flex
            borderRightRadius='0.67575rem'
            background='#FFF'
            boxShadow='2px 8px 24px -0.5px rgba(0, 0, 0, 0.08)'



            w='82rem' h={{ base: '53.93em', md: "33.9375rem" }} marginTop={'-8.1275rem'}>

            <Box w='31.5rem' h='33.9375rem' bg='#F2F2F2'
                position={'relative'}


            >

                <Image src={'/broker.png'} h='38.70313rem' w={'27.1875rem'} position={'absolute'} bottom='0' left='50%' transform="translate(-50%, -0%)" />

            </Box>

            <Box pt='3.5rem' pl='4rem'>
                <Text
                    w='32.625rem'
                    lineHeight={{ base: '1rem', md: '2.97894rem' }}
                    fontWeight={600}
                    color="#000"
                    fontSize={{ base: '1rem', md: '2.25rem' }}
                    className='clashSemiBold'
                    mb='1.38rem'
                >

                    The future-proof way to financial inclusion
                </Text>
                <Text
                    w='41.0625rem'
                    color="#000"
                    lineHeight={{ base: '1rem', md: '1.78125rem' }}
                    fontWeight={400}
                    fontSize={{ base: '0.7rem', md: '1.5rem' }}
                    className={dmsans.className}
                    mb='2.5rem'
                >

                    Our payment brokers will give you the necessary training and support to make easy transactions from anywhere in Nigeria.
                </Text>

                <Flex w='41.0625rem' flexDirection={'row'} justify={'space-between'}>
                    <Flex >
                        <CheckIcon boxSize={'1.75rem'} color='#000000' mr='0.75rem' />
                        <Box>
                            <Text
                                color="#000"
                                lineHeight={{ base: 'normal' }}
                                fontWeight={600}
                                fontSize={{ base: '0.7rem', md: '1.125rem' }}
                                className={dmsans.className}
                                mb='0.75rem'
                            >
                                Personalized support 24/7
                            </Text>
                            <Text
                                maxW='16.625rem'
                                color="#000"
                                lineHeight={{ base: '1.5rem' }}
                                fontWeight={400}
                                fontSize={{ base: '0.7rem', md: '1rem' }}
                                className={dmsans.className}

                            >
                                To address any query or concern you may have and ensure you receive prompt and tailored
                                assistance.
                            </Text>
                        </Box>
                    </Flex>


                    <Flex>
                        <CheckIcon boxSize={'1.75rem'} color='#000000' mr='0.75rem' />
                        <Box>
                            <Text color="#000"
                                lineHeight={{ base: 'normal' }}
                                fontWeight={600}
                                fontSize={{ base: '0.7rem', md: '1.125rem' }}
                                className={dmsans.className}
                                mb='0.75rem'>
                                Comprehensive training
                            </Text>
                            <Text
                                maxW='16.625rem'
                                color="#000"
                                lineHeight={{ base: '1.5rem' }}
                                fontWeight={400}
                                fontSize={{ base: '0.7rem', md: '1rem' }}
                                className={dmsans.className}
                            >
                                To equip you with the knowledge and skills to navigate your payment process effectively.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex>

                    </Flex>

                </Flex>
            </Box>
        </Flex>
    );
}

















// <Box w={{ base: '21.62em', md: "36.43em" }} mt={{ base: '4.81rem', md: "9.06rem" }} mb={{ base: '3.25rem', md: "8.75rem" }} align="center">
//                 <Text
//                     mb={{ base: '0.5rem', md: '1rem' }}
//                     letterSpacing={{ base: '-0.35px', md: '-0.5px' }}
//                     lineHeight={{ base: '2.2rem', md: '3.125rem' }}
//                     fontWeight={400}
//                     fontSize={{ base: '1.32rem', md: '1.87rem' }}
//                     className={bree.className}

//                 >Go Beyond slow payments</Text>
//                 <Text
//                     lineHeight={{ base: '1.25rem', md: '2.18rem' }}
//                     fontWeight={400}
//                     fontSize={{ base: '0.7rem', md: '1rem' }}
//                     className={dmsans.className}

//                 >Focus only on your business, we take care of the payments. You can pay and get paid within seconds with zero hitches.</Text>
//             </Box>




//             <Box maxW={{ base: '21.62em', md: "36.43em" }} mt={{ base: '4.81rem', md: "9.06rem" }} mb={{ base: '3.25rem', md: "8.75rem" }} align="center">
//                 <Text
//                     mb={{ base: '0.5rem', md: '1rem' }}
//                     letterSpacing={{ base: '-0.35px', md: '-0.5px' }}
//                     lineHeight={{ base: '2.2rem', md: '3.125rem' }}
//                     fontWeight={400}
//                     fontSize={{ base: '1.32rem', md: '1.87rem' }}
//                     className={bree.className}

//                 >Go Beyond slow payments</Text>
//                 <Text
//                     lineHeight={{ base: '1.25rem', md: '2.18rem' }}
//                     fontWeight={400}
//                     fontSize={{ base: '0.7rem', md: '1rem' }}
//                     className={dmsans.className}

//                 >Focus only on your business, we take care of the payments. You can pay and get paid within seconds with zero hitches.</Text>
//             </Box>
//             <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//                 <Feature
//                     icon={<Image src='/store.svg' w={{ base: 10, md: 36 }} h={'auto'} />}
//                     title={'Receive payment for your business'}
//                     text={
//                         "You get instant feedback on payments and can customize payment flows to fit your use case. It's all in your hands..."
//                     }
//                 />
//                 <Feature
//                     icon={<Image src='/gift.svg' w={{ base: 10, md: 36 }} h={'auto'} />}
//                     title={'Pay swiftly for purchases'}
//                     text={
//                         'Join the Monapp community and enjoy life without cash. End-to-end payments without transaction failure...'
//                     }
//                 />
//                 <Feature
//                     icon={<Image src='/cup.svg' w={{ base: 10, md: 36 }} h={'auto'} />}
//                     title={'Grow your business'}
//                     text={
//                         'Businesses that use monapp save time and delight their customers. Giving them the best payment option locally...'
//                     }
//                 />
//             </SimpleGrid>