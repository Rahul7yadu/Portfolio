import { Box ,Button,Container, Text,Stack,ButtonGroup, Badge} from "@chakra-ui/react"
const taskApi = 'https://github.com/Rahul7yadu/task-manger-api';
const Skills=()=>{
    return (
        <Container align='center'>

        <Box borderRadius = 'lg'  maxW='2xl'  shadow='lg' align='center' minH='12' mb='5'>
            <img src = 'devconnect.png' height='100%'/>
            <Text fontSize={'lg'} fontWeight='bold'>DEVCONNECT.A social media app for developers</Text>
            <Badge colorScheme={'orange'}>React</Badge>
            <Badge >NodeJs</Badge>
            <Badge>ExpressJs</Badge>
            <Badge>mongodb</Badge>
            <Badge>Redux</Badge>
            <ButtonGroup>

            <Button colorScheme='blackAlpha'  size='xs' variant={'ghost'}><a href='https://devconnect-rahul.herokuapp.com/' >View</a></Button>
            <Button colorScheme='blackAlpha'  size='xs' variant={'ghost'}> <a href='https://github.com/Rahul7yadu/Devconnect'>github</a></Button>
            </ButtonGroup>
            
        </Box>
        <Box borderRadius = 'lg'  maxW='2xl'  shadow='lg' align='center' maxH='lg'>
            <img src='task.png'></img>
            <Text fontSize={'lg'} fontWeight='bold'>Task manager Api</Text>
            <Badge>nodejs</Badge>
            <Badge>ExpressJs</Badge>
            <ButtonGroup>
            <Button colorScheme='blackAlpha'  size='xs' variant={'ghost'}><a href='https://devconnect-rahul.herokuapp.com/' >View</a></Button>
            <Button colorScheme='blackAlpha'  size='xs' variant={'ghost'}> <a href='https://github.com/Rahul7yadu/Devconnect' >github</a></Button>
            </ButtonGroup>
        </Box>
        </Container>
    )
}
export default Skills