import Link from 'next/link'
const Navbar = () => {
    return (

        <nav className='fixed top-10 z-50 bg-gray-900 bg-opacity-75 h-10'>
            <ul >
                <Link href={"/"}>
                    Home
                </Link>
                <Link href="/skills" className='text-2xl'>
                    Skills 
                </Link>
                <Link href={"/projects"}> 
                    Projects 
                </Link>
                <Link href={"/blog"}>
                    Blog
                </Link>
            </ul>
        </nav>
    )
}
export default Navbar

