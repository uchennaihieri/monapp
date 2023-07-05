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
    List,
    ListItem,
    ListIcon,
    Button,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md'
import { AiOutlineRight } from 'react-icons/ai'
import { Bree_Serif, Covered_By_Your_Grace, DM_Sans, Inter, Plus_Jakarta_Sans } from '@next/font/google'
import { useRouter } from 'next/router';
import Features from './features';

const plus = Plus_Jakarta_Sans({ weight: ['500', '700'], subsets: ['latin'] })




const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const dmsansExtreBold = DM_Sans({ weight: '700', subsets: ['latin'] })
const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })
const grace = Covered_By_Your_Grace({ weight: '400', subsets: ['latin'] })

export default function DataSection() {
    const router = useRouter()

    const getStarted = () => {
        router.push('/auth?task=signup')
    }

    return (
        <Box bg="#F9FAFC" h={{ base: "56.125em", md: "53.12em" }} >

            <Container maxW='79.81em' pt={{ base: "0.75rem", md: "5.25rem" }} centerContent>
                <Flex flexDirection={{ base: "column", md: "row" }} justify={{ base: "center", md: 'space-between' }} align={{ base: "center", md: 'start' }}>
                    <Box position="relative">
                        <Image
                            alt={'feature image'}
                            src={'/cardPhone.png'
                            }

                            w={{ base: "23.75rem", md: "44.12rem" }}
                            h={{ base: "23.75rem", md: "44.12rem" }}
                        />
                        <Image
                            display={{ base: 'none', md: 'flex' }}
                            alt={'feature image'}
                            src={'/cord.svg'
                            }
                            position="absolute"
                            right={'-21rem'}
                            bottom={'-22rem'}
                            w="37.39rem"
                            h="23.76rem"
                        />
                    </Box>




                    <Flex direction={'row'} mt='9.25rem'>
                        <Box>

                        </Box>
                        <Box>
                            <Stack textAlign={{ base: "center", md: 'start' }} w={{ base: '22.43rem', md: "31.93rem" }} spacing={4} >

                                <Text

                                    mb={'2.12rem'}
                                    color='#000000'
                                    lineHeight={{ base: '2.37rem', md: '3.25rem' }}
                                    fontWeight={600}
                                    fontSize={{ base: '1.75rem', md: '2.5rem' }}
                                    className='clashSemiBold'
                                >Earn extra income from the comfort of your home.</Text>
                                <Text
                                    mb={{ base: '0.87rem', md: '1rem' }}
                                    color={'#818C96'}
                                    lineHeight={{ base: '1.5rem', md: '2.23838rem' }}
                                    fontWeight={500}
                                    fontSize={{ base: '1rem', md: '1.25rem' }}
                                    className={dmsansBold.className}
                                    letterSpacing={'-0.01rem'}
                                >
                                    As a payment broker, you'll be helping individuals experience the benefits of our innovative payment solutions while earning 1% on every transaction made by your clients.
                                </Text>



                                <Button variant='solid' w={{ base: "17.5em", md: "13.75rem" }} h={'3.875rem'}
                                    borderRadius='0.62144rem'
                                    background='#000'
                                    _hover={{
                                        background: '#222'
                                    }}

                                >
                                    <Text color='#FFF'
                                        fontSize='1.45rem'
                                        className={dmsansBold.className}
                                        lineHeight='2.71944rem'
                                        letterSpacing='-0.00831rem'>Start earning</Text>

                                </Button>

                            </Stack>
                        </Box>

                    </Flex>
                </Flex>


            </Container>
        </Box >
    );
}