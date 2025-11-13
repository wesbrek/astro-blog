import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

export function capitalize(str: string): string {
  if (typeof str !== "string" || str.length === 0) return str;

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getAllBlogArticles(): Promise<CollectionEntry<"blog">[]> {
  return await getCollection("blog");
}

export async function getAllBlogArticlesSorted(): Promise<
  CollectionEntry<"blog">[]
> {
  return (await getCollection("blog")).sort(
    (a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}
