'use client';

import { useTranslations } from 'next-intl';
import Link from "next/link";

export default function MainContent() {
    const t = useTranslations('MainContent');
    return(
        <div className="bg-gray-100 w-full min-h-36 flex justify-center items-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
                <h3 className="text-2xl text-gray-800 font-bold mb-6">{t("t1")}</h3>
                <div className="flex items-center flex-wrap gap-6">
                    <Link href="/about" className="text-2xl text-blue-950 underline">{t("t2")}</Link>
                    <Link href="/resources" className="text-2xl text-blue-950 underline">{t("t3")}</Link>
                    <a href="https://www.canada.ca/en.html" target="_blank" className="text-2xl text-blue-950 underline">{t("t4")}</a>
                    <a href="https://www.canada.ca/en/services/jobs.html" target="_blank" className="text-2xl text-blue-950 underline">{t("t5")}</a>
                    <a href="https://www.canada.ca/en/services/health.html" target="_blank" className="text-2xl text-blue-950 underline">{t("t6")}</a>
                    <a href="https://www.canada.ca/en/services/taxes.html" target="_blank" className="text-2xl text-blue-950 underline">{t("t7")}</a>
                    <a href="https://www.canada.ca/en/services/finance.html" target="_blank" className="text-2xl text-blue-950 underline">{t("t8")}</a>
                    <a href="https://www.canada.ca/en/services/business.html" target="_blank" className="text-2xl text-blue-950 underline">{t("t9")}</a>
                </div>
            </div>
        </div>
    )
}