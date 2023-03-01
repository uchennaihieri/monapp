import { FormEvent, ChangeEvent, useState } from 'react';
import {
    Stack,
    FormControl,
    Input,
    Button,
    useColorModeValue,
    Heading,
    Text,
    Container,
    Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Simple() {
    const [email, setEmail] = useState('');
    const [state, setState] = useState(
        'initial'
    );
    const [error, setError] = useState(false);

    return (

        <Container
            maxW={'100%'}

            boxShadow={'xl'}
            rounded={'lg'}
            py={12}
            direction={'column'}>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                as={'form'}
                spacing={'12px'}
                onSubmit={(e) => {
                    e.preventDefault();
                    setError(false);
                    setState('submitting');

                    // remove this code and implement your submit logic right here
                    setTimeout(() => {
                        if (email === 'fail@example.com') {
                            setError(true);
                            setState('initial');
                            return;
                        }

                        setState('success');
                    }, 1000);
                }}>
                <FormControl>
                    <Input
                        h="5em"
                        variant={'solid'}
                        borderWidth={1}
                        color={'gray.800'}
                        _placeholder={{
                            color: 'gray.400',
                        }}
                        borderColor={useColorModeValue('gray.300', 'gray.700')}
                        id={'email'}
                        type={'email'}
                        required
                        placeholder={'Your Email'}
                        aria-label={'Your Email'}
                        value={email}
                        disabled={state !== 'initial'}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />
                </FormControl>
                <FormControl w={{ base: '100%', md: '40%' }}>
                    <Button
                        h="5em"
                        colorScheme={state === 'success' ? 'green' : 'blue'}
                        isLoading={state === 'submitting'}
                        w="100%"
                        type={state === 'success' ? 'button' : 'submit'}>
                        {state === 'success' ? <CheckIcon /> : 'Submit'}
                    </Button>
                </FormControl>
            </Stack>
            <Text
                mt={2}
                textAlign={'center'}
                color={error ? 'red.500' : 'gray.500'}>
                {error
                    ? 'Oh no an error occured! 😢 Please try again later.'
                    : "You won't receive any spam! ✌️"}
            </Text>
        </Container>

    );
}