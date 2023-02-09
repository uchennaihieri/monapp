import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Inter, Plus_Jakarta_Sans } from '@next/font/google'

const plus = Plus_Jakarta_Sans({ weight: ['500', '700'], subsets: ['latin'] })


const Feature = ({ title, text, icon }) => {
    return (
        <Stack>

            <Text fontWeight={700} className={plus.className} fontSize={'43px'}>{title}</Text>
            <Text fontWeight={500} className={plus.className} fontSize={'20px'}>{text}</Text>
        </Stack>
    );
};

export default function BlueSection() {
    return (
        <Box bgColor="#002ECF" color="white" py={'48.5px'} px={'133px'} >
            <Text fontWeight={700} className={plus.className} fontSize={'30px'} align="center" mb="44px">Join millions getting secured payment</Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    title={'15%'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...'
                    }
                />
                <Feature
                    title={'41%'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing ,  labore...'
                    }
                />
                <Feature
                    title={'3964+'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing  labore...'
                    }
                />
            </SimpleGrid>
        </Box>
    );
}