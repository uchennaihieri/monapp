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
import { Bree_Serif, DM_Sans, Inter, Plus_Jakarta_Sans } from '@next/font/google'

const plus = Plus_Jakarta_Sans({ weight: ['500', '700'], subsets: ['latin'] })


const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })

export default function DataSection() {
    return (
        <Box bg="#F9FAFC" h={{ base: "56.125em", md: "53.12em" }}>
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
                    <Stack textAlign={{ base: "center", md: 'start' }} w={{ base: '22.43rem', md: "31.93rem" }} spacing={4} >

                        <Text
                            mt={{ base: '4.125rem', md: '2.3125rem' }}
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

                        <List spacing={1} mb={{ base: '0.875rem', md: "1.56rem" }}>
                            <Flex flexDirection={{ base: 'row', md: 'column' }} justify={{ base: 'space-between', md: 'start' }}>
                                <ListItem
                                    color={'#000000'}
                                    lineHeight={{ base: '1.73rem', md: '2.812rem' }}
                                    fontWeight={500}
                                    fontSize={{ base: '0.61rem', md: '1rem' }}
                                    className={dmsansBold.className}>
                                    <ListIcon fontSize={{ base: '0.75rem', md: "1.25rem" }} as={MdCheckCircle} color='#3FDBB1' />
                                    Lorem Ipsum is simply dummy

                                </ListItem>
                                <ListItem
                                    color={'#000000'}
                                    lineHeight={{ base: '1.73rem', md: '2.812rem' }}
                                    fontWeight={500}
                                    fontSize={{ base: '0.61rem', md: '1rem' }}
                                    className={dmsansBold.className}
                                >
                                    <ListIcon fontSize={{ base: '0.75rem', md: "1.25rem" }} as={MdCheckCircle} color='#3FDBB1' />
                                    Lorem Ipsum is simply dummy

                                </ListItem>
                            </Flex>
                        </List>

                        <Button alignSelf={{ base: "center", md: 'start' }} bg={{ base: 'black', md: 'transparent' }} _hover={{
                            backgroundColor: 'none'
                        }} color={{ base: '#ffffff', md: '#3183FF' }} w={{ base: "17.5em", md: "6.6em" }} rightIcon={<AiOutlineRight />}>Get Started</Button>

                    </Stack>

                </Flex>
            </Container>
        </Box >
    );
}