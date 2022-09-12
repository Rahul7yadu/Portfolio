import Head from 'next/head'
import Image from 'next/image'
import Script from "next/script"
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Container, Spacer } from '@chakra-ui/react'
export default function Layout({children}){
    return (
    < >
      <Script src ="https://kit.fontawesome.com/27785bc871.js" ></Script>
      <Head><title>Rahul yadu</title> <link rel='icon' href = 'https://fontawesome.com/icons/code?s=solid'/></Head>
      <Navbar/>
      <Container maxW='3xl' minH={'xl'}>

        {children}
      </Container>
      <Footer/>
    </>
    )
}