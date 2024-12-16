import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    defaultLocale: 'en',
    locales: ['en', 'fr'],
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};