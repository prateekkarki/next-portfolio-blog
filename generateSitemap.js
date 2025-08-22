const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

// Site configuration
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meetprateek.com';

// Static pages with their priorities and change frequencies
const STATIC_PAGES = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/works', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
];

function addPage(pageData) {
  const { path: pagePath, priority, changefreq } = pageData;
  const fullUrl = `${SITE_URL}${pagePath}`;

  return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function addBlogPage(blog) {
  const fullUrl = `${SITE_URL}/article/${blog.slug}`;

  return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${blog.updatedAt || blog.createdAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
}

// Read blog data from the existing JSON file
function getBlogsData() {
  try {
    const jsonPath = path.join(process.cwd(), 'content', 'blogDataJson.json');
    const jsonContent = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(jsonContent);
    return data.blogs || [];
  } catch (error) {
    console.error('❌ Error reading blog data:', error.message);
    return [];
  }
}

async function generateSitemap() {
  try {
    // Debug: Show what URL we're using
    console.log(`🌐 Using site URL: ${SITE_URL}`);

    // Get blog data from your existing JSON file
    const blogs = getBlogsData();

    if (blogs.length === 0) {
      console.warn(
        '⚠️  No blogs found, generating sitemap with static pages only'
      );
    }

    // Generate sitemap content
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_PAGES.map(addPage).join('\n')}
${blogs.map(addBlogPage).join('\n')}
</urlset>`;

    // Write sitemap file
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);

    console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
    console.log(`📊 Total URLs: ${STATIC_PAGES.length + blogs.length}`);
    console.log(`🏠 Static pages: ${STATIC_PAGES.length}`);
    console.log(`📝 Blog posts: ${blogs.length}`);

    if (blogs.length > 0) {
      console.log(`\n📋 Sample blog posts:`);
      blogs.slice(0, 3).forEach((blog) => {
        console.log(`   - ${blog.title} (${blog.slug})`);
      });
      if (blogs.length > 3) {
        console.log(`   ... and ${blogs.length - 3} more`);
      }
    }

    // Also generate a robots.txt file
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    const robotsContent = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;
    fs.writeFileSync(robotsPath, robotsContent);
    console.log(`🤖 Robots.txt generated at ${robotsPath}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Run the generator
generateSitemap();
