import Document, { Html, Head, Main, NextScript } from 'next/document';
import tw, { styled, css, theme } from 'twin.macro';

import { GA_TRACKING_ID } from '../utils/analytics';

const Body = styled.body([
  tw`overflow-x-hidden`,
  css`
    ::-webkit-scrollbar {
      width: 14px;
    }

    ::-webkit-scrollbar-track {
      ${tw`bg-main-600`};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      ${tw`
        bg-main-400 bg-opacity-50 hover:bg-opacity-100
        border-4 border-solid border-main-600
      `};
    }
  `,
]);

const StyledHtml = styled(Html)`
  scrollbar-width: thin;
  scrollbar-color: ${theme`colors.main.400`} ${theme`colors.main.600`};
`;

class MyDocument extends Document {
  render() {
    return (
      <StyledHtml lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <Body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="https://js.hs-scripts.com/9390117.js"
          />
        </Body>
      </StyledHtml>
    );
  }
}

export default MyDocument;
