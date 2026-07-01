import Link from "next/link";
import { getInitials } from "@/lib/utils";
import { MapPin, Phone, Mail, ChevronRight, Target, Eye, BookOpen, Users } from "lucide-react";

export const dynamic = "force-static";

const officeBearers = [
  { id: "1", role: "PRESIDENT", name: "Navin Gupta", phone: "+91 93347 15522", email: "president@faiita.co.in" },
  { id: "2", role: "SR_VP", name: "Liju P. Raju", phone: "+91 93874 2552", email: "sr.vp@faiita.co.in" },
  { id: "3", role: "VP", name: "Rajeev Chitkara", phone: "+91 98100 12345", email: "vp@faiita.co.in" },
  { id: "4", role: "SECRETARY", name: "Amit Kumar", phone: "+91 98765 43210", email: "secretary@faiita.co.in" },
];

const stateAssociations = [
  { id: "1", state: "Andhra Pradesh", city: "Nellore", associationName: "CAPITA", presidentName: "BV Deepak Kumar", memberCount: 2500, phone: "+91 98480 12345", email: "info@capita.org" },
  { id: "2", state: "Assam", city: "Guwahati", associationName: "Assam IT Forum", presidentName: "Himanta Sarma", memberCount: 600, phone: "+91 98640 12345", email: "info@assamitforum.org" },
  { id: "3", state: "Bihar", city: "Patna", associationName: "BITA", presidentName: "Navin Gupta", memberCount: 900, phone: "+91 93347 15522", email: "info@bita.org" },
  { id: "4", state: "Chhattisgarh", city: "Raipur", associationName: "CCMDA", presidentName: "Deepak Vidhani", memberCount: 800, phone: "+91 98271 12345", email: "info@ccmda.org" },
  { id: "5", state: "Delhi", city: "New Delhi", associationName: "ADCTA", presidentName: "Shyam Sunder Modi", memberCount: 3500, phone: "+91 98100 12345", email: "info@adcta.org" },
  { id: "6", state: "Goa", city: "Margao", associationName: "GIBA", presidentName: "Balkrishna Mohan Prabhudesai", memberCount: 400, phone: "+91 98220 12345", email: "info@giba.org" },
  { id: "7", state: "Gujarat", city: "Gandhinagar", associationName: "FITAG", presidentName: "Gaurang R Vyas", memberCount: 4200, phone: "+91 98250 12345", email: "info@fitag.org" },
  { id: "8", state: "Haryana", city: "Gurgaon", associationName: "HCDA", presidentName: "Vijay Kumar", memberCount: 1100, phone: "+91 98120 12345", email: "info@hcda.org" },
  { id: "9", state: "Himachal Pradesh", city: "Shimla", associationName: "HPCDA", presidentName: "Rajesh Sharma", memberCount: 350, phone: "+91 98160 12345", email: "info@hpcda.org" },
  { id: "10", state: "Jammu and Kashmir", city: "Srinagar", associationName: "JKITDA", presidentName: "Farooq Ahmed", memberCount: 280, phone: "+91 99060 12345", email: "info@jkitda.org" },
  { id: "11", state: "Jharkhand", city: "Ranchi", associationName: "JCDA", presidentName: "Ramesh Kumar", memberCount: 550, phone: "+91 98350 12345", email: "info@jcda.org" },
  { id: "12", state: "Karnataka", city: "Bangalore", associationName: "DEALiT", presidentName: "Arun Nagaraja", memberCount: 4800, phone: "+91 99000 12345", email: "info@deait.org" },
  { id: "13", state: "Kerala", city: "Thrissur", associationName: "AKITDA", presidentName: "Liju Raju P", memberCount: 2100, phone: "+91 98460 12345", email: "info@akitda.org" },
  { id: "14", state: "Madhya Pradesh", city: "Bhopal", associationName: "MPCDA", presidentName: "Suresh Patel", memberCount: 1600, phone: "+91 98260 12345", email: "info@mpcda.org" },
  { id: "15", state: "Maharashtra", city: "Mumbai", associationName: "FITAM", presidentName: "Champak Raj Gurjar", memberCount: 5200, phone: "+91 98201 23456", email: "info@fitam.org" },
  { id: "16", state: "Meghalaya", city: "Shillong", associationName: "MITDA", presidentName: "James Lyngdoh", memberCount: 120, phone: "+91 98630 12345", email: "info@mitda.org" },
  { id: "17", state: "Nagaland", city: "Kohima", associationName: "NCTA", presidentName: "Kevichusa Angami", memberCount: 80, phone: "+91 98620 12345", email: "info@ncta.org" },
  { id: "18", state: "Odisha", city: "Cuttack", associationName: "ITAO", presidentName: "Arun Kumar Dey", memberCount: 1200, phone: "+91 99370 12345", email: "info@itao.org" },
  { id: "19", state: "Punjab", city: "Chandigarh", associationName: "PACT", presidentName: "Sanjeev Walia", memberCount: 1500, phone: "+91 98150 12345", email: "info@pact.org" },
  { id: "20", state: "Rajasthan", city: "Bhilwara", associationName: "RCTA", presidentName: "Sugriv Singh Ranawat", memberCount: 1800, phone: "+91 98280 12345", email: "info@rcta.org" },
  { id: "21", state: "Sikkim", city: "Gangtok", associationName: "SITDA", presidentName: "Pema Dorjee", memberCount: 90, phone: "+91 97330 12345", email: "info@sitda.org" },
  { id: "22", state: "Tamil Nadu", city: "Chennai", associationName: "TNCDA", presidentName: "Karthikeyan R", memberCount: 3800, phone: "+91 98400 12345", email: "info@tncda.org" },
  { id: "23", state: "Telangana", city: "Hyderabad", associationName: "TITA", presidentName: "Venkatesh Rao", memberCount: 2900, phone: "+91 98490 12345", email: "info@tita.org" },
  { id: "24", state: "Uttarakhand", city: "Dehradun", associationName: "UKCDA", presidentName: "Anil Joshi", memberCount: 450, phone: "+91 98370 12345", email: "info@ukcda.org" },
  { id: "25", state: "Uttar Pradesh", city: "Allahabad", associationName: "UPCDA", presidentName: "Shiv Shankar Singh", memberCount: 2800, phone: "+91 98390 12345", email: "info@upcda.org" },
  { id: "26", state: "West Bengal", city: "Kolkata", associationName: "CIITA", presidentName: "Hari Balasubramanian", memberCount: 3200, phone: "+91 98300 12345", email: "info@ciita.org" },
];

const services = [
  { icon: Target, title: "Policy Advocacy", desc: "Representing IT channel partners before government bodies and regulatory authorities." },
  { icon: Users, title: "Networking", desc: "Connecting 25 state associations and 50,000+ dealers across India." },
  { icon: BookOpen, title: "Knowledge Sharing", desc: "Industry reports, market trends, and best practices for members." },
  { icon: Eye, title: "Market Intelligence", desc: "Insights on emerging technologies and business opportunities." },
  { icon: Target, title: "Training & Development", desc: "Skill development programs for IT entrepreneurs and dealers." },
  { icon: Users, title: "Events & Conferences", desc: "National summits, regional meets, and webinars." },
  { icon: Target, title: "GST Support", desc: "Guidance on taxation and compliance matters for IT trade." },
  { icon: Eye, title: "Digital India", desc: "Bridging the digital divide through channel partner ecosystem." },
];

const roleLabels: Record<string, string> = {
  PRESIDENT: "President",
  SR_VP: "Sr. Vice President",
  VP: "Vice President",
  SECRETARY: "Secretary",
  TREASURER: "Treasurer",
  JOINT_SECRETARY: "Joint Secretary",
  JOINT_TREASURER: "Joint Treasurer",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#1e3a5f] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              About FAIITA
            </h1>
            <p className="mt-6 text-lg text-white/80">
              The Federation of All India Information Technology Associations — 
              uniting India&apos;s IT fraternity since 1990.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To create an apex All India body representing all state-level IT associations, 
                promoting the advancement of ICT trade in India, and providing a unified platform 
                for channel partners to exchange ideas, share information, and address common challenges.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most influential and respected federation empowering India&apos;s IT channel 
                partners, fostering ethical business practices, and driving digital transformation 
                across the nation through collaboration and advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Key Objectives</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Unite state-level IT associations under one national federation",
              "Advocate for favorable policies and taxation for IT channel partners",
              "Promote ethical business practices and protect consumer interests",
              "Facilitate knowledge sharing and industry best practices",
              "Organize conferences, seminars, and training programs",
              "Collaborate with government on Digital India and Make in India initiatives",
              "Bridge the digital divide through IT awareness programs",
              "Provide a unified voice for the IT dealer community",
            ].map((obj, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <ChevronRight className="h-5 w-5 text-[#2d8a4e] shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">FAIITA Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2d8a4e]/10 mb-4">
                  <s.icon className="h-5 w-5 text-[#2d8a4e]" />
                </div>
                <h3 className="font-semibold text-[#1e3a5f]">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Leadership Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {officeBearers.map((bearer) => (
              <div key={bearer.id} className="bg-white rounded-lg p-6 border text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1e3a5f] text-white text-2xl font-bold">
                  {getInitials(bearer.name)}
                </div>
                <h3 className="mt-4 font-semibold text-[#1e3a5f]">{bearer.name}</h3>
                <p className="text-sm text-[#2d8a4e] font-medium">{roleLabels[bearer.role] || bearer.role}</p>
                <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center justify-center gap-1">
                    <Phone className="h-3 w-3" />
                    {bearer.phone}
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Mail className="h-3 w-3" />
                    {bearer.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Coordinators Table */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">State Associations</h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-[#1e3a5f] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">State</th>
                  <th className="px-4 py-3 text-left font-medium">Association</th>
                  <th className="px-4 py-3 text-left font-medium">President</th>
                  <th className="px-4 py-3 text-left font-medium">Contact</th>
                  <th className="px-4 py-3 text-left font-medium">Members</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {stateAssociations.map((state) => (
                  <tr key={state.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-[#1e3a5f]">{state.state}</td>
                    <td className="px-4 py-3 text-muted-foreground">{state.associationName}</td>
                    <td className="px-4 py-3">{state.presidentName}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1 text-xs">
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3" /> {state.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="h-3 w-3" /> {state.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[#2d8a4e] font-medium">{state.memberCount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}