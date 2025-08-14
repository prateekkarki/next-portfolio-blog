import fs from 'fs';
import path from 'path';
import { blogs } from '@/content/blogsData';
import { BlogArticle, BlogCategory } from '@/types';

// Read markdown content from files
const readMarkdownContent = (slug: string): string => {
  try {
    const filePath = path.join(process.cwd(), 'content', 'blogs', `${slug}.md`);
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return '';
  }
};

// Add content to blogs
const blogsWithContent: BlogArticle[] = blogs.map((blog) => ({
  ...blog,
  content: readMarkdownContent(blog.slug),
}));

export const getFeaturedBlogs = (): BlogArticle[] => {
  const featuredBlogs = blogsWithContent.filter((blog) => blog.featured);
  return featuredBlogs;
};

export const getBlogBySlug = (slug: string): BlogArticle | undefined => {
  const blogBySlug = blogsWithContent.find((blog) => blog.slug === slug);
  return blogBySlug;
};

export const getAllBlogs = (): BlogArticle[] => blogsWithContent;

export const getBlogsByCategory = (categorySlug: string): BlogArticle[] => {
  const filteredBlogs = blogsWithContent.filter(
    (blog) => blog.category.slug === categorySlug
  );
  return filteredBlogs;
};

export const getCategories = (): BlogCategory[] => {
  const categories = blogsWithContent.reduce((acc: BlogCategory[], blog) => {
    const { category } = blog;
    if (!acc.find((cat) => cat.slug === category.slug)) {
      acc.push(category);
    }
    return acc;
  }, []);
  return categories;
};
