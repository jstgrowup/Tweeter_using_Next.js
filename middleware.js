import { NextResponse } from "next/server";
export default function middleware(req) {
  let verify = req.cookies.get("loggedin");

  if (!verify) {
    return NextResponse.redirect("http://localhost:3000/signin");
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/"],
};
