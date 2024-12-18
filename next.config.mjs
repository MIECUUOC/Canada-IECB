import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const config = {
    output: 'export',
    images: {
        unoptimized: true
    }
};

export default withNextIntl(config);