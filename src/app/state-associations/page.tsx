import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/scroll-animation";
import { AnimatedCounter } from "@/components/animated-counter";
import { IndiaMap } from "./components/india-map";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  Building2,
  TrendingUp,
} from "lucide-react";

const stateAssociations = [
  { state: "Andhra Pradesh", city: "Vijayawada", associationName: "CAPITA", presidentName: "BV Deepak Kumar", memberCount: 2500, phone: "+91 98480 12345", email: "info@capita.org", website: "https://capita.org" },
  { state: "Assam", city: "Guwahati", associationName: "Assam IT Forum", presidentName: "Himanta Sarma", memberCount: 600, phone: "+91 98640 12345", email: "info@assamitforum.org" },
  { state: "Bihar", city: "Patna", associationName: "BITA", presidentName: "Navin Gupta", memberCount: 900, phone: "+91 93347 15522", email: "info@bita.org" },
  { state: "Chhattisgarh", city: "Raipur", associationName: "CCMDA", presidentName: "Deepak Vidhani", memberCount: 800, phone: "+91 98271 12345", email: "info@ccmda.org" },
  { state: "Delhi", city: "New Delhi", associationName: "ADCTA", presidentName: "Shyam Sunder Modi", memberCount: 3500, phone: "+91 98100 12345", email: "info@adcta.org" },
  { state: "Goa", city: "Panaji", associationName: "GIBA", presidentName: "Balkrishna Mohan Prabhudesai", memberCount: 400, phone: "+91 98220 12345", email: "info@giba.org" },
  { state: "Gujarat", city: "Ahmedabad", associationName: "FITAG", presidentName: "Gaurang R Vyas", memberCount: 4200, phone: "+91 98250 12345", email: "info@fitag.org" },
  { state: "Haryana", city: "Gurugram", associationName: "HCDA", presidentName: "Vijay Kumar", memberCount: 1100, phone: "+91 98120 12345", email: "info@hcda.org" },
  { state: "Himachal Pradesh", city: "Shimla", associationName: "HPCDA", presidentName: "Rajesh Sharma", memberCount: 350, phone: "+91 98160 12345", email: "info@hpcda.org" },
  { state: "Jammu and Kashmir", city: "Srinagar", associationName: "JKITDA", presidentName: "Farooq Ahmed", memberCount: 280, phone: "+91 99060 12345", email: "info@jkitda.org" },
  { state: "Jharkhand", city: "Ranchi", associationName: "JCDA", presidentName: "Ramesh Kumar", memberCount: 550, phone: "+91 98350 12345", email: "info@jcda.org" },
  { state: "Karnataka", city: "Bangalore", associationName: "DEALiT", presidentName: "Arun Nagaraja", memberCount: 4800, phone: "+91 99000 12345", email: "info@deait.org" },
  { state: "Kerala", city: "Kochi", associationName: "AKITDA", presidentName: "Liju Raju P", memberCount: 2100, phone: "+91 98460 12345", email: "info@akitda.org" },
  { state: "Madhya Pradesh", city: "Bhopal", associationName: "MPCDA", presidentName: "Suresh Patel", memberCount: 1600, phone: "+91 98260 12345", email: "info@mpcda.org" },
  { state: "Maharashtra", city: "Mumbai", associationName: "FITAM", presidentName: "Champak Raj Gurjar", memberCount: 5200, phone: "+91 98201 23456", email: "info@fitam.org" },
  { state: "Meghalaya", city: "Shillong", associationName: "MITDA", presidentName: "James Lyngdoh", memberCount: 120, phone: "+91 98630 12345", email: "info@mitda.org" },
  { state: "Nagaland", city: "Kohima", associationName: "NCTA", presidentName: "Kevichusa Angami", memberCount: 80, phone: "+91 98620 12345", email: "info@ncta.org" },
  { state: "Odisha", city: "Bhubaneswar", associationName: "ITAO", presidentName: "Arun Kumar Dey", memberCount: 1200, phone: "+91 99370 12345", email: "info@itao.org" },
  { state: "Punjab", city: "Chandigarh", associationName: "PACT", presidentName: "Sanjeev Walia", memberCount: 1500, phone: "+91 98150 12345", email: "info@pact.org" },
  { state: "Rajasthan", city: "Jaipur", associationName: "RCTA", presidentName: "Sugriv Singh Ranawat", memberCount: 1800, phone: "+91 98280 12345", email: "info@rcta.org" },
  { state: "Sikkim", city: "Gangtok", associationName: "SITDA", presidentName: "Pema Dorjee", memberCount: 90, phone: "+91 97330 12345", email: "info@sitda.org" },
  { state: "Tamil Nadu", city: "Chennai", associationName: "TNCDA", presidentName: "Karthikeyan R", memberCount: 3800, phone: "+91 98400 12345", email: "info@tncda.org" },
  { state: "Telangana", city: "Hyderabad", associationName: "TITA", presidentName: "Venkatesh Rao", memberCount: 2900, phone: "+91 98490 12345", email: "info@tita.org" },
  { state: "Uttarakhand", city: "Dehradun", associationName: "UKCDA", presidentName: "Anil Joshi", memberCount: 450, phone: "+91 98370 12345", email: "info@ukcda.org" },
  { state: "Uttar Pradesh", city: "Lucknow", associationName: "UPCDA", presidentName: "Shiv Shankar Singh", memberCount: 2800, phone: "+91 98390 12345", email: "info@upcda.org" },
  { state: "West Bengal", city: "Kolkata", associationName: "CIITA", presidentName: "Hari Balasubramanian", memberCount: 3200, phone: "+91 98300 12345", email: "info@ciita.org" },
];

export default function StateAssociationsPage() {
  const totalMembers = stateAssociations.reduce((sum, a) => sum + a.memberCount, 0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#0A2540] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF9933] rounded-full blur-[128px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="slide-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/20 text-[#FF9933] text-sm font-medium mb-4">
              Our Network
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              State Associations
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              FAIITA unites 25 state-level IT associations across India.
              Click on any state on the map to view details.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ScrollAnimation animation="slide-up">
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#FF9933]/10 flex items-center justify-center mb-3">
                  <Building2 className="w-6 h-6 text-[#FF9933]" />
                </div>
                <div className="text-3xl font-bold text-[#0A2540]">
                  <AnimatedCounter target={stateAssociations.length} duration={1.5} />
                </div>
                <p className="text-gray-500 text-sm">State Associations</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={100}>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#FF9933]/10 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-[#FF9933]" />
                </div>
                <div className="text-3xl font-bold text-[#0A2540]">
                  <AnimatedCounter target={totalMembers} suffix="" duration={2} />
                </div>
                <p className="text-gray-500 text-sm">Total Members</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#FF9933]/10 flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-[#FF9933]" />
                </div>
                <div className="text-3xl font-bold text-[#0A2540]">35+</div>
                <p className="text-gray-500 text-sm">Years of Unity</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-up">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-2">
                Interactive India Map
              </h2>
              <p className="text-gray-500">
                Hover to highlight, click to view state association details
              </p>
            </div>
          </ScrollAnimation>
          <IndiaMap stateAssociations={stateAssociations} />
        </div>
      </section>

      {/* State Cards Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-up">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-2">
                All State Associations
              </h2>
              <p className="text-gray-500">
                Browse all 25 state IT associations affiliated with FAIITA
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {stateAssociations.map((assoc, i) => (
              <ScrollAnimation key={assoc.state} animation="slide-up" delay={i * 50}>
                <Card className="group border-0 shadow-sm hover:shadow-lg transition-all duration-300 h-full bg-white overflow-hidden">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0A2540] flex items-center justify-center text-white font-bold text-sm">
                        {assoc.state.slice(0, 2).toUpperCase()}
                      </div>
                      <Badge variant="secondary" className="text-xs bg-[#FF9933]/10 text-[#FF9933] border-0">
                        {assoc.memberCount.toLocaleString()} members
                      </Badge>
                    </div>

                    <h3 className="font-bold text-[#0A2540] mb-1 group-hover:text-[#FF9933] transition-colors">
                      {assoc.state}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {assoc.associationName}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span>{assoc.city}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span>President: {assoc.presidentName}</span>
                      </div>
                      <a
                        href={`tel:${assoc.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-[#FF9933] hover:underline"
                      >
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        <span>{assoc.phone}</span>
                      </a>
                      <a
                        href={`mailto:${assoc.email}`}
                        className="flex items-center gap-2 text-[#FF9933] hover:underline"
                      >
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{assoc.email}</span>
                      </a>
                      {assoc.website && (
                        <a
                          href={assoc.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#FF9933] hover:underline"
                        >
                          <Globe className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">Website</span>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
