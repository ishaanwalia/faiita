import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";

interface NewsArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = await prisma.newsArticle.findUnique({ where: { slug } });
  if (!article) return {};
  return {
    title: `${article.title} | FAIITA News`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = await prisma.newsArticle.findUnique({ where: { slug } });

  if (!article || !article.isPublished) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary">{article.category}</Badge>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
          {article.title}
        </h1>
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {article.publishedAt.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          {article.author && <span>&middot; {article.author}</span>}
        </div>

        {article.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.image}
            alt={article.title}
            className="mt-8 aspect-video w-full rounded-xl object-cover"
          />
        )}

        <div className="prose prose-lg mt-8 max-w-none text-muted-foreground">
          <p className="font-medium text-foreground">{article.excerpt}</p>
          <div className="mt-6 whitespace-pre-line">{article.content}</div>
        </div>
      </div>
    </article>
  );
}
