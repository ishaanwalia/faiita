export const dynamic = "force-dynamic";

import { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Events | FAIITA",
  description: "Upcoming conferences, webinars, trade shows, and AGM for FAIITA members.",
};

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    orderBy: { startDate: "asc" },
  });

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
        Events
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Connect with the FAIITA community at our upcoming conferences,
        webinars, and trade shows across India.
      </p>

      {events.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {event.startDate.toLocaleDateString("en-IN")}
                  <Badge variant="secondary" className="text-xs">
                    {event.status}
                  </Badge>
                </div>
                <CardTitle className="line-clamp-2 text-base">
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
        <p className="mt-10 text-muted-foreground">No events available.</p>
      )}
    </div>
  );
}
