import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About FAIITA | Federation of All India IT Associations",
  description:
    "Learn about FAIITA's objective, mission, vision, leadership, and state coordinators across India.",
};

const services = [
  "Creating Business Opportunity for Members",
  "Supporting Make in India",
  "Participating in Digital India",
  "Working for Growth of channel Community",
  "Creating B2B opportunity",
  "Sharing New Technologies",
  "Exhibitions and Events",
  "Meeting social obligation",
];

const stateCoordinators = [
  { state: "Jammu & Kashmir", name: "Mr. Dixit Gupta", association: "Jammu Computer Dealers Association", contact: "+91 94191 92614" },
  { state: "Punjab & Chandigarh", name: "Mr. Gurpreet Singh", association: "Punjab Association of Computer Traders", contact: "+91 98140 99796" },
  { state: "Uttarakhand", name: "Mr. Gurmeet Singh Juneja", association: "Uttaranchal IT Traders Association", contact: "+91 79836 11572" },
  { state: "Rajasthan", name: "Mr. Rohit Arora", association: "Rajasthan Computer Traders Association", contact: "+91 98281 23000" },
  { state: "Rajasthan", name: "Mr. Parveen Jain", association: "Rajasthan Computer Traders Association", contact: "+91 93148 66177" },
  { state: "Uttar Pradesh", name: "Mr. Peeyush Jain", association: "UPCDA", contact: "+91 98390 35598" },
  { state: "Uttar Pradesh", name: "Mr. Manish Mehrotra", association: "Computer Dealers Welfare Association", contact: "+91 92355 10025" },
  { state: "Uttar Pradesh", name: "Mr. Piyush Batra", association: "UPCDA", contact: "+91 98189 51183" },
  { state: "Madhya Pradesh", name: "Mr. Manish Gupta", association: "M.P. Computer & Telecom Association", contact: "+91 98930 54419" },
  { state: "Madhya Pradesh", name: "Mr. Amit Jain", association: "Mahakaushal Computer Dealer's Association", contact: "+91 98261 84215" },
  { state: "Madhya Pradesh", name: "Mr. Manish Gupta", association: "BITOAA", contact: "+91 93031 30288" },
  { state: "Bihar", name: "Mr. Ashok Poddar", association: "Bihar IT Association", contact: "+91 93342 04334" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
          About FAIITA
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          FAIITA is the National Federation of IT Associations representing the IT
          trade fraternity involved in Retail, Distribution, Services & Solutions
          since IT was introduced in India. We are a team of about 50,000
          entrepreneurs who provide employment to over 25 lakh people and have a
          presence in 25 states across the country.
        </p>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-[#0A2540]">Objective</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              FAIITA is a national platform representing State level Associations,
              Federations, and standalone Associations of Channel Partners engaged in
              computer hardware trade, service providers, and System Integrators in
              the field of Information Communication and Technology business.
            </p>
            <p>
              FAIITA is registered as a national federation under the provisions of
              the Societies Act with the Registrar of Societies, New Delhi, and is
              managed by an elected team of office bearers.
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Design and communicate various training sessions on technical and
                commercial subjects to member associations, such as GeM, GST,
                Digital Transformation, and more.
              </li>
              <li>
                Extend information on webinars to member associations for
                participation and enablement.
              </li>
              <li>
                Tie up with SKILL NSDC — National Skill Development Corporation to
                design courses according to the needs of the ICT industry in India,
                solving manpower-related issues at various scales.
              </li>
              <li>
                Build a new website and B2B portal for all FAIITA members to enable
                them to sell across the country with new as well as surplus stocks.
              </li>
              <li>
                Enter into tri-party agreements with different states, TAITRA, and
                TCA to promote local manufacturing of computer hardware products.
              </li>
              <li>
                Explore new phenomena and off-shoots of the ICT business.
              </li>
            </ul>
          </div>
        </section>

        <Separator className="my-12" />

        <section>
          <h2 className="text-2xl font-bold text-[#0A2540]">Mission</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Our India body represents all State level Associations or standalone
              Associations of Channel Partners, service providers, and entrepreneurs
              in the Information, Communication, and Technology business.
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Tie up with SKILL NSDC — National Skill Development Corporation to
                help design courses according to the needs of the ICT industry in
                India, solving manpower-related issues at various scales.
              </li>
              <li>
                Design and communicate training sessions on technical and commercial
                subjects for member associations, such as GeM, GST, Digital
                Transformation, and more.
              </li>
              <li>
                Extend information on various webinars to member associations for
                participation and enablement.
              </li>
              <li>
                Build a new website and B2B portal for all FAIITA members to enable
                them to sell across the country with new as well as surplus stocks.
              </li>
              <li>
                Enter into tri-party agreements with different states, TAITRA, and
                TCA to promote local manufacturing of computer hardware products,
                which currently hold a mere 4% share of all electronics
                manufacturing verticals.
              </li>
              <li>
                Explore new phenomena and off-shoots of the ICT business.
              </li>
            </ul>
          </div>
        </section>

        <Separator className="my-12" />

        <section>
          <h2 className="text-2xl font-bold text-[#0A2540]">FAIITA Services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FF9933]" />
                <p className="text-muted-foreground">{service}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section>
          <h2 className="text-2xl font-bold text-[#0A2540]">Leadership</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="p-5">
                <p className="font-semibold text-[#0A2540]">President</p>
                <p className="text-lg font-bold">Navin Gupta</p>
                <p className="mt-1 text-sm text-muted-foreground">+91 93347 15522</p>
                <p className="text-sm text-muted-foreground">president@faiita.co.in</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <p className="font-semibold text-[#0A2540]">Sr. Vice President</p>
                <p className="text-lg font-bold">Liju P. Raju</p>
                <p className="mt-1 text-sm text-muted-foreground">+91 93874 2552</p>
                <p className="text-sm text-muted-foreground">sr.vp@faiita.co.in</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        <section>
          <h2 className="text-2xl font-bold text-[#0A2540]">State Coordinators</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b bg-muted">
                <tr>
                  <th className="p-3 font-medium">State</th>
                  <th className="p-3 font-medium">Coordinator</th>
                  <th className="p-3 font-medium">Association</th>
                  <th className="p-3 font-medium">Contact</th>
                </tr>
              </thead>
              <tbody>
                {stateCoordinators.map((coordinator, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{coordinator.state}</td>
                    <td className="p-3 font-medium">{coordinator.name}</td>
                    <td className="p-3 text-muted-foreground">{coordinator.association}</td>
                    <td className="p-3 text-muted-foreground">{coordinator.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
