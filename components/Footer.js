import { Box, Container } from "@chakra-ui/react"

export const Footer = ()=>{
    return (
<>
        <Container maxW='3xl' pt='5'>

        <Box borderRadius={'lg'} bg = 'blue.500' p='3'  align='center' fontWeight={'bold'} >
            <Box className="footer-inner">

        <a href="https://twitter.com/Rahul53520475/"><i className="fa-brands fa-square-twitter fa-2x" ></i></a>
        <a href="https://www.linkedin.com/in/rahul-yadu-457168203/"><i className="fa-brands fa-linkedin fa-2x"></i></a>
        <a href="https://github.com/Rahul7yadu/"><i className="fa-brands fa-square-github fa-2x"></i></a>
        <a href="https://mail.google.com/rahulyadu17@gmail.com"><i className="fa-solid fa-envelope fa-2x"></i></a>
            </Box>
        </Box>
        </Container>
</>
    )
}

export default Footer