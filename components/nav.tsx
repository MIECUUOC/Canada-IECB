export default function Nav() {
    return (
        <nav className="bg-white border-gray-300 shadow-2xl">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="./iecb.png" className="h-8" alt="Logo"/>
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">Canada IECB</span>
                </a>

                <div id="mega-menu-full"
                     className="items-center justify-between font-medium w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                        <li>
                            <a href="#"
                               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                               aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Resources</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}