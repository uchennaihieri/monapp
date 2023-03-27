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


function Merchants({ person }) {
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

    const goToDashboard = () => {
        router.push('/Dashboard')
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
                            mb={{ base: 5, md: 100 }} alignSelf="center" onClick={goToDashboard} _hover={{
                                cursor: "pointer"
                            }} />


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
            <Box m={50} >
                <Flex flexDir="column" align="center" justify="center">

                    <Image src={'/giftCard.png'}
                        alignSelf="center" w="8rem" h="auto" />
                    <Box ml="20px">
                        <Text
                            fontWeight="700"
                            fontSize={{ base: "16px", md: "24px" }}
                            lineHeight="38px"
                            marginBottom="4px"
                            overflow="hidden"
                            textOverflow="ellipsis"
                            textAlign="left"
                            wordBreak="break-word"


                        >Merchants</Text>

                    </Box>


                </Flex>
            </Box>


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

export default withAuthUser()(Merchants)


