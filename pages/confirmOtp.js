
import { Box, Center, Heading, Image, Link } from '@chakra-ui/react';
import {
    Button,
    FormControl,
    Flex,
    Input,
    useToast,
    Stack,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { businessCat, bvnN, myLocation, pinID, seller } from '@/recoil/atoms';
import QRCode from 'qrcode'
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { db } from '@/services/firebase';
import { useRouter } from 'next/router';

function ConfirmOtp() {
    const AuthUser = useAuthUser()
    const router = useRouter()
    const { register, handleSubmit } = useForm();
    const [src, setSrc] = useState('')
    const [srcUrl, setSrcUrl] = useState('')
    const [loadingState, setLoadingState] = useState(false);
    const [location, setLocation] = useRecoilState(myLocation)
    const [merchantName, setMerchantName] = useRecoilState(seller)
    const [myBusiness, setMyBusiness] = useRecoilState(businessCat)
    const [personalBalance, setPersonalBalance] = useState(0);
    const [merchantBalance, setMerchantBalance] = useState(0);
    const [tokenPin, setTokenPin] = useRecoilState(pinID);
    const [otp, setOtp] = useState('')
    const [verificationNumber, setVerificationNumber] = useRecoilState(bvnN);

    const toast = useToast()

    const url = "https://us-central1-monapp-33057.cloudfunctions.net/app/api/verifyOtp";
    var info = {
        "pinId": tokenPin,
        "pin": otp,
    }

    const storage = getStorage();
    const storageRef = ref(storage, `${AuthUser.id}`);



    const num = verificationNumber.substring(3)
    console.log(personalBalance, merchantBalance, num, AuthUser.id, location, merchantName, myBusiness)
    console.log(num)

    const submitOtp = () => {
        setLoadingState(true)



        fetch(url, {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify(info),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(function (response) {
            return response.json();
        })


            // Converting to JSON
            .then(async function (res) {
                console.log(res)

                if (res.verified == true) {



                    await QRCode.toDataURL(`monapp${num}`, { errorCorrectionLevel: 'M' }).then(async (val) => {
                        await uploadString(storageRef, `${val}`, 'data_url').then((snapshot) => {
                            getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                                await setDoc(doc(db, "wallet", `${AuthUser.id}`), {
                                    personalBalance: personalBalance,
                                    merchantBalance: merchantBalance,
                                    accountNumber: `${num}`,
                                    walletId: `${AuthUser.id}`,
                                    qrImage: `${downloadURL}`
                                });
                            });
                        })
                    })

                    const updateUser = await updateDoc(doc(db, "users", `${AuthUser.id}`), {
                        id: `${AuthUser.id}`,
                        verified: true,
                        verificationNumber: verificationNumber,
                        location: location,
                        merchantName: merchantName,
                        businessCategory: myBusiness
                    });

                    router.push('/Dashboard')

                } else if (res.verified == 'Expired') {
                    setLoadingState(false)
                    toast({
                        title: 'Verification failed',
                        description: 'OTP expired. Please resend code',
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        position: 'top',
                    })
                }

                setLoadingState(false)
            })
            .catch(function (error) {

                setLoadingState(false)
                console.log(error);
            })

    }



    const verifyUser = async () => {


        await fetch("https://us-central1-monapp-33057.cloudfunctions.net/app/api/verifyBvn", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                "phoneNumber": verificationNumber
            }),

            // Adding headers to the request
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(function (res) {
            return res.json();
        })
            // Converting to JSON
            .then(function (data) {

                setTokenPin(data.pinId)
                setVerificationNumber(data.to)

            })
            .catch(function (error) {

                console.log(error);
            })


    }



    return (
        <Flex
            flexDirection='column'
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={`#ffffff`}>
            <Box mb={{ base: '2.75rem', md: "5.06rem" }}>
                <Image src={'/footerlogo.png'} w={'14.17rem'} h={'3.06rem'} />
            </Box>

            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={14}
                my={10}>
                <Center>
                    <Heading align="center" lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Verify your Phone Number
                    </Heading>
                </Center>
                <Center
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    We have sent a code to your phone number
                </Center>
                <Center
                    fontSize={{ base: 'sm', sm: 'md' }}
                    fontWeight="bold"
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    {'******' + verificationNumber.substring(8)}
                </Center>
                <FormControl>
                    <Center>
                        <HStack>
                            <PinInput otp onChange={(e) => setOtp(e)}>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </Center>
                </FormControl>
                <Stack

                    direction={{ base: 'row' }}
                    align={'start'}
                    justify={'left'}>
                    <Button mt="2rem" variant="link" disabled color={'#000000'} onClick={verifyUser}>Resend link</Button>
                </Stack>

                <Stack spacing={6}>
                    <Button
                        mt={'1rem'}
                        h={'4em'}
                        onClick={submitOtp}
                        isLoading={loadingState}
                        loadingText='Please wait..'
                        borderRadius={'0.125rem'}
                        bg={'#000000'}
                        color={'white'}
                        _hover={{
                            bg: 'black.400',
                        }}>
                        Verify
                    </Button>
                </Stack>
            </Stack>

        </Flex>
    );
}


export default withAuthUser()(ConfirmOtp)