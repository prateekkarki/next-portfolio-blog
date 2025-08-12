import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import tw, { styled, css, theme } from 'twin.macro';

import { GA_TRACKING_ID } from '../utils/analytics';

const Body = styled.body([
  tw`overflow-x-hidden`,
  css`
    font-family: 'Poppins', sans-serif;
    
    ::-webkit-scrollbar {
      width: 14px;
    }

    ::-webkit-scrollbar-track {
      ${tw`bg-light-600`};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      ${tw`
        bg-light-400 bg-opacity-50 hover:bg-opacity-100
        border-4 border-solid border-light-600
      `};
    }
  `,
]);

const StyledHtml = styled(Html)`
  scrollbar-width: thin;
  scrollbar-color: ${theme`colors.dark.400`} ${theme`colors.dark.600`};
`;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <StyledHtml lang="en">
        <Head />
        <Body>
          <Main />
          <NextScript />
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
        </Body>
      </StyledHtml>
    );
  }
}

export default MyDocument;
