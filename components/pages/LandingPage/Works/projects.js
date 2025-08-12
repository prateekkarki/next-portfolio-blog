const projects = [
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
    image: '/images/projects/portfolio.jpg',
    link: 'https://canadiantrainvacations.com',
    gallery: [
      '/images/projects/portfolio.jpg',
      '/images/projects/portfolio.jpg',
    ],
  },
  {
    id: 2,
    title: 'Data Visualization PWA for Precision Drilling',
    description:
      'A cross-platform progressive web app (PWA) to visualize and interpret large-scale industrial data. The application, accessible on both web and mobile, transforms complex raw datasets into clear, actionable insights. By streamlining data analysis and emphasizing operational performance, the app enables field teams and decision-makers to identify key trends and take informed action in real-time. This project significantly improved data accessibility, responsiveness, and overall efficiency for drilling operations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/images/projects/ecommerce.jpg',
    link: null,
    github: null,
    gallery: [
      '/images/projects/ecommerce.jpg',
      '/images/projects/ecommerce.jpg',
    ],
  },
  {
    id: 3,
    title: 'Klaire Labs eCommerce Website',
    description:
      "A Magento 2-based eCommerce website to sell medicine online. It's a popular website used by thousands of users. I worked mainly on the user dashboard section of the website. Here users can update their profile information, payment methods, and addresses. They can also update and check their order status.",
    technologies: ['Magento 2', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    image: '/images/projects/taskapp.jpg',
    link: 'https://us.sfihealth.com/',
    github: null,
    gallery: ['/images/projects/taskapp.jpg', '/images/projects/taskapp.jpg'],
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
    image: '/images/projects/portfolio.jpg',
    link: 'https://www.freshtrackscanada.com/',
  },
  {
    id: 5,
    title: 'My Personal Website',
    description:
      "This is my website and blog. I post about new things I've recently learned and about my experiences as a remote developer.  In my blog post, you can read about memoization in JavaScript, using AI to generate blog ideas, avoiding glitchy CSS transitions on Hover, and getting started with Strapi.",
    technologies: ['Next.js', 'Tailwind CSS', 'Strapi', 'Figma', 'Vercel'],
    image: '/images/projects/portfolio.jpg',
    link: 'https://meetprateek.com/',
    github: 'https://github.com/prateekkarki/next-portfolio-blog',
  },
  {
    id: 6,
    title: 'Magento 2 CMS Banner Extension',
    description:
      'This is a Magento 2 extension that allows you to create and manage banners on your website. Convenient and easy to use extension if you need to add banners to your cms pages like about us or homepage in your Magento store.',
    technologies: ['Magento 2', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    image: '/images/projects/portfolio.jpg',
    github: 'https://github.com/prateekkarki/magento2-module-cmsbanner',
  },
];

export default projects;
