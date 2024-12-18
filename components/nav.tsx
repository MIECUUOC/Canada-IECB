'use client';

import {useTranslations} from 'next-intl';
import Link from "next/link";

export default function Nav() {
    const t = useTranslations('Nav');
    return (
        <nav className="bg-white border-gray-300 shadow-2xl">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
                <div className="flex flex-wrap justify-between items-center py-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/iecb.png" className="h-8" alt="Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">
                            {t("t1")}
                        </span>
                    </a>

                    <div id="mega-menu-full"
                         className="items-center justify-between font-medium w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="/"
                                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                   aria-current="page">
                                    {t("t2")}
                                </a>
                            </li>
                            <li>
                                <Link href={t("t6")}
                                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                    {t("t3")}
                                </Link>
                            </li>

                            <li>
                                <Link href={t("t5")}
                                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                    {t("t4")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}