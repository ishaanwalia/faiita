import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/scroll-animation";
import { formatDate } from "@/lib/utils";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowLeft,
  Users,
  Share2,
  Mail,
  CheckCircle,
} from "lucide-react";

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

const events = [
  {
    slug: "faiita-summit-2026",
    title: "FAIITA Summit 2026",
    description: "The annual flagship event bringing together IT leaders from all 25 states to discuss Digital India initiatives, policy advocacy, and industry trends. Join us for 3 days of networking, knowledge sharing, and strategic planning.",
    fullContent: `The FAIITA Summit 2026 is our flagship annual event that brings together the leadership of all 25 state associations under one roof. This year's summit focuses on "Digital India: The Role of Channel Partners" and will feature keynote addresses from government officials, industry experts, and FAIITA office bearers.

Key Highlights:
• Policy discussions with Ministry of Electronics & IT representatives
• GST simplification workshops for IT channel partners
• Networking sessions with 200+ delegates
• Exhibition showcasing latest IT products and solutions
• Awards ceremony recognizing outstanding state associations

The summit will be held at the India Habitat Centre, New Delhi, with accommodation arranged for outstation delegates. All FAIITA member associations are encouraged to send their leadership representatives.`,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
    startDate: "2026-08-15",
    endDate: "2026-08-17",
    location: "India Habitat Centre, New Delhi",
    isOnline: false,
    status: "upcoming",
    category: "Summit",
    attendees: "200+",
    agenda: [
      { time: "Day 1 — 10:00 AM", title: "Inaugural Session & Keynote Address", speaker: "Chief Guest — Ministry of Electronics & IT" },
      { time: "Day 1 — 2:00 PM", title: "Panel: Digital India & Channel Partners", speaker: "FAIITA President & Industry Leaders" },
      { time: "Day 2 — 10:00 AM", title: "GST Simplification Workshop", speaker: "CA Expert Panel" },
      { time: "Day 2 — 4:00 PM", title: "State Association Best Practices", speaker: "State Presidents" },
      { time: "Day 3 — 10:00 AM", title: "Awards & Recognition Ceremony", speaker: "FAIITA Governing Body" },
    ],
  },
  {
    slug: "cybersecurity-workshop",
    title: "Cybersecurity Workshop",
    description: "Comprehensive workshop on CERT-In guidelines, secure practices, and compliance requirements for IT channel partners.",
    fullContent: `This intensive two-day workshop is designed specifically for IT channel partners to understand and implement CERT-In cybersecurity guidelines. With increasing cyber threats targeting the IT supply chain, this workshop is essential for all members.

Topics Covered:
• CERT-In compliance requirements for IT dealers
• Incident response and reporting protocols
• Secure supply chain management
• Data protection best practices
• Ransomware prevention and mitigation

The workshop includes hands-on sessions, case studies, and a certification exam. Participants will receive a CERT-In compliance certificate upon completion.`,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
    startDate: "2026-07-20",
    endDate: "2026-07-21",
    location: "Hotel Taj Lands End, Mumbai",
    isOnline: false,
    status: "upcoming",
    category: "Workshop",
    attendees: "150",
    agenda: [
      { time: "Day 1 — 9:30 AM", title: "CERT-In Guidelines Overview", speaker: "Cybersecurity Expert" },
      { time: "Day 1 — 2:00 PM", title: "Hands-on: Incident Response", speaker: "Ethical Hacker Panel" },
      { time: "Day 2 — 9:30 AM", title: "Supply Chain Security", speaker: "IT Security Consultant" },
      { time: "Day 2 — 2:00 PM", title: "Certification Exam", speaker: "FAIITA Training Team" },
    ],
  },
  {
    slug: "digital-transformation-webinar",
    title: "Digital Transformation Webinar",
    description: "Online webinar exploring government digital transformation opportunities for IT channel partners.",
    fullContent: `Join us for an exclusive online webinar on government digital transformation opportunities. Learn about emerging tenders, procurement processes, and how your business can partner with government agencies.

Webinar Highlights:
• Overview of Digital India and Make in India initiatives
• Government procurement portals and tender processes
• How to register as a government vendor
• Success stories from FAIITA member associations
• Q&A session with government liaison officers

This webinar is free for all FAIITA member association members. Registration is mandatory to receive the meeting link.`,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop",
    startDate: "2026-07-10",
    location: "Online (Zoom)",
    isOnline: true,
    status: "upcoming",
    category: "Webinar",
    attendees: "500+",
    agenda: [
      { time: "10:00 AM", title: "Digital India Overview", speaker: "Government Representative" },
      { time: "11:00 AM", title: "Procurement Process Guide", speaker: "FAIITA Secretary" },
      { time: "12:00 PM", title: "Success Stories & Q&A", speaker: "Member Panel" },
    ],
  },
  {
    slug: "gst-compliance-seminar",
    title: "GST Compliance Seminar",
    description: "In-depth seminar on the latest GST compliance measures for IT channel partners.",
    fullContent: `A comprehensive seminar covering all aspects of GST compliance for IT channel partners. This session is crucial for ensuring your business stays compliant with the latest regulations.

Topics include e-invoicing, e-way bills, return filing, and input credit claims.`,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    startDate: "2026-06-25",
    location: "Bangalore",
    isOnline: false,
    status: "past",
    category: "Seminar",
    attendees: "120",
    agenda: [
      { time: "10:00 AM", title: "GST Updates for IT Trade", speaker: "CA Panel" },
      { time: "2:00 PM", title: "E-invoicing Implementation", speaker: "GST Expert" },
    ],
  },
  {
    slug: "regional-meet-south",
    title: "FAIITA Regional Meet — South Zone",
    description: "Regional gathering of South Indian state associations.",
    fullContent: `The South Zone Regional Meet brought together IT association leaders from Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, and Telangana. Key discussions focused on regional logistics, shared procurement, and joint training initiatives.`,
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&h=600&fit=crop",
    startDate: "2026-06-10",
    endDate: "2026-06-11",
    location: "Chennai",
    isOnline: false,
    status: "past",
    category: "Regional Meet",
    attendees: "80",
    agenda: [
      { time: "Day 1", title: "Regional Challenges Discussion", speaker: "State Presidents" },
      { time: "Day 2", title: "Joint Initiative Planning", speaker: "FAIITA VP" },
    ],
  },
];

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const isUpcoming = event.status === "upcoming";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <ScrollAnimation animation="slide-up">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Events
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-[#FF9933] text-white border-0">
                  {event.category}
                </Badge>
                {isUpcoming ? (
                  <Badge className="bg-emerald-500 text-white border-0">Upcoming</Badge>
                ) : (
                  <Badge variant="secondary" className="text-gray-600">Past Event</Badge>
                )}
                {event.isOnline && (
                  <Badge className="bg-blue-500 text-white border-0">Online</Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(event.startDate)}
                  {event.endDate && ` - ${formatDate(event.endDate)}`}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {event.attendees} Expected
                </span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ScrollAnimation animation="slide-up">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">About This Event</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-8">
                  {event.fullContent}
                </p>
              </div>
            </ScrollAnimation>

            {/* Agenda */}
            <ScrollAnimation animation="slide-up">
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Event Agenda</h2>
                <div className="space-y-4">
                  {event.agenda.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 bg-gray-50 rounded-xl border-l-4 border-[#FF9933]"
                    >
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-[#FF9933]/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-[#FF9933]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-[#FF9933] font-medium">{item.time}</p>
                        <p className="font-semibold text-[#0A2540]">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.speaker}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-[#0A2540] mb-4">Event Details</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#FF9933] mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0A2540]">Date</p>
                      <p className="text-sm text-gray-500">
                        {formatDate(event.startDate)}
                        {event.endDate && ` - ${formatDate(event.endDate)}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FF9933] mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0A2540]">Location</p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#FF9933] mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0A2540]">Attendees</p>
                      <p className="text-sm text-gray-500">{event.attendees} expected</p>
                    </div>
                  </div>
                </div>

                {isUpcoming && (
                  <div className="space-y-3">
                    <Button className="w-full h-12 bg-[#FF9933] hover:bg-[#e68a2e] text-white font-semibold rounded-lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Register Interest
                    </Button>
                    <Button variant="outline" className="w-full h-12 rounded-lg border-gray-200">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Event
                    </Button>
                  </div>
                )}

                {!isUpcoming && (
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      This event has concluded
                    </div>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">For inquiries:</p>
                  <a
                    href="mailto:events@faiita.co.in"
                    className="text-[#FF9933] font-medium hover:underline text-sm"
                  >
                    events@faiita.co.in
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </main>
  );
}
