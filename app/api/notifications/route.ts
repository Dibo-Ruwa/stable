import { NextResponse } from "next/server";
import { connectDB, closeDB } from "@/utils/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/helpers/authOptions";
import Notification from "@/utils/models/Notifications";

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    const body = await req.json();
    const { message, referenceId, category, type } = body;

    const notification = new Notification({
      user: session.user._id,
      message,
      referenceId,
      category,
      type, 
    });

    await notification.save();
    console.log("Notification created successfully");

    return NextResponse.json({ notification, success: true });
  } catch (err) {
    console.error("Error creating notification:", err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}

// GET route to retrieve notifications
export async function GET(req: Request, res: Response) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    // Fetch notifications with all required fields
    const notifications = await Notification.find({ user: session.user._id })
      .select("user message read createdAt referenceId category type") // Explicitly select fields
      .sort({ createdAt: -1 });

    console.log("Notifications retrieved successfully");

    return NextResponse.json({ notifications, success: true });
  } catch (err) {
    console.error("Error retrieving notifications:", err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}

// PUT route to update notification as read
export async function PUT(req: Request, res: Response) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    const body = await req.json();
    const { notificationId, read } = body;

    const notification = await Notification.findById(notificationId);
    if (!notification) {
      return NextResponse.json({ message: "Notification not found" }, { status: 404 });
    }

    notification.read = read;
    await notification.save();
    console.log("Notification marked as read successfully");

    return NextResponse.json({ notification, success: true });
  } catch (err) {
    console.error("Error marking notification as read:", err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
