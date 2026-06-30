import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminPage() {
  const session = await auth();

  if (session?.user?.role !== "ADMIN") {
    redirect("/login?callbackUrl=/admin");
  }

  const [totalDealers, verifiedDealers, pendingDealers, totalUsers] = await Promise.all([
    prisma.dealer.count(),
    prisma.dealer.count({ where: { verificationStatus: "VERIFIED" } }),
    prisma.dealer.count({ where: { verificationStatus: "PENDING" } }),
    prisma.user.count(),
  ]);

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[#0A2540]">
        Admin Dashboard
      </h1>
      <p className="mt-2 text-muted-foreground">
        Overview of the FAIITA dealer ecosystem.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Total Dealers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#0A2540]">{totalDealers}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Verified Dealers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-emerald-600">{verifiedDealers}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Pending Approval</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-600">{pendingDealers}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#0A2540]">{totalUsers}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
