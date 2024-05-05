import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png"
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

export default function Experience() {
    const techStacks = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-600'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-sky-400'
        },
        {
            id: 5,
            src: node,
            title: 'Node',
            style: 'shadow-green-500'
        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-cyan-500'
        },
        {
            id: 7,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        }
    ]
    return (
        <div name="experience" className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className="pb-8">
                    <p className="text-3xl md:text-4xl font-bold border-b-4 border-gray-500 inline">Experience</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-2">
                    {techStacks.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} className="w-16 mx-auto" alt="experience thumbnails" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}