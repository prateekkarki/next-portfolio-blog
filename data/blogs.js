import fs from 'fs';
import path from 'path';
import blogs from './blogsData';

// Read markdown content from files
const readMarkdownContent = (slug) => {
  try {
    const filePath = path.join(process.cwd(), 'content', 'blogs', `${slug}.md`);
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return '';
  }
};

// Add content to blogs
const blogsWithContent = blogs.map((blog) => ({
  ...blog,
  content: readMarkdownContent(blog.slug),
}));

export const getFeaturedBlogs = () => {
  const featuredBlogs = blogsWithContent.filter((blog) => blog.featured);
  return featuredBlogs;
};

export const getBlogBySlug = (slug) => {
  const blogBySlug = blogsWithContent.find((blog) => blog.slug === slug);
  return blogBySlug;
};

export const getAllBlogs = () => blogsWithContent;

export const getBlogsByCategory = (categorySlug) => {
  const filteredBlogs = blogsWithContent.filter(
    (blog) => blog.category.slug === categorySlug
  );
  return filteredBlogs;
};

export const getCategories = () => {
  const categories = blogsWithContent.reduce((acc, blog) => {
    const { category } = blog;
    if (!acc.find((cat) => cat.slug === category.slug)) {
      acc.push(category);
    }
    return acc;
  }, []);
  return categories;
};
