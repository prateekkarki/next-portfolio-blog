import React, { ReactElement } from 'react';
import tw, { styled, css, theme } from 'twin.macro';
import { Link as TextLink } from 'components/styles';
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

export default function Custom404(): ReactElement {
  return (
    <Container tw="bg-light-400 dark:bg-dark-400">
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
        <h1 tw="text-light-700 dark:text-dark-700 border-r-2 border-dark-100 dark:border-light-100">
          404
        </h1>
        <Inner>
          <h2 tw="text-light-700 dark:text-dark-700">
            This page could not be found.
          </h2>
          <Link href="/" passHref>
            <TextLink href="/">Back to Homepage</TextLink>
          </Link>
        </Inner>
      </div>
    </Container>
  );
}
