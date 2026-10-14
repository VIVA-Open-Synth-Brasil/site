import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap-index.xml', site ?? 'https://voz-livre-brasil.pages.dev')}\n`, { headers: { 'Content-Type': 'text/plain' } });
