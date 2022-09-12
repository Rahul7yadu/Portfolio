import { Box, Container } from "@chakra-ui/react"

export const Footer = ()=>{
    return (
<>
        {/* <div className="footer"> */}
        <Box borderRadius={'lg'} bg = 'blue.500' p='3'  align='center' fontWeight={'bold'} >
            <div className="footer-inner">

        <a href="https://twitter.com/Rahul53520475"><i className="fa-brands fa-square-twitter fa-2x" ></i></a>
        <a href="https://linkedin.com/"><i className="fa-brands fa-linkedin fa-2x"></i></a>
        <a href="https://linkedin.com/"><i className="fa-brands fa-square-github fa-2x"></i></a>
        <a href="https://linkedin.com/"><i className="fa-brands fa-youtube fa-2x"></i></a>
            </div>
        </Box>
        {/* </div> */}
</>
    )
}

export default Footer