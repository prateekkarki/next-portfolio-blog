import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import tw from 'twin.macro';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body css={tw`overflow-x-hidden`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
