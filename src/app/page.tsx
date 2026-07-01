import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calendar,
  ChevronRight,
  MapPin,
  Newspaper,
  Users,
  Globe,
  Handshake,
  Lightbulb,
  Megaphone,
  Shield,
  TrendingUp,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const latestNews = [
  {
    id: "1",
    title: "FAIITA Announces National IT Summit 2026",
    slug: "faiita-national-it-summit-2026",
    excerpt: "The annual flagship event bringing together IT leaders from all 25 states.",
    image: null,
    category: "events",
    publishedAt: new Date("2026-06-15"),
  },
  {
    id: "2",
    title: "GST Council Recommends Simplified Filing for IT Dealers",
    slug: "gst-simplified-filing-it-dealers",
    excerpt: "New GST compliance measures announced for IT channel partners.",
    image: null,
    category: "policy",
    publishedAt: new Date("2026-06-10"),
  },
  {
    id: "3",
    title: "FAIITA Partners with NASSCOM for Skill Development",
    slug: "faiita-nasscom-skill-development",
    excerpt: "Landmark MoU signed to provide upskilling for 10,000 IT channel partners.",
    image: null,
    category: "news",
    publishedAt: new Date("2026-06-05"),
  },
];

const upcomingEvents = [
  {
    id: "1",
    title: "FAIITA National IT Summit 2026",
    slug: "faiita-national-it-summit-2026",
    description: "The annual flagship event bringing together IT leaders from all 25 states.",
    startDate: new Date("2026-08-15"),
    endDate: new Date("2026-08-17"),
    location: "New Delhi",
    isOnline: false,
  },
  {
    id: "2",
    title: "Cybersecurity Workshop for IT Dealers",
    slug: "cybersecurity-workshop-it-dealers",
    description: "Comprehensive workshop on CERT-In guidelines and secure practices.",
    startDate: new Date("2026-07-25"),
    endDate: null,
    location: "Mumbai",
    isOnline: false,
  },
  {
    id: "3",
    title: "Digital India Webinar Series - Part 3",
    slug: "digital-india-webinar-series-3",
    description: "Online webinar on government digital transformation opportunities.",
    startDate: new Date("2026-07-10"),
    endDate: null,
    location: "Online",
    isOnline: true,
  },
];

export const dynamic = "force-static";

export default function HomePage() {
  const stats = [
    { icon: Users, value: "50,000+", label: "IT Dealers" },
    { icon: MapPin, value: "25", label: "States" },
    { icon: Building2, value: "25L+", label: "Employment" },
    { icon: Globe, value: "500+", label: "Cities" },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Shape the Future",
      description: "Influence national IT policies and be part of decisions that shape India's technology landscape.",
    },
    {
      icon: Handshake,
      title: "Strategic Networking",
      description: "Connect with 50,000+ IT entrepreneurs, vendors, and government stakeholders across India.",
    },
    {
      icon: Lightbulb,
      title: "Knowledge & Insights",
      description: "Access exclusive industry reports, market trends, and expert-led training programs.",
    },
    {
      icon: Megaphone,
      title: "Branding & Visibility",
      description: "Showcase your association and members on a national platform with media coverage.",
    },
    {
      icon: Shield,
      title: "Advocacy Support",
      description: "FAIITA represents your interests before government bodies, GST council, and regulatory authorities.",
    },
    {
      icon: Globe,
      title: "Collaboration",
      description: "Partner with fellow state associations for joint initiatives, events, and business opportunities.",
    },
  ];

  const testimonials = [
    {
      quote: "FAIITA has been instrumental in uniting IT dealers across India. Through their advocacy, we've seen real policy changes that benefit our members.",
      name: "Navin Gupta",
      role: "President, FAIITA",
      company: "Bihar IT Association",
    },
    {
      quote: "Being part of FAIITA gives our state association a voice at the national level. The networking opportunities are invaluable.",
      name: "Liju P. Raju",
      role: "Sr. Vice President, FAIITA",
      company: "Kerala IT Dealers Association",
    },
    {
      quote: "FAIITA's training programs and industry insights have helped our members stay competitive in a rapidly evolving market.",
      name: "Rajeev Chitkara",
      role: "Vice President, FAIITA",
      company: "Punjab Computer Dealers",
    },
    {
      quote: "The federation's efforts in GST simplification and digital transformation advocacy have directly benefited our 5,000+ members.",
      name: "Amit Kumar",
      role: "Secretary, FAIITA",
      company: "Delhi IT Traders Association",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#1e3a5f] py-16 text-white sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Uniting India&apos;s IT Fraternity Since 1990
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              The Federation of All India Information Technology Associations — 
              empowering 50,000+ IT channel partners across 25 states and 500+ cities.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-[#2d8a4e] text-white hover:bg-[#236b3d] sm:w-auto"
                )}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "w-full border-white text-white hover:bg-white/10 sm:w-auto"
                )}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 text-[#1e3a5f]">
                  <stat.icon className="h-5 w-5" />
                  <span className="text-2xl font-bold sm:text-3xl">{stat.value}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-[#1e3a5f] sm:text-3xl">
              Membership Benefits
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
              State IT associations that join FAIITA gain access to a powerful national network and exclusive resources.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2d8a4e]/10 mb-4">
                  <benefit.icon className="h-5 w-5 text-[#2d8a4e]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1e3a5f]">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAIITA by the Numbers */}
      <section className="py-14 sm:py-20 bg-[#1e3a5f] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              FAIITA by the Numbers
            </h2>
            <p className="mt-3 text-white/70">
              Our growing impact across India&apos;s IT ecosystem
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "25", label: "State Associations", sub: "Across India" },
              { value: "50K+", label: "Channel Partners", sub: "Indirect Members" },
              { value: "25L+", label: "Employment", sub: "Jobs Supported" },
              { value: "35+", label: "Years", sub: "Since 1990" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl font-bold text-[#2d8a4e]">{item.value}</div>
                <div className="mt-2 font-semibold">{item.label}</div>
                <div className="text-sm text-white/60">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-20 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-[#1e3a5f] sm:text-3xl">
              What Our Leaders Say
            </h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[320px] max-w-[400px] snap-start bg-gray-50 rounded-lg p-6 border"
              >
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f] text-white font-bold text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#1e3a5f]">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                    <div className="text-xs text-[#2d8a4e]">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1e3a5f] sm:text-3xl">
                Latest News
              </h2>
              <p className="mt-2 text-muted-foreground">
                Stay updated with the latest developments in India&apos;s IT trade.
              </p>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center text-sm font-medium text-[#1e3a5f] hover:underline"
            >
              View all news
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((article) => (
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
                    {article.category && (
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="line-clamp-2 text-base font-semibold">
                    <Link href={`/news/${article.slug}`} className="hover:text-[#1e3a5f] hover:underline">
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
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="border-t bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1e3a5f] sm:text-3xl">
                Upcoming Events
              </h2>
              <p className="mt-2 text-muted-foreground">
                Connect with the community at our upcoming events across India.
              </p>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center text-sm font-medium text-[#1e3a5f] hover:underline"
            >
              View all events
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {formatDate(event.startDate)}
                    {event.endDate && ` - ${formatDate(event.endDate)}`}
                    {event.isOnline && (
                      <Badge variant="secondary" className="text-xs">Online</Badge>
                    )}
                  </div>
                  <CardTitle className="line-clamp-2 text-base font-semibold">
                    <Link href={`/events/${event.slug}`} className="hover:text-[#1e3a5f] hover:underline">
                      {event.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-[#1e3a5f]">
                    <MapPin className="h-4 w-4" />
                    {event.isOnline ? "Online Event" : event.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#2d8a4e] py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Ready to Connect with India&apos;s Largest IT Network?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              State IT associations can reach out to FAIITA for membership and collaboration opportunities.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-white text-[#2d8a4e] hover:bg-white/90 sm:w-auto"
                )}
              >
                Contact Us
              </Link>
              <Link
                href="/about"
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
    </div>
  );
}