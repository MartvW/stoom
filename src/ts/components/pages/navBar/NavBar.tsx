import { appPath } from "@routes/app";

/**
 * The navigation bar on the top of the page
 * @returns {JSX.Element} The navigation bar
 */

const NavBar = () => (
    <nav className="fixed top-0 w-full z-30 py-1 bg-navbar text-navbar shadow-lg">
        <div className="w-full flex items-center gap-5 mt-0 px-6 py-2">
            <h1 className='font-bold text-xl'>Stoom</h1>
            <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
                        <li><a className="inline-block no-underline hover:scale-110 duration-300 ease-in-out font-medium text-lg py-2 px-4 lg:-ml-2" href={appPath.home}>All games</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </nav>
);

export default NavBar;