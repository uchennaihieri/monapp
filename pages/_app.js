import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import initAuth from '../services/initAuth'
import {
  RecoilRoot
} from 'recoil';
import theme from '@/theme';

initAuth()


export default function App({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </ChakraProvider>
}
