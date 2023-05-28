import { Box, Button, ButtonGroup, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { DM_Sans } from '@next/font/google'
import React from 'react'

const dmsansextra = DM_Sans({ weight: '700', subsets: ['latin'] })

function SecuritySetting() {
    return (
        <Box w='730px' minH='100vh' borderRadius='8px' border='0.6px solid #CFD0D3' bg='#FFFFFF' p='36px'>
            <form>
                <Text mb='27px'>Security</Text>
                <Box mb="21.87px">
                    <FormControl id="firstName" >
                        <FormLabel >Old Password</FormLabel>

                        <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="text" placeholder='Legal first name' />

                    </FormControl>
                </Box>

                <Box mb="21.87px">
                    <FormControl id="lastname" >
                        <FormLabel >New Password</FormLabel>

                        <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="text" placeholder='Legal last name' />

                    </FormControl>
                </Box>
                <Box mb="21.87px">
                    <FormControl id="email" >
                        <FormLabel>Confirm Password</FormLabel>

                        <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="email" placeholder='Enter your email' />

                    </FormControl>
                </Box>
                <ButtonGroup mt='88px' spacing='18px'>
                    <Button variant='solid' colorScheme='blackAlpha' w='202px' h='54px' borderRadius={'2px'} bg='rgba(0, 0, 0, 1)' ><Text className={dmsansextra.className} fontSize={'16px'} color='#FFFFFF' fontWeight={700} lineHeight='21px' >Save and Update</Text></Button>
                    <Button variant='outline' colorScheme='blackAlpha' w='202px' h='54px' borderRadius={'2px'}  ><Text className={dmsansextra.className} fontSize={'16px'} color='#000000' fontWeight={700} lineHeight='21px' >Cancel</Text></Button>

                </ButtonGroup>

            </form>
        </Box>
    )
}

export default SecuritySetting