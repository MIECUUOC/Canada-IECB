'use client';
import { useTranslations } from 'next-intl';
import Banner from "@/components/banner";

type Props = {
    params: {
        locale: string;
    };
};

export default function About() {
    const t = useTranslations('about');

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Banner />

            {/* Mission Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        {t('mission.title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                {t('mission.content1')}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {t('mission.content2')}
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {t('mission.values')}
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                                    <span className="text-gray-600">{t('mission.value1')}</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                                    <span className="text-gray-600">{t('mission.value2')}</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                                    <span className="text-gray-600">{t('mission.value3')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        {t('history.title')}
                    </h2>
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/4">
                                <h3 className="text-xl font-semibold text-gray-800">{t('history.phase1.year')}</h3>
                            </div>
                            <div className="md:w-3/4">
                                <p className="text-gray-600 leading-relaxed">{t('history.phase1.content')}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/4">
                                <h3 className="text-xl font-semibold text-gray-800">{t('history.phase2.year')}</h3>
                            </div>
                            <div className="md:w-3/4">
                                <p className="text-gray-600 leading-relaxed">{t('history.phase2.content')}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/4">
                                <h3 className="text-xl font-semibold text-gray-800">{t('history.phase3.year')}</h3>
                            </div>
                            <div className="md:w-3/4">
                                <p className="text-gray-600 leading-relaxed">{t('history.phase3.content')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        {t('team.title')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('team.role1')}</h3>
                            <p className="text-gray-600">{t('team.desc1')}</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('team.role2')}</h3>
                            <p className="text-gray-600">{t('team.desc2')}</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('team.role3')}</h3>
                            <p className="text-gray-600">{t('team.desc3')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}