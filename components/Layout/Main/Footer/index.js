import { useState, useRef } from 'react';
import tw, { styled } from 'twin.macro';
import { IoIosCloseCircle } from 'react-icons/io';
import Modal from 'react-modal';
import { FooterLink, Title } from './styles';

const StyledModal = styled(Modal)`
  ${tw`bg-light-200 dark:bg-dark-200 w-11/12 max-w-xl mx-auto overflow-auto rounded-lg p-6`}
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
      css={tw`bg-light-100 dark:bg-dark-100 
         py-4 px-3 sm:px-0`}
    >
      <div css={tw`bg-light-100 dark:bg-dark-100`} />
      <div
        css={tw`container mx-auto text-light-800 dark:text-dark-700 px-3`}
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
            <h1 css={tw`font-bold text-2xl text-light-800 dark:text-dark-700`}>
              Tools and Resources
            </h1>
            <button
              type="button"
              css={tw`text-lg`}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              <IoIosCloseCircle
                css={tw`w-8 h-8 text-light-800 dark:text-dark-700`}
              />
            </button>
          </div>
          <div css={tw`sm:flex sm:flex-wrap`}>
            <div
              css={tw`mt-8 text-center sm:text-left sm:w-1/2 md:w-1/3 sm:inline-block`}
            >
              <Title>Frontend</Title>
              <ul>
                <FooterLink label="NextJS" href="https://nextjs.org/" />
                <FooterLink label="ReactJS" href="https://reactjs.org/" />
                <FooterLink label="Tailwind" href="https://tailwindcss.com/" />
              </ul>
            </div>
            <div
              css={tw`mt-8 text-center sm:text-left sm:w-1/2 md:w-1/3 sm:inline-block`}
            >
              <Title>Deployment</Title>
              <ul>
                <FooterLink label="GraphQL" href="https://graphql.org/" />

                <FooterLink label="Vercel" href="https://vercel.com/" />
                <FooterLink label="Cloudinary" href="https://cloudinary.com/" />
              </ul>
            </div>
            <div
              css={tw`mt-8 text-center sm:text-left sm:w-1/2 md:w-1/3 sm:inline-block`}
            >
              <Title>Graphics</Title>
              <ul>
                <FooterLink
                  label="Freepik"
                  href="https://www.freepik.com/free-vector/colourful-illustration-programmer-working_5483080.htm"
                />
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
