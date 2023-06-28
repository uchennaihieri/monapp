import React from 'react'
import Navbar from './navbar'
import { Box } from '@chakra-ui/react'

function NewHero({ children}) {
  return (
    <Box
     bg="#000000" h='75vh' w='100%' 

     bgImage="url('/herobg.png')"
     >
          <div><Navbar /></div>
        
    {children}

    </Box>
  )
}

export default NewHero