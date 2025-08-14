import React, { ReactElement } from 'react';
import tw, { styled } from 'twin.macro';
import {
  FaCode,
  FaRocket,
  FaUsers,
  FaGraduationCap,
  FaGlobe,
  FaDatabase,
} from 'react-icons/fa';
import {
  AboutSection,
  AboutGrid,
  AboutContent,
  AboutTitle,
  AboutText,
  TechStack,
  TechTitle,
  TechList,
  TechItem,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillTitle,
  SkillDescription,
} from './styles';

function About(): ReactElement {
  return (
    <AboutSection>
      <div tw="bg-light-300 dark:bg-dark-300 px-6 py-6">
        <AboutGrid>
          <AboutContent>
            <AboutTitle>Hello, I&apos;m Prateek Karki</AboutTitle>
            <AboutText>
              I&apos;m a passionate Full Stack Developer and Solution Architect
              with over 10 years of experience building innovative web
              applications and digital solutions. My journey in technology began
              with a Bachelor&apos;s in Computer Science and Information
              Technology from Tribhuvan University.
            </AboutText>
            <AboutText>
              Throughout my career, I&apos;ve had the privilege of working with
              diverse teams and technologies, from startups to established
              companies. I specialize in modern web technologies including
              React, Node.js, Laravel, Magento, and cloud platforms, always
              focusing on delivering scalable, user-centric solutions.
            </AboutText>
            <AboutText>
              I&apos;ve led development teams, mentored junior developers, and
              implemented agile methodologies to improve development processes.
              My experience spans from custom CMS development to educational
              technology platforms, always with a focus on innovation and best
              practices.
            </AboutText>
          </AboutContent>

          <div>
            <SkillsGrid>
              <SkillCard>
                <SkillIcon>
                  <FaCode />
                </SkillIcon>
                <SkillTitle>Full Stack</SkillTitle>
                <SkillDescription>End-to-end development</SkillDescription>
              </SkillCard>

              <SkillCard>
                <SkillIcon>
                  <FaRocket />
                </SkillIcon>
                <SkillTitle>Solution Architecture</SkillTitle>
                <SkillDescription>System design & planning</SkillDescription>
              </SkillCard>

              <SkillCard>
                <SkillIcon>
                  <FaUsers />
                </SkillIcon>
                <SkillTitle>Team Leadership</SkillTitle>
                <SkillDescription>Mentoring & collaboration</SkillDescription>
              </SkillCard>

              <SkillCard>
                <SkillIcon>
                  <FaGraduationCap />
                </SkillIcon>
                <SkillTitle>Continuous Learning</SkillTitle>
                <SkillDescription>Always growing</SkillDescription>
              </SkillCard>

              <SkillCard>
                <SkillIcon>
                  <FaGlobe />
                </SkillIcon>
                <SkillTitle>Global Experience</SkillTitle>
                <SkillDescription>International projects</SkillDescription>
              </SkillCard>

              <SkillCard>
                <SkillIcon>
                  <FaDatabase />
                </SkillIcon>
                <SkillTitle>Database Design</SkillTitle>
                <SkillDescription>Data architecture</SkillDescription>
              </SkillCard>
            </SkillsGrid>
            <TechStack>
              <TechTitle>Technologies I Work With</TechTitle>
              <TechList>
                <TechItem>React.js</TechItem>
                <TechItem>Node.js</TechItem>
                <TechItem>Laravel</TechItem>
                <TechItem>Magento</TechItem>
                <TechItem>PHP</TechItem>
                <TechItem>JavaScript</TechItem>
                <TechItem>PostgreSQL</TechItem>
                <TechItem>MySQL</TechItem>
                <TechItem>MongoDB</TechItem>
                <TechItem>Docker</TechItem>
                <TechItem>Git</TechItem>
                <TechItem>Agile</TechItem>
              </TechList>
            </TechStack>
          </div>
        </AboutGrid>
      </div>
    </AboutSection>
  );
}

export default About;
