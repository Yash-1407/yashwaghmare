import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Log the contact form data (in a real app, you might save to a database)
    console.log("🚀 Contact Form Submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! Thank you for reaching out.",
    })
  } catch (error) {
    console.error("❌ Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to submit contact form" }, { status: 500 })
  }
}
