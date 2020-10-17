import React from 'react';
import { css } from 'twin.macro';
import Link from 'next/link';

const containerStyles = css`
  color: #000;
  background: #fff;
  min-height: 50vh;
  height: calc(100vh - 108px - 58px - 20px);
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
`;

const innerStyles = css`
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
`;

export default function Custom404() {
  return (
    <div css={containerStyles}>
      <div>
        <h1>404</h1>
        <div css={innerStyles}>
          <h2>This page could not be found.</h2>
          <Link href="/" as="/" passHref>
            <a>Back to Homepage</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
