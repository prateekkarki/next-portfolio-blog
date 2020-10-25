import React from 'react';

import tw from 'twin.macro';
import DevOnSofa from './DevOnSofa';

function About() {
  return (
    <div>
      <div css={tw`block md:flex`}>
        <div
          css={tw`hidden md:flex items-center md:w-1/2 px-3 md:px-6`}
          data-aos="zoom-in-up"
        >
          <DevOnSofa />
        </div>
        <div
          css={tw`text-center text-light py-4 md:w-1/2 md:text-left`}
          data-aos="fade-left"
        >
          <h1
            css={tw`
              px-3 md:px-6 font-bold text-white
              whitespace-no-wrap text-3xl 
              sm:text-4xl md:text-5xl lg:text-6xl xl:text-huge
            `}
          >
            About Me
          </h1>
          <p css={tw`px-3 md:px-6 text-white text-sm md:text-base lg:text-lg`}>
            I&apos;m Prateek Karki, a web developer from Kathmandu, Nepal.
            <br />I enjoy creating things that live on the internet, whether
            that be websites, applications, or anything in between. My goal is
            to build products that provide pixel-perfect, performant
            experiences.
          </p>
          <p
            css={tw`mt-4 px-3 md:px-6 text-white text-sm md:text-base lg:text-lg`}
          >
            With my experiences as Solution architect, Senior software engineer
            and Project lead with highly reputed companies, I can think in terms
            of systems architecture, feasibility and risks for any given
            project. I believe in long term relationships with the every client
            and my primarily focus on long term projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
