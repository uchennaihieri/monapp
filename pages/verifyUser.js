
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Icon,
    Text,
    Image,
    useColorModeValue,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    HStack,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Switch,
    Select,
    useBoolean,
    ScaleFade,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    ModalFooter,
    CheckboxGroup,
    RadioGroup,
    Radio,
    FormHelperText,
} from '@chakra-ui/react';
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import { useRouter } from 'next/router';
import useIdentityPayKYC from 'react-identity-kyc'
import { useRecoilState } from 'recoil'
import { Bree_Serif, DM_Sans, Roboto_Slab } from '@next/font/google';
import { useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import { businessCat, businessReg, bvnN, myLocation, pinID, seller, sellerType } from '@/recoil/atoms';
import { useForm } from "react-hook-form";
import { auth, createUserWithEmailAndPassword, db, deleteDoc, doc, deleteUser, serverTimestamp, setDoc, signInWithEmailAndPassword } from '@/services/firebase';
import { reauthenticateWithCredential } from 'firebase/auth';

const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })
const roboto = Roboto_Slab({ weight: '400', subsets: ['latin'] })
const robotoItalic = DM_Sans({ weight: '400', style: 'italic', subsets: ['latin'] })




const locations = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara"
]



const business = ["Electric lighting, Power", "Water, waterworks, and Supplies", "Bakery (food, pastries)", "Bar/local brew", "Food café/restaurant", "food catering", "Prepared foods", "Tortillas, ethnic bread", "Bricks", "Public Sector - Level 1", "Public Sector - Level 2", "Craft", "Knitting", "Shoes", "Mats", "Sewing/tailoring", "Soft drinks production", "Weaving", "Agriculture (grows crops/produce for sale)", "Grows mushrooms, etc.", "Dairy", "Fishing", "Livestock (various)", "Poultry", "Beekeeping", "Trees, Nursery", "Banking, Financial services", "Others", "School loan", "Private Sector - Level 1", "Private Sector - Level 2", "Manufacturing & Food Processing", "Agriculture & Forestry", "Mining & Quarry", "Trade & Commerce", "Transport & Communication", "Real Estate & Construction", "Rent/Housing", "Consumer/Personal", "Health", "Education", "Tourism & Hospitality", "Purchase of Shares", "Others (Specify)", "Alcoholic Beverages, Cigarettes, Matches", "Auto/bicycle parts", "Books, magazines, newspapers", "Charcoal/firewood", "Clothing, accessories (incl. shoes)", "Construction materials", "Cosmetics (incl. perfume)", "Crafts, souvenirs", "Drugs/Pharmacy", "Electronics (includes mobile phones)", "Flowers/plants", "Food products (groceries, dairy)", "Furniture", "Gas for cooking, heating", "Grains/legumes (incl. corn, rice)", "Household cleaning products", "Hygiene products", "Jewelry", "Kitchen, tableware", "Meat/butcher", "Office Supplies", "Oil", "Produce (fruits, vegetables, produce)", "Rugs", "Seafood/fish/salty fish", "Seeds", "Sleeping mats/blankets", "Snacks (snacks, candy, gum)", "Soft drinks", "Textiles (bed linens, towels, fabric)", "Tools, equipment, hardware", "Toys", "Video", "Telephone/Mobile Phone sales", "Auto repair", "Babysitter", "Barber shop/hair salon", "Beauty salon", "Book Keeper", "Bus/taxi driver", "Carpenter", "Construction laborer", "Electrician", "Fixes shoes", "Gas station", "Hauler/driver/cart pusher", "Health care", "Hotel/resthouse", "House-maid", "Cyber / Internet café", "Landlord", "Manager/supervisor", "Mechanic", "Welder", "Dentist", "Computer services", "Photographic Studio", "Business Services", "Air Transport", "Travel Agencies", "Postal or Courier Services"]

const VerifyUser = ({ person }) => {
    const router = useRouter()
    const user = auth.currentUser;
    const [loadingState, setLoadingState] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [pwd, setPwd] = useState('')
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    console.log(user)

    const goSupport = () => {
        router.push('/support')
    }


    const deleteMe = () => {
        setLoadingState(true)
        deleteDoc(doc(db, "users", `${person.id}`))
            .then(() => {
                deleteUser(user).then(() => {
                    setLoadingState(false)
                    router.push('/auth?task=signup')
                }).catch((error) => {
                    setLoadingState(false)
                    if (error.code = "auth/requires-recent-login") {
                        onOpen()
                    }

                    console.log({ error })
                });
            })
            ;


    }

    const reAuth = () => {



        signInWithEmailAndPassword(auth, person.email, pwd).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        });

    }





    return (
        <Flex
            flexDirection={'column'}
            minH={'100vh'}
            align={'center'}
            bg={'#FFFFFF'}>
            <Flex
                mt={{ base: '1.5rem', md: "2.875rem" }}
                width={{ base: '90%', md: "87.5rem" }}
                flexDir={'row'}
                justify="space-between"
                mb={{ base: '3.5rem', md: '10.6rem' }}
            >

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader >Hello {person?.firstName}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text className={roboto.className} my="2rem">It&#39;s been a while you logged in, Please reauthenticate and try again</Text>

                            <Box
                            >
                                <FormControl id="password" >
                                    <FormLabel className={roboto.className}>Password</FormLabel>

                                    <InputGroup mb="2.6rem">
                                        <InputLeftElement
                                            h="100%"
                                            pointerEvents='none'
                                        >

                                            <Icon>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.2" clipPath="url(#clip0_79_274)">
                                                        <path d="M18 8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H6V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V8ZM11 15.732V18H13V15.732C13.3813 15.5119 13.6793 15.1721 13.8478 14.7653C14.0162 14.3586 14.0458 13.9076 13.9319 13.4823C13.8179 13.057 13.5668 12.6813 13.2175 12.4132C12.8682 12.1452 12.4403 11.9999 12 11.9999C11.5597 11.9999 11.1318 12.1452 10.7825 12.4132C10.4332 12.6813 10.1821 13.057 10.0681 13.4823C9.9542 13.9076 9.98376 14.3586 10.1522 14.7653C10.3207 15.1721 10.6187 15.5119 11 15.732ZM16 8V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V8H16Z" fill="black" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_79_274">
                                                            <rect width="24" height="24" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </Icon>
                                        </InputLeftElement>

                                        <Input h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'}
                                            type={show ? 'text' : 'password'} placeholder='Enter your password' onChange={e => setPwd(e.target.value)} />
                                        <InputRightElement h="100%" mx="1rem">
                                            {show ?
                                                <Icon _hover={{
                                                    cursor: 'pointer'
                                                }} as={RiEyeFill} fontSize="1.5rem" color="#9A9C9D" onClick={handleClick} /> : <Icon _hover={{
                                                    cursor: 'pointer'
                                                }} as={RiEyeCloseFill} fontSize="1.5rem" color="#9A9C9D" onClick={handleClick} />}
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                            </Box>


                        </ModalBody>

                        <ModalFooter>
                            <Button variant='ghost' onClick={reAuth}>Submit</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                <Button leftIcon={<AiOutlineLeft />} m="0" p="0" variant={'ghost'} _hover={{
                    backgroundColor: 'none'
                }} color={'#000000'} fontSize={{ base: '1rem', md: "1.44rem" }}
                    fontWeight={400}
                    lineHeight={'4rem'}
                    className={bree.className}
                    isLoading={loadingState}
                    loadingText='Please wait..'
                    onClick={deleteMe}
                >Restart Registration</Button>

                <Button onClick={goSupport} m="0" p="0" variant={'ghost'} _hover={{
                    backgroundColor: 'none'
                }} color={'#000000'} fontSize={{ base: '0.75rem', md: "1rem" }}
                    fontWeight={500}
                    className={dmsansBold.className}
                >Support</Button>
            </Flex>
            <Box mb={{ base: '2.75rem', md: "5.06rem" }}>
                <Image src={'/footerlogo.png'} alt='' w={'14.17rem'} h={'3.06rem'} />
            </Box>

            <Box m="0" mb="2.92rem" p="0">
                <Verify person={person} />
            </Box>

        </Flex>
    );
}


export const Verify = ({ person }) => {

    const router = useRouter()
    const [tokenPin, setTokenPin] = useRecoilState(pinID);
    const [verificationNumber, setVerificationNumber] = useRecoilState(bvnN);
    const [loadingState, setLoadingState] = useState(false);
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [merchant, setMerchant] = useBoolean(true)
    const [banks, setBanks] = useState(null)
    const [location, setLocation] = useRecoilState(myLocation)
    const [merchantName, setMerchantName] = useRecoilState(seller)
    const [myBusiness, setMyBusiness] = useRecoilState(businessCat)
    const [merchantType, setMerchantType] = useState('1')
    const [merch, setMerch] = useRecoilState(sellerType)
    const [regNum, setRegNum] = useRecoilState(businessReg)
    const [account, setAccount] = useState('')
    const [myBank, setMyBank] = useState("")
    const [errorFetchedChecker, setErrorFetchedChecker] = useState(false);


    // const config = {
    //     first_name: person.firstName,
    //     last_name: person.lastName,
    //     email: person.email,
    //     merchant_key: `${process.env.NEXT_PUBLIC_IDENTITY_API_KEY}`,
    //     user_ref: person.id,
    //     is_test: false,  //set this to through for a test
    //     callback: (response) => {
    //         if (response.code == "00") {




    //         } else if (response.code == "01") {

    //         } else if (response.code == "02") {

    //         } else null
    //     }
    // }




    // const verifyWithIdentity = useIdentityPayKYC(config)


    const verifyUser = async () => {
        setLoadingState(true)

        if (merchantType == '1') {
            setMerch('personal')
            setMerchantName(`${person.firstName + " " + person.lastName}`)
        } else if (merchantType == '2') {
            setMerch('registered business')
        }

        await fetch("https://us-central1-monapp-33057.cloudfunctions.net/app/api/verifyBvn", {

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
                setLoadingState(false)
                setTokenPin(data.pinId)
                setVerificationNumber(data.to)
                router.push('/confirmOtp')
            })
            .catch(function (error) {
                setLoadingState(false)
                console.log(error);
            })


    }



    return (
        <Box
            m="0px"
            borderRadius={'2px'}
            w={{ base: "27.93rem", md: "37.93rem" }}
            h="100%"
            bg={'#F9FAFC'}
            border={'1px solid rgba(0, 0, 0, 0.14);'}
            py={'4.5rem'} px={'4.8rem'}>

            <Stack >
                <Box >
                    <FormControl id="email" >
                        <FormLabel className={roboto.className}>Select Location</FormLabel>

                        <Select placeholder='Select option' value={location}
                            onChange={(e) => setLocation(e.target.value)} variant='outline' mb="1.6rem" h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'}>
                            {locations?.map((loc, index) => <option key={index} value={loc}>{loc}</option>)}

                        </Select>

                    </FormControl>
                </Box>
                <Box >
                    <FormControl id="email" >
                        <FormLabel className={roboto.className}>Would you like to also recieve payments?</FormLabel>

                        <Switch colorScheme='green' mb="1.6rem" defaultChecked onChange={setMerchant.toggle} />

                    </FormControl>
                </Box>

                {merchant &&
                    <>
                        <Box >

                            <RadioGroup colorScheme='green' onChange={setMerchantType} value={merchantType} >
                                <Stack mb="1.6rem" spacing={4} direction='row'>
                                    <Radio value='1'>Personal</Radio>
                                    <Radio value='2'>Registered Business</Radio>
                                </Stack>
                            </RadioGroup>
                            {/* <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>

                                <HStack > <Checkbox value='personal'></Checkbox>
                                    <Checkbox value='registered_business'></Checkbox></HStack>
                            </CheckboxGroup> */}
                        </Box>

                        {merchantType == '1' && <>
                            <Box  >
                                <FormControl id="email" isDisabled >
                                    <FormLabel className={roboto.className}>Merchant Name</FormLabel>
                                    <FormHelperText mb='0.3em' >Name must be the same with your bank account name.</FormHelperText>
                                    <Input
                                        value={merchantName}
                                        onChange={(e) => setMerchantName(e.target.value)} mb="1.6rem" h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="text" placeholder='Business name' />

                                </FormControl>
                            </Box>
                            <Box >
                                <FormControl id="email" >
                                    <FormLabel className={roboto.className}>Select Business Category</FormLabel>

                                    <Select placeholder='Select option' value={myBusiness}
                                        onChange={(e) => setMyBusiness(e.target.value)} variant='outline' mb="1.6rem" h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'}>
                                        {business?.map((loc, index) => <option key={index} value={loc}>{loc}</option>)}
                                    </Select>

                                </FormControl>
                            </Box>


                        </>}




                        {merchantType == '2' && <>
                            <Box  >
                                <FormControl id="email" >
                                    <FormLabel className={roboto.className}>Merchant Name</FormLabel>
                                    <FormHelperText mb='0.3em'>Name must be the same with your bank account name.</FormHelperText>
                                    <Input
                                        onChange={(e) => setMerchantName(e.target.value)} mb="1.6rem" h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="text" placeholder='Business name' />

                                </FormControl>

                            </Box>
                            <Box >
                                <FormControl id="email" >
                                    <FormLabel className={roboto.className}>Select Business Category</FormLabel>

                                    <Select placeholder='Select option' value={myBusiness}
                                        onChange={(e) => setMyBusiness(e.target.value)} variant='outline' mb="1.6rem" h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'}>
                                        {business?.map((loc, index) => <option key={index} value={loc}>{loc}</option>)}
                                    </Select>

                                </FormControl>
                            </Box>
                            <Box >
                                <FormControl id="email" >
                                    <FormLabel className={roboto.className}>Registered Number</FormLabel>

                                    <Input
                                        value={regNum}
                                        onChange={(e) => setRegNum(e.target.value)} mb="1.6rem" h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="text" placeholder='CAC Registration Number' />


                                </FormControl>
                            </Box>


                        </>}



                    </>
                }

                <Button
                    type='submit'
                    isLoading={loadingState}
                    loadingText='Please wait..'
                    onClick={verifyUser}
                    borderRadius={'0.125rem'}
                    h="4rem"
                    bg={'#000000'}
                    color={'white'}
                    _hover={{
                        bg: 'black.400',
                    }}>
                    <Text
                        fontSize="1.5rem" className={roboto.className} >
                        Proceed
                    </Text>

                </Button>
            </Stack>

        </Box>
    );
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


    return {
        props: {
            person: data,
        },
    }
})

export default withAuthUser()(VerifyUser)


