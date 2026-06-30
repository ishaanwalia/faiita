import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, businessName, phone, city, state } = body;

    if (!email || !password || !businessName || !phone || !city || !state) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: await hashPassword(password),
        role: "DEALER",
      },
    });

    const slug = businessName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 60);

    await prisma.dealer.create({
      data: {
        slug: `${slug}-${user.id.slice(-6)}`,
        userId: user.id,
        businessName,
        address: "",
        city,
        state,
        pincode: "",
        phone,
        email,
        categories: [],
        brands: [],
        verificationStatus: "PENDING",
        membershipTier: "BASIC",
      },
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to register" },
      { status: 500 }
    );
  }
}
