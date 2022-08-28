import { ImGithub, ImLinkedin2 } from 'react-icons/im';
import { IoIosMail } from 'react-icons/io';
import tw, { styled } from 'twin.macro';

import { Title, Text } from 'components/styles';
import ContactForm from '../ContactForm';

const Links = styled.a(({ lastItem }) => [
  tw`p-3 bg-light-700 dark:bg-dark-700 rounded-full mr-4
    text-light-100 dark:text-dark-100  text-2xl 
      hover:(bg-primary text-light-100) 
  `,
  lastItem && tw`mr-0`,
]);

const ContactLinks = ({ href, children, lastItem }) => (
  <Links target="_blank" rel="noreferrer" href={href} lastItem={lastItem}>
    {children}
  </Links>
);

function Contact() {
  return (
    <div
      css={tw`container mx-auto flex flex-col-reverse sm:flex-row overflow-hidden`}
    >
      <div
        css={tw`w-full sm:w-1/2 flex flex-col justify-center items-center lg:items-start py-6`}
      >
        <ContactForm />
      </div>
      <div
        css={tw`
          w-full sm:w-1/2 py-6 px-3
          flex flex-col justify-center items-center text-center sm:text-left sm:justify-start md:items-start
        `}
      >
        <div
          css={tw`
            flex flex-col justify-center items-center text-center 
            sm:text-left sm:justify-start sm:items-start
          `}
        >
          <Title>Get in touch</Title>
          <Text>
            I love to develop things for the web. I have lead projects and teams
            to build great end-products for my clients. If you want to get
            started with a project or just need my help, feel free to contact
            me.
          </Text>
          <div
            css={tw`border-b-4 pb-10 w-48 border-light-700 dark:border-dark-700`}
          />
          <div css={tw`pt-4`}>
            <a
              target="_blank"
              rel="noreferrer"
              css={tw`text-xl text-light-700 dark:text-dark-700 hover:text-primary`}
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
  );
}

export default Contact;
