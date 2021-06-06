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
        font-weight: 700;
        color: #0b88cd;
        &:hover {
          color: ${theme`colors.light.600`};
        }
      }
      img {
        max-width: 100%;
        margin: 0 auto;
      }
      pre {
        border-radius: 0.375rem;
      }
      code {
        border-radius: 0.375rem;
      }
        table {
          display: table;
          border: 1px solid ${theme`colors.black`};
          td{
            padding: .5rem 1rem;
            border: 1px solid ${theme`colors.black`};
          }
          thead {
            background-color: ${theme`colors.light.400`};
            th{
              padding: 1rem 1rem;
              border: 1px solid ${theme`colors.black`};
            }
          }
          tbody {
            background-color: ${theme`colors.gray.300`};
          }
        }
    }
    
    .dark &{
      .article-main {
        h1 {
          border-bottom: 0.25rem solid ${theme`colors.dark.100`};
        }
        a {
          color: ${theme`colors.dark.600`};
          &:hover {
            color: ${theme`colors.dark.700`};
          }
        }

        table {
          display: table;
          border: 1px solid ${theme`colors.white`};
          td{
            padding: .5rem 1rem;
            border: 1px solid ${theme`colors.white`};
          }
          thead {
            background-color: ${theme`colors.dark.500`};
            th{
              padding: 1rem 1rem;
              border: 1px solid ${theme`colors.white`};
            }
          }
          tbody {
            background-color: ${theme`colors.dark.400`};
          }
        }
      }
    }
  `,
];
