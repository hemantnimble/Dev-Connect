import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

// Helper to validate MongoDB ObjectId
const isValidObjectId = (id: string) => /^[0-9a-fA-F]{24}$/.test(id);

// -------------------- CREATE --------------------
export async function POST(req: NextRequest) {
  try {
    const { title, price, category, stock, images } = await req.json();

    if (!title || !price || !category || !stock || !images) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const priceFloat = parseFloat(price);
    const stockInt = parseInt(stock, 10);

    if (isNaN(priceFloat) || isNaN(stockInt)) {
      return NextResponse.json(
        { message: "Invalid price or stock value" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        title,
        price: priceFloat,
        category,
        stock: stockInt,
        images,
      },
    });

    return NextResponse.json(product, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// -------------------- READ --------------------
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      if (!isValidObjectId(id)) {
        return NextResponse.json({ message: "Invalid product id" }, { status: 400 });
      }
      const product = await prisma.product.findUnique({ where: { id } });
      if (!product) {
        return NextResponse.json({ message: "Product not found" }, { status: 404 });
      }
      return NextResponse.json(product, { status: 200 });
    }

    const products = await prisma.product.findMany();
    return NextResponse.json(products, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// -------------------- UPDATE --------------------
export async function PATCH(req: NextRequest) {
  try {
    const { id, title, price, category, stock, images } = await req.json();

    if (!id || !isValidObjectId(id)) {
      return NextResponse.json({ message: "Invalid or missing product id" }, { status: 400 });
    }

    const updateData: any = {};
    if (title) updateData.title = title;
    if (price !== undefined) {
      const priceFloat = parseFloat(price);
      if (isNaN(priceFloat))
        return NextResponse.json({ message: "Invalid price" }, { status: 400 });
      updateData.price = priceFloat;
    }
    if (category) updateData.category = category;
    if (stock !== undefined) {
      const stockInt = parseInt(stock, 10);
      if (isNaN(stockInt))
        return NextResponse.json({ message: "Invalid stock" }, { status: 400 });
      updateData.stock = stockInt;
    }
    if (images) updateData.images = images;

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// -------------------- DELETE --------------------
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id || !isValidObjectId(id)) {
      return NextResponse.json({ message: "Invalid or missing product id" }, { status: 400 });
    }

    await prisma.product.delete({ where: { id } });

    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
