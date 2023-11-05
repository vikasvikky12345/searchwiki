import Search from "../Search/page";

const { default: Link } = require("next/link")

const Navbar =()=>{
    return(
        <nav className="flex flex-col justify-between items-center border  mb-5 p-5">
            <h1 className=" text-3xl">
                <Link href='./'>Vikas Wiki</Link>
            </h1>
            <Search/>
        </nav>
    )
}
export default Navbar;