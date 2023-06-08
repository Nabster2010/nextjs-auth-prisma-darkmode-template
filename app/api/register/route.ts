import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

import { db } from "@/lib/db";

export async function POST(req: Request) {
  console.log("route");
  try {
    const { name, email, password } = (await req.json()) as {
      name: string;
      email: string;
      password: string;
    };
    const hashed_password = await hash(password, 12);

    const user = await db.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashed_password,
        role: "user",
        active: false,
      },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        active: user.active,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
