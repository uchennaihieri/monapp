import { bvnN } from '@/recoil/atoms';
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
                axios.post('https://us-central1-monapp-33057.cloudfunctions.net/app/api/verifyBvn', {
                    phoneNumber: `${response.data.bvn_data.phoneNumber1}`,
                })
                    .then(function (res) {
                        setVerificationNumber(response.data.bvn_data.phoneNumber1)
                        router.push('/confirmOtp')
                        console.log(response);
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


