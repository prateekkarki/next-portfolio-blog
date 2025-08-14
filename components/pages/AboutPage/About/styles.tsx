import tw, { styled } from 'twin.macro';

export const AboutSection = styled.div([tw` bg-light-100 dark:bg-dark-100`]);

export const AboutGrid = styled.div([
  tw`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`,
]);

export const AboutContent = styled.div([tw`space-y-6`]);

export const AboutTitle = styled.h2([
  tw`text-3xl md:text-4xl font-bold text-light-800 dark:text-dark-800 mb-4`,
]);

export const AboutText = styled.p([
  tw`text-lg text-light-600 dark:text-dark-600 leading-relaxed`,
]);

export const SkillsGrid = styled.div([
  tw`grid grid-cols-2 md:grid-cols-3 gap-4 mt-8`,
]);

export const SkillCard = styled.div([
  tw`bg-light-200 dark:bg-dark-200 p-4 rounded-lg text-center hover:shadow-lg transition-shadow duration-200`,
]);

export const SkillIcon = styled.div([
  tw`text-3xl text-primary mb-2 flex flex-col items-center`,
]);

export const SkillTitle = styled.h3([
  tw`font-semibold text-light-700 dark:text-dark-700 text-sm`,
]);

export const SkillDescription = styled.p([
  tw`text-xs text-light-600 dark:text-dark-600 mt-1`,
]);

export const TechStack = styled.div([
  tw`mt-8 p-6 bg-light-200 dark:bg-dark-200 rounded-lg`,
]);

export const TechTitle = styled.h3([
  tw`text-xl font-semibold text-light-800 dark:text-dark-800 mb-4`,
]);

export const TechList = styled.div([tw`grid grid-cols-2 md:grid-cols-3 gap-2`]);

export const TechItem = styled.span([
  tw`text-sm text-light-600 dark:text-dark-600 bg-light-200 dark:bg-dark-200 px-3 py-1 rounded-full`,
]);
