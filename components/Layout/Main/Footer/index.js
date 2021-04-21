import { useState, useRef } from 'react';
import tw, { styled } from 'twin.macro';

import { IoIosCloseCircle } from 'react-icons/io';
import Modal from 'react-modal';

const StyledModal = styled(Modal)`
  ${tw`bg-mainLight-200 w-11/12 mx-auto overflow-auto rounded-lg p-6`}
  border: 1px solid #ccc;
  overflow: auto;
  height: fit-content;

  &.ReactModal__Content {
    opacity: 0;
    transform: scale(0);
    transition: all 350ms ease-in-out;
    transform-origin: center;
  }

  &.ReactModal__Content--after-open {
    opacity: 1;
    transform: scale(1);
  }

  &.ReactModal__Content--before-close {
    opacity: 0;
    transform: scale(0);
  }
`;

function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const el = useRef(null);
  return (
    <footer
      css={tw`bg-mainLight-100 dark:bg-mainDark-100 
         py-4 px-3 sm:px-0`}
    >
      <div css={tw`bg-mainLight-100 dark:bg-mainDark-100`} />
      <div
        css={tw`container mx-auto text-mainLight-800 dark:text-mainDark-700 px-3`}
        ref={el}
      >
        <StyledModal
          isOpen={modalOpen}
          closeTimeoutMS={350}
          onRequestClose={() => {
            setModalOpen(false);
          }}
          appElement={el.current}
          contentLabel="Resources"
        >
          <div css={tw`flex justify-between`}>
            <h1
              css={tw`font-bold text-2xl text-mainLight-800 dark:text-mainDark-700`}
            >
              Credits
            </h1>
            <button
              type="button"
              css={tw`text-lg`}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              <IoIosCloseCircle
                css={tw`w-8 h-8 text-mainLight-800 dark:text-mainDark-700`}
              />
            </button>
          </div>
          <div css={tw`sm:flex sm:flex-wrap`}>
            <div
              css={tw`mt-8 text-center sm:text-left sm:w-1/2 md:w-1/3 sm:inline-block`}
            >
              <h2
                css={tw`font-bold text-lg text-mainLight-800 dark:text-mainDark-700`}
              >
                Frontend
              </h2>
              <ul>
                <li css={tw`text-mainLight-700`}>
                  <a
                    target="_blank"
                    css={tw`text-primary`}
                    rel="noreferrer"
                    href="https://nextjs.org/docs"
                  >
                    NextJS
                  </a>
                </li>
                <li css={tw`text-mainLight-700`}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    css={tw`text-primary`}
                    href="http://reactjs.org/"
                  >
                    ReactJS
                  </a>
                </li>
                <li css={tw`text-mainLight-700`}>
                  <a
                    target="_blank"
                    css={tw`text-primary`}
                    rel="noreferrer"
                    href="https://tailwindcss.com/"
                  >
                    Tailwind
                  </a>
                </li>
              </ul>
            </div>
            <div
              css={tw`mt-8 text-center sm:text-left sm:w-1/2 md:w-1/3 sm:inline-block`}
            >
              <h2
                css={tw`font-bold text-lg text-mainLight-800 dark:text-mainDark-700`}
              >
                Backend
              </h2>
              <ul>
                <li css={tw`text-mainLight-700`}>
                  <a
                    target="_blank"
                    css={tw`text-primary`}
                    rel="noreferrer"
                    href="https://graphql.org/"
                  >
                    GraphQL
                  </a>
                </li>
                <li css={tw`text-mainLight-700`}>
                  <a
                    target="_blank"
                    css={tw`text-primary`}
                    rel="noreferrer"
                    href="http://strapi.io/"
                  >
                    Strapi
                  </a>
                </li>
                <li css={tw`text-mainLight-700`}>
                  <a
                    target="_blank"
                    css={tw`text-primary`}
                    rel="noreferrer"
                    href="https://www.netlify.com/"
                  >
                    Netlify
                  </a>
                </li>
                <li css={tw`text-mainLight-700`}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    css={tw`text-primary`}
                    href="https://cloudinary.com/"
                  >
                    Cloudinary
                  </a>
                </li>
              </ul>
            </div>
            <div
              css={tw`mt-8 text-center sm:text-left sm:w-1/2 md:w-1/3 sm:inline-block`}
            >
              <h2
                css={tw`font-bold text-lg text-mainLight-800 dark:text-mainDark-700`}
              >
                Graphics
              </h2>
              <ul>
                <li css={tw`text-mainLight-700`}>
                  Programmer illustrations from{' '}
                  <a
                    target="_blank"
                    css={tw`text-primary`}
                    rel="noreferrer"
                    href="https://www.freepik.com/free-vector/colourful-illustration-programmer-working_5483080.htm"
                  >
                    Freepik
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </StyledModal>
        <p>
          Made with ❤️ by{' '}
          <a
            target="_blank"
            rel="noreferrer"
            css={tw`font-semibold text-primary hover:text-secondary`}
            href="https://github.com/prateekkarki/"
          >
            me
          </a>
          . Thanks to these{' '}
          <button
            type="button"
            css={tw`font-semibold text-primary hover:text-secondary`}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            awesome projects
          </button>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
