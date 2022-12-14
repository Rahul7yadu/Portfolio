import { Box } from "@chakra-ui/react";
import Image from "next/image";
export default function 
CoverBox({src,name}){
    return (<>
        <Box maxW='xl' p='3' m='3' className="cover-box" shadow={'dark-lg'}>
            <Image src={src} width="200px" height='200px'></Image>
            <div>{name}</div>
        </Box>
    </>)
}