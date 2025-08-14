import { SEOProps } from '@/types';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

export const defaultSeo: SEOProps = {
  siteName: 'Meet Prateek',
  locale: 'en_US',
  title: 'Prateek Karki | Full-stack web developer',
  description:
    'Prateek Karki is a Full-stack web developer dedicated to providing beautiful and performant experiences.',
  url: siteUrl,
  image: `${siteUrl}/images/og_thumb_me.jpg`,
  twitterUsername: '@PrateekKarki',
  twitterCard: 'summary_large_image',
  type: 'website',
};
