import Link from "next/link";
import { Calendar, Newspaper } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export const dynamic = "force-static";

const articles = [
  {
    id: "1",
    title: "FAIITA Announces National IT Summit 2026",
    slug: "faiita-national-it-summit-2026",
    excerpt: "The annual flagship event bringing together IT leaders from all 25 states to discuss Digital India initiatives.",
    image: null,
    category: "events",
    publishedAt: new Date("2026-06-15"),
  },
  {
    id: "2",
    title: "GST Council Recommends Simplified Filing for IT Dealers",
    slug: "gst-simplified-filing-it-dealers",
    excerpt: "New GST compliance measures announced that will benefit over 50,000 IT channel partners across India.",
    image: null,
    category: "policy",
    publishedAt: new Date("2026-06-10"),
  },
  {
    id: "3",
    title: "FAIITA Partners with NASSCOM for Skill Development",
    slug: "faiita-nasscom-skill-development",
    excerpt: "A landmark MoU signed to provide upskilling opportunities for 10,000 IT channel partners.",
    image: null,
    category: "news",
    publishedAt: new Date("2026-06-05"),
  },
  {
    id: "4",
    title: "New Cybersecurity Guidelines for IT Resellers",
    slug: "cybersecurity-guidelines-it-resellers",
    excerpt: "CERT-In releases updated security protocols that all IT channel partners must implement.",
    image: null,
    category: "policy",
    publishedAt: new Date("2026-05-28"),
  },
  {
    id: "5",
    title: "FAIITA State Associations Report 15% Growth in Q1 2026",
    slug: "state-associations-growth-q1-2026",
    excerpt: "Collective data from 25 state associations shows strong growth in IT hardware and services segments.",
    image: null,
    category: "news",
    publishedAt: new Date("2026-05-20"),
  },
  {
    id: "6",
    title: "Government Extends PLI Scheme to IT Hardware",
    slug: "pli-scheme-it-hardware-extension",
    excerpt: "Production Linked Incentive scheme now covers laptops, tablets, and servers manufacturing in India.",
    image: null,
    category: "policy",
    publishedAt: new Date("2026-05-15"),
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#1e3a5f]">News & Updates</h1>
          <p className="mt-3 text-muted-foreground">
            Latest developments from FAIITA and the IT industry
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="flex h-full flex-col overflow-hidden">
              <div className="aspect-video w-full bg-muted">
                {article.image ? (
                  <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#1e3a5f]/5">
                    <Newspaper className="h-10 w-10 text-[#1e3a5f]/30" />
                  </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {formatDate(article.publishedAt)}
                  {article.category && <Badge variant="secondary">{article.category}</Badge>}
                </div>
                <CardTitle className="line-clamp-2 text-base font-semibold">
                  <Link href={`/news/${article.slug}`} className="hover:text-[#1e3a5f] hover:underline">
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="line-clamp-3 text-sm text-muted-foreground">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}