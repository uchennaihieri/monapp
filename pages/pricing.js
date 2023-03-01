import Navbar from '@/components/navbar';
import {
    Box,
    Button,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const options = [
    { id: 1, desc: '1 lorem ipsum' },
    { id: 2, desc: 'Lorem, ipsum dolor.' },
    { id: 3, desc: 'Monthly Updates' },
];

const PackageTier = ({ checked, typePlan, title }) => {

    const colorTextLight = checked ? 'white' : 'purple.600';
    const bgColorLight = checked ? 'purple.400' : 'gray.300';

    const colorTextDark = checked ? 'white' : 'purple.500';
    const bgColorDark = checked ? 'purple.400' : 'gray.300';

    return (
        <Stack
            p={3}
            py={3}
            justifyContent={{
                base: 'flex-start',
                md: 'space-around',
            }}
            direction={{
                base: 'column',
                md: 'row',
            }}
            alignItems={{ md: 'center' }}>
            <Heading color={'#ffffff'} size={'xl'}>{title}</Heading>
            <List spacing={3} textAlign="start">
                {options.map((desc, id) => (
                    <ListItem key={desc.id} fontSize={'1.12rem'}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        {desc.desc}
                    </ListItem>
                ))}
            </List>
            <Heading size={'xl'}>{typePlan}</Heading>

        </Stack>
    );
};
const Pricing = () => {
    return (
        <Box bg="#000000" color="#ffffff">
            <Navbar />
            <Box py={12} px={5} minH={'100vh'}>
                <Stack spacing={4} width={'100%'} direction={'column'}>
                    <Stack
                        p={5}
                        alignItems={'center'}
                        justifyContent={{
                            base: 'flex-start',
                            md: 'space-around',
                        }}
                        direction={{
                            base: 'column',
                            md: 'column',
                        }}>
                        <Stack
                            width={{
                                base: '100%',
                                md: '40%',
                            }}
                            textAlign={'center'}>
                            <Heading size={'2xl'}>
                                Unbelievable Prices  <Text color="#3183FF">just for you</Text>
                            </Heading>
                        </Stack>
                        <Stack
                            width={{
                                base: '100%',
                                md: '60%',
                            }}
                            py={{
                                base: '1rem',
                                md: '1.5rem',
                            }}
                        >
                            <Text fontSize={'1.12rem'} textAlign={'center'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                quod in iure vero. Facilis magnam, sed officiis commodi labore
                                odit.
                            </Text>
                        </Stack>
                    </Stack>
                    <Divider />
                    <PackageTier title={'Starter'} typePlan="Free" options={options} />
                    <Divider />
                    <PackageTier
                        title={'Lorem Plus'}
                        checked={true}
                        typePlan="&#8358;1,500"
                        options={options}
                    />
                    <Divider />
                    <PackageTier title={'Lorem Pro'} typePlan="Free" options={options} />
                </Stack>
            </Box>
        </Box>
    );
};

export default Pricing;