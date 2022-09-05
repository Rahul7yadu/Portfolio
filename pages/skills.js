import { Container,Box } from "@chakra-ui/react";

export default function  Projects  (){
return (
    <>
      <Container align='center'>
        <Box borderRadius = 'lg' border={'2px solid black'} maxW='200px' minH='200px' shadow='md'>
                <img src='https://patterns.dev/img/reactjs/react-logo@3x.svg'/>
                <h2>
</h2>        </Box>

        <Box borderRadius = 'lg' border={'2px solid black'} maxW='200px' minH='200px'>
              <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--g1u_jxZy--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4unrrweuaj1wyh25npgt.jpeg'/> 
        </Box >
        <Box borderRadius = 'lg' border={'2px solid black'} maxW='200px' minH='200px'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png'/>
        </Box>
        </Container> 

    </>
)
}