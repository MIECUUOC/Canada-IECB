import {Metadata} from "next";
import Banner from "@/components/banner";
import MainContent from "@/components/mainContent";
import MainOtherContent from "@/components/mainOtherContent";
import HomeList from "@/components/homeList";
import EducationalImpact from "@/components/educationalImpact";
import { setRequestLocale } from 'next-intl/server';
import Programs from "@/components/programs";

export const metadata: Metadata = {
    title: 'Home - CIEB',
    description: 'Canadian International Education Bureau',
}

type Props = {
    params: {
        locale: string;
    };
};

export default async function Home({ params: { locale } }: Props) {
    setRequestLocale(locale);

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Banner />
            <MainContent />
            <MainOtherContent />
            <HomeList />
            <Programs />
            <EducationalImpact />
        </main>
    );
}