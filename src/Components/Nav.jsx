import {Link} from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import { useState } from "react";

const Nav=()=>{
    const [click,setClick]=useState(false)
    const handleClick=()=> setClick(!click);

    const content=
        <>
            <div className="lg:hidden block absolute top-16 w-full left-0 right-0 ng-slate-900 transition">
                <ul className="text-center text-xl p-20">
                    <Link spy={true} smooth={true} to="Home">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Committee">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Committee</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Speakers">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Speakers</li>
                    </Link>
                    {/* <Link spy={true} smooth={true} to="Sessions">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Sessions</li>
                    </Link> */}
                    {/* <Link spy={true} smooth={true} to="Tutorials">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Tutorials</li>
                    </Link> */}
                    <Link spy={true} smooth={true} to="Papers">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Papers</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Registration">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Registration</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Program">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Program</li>
                    </Link>
                    {/* <Link spy={true} smooth={true} to="News">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">News</li>
                    </Link> */}
                    <Link spy={true} smooth={true} to="Contacts">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact Us</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Sponsors">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Sponsors</li>
                    </Link>
                </ul>
            </div>
        </>
    return(
        <nav style={{ position: "sticky", top: 0, zIndex: 1000 }}>
            <div className="bg-orange-600 h-10vh flex justify-between z-50 text-white lg:py-1 px-20 py-4">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold">ICAMEIM-2024</span>
                </div>
                <div className="lg:flex md:flex lg:flex1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[14px]">
                            <Link spy={true} smooth={true} to="Home">
                                <li className="hover:text-blue-600 transition border-b-2 border-slate-100 hover:border-blue-600 cursor-pointer">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Committee">
                                <li className="hover:text-blue-600 transition border-b-2 border-slate-100 hover:border-blue-600 cursor-pointer">Committee</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Speakers">
                                <li className="hover:text-blue-600 transition border-b-2 border-slate-100 hover:border-blue-600 cursor-pointer">Speakers</li>
                            </Link>
                            {/* <Link spy={true} smooth={true} to="Sessions">
                                <li className="hover:text-blue-600 transition border-b-2 border-slate-100 hover:border-blue-600 cursor-pointer">Sessions</li>
                            </Link> */}
                            {/* <Link spy={true} smooth={true} to="Tutorials">
                                <li className="hover:text-blue-600 transition border-b-2 border-slate-100 hover:border-blue-600 cursor-pointer">Tutorials</li>
                            </Link> */}
                            <Link spy={true} smooth={true} to="Papers">
                                <li className="hover:text-blue-600 transition border-b-2 border-slate-100 hover:border-blue-600 cursor-pointer">Call for Papers</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Registration">
                                <li className="hover:text-blue-600 transition border-b-2 border-slate-100 hover:border-blue-600 cursor-pointer">Registration</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Program">
                                <li className="hover:text-blue-600 transition border-b-2 border-slate-100 hover:border-blue-600 cursor-pointer">Program</li>
                            </Link>
                            {/* <Link spy={true} smooth={true} to="News">
                                <li className="hover:text-blue-600 transition border-b-2 border-slate-100 hover:border-blue-600 cursor-pointer">News</li>
                            </Link> */}
                            <Link spy={true} smooth={true} to="Contacts">
                                <li className="hover:text-blue-600 transition border-b-2 border-slate-100 hover:border-blue-600 cursor-pointer">Contact Us</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Sponsors">
                                <li className="hover:text-blue-600 transition border-b-2 border-slate-100 hover:border-blue-600 cursor-pointer">Sponsors</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                {click&&content}
            </div>
            <button className="block sm:hidden transition" onClick={() => setClick(!click)}>  {click ? <FaTimes /> : <CiMenuFries />}</button>

            </div>

        </nav>
    )
}
export default Nav;