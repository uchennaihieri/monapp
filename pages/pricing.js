import Navbar from '@/components/navbar';
import PageSeo from '@/Seo/pageSeo';
import {
    Box,
    Button,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Bree_Serif, DM_Sans } from '@next/font/google';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';



const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })

const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })



// const PackageTier = ({ checked, typePlan, title, options }) => {


//     return (
        
//     );
// };
const Pricing = () => {

    return (
        <>
            <PageSeo title="Our Prices - Monapp" description="" />


            <Box bg="#000000" color="#ffffff">
                <Navbar />
            </Box>
        </>
    );
};

export default Pricing;