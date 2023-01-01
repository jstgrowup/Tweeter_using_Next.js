import { NextResponse } from "next/server";
import { useSelector } from "react-redux";

export function middleware(req) {
  const url = req.url;
  console.log('url:', url)

  const token = null

  if (!token ) {
    return NextResponse.redirect("http://localhost:3000/signin");
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/"],
};
