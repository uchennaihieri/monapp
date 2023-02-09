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
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    IconButton,
} from '@chakra-ui/react';
import { BsFillPersonFill, BsBriefcaseFill } from 'react-icons/bs'
import { Inter, Plus_Jakarta_Sans } from '@next/font/google'

const plus = Plus_Jakarta_Sans({ weight: ['500', '700'], subsets: ['latin'] })



export default function ReadySection() {
    return (
        <Container maxW={'6xl'}  >
            <Flex flexDirection={'row'} justify='space-between' h="436px" py="87px" spacing={10} >
                <Stack spacing={6} justify="center" w="382.53px">

                    <Heading fontWeight={700} className={plus.className} fontSize={'31px'} color="white"
                    >Ready to get started?</Heading>
                    <Text fontWeight={500} className={plus.className} fontSize={'17px'} color="#7E7E7E" >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                        <Button
                            borderRadius={'12px'}
                            size={'lg'}
                            px={6}
                            fontWeight={500}
                            color={'white'}
                            bg={'#1E1E1E'}
                            href={'#'}
                            _hover={{
                                bg: '#000000',
                            }}

                        >
                            Join now
                        </Button>

                    </Stack>

                </Stack>
                <Flex flexDirection={'row'} spacing={12}>
                    <Card w="340px" h="213px" mr="35px" bg="none" border="1px solid #CFCFCF" borderRadius="8px">

                        <CardBody >
                            <IconButton
                                borderRadius={'20px'}
                                colorScheme='blackAlpha'
                                bg="#1D1D1D"
                                size='lg'
                                icon={<BsFillPersonFill />}

                            />
                            <Heading my="20px" fontWeight={700} className={plus.className} fontSize={'20px'} color="white"> Customer dashboard</Heading>
                            <Text fontWeight={500} className={plus.className} fontSize={'15px'} color="#7E7E7E" >View a summary of all your customers over the last month.</Text>
                        </CardBody>

                    </Card>
                    <Card w="340px" h="213px" bg="none" border="1px solid #CFCFCF" borderRadius="8px">

                        <CardBody >
                            <IconButton
                                borderRadius={'20px'}
                                colorScheme='blackAlpha'
                                bg="#1D1D1D"
                                size='lg'
                                icon={<BsBriefcaseFill />}

                            />
                            <Heading my="20px" fontWeight={700} className={plus.className} fontSize={'20px'} color="white"> Customer dashboard</Heading>
                            <Text fontWeight={500} className={plus.className} fontSize={'15px'} color="#7E7E7E" >View a summary of all your customers over the last month.</Text>
                        </CardBody>

                    </Card>

                </Flex>


            </Flex>
        </Container>
    );
}