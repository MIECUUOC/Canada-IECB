'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <footer className="bg-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src="/iecb.png" className="h-8 me-3"
                                 alt="Logo"/>
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">{t("t1")}</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{t("t2")}</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">{t("t3")}</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">{t("t4")}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                {t("t5")}
                            </h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.canada.ca/en.html" target="_blank" rel="noopener noreferrer"
                                       className="hover:underline ">{t("t6")}</a>
                                </li>
                                <li>
                                    <a href="https://www.quebec.ca/en" target="_blank" className="hover:underline">{t("t7")}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{t("t8")}</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">{t("t9")}</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">{t("t10")}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2025
              <a href="/" className="hover:underline">{t("t11")}</a>
              {t("t12")}
          </span>
                </div>
            </div>
        </footer>
    )
}