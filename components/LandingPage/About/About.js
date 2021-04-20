import tw from 'twin.macro';
import Link from 'next/link';
import DevOnSofa from './DevOnSofa';
import { BigLink, Text, Title, Flex } from '../../styled';

function About() {
  return (
    <Flex>
      <div
        css={tw`hidden md:flex items-center md:w-1/2 px-3 md:px-6`}
        data-aos="zoom-in-up"
      >
        <DevOnSofa />
      </div>
      <div
        css={tw`px-3 md:px-6 text-center text-main-200 py-4 md:w-1/2 md:text-left`}
        data-aos="fade-left"
      >
        <Title>About Me</Title>
        <Text>
          I&apos;m Prateek Karki, a web developer from Kathmandu, Nepal.
          <br />I enjoy creating things for the internet, whether that be
          websites, applications, games or anything in between. My goal is to
          build products that provide pixel-perfect, performant experiences.
        </Text>
        <Text>
          With my experiences as Solution architect, Senior software engineer
          and Project lead with highly reputed companies, I can think in terms
          of systems architecture, feasibility and risks for any given project.
          I believe in long term relationships with the every client and my
          primarily focus on long term projects.
        </Text>
        <Link href="/about" as="/about" passHref>
          <BigLink css={tw`mt-6 mx-auto md:ml-0`}>Find out more</BigLink>
        </Link>
      </div>
    </Flex>
  );
}

export default About;
