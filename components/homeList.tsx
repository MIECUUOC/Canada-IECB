'use client';

import { useTranslations } from 'next-intl';

export default function HomeList() {
    const t = useTranslations('HomeList');
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="w-full">
                        <img className="object-cover object-center w-full h-48 rounded-lg"
                             src="./c001.png"
                             alt="Image"/>

                        <div className="mt-2">
                            <h3 className="text-lg font-medium text-gray-700 text-left underline">{t("t1")}</h3>
                            <span className="mt-1 font-medium text-gray-600 text-left block">
                               {t("t2")}
                            </span>
                        </div>
                    </div>

                    <div className="w-full">
                        <img className="object-cover object-center w-full h-48 rounded-lg"
                             src="./c002.png"
                             alt="Image"/>

                        <div className="mt-2">
                            <h3 className="text-lg font-medium text-gray-700 text-left underline">{t("t3")}</h3>
                            <span className="mt-1 font-medium text-gray-600 text-left block">
                                {t("t4")}
                            </span>
                        </div>
                    </div>

                    <div className="w-full">
                        <img className="object-cover object-center w-full h-48 rounded-lg"
                             src="./c003.png"
                             alt="Image"/>

                        <div className="mt-2">
                            <h3 className="text-lg font-medium text-gray-700 text-left underline">{t("t5")}</h3>
                            <span className="mt-1 font-medium text-gray-600 text-left block">
                                {t("t6")}
                            </span>
                        </div>
                    </div>

                    <div className="w-full">
                        <img className="object-cover object-center w-full h-48 rounded-lg"
                             src="./c004.png"
                             alt="Image"/>

                        <div className="mt-2">
                            <h3 className="text-lg font-medium text-gray-700 text-left underline">{t("t7")}</h3>
                            <span className="mt-1 font-medium text-gray-600 text-left block">
                                {t("t8")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}