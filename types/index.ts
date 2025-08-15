export interface BlogTag {
  title: string;
  slug: string;
}

export interface BlogCategory {
  title: string;
  slug: string;
}

export interface BlogThumbnail {
  url: string;
}

export interface BlogArticle {
  id: number;
  title: string;
  slug: string;
  tagline: string;
  featured: boolean;
  publishedOn: string | null;
  updatedAt: string;
  createdAt: string;
  isExternal: boolean;
  externalUrl: string | null;
  thumbnail: BlogThumbnail;
  category: BlogCategory;
  tags: BlogTag[];
  content?: string;
}

export interface NextImage {
  src: string;
  width?: number;
  height?: number;
}
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: NextImage;
  link?: string;
  github?: string;
  gallery?: NextImage[];
  isFeatured?: boolean;
  backgroundColor?: string;
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type?: 'work' | 'school';
}

export interface SEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
  siteName: string;
  locale: string;
  twitterCard: string;
  twitterUsername: string;
  type: string;
  article?: {
    tags: string;
    publishedTime: string;
    modifiedTime: string;
  };
}

export interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export interface FormActions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

export interface AccessFormData {
  accessEmail: string;
}

// Twin.macro types
export interface TwinMacroTheme {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    light: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
    };
    dark: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
    };
    gray: {
      300: string;
    };
  };
  spacing: {
    header: string;
    footer: string;
  };
}

// Next.js page props types
export interface PageProps {
  children?: React.ReactNode;
}

export interface LayoutProps extends PageProps {
  pathname: string;
}

export interface HomePageProps {
  articles: BlogArticle[];
}

export interface BlogPageProps {
  articles: BlogArticle[];
}

export interface ArticlePageProps {
  article: BlogArticle;
}

export interface CategoryPageProps {
  articles: BlogArticle[];
  category: BlogCategory;
}

export interface AboutPageProps extends PageProps {}

// Component props interfaces
export interface CardProps {
  article: BlogArticle;
  dark?: boolean;
}

export interface MiniCardProps extends CardProps {}

export interface FullCardProps extends CardProps {}

export interface LinkWrapperProps {
  children: React.ReactNode;
  article: BlogArticle;
}

export interface ProjectCardProps {
  project: Project;
  isMini?: boolean;
}

export interface BreadCrumbBlock {
  path?: string;
  title: string;
}

export interface BreadCrumbsProps {
  blocks: BreadCrumbBlock[];
}

export interface TitleBlockProps {
  title: string;
  subtitle: string;
}

export interface MetaHeadProps {
  seo?: Partial<SEOProps>;
}

export interface LoaderProps {
  fullpage?: boolean;
}

export interface SkewedProps {
  children: React.ReactNode;
}

export interface IntroProps {
  scrollToContact: () => void;
}

export interface BlogPostsProps {
  articles: BlogArticle[];
}

// Hook return types
export interface UseFormRequestReturn {
  submitting: boolean;
  register: any; // react-hook-form register function
  errors: any; // react-hook-form errors object
  handleFinished: (e: React.FormEvent) => void;
}

// Timeline items
export interface TimelineItems extends Array<TimelineItem> {}

export interface UseLocalStorageReturn<T> {
  storedValue: T;
  setValue: (value: T | ((val: T) => T)) => void;
}
