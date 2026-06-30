import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Newspaper } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "News & Insights | FAIITA",
  description: "Latest industry news, policy updates, and insights for India's IT dealers.",
};

export default async function NewsPage() {
  const articles = await prisma.newsArticle.findMany({
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
        News & Insights
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Stay updated with the latest developments, policy changes, and market
        trends impacting India&apos;s IT trade.
      </p>

      {articles.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="flex h-full flex-col overflow-hidden">
              <div className="aspect-video w-full bg-muted">
                {article.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#0A2540]/5">
                    <Newspaper className="h-10 w-10 text-[#0A2540]/30" />
                  </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {article.publishedAt.toLocaleDateString("en-IN")}
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                </div>
                <CardTitle className="line-clamp-2 text-base">
                  <Link
                    href={`/news/${article.slug}`}
                    className="hover:text-[#0A2540] hover:underline"
                  >
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {article.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-muted-foreground">No news articles available.</p>
      )}
    </div>
  );
}
