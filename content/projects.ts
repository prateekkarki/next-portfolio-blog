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
    image: {
      src: 'v1755090854/Technologies/icons/nextjs/nextjs_z80rkh.svg',
      width: 700,
      height: 700,
    },
    link: 'https://canadiantrainvacations.com',
    github: 'https://github.com/prateekkarki/next-portfolio-blog',
    backgroundColor: '#ffffff',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Data Visualization PWA for Precision Drilling',
    description:
      'A cross-platform progressive web app (PWA) to visualize and interpret large-scale industrial data. The application, accessible on both web and mobile, transforms complex raw datasets into clear, actionable insights. By streamlining data analysis and emphasizing operational performance, the app enables field teams and decision-makers to identify key trends and take informed action in real-time. This project significantly improved data accessibility, responsiveness, and overall efficiency for drilling operations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: {
      src: 'v1755091108/Technologies/icons/logo_bdd5ah.svg',
      width: 700,
      height: 700,
    },
    isFeatured: true,
    backgroundColor: '#ffffff',
  },
  {
    id: 3,
    title: 'Klaire Labs eCommerce Website',
    description:
      "A Magento 2-based eCommerce website to sell medicine online. It's a popular website used by thousands of users. I worked mainly on the user dashboard section of the website. Here users can update their profile information, payment methods, and addresses. They can also update and check their order status.",
    technologies: ['Magento 2', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    image: {
      src: 'v1755091327/Technologies/icons/Magento-1024x512_sdvaem.webp',
      width: 1024,
      height: 512,
    },
    link: 'https://us.sfihealth.com/',
    gallery: [{ src: '/images/projects/taskapp.jpg', width: 700, height: 700 }],
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
    image: {
      src: 'v1755090854/Technologies/icons/nextjs/nextjs_z80rkh.svg',
      width: 700,
      height: 700,
    },
    link: 'https://www.freshtrackscanada.com/',
    backgroundColor: '#ffffff',
  },
  {
    id: 5,
    title: 'timeTracko: A workforce analytics and productivity software',
    description:
      "timeTracko is a workforce analytics and productivity software that helps you track your team's productivity and efficiency. It's a comprehensive software that helps you track your team's productivity and efficiency.",
    technologies: ['React', 'Redux', 'Redux Saga'],
    image: {
      src: 'v1755090862/Technologies/icons/react/react-original_anyvwp.svg',
      width: 700,
      height: 700,
    },
    gallery: [
      {
        src: 'v1755192782/Works/timeTracko/screencast-feature_nh6jkc.png',
        width: 1240,
        height: 698,
      },
      {
        src: 'v1755192781/Works/timeTracko/attendance-feature_akhj1i.png',
        width: 1240,
        height: 627,
      },
      {
        src: 'v1755192781/Works/timeTracko/app-feature_biaqeu.png',
        width: 1240,
        height: 627,
      },
      {
        src: 'v1755192780/Works/timeTracko/time-feature_ikmb6a.png',
        width: 1240,
        height: 626,
      },
      {
        src: 'v1755192780/Works/timeTracko/automatic-timetracking-feature_utmfrr.png',
        width: 1240,
        height: 698,
      },
    ],
    backgroundColor: '#ffffff',
  },
  {
    id: 7,
    title: 'My Personal Website',
    description:
      "This is my website and blog. I post about new things I've recently learned and about my experiences as a remote developer.  In my blog post, you can read about memoization in JavaScript, using AI to generate blog ideas, avoiding glitchy CSS transitions on Hover, and getting started with Strapi.",
    technologies: ['Next.js', 'Tailwind CSS', 'Strapi', 'Figma', 'Vercel'],
    image: {
      src: 'v1755090854/Technologies/icons/nextjs/nextjs_z80rkh.svg',
      width: 700,
      height: 700,
    },
    link: 'https://meetprateek.com/',
    github: 'https://github.com/prateekkarki/next-portfolio-blog',
    backgroundColor: '#ffffff',
  },
  {
    id: 8,
    title: 'Magento 2 CMS Banner Extension',
    description:
      'This is a Magento 2 extension that allows you to create and manage banners on your website. Convenient and easy to use extension if you need to add banners to your cms pages like about us or homepage in your Magento store.',
    technologies: ['Magento 2', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    image: {
      src: 'v1755091327/Technologies/icons/Magento-1024x512_sdvaem.webp',
      width: 1024,
      height: 512,
    },
    github: 'https://github.com/prateekkarki/magento2-module-cmsbanner',
    backgroundColor: '#ffffff',
  },
  {
    id: 9,
    title: 'Strapi blog backend',
    description:
      'This is a Strapi blog backend that allows you to create and manage blog posts on your website. I built this backend for my personal website to have a fully functional blog backend. I used Strapi headless CMS to build this backend.',
    technologies: ['Strapi', 'TypeScript', 'PostgreSQL', 'GraphQL'],
    image: {
      src: 'v1755096828/Technologies/icons/Strapi.full.logo.dark_zxhyz3.svg',
      width: 700,
      height: 700,
    },
    github: 'https://github.com/prateekkarki/next-portfolio-blog',
    backgroundColor: '#ffffff',
  },
  {
    id: 10,
    title: 'Early grade learning web app',
    description:
      'This is a web app built on React using JavaScript. The clients provided me with the required designs and illustrations on Adobe Photoshop and Illustrator, and I translated the designs into a fully functional responsive web app.',
    technologies: ['React', 'JavaScript', 'GSAP', 'React-Router', 'React DnD'],
    image: {
      src: 'v1755090862/Technologies/icons/react/react-original_anyvwp.svg',
      width: 700,
      height: 700,
    },
    link: 'https://egr.olenepal.org/',
    gallery: [
      {
        src: 'v1755193377/Works/egr/egr-home_auxmsv.png',
        width: 1297,
        height: 1303,
      },
      {
        src: 'v1755193375/Works/egr/egr-stories_pbxhte.png',
        width: 1242,
        height: 1271,
      },
      {
        src: 'v1755193374/Works/egr/egr-games_drinmh.png',
        width: 1225,
        height: 1431,
      },
      {
        src: 'v1755193378/Works/egr/egr-baloon_n0kins.png',
        width: 1300,
        height: 817,
      },
      {
        src: 'v1755193376/Works/egr/egr-balloon-burst_kdmnzz.png',
        width: 1300,
        height: 816,
      },
    ],
    backgroundColor: '#ffffff',
  },
];

export const featuredProjects: Project[] = projects.filter(
  (project) => project.isFeatured
);
