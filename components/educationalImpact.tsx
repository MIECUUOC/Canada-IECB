'use client';

import { useTranslations } from 'next-intl';

export default function EducationalImpact() {
    const t = useTranslations('EducationalImpact');
    return (
        <div className="bg-gray-50 w-full flex justify-center py-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
                <div className="flex items-center mb-8">
                    <h3 className="text-2xl text-gray-800 font-bold">{t("t1")}</h3>
                    <div className="bg-red-800 w-16 h-1 ml-4 mt-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
                    <div className="space-y-4">
                        <p className="text-xl leading-relaxed">
                            {t("t2")}
                        </p>
                        <p className="text-xl leading-relaxed">
                            {t("t3")}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <p className="text-xl leading-relaxed">
                            {t("t4")}
                        </p>
                        <p className="text-xl leading-relaxed">
                            {t("t5")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}