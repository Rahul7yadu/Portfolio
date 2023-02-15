import Image from "next/image";
import { Box, Button, Container, Text, Stack, ButtonGroup, Badge } from "@chakra-ui/react"
import {useAutoAnimate} from '@formkit/auto-animate/react'
import Particle from "../components/Particles";
const taskApi = 'https://github.com/Rahul7yadu/task-manger-api';
const dictionary = 'https://react-dictionary-302df.web.app/'
const Skills = () => {
    const [parent, enableAnimations] = useAutoAnimate()
    return (
        <Container align='center' ref={parent}>
            <Box borderRadius='lg' maxW='2xl' shadow='lg' align='center' minH='12' mb='5'>
                <Image width={'500px'} height={'300px'} src='/devconnect.png' />
                <Text fontSize={'lg'} fontWeight='bold'>DEVCONNECT.A social media app for developers</Text>
                <Badge colorScheme={'orange'}>React</Badge>
                <Badge >NodeJs</Badge>
                <Badge>ExpressJs</Badge>
                <Badge>mongodb</Badge>
                <Badge>Redux</Badge>
                <ButtonGroup>

                    <Button colorScheme='green' size='xs' variant={'ghost'}><a href='https://devconnect-rahul.herokuapp.com/' >View</a></Button>
                    <Button colorScheme='green' size='xs' variant={'ghost'}> <a href='https://github.com/Rahul7yadu/Devconnect'>github</a></Button>
                </ButtonGroup>
            </Box>
            <Box borderRadius='lg' maxW='2xl' shadow='lg' align='center' minH='12' mb='5'>
                <img src='/dictionary.png' />
                <Text fontSize={'lg'} fontWeight='bold'>an Online dictionary app </Text>
                <Badge colorScheme={'orange'}>React</Badge>
                
                <Badge>Material-Ui</Badge>
                
                <ButtonGroup>

                    <Button colorScheme='green' size='xs' variant={'ghost'}><a href={dictionary}>View</a></Button>
                    <Button colorScheme='green' size='xs' variant={'ghost'}> <a href='https://github.com/Rahul7yadu/Devconnect'>github</a></Button>
                </ButtonGroup>
            </Box>
            <Box borderRadius='lg' maxW='2xl' shadow='lg' align='center' maxH='lg'>
                <img src='/task.png' ></img>
                <Text fontSize={'lg'} fontWeight='bold'>Task manager Api</Text>
                <Badge>nodejs</Badge>
                <Badge>ExpressJs</Badge>
                <ButtonGroup>
                    <Button colorScheme='green' size='xs' variant={'ghost'}><a href='https://devconnect-rahul.herokuapp.com/' >View</a></Button>
                    <Button colorScheme='green' size='xs' variant={'ghost'}> <a href='https://github.com/Rahul7yadu/Devconnect' >github</a></Button>
                </ButtonGroup>
            </Box>
        </Container>
    )
}
export default Skills