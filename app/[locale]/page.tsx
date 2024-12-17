import {useTranslations} from 'next-intl';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CIEB',
    description: 'Canadian International Education Bureau',
}

export default function Home() {
  const t = useTranslations('home');

  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">
          {t('title')}
        </h1>
      </main>
  );
}