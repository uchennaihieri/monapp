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
    Button,
    Divider,
    HStack,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md'
import { AiFillStar, AiOutlineLine, AiOutlineRight, AiOutlineStar } from 'react-icons/ai'
import { Bree_Serif, DM_Sans, Inter, Plus_Jakarta_Sans } from '@next/font/google'

const plus = Plus_Jakarta_Sans({ weight: ['500', '700'], subsets: ['latin'] })


const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })



export default function CardSection() {
    return (
        <Box >
            <Container maxW='79.81em' pt={{ base: "1.125rem", md: "1.78rem" }} centerContent>
                <Flex flexDirection={{ base: "column-reverse", md: 'row' }} align={{ base: "center", md: "start" }} justify={{ base: "start", md: 'space-between' }}>

                    <Stack textAlign={{ base: "center", md: 'start' }} w={{ base: '22.43rem', md: "31.93rem" }} spacing={4} mr={{ base: "0em", md: "5em" }}>

                        <Text
                            mt={{ base: "3.875rem", md: '13.72rem' }}
                            mb={'1.625rem'}
                            color='#000000'
                            letterSpacing={{ base: '-0.39px', md: '-0.5px' }}
                            lineHeight={{ base: '2.37rem', md: '3.75rem' }}
                            fontWeight={400}
                            fontSize={{ base: '1.75rem', md: '2.5rem' }}
                            className={bree.className}
                        >With qr code payment option, you can boost your business profitability</Text>
                        <Text
                            mb={{ base: '0.87rem', md: '1rem' }}
                            color={'#02073E'}
                            lineHeight={{ base: '1.5rem', md: '1.78125rem' }}
                            fontWeight={400}
                            fontSize={{ base: '1rem', md: '1.0625rem' }}
                            className={dmsans.className}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </Text>



                        <Button alignSelf={{ base: "center", md: 'start' }} bg={{ base: 'black', md: 'transparent' }} _hover={{
                            backgroundColor: 'none'
                        }} color={{ base: '#ffffff', md: '#3183FF' }} w={{ base: "17.5em", md: "6.6em" }} rightIcon={<AiOutlineRight />}>Download App</Button>

                    </Stack>
                    <Box position="relative">
                        <Image
                            alt={'feature image'}
                            src={'/result.png'
                            }

                            w={{ base: "20.49rem", md: "39.72rem" }}
                            h={{ base: "21.87rem", md: "42.40rem" }}
                        />

                    </Box>
                </Flex>
                <Box maxW={{ base: "19.81rem", md: "36.43em" }} mt={{ base: "5.37rem", md: "16.06rem" }} mb={{ base: "2.12rem", md: "8.75rem" }} align="center">
                    <Text
                        mb={{ base: "0.37rem", md: '1rem' }}
                        letterSpacing={{ base: "-0.28px", md: '-0.5px' }}
                        lineHeight={{ base: "2.07rem", md: '3.125rem' }}
                        fontWeight={400}
                        fontSize={{ base: '1.5rem', md: '1.87rem' }}
                        className={bree.className}

                    >Don&#39;t just take our words for it</Text>
                    <Text
                        lineHeight={{ base: '1.21rem', md: '2.18rem' }}
                        fontWeight={400}
                        fontSize={{ base: '0.75rem', md: '1rem' }}
                        className={dmsans.className}
                        w={{ base: "15.25rem", md: "auto" }}
                    >Hear what our users are saying about using our card to make payment</Text>
                </Box>

                <Flex>
                    <Box w={{ base: "15.52rem", md: '27.18rem' }} h={{ base: "16.81rem", md: '29.43rem' }} bg={'rgba(213, 214, 214, 0.15)'} px={{ base: "0.99rem", md: '1.75rem' }} border={'1px solid rgba(0, 0, 0, 0.2)'} mb={{ base: "2.25rem", md: "4.75rem" }}>
                        <Box py={{ base: "1.35rem", md: '2.375rem' }}>
                            <Text
                                color={'#000000'}
                                lineHeight={{ base: "0.85rem", md: '1.5rem' }}
                                fontWeight={400}
                                fontSize={{ base: "0.57rem", md: '1rem' }}
                                className={dmsans.className}
                                textAlign={'justify'}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Text>
                        </Box>
                        <Divider />
                        <Box py={{ base: "1.28rem", md: '2.25rem' }} >
                            <Flex flexDirection={'row'} align={'center'}>
                                <Image src={'https://picsum.photos/200/300.webp'} height={{ base: "2.53rem", md: '4.4rem' }} width={{ base: "2.46rem", md: '4.3rem' }} mr={{ base: "0.42rem", md: "0.75rem" }} border={'1px solid #D5D6D6'} borderRadius={{ base: "0.14rem", md: '0.25rem' }} />
                                <Box>
                                    <Text color={'#000000'}
                                        lineHeight={{ base: "0.57rem", md: '0.875rem' }}
                                        fontWeight={500}
                                        fontSize={{ base: "0.81rem", md: '1.5rem' }}
                                        className={dmsansBold.className}
                                        mb={{ base: "0.57rem", md: "1rem" }}> Phillip Chatham A. </Text>
                                    <Text
                                        color={'#000000'}
                                        lineHeight={{ base: "0.5rem", md: '0.875rem' }}
                                        fontWeight={400}
                                        fontSize={{ base: "0.64rem", md: '1.125rem' }}
                                        letterSpacing={{ base: "0.34rem", md: '0.6px' }}
                                        className={dmsans.className}
                                        mb={{ base: "0.49rem", md: "0.875rem" }}>CEO, Creatorh </Text>
                                    <HStack>
                                        <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
                                        <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
                                        <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
                                        <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
                                        <Icon as={AiOutlineStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
                                    </HStack>

                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
                <HStack mb={{ base: "4.29rem", md: "8.3125rem" }} >
                    <Icon as={AiOutlineLine} fontSize={{ base: "2.24rem", md: "4.06rem" }} color="#000000" />
                </HStack>
            </Container>
        </Box>
    );
}