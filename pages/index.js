import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { Badge } from '@chakra-ui/react'
import {Box,Container,Heading, Icon,Text} from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
export default function Home() {
  return (
  // <Container  maxW='5xl'>
  <>
        <Box borderRadius={'lg'} bg = 'black' p='3' mb='6' align='center' fontWeight={'bolder'} color='blue.200' shadow={'dark-lg'}>
          hello , I am a full stack developer from India 
          </Box>
          <Container align='center'>

          <img src='/profile2.jpg' className='profile-pic'/>

          
          </Container>
          <Heading noOfLines={1} size='lg' variant={'page-title'} colorScheme='blackAlpha' align='center'>Rahul Yadu</Heading>
          <Text fontSize='lg' >
            I am final year Computer Science Student. </Text>
           <Text> I like to build web apps with <Badge colorScheme='telegram' fontSize='bold' variant='solid'>React.js</Badge> <Badge colorScheme='red' fontSize='bold' variant={'solid'}>NodeJs(ExpressJs)</Badge> <span></span>
          </Text>
  </>
    // </Container>
  )
}
