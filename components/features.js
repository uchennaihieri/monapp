import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image, Container } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Bree_Serif, Inter, DM_Sans } from '@next/font/google'

const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })

const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })


const Feature = ({ title, text, icon }) => {
    return (
        <Flex justify={{ base: 'center', md: 'left' }} align={{ base: 'center', md: 'start' }} flexDirection={{ base: 'column', md: 'row' }}>
            <Box
                p="0"
                mb={{ base: '1.55rem', md: '0px' }}
                mr={{ base: '0px', md: '1.9rem' }}>
                {icon}
            </Box>
            <Box
                textAlign={{ base: "center", md: "start" }}
                w={{ base: '16.75rem', md: 'auto' }}
            >
                <Text color={'#000000'} className={dmsansBold.className} fontSize={{ base: "1.01rem", md: '1.125rem' }} mb={{ base: "0.91rem", md: '0.9375rem' }} >{title}</Text>
                <Text fontWeight={400} className={dmsans.className} fontSize={{ base: "0.90rem", md: '1rem' }} lineHeight={{ base: "1.37rem", md: '1.875rem' }} >{text}</Text>
            </Box>
        </Flex>
    );
};

export default function Features() {
    return (
        <Container maxW='79.81em' h={{ base: '53.93em', md: "43.18em" }} centerContent>
            <Box maxW={{ base: '21.62em', md: "36.43em" }} mt={{ base: '4.81rem', md: "9.06rem" }} mb={{ base: '3.25rem', md: "8.75rem" }} align="center">
                <Text
                    mb={{ base: '0.5rem', md: '1rem' }}
                    letterSpacing={{ base: '-0.35px', md: '-0.5px' }}
                    lineHeight={{ base: '2.2rem', md: '3.125rem' }}
                    fontWeight={400}
                    fontSize={{ base: '1.32rem', md: '1.87rem' }}
                    className={bree.className}

                >Go Beyond manual payment</Text>
                <Text
                    lineHeight={{ base: '1.25rem', md: '2.18rem' }}
                    fontWeight={400}
                    fontSize={{ base: '0.7rem', md: '1rem' }}
                    className={dmsans.className}

                >Focus only on your business, we take care of your payment. You can pay and get paid within seconds with just a simple scan.</Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Image src='/store.svg' w={{ base: 10, md: 36 }} h={'auto'} />}
                    title={'Pay in stores with your card'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                />
                <Feature
                    icon={<Image src='/gift.svg' w={{ base: 10, md: 36 }} h={'auto'} />}
                    title={'Receive payment on purchase '}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                />
                <Feature
                    icon={<Image src='/cup.svg' w={{ base: 10, md: 36 }} h={'auto'} />}
                    title={'Grow your business'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                />
            </SimpleGrid>
        </Container>
    );
}