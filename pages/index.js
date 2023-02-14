import Image from 'next/image'
import { Badge, useColorMode } from '@chakra-ui/react'
import { Box, Container, Heading, Icon, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Particle from '../components/Particles'
export default function Home() {
  const [width, setWidth] = useState(null)
  const { colorMode, toggleColorMode } = useColorMode()
  useEffect(() => {
    setWidth(window.innerWidth)
    console.log(width)
  }, [])

  return (
    <>
    <Container maxW='5xl'>
      {/* <Particle /> */}
      <>
        <Box borderRadius={'lg'} bg={colorMode === 'light' ? 'black' : 'white'} p='3' mb='6' align='center' fontWeight={'bolder'} color='blue.600' shadow={colorMode === 'light' ? 'dark-lg' : 'xs'}>
          hello , I am a full stack developer from India
        </Box>
        <Container align='center'>
          <Image src='/rahulpaint.png' className='profile-pic' width={'200px'} height='200px' />
        </Container>
        <Heading noOfLines={1} size='lg' variant={'page-title'} colorScheme='blackAlpha' align='center'>Rahul Yadu</Heading>
        <Text fontSize='lg' align={'center'}>
          Welcome to my portfolio. I am a full-stack developer
           with expertise in ReactJS, NodeJS, ExpressJS, NextJS,
        </Text>
        <Text align={'center'}> I like to build web apps with
          <Badge colorScheme='telegram' fontSize='bold' variant='solid'>React.js</Badge> {" "}
          <Badge colorScheme='red' fontSize='bold' variant={'solid'}>NodeJs</Badge>
        </Text>
      </>
    </Container>
    </>
  )
}
