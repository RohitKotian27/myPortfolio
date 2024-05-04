export default function Card({ src, demoUrl, codeUrl }) {
    return (
        <div className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
            <img src={src} alt="movie post" className="rounded-md" />
            <div className="flex items-center justify-center">
                <a href={demoUrl} target="_blank" rel="noreferrer" className="w-1/2 p-2 m-4 duration-200 hover:scale-105 text-center">Demo</a>
                <a href={codeUrl} target="_blank" rel="noreferrer" className="w-1/2 p-2 m-4 duration-200 hover:scale-105 text-center">Code</a>
            </div>
        </div >
    )
}