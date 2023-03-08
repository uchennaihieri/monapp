import { bvnN, pinID } from '@/recoil/atoms';
import { Box, Button, ButtonProps, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { Bree_Serif } from '@next/font/google';
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import useIdentityPayKYC from 'react-identity-kyc'
import { useRecoilState } from 'recoil'


const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })

const VerifyUser = ({ person }) => {

    const router = useRouter()
    const [tokenPin, setTokenPin] = useRecoilState(pinID);
    const [verificationNumber, setVerificationNumber] = useRecoilState(bvnN);



    const config = {
        first_name: person.firstName,
        last_name: person.lastName,
        email: person.email,
        merchant_key: `${process.env.NEXT_PUBLIC_IDENTITY_API_KEY}`,
        user_ref: person.id,
        is_test: false,  //set this to through for a test
        callback: (response) => {
            if (response.code == "00") {


                fetch("http://127.0.0.1:5001/monapp-33057/us-central1/app/api/verifyBvn", {

                    // Adding method type
                    method: "POST",

                    // Adding body or contents to send
                    body: JSON.stringify({
                        "phoneNumber": person.phoneNumber
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
                        router.push('/confirmOtp')
                    })
                    .catch(function (error) {
                        console.log(error);
                    })



            } else if (response.code == "01") {

            } else if (response.code == "02") {

            } else null
        }
    }




    const verifyWithIdentity = useIdentityPayKYC(config)



    return (
        <Flex
            flexDirection={'column'}
            h="100vh"
            justifyContent="center"
            alignItems="center"
            bgColor={`#ffffff`}>
            <Box mb={{ base: '2.75rem', md: "5.06rem" }}>
                <Image src={'/footerlogo.png'} w={'14.17rem'} h={'3.06rem'} />
            </Box>

            <Text fontSize={{ base: '1.5rem', md: "2.5rem" }}
                fontWeight={400}
                lineHeight={'4rem'}
                className={bree.className} mb={'1.5rem'}>Your account has been created successfully</Text>
            <Button

                h={'10em'}
                w={'30em'}
                px={8}
                bg={useColorModeValue('#151f21', 'gray.900')}
                color={'white'}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}
                onClick={verifyWithIdentity}>
                Click Me To Verify Identity
            </Button>
        </Flex >
    );
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


    return {
        props: {
            person: data,
        },
    }
})

export default withAuthUser()(VerifyUser)


