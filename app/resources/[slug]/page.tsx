import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import ArticleContent from "@/components/ArticleContent";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/resources/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  return <ArticleContent article={article} related={related} />;
}
