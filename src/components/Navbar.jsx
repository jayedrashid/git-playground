import React, { useState } from 'react'
import Button from './Button';
import { AiOutlineAntDesign } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "CONTACT", link: "/" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-indigo-600'>
                    <span className='text-3xl text-indigo-600 mr-1'>
                        <AiOutlineAntDesign name="logo-ionic"/>
                    </span>
                    Jayed Rashid
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl text-indigo-600 absolute right-8 top-4 cursor-pointer md:hidden'>
                    <GiHamburgerMenu name={open ? 'close' : 'menu'} />
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-[full] md:w-auto md:pl-0 pl-9 ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-indigo-600 hover:underline'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar