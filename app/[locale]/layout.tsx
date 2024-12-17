import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Nav from "@/components/nav";
import './globals.css'
import Footer from "@/components/footer";

export function generateStaticParams() {
    return [{locale: 'en'}, {locale: 'fr'}];
}

export default function LocaleLayout({
                                         children,
                                         params
                                     }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = require(`../../messages/${params.locale}.json`);

    return (
        <html lang={params.locale}>
        <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
            <Nav/>
            {children}
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}