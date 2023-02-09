import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Inter, Plus_Jakarta_Sans } from '@next/font/google'

const plus = Plus_Jakarta_Sans({ weight: ['500', '700'], subsets: ['latin'] })



const Feature = ({ title, text, icon }) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={700} className={plus.className} fontSize={'19px'} color="white">{title}</Text>
            <Text fontWeight={500} className={plus.className} fontSize={'15px'} color="#7E7E7E" >{text}</Text>
        </Stack>
    );
};

export default function Features() {
    return (
        <Box py="152px" px="48px">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Image src='/fast.svg' w={16} h={16} />}
                    title={'As fast as cash'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                />
                <Feature
                    icon={<Image src='/secure.svg' w={16} h={16} />}
                    title={'As secure as cash'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                />
                <Feature
                    icon={<Image src='/support.svg' w={16} h={16} />}
                    title={'Community support'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                />
            </SimpleGrid>
        </Box>
    );
}