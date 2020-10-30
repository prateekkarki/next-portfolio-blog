import Head from 'next/head';

function MetaHead() {
  return (
    <Head>
      <title>
        Prateek Karki - Full-stack web developer from Kathmandu, Nepal
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Prateek Karki is a full-stack web developer dedicated
          to providing highly performant solutions on the internet.
          Developing in ever emerging technologies like react JS and Node JS,
          he will suggest and provide
          the best solutions for any problems his clients might have."
      />
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
      <meta name="theme-color" content="#ffffff" />

      <meta
        name="keywords"
        content="Web Development, Web Developer, Javascript Developer, Freelancer"
      />
      <link rel="stylesheet" href="/css/ReactToastify.min.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}

export default MetaHead;
