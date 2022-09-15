import { Container, Box } from "@chakra-ui/react";
import CoverBox from "../components/CoverBox";
const ImgUrls = [
{src:'https://miro.medium.com/max/3332/1*nEBkrQ7shqHlATqvFBmypg.png',name:'html,css'},
{src:'https://rb.gy/bcnppg',name:'javascript'},
{src:'https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background.jpg',name:'ReactJs'},
{src:'https://hackersandslackers-cdn.storage.googleapis.com/2020/05/express.png',name:'expressjs'},
{src:'https://www.brainvire.com/wp/wp-content/uploads/2016/05/top-7-benefits-of-using-node-js-in-retail-industry-that-cannot-be-ignored.jpg',name:'nodejs'},
{src:'https://buttercms.com/static/images/tech_banners/Nextjs.b8a717322c08.png',name:'nextjs'},
{src:'https://th.bing.com/th/id/OIP.jZjzNhYEDARcAHbmh0pIrgHaD4?pid=ImgDet&rs=1',name:'mongodb',
src:'https://2.bp.blogspot.com/-zE5mMBsCXxQ/WFYZO4VQvQI/AAAAAAAACDk/dArGjl4teHMtf3YDTo-tTPk_Tf3O_7NygCLcB/s1600/mysql.png',name:'mongodb'},
{src:'https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage.jpg',name:'redux'},
{src:'https://th.bing.com/th/id/OIP.13ROrVdbZSDXayXY0kyxYQAAAA?pid=ImgDet&rs=1',name:'git'},{
  src:'https://www.pine64.org/wp-content/uploads/2019/04/github-logo.jpg',name:'github'
},
{src:'https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8',name:'postman'}
]
export default function Projects() {
  return (
    <>
      <Container maxW={'3xl'}  display='flex' alignItems={'center'} flexWrap='wrap' justifyContent={'center'} >
      {ImgUrls.map(({src,name})=><CoverBox src={src} name={name}/>)}
      </Container>

    </>
  )
}