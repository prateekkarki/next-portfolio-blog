import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import { BigLink } from '@/components/styles';
import { cloudinaryLoader } from '@/utils';
import Image from '@/utils/Image';
import { ProjectCardProps } from '@/types';
import { ProjectContainer, ProjectImageWindow } from './styles';

const ProjectCard = ({
  project,
  isMini = false,
}: ProjectCardProps): ReactElement => {
  const imageUrl = project?.image;
  if (isMini) {
    return (
      <ProjectContainer css={tw`flex flex-row w-full`}>
        <div
          css={tw`w-1/3 h-auto bg-light-200 dark:bg-dark-200 flex items-center justify-center`}
        >
          <ProjectImageWindow backgroundColor={project.backgroundColor}>
            <Image
              src={cloudinaryLoader({
                src: imageUrl,
                width: 300,
              })}
              blurUrl={cloudinaryLoader({
                src: imageUrl,
                width: 300,
                blur: true,
              })}
              alt={project.title}
              title={project.title}
            />
          </ProjectImageWindow>
        </div>
        <div css={tw`w-2/3 p-4`}>
          <h3
            css={tw`text-lg font-bold text-light-800 dark:text-dark-800 mb-1`}
          >
            {project.title}
          </h3>
          <p css={tw`text-light-600 dark:text-dark-600 text-sm mb-2`}>
            {project.description.substring(0, 80)}...
          </p>
          <div css={tw`flex flex-wrap gap-1`}>
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                css={tw`px-2 py-1 bg-light-400 dark:bg-dark-400 text-light-500 dark:text-dark-600  text-xs rounded-full`}
              >
                {tech}
              </span>
            ))}
          </div>
          <div css={tw`flex gap-3 mt-4`}>
            {project.link && (
              <BigLink target="_blank" href={project.link} size="small">
                Live Demo
              </BigLink>
            )}
            {project.github && (
              <BigLink target="_blank" href={project.github} size="small">
                GitHub
              </BigLink>
            )}
            {project.gallery && (
              <BigLink target="_blank" href={project.gallery} size="small">
                Gallery
              </BigLink>
            )}
          </div>
        </div>
      </ProjectContainer>
    );
  }

  return (
    <ProjectContainer>
      <div
        css={tw`h-48 bg-light-200 dark:bg-dark-200 flex items-center justify-center`}
      >
        <ProjectImageWindow backgroundColor={project.backgroundColor}>
          <img
            src={cloudinaryLoader({
              src: imageUrl,
              width: 600,
            })}
            alt={project.title}
            title={project.title}
          />
        </ProjectImageWindow>
      </div>
      <div css={tw`p-6`}>
        <h3 css={tw`text-xl font-bold text-light-800 dark:text-dark-800 mb-2`}>
          {project.title}
        </h3>
        <p css={tw`text-light-600 dark:text-dark-600 mb-4`}>
          {project.description}
        </p>
        <div css={tw`flex flex-wrap gap-2 mb-4`}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              css={tw`px-3 py-1 bg-light-400 dark:bg-dark-400 text-light-500 dark:text-dark-600 text-xs rounded-full`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div css={tw`flex gap-3`}>
          {project.link && (
            <BigLink target="_blank" href={project.link} size="small">
              Live Demo
            </BigLink>
          )}
          {project.github && (
            <BigLink target="_blank" href={project.github} size="small">
              GitHub
            </BigLink>
          )}
          {project.gallery && (
            <BigLink target="_blank" href={project.gallery} size="small">
              Gallery
            </BigLink>
          )}
        </div>
      </div>
    </ProjectContainer>
  );
};

export default ProjectCard;
