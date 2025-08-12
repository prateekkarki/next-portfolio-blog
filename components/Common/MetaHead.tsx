import Head from 'next/head';
import { MetaHeadProps } from '../../types';

function MetaHead({ seo = {} }: MetaHeadProps): JSX.Element {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/logo/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/logo/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/logo/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#da532c" />

      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:locale" content={seo.locale} />
      <meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:site" content={seo.twitterUsername} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta property="og:type" content={seo.type} />
      {seo.article ? (
        <>
          <meta name="keywords" content={seo.article.tags} />
          <meta name="author" content="Prateek Karki" />
          <meta property="og:type" content="article" />
          <meta property="og:article:author" content="Prateek Karki" />
          <meta
            property="og:article:published_time"
            content={seo.article.published_time}
          />
          <meta
            property="og:article:modified_time"
            content={seo.article.modified_time}
          />
          <meta property="og:article:section" content="Technology" />
          <meta property="og:article:tag" content={seo.article.tags} />
        </>
      ) : (
        <meta property="og:type" content={seo.type} />
      )}
    </Head>
  );
}

export default MetaHead;
