import React, { useEffect, useState } from 'react'
import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Image,
    Switch,
    PinInputField,
    PinInput,
    HStack,
    Textarea
} from '@chakra-ui/react'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell
} from "react-icons/fi"
import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { auth, db, doc, onSnapshot, signOut } from '@/services/firebase';
import { useRouter } from 'next/router';
import { RiMailSendFill } from 'react-icons/ri';
import { GiShop } from 'react-icons/gi';
import { MdBlock, MdFiberPin, MdPin } from 'react-icons/md';
import { BsDot } from 'react-icons/bs';


function Dashboard({ person }) {
    const AuthUser = useAuthUser()
    const router = useRouter()
    const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1)
    const [otherValue, changeOtherValue] = useState(1)
    const [wallet, setWallet] = useState(null)


    useEffect(() => {


        getWallet()

    }, [])



    const getWallet = async () => {


        const unsub = onSnapshot(doc(db, "wallet", `${person.id}`), (doc) => {
            setWallet({ id: doc.id, ...doc.data() });
        });

        return unsub

    }

    let Naira = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
    });

    const amount = wallet?.merchantBalance + wallet?.personalBalance


    const goToLogin = () => {
        router.push('/auth')
    }


    const signMeOut = () => {
        signOut(auth).then(() => {
            goToLogin()
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            {/* Column 1 */}
            <Flex
                w={["100%", "100%", "10%", "15%", "15%"]}
                flexDir="column"
                alignItems="center"
                backgroundColor="#020202"
                color="#fff"
            >
                <Flex
                    flexDir="column"
                    h={[null, null, "100vh"]}
                    justifyContent="space-between"
                >
                    <Flex
                        flexDir="column"
                        as="nav"
                    >
                        <Image src={'/logo.png'} width={{ base: '8.625rem', md: "14.4275rem" }} height={{ base: '1.569rem', md: "2.625rem" }} mt={50}
                            mb={{ base: 5, md: 100 }} alignSelf="center" />


                    </Flex>
                    <Flex flexDir="column" alignItems="center" mb={10} mt={5} display={{ base: 'none', md: "flex" }}>
                        <Flex flexDir="column" align="center" justify="center" bg="#ffffff" w="80%" borderRadius={'12px'} color="#000000" p="10px" mb="20px" position={'relative'} _hover={{
                            bg: "gray.200",
                            cursor: "pointer"
                        }}>

                            <Image src={'/seller.png'} w={20} h={20}
                                alignSelf="center" />
                            <Text fontWeight={600} > Merchants</Text>

                        </Flex>

                        <Flex flexDir="row" align="center" justify="center"> <Avatar my={2} name={person.firstName + " " + person.lastName} src="avatar-1.jpg" mr="10px" />
                            <Text fontWeight={600} textAlign="center">{person.firstName + " " + person.lastName}</Text> </Flex>


                        <Button fontWeight={600} variant={'link'} color='white' mt="1em" onClick={signMeOut}>logout</Button>
                    </Flex>

                    <Flex flexDir="row" alignItems="center" my="20px" display={{ base: 'flex', md: "none" }} >
                        <Button colorScheme='gray' fontWeight={600} variant={'link'} color='white' mr="30px" >
                            Merchants
                        </Button>
                        <Button fontWeight={600} variant={'link'} color='white' onClick={signMeOut}>logout</Button>


                    </Flex>

                </Flex>
            </Flex>

            {/* Column 2 */}
            <Flex
                w={["100%", "100%", "60%", "60%", "55%"]}
                p={{ base: "5%", md: "3%" }}
                flexDir="column"
                overflow="auto"
                minH="100vh"
            >
                <Heading
                    fontWeight="normal"
                    mb={4}
                    letterSpacing="tight"
                >
                    Welcome back, <Flex display="inline-flex" fontWeight="bold">{person.firstName}</Flex>
                </Heading>
                <Text color="gray" fontSize="sm">My Balance</Text>
                <Text fontWeight="bold" fontSize="2xl">{Naira.format(amount)}</Text>

                <Flex justifyContent="space-between" mt={8}>
                    <Flex align="flex-end">
                        <Heading as="h2" size="lg" letterSpacing="tight">Transactions</Heading>

                    </Flex>
                    <IconButton icon={<FiCalendar />} />
                </Flex>
                <Flex flexDir="column">
                    <Flex overflow="auto">
                        <Table variant="unstyled" mt={4}>
                            <Thead>
                                <Tr color="gray">
                                    <Th>Name of transaction</Th>
                                    <Th>Category</Th>
                                    <Th isNumeric>Amount</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar size="sm" mr={2} src="amazon.jpeg" />
                                            <Flex flexDir="column">
                                                <Heading size="sm" letterSpacing="tight">Amazon</Heading>
                                                <Text fontSize="sm" color="gray">Apr 24, 2021 at 1:40pm</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Electronic Devices</Td>
                                    <Td isNumeric><Text fontWeight="bold" display="inline-table">-$242</Text>.00</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar size="sm" mr={2} src="starbucks.png" />
                                            <Flex flexDir="column">
                                                <Heading size="sm" letterSpacing="tight">Starbucks</Heading>
                                                <Text fontSize="sm" color="gray">Apr 22, 2021 at 2:43pm</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Cafe and restaurant</Td>
                                    <Td isNumeric><Text fontWeight="bold" display="inline-table">-$32</Text>.00</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar size="sm" mr={2} src="youtube.png" />
                                            <Flex flexDir="column">
                                                <Heading size="sm" letterSpacing="tight">YouTube</Heading>
                                                <Text fontSize="sm" color="gray">Apr 13, 2021 at 11:23am</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Social Media</Td>
                                    <Td isNumeric><Text fontWeight="bold" display="inline-table">-$112</Text>.00</Td>
                                </Tr>

                            </Tbody>
                        </Table>
                    </Flex>
                    <Flex align="center">


                        <Divider />
                    </Flex>
                </Flex>
            </Flex>

            {/* Column 3 */}
            <Flex
                w={["100%", "100%", "30%"]}
                bgColor="#F5F5F5" p={{ base: "5%", md: "3%" }}
                flexDir="column"
                overflow="auto"
                minW={[null, null, "300px", "300px", "400px"]}
            >
                <Flex justify="space-between">
                    <Heading letterSpacing="tight">My Card</Heading>
                    <IconButton icon={<FiBell />} fontSize="sm" bgColor="#fff" borderRadius="50%" p="10px" />

                </Flex>

                {value == 1 &&
                    <Box

                        mt={4}
                        w="100%"
                        h="200px"
                        position={'relative'}


                    >
                        <Image src={wallet?.qrImage} left={'9em'} top={'3em'} alignSelf="center" position={'absolute'}
                        />
                        <Image src={'/cardBack.png'} width={'100%'} height={'100%'}
                        />
                    </Box>
                }

                <Flex justifyContent="center" mt={2}>
                    <Button bgColor={"gray.600"} size="xs" mx={1} onClick={() => changeValue(1)} />

                </Flex>

                <Flex flexDir="column" my={4}>
                    <Flex justify="space-between">
                        <Text>Name on card</Text>
                        <Text fontWeight="bold">{person.firstName + " " + person.lastName}</Text>
                    </Flex>
                    <Flex justify="space-between" my={2}>
                        <Text>Monapp Number</Text>

                        <Text fontWeight="bold">{wallet?.accountNumber}</Text>
                    </Flex>

                </Flex>
                <Flex my={4}>

                    <Avatar icon={<RiMailSendFill />} ml={2} color="#fff" bgColor="gray.600" onClick={() => changeOtherValue(1)} />
                    <Avatar icon={<MdFiberPin />} ml={2} color="#fff" bgColor="gray.600" onClick={() => changeOtherValue(2)} />
                    <Avatar icon={<MdBlock />} ml={2} color="#fff" bgColor="gray.600" onClick={() => changeOtherValue(3)} />
                </Flex>
                {otherValue == 1 && <>
                    <Heading letterSpacing="tight" size="md" >Deliver card</Heading>

                    <Text color="gray" mt={10} mb={2}>Delivery address</Text>
                    <InputGroup>

                        <Input type="number" placeholder="xxxx xxxx xxxx xxxx" />
                    </InputGroup>
                    <Text color="gray" mt={4} mb={2}>Delivery contact</Text>
                    <InputGroup>

                        <Input type="number" placeholder="07012******" />
                    </InputGroup>
                    <Button disabled mt={4} bgColor="blackAlpha.900" _hover={{ bgColor: "blackAlpha.700" }} color="#fff" p={7} borderRadius={15}>Send card to me</Button>
                </>
                }

                {otherValue == 2 && <>
                    <Heading letterSpacing="tight" size="md" >Reset Pin</Heading>

                    <Text color="gray" mt={10} mb={2}>Old Pin</Text>
                    <HStack>
                        <PinInput>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                    <Text color="gray" mt={4} mb={2}>New Pin</Text>
                    <InputGroup>
                        <HStack>
                            <PinInput>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </InputGroup>
                    <Button disabled mt={4} bgColor="blackAlpha.900" _hover={{ bgColor: "blackAlpha.700" }} color="#fff" p={7} borderRadius={15}>Reset my pin</Button>
                </>
                }


                {otherValue == 3 && <>
                    <Heading letterSpacing="tight" size="md" >Block transactions</Heading>

                    <Text color="gray" mt={10} mb={2}>Reason for blocking</Text>
                    <HStack>
                        <Textarea placeholder='' />
                    </HStack>
                    <Text color="gray" mt={4} mb={2}>Pin</Text>
                    <InputGroup>
                        <HStack>
                            <PinInput>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </InputGroup>
                    <Button disabled mt={4} bgColor="blackAlpha.900" _hover={{ bgColor: "blackAlpha.700" }} color="#fff" p={7} borderRadius={15}>Block now</Button>
                </>
                }
            </Flex>
        </Flex >
    )
}


export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
    // Optionally, get other props.
    const token = await AuthUser.getIdToken()
    const UID = AuthUser.id
    const response = await fetch(`https://us-central1-monapp-33057.cloudfunctions.net/app/api/user/${UID}`, {
        method: 'GET',
        headers: {
            Authorization: token,
        },
    })

    const data = await response.json()
    if (!data.verified) {
        return {
            redirect: {
                destination: '/verifyUser',
                permanent: false,
            },
        }
    }

    return {
        props: {
            person: data,
        },
    }
})

export default withAuthUser()(Dashboard)


