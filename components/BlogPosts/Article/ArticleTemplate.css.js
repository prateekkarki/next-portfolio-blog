import tw, { theme, css } from 'twin.macro';

export default [
  tw`text-white container mx-auto`,
  css`
    .article-main {
      p,
      pre {
        padding-bottom: 1.5rem;
      }

      ul {
        padding-bottom: 1rem;
        padding-top: 1rem;
        padding-left: 3rem;
      }

      li {
        list-style: inside;
      }

      h1 {
        padding-bottom: 0.5rem;
        padding-top: 1rem;
        font-size: 3rem;
      }
      h5 {
        font-size: 1.1rem;
        font-weight: 500;
      }
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
      pre {
        border-radius: 5px;
        padding: 20px 10px;
        background-color: ${theme`colors.light`};
        overflow: auto hidden;
        margin-top: -1.5rem;
        margin-bottom: 1.5rem;
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
