import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Social() {

    const socialLinks = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/rohit-kotian-1a1288167/"
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://www.github.com/rohitkotian27"
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:rohitkotian07@gmail.com"
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/Rohit-Kotian-Resume.pdf",
            download: true
        },
    ]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {socialLinks.map(({ id, child, href, download }) => (
                    <li key={id} className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-r-md hover:ml-[0px] duration-300">
                        <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}