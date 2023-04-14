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
    useToast,
    Spacer,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md'
import { AiFillStar, AiOutlineLine, AiOutlineRight, AiOutlineStar } from 'react-icons/ai'
import { Bree_Serif, DM_Sans, Inter, Plus_Jakarta_Sans } from '@next/font/google'

const plus = Plus_Jakarta_Sans({ weight: ['500', '700'], subsets: ['latin'] })


const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })



export default function CardSection() {


    const toast = useToast()

    const getApp = () => {
        toast({
            title: 'Sorry, you cannot get the app at this time.',
            description: 'This app is only available to pilot users for now. We still have open slots in our pilot which you can join by filling the form on our "work with us" page or simply sign up to be notified when we are available for public use',
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top',
        })
    }

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
                        >Download the app to start experiencing the smooth life.</Text>
                        <Text
                            mb={{ base: '0.87rem', md: '1rem' }}
                            color={'#02073E'}
                            lineHeight={{ base: '1.5rem', md: '1.78125rem' }}
                            fontWeight={400}
                            fontSize={{ base: '1rem', md: '1.0625rem' }}
                            className={dmsans.className}
                        >
                            Waiting for an alert is outdated. We provide a single platform with a single goal to optimize convenience and trusted payments. Spend less time waiting and more time on things that matter.
                        </Text>



                        <Button alignSelf={{ base: "center", md: 'start' }} bg={{ base: 'black', md: 'transparent' }} _hover={{
                            backgroundColor: 'none'
                        }} color={{ base: '#ffffff', md: '#3183FF' }} w={{ base: "17.5em", md: "6.6em" }} rightIcon={<AiOutlineRight />} onClick={getApp}>Download App</Button>

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
                <Box maxW={{ base: "19.81rem", md: "36.43em" }} mt={{ base: "5.37rem", md: "16.06rem" }} mb={{ base: "2.12rem", md: "6.75rem" }} align="center">
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
                    >Hear what prospective users are saying about the smooth payment life.</Text>
                </Box>

                <Flex flexDirection={'row'} >
                    <Box w={{ base: "15.52rem", md: '27.18rem' }} h={{ base: "16.81rem", md: '29.43rem' }} bg={'rgba(213, 214, 214, 0.15)'} px={{ base: "0.99rem", md: '1.75rem' }} border={'1px solid rgba(0, 0, 0, 0.2)'} mb={{ base: "2.25rem", md: "4.75rem" }} m="10px">
                        <Box h='65%' py={{ base: "1.35rem", md: '2.375rem' }}>
                            <Text
                                color={'#000000'}
                                lineHeight={{ base: "0.85rem", md: '1.5rem' }}
                                fontWeight={400}
                                fontSize={{ base: "0.57rem", md: '1rem' }}
                                className={dmsans.className}
                                textAlign={'justify'}>
                                I&#39;m pretty damn excited about this! As a business owner, you know how frustrating it can be to wait for payments to come in. Your product is the perfect solution to this problem!

                                I like the level of thought and care you&#39;ve put into this project. I know firsthand how hard you&#39;ve been working, and it&#39;s inspiring to see your dedication pay off. I can&#39;t wait to start using it for my own business.
                            </Text>
                        </Box>

                        <Divider />
                        <Box py={{ base: "1.28rem", md: '2.25rem' }} >
                            <Flex flexDirection={'row'} align={'center'}>
                                {/* <Image src={'https://picsum.photos/200/300.webp'} height={{ base: "2.53rem", md: '4.4rem' }} width={{ base: "2.46rem", md: '4.3rem' }} mr={{ base: "0.42rem", md: "0.75rem" }} border={'1px solid #D5D6D6'} borderRadius={{ base: "0.14rem", md: '0.25rem' }} /> */}
                                <Box>
                                    <Text color={'#000000'}
                                        lineHeight={{ base: "0.57rem", md: '0.875rem' }}
                                        fontWeight={500}
                                        fontSize={{ base: "0.81rem", md: '1.5rem' }}
                                        className={dmsansBold.className}
                                        mb={{ base: "0.57rem", md: "1rem" }}> Kelechi Agorua </Text>
                                    <Text
                                        color={'#000000'}
                                        lineHeight={{ base: "0.5rem", md: '0.875rem' }}
                                        fontWeight={400}
                                        fontSize={{ base: "0.64rem", md: '1.125rem' }}
                                        letterSpacing={{ base: "0.34rem", md: '0.6px' }}
                                        className={dmsans.className}
                                        mb={{ base: "0.49rem", md: "0.875rem" }}>Founder, Penn Hill Academy </Text>
                                    <HStack>
                                        <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
                                        <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
                                        <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />

                                        <Icon as={AiOutlineStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
                                        <Icon as={AiOutlineStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
                                    </HStack>

                                </Box>
                            </Flex>
                        </Box>
                    </Box>


                    <Box w={{ base: "15.52rem", md: '27.18rem' }} h={{ base: "16.81rem", md: '29.43rem' }} bg={'rgba(213, 214, 214, 0.15)'} px={{ base: "0.99rem", md: '1.75rem' }} border={'1px solid rgba(0, 0, 0, 0.2)'} mb={{ base: "2.25rem", md: "4.75rem" }} m="10px" >
                        <Box h='65%' py={{ base: "1.35rem", md: '2.375rem' }}>
                            <Text
                                color={'#000000'}
                                lineHeight={{ base: "0.85rem", md: '1.5rem' }}
                                fontWeight={400}
                                fontSize={{ base: "0.57rem", md: '1rem' }}
                                className={dmsans.className}
                                textAlign={'justify'}>
                                Heard about your new payment product and I&#39;m stoked! As you know, getting paid on time is crucial for my business and your product seems like the perfect solution.

                                I&#39;m confident it&#39;s going to be a hit. I can&#39;t wait to start using it!


                            </Text>
                        </Box>


                        <Divider />
                        <Box py={{ base: "1.28rem", md: '2.25rem' }} >
                            <Flex flexDirection={'row'} align={'center'}>
                                <Box>
                                    <Text color={'#000000'}
                                        lineHeight={{ base: "0.57rem", md: '0.875rem' }}
                                        fontWeight={500}
                                        fontSize={{ base: "0.81rem", md: '1.5rem' }}
                                        className={dmsansBold.className}
                                        mb={{ base: "0.57rem", md: "1rem" }}> Akpa Uchenna Michael</Text>
                                    <Text
                                        color={'#000000'}
                                        lineHeight={{ base: "0.5rem", md: '0.875rem' }}
                                        fontWeight={400}
                                        fontSize={{ base: "0.64rem", md: '1.125rem' }}
                                        letterSpacing={{ base: "0.34rem", md: '0.6px' }}
                                        className={dmsans.className}
                                        mb={{ base: "0.49rem", md: "0.875rem" }}>CEO, Lemans Academy Limited</Text>
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


                    <Box w={{ base: "15.52rem", md: '27.18rem' }} h={{ base: "16.81rem", md: '29.43rem' }} bg={'rgba(213, 214, 214, 0.15)'} px={{ base: "0.99rem", md: '1.75rem' }} border={'1px solid rgba(0, 0, 0, 0.2)'} mb={{ base: "2.25rem", md: "4.75rem" }} m="10px">
                        <Box h='65%' py={{ base: "1.35rem", md: '2.375rem' }}>
                            <Text
                                color={'#000000'}
                                lineHeight={{ base: "0.85rem", md: '1.5rem' }}
                                fontWeight={400}
                                fontSize={{ base: "0.57rem", md: '1rem' }}
                                className={dmsans.className}
                                textAlign={'justify'}>Just wanted to say how excited I am for your new payment product! It seems like it will solve a major issue I&#39;ve been having and I&#39;m really looking forward to using it.

                                The features and functionality look amazing, and I can&#39;t wait to see how it will make my life easier.
                            </Text>
                        </Box>
                        <Divider />
                        <Box py={{ base: "1.28rem", md: '2.25rem' }} >
                            <Flex flexDirection={'row'} align={'center'}>

                                <Box>
                                    <Text color={'#000000'}
                                        lineHeight={{ base: "0.57rem", md: '0.875rem' }}
                                        fontWeight={500}
                                        fontSize={{ base: "0.81rem", md: '1.5rem' }}
                                        className={dmsansBold.className}
                                        mb={{ base: "0.57rem", md: "1rem" }}> Olajumoke Awotungase </Text>
                                    <Text
                                        color={'#000000'}
                                        lineHeight={{ base: "0.5rem", md: '0.875rem' }}
                                        fontWeight={400}
                                        fontSize={{ base: "0.64rem", md: '1.125rem' }}
                                        letterSpacing={{ base: "0.34rem", md: '0.6px' }}
                                        className={dmsans.className}
                                        mb={{ base: "0.49rem", md: "0.875rem" }}>CEO, Prettiejays Signature </Text>
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