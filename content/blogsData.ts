import { BlogArticle } from '@/types';
import blogDataJson from './blogDataJson.json';

export const blogs: BlogArticle[] = blogDataJson.blogs as BlogArticle[];
