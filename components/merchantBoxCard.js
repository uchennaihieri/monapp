import { Avatar, AvatarBadge, Box, Button, Checkbox, Icon, Text } from '@chakra-ui/react'
import { DM_Sans } from '@next/font/google'
import React from 'react'
import { BsDot } from 'react-icons/bs'

const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })

function MerchantBoxCard() {
    return (
        <>
        <Box  w={{base:'11.563em',md:'225.32px'}} h='239.65px' p='16.39px' bg='#FFFFFF' borderRadius='8.19px' borderWidth={'0.2px'} mr={'1.536em'} mb='17.35' align='center' position='relative' >
            <Box w='fit-content' h='fit-content' borderRadius={'50%'} border='0.409664px solid #000000' position='relative'>
                <Avatar
                    border='4px solid white'
                    w={{base:'3.35em',md:'6.5em'}}
                    h={{base:'3.35em',md:'6.5em'}}
                    src={
                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                >
                    <Icon as={BsDot} position='absolute' boxSize='2.25em' right='-9px' top='0px' color='#000000' />
                    <AvatarBadge bg='green.500' />
                </Avatar>


            </Box>
            <Checkbox size='lg' colorScheme='black' defaultChecked position='absolute' right='16.39px' top='20.48px' >

            </Checkbox>
            <Box textAlign={'center'} mb='16.44px' mt='16.48px' >  
            <Text fontSize={'16.39px'} mb='6.29px' lineHeight='21.34px' className={dmsans.className} color={'#000000'} fontStyle="normal" fontWeight={400}>Christopher Aniedi</Text>
                <Text fontSize={'12.29px'} lineHeight='16px' className={dmsans.className} fontStyle="normal" fontWeight={400} color='rgba(0, 0, 0, 0.5)'>@chrisaniedi</Text>
            </Box>

            <Button h='22.53px' w='93.2px' borderRadius='2.05px' bg='#000000' color='#FFFFFF' colorScheme={'blackAlpha'}><Text fontSize={'12.29px'} lineHeight='16px' className={dmsans.className} fontStyle="normal" fontWeight={400} letterSpacing='-0.006em'>View Details</Text></Button>
        </Box>

        {/* responsive */}
        {/* <Box display={{base:'flex',md:'none'}} w='225.32px' h='239.65px' p='16.39px' bg='#FFFFFF' borderRadius='8.19px' borderWidth={'0.2px'} mr={'24.58px'} mb='17.35' align='center' position='relative' >
            <Box w='fit-content' h='fit-content' borderRadius={'50%'} border='0.409664px solid #000000' position='relative'>
                <Avatar
                    border='4px solid white'
                    w='104.46px'
                    h='104.46px'
                    src={
                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                >
                    <Icon as={BsDot} position='absolute' boxSize='2.25em' right='-9px' top='0px' color='#000000' />
                    <AvatarBadge bg='green.500' />
                </Avatar>


            </Box>
            <Checkbox size='lg' colorScheme='black' defaultChecked position='absolute' right='16.39px' top='20.48px' >

            </Checkbox>
            <Box textAlign={'center'} mb='16.44px' mt='16.48px' >  <Text fontSize={'16.39px'} mb='6.29px' lineHeight='21.34px' className={dmsans.className} color={'#000000'} fontStyle="normal" fontWeight={400}>Christopher Aniedi</Text>
                <Text fontSize={'12.29px'} lineHeight='16px' className={dmsans.className} fontStyle="normal" fontWeight={400} color='rgba(0, 0, 0, 0.5)'>@chrisaniedi</Text>
            </Box>

            <Button h='22.53px' w='93.2px' borderRadius='2.05px' bg='#000000' color='#FFFFFF' colorScheme={'blackAlpha'}><Text fontSize={'12.29px'} lineHeight='16px' className={dmsans.className} fontStyle="normal" fontWeight={400} letterSpacing='-0.006em'>View Details</Text></Button>
        </Box> */}


        </>
    )
}

export default MerchantBoxCard