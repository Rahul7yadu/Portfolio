import '../styles/globals.css'
import '../styles/style.css'
import {ChakraProvider,ColorModeScript} from '@chakra-ui/react'
import Layout from '../components/layout/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
     </ChakraProvider>
    )
}

export default MyApp
