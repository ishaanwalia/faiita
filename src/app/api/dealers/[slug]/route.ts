import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params;
    const dealer = await prisma.dealer.findUnique({
      where: { slug, isActive: true },
      include: {
        reviews: { where: { isApproved: true }, orderBy: { createdAt: "desc" } },
      },
    });

    if (!dealer) {
      return NextResponse.json({ error: "Dealer not found" }, { status: 404 });
    }

    return NextResponse.json(dealer);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch dealer" },
      { status: 500 }
    );
  }
}
