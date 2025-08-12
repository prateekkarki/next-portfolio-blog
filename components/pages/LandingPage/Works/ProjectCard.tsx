import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import { ProjectCardProps } from '../../../../types';

const ProjectCard = ({
  project,
  isMini = false,
}: ProjectCardProps): ReactElement => {
  if (isMini) {
    return (
      <div
        css={tw`bg-light-200 dark:bg-dark-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-row w-full`}
      >
        <div
          css={tw`w-1/3 h-32 bg-light-200 dark:bg-dark-200 flex items-center justify-center`}
        >
          <span css={tw`text-light-600 dark:text-dark-600 text-xs`}>
            Project
          </span>
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
                css={tw`px-2 py-1 bg-primary text-white text-xs rounded-full`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      css={tw`bg-light-200 dark:bg-dark-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <div
        css={tw`h-48 bg-light-200 dark:bg-dark-200 flex items-center justify-center`}
      >
        <span css={tw`text-light-600 dark:text-dark-600 text-sm`}>
          Project Image
        </span>
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
              css={tw`px-3 py-1 bg-primary text-white text-xs rounded-full`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div css={tw`flex gap-3`}>
          {project.link && (
            <a
              href={project.link}
              css={tw`px-4 py-2 bg-primary text-white rounded hover:bg-dark-primary transition-colors duration-200`}
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              css={tw`px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors duration-200`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
