import { MapPin, Phone, Mail, Users, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "force-static";

const stateAssociations = [
  { id: "1", state: "Andhra Pradesh", city: "Nellore", associationName: "CAPITA", presidentName: "BV Deepak Kumar", memberCount: 2500, phone: "+91 98480 12345", email: "info@capita.org", website: "https://capita.org" },
  { id: "2", state: "Assam", city: "Guwahati", associationName: "Assam IT Forum", presidentName: "Himanta Sarma", memberCount: 600, phone: "+91 98640 12345", email: "info@assamitforum.org", website: "https://assamitforum.org" },
  { id: "3", state: "Bihar", city: "Patna", associationName: "BITA", presidentName: "Navin Gupta", memberCount: 900, phone: "+91 93347 15522", email: "info@bita.org", website: "https://bita.org" },
  { id: "4", state: "Chhattisgarh", city: "Raipur", associationName: "CCMDA", presidentName: "Deepak Vidhani", memberCount: 800, phone: "+91 98271 12345", email: "info@ccmda.org", website: "https://ccmda.org" },
  { id: "5", state: "Delhi", city: "New Delhi", associationName: "ADCTA", presidentName: "Shyam Sunder Modi", memberCount: 3500, phone: "+91 98100 12345", email: "info@adcta.org", website: "https://adcta.org" },
  { id: "6", state: "Goa", city: "Margao", associationName: "GIBA", presidentName: "Balkrishna Mohan Prabhudesai", memberCount: 400, phone: "+91 98220 12345", email: "info@giba.org", website: "https://giba.org" },
  { id: "7", state: "Gujarat", city: "Gandhinagar", associationName: "FITAG", presidentName: "Gaurang R Vyas", memberCount: 4200, phone: "+91 98250 12345", email: "info@fitag.org", website: "https://fitag.org" },
  { id: "8", state: "Haryana", city: "Gurgaon", associationName: "HCDA", presidentName: "Vijay Kumar", memberCount: 1100, phone: "+91 98120 12345", email: "info@hcda.org", website: "https://hcda.org" },
  { id: "9", state: "Himachal Pradesh", city: "Shimla", associationName: "HPCDA", presidentName: "Rajesh Sharma", memberCount: 350, phone: "+91 98160 12345", email: "info@hpcda.org", website: "https://hpcda.org" },
  { id: "10", state: "Jammu and Kashmir", city: "Srinagar", associationName: "JKITDA", presidentName: "Farooq Ahmed", memberCount: 280, phone: "+91 99060 12345", email: "info@jkitda.org", website: "https://jkitda.org" },
  { id: "11", state: "Jharkhand", city: "Ranchi", associationName: "JCDA", presidentName: "Ramesh Kumar", memberCount: 550, phone: "+91 98350 12345", email: "info@jcda.org", website: "https://jcda.org" },
  { id: "12", state: "Karnataka", city: "Bangalore", associationName: "DEALiT", presidentName: "Arun Nagaraja", memberCount: 4800, phone: "+91 99000 12345", email: "info@deait.org", website: "https://deait.org" },
  { id: "13", state: "Kerala", city: "Thrissur", associationName: "AKITDA", presidentName: "Liju Raju P", memberCount: 2100, phone: "+91 98460 12345", email: "info@akitda.org", website: "https://akitda.org" },
  { id: "14", state: "Madhya Pradesh", city: "Bhopal", associationName: "MPCDA", presidentName: "Suresh Patel", memberCount: 1600, phone: "+91 98260 12345", email: "info@mpcda.org", website: "https://mpcda.org" },
  { id: "15", state: "Maharashtra", city: "Mumbai", associationName: "FITAM", presidentName: "Champak Raj Gurjar", memberCount: 5200, phone: "+91 98201 23456", email: "info@fitam.org", website: "https://fitam.org" },
  { id: "16", state: "Meghalaya", city: "Shillong", associationName: "MITDA", presidentName: "James Lyngdoh", memberCount: 120, phone: "+91 98630 12345", email: "info@mitda.org", website: "https://mitda.org" },
  { id: "17", state: "Nagaland", city: "Kohima", associationName: "NCTA", presidentName: "Kevichusa Angami", memberCount: 80, phone: "+91 98620 12345", email: "info@ncta.org", website: "https://ncta.org" },
  { id: "18", state: "Odisha", city: "Cuttack", associationName: "ITAO", presidentName: "Arun Kumar Dey", memberCount: 1200, phone: "+91 99370 12345", email: "info@itao.org", website: "https://itao.org" },
  { id: "19", state: "Punjab", city: "Chandigarh", associationName: "PACT", presidentName: "Sanjeev Walia", memberCount: 1500, phone: "+91 98150 12345", email: "info@pact.org", website: "https://pact.org" },
  { id: "20", state: "Rajasthan", city: "Bhilwara", associationName: "RCTA", presidentName: "Sugriv Singh Ranawat", memberCount: 1800, phone: "+91 98280 12345", email: "info@rcta.org", website: "https://rcta.org" },
  { id: "21", state: "Sikkim", city: "Gangtok", associationName: "SITDA", presidentName: "Pema Dorjee", memberCount: 90, phone: "+91 97330 12345", email: "info@sitda.org", website: "https://sitda.org" },
  { id: "22", state: "Tamil Nadu", city: "Chennai", associationName: "TNCDA", presidentName: "Karthikeyan R", memberCount: 3800, phone: "+91 98400 12345", email: "info@tncda.org", website: "https://tncda.org" },
  { id: "23", state: "Telangana", city: "Hyderabad", associationName: "TITA", presidentName: "Venkatesh Rao", memberCount: 2900, phone: "+91 98490 12345", email: "info@tita.org", website: "https://tita.org" },
  { id: "24", state: "Uttarakhand", city: "Dehradun", associationName: "UKCDA", presidentName: "Anil Joshi", memberCount: 450, phone: "+91 98370 12345", email: "info@ukcda.org", website: "https://ukcda.org" },
  { id: "25", state: "Uttar Pradesh", city: "Allahabad", associationName: "UPCDA", presidentName: "Shiv Shankar Singh", memberCount: 2800, phone: "+91 98390 12345", email: "info@upcda.org", website: "https://upcda.org" },
  { id: "26", state: "West Bengal", city: "Kolkata", associationName: "CIITA", presidentName: "Hari Balasubramanian", memberCount: 3200, phone: "+91 98300 12345", email: "info@ciita.org", website: "https://ciita.org" },
];

export default function StateAssociationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#1e3a5f]">State Associations</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            FAIITA unites 25 state-level IT associations across India. 
            Click on any state to view details.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-4 text-center border">
            <div className="text-2xl font-bold text-[#1e3a5f]">{stateAssociations.length}</div>
            <div className="text-xs text-muted-foreground">States</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border">
            <div className="text-2xl font-bold text-[#2d8a4e]">
              {stateAssociations.reduce((sum, a) => sum + a.memberCount, 0).toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground">Total Members</div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stateAssociations.map((assoc) => (
            <Card key={assoc.id} className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base text-[#1e3a5f]">{assoc.state}</CardTitle>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e3a5f] text-white text-xs font-bold">
                    {assoc.state.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <p className="text-xs text-[#2d8a4e] font-medium">{assoc.associationName}</p>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" />
                  {assoc.city}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4 shrink-0" />
                  {assoc.memberCount.toLocaleString()} members
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0" />
                  {assoc.phone}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="truncate">{assoc.email}</span>
                </div>
                {assoc.website && (
                  <div className="flex items-center gap-2 text-[#2d8a4e]">
                    <Globe className="h-4 w-4 shrink-0" />
                    <a href={assoc.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Website
                    </a>
                  </div>
                )}
                <div className="pt-2 border-t">
                  <span className="text-xs text-muted-foreground">President: </span>
                  <span className="text-xs font-medium">{assoc.presidentName}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}