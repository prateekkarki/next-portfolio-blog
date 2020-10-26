import React from 'react';
import { ImGithub, ImLinkedin2 } from 'react-icons/im';
import { IoIosMail } from 'react-icons/io';
import tw, { styled } from 'twin.macro';

import ContactForm from './ContactForm';
import { Title } from '../../styled';

const Links = styled.a(({ lastItem }) => [
  tw`p-3 bg-light text-main-dark hover:(bg-primary text-light) rounded-full text-2xl mr-4`,
  lastItem && tw`mr-0`,
]);

const ContactLinks = ({ href, children, lastItem }) => (
  <Links target="_blank" rel="noreferrer" href={href} lastItem={lastItem}>
    {children}
  </Links>
);

function Contact() {
  return (
    <div>
      <div css={tw`bg-main-light`}>
        <div css={tw`container mx-auto flex flex-col sm:flex-row`}>
          <div
            css={tw`w-full sm:w-1/2 flex flex-col justify-center items-center lg:items-start py-6`}
            data-aos="zoom-out-down"
          >
            <ContactForm />
          </div>
          <div
            css={tw`
              w-full sm:w-1/2 py-6 px-3
              flex flex-col justify-center items-center text-center
              sm:justify-start md:items-start sm:text-left
            `}
            data-aos="zoom-in-up"
          >
            <div
              css={tw`
                flex flex-col 
                justify-center items-center text-center 
                sm:justify-start sm:items-start sm:text-left
              `}
            >
              <Title>Get in touch.</Title>
              <p css={tw`text-white text-base lg:text-lg`}>
                <span>I love to develop things for the web.</span>{' '}
                <span>
                  I have lead projects and teams to build great end-products for
                  my clients.
                </span>{' '}
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
                  css={tw`text-xl text-light hover:text-primary`}
                  href="mailto:info@meetprateek.com"
                >
                  info@meetprateek.com
                </a>
              </div>
              <div css={tw`pt-4 flex`}>
                <ContactLinks href="mailto:info@meetprateek.com">
                  <IoIosMail />
                </ContactLinks>
                <ContactLinks href="https://github.com/prateekkarki/">
                  <ImGithub />
                </ContactLinks>
                <ContactLinks href="https://www.linkedin.com/in/prateekkarki/">
                  <ImLinkedin2 />
                </ContactLinks>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
