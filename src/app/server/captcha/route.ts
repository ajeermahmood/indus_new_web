import axios from "axios";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get("token");
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=6LdhqeInAAAAAGLr9rA8a4Zx0k4K6Ad_1VHxtekV&response=${token}`
  );
  if (res.data.success) {
    return NextResponse.json({ messsage: "success" });
  } else {
    throw new Error("Failed Captcha");
  }
}
