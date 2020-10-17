import React from 'react';
import { ImGithub, ImLinkedin2 } from 'react-icons/im';
import { IoIosMail } from 'react-icons/io';

import tw from 'twin.macro';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div>
      <div css={tw`bg-main-light`}>
        <div css={tw`container mx-auto flex flex-col sm:flex-row`}>
          <div
            css={tw`
              w-full sm:w-1/2 py-6 px-3
              flex flex-col justify-center items-center text-center
              sm:justify-start md:items-start sm:text-left
            `}
          >
            <div
              css={tw`
                flex flex-col 
                justify-center items-center text-center 
                sm:justify-start sm:items-start sm:text-left
              `}
            >
              <h1
                css={tw`
                  font-bold text-white whitespace-no-wrap 
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-huge
                `}
              >
                Get in touch.
              </h1>
              <p css={tw`text-white text-base lg:text-lg`}>
                <span>I love to develop things for the web.</span>
                <span>
                  I have lead projects and teams to build great end-products for
                  my clients.
                </span>
                <span>
                  If you want to get started with a project or just need my
                  help, feel free to contact me.
                </span>
              </p>
              <div css={tw`border-b-4 pb-10 w-48`} />
              <div css={tw`pt-4`}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  css={tw`text-xl text-light hover:text-light `}
                  href="mailto:info@meetprateek.com"
                >
                  info@meetprateek.com
                </a>
              </div>
              <div css={tw`pt-4 flex`}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:info@meetprateek.com"
                  css={tw`
                    mr-4 p-3 text-2xl
                    bg-light hover:bg-primary text-main-dark rounded-full
                  `}
                >
                  <IoIosMail />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/prateekkarki/"
                  css={tw`
                    mr-4 p-3 bg-light hover:bg-primary rounded-full
                    text-2xl text-main-dark 
                  `}
                >
                  <ImGithub />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/prateekkarki/"
                  css={tw`
                    p-3 bg-light hover:bg-primary rounded-full
                    text-2xl text-main-dark 
                  `}
                >
                  <ImLinkedin2 />
                </a>
              </div>
            </div>
          </div>
          <div css={tw`w-full sm:w-1/2 flex flex-col items-center py-6`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
