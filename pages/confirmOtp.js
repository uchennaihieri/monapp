import { bvnN, pinID } from '@/recoil/atoms';
import { Box, Center, Heading, Image } from '@chakra-ui/react';
import {
    Button,
    FormControl,
    Flex,
    Input,
    Stack,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
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
    const [personalBalance, setPersonalBalance] = useState(0);
    const [merchantBalance, setMerchantBalance] = useState(0);
    const [tokenPin, setTokenPin] = useRecoilState(pinID);
    const [otp, setOtp] = useState('')
    const [verificationNumber, setVerificationNumber] = useRecoilState(bvnN);



    const url = "http://127.0.0.1:5001/monapp-33057/us-central1/app/api/verifyOtp";
    var info = {
        "pinId": tokenPin,
        "pin": otp,
    }

    const storage = getStorage();
    const storageRef = ref(storage, `${AuthUser.id}`);


    const num = verificationNumber.substring(3)


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
                        verificationNumber: verificationNumber
                    });

                    router.push('/Dashboard')

                }

                setLoadingState(false)
            })
            .catch(function (error) {

                setLoadingState(false)
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
                    We have sent a code to your BVN linked number
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