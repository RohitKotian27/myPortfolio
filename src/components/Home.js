import ProfileImage from "../assets/Rohit.jpeg";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-scroll";

export default function Home() {
    return (
        <div name="home" className="pt-28 md:pt-0 w-full md:h-screen bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg flex flex-col mx-auto items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
                    <p className="text-gray-400 py-4 max-w-md   ">I have six years of experience in building and designing software applications. Currently, I love to work on developing web applications using React JS, Tailwind CSS and Node JS.</p>
                    <div className="py-2">
                        <Link to="portfolio" smooth duration={500} className="text-white group flex px-6 py-3 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer w-fit">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300"><MdArrowRightAlt className="ml-1" size={20} /></span>
                        </Link>
                    </div>
                </div>
                <div className="my-10 md:my-0">
                    <img src={ProfileImage} alt="profile" className="rounded-2xl mx-auto w-2/3 md:w-3/4" />
                </div>
            </div>
        </div>
    )
}