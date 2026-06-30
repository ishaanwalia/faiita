import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | FAIITA",
  description: "Get in touch with FAIITA for inquiries, partnerships, and membership.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
          Contact FAIITA
        </h1>
        <p className="mt-4 text-muted-foreground">
          Have a question or inquiry? Reach out to us and our team will get back
          to you.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} placeholder="Your message..." />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#0A2540] text-white hover:bg-[#0A2540]/90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Leadership Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A2540]/10">
                    <User className="h-5 w-5 text-[#0A2540]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A2540]">President</p>
                    <p className="text-muted-foreground">Navin Gupta</p>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3.5 w-3.5" />
                      +91 93347 15522
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-3.5 w-3.5" />
                      president@faiita.co.in
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A2540]/10">
                    <User className="h-5 w-5 text-[#0A2540]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A2540]">Sr. Vice President</p>
                    <p className="text-muted-foreground">Liju P. Raju</p>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3.5 w-3.5" />
                      +91 93874 2552
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-3.5 w-3.5" />
                      sr.vp@faiita.co.in
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">FAIITA Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Creating Business Opportunity for Members</li>
                  <li>Supporting Make in India</li>
                  <li>Participating in Digital India</li>
                  <li>Working for Growth of channel Community</li>
                  <li>Creating B2B opportunity</li>
                  <li>Sharing New Technologies</li>
                  <li>Exhibitions and Events</li>
                  <li>Meeting social obligation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
