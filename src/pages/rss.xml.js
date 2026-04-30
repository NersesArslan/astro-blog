import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Nerses Arslanian | Blog",
    description:
      "Life through a lens of a Lebanese-Armenian immigrant settling into adult life in Los Angeles.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
