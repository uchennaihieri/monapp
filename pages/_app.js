import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import initAuth from '../services/initAuth'
import {
  RecoilRoot
} from 'recoil';

initAuth()


export default function App({ Component, pageProps }) {
  return <ChakraProvider>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </ChakraProvider>
}
