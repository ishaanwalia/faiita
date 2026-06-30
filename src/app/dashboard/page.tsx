export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login?callbackUrl=/dashboard");
  }

  const dealer = await prisma.dealer.findUnique({
    where: { userId: session.user.id },
  });

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[#0A2540]">
        Dealer Dashboard
      </h1>
      <p className="mt-2 text-muted-foreground">
        Welcome back, {session.user.name || session.user.email}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Profile Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {dealer
                ? `Your profile is ${dealer.verificationStatus.toLowerCase()}.`
                : "Complete your dealer profile."}
            </p>
            <Link href={dealer ? `/directory/${dealer.slug}` : "/register"} className="mt-4 w-full">
              <Button variant="outline" className="w-full">
                {dealer ? "View Profile" : "Complete Profile"}
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Membership</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Current tier:{" "}
              <span className="font-medium text-[#0A2540]">
                {dealer?.membershipTier || "Basic"}
              </span>
            </p>
            <Link href="/membership" className="mt-4 w-full">
              <Button variant="outline" className="w-full">Upgrade Membership</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              View contact leads from potential customers.
            </p>
            <Link href="#" className="mt-4 w-full">
              <Button variant="outline" className="w-full">View Leads</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
