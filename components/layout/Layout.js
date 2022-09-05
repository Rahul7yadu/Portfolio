import Head from 'next/head'
import Script from "next/script"
import Navbar from '../Navbar'
export default function Layout({children}){
    return (
    < >
      <Script src ="https://kit.fontawesome.com/27785bc871.js" ></Script>
      <Head><title>Rahul yadu</title> <link rel='icon' href = 'https://fontawesome.com/icons/code?s=solid'/></Head>
      <Navbar/>
    {children}
    </>
    )
}