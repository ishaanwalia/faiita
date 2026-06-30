import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const limit = Math.min(50, Number(searchParams.get("limit")) || 12);
    const skip = (page - 1) * limit;

    const q = searchParams.get("q");
    const state = searchParams.get("state");
    const city = searchParams.get("city");
    const category = searchParams.get("category");
    const brand = searchParams.get("brand");
    const verified = searchParams.get("verified");
    const premium = searchParams.get("premium");

    const where: Record<string, unknown> = { isActive: true };

    if (q) {
      where.OR = [
        { businessName: { contains: q, mode: "insensitive" } },
        { city: { contains: q, mode: "insensitive" } },
        { state: { contains: q, mode: "insensitive" } },
        { brands: { has: q } },
      ];
    }

    if (state) where.state = state;
    if (city) where.city = { contains: city, mode: "insensitive" };
    if (category) where.categories = { has: category };
    if (brand) where.brands = { has: brand };
    if (verified === "true") where.verificationStatus = "VERIFIED";

    const orderBy: Record<string, string> =
      premium === "true" ? { membershipTier: "desc" } : { createdAt: "desc" };

    const [dealers, total] = await Promise.all([
      prisma.dealer.findMany({ where, orderBy, skip, take: limit }),
      prisma.dealer.count({ where }),
    ]);

    return NextResponse.json({ dealers, total, page, totalPages: Math.ceil(total / limit) });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch dealers" },
      { status: 500 }
    );
  }
}
