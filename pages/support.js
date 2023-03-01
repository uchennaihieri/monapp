import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Box,
    IconButton,
    Button,
} from '@chakra-ui/react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoLogoWhatsapp,
    IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import Navbar from '@/components/navbar';
import FormSteps from '@/components/formSteps';
import Headline from '@/components/headline';
import { FaSlack, FaSlackHash, FaTelegramPlane } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';


const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={'white'}>
                {icon}
            </Flex>
            <Button fontWeight={600} variant={'link'} color='white'>{text}</Button>
        </Stack>
    );
};

export default function Support() {
    return (
        <Box bg="#000000" color="#ffffff">
            <Navbar />
            <Container maxW={'7xl'} py={{ base: 12, md: 24 }} minH={'100vh'}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
                    <Stack spacing={4}>

                        <Heading fontSize={'5xl'} mt="1em">A digital Product design agency</Heading>
                        <Text color={'gray.500'} fontSize={'2xl'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore
                        </Text>
                        <Stack
                            spacing={4}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                                />
                            }>
                            <Feature
                                icon={
                                    <IconButton as={RiWhatsappFill} variant="ghost" _hover={{ bg: 'none' }} colorScheme='whatsapp' w={5} h={5} />
                                }

                                text={'Whatsapp family'}
                            />
                            <Feature
                                icon={<IconButton as={FaTelegramPlane} variant="ghost" colorScheme='telegram' _hover={{ bg: 'none' }} w={5} h={5} />}

                                text={'Telegram hood'}
                            />
                            <Feature
                                icon={
                                    <Icon as={FaSlackHash} color={'purple.500'} w={5} h={5} />
                                }

                                text={'Slack community'}
                            />
                        </Stack>
                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={
                                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                            }
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
                <Headline />
                <FormSteps />
            </Container>
        </Box>
    );
}