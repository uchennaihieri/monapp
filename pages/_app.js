import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import initAuth from '../services/initAuth'
import {
  RecoilRoot
} from 'recoil';
import theme from '@/theme';

initAuth()


export default function App({ Component, pageProps }) {
  return <RecoilRoot>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </RecoilRoot>

}
