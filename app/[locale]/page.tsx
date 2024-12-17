import {useTranslations} from 'next-intl';
import {Metadata} from "next";
import Banner from "@/components/banner";
import MainContent from "@/components/mainContent";
import MainOtherContent from "@/components/mainOtherContent";
import HomeBanner from "@/components/homeBanner";
import HomeList from "@/components/homeList";

export const metadata: Metadata = {
    title: 'CIEB',
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
        {/*<h1 className="text-4xl font-bold">*/}
        {/*  {t('title')}*/}
        {/*</h1>*/}
      </main>
  );
}