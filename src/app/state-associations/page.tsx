export const dynamic = "force-dynamic";

import { Metadata } from "next";
import { MapPin, Users, Phone, Mail } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "State Associations | FAIITA",
  description: "Find FAIITA state-level IT associations across India.",
};

export default async function StateAssociationsPage() {
  const associations = await prisma.stateAssociation.findMany({
    orderBy: { state: "asc" },
  });

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
        State Associations
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        FAIITA works with state-level IT associations across India to represent
        and empower local IT entrepreneur communities.
      </p>

      {associations.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {associations.map((assoc) => (
            <Card key={assoc.id} className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-[#0A2540]">{assoc.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {assoc.city}, {assoc.state}
                </div>
                {assoc.presidentName && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    President: {assoc.presidentName}
                  </div>
                )}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  {assoc.phone}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  {assoc.email}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-muted-foreground">No state associations available.</p>
      )}
    </div>
  );
}
