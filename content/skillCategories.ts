export const skillCategories: Record<
  string,
  { label: string; skills: { name: string; level: number }[] }
> = {
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
