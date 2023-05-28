import React, { useEffect, useState } from 'react'
import {
    Flex,
    Heading,
    Avatar,
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
    Box,
    Button,
    Image,
    useToast,
    HStack,
    useDisclosure,
    Stack,
    useBreakpointValue,
    CloseButton,
    VStack,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import _ from 'lodash';
import {
    FiCalendar,
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from "react-icons/fi"
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { auth, db, doc, onSnapshot, signOut } from '@/services/firebase';
import { useRouter } from 'next/router';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { addDoc, collection, query, where } from 'firebase/firestore';
import { Bree_Serif } from '@next/font/google';
import dayjs from 'dayjs';
import { usePaystackPayment } from 'react-paystack';
import axios from 'axios';

const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })
const LinkItems = [
    { name: 'Home', icon: FiHome },
    { name: 'Trending', icon: FiTrendingUp },
    { name: 'Explore', icon: FiCompass },
    { name: 'Favourites', icon: FiStar },
    { name: 'Settings', icon: FiSettings },
];

function DashDemo({ person }) {
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
    const [topUpAmount, setTopUpAmount] = useState(0)
    const [view, setView] = useState('')
    const [amountFees, setAmountFees] = useState(0)
    const [amountWithFees, setAmountWithFees] = useState(0)
    const [activePage, setActivePage] = useState(1)

    const now = dayjs()

    const pageHiden = useBreakpointValue(
        {
            base: 'none',
            md: 'block',
        },
    )


    const pageView = useBreakpointValue(
        {
            base: 'block',
            md: 'block',
        },
    )

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

    const goToCard = () => {
        setActivePage(2)
    }

    const getSecurity = () => {
        const unsub = onSnapshot(doc(db, "security", `${person.id}`), (doc) => {
            setSecurity({ id: doc.id, ...doc.data() });
        });
    }



    const getTransactions = () => {


        const q = query(collection(db, "transactions"), where("user", "array-contains", `${person.id}`));
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

    const fundAccount = () => {
        alert('hello')
    }


    let Naira = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
    });

    const amount = wallet?.merchantBalance + wallet?.personalBalance


    const goToLogin = () => {
        router.push('/auth')
    }

    const goToMerchants = () => {
        toast({
            title: 'Still under development',
            description: 'Sorry, you cannot navigate here at this time.',
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top',
        })
    }
    const goToDashDemo = () => {
        setActivePage(1)
        router.push('/DashDemo')
    }



    const signMeOut = () => {
        signOut(auth).then(() => {
            goToLogin()
        }).catch((error) => {
            // An error happened.
        });
    }


    const handleTopUp = () => {
        onOpen()
        setPaymentDialog(3)
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
        setTopUpAmount(0)
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


    const config = {
        reference: (new Date()).getTime().toString(),
        email: person.email,
        amount: amountWithFees * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: process.env.NEXT_PUBLIC_FUND_KEY,
        metadata: {
            "user_id": person.id,
            "creditAmount": topUpAmount,
            "custom_fields": [
                {
                    "display_name": person.firstName + " " + person.lastName,
                    "variable_name": person.id,
                    "value": topUpAmount
                }]
        }
    };



    const CloseModal = () => {
        console.log('closed')
    }

    const initializePayment = usePaystackPayment(config);



    const getFee = async () => {



        axios.post('http://127.0.0.1:5001/monapp-33057/us-central1/app/api/getFeeApp', {
            topUpAmount: topUpAmount * 100,
        })
            .then(function ({ data }) {
                console.log(data)
                if (data.successful) {
                    setAmountWithFees(data.newFees / 100)
                    setAmountFees((data.newFees / 100) - topUpAmount)
                    setLoadingState(false)
                    setPaymentDialog(4)

                } else {
                    setLoadingState(false)

                }
            })
            .catch(function (error) {
                setLoadingState(false)
                console.log(error);
            });


        // await fetch("http://127.0.0.1:5001/monapp-33057/us-central1/app/api/getFee", {

        //     // Adding method type
        //     method: "POST",
        //     body: JSON.stringify({
        //         topUpAmount: topUpAmount * 100,
        //     })
        // }).then(function (res) {
        //     return res.json();
        // })
        //     // Converting to JSON
        //     .then(function (data) {
        //         console.log(data)
        //         if (data.successful) {
        //             setAmountWithFees(data.newFees / 100)
        //             setAmountFees((data.newFees / 100) - topUpAmount)
        //             setLoadingState(false)
        //             setPaymentDialog(4)

        //         } else {
        //             setLoadingState(false)

        //         }
        //     })
        //     .catch(function (error) {
        //         setLoadingState(false)
        //         console.log(error);
        //     })

    }


    const pay = () => {
        closeModal()
        initializePayment(CloseModal)
    }


    return (
        <Flex
            h={[null, null, "100vh"]}
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            {/* Column 1 */}
            <Flex
                w={["100%"]}
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
                            mb={{ base: 5, md: 100 }} alignSelf="center" onClick={goToDashDemo} _hover={{
                                cursor: "pointer"
                            }} />


                    </Flex>
                    <Flex flexDir="column" alignItems="center" mb={10} mt={5} display={{ base: 'none', md: "flex" }}>
                        <Flex flexDir="column" align="center" justify="center" bg="#ffffff" w="80%" borderRadius={'12px'} color="#000000" p="10px" mb="20px" position={'relative'} onClick={goToMerchants} _hover={{
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
                        <Button colorScheme='gray' fontWeight={600} variant={'link'} color='white' mr="30px" onClick={goToMerchants} >
                            Merchants
                        </Button>
                        <Button colorScheme='gray' fontWeight={600} variant={'link'} color='white' mr="30px" onClick={goToCard} >
                            Card
                        </Button>
                        <Button fontWeight={600} variant={'link'} color='white' onClick={signMeOut}>logout</Button>


                    </Flex>

                </Flex>
            </Flex>

            {/* Column 2 */}
            <Flex
                w={["100%"]}
                p={{ base: "5%", md: "3%" }}
                flexDir="column"
                overflow="auto"
                minH={{ base: "90vh", md: "100vh" }}

                display={activePage == 1 ? pageView : pageHiden}
            >
                <Heading
                    fontWeight="normal"
                    mb={4}
                    letterSpacing="tight"
                >
                    Welcome back, <Flex display="inline-flex" fontWeight="bold">{person.firstName}</Flex>
                </Heading>
                <Text color="gray" fontSize="sm">My Balance</Text>
                <Flex flexDirection={'row'} align="center" justify={'space-between'}>
                    <Text fontWeight="bold" fontSize="2xl">{Naira.format(amount)}</Text>
                    <Stack ml={3}>
                        <Button variant={'link'} color={'#000000'} rightIcon={<Icon as={BsFillPlusCircleFill} />} onClick={handleTopUp}>Top up</Button>
                    </Stack>
                </Flex>
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


        </Flex >
    )
}


export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
    // Optionally, get other props.
    const token = await AuthUser.getIdToken(true)

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

export default withAuthUser()(DashDemo)


