import {Tabs,TabList,Tab} from '@chakra-ui/react'
import Link from 'next/link'
import { Container } from '@chakra-ui/react'
const Navbar=()=>{
    return (
        <Container maxW='3xl'>
        <Tabs colorScheme={'green'} mb='10' isFitted>
            <TabList>
                <Link href='/'>
                <Tab _selected={{bg:'blue.400'}} >
                    Home
                </Tab>
                </Link>
                <Link href={'/skills'}>
                <Tab _selected={{bg:'blue.400'}}>
                Skills
                </Tab>
                </Link>
                <Link href={'/projects'}>
                <Tab _selected={{bg:'blue.400'}}>
                Projects
                </Tab>
                </Link>
            </TabList>
        </Tabs></Container>
    )
}
export default Navbar