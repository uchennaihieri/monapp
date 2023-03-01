import { bvnN } from '@/recoil/atoms';
import { Box, Center, Heading, Image } from '@chakra-ui/react';
import {
    Button,
    FormControl,
    Flex,
    Input,
    Stack,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';

export default function ConfirmOtp() {

    const [verificationNumber, setVerificationNumber] = useRecoilState(bvnN);

    return (
        <Flex
            flexDirection='column'
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={`#ffffff`}>
            <Box mb={{ base: '2.75rem', md: "5.06rem" }}>
                <Image src={'/footerlogo.png'} w={'14.17rem'} h={'3.06rem'} />
            </Box>

            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={14}
                my={10}>
                <Center>
                    <Heading align="center" lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Verify your Phone Number
                    </Heading>
                </Center>
                <Center
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    We have sent a code to your BVN linked number
                </Center>
                <Center
                    fontSize={{ base: 'sm', sm: 'md' }}
                    fontWeight="bold"
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    {'******' + verificationNumber.substring(5)}
                </Center>
                <FormControl>
                    <Center>
                        <HStack>
                            <PinInput>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </Center>
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        mt={'1rem'}
                        h={'4em'}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Verify
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}