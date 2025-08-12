import React from 'react';
import tw from 'twin.macro';
import { useState } from 'react';
import Link from 'next/link';

import { BigLink, Text, Title, Flex } from 'components/styles';

const Skills = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>('frontend');

  const skillCategories = {
    frontend: {
      label: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    backend: {
      label: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Laravel', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    database: {
      label: 'Database & DevOps',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Git', level: 90 },
        { name: 'Redis', level: 70 },
      ],
    },
  };

  const tabs = Object.keys(skillCategories);

  return (
    <Flex css={tw`flex flex-col-reverse sm:flex-row `}>
      <div
        css={tw`flex flex-col items-center justify-center gap-4 mt-4 md:mt-0 md:w-1/2 px-3 md:px-6`}
        data-aos="zoom-in-up"
      >
        <div
          css={tw`flex bg-light-200 dark:bg-dark-200 rounded-lg p-1 mb-6 w-full max-w-md`}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              css={[
                tw`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors duration-200`,
                activeTab === tab
                  ? tw`bg-primary text-white`
                  : tw`text-light-600 dark:text-dark-600 hover:text-light-800 dark:hover:text-dark-800`,
              ]}
              onClick={() => setActiveTab(tab)}
            >
              {skillCategories[tab].label}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div css={tw`w-full max-w-md`}>
          <div css={tw`space-y-4`}>
            {skillCategories[activeTab].skills.map((skill, index) => (
              <div
                key={skill.name}
                css={tw`space-y-2`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div css={tw`flex justify-between items-center`}>
                  <span css={tw`font-medium text-light-700 dark:text-dark-700`}>
                    {skill.name}
                  </span>
                  <span css={tw`text-sm text-primary font-semibold`}>
                    {skill.level}%
                  </span>
                </div>
                <div
                  css={tw`w-full bg-light-200 dark:bg-dark-200 rounded-full h-2`}
                >
                  <div
                    css={tw`bg-primary h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Learning Technologies */}
        <div css={tw`mt-8 w-full max-w-md`}>
          <p
            css={tw`text-light-600 dark:text-dark-600 mb-4 text-center text-sm`}
          >
            Currently exploring
          </p>
          <div css={tw`flex flex-wrap justify-center gap-2`}>
            {['GraphQL', 'Kubernetes', 'Machine Learning', 'Blockchain'].map(
              (tech) => (
                <span
                  key={tech}
                  css={tw`px-3 py-1 bg-light-200 dark:bg-dark-200 text-light-700 dark:text-dark-700 rounded-full text-xs font-medium`}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div
        css={tw`text-center px-3 md:px-6 text-light-700 py-4 md:w-1/2 sm:text-left`}
        data-aos="fade-left"
      >
        <Title css={tw`whitespace-normal`}>Skills & Expertise</Title>
        <Text>
          With over 10 years of experience in web development, I&apos;ve built a
          strong foundation across the full technology stack. From crafting
          pixel-perfect user interfaces to architecting scalable backend
          systems.
        </Text>
        <Text>
          I believe in continuous learning and staying updated with the latest
          technologies. Each project is an opportunity to refine existing skills
          and explore new tools that can solve problems more efficiently.
        </Text>
      </div>
    </Flex>
  );
};

export default Skills;
