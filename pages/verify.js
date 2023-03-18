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
} from '@chakra-ui/react';
import { Bree_Serif, DM_Sans, Roboto_Slab } from '@next/font/google';
import { useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import { auth, createUserWithEmailAndPassword, db, doc, serverTimestamp, setDoc, signInWithEmailAndPassword } from '@/services/firebase';
import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth';

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


// const banks = [
//     "Access Bank",
//     "Citibank",
//     "Ecobank",
//     "Fidelity Bank",
//     "First Bank of Nigeria",
//     "First City Monument Bank",
//     "Globus Bank",
//     "Guaranty Trust Bank",
//     "Heritage Banking",
//     "Keystone Bank",
//     "Parallex Bank",
//     "Polaris Bank",
//     "Premium Trust Bank",
//     "Providus Bank",
//     "Stanbic IBTC Bank",
//     "Standard Chartered Bank",
//     "Sterling Bank",
//     "SunTrust Bank Nigeria",
//     "Titan Trust Bank",
//     "Union Bank of Nigeria",
//     "United Bank For Africa",
//     "Unity Bank",
//     "Wema Bank",
//     "Zenith Bank"

// ]

const business = ["Electric lighting, Power", "Water, waterworks, and Supplies", "Bakery (food, pastries)", "Bar/local brew", "Food café/restaurant", "food catering", "Prepared foods", "Tortillas, ethnic bread", "Bricks", "Public Sector - Level 1", "Public Sector - Level 2", "Craft", "Knitting", "Shoes", "Mats", "Sewing/tailoring", "Soft drinks production", "Weaving", "Agriculture (grows crops/produce for sale)", "Grows mushrooms, etc.", "Dairy", "Fishing", "Livestock (various)", "Poultry", "Beekeeping", "Trees, Nursery", "Banking, Financial services", "Others", "School loan", "Private Sector - Level 1", "Private Sector - Level 2", "Manufacturing & Food Processing", "Agriculture & Forestry", "Mining & Quarry", "Trade & Commerce", "Transport & Communication", "Real Estate & Construction", "Rent/Housing", "Consumer/Personal", "Health", "Education", "Tourism & Hospitality", "Purchase of Shares", "Others (Specify)", "Alcoholic Beverages, Cigarettes, Matches", "Auto/bicycle parts", "Books, magazines, newspapers", "Charcoal/firewood", "Clothing, accessories (incl. shoes)", "Construction materials", "Cosmetics (incl. perfume)", "Crafts, souvenirs", "Drugs/Pharmacy", "Electronics (includes mobile phones)", "Flowers/plants", "Food products (groceries, dairy)", "Furniture", "Gas for cooking, heating", "Grains/legumes (incl. corn, rice)", "Household cleaning products", "Hygiene products", "Jewelry", "Kitchen, tableware", "Meat/butcher", "Office Supplies", "Oil", "Produce (fruits, vegetables, produce)", "Rugs", "Seafood/fish/salty fish", "Seeds", "Sleeping mats/blankets", "Snacks (snacks, candy, gum)", "Soft drinks", "Textiles (bed linens, towels, fabric)", "Tools, equipment, hardware", "Toys", "Video", "Telephone/Mobile Phone sales", "Auto repair", "Babysitter", "Barber shop/hair salon", "Beauty salon", "Book Keeper", "Bus/taxi driver", "Carpenter", "Construction laborer", "Electrician", "Fixes shoes", "Gas station", "Hauler/driver/cart pusher", "Health care", "Hotel/resthouse", "House-maid", "Cyber / Internet café", "Landlord", "Manager/supervisor", "Mechanic", "Welder", "Dentist", "Computer services", "Photographic Studio", "Business Services", "Air Transport", "Travel Agencies", "Postal or Courier Services"]

const Verify = () => {

    const [page, setPage] = useState(0)
    const { register, handleSubmit } = useForm();
    const router = useRouter()

    useEffect(() => {
        const { task } = router.query
        if (task == 'signup') {
            setPage(parseInt(1, 10))
        } else {
            setPage(parseInt(0, 10))
        }
    }, [router.query])


    const goSupport = () => {
        router.push('/support')
    }


    const goHome = () => {
        router.push('/')
    }





    const handleTabsChange = (index) => {
        setPage(index)
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
                <Button leftIcon={<AiOutlineLeft />} m="0" p="0" variant={'ghost'} _hover={{
                    backgroundColor: 'none'
                }} color={'#000000'} fontSize={{ base: '1rem', md: "1.44rem" }}
                    fontWeight={400}
                    lineHeight={'4rem'}
                    className={bree.className}
                    onClick={goHome}
                >Return Home</Button>

                <Button onClick={goSupport} m="0" p="0" variant={'ghost'} _hover={{
                    backgroundColor: 'none'
                }} color={'#000000'} fontSize={{ base: '0.75rem', md: "1rem" }}
                    fontWeight={500}
                    className={dmsansBold.className}
                >Support</Button>
            </Flex>
            <Box mb={{ base: '2.75rem', md: "5.06rem" }}>
                <Image src={'/footerlogo.png'} w={'14.17rem'} h={'3.06rem'} />
            </Box>

            <Box m="0" mb="2.92rem" p="0">
                <Signup />
            </Box>

        </Flex>
    );
}








export const Signup = () => {


    const AuthUser = useAuthUser()
    const { register, handleSubmit } = useForm();
    const [loadingState, setLoadingState] = useState(false);
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [merchant, setMerchant] = useBoolean(true)
    const [banks, setBanks] = useState(null)
    const [location, setLocation] = useState('')
    const [merchantName, setMerchantName] = useState('')
    const [myBusiness, setMyBusiness] = useState('')
    const [account, setAccount] = useState('')
    const [myBank, setMyBank] = useState("")
    const [errorFetchedChecker, setErrorFetchedChecker] = useState(false);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://127.0.0.1:5001/monapp-33057/us-central1/app/api/getBanks`, {
                method: 'POST'
            }).then(function (res) {

                return res.json();
            })
                // Converting to JSON
                .then(function (data) {

                    setBanks(data)
                })
                .catch(function (error) {
                    setErrorFetchedChecker(c => !c);
                    console.log(error);
                })
        }
        fetchData()
    }, [errorFetchedChecker])


    const verifyUser = () => {
        router.push('/VerifyUser')
    }

    console.log(myBank)

    const proceed = async () => {


        await fetch("http://127.0.0.1:5001/monapp-33057/us-central1/app/api/getBankData", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                firstname: "Christopher",
                lastname: "Ihieri",
                accountNumber: "9037202680",
                bankCode: myBank,
            })
        }).then(function (res) {
            return res.json();
        })
            // Converting to JSON
            .then(function (data) {
                console.log(data)
            })
            .catch(function (error) {
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
                            onChange={e => setLocation(e.target.value)} variant='outline' mb="1.6rem" h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'}>
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
                            <FormControl id="email" >
                                <FormLabel className={roboto.className}>Merchant Name</FormLabel>

                                <Input
                                    onChange={e => setMerchantName(e.target.value)} mb="1.6rem" h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="text" placeholder='Business name' />

                            </FormControl>
                        </Box>
                        <Box >
                            <FormControl id="email" >
                                <FormLabel className={roboto.className}>Select Business Category</FormLabel>

                                <Select placeholder='Select option' value={myBusiness}
                                    onChange={e => setMyBusiness(e.target.value)} variant='outline' mb="1.6rem" h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'}>
                                    {business?.map((loc, index) => <option key={index} value={loc}>{loc}</option>)}
                                </Select>

                            </FormControl>
                        </Box>

                    </>
                }

                <Button
                    type='submit'
                    isLoading={loadingState}
                    loadingText='Please wait..'
                    onClick={proceed}
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
    )
}



export default withAuthUser()(Verify)