import Head from 'next/head'
import Image from 'next/image'
import Script from "next/script"
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Container, Spacer, ThemeProvider, ColorModeProvider, ColorModeScript } from '@chakra-ui/react'
import Particle from '../Particles'
export default function Layout({ children }) {
  return (
    < div >
      <Script src="https://kit.fontawesome.com/27785bc871.js" ></Script>
      <Head>
        <title>Rahul yadu</title> <link rel='icon' href='https://fontawesome.com/icons/code?s=solid' /></Head>
      {/* <ColorModeScript initialColorMode='light'> */}
            {/* <Particle/> */}
            <Navbar />
            {children}
          <Footer />
      {/* </ColorModeScript> */}
    </div>
  )
}