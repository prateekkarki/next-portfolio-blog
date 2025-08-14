import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Canadian Train Vacations',
    description:
      'A website built on Next.js using TypeScript. The clients provided me with the required designs on Figma, and I translated the designs into a fully functional responsive website. I also integrated DatoCMS for adding website data and deployed the website on Netlify.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'DatoCMS',
      'Netlify',
      'Figma',
      'React',
    ],
    image: 'v1755090854/Technologies/icons/nextjs/nextjs_z80rkh.svg',
    link: 'https://canadiantrainvacations.com',
    github: 'https://github.com/prateekkarki/next-portfolio-blog',
    gallery: [
      '/images/projects/portfolio.jpg',
      '/images/projects/portfolio.jpg',
    ],
    backgroundColor: '#ffffff',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Data Visualization PWA for Precision Drilling',
    description:
      'A cross-platform progressive web app (PWA) to visualize and interpret large-scale industrial data. The application, accessible on both web and mobile, transforms complex raw datasets into clear, actionable insights. By streamlining data analysis and emphasizing operational performance, the app enables field teams and decision-makers to identify key trends and take informed action in real-time. This project significantly improved data accessibility, responsiveness, and overall efficiency for drilling operations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'v1755091108/Technologies/icons/logo_bdd5ah.svg',
    // gallery: [
    //   '/images/projects/ecommerce.jpg',
    //   '/images/projects/ecommerce.jpg',
    // ],
    isFeatured: true,
    backgroundColor: '#ffffff',
  },
  {
    id: 3,
    title: 'Klaire Labs eCommerce Website',
    description:
      "A Magento 2-based eCommerce website to sell medicine online. It's a popular website used by thousands of users. I worked mainly on the user dashboard section of the website. Here users can update their profile information, payment methods, and addresses. They can also update and check their order status.",
    technologies: ['Magento 2', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    image: 'v1755091327/Technologies/icons/Magento-1024x512_sdvaem.webp',
    link: 'https://us.sfihealth.com/',
    gallery: ['/images/projects/taskapp.jpg', '/images/projects/taskapp.jpg'],
    backgroundColor: '#ffffff',
  },
  {
    id: 4,
    title: 'Fresh Tracks Canada Website',
    description:
      'A website built on Next.js using TypeScript. The clients provided me with the required designs on Figma, and I translated the designs into a fully functional responsive website. I also integrated DatoCMS for adding website data and deployed the website on Netlify.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'DatoCMS',
      'Netlify',
      'Figma',
      'React',
    ],
    image: 'v1755090854/Technologies/icons/nextjs/nextjs_z80rkh.svg',
    link: 'https://www.freshtrackscanada.com/',
    backgroundColor: '#ffffff',
  },
  {
    id: 5,
    title: 'My Personal Website',
    description:
      "This is my website and blog. I post about new things I've recently learned and about my experiences as a remote developer.  In my blog post, you can read about memoization in JavaScript, using AI to generate blog ideas, avoiding glitchy CSS transitions on Hover, and getting started with Strapi.",
    technologies: ['Next.js', 'Tailwind CSS', 'Strapi', 'Figma', 'Vercel'],
    image: 'v1755090854/Technologies/icons/nextjs/nextjs_z80rkh.svg',
    link: 'https://meetprateek.com/',
    github: 'https://github.com/prateekkarki/next-portfolio-blog',
    backgroundColor: '#ffffff',
  },
  {
    id: 6,
    title: 'Magento 2 CMS Banner Extension',
    description:
      'This is a Magento 2 extension that allows you to create and manage banners on your website. Convenient and easy to use extension if you need to add banners to your cms pages like about us or homepage in your Magento store.',
    technologies: ['Magento 2', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    image: 'v1755091327/Technologies/icons/Magento-1024x512_sdvaem.webp',
    github: 'https://github.com/prateekkarki/magento2-module-cmsbanner',
    backgroundColor: '#ffffff',
  },
  {
    id: 7,
    title: 'Strapi blog backend',
    description:
      'This is a Strapi blog backend that allows you to create and manage blog posts on your website. I built this backend for my personal website to have a fully functional blog backend. I used Strapi headless CMS to build this backend.',
    technologies: ['Strapi', 'TypeScript', 'PostgreSQL', 'GraphQL'],
    image: 'v1755096828/Technologies/icons/Strapi.full.logo.dark_zxhyz3.svg',
    github: 'https://github.com/prateekkarki/next-portfolio-blog',
    backgroundColor: '#ffffff',
  },
];

export const featuredProjects: Project[] = projects.filter(
  (project) => project.isFeatured
);
