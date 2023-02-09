import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, VStack, StackDivider, HStack, Image } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Poppins } from '@next/font/google'

const poppins = Poppins({ weight: '500', subsets: ['latin'] })



export default function FooterSection() {
    return (
        <Box bgColor="#002ECF" color="white" py={'48.5px'} px={'133px'} >
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'

            >
                <Box  >
                    <Text fontWeight={500} className={poppins.className} fontSize={'21px'}>Try MONAPP TODAY!</Text>
                    <HStack my="20px" justify={'space-between'}>
                        <Text fontWeight={700} className={poppins.className} fontSize={'40px'} maxW="588px">Start Accepting Payment in
                            just 10 Minutes</Text>
                        <Box>

                        </Box>

                    </HStack>

                </Box>
                <Box >
                    <Text fontWeight={400} className={poppins.className} fontSize={'16px'} align="center" >Copyright @ MONAPP 2023. All Rights Reserved.</Text>
                </Box>
            </VStack>


        </Box>
    );
}