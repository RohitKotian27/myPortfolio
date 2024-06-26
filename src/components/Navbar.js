import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
    const [nav, setNav] = useState(false);
    useEffect(() => {
        if (nav) {
            document.body.classList.add("overflow-y-hidden")
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }
    }, [nav]);
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ];
    return (
        <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4 py-2 z-10">
            <div className="text-4xl md:text-5xl font-signature ml-2">Rohit</div>
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className="capitalize px-4 cursor-pointer text-gray-400 font-medium hover:scale-105 duration-200"><Link to={link} smooth duration={500}>{link}</Link></li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 text-gray-400 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black text-gray-500">
                    {links.map(({ id, link }) => (
                        <li key={id} className="capitalize px-4 cursor-pointer text-3xl py-6">
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    )
}