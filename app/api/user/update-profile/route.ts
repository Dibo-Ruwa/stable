import { closeDB, connectDB } from "@/utils/db";
import User from "@/utils/models/Users";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, res: Response) {
  try {
    await connectDB();

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();
    const { userId, userProfile } = body;
    // Check if user already exists
    const userExists = await User.findById(userId);

    if (!userExists) {
      return new Response("User not found", { status: 400 });
    }

    const updatedProfile = await User.findByIdAndUpdate(
      userId,
      {...userProfile},
      {
        new: true,
        runValidate: true,
      }
    );

    if (!updatedProfile) {
      return new Response("User not found", { status: 400 });
    }

    return NextResponse.json(
      {
        updatedProfile,
        success: true,
        message: "Profile updated Successfully",
      },
      { status: 201 }
    );
   
  } catch (err) {
    return  NextResponse.json(err);
  } finally {
    await closeDB();
  }
}
