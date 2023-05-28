import { HStack, Image, Td, Text, Tr, Icon } from '@chakra-ui/react'
import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'

function DebitTransaction() {
    return (
        <Tr h='79px'>
            <Td>
                1
            </Td>
            <Td> <HStack> <Image src={'/sentImage.svg'} width={'24px'} height={'24px'} />
                <Text> Franklin Uchemba Stores </Text></HStack> </Td>
            <Td>RET647UYT9IO</Td>
            <Td fontWeight={'bold'}> NGN 42,000.98</Td>
            <Td>25 April at 09:30am</Td>
            <Td><HStack spacing={0}> <Icon as={GoPrimitiveDot} boxSize={8} color='#27AE60' p='0px' />
                <Text > Success </Text></HStack> </Td>

        </Tr>
    )
}

export default DebitTransaction