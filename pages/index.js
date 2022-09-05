import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import {Box,Container,Heading, Icon} from '@chakra-ui/react'
export default function Home() {
  return (
  <Container maxW={'2xl'} >
        <Box borderRadius={'lg'} bg = 'red.300' p='3' mb='6' align='center' fontWeight={'bold'}>
          hello , I am a full stack developer from India 
          </Box>
          <Heading noOfLines={1} size='lg' variant={'page-title'}>Rahul Yadu</Heading>
    </Container>
  )
}
