import { Container } from "@chakra-ui/react";
import CoverBox from "../components/CoverBox";
const ImgUrls = [
{src:'/Html-css.png',name:'html,css'},
{src:'/javascript.jpg',name:'javascript'},
{src:'/React.jpg',name:'ReactJs'},
{src:'/express.png',name:'expressjs'},
{src:'/nodejs.webp',name:'nodejs'},
{src:'/nextjs.png',name:'nextjs'},
{src:'/mongodb.jpg',name:'mongodb'},
{src:'/mysql.png',name:'mysql'},
{src:'/redux.jpg',name:'redux'},
{src:'/git.jpg',name:'git'},{
  src:'/github.jpg',name:'github'
},
{src:'/postman.png',name:'postman'}
]
export default function Projects() {
  return (
    <Container align='center'>

      {ImgUrls.map(({src,name},index)=><CoverBox src={src} name={name} key={index}/>)}

    </Container>
  )
}
