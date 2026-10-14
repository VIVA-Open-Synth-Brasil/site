import rss from '@astrojs/rss';
import { getPublishedPosts } from '../utils/content';
import { SITE } from '../data/site';
export async function GET(context) { const posts = await getPublishedPosts(); return rss({ title:SITE.name, description:SITE.description, site:context.site, items:posts.map((post) => ({ title:post.data.title, description:post.data.description, pubDate:post.data.pubDate, link:`/artigos/${post.slug}/` })), customData:'<language>pt-BR</language>' }); }
