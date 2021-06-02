import { styled, css, theme } from 'twin.macro';
import Link from 'next/link';
import Head from 'next/head';

const Container = styled.div(css`
  color: #000;
  background: #fff;
  min-height: 50vh;
  height: calc(100vh - ${theme`spacing.header`} - ${theme`spacing.footer`});
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    display: inline-block;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    margin: 0;
    margin-right: 20px;
    padding: 10px 23px 10px 0;
    font-size: 24px;
    font-weight: 500;
    vertical-align: top;
  }
`);

const Inner = styled.div(css`
  display: inline-block;
  text-align: left;
  line-height: 49px;
  height: 49px;
  vertical-align: middle;

  h2 {
    font-size: 14px;
    font-weight: normal;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }
`);

export default function Custom404() {
  return (
    <Container>
      <Head>
        <title>404 | Page not found</title>
        <meta
          name="description"
          content="This page does not exist please check your link."
        />
        <meta
          property="og:image"
          content="https://meetprateek.com/images/logo/3x/logo.png"
        />
      </Head>
      <div>
        <h1>404</h1>
        <Inner>
          <h2>This page could not be found.</h2>
          <Link href="/" as="/" passHref>
            <a href="/">Back to Homepage</a>
          </Link>
        </Inner>
      </div>
    </Container>
  );
}
