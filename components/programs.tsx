'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function Programs() {
    const t = useTranslations('Programs');
    const programs = [
        {
            name: t('t2'), // "Quality Assurance Framework"
            logo: "/1.png", // 一个代表质量保证的图标
            link: "#" // 暂时不需要外链
        },
        {
            name: t('t3'), // "International Exchange Program"
            logo: "/2.png",
            link: "#"
        },
        {
            name: t('t4'), // "Educational Innovation Hub"
            logo: "/3.png",
            link: "#"
        },
        {
            name: t('t5'), // "Research & Development"
            logo: "/4.png",
            link: "#"
        }
    ];

    return (
        <div className="bg-white w-full min-h-72 flex justify-center items-center py-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
                <div className="flex items-center mb-6">
                    <h3 className="text-2xl text-gray-800 font-bold">{t("t1")}</h3> {/* Key Programs */}
                    <div className="bg-red-800 w-16 h-1 ml-4 mt-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300"
                        >
                            <div className="relative w-60 h-32 mb-4">
                                <Image
                                    src={program.logo}
                                    alt={program.name}
                                    className="object-contain"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    priority={index < 2}
                                />
                            </div>
                            <span className="text-lg text-gray-800 text-center">{program.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}