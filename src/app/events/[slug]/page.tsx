import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const events = await prisma.event.findMany({
    select: { slug: true },
  });
  return events.map((e) => ({ slug: e.slug }));
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const event = await prisma.event.findUnique({
    where: { slug },
  });

  if (!event) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/events" className="inline-flex items-center text-sm text-[#1e3a5f] hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Events
        </Link>
        
        <h1 className="text-3xl font-bold text-[#1e3a5f]">{event.title}</h1>
        
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(event.startDate).toLocaleDateString("en-IN")}
            {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString("en-IN")}`}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {event.isOnline ? "Online Event" : event.location}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg p-8 border">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
}