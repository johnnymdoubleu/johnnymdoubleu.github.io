import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../../consts";

const locale = "kr";

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection("blog", (entry) => entry.id.startsWith(`${locale}/`));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: site!,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        ...post.data,
        link: `/${locale}/blog/${post.id.slice(locale.length + 1)}/`,
      })),
  });
};
