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
    useToast,
    HStack,
    Textarea,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    Stat,
    Card,
    CardBody,
    StatLabel,
    StatNumber,
    ButtonGroup,
    Select
} from '@chakra-ui/react'
import _ from 'lodash';
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
import { addDoc, collection, query, where } from 'firebase/firestore';
import MyChart from '@/components/myChart';
import { Bree_Serif } from '@next/font/google';
import dayjs from 'dayjs';

const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })


function Dashboard({ person }) {
    const AuthUser = useAuthUser()
    const toast = useToast()
    const router = useRouter()
    const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1)
    const [otherValue, changeOtherValue] = useState(1)
    const [wallet, setWallet] = useState(null)
    const [loadingState, setLoadingState] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [myTransactions, setMyTransactions] = useState(null)
    const [paymentDialog, setPaymentDialog] = useState(1)
    const [loanAmount, setLoanAmount] = useState(1500)
    const [clientRepaymentAmount, setClientRepaymentAmount] = useState(0)
    const [clientRepaymentDate, setClientRepaymentDate] = useState('')
    const [security, setSecurity] = useState(null)
    const [loanTenor, setLoanTenor] = useState('')
    const [deliveryAddress, setDeliveryAddress] = useState('')
    const [deliveryContact, setDeliveryContact] = useState('')
    const [pin, setPin] = useState('')
    const [confirmPin, setConfirmPin] = useState('')
    const [view, setView] = useState('')

    const now = dayjs()

    useEffect(() => {

        getSecurity()
        getWallet()
        getTransactions()

    }, [])


    useEffect(() => {
        if (loanAmount && loanTenor) {
            const repaymentAmount = _.parseInt(loanAmount) + (loanAmount * _.parseInt(loanTenor) * 0.3333 / 100)

            const repaymentDate = now.add(_.parseInt(loanTenor), 'day')
            setClientRepaymentDate(dayjs(repaymentDate).format('MMMM D, YYYY'))
            console.log(repaymentDate)
            setClientRepaymentAmount(repaymentAmount.toLocaleString('en-US', { maximumFractionDigits: 2 }))

        } else {
            setClientRepaymentAmount(0)
            setClientRepaymentDate('')
        }
    }, [loanAmount, loanTenor])

    const submitLoan = async () => {

        const postRef = await addDoc(collection(db, "CardApplication"), {
            firstName: person.firstName,
            lastName: person.lastName,
            monappNumber: wallet?.accountNumber,
            QrCode: wallet?.qrImage,
            deliveryAddress: deliveryAddress,
            deliveryContact: deliveryContact,
            loanAmount: loanAmount,
            loanTenor: `${loanTenor} days`, applicationDate: dayjs(now).format('MMMM D, YYYY'), repaymentDate: clientRepaymentDate, repaymentAmount: clientRepaymentAmount
        }).then(() => toast({
            title: 'Card application submitted',
            description: 'Our agent would reach out to you shortly',
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top',
        })).catch(err => console.log(err));


        setLoanTenor("")
        closeModal()
    }




    const getWallet = () => {


        const unsub = onSnapshot(doc(db, "wallet", `${person.id}`), (doc) => {
            setWallet({ id: doc.id, ...doc.data() });
        });


    }


    const getSecurity = () => {
        const unsub = onSnapshot(doc(db, "security", `${person.id}`), (doc) => {
            setSecurity({ id: doc.id, ...doc.data() });
        });
    }



    const getTransactions = () => {


        const q = query(collection(db, "transactions"), where("walletRef", "==", `${person.id}`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {

            if (querySnapshot.empty) {
                setMyTransactions(null)
            } else {
                const txn = [];
                querySnapshot.forEach((doc) => {
                    txn.push({ id: doc.id, ...doc.data() });
                });

                setMyTransactions(txn)

            }


        });




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


    const openDelivery = () => {
        onOpen()
        setView('delivery')
    }

    const goPay = () => {


        router.push('https://paystack.com/pay/monapp')
    }

    const closeModal = () => {
        setDeliveryAddress('')
        setDeliveryContact('')
        setLoanTenor('')
        setPaymentDialog(1)
        onClose()
    }




    const createPin = () => {
        setLoadingState(true)

        if (pin != confirmPin) {
            setLoadingState(false)
            toast({
                title: 'Pin creation error',
                description: 'Your pin does not match',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top',
            })
        } else {

            fetch("https://us-central1-monapp-33057.cloudfunctions.net/app/api/crypt", {

                // Adding method type
                method: "POST",
                body: JSON.stringify({
                    pin: pin,
                    id: person.id
                })
            }).then(function (res) {
                return res.json();
            })
                // Converting to JSON
                .then(function (data) {
                    if (data.successful) {
                        setLoadingState(false)
                        toast({
                            title: 'Pin creation successful',
                            description: 'Your pin has been created',
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                            position: 'top',
                        })
                    } else {
                        setLoadingState(false)
                        toast({
                            title: 'Pin creation error',
                            description: 'There was an error somewhere, please try again',
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                            position: 'top',
                        })
                    }
                })
                .catch(function (error) {
                    setLoadingState(false)
                    console.log(error);
                })
        }
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
                minH={{ base: "90vh", md: "100vh" }}
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


                {myTransactions && <>

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

                                </Tbody>
                                <Flex align="center">


                                    <Divider />
                                </Flex>
                            </Table>
                        </Flex>
                    </Flex>

                </>}


                {!myTransactions && <>
                    <Flex flexDirection={'column'} align="center" mt="30px">
                        {/* <MyChart /> */}
                        <Box align="center" mt={{ base: "50px", md: "35px" }}>

                            <Heading size="lg" letterSpacing="tight" mb="5px">No transactions yet</Heading>
                            <Text size="md" letterSpacing="tight" mb="10px">Get your monapp card and start making local payments</Text>
                            <Text size="md" letterSpacing="tight" mb="10px">or</Text>
                            <Text size="md" letterSpacing="tight" mb="30px">Download the app for full features</Text>
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

                        </Box>


                    </Flex>

                </>}





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
                    <Flex
                        flexDirection={'row'}
                        justify="center"





                    >
                        {/* <Image src={wallet?.qrImage} left={'9em'} top={'3em'} alignSelf="center" position={'absolute'}
                        /> */}

                        <Image src={'/cardImage.png'} width={'auto'} height={'25.6rem'}
                        />

                    </Flex>
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

                    <IconButton icon={<RiMailSendFill fontSize={'16px'} />} ml={2} color="#fff" bgColor="gray.600" _hover={{
                        bgColor: "gray.500"
                    }} onClick={() => changeOtherValue(1)} />
                    <IconButton icon={<MdFiberPin fontSize={'16px'} />} ml={2} color="#fff" bgColor="gray.600" _hover={{
                        bgColor: "gray.500"
                    }} onClick={() => changeOtherValue(2)} />
                    <IconButton icon={<MdBlock fontSize={'16px'} />} ml={2} color="#fff" bgColor="gray.600" _hover={{
                        bgColor: "gray.500"
                    }} onClick={() => changeOtherValue(3)} />
                </Flex>
                {otherValue == 1 && <>
                    <Heading letterSpacing="tight" size="md" >Deliver card</Heading>

                    <Text color="gray" mt={10} mb={2}>Delivery address</Text>
                    <InputGroup>

                        <Input type="text" value={deliveryAddress} placeholder="xxxx xxxx xxxx xxxx" onChange={e => setDeliveryAddress(e.target.value)} />
                    </InputGroup>
                    <Text color="gray" mt={4} mb={2}>Delivery contact</Text>
                    <InputGroup>

                        <Input type="number" value={deliveryContact} placeholder="07012******" onChange={e => setDeliveryContact(e.target.value)} />
                    </InputGroup>
                    <Button disabled mt={4} bgColor="blackAlpha.900" _hover={{ bgColor: "blackAlpha.700" }} color="#fff" p={7} borderRadius={15} onClick={openDelivery}>Send card to me</Button>
                </>
                }

                {otherValue == 2 && <> {!security?.pin &&

                    <> <Heading letterSpacing="tight" size="md" >Create Pin</Heading>

                        <Text color="gray" mt={10} mb={2}>Pin</Text>
                        <HStack>
                            <PinInput mask otp onChange={(e) => setPin(e)}>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                        <Text color="gray" mt={4} mb={2}>Confirm Pin</Text>
                        <InputGroup>
                            <HStack>
                                <PinInput mask otp onChange={(e) => setConfirmPin(e)}>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>
                            </HStack>
                        </InputGroup>
                        <Button isLoading={loadingState}
                            loadingText='Creating..' disabled mt={4} bgColor="blackAlpha.900" _hover={{ bgColor: "blackAlpha.700" }} color="#fff" p={7} borderRadius={15} onClick={createPin}>Create my pin</Button></>}

                    {security?.pin &&
                        <> <Heading letterSpacing="tight" size="md" >Reset Pin</Heading>

                            <Text color="gray" mt={10} mb={2}>Old Pin</Text>
                            <HStack>
                                <PinInput>
                                    <PinInputField />
                                    <PinInputField />
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
                                        <PinInputField />
                                        <PinInputField />
                                    </PinInput>
                                </HStack>
                            </InputGroup>
                            <Button disabled mt={4} bgColor="blackAlpha.900" _hover={{ bgColor: "blackAlpha.700" }} color="#fff" p={7} borderRadius={15}>Reset my pin</Button></>

                    }


                </>}



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
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </InputGroup>
                    <Button disabled mt={4} bgColor="blackAlpha.900" _hover={{ bgColor: "blackAlpha.700" }} color="#fff" p={7} borderRadius={15}>Block now</Button>
                </>
                }
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <ModalOverlay />
                    <ModalContent align="center">
                        <ModalHeader>Monapp Card</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody align="left">
                            <Box>
                                {paymentDialog == 1 && <>
                                    <Stat mb="10px">
                                        <StatLabel>Name on card</StatLabel>
                                        <StatNumber>{person.firstName + " " + person.lastName}</StatNumber>
                                    </Stat>
                                    <Stat mb="10px">
                                        <StatLabel>Monapp Number</StatLabel>
                                        <StatNumber>{wallet?.accountNumber}</StatNumber>
                                    </Stat>
                                    <Stat mb="10px">
                                        <StatLabel>Delivery address</StatLabel>
                                        <StatNumber>{deliveryAddress}</StatNumber>
                                    </Stat>
                                    <Stat mb="10px">
                                        <StatLabel>Delivery contact</StatLabel>
                                        <StatNumber>{deliveryContact}</StatNumber>
                                    </Stat>
                                    <Stat mb="10px">
                                        <StatLabel>Price</StatLabel>
                                        <StatNumber>&#x20A6; 1500</StatNumber>
                                    </Stat>

                                    <Box display='flex'
                                        alignItems='center'
                                        justifyContent='center'
                                        width='100%'
                                        py={12}>
                                        <ButtonGroup gap='4'>
                                            <Button bgColor="blackAlpha.900" _hover={{ bgColor: "blackAlpha.700" }} color="#fff" onClick={goPay} >Pay Now</Button>
                                            <Button bgColor="blackAlpha.900" _hover={{ bgColor: "blackAlpha.700" }} color="#fff" onClick={() => setPaymentDialog(2)}>Pay Later</Button>
                                        </ButtonGroup>
                                    </Box>
                                </>}

                                {paymentDialog == 2 && <>

                                    <Box>
                                        <Text mb="5px">Loan amount: {loanAmount}</Text>


                                    </Box>
                                    <Box my="20px">
                                        <Text mb="5px">Tenor:</Text>
                                        <Select value={loanTenor} onChange={(e) => setLoanTenor(e.target.value)} placeholder='Select duration'>
                                            <option value='7'>7 days</option>
                                            <option value='14'>14 days</option>
                                            <option value='21'>21 days</option>
                                            <option value='30'>30 days</option>
                                        </Select>
                                    </Box>
                                    <Card
                                        direction={{ base: 'column', sm: 'row' }}
                                        overflow='hidden'
                                        variant='outline'
                                    >


                                        <CardBody align="left">
                                            <Heading size='md'>Your repayment info</Heading>

                                            <Text py='2'>
                                                Amount: &#x20A6;{clientRepaymentAmount}
                                            </Text>
                                            <Text py='2'>
                                                Date: {clientRepaymentDate}
                                            </Text>
                                        </CardBody>
                                    </Card>
                                    <Box display='flex'
                                        alignItems='center'
                                        justifyContent='center'
                                        width='100%'
                                        py={12}>
                                        <Button bgColor="blackAlpha.900" _hover={{ bgColor: "blackAlpha.700" }} color="#fff" onClick={submitLoan}>Proceed</Button>
                                    </Box>
                                </>}
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
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


