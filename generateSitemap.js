const dotenv = require('dotenv');
const fs = require('fs');
const globby = require('globby');

dotenv.config({ path: './.env.local' });
function addPage(page) {
  const path = page.replace('.next/server/pages', '').replace('.html', '');
  const route = path === '/index' ? '' : path;
  return `<url>
    <loc>${`${process.env.NEXT_PUBLIC_SITE_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby(['.next/server/pages/**/*.html']);
  const filteredPages = pages.filter((page) => {
    if (
      page.endsWith('404.html') ||
      page.endsWith('500.html') ||
      page.endsWith('[aid].html') ||
      page.endsWith('[cid].html')
    ) {
      return false;
    }
    return true;
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${filteredPages.map(addPage).join('\n')}
  </urlset>`;
  fs.writeFileSync('public/sitemap.xml', sitemap);
}
generateSitemap();
