import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calendar,
  ChevronRight,
  MapPin,
  Newspaper,
  Search,
  Store,
  Users,
} from "lucide-react";

import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DealerCard } from "@/components/dealers/dealer-card";

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function HomePage() {
  const [featuredDealers, latestNews, upcomingEvents] = await Promise.all([
    prisma.dealer.findMany({
      where: {
        featured: true,
        isActive: true,
        verificationStatus: "VERIFIED",
      },
      take: 4,
    }),
    prisma.newsArticle.findMany({
      where: { isPublished: true },
      orderBy: { publishedAt: "desc" },
      take: 3,
    }),
    prisma.event.findMany({
      where: { status: "upcoming" },
      orderBy: { startDate: "asc" },
      take: 3,
    }),
  ]);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#0A2540] py-16 text-white sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Uniting India&apos;s IT Entrepreneurs
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              FAIITA brings together 50,000+ IT dealers, distributors, and resellers
              across 25 states, empowering 25+ lakh employment opportunities and
              driving the future of India&apos;s IT trade.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/directory"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-white text-[#0A2540] hover:bg-white/90 sm:w-auto"
                )}
              >
                <Search className="mr-2 h-4 w-4" />
                Find a Dealer
              </Link>
              <Link
                href="/register"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-[#FF9933] text-white hover:bg-[#FF9933]/90 sm:w-auto"
                )}
              >
                Join FAIITA
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b bg-background py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-[#0A2540]">
                <Store className="h-5 w-5" />
                <span className="text-2xl font-bold sm:text-3xl">50,000+</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Dealers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-[#0A2540]">
                <MapPin className="h-5 w-5" />
                <span className="text-2xl font-bold sm:text-3xl">25</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">States</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-[#0A2540]">
                <Users className="h-5 w-5" />
                <span className="text-2xl font-bold sm:text-3xl">25L+</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Employment</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-[#0A2540]">
                <Building2 className="h-5 w-5" />
                <span className="text-2xl font-bold sm:text-3xl">500+</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dealers */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl">
                Featured Dealers
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Explore verified FAIITA members leading India&apos;s IT retail and distribution ecosystem.
              </p>
            </div>
            <Link
              href="/directory"
              className="inline-flex items-center text-sm font-medium text-[#0A2540] hover:underline"
            >
              View all dealers
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {featuredDealers.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredDealers.map((dealer) => (
                <DealerCard key={dealer.id} dealer={dealer} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed py-12 text-center">
              <Store className="mx-auto h-8 w-8 text-muted-foreground/60" />
              <p className="mt-3 text-sm text-muted-foreground">
                No featured dealers available at the moment.
              </p>
              <Link
                href="/directory"
                className={cn(buttonVariants({ variant: "outline" }), "mt-4")}
              >
                Browse Directory
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Membership CTA */}
      <section className="bg-[#FF9933] py-14 text-white sm:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Become a FAIITA Member
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              Join a nationwide network of IT entrepreneurs. Access exclusive benefits,
              industry insights, advocacy support, and connect with peers across India.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/register"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-white text-[#FF9933] hover:bg-white/90 sm:w-auto"
                )}
              >
                Join FAIITA
              </Link>
              <Link
                href="/membership"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "w-full border-white text-white hover:bg-white/10 sm:w-auto"
                )}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl">
                Latest News
              </h2>
              <p className="mt-2 text-muted-foreground">
                Stay updated with the latest developments in India&apos;s IT trade.
              </p>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center text-sm font-medium text-[#0A2540] hover:underline"
            >
              View all news
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {latestNews.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {latestNews.map((article) => (
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
                      {formatDate(article.publishedAt)}
                      {article.category && (
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="line-clamp-2 text-base font-semibold">
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
            <div className="mt-8 rounded-xl border border-dashed py-12 text-center">
              <Newspaper className="mx-auto h-8 w-8 text-muted-foreground/60" />
              <p className="mt-3 text-sm text-muted-foreground">
                No news articles available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="border-t bg-muted/30 py-14 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl">
                Upcoming Events
              </h2>
              <p className="mt-2 text-muted-foreground">
                Connect with the community at our upcoming events across India.
              </p>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center text-sm font-medium text-[#0A2540] hover:underline"
            >
              View all events
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {formatDate(event.startDate)}
                      {event.endDate && (
                        <>
                          {" "}
                          - {formatDate(event.endDate)}
                        </>
                      )}
                    </div>
                    <CardTitle className="line-clamp-2 text-base font-semibold">
                      <Link
                        href={`/events/${event.slug}`}
                        className="hover:text-[#0A2540] hover:underline"
                      >
                        {event.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-[#0A2540]">
                      <MapPin className="h-4 w-4" />
                      {event.isOnline ? "Online Event" : event.location}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed py-12 text-center">
              <Calendar className="mx-auto h-8 w-8 text-muted-foreground/60" />
              <p className="mt-3 text-sm text-muted-foreground">
                No upcoming events at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
