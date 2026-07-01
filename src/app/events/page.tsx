import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

const articles = [
  {
    slug: "faiita-national-it-summit-2026",
    title: "FAIITA Announces National IT Summit 2026",
    excerpt: "The annual flagship event bringing together IT leaders from all 25 states.",
    content: "FAIITA is proud to announce the National IT Summit 2026, scheduled to be held in New Delhi. This premier event will bring together over 500 IT entrepreneurs, dealers, and channel partners from across India. The summit will feature keynote addresses from industry leaders, panel discussions on emerging technologies, and networking sessions.",
    category: "events",
    publishedAt: new Date("2026-06-15"),
  },
  {
    slug: "gst-simplified-filing-it-dealers",
    title: "GST Council Recommends Simplified Filing for IT Dealers",
    excerpt: "New GST compliance measures announced for IT channel partners.",
    content: "In a significant development for the IT channel community, the GST Council has recommended simplified filing procedures for IT dealers. The new measures include quarterly filing options for dealers with turnover below ₹1.5 crore.",
    category: "policy",
    publishedAt: new Date("2026-06-10"),
  },
  {
    slug: "faiita-nasscom-skill-development",
    title: "FAIITA Partners with NASSCOM for Skill Development",
    excerpt: "Landmark MoU signed for upskilling IT channel partners.",
    content: "FAIITA and NASSCOM have signed a Memorandum of Understanding to launch a comprehensive skill development program for IT channel partners covering cloud computing, cybersecurity, IoT, and AI/ML basics.",
    category: "news",
    publishedAt: new Date("2026-06-05"),
  },
  {
    slug: "cybersecurity-guidelines-it-resellers",
    title: "New Cybersecurity Guidelines for IT Resellers",
    excerpt: "CERT-In releases updated security protocols.",
    content: "The Indian Computer Emergency Response Team (CERT-In) has released updated cybersecurity guidelines specifically for IT resellers and channel partners.",
    category: "policy",
    publishedAt: new Date("2026-05-28"),
  },
  {
    slug: "state-associations-growth-q1-2026",
    title: "FAIITA State Associations Report 15% Growth in Q1 2026",
    excerpt: "Collective data shows strong growth in IT hardware and services.",
    content: "According to the quarterly report compiled by FAIITA, state associations have collectively reported a 15% year-over-year growth in Q1 2026.",
    category: "news",
    publishedAt: new Date("2026-05-20"),
  },
  {
    slug: "pli-scheme-it-hardware-extension",
    title: "Government Extends PLI Scheme to IT Hardware",
    excerpt: "Production Linked Incentive scheme now covers IT hardware manufacturing.",
    content: "The Government of India has extended the Production Linked Incentive (PLI) scheme to include IT hardware manufacturing.",
    category: "policy",
    publishedAt: new Date("2026-05-15"),
  },
];

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/news" className="inline-flex items-center text-sm text-[#1e3a5f] hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to News
        </Link>
        
        <h1 className="text-3xl font-bold text-[#1e3a5f]">{article.title}</h1>
        
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {article.publishedAt.toLocaleDateString("en-IN")}
          {article.category && (
            <span className="px-2 py-0.5 bg-gray-200 rounded text-xs">{article.category}</span>
          )}
        </div>

        <div className="mt-8 bg-white rounded-lg p-8 border">
          <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
          <div className="mt-6 text-muted-foreground leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>
      </div>
    </div>
  );
}