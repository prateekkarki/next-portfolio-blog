import tw from 'twin.macro';
import Link from 'next/link';

import { BigLink, Text, Title, Flex } from 'components/styles';
import { useWindowSize, useHasMounted } from 'hooks';
import ProjectCard from './ProjectCard';
import projects from './projects';

const Works = () => {
  const { width } = useWindowSize();
  const hasMounted = useHasMounted();

  return (
    <Flex>
      <div
        css={tw`text-center px-3 md:px-6 text-light-700 py-4 md:w-1/2 md:text-left`}
        data-aos="fade-right"
      >
        <Title>My Works</Title>
        <Text>
          I love building things that solve real-world problems. Here&apos;s a
          showcase of some projects I&apos;ve worked on, ranging from full-stack
          web applications to modern frontend solutions.
        </Text>
        <Text>
          Each project represents a unique challenge and learning experience,
          utilizing different technologies and approaches. I focus on creating
          clean, maintainable code and pixel-perfect user experiences.
        </Text>
        {/* <Link href="/works" passHref>
          <BigLink css={tw`mt-6 mx-auto md:ml-0 hidden md:inline-block`}>
            View all projects
          </BigLink>
        </Link> */}
      </div>

      <div
        css={tw`flex flex-col items-center justify-center gap-4 mt-4 md:mt-0 md:w-1/2 px-3 md:px-6`}
        data-aos="zoom-in-up"
      >
        {hasMounted && (
          <>
            {width < 640 || (width >= 768 && width < 1280) ? (
              <ProjectCard
                project={projects[0]}
                key={`project__${projects[0].id}`}
                isMini={false}
              />
            ) : (
              <>
                {projects.map((project) => (
                  <ProjectCard
                    project={project}
                    key={`project__${project.id}`}
                    isMini
                  />
                ))}
              </>
            )}
            {/* <Link href="/works" passHref>
              <BigLink css={tw`mt-2 inline-block md:hidden`}>
                View all projects
              </BigLink>
            </Link> */}
          </>
        )}
      </div>
    </Flex>
  );
};

export default Works;
