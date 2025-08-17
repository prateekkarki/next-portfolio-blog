import React, { ReactElement, useState, useMemo } from 'react';
import tw from 'twin.macro';

import TitleBlock from 'components/Common/TitleBlock';
import { Container, MainBg } from 'components/styles';
import { MetaHead } from 'components';
import { defaultSeo } from 'constants/index';
import { projects } from 'content/projects';
import ProjectCard from 'components/pages/LandingPage/Works/ProjectCard';

function Works(): ReactElement {
  const [selectedTechnology, setSelectedTechnology] = useState<string>('');

  const seo = {
    ...defaultSeo,
    title: 'My Works | Prateek Karki',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/works`,
  };

  // Get all unique technologies from projects sorted by frequency
  const allTechnologies = useMemo(() => {
    const techCounts = new Map<string, number>();

    // Count occurrences of each technology
    projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        techCounts.set(tech, (techCounts.get(tech) || 0) + 1);
      });
    });

    return Array.from(techCounts.entries())
      .sort(([techA, countA], [techB, countB]) => {
        if (countB !== countA) {
          return countB - countA; // Sort by frequency descending
        }
        return techA.localeCompare(techB); // Sort alphabetically for ties
      })
      .map(([tech]) => tech);
  }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesTechnology =
          selectedTechnology === '' ||
          project.technologies.includes(selectedTechnology);

        return matchesTechnology;
      }),
    [selectedTechnology]
  );

  return (
    <>
      <MetaHead seo={seo} />
      <TitleBlock
        title="My Works"
        subtitle="A showcase of my projects and achievements"
      />
      <MainBg css={tw`bg-light-400 dark:bg-dark-400 pb-6 px-6 pt-6`}>
        <Container>
          {/* Technology Filter Section */}
          <div css={tw`mb-8`}>
            <div css={tw`flex justify-start mb-6`}>
              {/* Technology Filter */}
              <div css={tw`w-64`}>
                <select
                  value={selectedTechnology}
                  onChange={(e) => setSelectedTechnology(e.target.value)}
                  css={tw`w-full px-4 py-3 border border-light-200 dark:border-dark-200 rounded-lg bg-light-100 dark:bg-dark-100 text-light-800 dark:text-dark-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                >
                  <option value="">All Technologies</option>
                  {allTechnologies.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <p css={tw`text-light-600 dark:text-dark-600 text-sm`}>
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div css={tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isMini={false}
                />
              ))}
            </div>
          ) : (
            <div css={tw`text-center py-12`}>
              <p css={tw`text-light-600 dark:text-dark-600 text-lg`}>
                No projects found matching your criteria.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedTechnology('');
                }}
                css={tw`mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-200`}
              >
                Clear Filters
              </button>
            </div>
          )}
        </Container>
      </MainBg>
    </>
  );
}

export default Works;
