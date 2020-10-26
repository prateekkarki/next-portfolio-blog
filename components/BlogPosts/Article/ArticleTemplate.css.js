import { theme, css } from 'twin.macro';

export default [
  css`
    .article-main {
      padding-top: 1.5rem;
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
        padding-top: 2rem;
        margin-bottom: 1rem;
        font-size: 3rem;
        border-bottom: 0.25rem solid ${theme`colors.white`};
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
        border-radius: 0.375rem;
        padding: 1.25rem 0.75rem;
        background-color: ${theme`colors.light`};
        overflow: auto hidden;
        margin-bottom: 1.5rem;
      }
      code {
        color: ${theme`colors.main.dark`};
        background-color: ${theme`colors.light`};
        padding: 0px 0.375rem;
        border-radius: 0.375rem;
        &.language-js {
          padding: 1.25rem 0.75rem;
          background-color: ${theme`colors.light`};
          display: block;
        }
      }
    }
  `,
];
