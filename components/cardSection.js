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
} from '@chakra-ui/react';
import { Inter, Plus_Jakarta_Sans } from '@next/font/google'

const plus = Plus_Jakarta_Sans({ weight: ['500', '700'], subsets: ['latin'] })



export default function CardSection() {
    return (
        <Container maxW={'6xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
                <Stack spacing={4} justify="center">

                    <Heading fontWeight={700} className={plus.className} fontSize={'31px'} color="white"
                    >A digital Product design agency</Heading>
                    <Text fontWeight={500} className={plus.className} fontSize={'17px'} color="#7E7E7E" >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore
                    </Text>
                    <Text fontWeight={500} className={plus.className} fontSize={'17px'} color="#7E7E7E" >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore
                    </Text>

                </Stack>
                <Flex>
                    <Image
                        alt={'feature image'}
                        src={'/card.png'
                        }
                    />
                </Flex>


            </SimpleGrid>
        </Container>
    );
}