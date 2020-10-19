import tw, { theme, css } from 'twin.macro';

export default [
  tw`text-white container mx-auto`,
  css`
    .article-main {
      a {
        color: ${theme`colors.primary`};
        &:hover {
          color: ${theme`colors.light`};
          text-decoration: underline;
        }
      }
      img {
        max-width: 100%;
        margin: 0 auto;
      }
      code {
        color: ${theme`colors.main.dark`};
        background-color: ${theme`colors.light`};
        padding: 0px 5px;
        border-radius: 5px;
        &.language-js {
          padding: 20px 10px;
          background-color: ${theme`colors.light`};
          display: block;
        }
      }
    }
  `,
];
