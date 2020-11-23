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
      h2 {
        padding-top: 1.5rem;
        margin-bottom: 1rem;
        font-size: 2.5rem;
      }
      h3 {
        padding-top: 1rem;
        margin-bottom: 0.5rem;
        font-size: 2.25rem;
      }
      h4 {
        padding-top: 1rem;
        margin-bottom: 0.25rem;
        font-size: 1.75rem;
      }
      h5 {
        font-size: 1.25rem;
        font-weight: 500;
      }
      h6 {
        font-size: 1.1rem;
        font-weight: 500;
      }
      a {
        color: ${theme`colors.primary`};
        &:hover {
          color: ${theme`colors.main.100`};
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
        background-color: ${theme`colors.main.100`};
        overflow: auto hidden;
        margin-bottom: 1.5rem;
      }
      code {
        color: ${theme`colors.main.800`};
        background-color: ${theme`colors.main.100`};
        padding: 0px 0.375rem;
        border-radius: 0.375rem;
        &.language-js {
          padding: 1.25rem 0.75rem;
          background-color: ${theme`colors.main.100`};
          display: block;
        }
      }
    }
  `,
];
