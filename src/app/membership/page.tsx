import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MEMBERSHIP_TIERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Membership | FAIITA",
  description: "Join FAIITA and choose a membership tier that fits your business needs.",
};

export default function MembershipPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
          FAIITA Membership
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose a membership plan and become part of India&apos;s largest network
          of IT entrepreneurs.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {MEMBERSHIP_TIERS.map((tier) => (
          <Card key={tier.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-[#0A2540]">{tier.name}</CardTitle>
              <p className="text-2xl font-bold">
                {tier.price === 0 ? "Free" : `₹${tier.price.toLocaleString("en-IN")}`}
              </p>
              <p className="text-sm text-muted-foreground">{tier.description}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Link href="/register" className="w-full">
                <Button className="w-full bg-[#FF9933] text-white hover:bg-[#FF9933]/90">
                  Select {tier.name}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
