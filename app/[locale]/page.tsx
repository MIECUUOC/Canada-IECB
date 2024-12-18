import {useTranslations} from 'next-intl';
import {Metadata} from "next";
import Banner from "@/components/banner";
import MainContent from "@/components/mainContent";
import MainOtherContent from "@/components/mainOtherContent";
import HomeList from "@/components/homeList";
import Partners from "@/components/partners";
import EducationalImpact from "@/components/educationalImpact";

export const metadata: Metadata = {
    title: 'Home - CIEB',
    description: 'Canadian International Education Bureau',
}

export default function Home() {
  const t = useTranslations('home');

  return (
      <main className="flex min-h-screen flex-col bg-white">
          <Banner />
          <MainContent />
          <MainOtherContent />
          <HomeList />
          <Partners />
          <EducationalImpact />
        {/*<h1 className="text-4xl font-bold">*/}
        {/*  {t('title')}*/}
        {/*</h1>*/}
      </main>
  );
}