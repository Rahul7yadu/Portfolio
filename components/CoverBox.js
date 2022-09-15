import { Box } from "@chakra-ui/react";

export default function({src,name}){
    return (<>
        <Box maxW='xl' p='3' m='3' className="cover-box" shadow={'dark-lg'}>
            <img src={src} ></img>
            {name}
        </Box>
    </>)
}