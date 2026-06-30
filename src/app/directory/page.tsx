import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import { DealerDirectoryClient } from "@/components/dealers/dealer-directory-client";
import { DealerDirectorySkeleton } from "@/components/dealers/dealer-directory-skeleton";
import { INDIAN_STATES, PRODUCT_CATEGORIES, BRANDS } from "@/lib/data";

export const metadata = {
  title: "Dealer Directory | FAIITA",
  description:
    "Search and filter 50,000+ IT dealers across India by state, city, product category, and brand.",
};

interface DirectoryPageProps {
  searchParams: Promise<{
    q?: string;
    state?: string;
    city?: string;
    category?: string;
    brand?: string;
    verified?: string;
    premium?: string;
    page?: string;
  }>;
}

export default async function DirectoryPage({ searchParams }: DirectoryPageProps) {
  const params = await searchParams;

  const page = Math.max(1, Number(params.page) || 1);
  const limit = 12;
  const skip = (page - 1) * limit;

  const where: Record<string, unknown> = {
    isActive: true,
  };

  if (params.q) {
    where.OR = [
      { businessName: { contains: params.q, mode: "insensitive" } },
      { city: { contains: params.q, mode: "insensitive" } },
      { state: { contains: params.q, mode: "insensitive" } },
      { brands: { has: params.q } },
    ];
  }

  if (params.state) {
    where.state = params.state;
  }

  if (params.city) {
    where.city = { contains: params.city, mode: "insensitive" };
  }

  if (params.category) {
    where.categories = { has: params.category };
  }

  if (params.brand) {
    where.brands = { has: params.brand };
  }

  if (params.verified === "true") {
    where.verificationStatus = "VERIFIED";
  }

  const orderBy: Record<string, string> =
    params.premium === "true" ? { membershipTier: "desc" } : { createdAt: "desc" };

  const [dealers, total] = await Promise.all([
    prisma.dealer.findMany({
      where,
      orderBy,
      skip,
      take: limit,
    }),
    prisma.dealer.count({ where }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="container mx-auto px-4 py-10 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#0A2540]">
          Dealer Directory
        </h1>
        <p className="mt-2 text-muted-foreground">
          Find verified IT dealers, distributors, and resellers across India.
        </p>
      </div>

      <Suspense fallback={<DealerDirectorySkeleton />}>
        <DealerDirectoryClient
          initialDealers={dealers}
          total={total}
          totalPages={totalPages}
          currentPage={page}
          states={INDIAN_STATES}
          categories={PRODUCT_CATEGORIES}
          brands={BRANDS}
        />
      </Suspense>
    </div>
  );
}
