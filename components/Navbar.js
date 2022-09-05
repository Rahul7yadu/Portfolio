import {Tabs,TabList,Tab} from '@chakra-ui/react'
import Link from 'next/link'
import { Container } from '@chakra-ui/react'
const Navbar=()=>{
    return (
        <Container>
        <Tabs colorScheme={'green'} mb='10' isFitted>
            <TabList>
                <Link href='/'>
                <Tab _selected={{bg:'blue.100'}}>
                    Home
                </Tab>
                </Link>
                <Link href={'/skills'}>
                <Tab>
                Skills
                </Tab>
                </Link>
                <Link href={'/projects'}>
                <Tab>
                Projects
                </Tab>
                </Link>
            </TabList>
        </Tabs></Container>
    )
}
export default Navbar