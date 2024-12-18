'use client';

import { useTranslations } from 'next-intl';

export default function Banner() {
    const t = useTranslations('Banner');
    return (
        <div className="w-full h-52 bg-white flex items-center" style={{ backgroundImage: `url(${'/bkg.jpg'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
                <div className="bg-gray-800/80 py-6 h-3/4 w-full md:w-2/5 flex justify-center text-white flex-col">
                    <h1 className="text-4xl font-bold text-white ml-3">
                        {t("t1")}
                    </h1>
                    <div className="bg-red-800 w-20 h-2 ml-3 mb-3 mt-1"></div>
                    <span className="ml-3 text-xl">{t("t2")}</span>
                </div>
            </div>
        </div>
    )
}