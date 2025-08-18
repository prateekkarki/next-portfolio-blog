# Portfolio & Blog Website

A modern, responsive portfolio website built with Next.js, featuring a showcase of projects, blog posts, and professional information. This website demonstrates full-stack development skills with a focus on modern web technologies and best practices.

## 🌟 Features

### Portfolio Showcase

- **Project Gallery**: Display of professional projects with technology tags
- **Technology Filtering**: Filter projects by technology stack (sorted by frequency)
- **Responsive Design**: Optimized for all device sizes
- **Project Details**: Each project includes description, technologies, live links, and GitHub repositories

### Blog System

- **Markdown Support**: Write blog posts using Markdown with syntax highlighting
- **Category Organization**: Organize posts by categories and tags
- **External Blog Support**: Link to external blog posts

### Professional Information

- **About Section**: Professional background and skills overview
- **Timeline**: Work and education history with interactive timeline
- **Skills Display**: Categorized skill sets with visual representations
- **Contact Form**: Professional contact form with validation

### Technical Features

- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Lazy loading, and efficient rendering
- **Accessibility**: ARIA labels and keyboard navigation support

## 🚀 Tech Stack

### Frontend

- **Next.js 12+** - React framework with SSR/SSG
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Twin.macro** - CSS-in-JS with Tailwind
- **Emotion** - CSS-in-JS styling

### UI Components & Libraries

- **React Icons** - Icon library (FontAwesome, Devicons, etc.)
- **React Modal** - Modal dialogs
- **React Transition Group** - Animation transitions
- **Anime.js** - Advanced animations

### Content Management

- **Markdown Processing** - React Markdown with remark plugins
- **Syntax Highlighting** - React Syntax Highlighter with Prism themes
- **Image Optimization** - Cloudinary integration for responsive images

### Development Tools

- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **TypeScript** - Type checking and compilation

## 📁 Project Structure

```
next-portfolio-blog/
├── components/                 # React components
│   ├── BlogPosts/            # Blog-related components
│   ├── Common/               # Shared components (Header, Footer, etc.)
│   ├── Layout/               # Layout components
│   └── pages/                # Page-specific components
├── content/                   # Content data
│   ├── blogs/                # Markdown blog posts
│   ├── projects.ts           # Project data
│   └── experienceItems.ts    # Timeline data
├── hooks/                     # Custom React hooks
├── pages/                     # Next.js pages
├── public/                    # Static assets
├── styles/                    # Global styles and theme
├── types/                     # TypeScript type definitions
└── utils/                     # Utility functions
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- Yarn or npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/prateekkarki/next-portfolio-blog.git
cd next-portfolio-blog
```

### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Resume Access (Optional)
NEXT_PUBLIC_RESUME_CODE=your_access_code
NEXT_PUBLIC_RESUME_LINK=https://your-resume-link.com

# Contact Form (Formspree)
# The form is pre-configured with Formspree, but you can update the endpoint

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### 4. Run Development Server

```bash
yarn develop
# or
npm run develop
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Adding New Projects

Edit `content/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "TypeScript"],
    image: {
      src: "project-image-url",
      width: 600,
      height: 400
    },
    link: "https://live-project.com",
    github: "https://github.com/username/project",
    gallery: [
      { src: "screenshot1.jpg", width: 800, height: 600 }
    ],
    backgroundColor: "#f0f0f0"
  }
];
```

### Adding New Blog Posts

1. Create a new Markdown file in `content/blogs/`

```markdown
Your blog content here...
```

3. Update `content/blogsData.ts` with the new post information

```typescript
export const projects: Project[] = [
   {
    id: 5,
    title: 'Blog title',
    slug: 'blog-markdown-filename',
    tagline: '...',
    featured: true,
    publishedOn: '2024-01-20',
    updatedAt: '2024-01-20',
    createdAt: '2024-01-20',
    isExternal: true, // for external URLs
    externalUrl: 'https://www.toptal.com/react/react-memoization', // for external URLs
    thumbnail: {
      url: '...',
    },
    category: {
      title: '...',
      slug: '...',
    },
    tags: [
      {
        title: '...',
        slug: '...',
      }
    ],
  },
];
```

### Customizing Skills

Edit `content/skillCategories.ts` to modify your skills display:

```typescript
export const skillCategories = [
  frontend: {
    label: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 90 },
      // ...
    ],
  },
];
```

## 🎨 Customization

### Theme Colors

Update `tailwind.config.js` to customize your color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color',
        secondary: '#your-secondary-color',
        // ... other colors
      }
    }
  }
}
```

### Styling

- **Global Styles**: Edit `assets/css/styles.css`
- **Component Styles**: Use Twin.macro with Tailwind classes
- **Theme Variables**: Define in `types/twin.d.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

### Other Platforms

The project is compatible with:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting platform

## 🔧 Development

### Available Scripts

```bash
# Development
yarn develop      # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
yarn type-check   # Run TypeScript type checking
```

### Code Style

- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Automatic code formatting
- **TypeScript**: Strict type checking enabled

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/prateekkarki/next-portfolio-blog/blob/main/LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **React Community** - For the excellent ecosystem
- **Open Source Contributors** - For the libraries and tools used

## 📞 Contact

- **Website**: [meetprateek.com](https://meetprateek.com)
- **Email**: info@meetprateek.com
- **GitHub**: [@prateekkarki](https://github.com/prateekkarki)
- **LinkedIn**: [Prateek Karki](https://www.linkedin.com/in/prateekkarki/)

---

**Built with ❤️ using Next.js, React, and TypeScript**
