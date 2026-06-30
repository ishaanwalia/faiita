export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { Calendar, MapPin } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await prisma.event.findUnique({ where: { slug } });
  if (!event) return {};
  return {
    title: `${event.title} | FAIITA Events`,
    description: event.description,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await prisma.event.findUnique({ where: { slug } });

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary">{event.status}</Badge>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
          {event.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {event.startDate.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {event.endDate && (
              <span>
                {" "}
                -{" "}
                {event.endDate.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {event.isOnline ? "Online Event" : event.location}
          </div>
        </div>

        {event.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={event.image}
            alt={event.title}
            className="mt-8 aspect-video w-full rounded-xl object-cover"
          />
        )}

        <div className="prose prose-lg mt-8 max-w-none text-muted-foreground">
          <div className="whitespace-pre-line">{event.description}</div>
        </div>
      </div>
    </div>
  );
}
