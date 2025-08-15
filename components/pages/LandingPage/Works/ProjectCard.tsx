import React, { ReactElement, useState } from 'react';
import tw from 'twin.macro';
import { BigLink } from '@/components/styles';
import { cloudinaryLoader } from '@/utils';
import Image from '@/utils/Image';
import { Project, ProjectCardProps } from '@/types';
import { ProjectContainer, ProjectImageWindow } from './styles';
import { GalleryModal } from './GalleryModal';

const ProjectButton: React.FC<{
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  isButton?: boolean;
}> = ({ href, onClick, children, isButton = false }) => {
  if (isButton) {
    return (
      <BigLink type="button" onClick={onClick} size="small">
        {children}
      </BigLink>
    );
  }

  return (
    <BigLink target="_blank" href={href || '#'} size="small">
      {children}
    </BigLink>
  );
};

const TechnologyTags: React.FC<{
  technologies: string[];
  maxDisplay?: number;
}> = ({ technologies, maxDisplay }) => {
  const displayTechs = maxDisplay
    ? technologies.slice(0, maxDisplay)
    : technologies;

  return (
    <div css={tw`flex flex-wrap gap-1`}>
      {displayTechs.map((tech) => (
        <span
          key={tech}
          css={tw`px-2 py-1 bg-light-400 dark:bg-dark-400 text-light-500 dark:text-dark-600 text-xs rounded-full`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

const ProjectActions: React.FC<{
  project: Project;
  onGalleryClick: () => void;
  hasGallery: boolean;
}> = ({ project, onGalleryClick, hasGallery }) => (
  <div css={tw`flex gap-3 mt-4`}>
    {project.link && (
      <ProjectButton href={project.link}>Live Site 🡵</ProjectButton>
    )}
    {project.github && (
      <ProjectButton href={project.github}>GitHub 🡵</ProjectButton>
    )}
    {hasGallery && (
      <ProjectButton onClick={onGalleryClick} isButton>
        Gallery ⬔
      </ProjectButton>
    )}
  </div>
);

const ProjectImage: React.FC<{
  src: string;
  alt: string;
  width: number;
  backgroundColor?: string;
}> = ({ src, alt, width, backgroundColor }) => (
  <ProjectImageWindow backgroundColor={backgroundColor}>
    <Image
      src={cloudinaryLoader({ src, width })}
      blurUrl={cloudinaryLoader({ src, width, blur: true })}
      alt={alt}
      title={alt}
    />
  </ProjectImageWindow>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isMini = false,
}): ReactElement => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const galleryImages = project.gallery ?? [];

  const hasGallery = galleryImages.length > 0;

  const handleGalleryClick = () => {
    if (hasGallery) {
      setIsGalleryOpen(true);
    }
  };

  const renderGalleryModal = () => {
    if (!hasGallery) return null;

    return (
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={galleryImages}
        projectTitle={project.title}
      />
    );
  };

  if (isMini) {
    return (
      <>
        <ProjectContainer css={tw`flex flex-row w-full`}>
          <div
            css={tw`w-1/3 h-auto bg-light-200 dark:bg-dark-200 flex items-center justify-center`}
          >
            <ProjectImage
              src={project.image.src}
              alt={project.title}
              width={300}
              backgroundColor={project.backgroundColor}
            />
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
            <TechnologyTags
              technologies={project.technologies}
              maxDisplay={3}
            />
            <ProjectActions
              hasGallery={hasGallery}
              project={project}
              onGalleryClick={handleGalleryClick}
            />
          </div>
        </ProjectContainer>
        {renderGalleryModal()}
      </>
    );
  }

  return (
    <>
      <ProjectContainer>
        <div
          css={tw`h-48 bg-light-200 dark:bg-dark-200 flex items-center justify-center`}
        >
          <ProjectImage
            src={project.image.src}
            alt={project.title}
            width={600}
            backgroundColor={project.backgroundColor}
          />
        </div>
        <div css={tw`p-6`}>
          <h3
            css={tw`text-xl font-bold text-light-800 dark:text-dark-800 mb-2`}
          >
            {project.title}
          </h3>
          <p css={tw`text-light-600 dark:text-dark-600 mb-4`}>
            {project.description}
          </p>
          <TechnologyTags technologies={project.technologies} />
          <ProjectActions
            hasGallery={hasGallery}
            project={project}
            onGalleryClick={handleGalleryClick}
          />
        </div>
      </ProjectContainer>
      {renderGalleryModal()}
    </>
  );
};

export default ProjectCard;
