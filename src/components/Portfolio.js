import Card from "./Card";
import movieMate from "../assets/portfolio/movie-mate.jpg";
import todoList from "../assets/portfolio/todo-list.jpg";
import shopMate from "../assets/portfolio/shop-mate.jpg";
import codeBook from "../assets/portfolio/code-book.jpg";
import randomQuote from "../assets/portfolio/random-quote.jpg";
import tictactoe from "../assets/portfolio/tic-tac-toe.jpg";

export default function Portfolio() {
    const portfolios = [
        {
            id: 1,
            src: movieMate,
            demoUrl: 'https://yourmoviemate.netlify.app/',
            codeUrl: 'https://github.com/RohitKotian27/moviemate'
        },
        {
            id: 2,
            src: codeBook,
            demoUrl: 'https://yourcodebook.netlify.app/',
            codeUrl: 'https://github.com/RohitKotian27/mycodebook'
        },
        {
            id: 3,
            src: shopMate,
            demoUrl: 'https://yourshopmate.netlify.app/',
            codeUrl: 'https://github.com/RohitKotian27/shopmate'
        },
        {
            id: 4,
            src: todoList,
            demoUrl: 'https://ticktickgo.netlify.app/',
            codeUrl: 'https://github.com/RohitKotian27/react-todo/'
        },
        {
            id: 5,
            src: randomQuote,
            demoUrl: 'https://rohitkotian27.github.io/Random_Quote_Generator/',
            codeUrl: 'https://github.com/RohitKotian27/RohitKotian27.github.io/tree/master/Random_Quote_Generator'
        },
        {
            id: 6,
            src: tictactoe,
            demoUrl: 'https://playxandzeroes.netlify.app/',
            codeUrl: 'https://github.com/RohitKotian27/tictactoe'
        },
    ]
    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-3xl md:text-4xl font-bold border-b-4 border-gray-500 inline">Portfolio</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, demoUrl, codeUrl }) => (
                        <Card key={id} src={src} demoUrl={demoUrl} codeUrl={codeUrl} />
                    ))}
                </div>
            </div>
        </div>
    )
}