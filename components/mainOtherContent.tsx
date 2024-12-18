'use client';

import { useTranslations } from 'next-intl';

export default function MainOtherContent() {
    const t = useTranslations('MainOtherContent');
    return (
        <div className="bg-white h-full w-full flex justify-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24 text-gray-800 text-xl py-3">
                {t("t1")}
            </div>
        </div>
    )
}