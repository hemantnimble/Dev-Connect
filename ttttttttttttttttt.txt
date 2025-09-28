import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const dynamic = "force-dynamic"; // to avoid caching in App Router

export async function POST(req: NextRequest) {
  try {
    const { name, email, hashedPassword } = await req.json();

    // Basic validation
    if (!email || !hashedPassword) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const result = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        // createdAt and updatedAt are handled automatically by Prisma
      },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    // Handle Prisma unique constraint (email)
    if (err.code === "P2002") {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
