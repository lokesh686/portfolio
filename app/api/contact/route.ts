import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Here you can:
    // 1. Send an email using a service like SendGrid, Mailgun, or Resend
    // 2. Store the message in a database
    // 3. Send a notification to yourself

    // Example: Log the message (replace with actual email sending)
    console.log("Contact form submission:", validatedData);

    // For now, we'll just return a success response
    // In production, integrate with an email service
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to process your request",
          error: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
