import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/helpers/authOptions";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    // Debug logs
    console.log('Session in validate API:', session);
    console.log('User in session:', session?.user);

    if (!session?.user?._id) {
      console.error('No user ID in session:', session);
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }

    const requestData = await req.json();
    
    // Add user data from session
    const validationData = {
      ...requestData,
      userId: session.user._id,
      userEmail: session.user.email,
      user: session.user // Include full user object
    };

    console.log('Sending validation request:', validationData);

    const response = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/api/coupon/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validationData)
    });

    const data = await response.json();
    console.log('Admin API response:', data);

    return NextResponse.json(data);

  } catch (error) {
    console.error('Validation error:', error);
    return NextResponse.json(
      { success: false, error: "Failed to validate coupon" },
      { status: 500 }
    );
  }
}
