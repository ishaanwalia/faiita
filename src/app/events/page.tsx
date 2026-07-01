import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/scroll-animation";
import { formatDate } from "@/lib/utils";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Filter,
  Clock,
} from "lucide-react";

const events = [
  {
    slug: "faiita-summit-2026",
    title: "FAIITA Summit 2026",
    description: "The annual flagship event bringing together IT leaders from all 25 states to discuss Digital India initiatives, policy advocacy, and industry trends. Join us for 3 days of networking, knowledge sharing, and strategic planning.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    startDate: "2026-08-15",
    endDate: "2026-08-17",
    location: "New Delhi",
    isOnline: false,
    status: "upcoming",
    category: "Summit",
  },
  {
    slug: "cybersecurity-workshop",
    title: "Cybersecurity Workshop",
    description: "Comprehensive workshop on CERT-In guidelines, secure practices, and compliance requirements for IT channel partners. Expert-led sessions on threat detection and incident response.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    startDate: "2026-07-20",
    endDate: "2026-07-21",
    location: "Mumbai",
    isOnline: false,
    status: "upcoming",
    category: "Workshop",
  },
  {
    slug: "digital-transformation-webinar",
    title: "Digital Transformation Webinar",
    description: "Online webinar exploring government digital transformation opportunities for IT channel partners. Learn about emerging tenders, procurement processes, and partnership models.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    startDate: "2026-07-10",
    location: "Online",
    isOnline: true,
    status: "upcoming",
    category: "Webinar",
  },
  {
    slug: "gst-compliance-seminar",
    title: "GST Compliance Seminar",
    description: "In-depth seminar on the latest GST compliance measures for IT channel partners. Covers invoicing, returns filing, and e-way bill requirements.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
    startDate: "2026-06-25",
    location: "Bangalore",
    isOnline: false,
    status: "past",
    category: "Seminar",
  },
  {
    slug: "regional-meet-south",
    title: "FAIITA Regional Meet — South Zone",
    description: "Regional gathering of South Indian state associations to discuss regional challenges, share best practices, and plan collaborative initiatives.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=500&fit=crop",
    startDate: "2026-06-10",
    endDate: "2026-06-11",
    location: "Chennai",
    isOnline: false,
    status: "past",
    category: "Regional Meet",
  },
];

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const pastEvents = events.filter((e) => e.status === "past");

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#0A2540] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF9933] rounded-full blur-[128px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="slide-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/20 text-[#FF9933] text-sm font-medium mb-4">
              Events & Programs
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FAIITA Events
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Connect with the community at our upcoming events across India.
              From national summits to regional workshops and online webinars.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-up">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-[#FF9933] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#0A2540]">Upcoming Events</h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <ScrollAnimation key={event.slug} animation="slide-up" delay={i * 100}>
                <Link href={`/events/${event.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#FF9933] text-white border-0">
                          {event.category}
                        </Badge>
                      </div>
                      {event.isOnline && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-emerald-500 text-white border-0">
                            Online
                          </Badge>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">
                            {formatDate(event.startDate)}
                            {event.endDate && ` - ${formatDate(event.endDate)}`}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#FF9933] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                        {event.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                        <span className="text-[#FF9933] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Details
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-up">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
                <Clock className="w-5 h-5 text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#0A2540]">Past Events</h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, i) => (
              <ScrollAnimation key={event.slug} animation="slide-up" delay={i * 100}>
                <Link href={`/events/${event.slug}`} className="group block">
                  <div className="flex flex-col sm:flex-row gap-4 bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="relative w-full sm:w-48 h-40 sm:h-auto shrink-0 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#0A2540]/30" />
                    </div>
                    <div className="p-5 flex flex-col justify-center">
                      <Badge variant="secondary" className="w-fit mb-2 text-xs">
                        {event.category}
                      </Badge>
                      <h3 className="text-base font-bold text-[#0A2540] mb-1 group-hover:text-[#FF9933] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(event.startDate)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
